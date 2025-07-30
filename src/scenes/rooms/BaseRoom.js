import Phaser from 'phaser';
import Chest from '../../entities/Chest';
import Safe from '../../entities/Safe';
import Door from '../../entities/Door';
import Sign from '../../entities/Sign';
import ScrambledSign from '../../entities/ScrambledSign';
import { CustomProperty, TilemapLayer, EntityType, LoaderKey, Tile, Item, Animation, Frame, TileAction, Direction } from '../../constants';

export default class BaseRoomScene extends Phaser.Scene {
	signs = [];
	scrambledSigns = [];
	door = null;
	chests = [];
	tilemap = null;
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
		this.tilemap = this.createTilemap(roomKey);
		const tileset = this.createTileset(this.tilemap, 'castle-tiles', LoaderKey.TILESET);
		const { objectsLayer, foregroundLayer } = this.createLayers(this.tilemap, tileset);
		this.loadObjects(objectsLayer);
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

	loadObjects(objectsLayer) {
		const objects = objectsLayer.objects;
		for (let i = 0, len = objects.length; i < len; i++) {
			switch (objects[i].type) {
				case EntityType.TILE_ACTION:
					this.createTileAction(objects[i]);
					break;
				case EntityType.CHEST:
					this.chests.push(this.createChest(objects[i]));
					break;
				case EntityType.SAFE:
					this.safes.push(this.createSafe(objects[i]));
					break;
				case EntityType.DOOR:
					this.door = this.createDoor(objects[i]);
					break;
				case EntityType.SCRAMBLED_SIGN:
					this.scrambledSigns.push(this.createScrambledSign(objects[i]));
					break;
				case EntityType.SIGN:
					this.signs.push(this.createSign(objects[i]));
					break;
			}
		}
	}
	createTileAction(object) {
		const rect = this.add.rectangle(object.x, object.y, object.width, object.height);
		rect.setOrigin(0, 0);
		rect.setInteractive();
		rect.on('pointerdown', () => {
			const action = this.getCustomProperty(object, CustomProperty.ACTION);
			const velocity = this.getCustomProperty(object, CustomProperty.VELOCITY);
			const direction = this.getCustomProperty(object, CustomProperty.DIRECTION);
			const newTiles = this.getCustomProperty(object, CustomProperty.NEW_TILES)
				?.split(',')
				.map((s) => parseInt(s));
			const itemName = this.getCustomProperty(object, CustomProperty.SPAWN_ITEM_NAME);
			const itemTexture = this.getCustomProperty(object, CustomProperty.SPAWN_ITEM_TEXTURE);
			const itemFrame = this.getCustomProperty(object, CustomProperty.SPAWN_ITEM_FRAME);
			const itemDescription = this.getCustomProperty(object, CustomProperty.SPAWN_ITEM_DESCRIPTION);
			const tiles = this.tilemap.getTilesWithinWorldXY(
				object.x,
				object.y,
				object.width,
				object.height,
				{
					isNotEmpty: true
				},
				null,
				TilemapLayer.FOREGROUND
			);
			switch (action) {
				case TileAction.REPLACE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						if (newTiles[i]) {
							this.tilemap.putTileAt(newTiles[i], tiles[i].x, tiles[i].y);
						}
					}
					break;
				case TileAction.DESTROY:
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.tilemap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					break;
				case TileAction.MOVE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.tilemap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					switch (direction) {
						case Direction.LEFT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.tilemap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
							}
							break;
						case Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.tilemap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
							}
							break;
						case Direction.UP:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.tilemap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - velocity);
							}
							break;
						case Direction.DOWN:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.tilemap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
							}
							break;
					}
					break;
			}
			if (itemName) {
				this.spawnItem(
					object.x + object.width / 2,
					object.y + object.height / 2,
					itemName,
					itemTexture,
					itemFrame,
					itemDescription
				);
			}
			rect.destroy();
		});
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
		this.createAnimation(Animation.SAFE_OPEN, LoaderKey.SAFE, [13], 4);
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
		this.createAnimation(Animation.DOOR_OPEN, LoaderKey.DOOR, [5, 0], 4);
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
		this.createAnimation(Animation.CHEST_OPEN, LoaderKey.CHEST, [1], 8, -1);
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
