import Phaser from 'phaser';
import Chest from '../../entities/Chest';
import Safe from '../../entities/Safe';
import Door from '../../entities/Door';
import Sign from '../../entities/Sign';
import ScrambledSign from '../../entities/ScrambledSign';
import { CustomProperty, TilemapLayer, EntityType, LoaderKey, Tile, Item, Animation, Frame } from '../../constants';


export default class BaseRoomScene extends Phaser.Scene {
	signs = null;
	door = null;
	chests = null;
	tilemap = null;
	safes = null;
	items = null;
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
		this.tilemap = this.createTilemap(roomKey);
		const tileset = this.createTileset(this.tilemap, 'castle-tiles', LoaderKey.TILESET);
		const { objectsLayer, foregroundLayer } = this.createLayers(this.tilemap, tileset);
		//this.chests = this.createChests(objectsLayer);
		//this.door = this.createDoor(objectsLayer);
		//this.safes = this.createSafes(objectsLayer);
		//this.scrambledSigns = this.createScrambledSigns(objectsLayer);
		//this.signs = this.createSigns(objectsLayer);
	}

	createTilemap(tilemapKey) {
		return this.make.tilemap({ key: tilemapKey });
	}

	createTileset(tilemap, tilesetKey, tilesetTextureKey) {
		return tilemap.addTilesetImage(tilesetKey, tilesetTextureKey);
	}

	createLayers(tilemap, tileset) {
		const backgroundLayer = tilemap.createLayer(TilemapLayer.BACKGROUND, tileset);
		const foregroundLayer = tilemap.createLayer(TilemapLayer.FOREGROUND, tileset);
		const objectsLayer = tilemap.getObjectLayer(TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	createSafes(objectsLayer) {
		const safes = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === EntityType.SAFE) {
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
				safes.push(safe);
			}
		});
		this.createAnimation(Animation.SAFE_OPEN, LoaderKey.SAFE, [13], 4);
		return safes;
	}

	createDoor(objectsLayer) {
		const spawnObject = objectsLayer.objects.find((spawnObject) => {
			return spawnObject.type === EntityType.DOOR;
		});
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
		this.createAnimation(Animation.DOOR_OPEN, LoaderKey.DOOR, [5, 0], 4);
		return door;
	}

	createChests(objectsLayer) {
		const chests = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === EntityType.CHEST) {
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
				chests.push(chest);
			}
		});
		this.createAnimation(Animation.CHEST_OPEN, LoaderKey.CHEST, [1], 8, -1);
		return chests;
	}

	createScrambledSigns(objectsLayer) {
		const signs = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === EntityType.SCRAMBLED_SIGN) {
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
				signs.push(sign);
			}
		});
		return signs;
	}

	createSigns(objectsLayer) {
		const signs = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === EntityType.SIGN) {
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
				signs.push(sign);
			}
		});
		return signs;
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
		const pointerTileX = this.tilemap.worldToTileX(worldPoint.x);
		const pointerTileY = this.tilemap.worldToTileY(worldPoint.y);

		return this.tilemap.getTileAt(pointerTileX, pointerTileY, false, TilemapLayer.FOREGROUND);	
	}

	update() {
		this.updateTime();
		if (this.isTimeElapsed) {
			this.scene.start('gameover');
		}
	}
}
