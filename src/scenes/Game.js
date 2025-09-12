import Phaser from 'phaser';
import Chest from '../entities/Chest';
import Safe from '../entities/Safe';
import Door from '../entities/Door';
import Sign from '../entities/Sign';
import Item from '../entities/Item';
import ScrambledSign from '../entities/ScrambledSign';
import ImageSign from '../entities/ImageSign';
import InteractiveZone from '../entities/InteractiveZone';
import { CustomProperty, TilemapLayer, EntityType, LoaderKey, Tile, Animation, Frame, TileAction, Direction } from '../constants';

const TRANSITION_DELAY = 500;

export default class GameScene extends Phaser.Scene {
	signs = [];
	scrambledSigns = [];
	door = null;
	chests = [];
	tileMap = null;
	safes = [];
	items = [];
	selectedItem = null;
	selectedRectangle = null;

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
		for (let i = 0; i < this.items.length; i++) {
			const image = this.add.image(950, i * 50 + 80, this.items[i].texture, this.items[i].frame);
			image.setScale(2);
			image.setInteractive();
			image.on('pointerdown', () => {
				if (this.selectedRectangle) {
					this.selectedRectangle.destroy();
				}
				this.selectedItem = this.items[i];
				this.selectedRectangle = this.add.rectangle(image.x, image.y, 50, 50);
				this.selectedRectangle.setStrokeStyle(3, 0xffffff);
			});
		}
	}

	loadRoom(roomKey) {
		this.cameras.main.fadeIn(TRANSITION_DELAY, 0, 0, 0);
		this.tileMap = this.createTileMap(roomKey);
		const tileSet = this.createTileSet(this.tileMap, 'castle-tiles', LoaderKey.TILESET);
		const { objectsLayer, foregroundLayer } = this.getTileMapLayers(this.tileMap, tileSet);
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

	getTileMapLayers(tilemap, tileset) {
		const backgroundLayer = tilemap.createLayer(TilemapLayer.BACKGROUND, tileset);
		const foregroundLayer = tilemap.createLayer(TilemapLayer.FOREGROUND, tileset);
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
				case EntityType.SCRAMBLED_SIGN:
					this.scrambledSigns.push(this.createScrambledSign(tileMapObjects[i]));
					break;
				case EntityType.SIGN:
					this.signs.push(this.createSign(tileMapObjects[i]));
					break;
				case EntityType.IMAGE_SIGN:
					this.createImageSign(tileMapObjects[i]);
			}
		}
	}

	createInteractiveZone(tileMapObject) {
		const zone = new InteractiveZone(this, tileMapObject.x, tileMapObject.y, tileMapObject.width, tileMapObject.height);
		zone.setVelocity(this.getCustomProperty(tileMapObject, CustomProperty.VELOCITY));
		zone.setDirection(this.getCustomProperty(tileMapObject, CustomProperty.DIRECTION));
		zone.setAction(this.getCustomProperty(tileMapObject, CustomProperty.ACTION));
		zone.setNewTiles(
			this.getCustomProperty(tileMapObject, CustomProperty.NEW_TILES)
				?.split(',')
				.map((s) => parseInt(s))
		);
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, CustomProperty.NAVIGATE_TO));
		const itemName = this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_NAME);
		if (itemName) {
			zone.setSpawnItem(
				new Item(
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_DESCRIPTION),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_FRAME)
				)
			);
		}
	}

	createImageSign(tileMapObject) {
		const imageSign = new ImageSign(this, tileMapObject.x, tileMapObject.y, tileMapObject.width, tileMapObject.height);
		imageSign.setImageKey(this.getCustomProperty(tileMapObject, CustomProperty.IMAGE_KEY));
		imageSign.on('pointerdown', () => {
			this.showTextModal('Test text', 'large');
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
		const itemName = this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_NAME);
		if (itemName) {
			safe.setSpawnItem(
				new Item(
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_DESCRIPTION),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_FRAME)
				)
			);
		}
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
				this.showTextModal(door.getLockedMessage());
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
		const itemName = this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_NAME);
		if (itemName) {
			chest.setSpawnItem(
				new Item(
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_DESCRIPTION),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(tileMapObject, CustomProperty.SPAWN_ITEM_FRAME)
				)
			);
		}
		chest.on('pointerdown', () => {
			if (chest.isLocked()) {
				this.showTextModal(chest.lockedMessage);
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

	createScrambledSign(spawnObject) {
		const sign = new ScrambledSign(
			this,
			spawnObject.x,
			spawnObject.y,
			spawnObject.name,
			this.getCustomProperty(spawnObject, CustomProperty.TEXT),
			this.getCustomProperty(spawnObject, CustomProperty.VISIBLE),
			this.getCustomProperty(spawnObject, CustomProperty.SCRAMBLED),
			this.getCustomProperty(spawnObject, CustomProperty.SCRAMBLED_TEXT)
		);
		sign.on('pointerdown', () => {
			if (sign.isVisible()) {
				if (sign.isScrambled()) {
					this.showTextModal(sign.getScrambledText());
				} else {
					this.showTextModal(sign.getText());
				}
			}
		});
		return sign;
	}

	createSign(spawnObject) {
		const sign = new Sign(
			this,
			spawnObject.x,
			spawnObject.y,
			spawnObject.name,
			this.getCustomProperty(spawnObject, CustomProperty.TEXT),
			this.getCustomProperty(spawnObject, CustomProperty.VISIBLE)
		);
		sign.on('pointerdown', () => {
			if (sign.isVisible()) {
				this.showTextModal(sign.getText());
			}
		});
		return sign;
	}

	scrambleDialogs(scrambled) {
		if (this.scrambleSigns) {
			this.scrambledSigns.forEach((dialog) => dialog.setScrambled(scrambled));
		}
	}

	showItemModal(itemDescription, itemTexture, itemFrame, closeCallback) {
		const blocker = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = this.add.container(450, 350);

		const box = this.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
		const closeText = this.add
			.text(155, -69, 'Close X', {
				fontSize: '16px',
				fontFamily: 'verdana',
				fill: '#FFFFFF'
			})
			.setInteractive();

		const itemImage = this.add.image(0, -10, itemTexture, itemFrame).setScale(2.5);
		const itemDescriptionText = this.add
			.text(0, 30, itemDescription, {
				fontSize: '16px',
				fontFamily: 'verdana',
				fill: '#FFFFFF'
			})
			.setOrigin(0.5);

		closeText.on('pointerdown', () => {
			blocker.destroy();
			modal.destroy();
			if (closeCallback) {
				closeCallback();
			}
		});

		modal.add([box, itemImage, itemDescriptionText, closeText]);
	}

	showImageModal(imageKey, closeCallback) {
		const blocker = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = this.add.container(450, 350);
		const box = this.add.rectangle(0, 0, 450, 350, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
		const image = this.add.image(0, 0, imageKey).setOrigin(0.5);
		image.setDisplaySize(box.width - 60, box.height - 60);

		const closeText = this.add
			.text(155, -169, 'Close X', {
				fontSize: '16px',
				fontFamily: 'verdana',
				fill: '#FFFFFF'
			})
			.setInteractive();

		closeText.on('pointerdown', () => {
			blocker.destroy();
			modal.destroy();
			if (closeCallback) {
				closeCallback();
			}
		});

		modal.add([box, image, closeText]);
	}

	showTextModal(text, size = 'normal', closeCallback) {
		const blocker = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = this.add.container(450, 350);
		let box = null;
		let closeText = null;

		switch (size) {
			case 'normal':
				box = this.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
				closeText = this.add
					.text(155, -69, 'Close X', {
						fontSize: '16px',
						fontFamily: 'verdana',
						fill: '#FFFFFF'
					})
					.setInteractive();
				break;
			case 'large':
				closeText = this.add
					.text(155, -169, 'Close X', {
						fontSize: '16px',
						fontFamily: 'verdana',
						fill: '#FFFFFF'
					})
					.setInteractive();
				box = this.add.rectangle(0, 0, 450, 350, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
				break;
		}
		const textObj = this.add
			.text(0, 0, text, {
				wordWrap: {
					width: 400
				},
				fontSize: '16px',
				fontFamily: 'verdana',
				fill: '#FFFFFF'
			})
			.setOrigin(0.5);

		closeText.on('pointerdown', () => {
			blocker.destroy();
			modal.destroy();
			if (closeCallback) {
				closeCallback();
			}
		});

		modal.add([box, textObj, closeText]);
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
		const image = this.add.image(x, y, item.getTexture(), item.getFrame());
		image.setScale(2);
		image.setInteractive();
		image.on('pointerdown', () => {
			image.destroy();
			this.showItemModal(item.getDescription(), item.getTexture(), item.getFrame(), () => {
				this.items.push({
					name: item.getName(),
					texture: item.getTexture(),
					frame: item.getFrame()
				});
				this.updateHud();
			});
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
				color: 0xffffff
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
