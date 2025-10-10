import Phaser from 'phaser';
import Chest from '../entities/Chest';
import Safe from '../entities/Safe';
import Door from '../entities/Door';
import InteractiveZone from '../entities/InteractiveZone';
import { showTextModal, showItemModal } from '../utils/ModalUtils';
import { assert } from '../utils/AssertUtils';

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
	dirtyObjectMap = null;

	constructor() {
		super('game');
	}

	create() {
		this.loadRoom('room-two');
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
		assert(!roomName, 'The roomName is undefined');
		this.roomName = roomName;
		this.dirtyObjectMap = new Map();
		this.cameras.main.fadeIn(TRANSITION_DELAY, 0, 0, 0);
		this.tileMap = this.createTileMap(roomName);
		const castleTiles = this.createTileSet(this.tileMap, 'castle-tiles', 'castle-tiles');
		const creepyTiles = this.createTileSet(this.tileMap, 'creepy-tiles', 'creepy-tiles');
		const { objectsLayer, foregroundLayer } = this.getTileMapLayers(this.tileMap, [creepyTiles, castleTiles]);
		this.loadTileMapObjects(objectsLayer);
	}

	reloadRoom(roomKey) {
		assert(!roomKey, 'The roomKey is undefined');
		this.cameras.main.fadeOut(TRANSITION_DELAY, 0, 0, 0, (camera, progress) => {
			if (progress === 1) {
				this.loadRoom(roomKey);
			}
		});
	}

	createTileMap(tileMapKey) {
		assert(!tileMapKey, 'The tileMapKey is undefined');
		return this.make.tilemap({ key: tileMapKey });
	}

	createTileSet(tileMap, tileSetKey, tileSetTextureKey) {
		assert(!tileMap, 'The tileMap is undefined');
		assert(!tileSetKey, 'The tileSetKey is undefined');
		assert(!tileSetTextureKey, 'The tileSetTextureKey is undefined');
		return tileMap.addTilesetImage(tileSetKey, tileSetTextureKey);
	}

	getTileMapLayers(tileMap, tileSets) {
		assert(!tileMap, 'The tileMap is undefined');
		assert(!tileSets, 'The tileSets is undefined');
		const backgroundLayer = tileMap.createLayer(TilemapLayer.BACKGROUND, tileSets);
		const foregroundLayer = tileMap.createLayer(TilemapLayer.FOREGROUND, tileSets);
		const objectsLayer = tileMap.getObjectLayer(TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	loadTileMapObjects(objectsLayer) {
		assert(!objectsLayer, 'The objectsLayer is undefined');
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
		assert(!tileMapObject, 'The tileMapObject is undefined');
		const zone = new InteractiveZone(
			this,
			tileMapObject.name,
			tileMapObject.x,
			tileMapObject.y,
			tileMapObject.width,
			tileMapObject.height
		);
		zone.setAction(this.getCustomProperty(tileMapObject, CustomProperty.ACTION));
		zone.setConstraints(this.getCustomProperty(tileMapObject, CustomProperty.CONSTRAINTS));
		zone.setConstraintMessage(this.getCustomProperty(tileMapObject, CustomProperty.CONSTRAINT_MESSAGE));
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, CustomProperty.NAVIGATE_TO));
		zone.setSpawnItem(this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM));

		const events = this.getCustomProperty(tileMapObject, CustomProperty.EVENTS);

		if (events) {
			const { listenTo, emit } = this.getCustomProperty(tileMapObject, CustomProperty.EVENTS);

			if (listenTo) {
				this.events.on(listenTo, () => {
					zone.executeAction(this.selectedItem, this.dirtyObjectMap);
				});
			} else {
				zone.on('pointerdown', () => {
					zone.executeAction(this.selectedItem, this.dirtyObjectMap, (itemUsed) => {
						if (itemUsed) {
							const index = this.items.findIndex((item) => item?.name === this.selectedItem?.name);
							this.items.splice(index, 1);
							this.selectedItem = null;
							this.updateHud();
						}
						if (zone.isDirty()) {
							this.dirtyObjectMap.set(zone.name, zone);
						} else {
							this.dirtyObjectMap.delete(zone.name);
						}
						if (emit) {
							this.events.emit(emit);
						}
					});
				});
			}
		} else {
			zone.on('pointerdown', () => {
				zone.executeAction(this.selectedItem, this.dirtyObjectMap, (itemUsed) => {
					if (itemUsed) {
						const index = this.items.findIndex((item) => item?.name === this.selectedItem?.name);
						this.items.splice(index, 1);
						this.selectedItem = null;
						this.updateHud();
					}
					if (zone.isDirty()) {
						this.dirtyObjectMap.set(zone.name, zone);
					} else {
						this.dirtyObjectMap.delete(zone.name);
					}
				});
			});
		}
	}

	createSafe(tileMapObject) {
		assert(!tileMapObject, 'The tileMapObject is undefined');
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
					this.dirtyObjectMap.set(safe.name, safe);
				}
			}
		});
		return safe;
	}

	createDoor(tileMapObject) {
		assert(!tileMapObject, 'The tileMapObject is undefined');
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
				showTextModal(this, door.getLockedMessage());
			} else {
				door.play(Animation.DOOR_OPEN);
				door.setOpened(true);
				this.dirtyObjectMap.set(door.name, door);
			}
		});
		return door;
	}

	createChest(tileMapObject) {
		assert(!tileMapObject, 'The tileMapObject is undefined');
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
				showTextModal(this, chest.lockedMessage);
			} else {
				if (!chest.isOpened()) {
					chest.play(Animation.CHEST_OPEN);
					chest.setOpened(true);
					this.spawnItem(chest.x, chest.y + chest.height + 5, chest.getSpawnItem());
					this.dirtyObjectMap.set(chest.name, chest);
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
		assert(!spawnObject, 'The spawnObject is undefined');
		assert(!name, 'The name is undefined');
		let property = null;
		if (spawnObject) {
			property = spawnObject.properties.find((property) => property.name === name);
		}
		return property?.value;
	}

	spawnItem(x, y, item) {
		assert(!x, 'The x is undefined');
		assert(!y, 'The y is undefined');
		assert(!item, 'The item is undefined');
		const itemImage = this.add.image(x, y, item.textureKey, item.textureFrame);
		itemImage.setScale(2);
		itemImage.setAlpha(0);
		itemImage.setInteractive();
		itemImage.on('pointerdown', () => {
			itemImage.destroy();
			showItemModal(this, item.description, item.textureKey, item.textureFrame, () => {
				this.items.push({
					name: item.name,
					textureKey: item.textureKey,
					textureFrame: item.textureFrame
				});
				this.updateHud();
			});
		});
		this.tweens.add({
			targets: itemImage,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});
	}

	isItemSelected(name) {
		assert(!name, 'The name is undefined');
		return this.selectedItem?.name === name;
	}

	startTimer(numberOfHours) {
		assert(!numberOfHours, 'The numberOfHours is undefined');
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
		if (this.isTimeElapsed) {
			this.scene.start('gameover');
		}
	}
}
