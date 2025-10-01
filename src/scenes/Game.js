import Phaser from 'phaser';
import Chest from '../entities/Chest';
import Safe from '../entities/Safe';
import Door from '../entities/Door';
import InteractiveZone from '../entities/InteractiveZone';
import ModalUtils from '../utils/ModalUtils';

import { CustomProperty, TilemapLayer, EntityType, LoaderKey, Animation } from '../constants';

const TRANSITION_DELAY = 500;

export default class GameScene extends Phaser.Scene {
	signs = [];
	scrambledSigns = [];
	door = null;
	chests = [];
	tileMap = null;
	safes = [];
	items = [];
	itemImages = [];
	selectedItem = null;
	selectedRectangle = null;
	roomName = null;

	constructor() {
		super('game');
	}

	create() {
		this.loadRoom('room-one');
		this.createAnimations();
		this.createHud();
		this.startTimer(1);
	}

	createHud() {
		const text = this.add.text(920, 20, 'Items', { fontSize: '20px', fontFamily: 'Verdana' });
	}

	updateHud() {
		if (this.selectedRectangle && !this.selectedItem) {
			this.selectedRectangle.destroy();
		}
		if (this.itemImages) {
			for (let i = 0; i < this.itemImages.length; i++) {
				this.itemImages[i].destroy();
			}
		}
		for (let i = 0; i < this.items.length; i++) {
			const itemImage = this.add.image(950, i * 50 + 80, this.items[i].textureKey, this.items[i].textureFrame);
			itemImage.setAlpha(0);
			itemImage.setScale(2);
			itemImage.setInteractive();
			itemImage.on('pointerdown', () => {
				if (this.selectedRectangle) {
					this.selectedRectangle.destroy();
				}
				this.selectedItem = this.items[i];
				this.selectedRectangle = this.add.rectangle(itemImage.x, itemImage.y, 50, 50);
				this.selectedRectangle.setStrokeStyle(3, 0xffffff);
			});
			this.tweens.add({
				targets: itemImage,
				alpha: 1,
				ease: 'Linear',
				duration: 200,
				repeat: 0,
				yoyo: false
			});
			this.itemImages.push(itemImage);
		}
	}

	loadRoom(roomName) {
		this.roomName = roomName;
		this.cameras.main.fadeIn(TRANSITION_DELAY, 0, 0, 0);
		this.tileMap = this.createTileMap(roomName);
		const castleTiles = this.createTileSet(this.tileMap, 'castle-tiles', 'castle-tiles');
		const creepyTiles = this.createTileSet(this.tileMap, 'creepy-tiles', 'creepy-tiles');
		const { objectsLayer, foregroundLayer } = this.getTileMapLayers(this.tileMap, [creepyTiles, castleTiles]);
		this.loadTileMapObjects(objectsLayer);
	}

	reloadRoom(roomKey) {
		this.cameras.main.fadeOut(TRANSITION_DELAY, 0, 0, 0, (camera, progress) => {
			if (progress === 1) {
				this.loadRoom(roomKey);
			}
		});
	}

	createTileMap(tileMapKey) {
		return this.make.tilemap({ key: tileMapKey });
	}

	createTileSet(tileMap, tileSetKey, tileSetTextureKey) {
		return tileMap.addTilesetImage(tileSetKey, tileSetTextureKey);
	}

	getTileMapLayers(tilemap, tilesets) {
		const backgroundLayer = tilemap.createLayer(TilemapLayer.BACKGROUND, tilesets);
		const foregroundLayer = tilemap.createLayer(TilemapLayer.FOREGROUND, tilesets);
		const objectsLayer = tilemap.getObjectLayer(TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	loadTileMapObjects(objectsLayer) {
		const tileMapObjects = objectsLayer.objects;
		for (let i = 0, len = tileMapObjects.length; i < len; i++) {
			switch (tileMapObjects[i].type) {
				case EntityType.INTERACTIVE_ZONE:
					this.createInteractiveZone(tileMapObjects[i]);
					break;
				case EntityType.CHEST:
					this.chests.push(this.createChest(tileMapObjects[i]));
					break;
				case EntityType.SAFE:
					this.safes.push(this.createSafe(tileMapObjects[i]));
					break;
				case EntityType.DOOR:
					this.door = this.createDoor(tileMapObjects[i]);
					break;
			}
		}
	}

	createInteractiveZone(tileMapObject) {
		const zone = new InteractiveZone(this, tileMapObject.x, tileMapObject.y, tileMapObject.width, tileMapObject.height);
		zone.setAction(this.getCustomProperty(tileMapObject, CustomProperty.ACTION));
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, CustomProperty.NAVIGATE_TO));
		zone.setItemRequired(this.getCustomProperty(tileMapObject, CustomProperty.ITEM_REQUIRED));
		zone.setItemRequiredMessage(this.getCustomProperty(tileMapObject, CustomProperty.ITEM_REQUIRED_MESSAGE));
		zone.setItemRequiredMessageVisible(this.getCustomProperty(tileMapObject, CustomProperty.ITEM_REQUIRED_MESSAGE_VISIBLE));
		zone.setSpawnItem(this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM));
		zone.on('pointerdown', () => {
			zone.executeAction(this.selectedItem, (itemUsed) => {
				if (itemUsed) {
					const index = this.items.findIndex((item) => item?.name === this.selectedItem?.name);
					this.items.splice(index, 1);
					this.selectedItem = null;
					this.updateHud();
				}
			});
		});
	}

	createSafe(tileMapObject) {
		const safe = new Safe(
			this,
			tileMapObject.x,
			tileMapObject.y,
			LoaderKey.SAFE,
			12,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, CustomProperty.COMBINATION),
			this.getCustomProperty(tileMapObject, CustomProperty.PROMPT_MESSAGE)
		);
		safe.setSpawnItem(this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM));
		safe.on('pointerdown', () => {
			if (!safe.isOpened()) {
				const answer = window.prompt(safe.getPromptMessage());
				if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
					safe.play(Animation.SAFE_OPEN);
					safe.setOpened(true);
					this.spawnItem(safe.x, safe.y + safe.height, safe.getSpawnItem());
				}
			}
		});
		return safe;
	}

	createDoor(tileMapObject) {
		const door = new Door(
			this,
			tileMapObject.x,
			tileMapObject.y,
			LoaderKey.DOOR,
			10,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				ModalUtils.showTextModal(this, door.getLockedMessage());
			} else {
				door.play(Animation.DOOR_OPEN);
				door.setOpened(true);
			}
		});
		return door;
	}

	createChest(tileMapObject) {
		const chest = new Chest(
			this,
			tileMapObject.x,
			tileMapObject.y,
			LoaderKey.CHEST,
			null,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, CustomProperty.LOCKED_MESSAGE)
		);
		chest.setSpawnItem(this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM));
		chest.on('pointerdown', () => {
			if (chest.isLocked()) {
				ModalUtils.showTextModal(this, chest.lockedMessage);
			} else {
				if (!chest.isOpened()) {
					chest.play(Animation.CHEST_OPEN);
					chest.setOpened(true);
					this.spawnItem(chest.x, chest.y + chest.height + 5, chest.getSpawnItem());
				}
			}
		});
		return chest;
	}

	createAnimations() {
		this.createAnimation(Animation.SAFE_OPEN, LoaderKey.SAFE, [13], 4);
		this.createAnimation(Animation.DOOR_OPEN, LoaderKey.DOOR, [5, 0], 4);
		this.createAnimation(Animation.CHEST_OPEN, LoaderKey.CHEST, [1], 8, -1);
	}

	createAnimation(key, texture, frames, frameRate, repeat) {
		this.anims.create({
			key,
			frames: this.anims.generateFrameNumbers(texture, { frames }),
			frameRate,
			repeat
		});
	}

	getCustomProperty(spawnObject, name) {
		let property = null;
		if (spawnObject) {
			property = spawnObject.properties.find((property) => property.name === name);
		}
		return property?.value;
	}

	getDialog(dialogs, name) {
		return dialogs.find((dialog) => dialog.name == name);
	}

	spawnItem(x, y, item) {
		const image = this.add.image(x, y, item.textureKey, item.textureFrame);
		image.setScale(2);
		image.setAlpha(0);
		image.setInteractive();
		image.on('pointerdown', () => {
			image.destroy();
			ModalUtils.showItemModal(this, item.description, item.textureKey, item.textureFrame, () => {
				this.items.push({
					name: item.name,
					textureKey: item.textureKey,
					textureFrame: item.textureFrame
				});
				this.updateHud();
			});
		});
		this.tweens.add({
			targets: image,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});
	}

	isItemSelected(name) {
		return this.selectedItem?.name === name;
	}

	startTimer(numberOfHours) {
		if (!this.isRunning) {
			const now = new Date().getTime();
			this.countDownDate = new Date(now + numberOfHours * 60 * 60 * 1000).getTime();
			this.isRunning = false;
			this.isTimeElapsed = false;
			this.interval = setInterval(() => {
				this.isRunning = true;
				const now = new Date().getTime();
				this.timeRemaining = this.countDownDate - now;
				if (now >= this.countDownDate) {
					this.isRunning = false;
					this.isTimeElapsed = true;
					clearInterval(this.interval);
				}
			}, 1000);
		}
	}

	updateTime() {
		if (this.timeText) {
			this.timeText.destroy();
		}
		const hoursRemaining = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutesRemaining = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const secondsRemaining = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
		if (this.timeRemaining) {
			this.timeText = this.add.text(915, 730, `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`, {
				fontSize: '12px',
				fontFamily: 'Verdana',
				fill: '#FFFFFF'
			});
		}
	}

	update() {
		this.updateTime();
		switch (this.roomName) {
			case 'room-one':
				break;
			case 'room-two':
		}
		if (this.isTimeElapsed) {
			this.scene.start('gameover');
		}
	}
}
