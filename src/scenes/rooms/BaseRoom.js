import Phaser from 'phaser';
import Chest from '../../entities/Chest';
import Safe from '../../entities/Safe';
import Door from '../../entities/Door';
import Sign from '../../entities/Sign';
import Item from '../../entities/Item';
import ScrambledSign from '../../entities/ScrambledSign';
import InteractiveZone from '../../entities/InteractiveZone';
import { CustomProperty, TilemapLayer, EntityType, LoaderKey, Tile, Animation, Frame, TileAction, Direction } from '../../constants';

export default class BaseRoomScene extends Phaser.Scene {
	signs = [];
	scrambledSigns = [];
	door = null;
	chests = [];
	tileMap = null;
	safes = [];
	items = [];
	selectedItem = null;
	selectedRectangle = null;
	dialogGroup = null;

	create(roomKey) {
		this.loadRoom(roomKey);
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
		this.tileMap = this.createTileMap(roomKey);
		const tileSet = this.createTileSet(this.tileMap, 'castle-tiles', LoaderKey.TILESET);
		const { objectsLayer, foregroundLayer } = this.getTileMapLayers(this.tileMap, tileSet);
		this.loadTileMapObjects(objectsLayer);
		this.createAnimations();
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

	createSafe(spawnObject) {
		const safe = new Safe(
			this,
			spawnObject.x,
			spawnObject.y,
			LoaderKey.SAFE,
			12,
			spawnObject.name,
			this.getCustomProperty(spawnObject, CustomProperty.COMBINATION),
			this.getCustomProperty(spawnObject, CustomProperty.PROMPT_MESSAGE),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_NAME),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_TEXTURE),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_FRAME),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_DESCRIPTION)
		);
		safe.on('pointerdown', () => {
			if (!safe.isOpened()) {
				const answer = window.prompt(safe.getPromptMessage());
				if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
					safe.play(Animation.SAFE_OPEN);
					safe.setOpened(true);
					this.spawnItem(
						safe.x,
						safe.y + safe.height,
						safe.getSpawnItemName(),
						safe.getSpawnItemTexture(),
						safe.getSpawnItemFrame(),
						safe.getSpawnItemDescription()
					);
				}
			}
		});
		return safe;
	}

	createDoor(spawnObject) {
		const door = new Door(
			this,
			spawnObject.x,
			spawnObject.y,
			LoaderKey.DOOR,
			10,
			spawnObject.name,
			this.getCustomProperty(spawnObject, CustomProperty.LOCKED),
			this.getCustomProperty(spawnObject, CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				this.showDialog(door.getLockedMessage());
			} else {
				door.play(Animation.DOOR_OPEN);
				door.setOpened(true);
				this.showDialog('Mouahahah you thought the game was over? Try to find the real escape route now!');
			}
		});
		return door;
	}

	createChest(spawnObject) {
		const chest = new Chest(
			this,
			spawnObject.x,
			spawnObject.y,
			LoaderKey.CHEST,
			null,
			spawnObject.name,
			this.getCustomProperty(spawnObject, CustomProperty.LOCKED),
			this.getCustomProperty(spawnObject, CustomProperty.LOCKED_MESSAGE),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_NAME),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_TEXTURE),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_FRAME),
			this.getCustomProperty(spawnObject, CustomProperty.SPAWN_ITEM_DESCRIPTION)
		);
		chest.on('pointerdown', () => {
			if (chest.isLocked()) {
				this.showDialog(chest.lockedMessage);
			} else {
				if (!chest.isOpened()) {
					chest.play(Animation.CHEST_OPEN);
					chest.setOpened(true);
					this.spawnItem(
						chest.x,
						chest.y + chest.height + 5,
						chest.getSpawnItemName(),
						chest.getSpawnItemTexture(),
						chest.getSpawnItemFrame(),
						chest.getSpawnItemDescription()
					);
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
					this.showDialog(sign.getScrambledText());
				} else {
					this.showDialog(sign.getText());
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
				this.showDialog(sign.getText());
			}
		});
		return sign;
	}

	scrambleDialogs(scrambled) {
		if (this.scrambleSigns) {
			this.scrambledSigns.forEach((dialog) => dialog.setScrambled(scrambled));
		}
	}

	showDialog(text, itemTexture, itemFrame, closeCallback) {
		if (this.dialogGroup) {
			this.dialogGroup.destroy(true, false);
		}
		this.dialogGroup = this.add.group();
		const dialogFrame = this.add.nineslice(450, 350, LoaderKey.FRAME, null, 300, 550);
		let textY = 350;
		if (itemTexture) {
			textY = 330;
			const dialogImage = this.add.image(450, 360, itemTexture, itemFrame);
			dialogImage.setScale(2);
			dialogImage.setOrigin(0.5, 0.5);
			this.dialogGroup.add(dialogImage);
		}
		const dialogText = this.add.text(450, textY, text, {
			fontFamily: 'Verdana',
			fontSize: '12px'
		});
		dialogText.setOrigin(0.5, 0.5);
		dialogText.setWordWrapWidth(250);
		const closeButton = this.add.image(585, 300, LoaderKey.UI, 2);
		closeButton.setInteractive();

		this.dialogGroup.add(closeButton);
		this.dialogGroup.add(dialogText);
		this.dialogGroup.add(dialogFrame);
		closeButton.on('pointerdown', () => {
			this.dialogGroup.destroy(true, false);
			if (closeCallback) {
				closeCallback();
			}
		});
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

	spawnItem(x, y, itemName, itemTexture, itemFrame, itemDescription) {
		const item = this.add.image(x, y, itemTexture, itemFrame);
		item.setScale(2);
		item.setInteractive();
		item.on('pointerdown', () => {
			item.destroy();
			this.showDialog(itemDescription, itemTexture, itemFrame, () => {
				this.items.push({
					name: itemName,
					texture: itemTexture,
					frame: itemFrame
				});
				this.updateHud();
			});
		});
	}

	spawnItem(x, y, item) {
		const image = this.add.image(x, y, item.getTexture(), item.getFrame());
		image.setScale(2);
		image.setInteractive();
		image.on('pointerdown', () => {
			image.destroy();
			this.showDialog(item.getDescription(), item.getTexture(), item.getFrame(), () => {
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
				fontFamily: 'Verdana'
			});
		}
	}

	getPointerTile() {
		const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

		// Rounds down to nearest tile
		const pointerTileX = this.tileMap.worldToTileX(worldPoint.x);
		const pointerTileY = this.tileMap.worldToTileY(worldPoint.y);

		return this.tileMap.getTileAt(pointerTileX, pointerTileY, false, TilemapLayer.FOREGROUND);
	}

	update() {
		this.updateTime();
		if (this.isTimeElapsed) {
			this.scene.start('gameover');
		}
	}
}
