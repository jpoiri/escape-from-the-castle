/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   CustomProperty: () => (/* binding */ CustomProperty),
/* harmony export */   Direction: () => (/* binding */ Direction),
/* harmony export */   EntityType: () => (/* binding */ EntityType),
/* harmony export */   Frame: () => (/* binding */ Frame),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   LoaderKey: () => (/* binding */ LoaderKey),
/* harmony export */   Tile: () => (/* binding */ Tile),
/* harmony export */   TilemapLayer: () => (/* binding */ TilemapLayer)
/* harmony export */ });
const CustomProperty = {
	COMBINATION: 'combination',
	PROMPT_MESSAGE: 'promptMessage',
	SPAWN_ITEM: 'spawnItem',
	LOCKED: 'locked',
	LOCKED_MESSAGE: 'lockedMessage',
	ACTION: 'action',
	NAVIGATE_TO: 'navigateTo',
	ITEM_REQUIRED_MESSAGE_VISIBLE: 'itemRequiredMessageVisible',
	ITEM_REQUIRED: 'itemRequired',
	ITEM_REQUIRED_MESSAGE: 'itemRequiredMessage'
};

const ActionType = {
	MOVE_TILE: 'MOVE_TILE',
	DESTROY_TILE: 'DESTROY_TILE',
	REPLACE_TILE: 'REPLACE_TILE',
	TOGGLE_TILE: 'TOGGLE_TILE',
	SHOW_TEXT: 'SHOW_TEXT',
	SHOW_IMAGE: 'SHOW_IMAGE'
};

const Direction = {
	LEFT: 'LEFT',
	RIGHT: 'RIGHT',
	UP: 'UP',
	DOWN: 'DOWN'
};

const TilemapLayer = {
	BACKGROUND: 'background',
	FOREGROUND: 'foreground',
	OBJECTS: 'objects'
};

const EntityType = {
	DOOR: 'Door',
	SAFE: 'Safe',
	CHEST: 'Chest',
	TEXT_MODAL: 'TextModal',
	INTERACTIVE_ZONE: 'InteractiveZone',
	IMAGE_MODAL: 'ImageModal'
};

const LoaderKey = {
	TILEMAP: 'tilemap',
	TILESET: 'tiles',
	ITEMS: 'items',
	UI: 'ui',
	CHEST: 'chest',
	DOOR: 'door',
	SAFE: 'safe',
	MENU_IMAGE: 'menu-image'
};

const Tile = {
	SIGN: 144,
	CLOSE_WINDOW: 258,
	OPEN_WINDOW: 235,
	COFFIN: [71, 95],
	DESTROYED_KNIGHT: 96,
	TOP_CHAIR: 312,
	MIDDLE_CHAIR: 336,
	BOTTOM_CHAIR: 360,
	HOLE_IN_WALL: 249,
	TOP_LEFT_GARGOYLE: 232,
	TOP_RIGHT_GARGOYLE: 233,
	BOTTOM_LEFT_GARGOYLE: 256,
	BOTTOM_RIGHT_GARGOYLE: 257,
	TOP_LEFT_WATER: 10,
	TOP_CENTER_WATER: 11,
	TOP_RIGHT_WATER: 12,
	MIDDLE_LEFT_WATER: 34,
	MIDDLE_CENTER_WATER: 35,
	MIDDLE_RIGHT_WATER: 36,
	BOTTOM_LEFT_WATER: 58,
	BOTTOM_CENTER_WATER: 59,
	BOTTOM_RIGHT_WATER: 60,
	DIGGED_HOLE: 316,
	STAIR: 124
};

const Item = {
	BOOK: 'book',
	HAMMER: 'hammer',
	PICKAXE: 'pickaxe',
	KEY: 'key',
	MASTER_KEY: 'master-key',
	ICE_ROD: 'ice-rod',
	POTION: 'potion',
	SHOVEL: 'shovel',
	RING: 'ring'
};

const Animation = {
	DOOR_OPEN: 'door-open',
	SAFE_OPEN: 'safe-open',
	CHEST_OPEN: 'chest-open'
};

const Frame = {
	MASTER_KEY: 51,
	PICKAXE: 83,
	POTION: 61,
	KEY: 50,
	RING: 13
};

Object.freeze(TilemapLayer);
Object.freeze(CustomProperty);
Object.freeze(LoaderKey);
Object.freeze(EntityType);
Object.freeze(Tile);
Object.freeze(Item);
Object.freeze(Animation);
Object.freeze(Frame);
Object.freeze(Direction);
Object.freeze(ActionType);




/***/ }),

/***/ "./src/entities/Chest.js":
/*!*******************************!*\
  !*** ./src/entities/Chest.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chest)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class Chest extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Sprite {

	locked = true;
	lockedMessage = null;
	opened = false;
	spawnItem = null;

	constructor(scene, x, y, texture, frame, name, locked, lockedMessage) {
		super(scene, x, y, texture, frame, name);
		scene.add.existing(this);
		this.setInteractive();
		this.name = name;
		this.locked = locked;
		this.lockedMessage = lockedMessage;
	}

	lock() {
		this.locked = true;
	}

	unlock() {
		this.locked = false;
	}

	isLocked() {
		return this.locked;
    }
    
    setLockedMessage(message) {
        this.lockedMessage = message;
    }

    getLockedMessage() {
        return this.lockedMessage;
	}
	
	isOpened() {
		return this.opened;
	}

	setOpened(opened) {
		this.opened = opened;
	}

	setSpawnItem(spawnItem) {
		this.spawmItem = spawnItem;
	}

	getSpawnItem() {
		return this.spawmItem;
	}
}


/***/ }),

/***/ "./src/entities/Door.js":
/*!******************************!*\
  !*** ./src/entities/Door.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Door)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class Door extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Sprite {
	name = null;
	locked = false;
	lockedMessage = null;
	opened = false;

	constructor(scene, x, y, texture, frame, name, locked, lockedMessage) {
		console.log(frame);
		super(scene, x, y, texture, frame);
		this.name = name;
		this.locked = locked;
		this.lockedMessage = lockedMessage;
		scene.add.existing(this);
		this.setScale(2);
		this.setInteractive();
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	lock() {
		this.locked = true;
	}

	unlock() {
		this.locked = false;
	}

	isLocked() {
		return this.locked;
	}

	setLockedMessage(message) {
		this.lockedMessage = message;
	}

	getLockedMessage() {
		return this.lockedMessage;
	}

	isOpened() {
		return this.opened;
	}

	setOpened(opened) {
		this.opened = opened;
	}
}


/***/ }),

/***/ "./src/entities/InteractiveZone.js":
/*!*****************************************!*\
  !*** ./src/entities/InteractiveZone.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InteractiveZone)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ModalUtils */ "./src/utils/ModalUtils.js");




class InteractiveZone extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Rectangle {
	action = null;
	spawnItem = null;
	navigateTo = null;
	repeatableAction = false;
	itemRequired = null;
	itemRequiredMessage = null;
	itemRequiredMessageVisible = false;

	constructor(scene, x, y, width, height) {
		super(scene, x, y, width, height);
		this.setOrigin(0, 0);
		this.setInteractive();
		scene.add.existing(this);
	}

	executeAction(item, onCompleteCallback) {
		let itemUsed = false;
		if (this.itemRequired && item?.name !== this.itemRequired) {
			if (this.itemRequiredMessageVisible) {
				_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__["default"].showTextModal(this.scene, this.itemRequiredMessage);
			}
		} else {
			if (this.itemRequired && item?.name === this.itemRequired) {
				itemUsed = true;
			}	
			let { type, velocity, newTiles, direction, text, textureKey, repeat } = this.action;

			newTiles = newTiles?.split(',').map((s) => {
				return parseInt(s, 10);
			});

			const tiles = this.scene.tileMap.getTilesWithinWorldXY(
				this.x,
				this.y,
				this.width,
				this.height,
				{
					isNotEmpty: true
				},
				null,
				_constants__WEBPACK_IMPORTED_MODULE_1__.TilemapLayer.FOREGROUND
			);
			switch (type) {
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						if (newTiles[i]) {
							this.scene.tileMap.putTileAt(newTiles[i], tiles[i].x, tiles[i].y);
						}
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE:
					if (!this.previousTiles) {
						this.previousTiles = tiles.map(t => t.index);
						for (let i = 0, len = tiles.length; i < len; i++) {
							if (newTiles[i]) {
								this.scene.tileMap.putTileAt(newTiles[i], tiles[i].x, tiles[i].y);
							}
						}
					} else {
						for (let i = 0, len = tiles.length; i < len; i++) {
							if (this.previousTiles[i]) {
								this.scene.tileMap.putTileAt(this.previousTiles[i], tiles[i].x, tiles[i].y);
							}
						}
						this.previousTiles = null;
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.DESTROY_TILE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.MOVE_TILE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					switch (direction) {
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
							}
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
							}
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - velocity);
							}
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
							}
							break;
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_TEXT:
					_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__["default"].showTextModal(this.scene, text);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_IMAGE:
					_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__["default"].showImageModal(this.scene, textureKey);
					break;
			}
			if (this.spawnItem) {
				this.scene.spawnItem(this.x + this.width / 2, this.y + this.height / 2, this.spawnItem);
			}
			if (this.navigateTo) {
				this.scene.reloadRoom(this.navigateTo);
			}
			if (!repeat) {
				this.destroy();
			}
			if (onCompleteCallback) {
				onCompleteCallback(itemUsed);
			}
		}
	}

	setAction(action) {
		this.action = action;
	}

	getAction() {
		return this.action;
	}

	setSpawnItem(spawnItem) {
		this.spawnItem = spawnItem;
	}

	getSpawnItem() {
		return this.spawnItem;
	}

	setNavigateTo(navigateTo) {
		this.navigateTo = navigateTo;
	}

	getNavigateTo() {
		return this.navigateTo;
	}

	setItemRequired(itemRequired) {
		this.itemRequired = itemRequired;
	}

	getItemRequired() {
		return this.itemRequired;
	}

	setItemRequiredMessage(itemRequiredMessage) {
		this.itemRequiredMessage = itemRequiredMessage;
	}

	getItemRequiredMessage() {
		return this.itemRequiredMessage;
	}

	setItemRequiredMessageVisible(itemRequiredMessageVisible) {
		this.itemRequiredMessageVisible = itemRequiredMessageVisible;
	}

	isItemRequiredMessageVisible() {
		return this.itemRequiredMessageVisible;
	}
}


/***/ }),

/***/ "./src/entities/Safe.js":
/*!******************************!*\
  !*** ./src/entities/Safe.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Safe)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class Safe extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Sprite {
	combination = null;
	promptMessage = null;
	opened = false;
	spawnItem = null;

	constructor(scene, x, y, texture, frame, name, combination, promptMessage) {
		super(scene, x, y, texture, frame, name);
		scene.add.existing(this);
		this.setInteractive();
		this.name = name;
		this.combination = combination;
		this.promptMessage = promptMessage;
	}

	getCombination() {
		return this.combination;
	}

	setCombination(combination) {
		this.combination = combination;
	}

	getPromptMessage() {
		return this.promptMessage;
	}

	setPromptMessage(message) {
		this.promptMessage = message;
	}

	isOpened() {
		return this.opened;
	}

	setOpened(opened) {
		this.opened = opened;
	}

	setSpawnItem(spawnItem) {
		this.spawnItem = spawnItem;
    }
    
    getSpawnItem() {
        return this.spawnItem;
    }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Game */ "./src/scenes/Game.js");
/* harmony import */ var _scenes_GameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/GameOver */ "./src/scenes/GameOver.js");
/* harmony import */ var _scenes_Win__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Win */ "./src/scenes/Win.js");
/* harmony import */ var _scenes_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/Menu */ "./src/scenes/Menu.js");
/* harmony import */ var _scenes_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/Loading */ "./src/scenes/Loading.js");







const config = {
	type: (phaser__WEBPACK_IMPORTED_MODULE_0___default().AUTO),
	scale: {
		mode: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scale).FIT,
        autoCenter: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scale).CENTER_BOTH,
		width: 1024,
		height: 768
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 200 }
		}
	},
	scene: [_scenes_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], _scenes_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], _scenes_Game__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_GameOver__WEBPACK_IMPORTED_MODULE_2__["default"], _scenes_Win__WEBPACK_IMPORTED_MODULE_3__["default"]]
};

const game = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(config);


/***/ }),

/***/ "./src/scenes/Game.js":
/*!****************************!*\
  !*** ./src/scenes/Game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_Chest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Chest */ "./src/entities/Chest.js");
/* harmony import */ var _entities_Safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Safe */ "./src/entities/Safe.js");
/* harmony import */ var _entities_Door__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/Door */ "./src/entities/Door.js");
/* harmony import */ var _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/InteractiveZone */ "./src/entities/InteractiveZone.js");
/* harmony import */ var _utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ModalUtils */ "./src/utils/ModalUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");









const TRANSITION_DELAY = 500;

class GameScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
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
		const backgroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.BACKGROUND, tilesets);
		const foregroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.FOREGROUND, tilesets);
		const objectsLayer = tilemap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	loadTileMapObjects(objectsLayer) {
		const tileMapObjects = objectsLayer.objects;
		for (let i = 0, len = tileMapObjects.length; i < len; i++) {
			switch (tileMapObjects[i].type) {
				case _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.INTERACTIVE_ZONE:
					this.createInteractiveZone(tileMapObjects[i]);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.CHEST:
					this.chests.push(this.createChest(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.SAFE:
					this.safes.push(this.createSafe(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.DOOR:
					this.door = this.createDoor(tileMapObjects[i]);
					break;
			}
		}
	}

	createInteractiveZone(tileMapObject) {
		const zone = new _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_4__["default"](this, tileMapObject.x, tileMapObject.y, tileMapObject.width, tileMapObject.height);
		zone.setAction(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.ACTION));
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.NAVIGATE_TO));
		zone.setItemRequired(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.ITEM_REQUIRED));
		zone.setItemRequiredMessage(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.ITEM_REQUIRED_MESSAGE));
		zone.setItemRequiredMessageVisible(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.ITEM_REQUIRED_MESSAGE_VISIBLE));
		zone.setSpawnItem(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM));
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
		const safe = new _entities_Safe__WEBPACK_IMPORTED_MODULE_2__["default"](
			this,
			tileMapObject.x,
			tileMapObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE,
			12,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.COMBINATION),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.PROMPT_MESSAGE)
		);
		safe.setSpawnItem(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM));
		safe.on('pointerdown', () => {
			if (!safe.isOpened()) {
				const answer = window.prompt(safe.getPromptMessage());
				if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
					safe.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.SAFE_OPEN);
					safe.setOpened(true);
					this.spawnItem(safe.x, safe.y + safe.height, safe.getSpawnItem());
				}
			}
		});
		return safe;
	}

	createDoor(tileMapObject) {
		const door = new _entities_Door__WEBPACK_IMPORTED_MODULE_3__["default"](
			this,
			tileMapObject.x,
			tileMapObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR,
			10,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__["default"].showTextModal(this, door.getLockedMessage());
			} else {
				door.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.DOOR_OPEN);
				door.setOpened(true);
			}
		});
		return door;
	}

	createChest(tileMapObject) {
		const chest = new _entities_Chest__WEBPACK_IMPORTED_MODULE_1__["default"](
			this,
			tileMapObject.x,
			tileMapObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST,
			null,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED_MESSAGE)
		);
		chest.setSpawnItem(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM));
		chest.on('pointerdown', () => {
			if (chest.isLocked()) {
				_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__["default"].showTextModal(this, chest.lockedMessage);
			} else {
				if (!chest.isOpened()) {
					chest.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.CHEST_OPEN);
					chest.setOpened(true);
					this.spawnItem(chest.x, chest.y + chest.height + 5, chest.getSpawnItem());
				}
			}
		});
		return chest;
	}

	createAnimations() {
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.SAFE_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE, [13], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.DOOR_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR, [5, 0], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.CHEST_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST, [1], 8, -1);
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
			_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__["default"].showItemModal(this, item.description, item.textureKey, item.textureFrame, () => {
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


/***/ }),

/***/ "./src/scenes/GameOver.js":
/*!********************************!*\
  !*** ./src/scenes/GameOver.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameOverScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class GameOverScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    constructor() {
        super('gameover');
    }

    create() {
        const text = this.add.text(512, 384, 'Game over', {
            fontSize: '22px',
            fontFamily: 'Verdana'
        });
        text.setOrigin(0.5, 0.5);
    }

}

/***/ }),

/***/ "./src/scenes/Loading.js":
/*!*******************************!*\
  !*** ./src/scenes/Loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class LoadingScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
	constructor() {
		super('loading');
	}

	preload() {
		this.load.tilemapTiledJSON('room-one', 'assets/json/room-one-map.json');
		this.load.tilemapTiledJSON('room-two', 'assets/json/room-two-map.json');
		this.load.image('castle-tiles', 'assets/img/castle-tiles/Tileset.png');
		this.load.image('creepy-tiles', 'assets/img/tiles.png');
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.MENU_IMAGE, 'assets/img/castle.png');
		this.load.image('test', 'assets/img/html-css-javascript.jpg');
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.ITEMS, 'assets/img/items.png', { frameWidth: 16, frameHeight: 16 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.UI, 'assets/img/ui.png', { frameWidth: 32, frameHeight: 13 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.CHEST, 'assets/img/chest.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.DOOR, 'assets/img/door.png', { frameWidth: 24, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.SAFE, 'assets/img/safe.png', { frameWidth: 32, frameHeight: 40 });

		this.load.on('complete', () => {
			this.scene.start('menu');
		});
	}
}


/***/ }),

/***/ "./src/scenes/Menu.js":
/*!****************************!*\
  !*** ./src/scenes/Menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class MenuScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
	constructor() {
		super('menu');
	}

	create() {

        const image = this.add.image(0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.MENU_IMAGE).setOrigin(0).setScale(0.8);
        
        const text = this.add.text(350, 384, 'Escape from the castle', {
			fontSize: '32px',
			fontFamily: 'Verdana'
		});

		const clickToContinue = this.add.text(512, 460, 'Click to start the game', {
			fontSize: '16px',
			fontFamily: 'Verdana'
		});
		clickToContinue.setOrigin(0.5, 0.5);
	}

	update() {
		if (this.input.manager.activePointer.isDown) {
			this.scene.start('game');
		}
	}
}


/***/ }),

/***/ "./src/scenes/Win.js":
/*!***************************!*\
  !*** ./src/scenes/Win.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinningScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class WinningScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    constructor() {
        super('win');
    }

    create() {
        const text = this.add.text(512, 384, 'Congratulations for escaping? Thank you for playing!', {
            fontSize: '22px',
            fontFamily: 'Verdana'
        });
        text.setOrigin(0.5, 0.5);
    }

}

/***/ }),

/***/ "./src/utils/ModalUtils.js":
/*!*********************************!*\
  !*** ./src/utils/ModalUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalUtils)
/* harmony export */ });
class ModalUtils {

    static showTextModal(scene, text, size = 'normal', closeCallback) {
		const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = scene.add.container(450, 350).setAlpha(0);
		let box = null;
		let closeText = null;

		switch (size) {
			case 'normal':
				box = scene.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
				closeText = scene.add
					.text(155, -69, 'Close X', {
						fontSize: '16px',
						fontFamily: 'verdana',
						fill: '#FFFFFF'
					})
					.setInteractive();
				break;
			case 'large':
				closeText = scene.add
					.text(155, -169, 'Close X', {
						fontSize: '16px',
						fontFamily: 'verdana',
						fill: '#FFFFFF'
					})
					.setInteractive();
				box = scene.add.rectangle(0, 0, 450, 350, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
				break;
		}
		const textObj = scene.add
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
		scene.tweens.add({
			targets: modal,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});
		modal.add([box, textObj, closeText]);
    }
    
    static showImageModal(scene, imageKey, closeCallback) {
		const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = scene.add.container(450, 350).setAlpha(0);
		const box = scene.add.rectangle(0, 0, 450, 350, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
		const image = scene.add.image(0, 0, imageKey).setOrigin(0.5);
		image.setDisplaySize(box.width - 60, box.height - 60);

		const closeText = scene.add
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

		scene.tweens.add({
			targets: modal,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});

		modal.add([box, image, closeText]);
    }
    
    static showItemModal(scene, itemDescription, itemTexture, itemFrame, closeCallback) {
		const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = scene.add.container(450, 350).setAlpha(0);
		const box = scene.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
		const closeText = scene.add
			.text(155, -69, 'Close X', {
				fontSize: '16px',
				fontFamily: 'verdana',
				fill: '#FFFFFF'
			})
			.setInteractive();

		const itemImage = scene.add.image(0, -10, itemTexture, itemFrame).setScale(2.5);
		const itemDescriptionText = scene.add
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

		scene.tweens.add({
			targets: modal,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});

		modal.add([box, itemImage, itemDescriptionText, closeText]);
	}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkescape_from_dracula_castle"] = self["webpackChunkescape_from_dracula_castle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29IOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIeEY7QUFDNUI7QUFDZSxvQkFBb0IsdURBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JENEI7QUFDNUI7QUFDZSxtQkFBbUIsdURBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RDRCO0FBQ3VDO0FBQ3RCO0FBQzdDO0FBQ2UsOEJBQThCLDJEQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdFQUFnRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksb0RBQVk7QUFDaEI7QUFDQTtBQUNBLFNBQVMsa0RBQVU7QUFDbkIseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0RBQVU7QUFDbkI7QUFDQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrREFBVTtBQUNuQix5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtEQUFVO0FBQ25CLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVM7QUFDcEIsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpREFBUztBQUNwQiwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlEQUFTO0FBQ3BCLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVM7QUFDcEIsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0RBQVU7QUFDbkIsS0FBSyx5REFBVTtBQUNmO0FBQ0EsU0FBUyxrREFBVTtBQUNuQixLQUFLLHlEQUFVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SzRCO0FBQzVCO0FBQ2UsbUJBQW1CLHVEQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQ0QjtBQUNVO0FBQ1M7QUFDWDtBQUNJO0FBQ0k7QUFDNUM7QUFDQTtBQUNBLE9BQU8sb0RBQVc7QUFDbEI7QUFDQSxRQUFRLHFEQUFZO0FBQ3BCLG9CQUFvQixxREFBWTtBQUNoQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsRUFBRTtBQUNGLFNBQVMsdURBQVksRUFBRSxvREFBVyxFQUFFLG9EQUFTLEVBQUUsd0RBQWEsRUFBRSxtREFBUTtBQUN0RTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNVO0FBQ0Y7QUFDQTtBQUNzQjtBQUNiO0FBQzdDO0FBQzhGO0FBQzlGO0FBQ0E7QUFDQTtBQUNlLHdCQUF3QixxREFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQseUNBQXlDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdDQUFnQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsb0RBQVk7QUFDMUQsOENBQThDLG9EQUFZO0FBQzFELDhDQUE4QyxvREFBWTtBQUMxRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBLFNBQVMsa0RBQVU7QUFDbkI7QUFDQTtBQUNBLFNBQVMsa0RBQVU7QUFDbkI7QUFDQTtBQUNBLFNBQVMsa0RBQVU7QUFDbkI7QUFDQTtBQUNBLFNBQVMsa0RBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWU7QUFDbEMsdURBQXVELHNEQUFjO0FBQ3JFLDJEQUEyRCxzREFBYztBQUN6RSw2REFBNkQsc0RBQWM7QUFDM0Usb0VBQW9FLHNEQUFjO0FBQ2xGLDJFQUEyRSxzREFBYztBQUN6RiwwREFBMEQsc0RBQWM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaURBQVM7QUFDWjtBQUNBO0FBQ0EseUNBQXlDLHNEQUFjO0FBQ3ZELHlDQUF5QyxzREFBYztBQUN2RDtBQUNBLDBEQUEwRCxzREFBYztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpREFBUztBQUNaO0FBQ0E7QUFDQSx5Q0FBeUMsc0RBQWM7QUFDdkQseUNBQXlDLHNEQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZCxLQUFLO0FBQ0wsY0FBYyxpREFBUztBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaURBQVM7QUFDWjtBQUNBO0FBQ0EseUNBQXlDLHNEQUFjO0FBQ3ZELHlDQUF5QyxzREFBYztBQUN2RDtBQUNBLDJEQUEyRCxzREFBYztBQUN6RTtBQUNBO0FBQ0EsSUFBSSx5REFBVTtBQUNkLEtBQUs7QUFDTDtBQUNBLGdCQUFnQixpREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBUyxZQUFZLGlEQUFTO0FBQ3JELHVCQUF1QixpREFBUyxZQUFZLGlEQUFTO0FBQ3JELHVCQUF1QixpREFBUyxhQUFhLGlEQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsUUFBUTtBQUM5RDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcseURBQVU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxlQUFlLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFU0QjtBQUM1QjtBQUNlLDRCQUE0QixxREFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI0QjtBQUNhO0FBQ3pDO0FBQ2UsMkJBQTJCLHFEQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpREFBUztBQUMzQjtBQUNBLHdCQUF3QixpREFBUyxrQ0FBa0MsaUNBQWlDO0FBQ3BHLHdCQUF3QixpREFBUyw0QkFBNEIsaUNBQWlDO0FBQzlGLHdCQUF3QixpREFBUyxrQ0FBa0MsaUNBQWlDO0FBQ3BHLHdCQUF3QixpREFBUyxnQ0FBZ0MsaUNBQWlDO0FBQ2xHLHdCQUF3QixpREFBUyxnQ0FBZ0MsaUNBQWlDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjRCO0FBQ2E7QUFDekM7QUFDZSx3QkFBd0IscURBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjRCO0FBQzVCO0FBQ2UsMkJBQTJCLHFEQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9DaGVzdC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9Eb29yLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0ludGVyYWN0aXZlWm9uZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9TYWZlLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL3NjZW5lcy9HYW1lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL3NjZW5lcy9HYW1lT3Zlci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvV2luLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL3V0aWxzL01vZGFsVXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHtcclxuXHRDT01CSU5BVElPTjogJ2NvbWJpbmF0aW9uJyxcclxuXHRQUk9NUFRfTUVTU0FHRTogJ3Byb21wdE1lc3NhZ2UnLFxyXG5cdFNQQVdOX0lURU06ICdzcGF3bkl0ZW0nLFxyXG5cdExPQ0tFRDogJ2xvY2tlZCcsXHJcblx0TE9DS0VEX01FU1NBR0U6ICdsb2NrZWRNZXNzYWdlJyxcclxuXHRBQ1RJT046ICdhY3Rpb24nLFxyXG5cdE5BVklHQVRFX1RPOiAnbmF2aWdhdGVUbycsXHJcblx0SVRFTV9SRVFVSVJFRF9NRVNTQUdFX1ZJU0lCTEU6ICdpdGVtUmVxdWlyZWRNZXNzYWdlVmlzaWJsZScsXHJcblx0SVRFTV9SRVFVSVJFRDogJ2l0ZW1SZXF1aXJlZCcsXHJcblx0SVRFTV9SRVFVSVJFRF9NRVNTQUdFOiAnaXRlbVJlcXVpcmVkTWVzc2FnZSdcclxufTtcclxuXHJcbmNvbnN0IEFjdGlvblR5cGUgPSB7XHJcblx0TU9WRV9USUxFOiAnTU9WRV9USUxFJyxcclxuXHRERVNUUk9ZX1RJTEU6ICdERVNUUk9ZX1RJTEUnLFxyXG5cdFJFUExBQ0VfVElMRTogJ1JFUExBQ0VfVElMRScsXHJcblx0VE9HR0xFX1RJTEU6ICdUT0dHTEVfVElMRScsXHJcblx0U0hPV19URVhUOiAnU0hPV19URVhUJyxcclxuXHRTSE9XX0lNQUdFOiAnU0hPV19JTUFHRSdcclxufTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuXHRMRUZUOiAnTEVGVCcsXHJcblx0UklHSFQ6ICdSSUdIVCcsXHJcblx0VVA6ICdVUCcsXHJcblx0RE9XTjogJ0RPV04nXHJcbn07XHJcblxyXG5jb25zdCBUaWxlbWFwTGF5ZXIgPSB7XHJcblx0QkFDS0dST1VORDogJ2JhY2tncm91bmQnLFxyXG5cdEZPUkVHUk9VTkQ6ICdmb3JlZ3JvdW5kJyxcclxuXHRPQkpFQ1RTOiAnb2JqZWN0cydcclxufTtcclxuXHJcbmNvbnN0IEVudGl0eVR5cGUgPSB7XHJcblx0RE9PUjogJ0Rvb3InLFxyXG5cdFNBRkU6ICdTYWZlJyxcclxuXHRDSEVTVDogJ0NoZXN0JyxcclxuXHRURVhUX01PREFMOiAnVGV4dE1vZGFsJyxcclxuXHRJTlRFUkFDVElWRV9aT05FOiAnSW50ZXJhY3RpdmVab25lJyxcclxuXHRJTUFHRV9NT0RBTDogJ0ltYWdlTW9kYWwnXHJcbn07XHJcblxyXG5jb25zdCBMb2FkZXJLZXkgPSB7XHJcblx0VElMRU1BUDogJ3RpbGVtYXAnLFxyXG5cdFRJTEVTRVQ6ICd0aWxlcycsXHJcblx0SVRFTVM6ICdpdGVtcycsXHJcblx0VUk6ICd1aScsXHJcblx0Q0hFU1Q6ICdjaGVzdCcsXHJcblx0RE9PUjogJ2Rvb3InLFxyXG5cdFNBRkU6ICdzYWZlJyxcclxuXHRNRU5VX0lNQUdFOiAnbWVudS1pbWFnZSdcclxufTtcclxuXHJcbmNvbnN0IFRpbGUgPSB7XHJcblx0U0lHTjogMTQ0LFxyXG5cdENMT1NFX1dJTkRPVzogMjU4LFxyXG5cdE9QRU5fV0lORE9XOiAyMzUsXHJcblx0Q09GRklOOiBbNzEsIDk1XSxcclxuXHRERVNUUk9ZRURfS05JR0hUOiA5NixcclxuXHRUT1BfQ0hBSVI6IDMxMixcclxuXHRNSURETEVfQ0hBSVI6IDMzNixcclxuXHRCT1RUT01fQ0hBSVI6IDM2MCxcclxuXHRIT0xFX0lOX1dBTEw6IDI0OSxcclxuXHRUT1BfTEVGVF9HQVJHT1lMRTogMjMyLFxyXG5cdFRPUF9SSUdIVF9HQVJHT1lMRTogMjMzLFxyXG5cdEJPVFRPTV9MRUZUX0dBUkdPWUxFOiAyNTYsXHJcblx0Qk9UVE9NX1JJR0hUX0dBUkdPWUxFOiAyNTcsXHJcblx0VE9QX0xFRlRfV0FURVI6IDEwLFxyXG5cdFRPUF9DRU5URVJfV0FURVI6IDExLFxyXG5cdFRPUF9SSUdIVF9XQVRFUjogMTIsXHJcblx0TUlERExFX0xFRlRfV0FURVI6IDM0LFxyXG5cdE1JRERMRV9DRU5URVJfV0FURVI6IDM1LFxyXG5cdE1JRERMRV9SSUdIVF9XQVRFUjogMzYsXHJcblx0Qk9UVE9NX0xFRlRfV0FURVI6IDU4LFxyXG5cdEJPVFRPTV9DRU5URVJfV0FURVI6IDU5LFxyXG5cdEJPVFRPTV9SSUdIVF9XQVRFUjogNjAsXHJcblx0RElHR0VEX0hPTEU6IDMxNixcclxuXHRTVEFJUjogMTI0XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0ge1xyXG5cdEJPT0s6ICdib29rJyxcclxuXHRIQU1NRVI6ICdoYW1tZXInLFxyXG5cdFBJQ0tBWEU6ICdwaWNrYXhlJyxcclxuXHRLRVk6ICdrZXknLFxyXG5cdE1BU1RFUl9LRVk6ICdtYXN0ZXIta2V5JyxcclxuXHRJQ0VfUk9EOiAnaWNlLXJvZCcsXHJcblx0UE9USU9OOiAncG90aW9uJyxcclxuXHRTSE9WRUw6ICdzaG92ZWwnLFxyXG5cdFJJTkc6ICdyaW5nJ1xyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0aW9uID0ge1xyXG5cdERPT1JfT1BFTjogJ2Rvb3Itb3BlbicsXHJcblx0U0FGRV9PUEVOOiAnc2FmZS1vcGVuJyxcclxuXHRDSEVTVF9PUEVOOiAnY2hlc3Qtb3BlbidcclxufTtcclxuXHJcbmNvbnN0IEZyYW1lID0ge1xyXG5cdE1BU1RFUl9LRVk6IDUxLFxyXG5cdFBJQ0tBWEU6IDgzLFxyXG5cdFBPVElPTjogNjEsXHJcblx0S0VZOiA1MCxcclxuXHRSSU5HOiAxM1xyXG59O1xyXG5cclxuT2JqZWN0LmZyZWV6ZShUaWxlbWFwTGF5ZXIpO1xyXG5PYmplY3QuZnJlZXplKEN1c3RvbVByb3BlcnR5KTtcclxuT2JqZWN0LmZyZWV6ZShMb2FkZXJLZXkpO1xyXG5PYmplY3QuZnJlZXplKEVudGl0eVR5cGUpO1xyXG5PYmplY3QuZnJlZXplKFRpbGUpO1xyXG5PYmplY3QuZnJlZXplKEl0ZW0pO1xyXG5PYmplY3QuZnJlZXplKEFuaW1hdGlvbik7XHJcbk9iamVjdC5mcmVlemUoRnJhbWUpO1xyXG5PYmplY3QuZnJlZXplKERpcmVjdGlvbik7XHJcbk9iamVjdC5mcmVlemUoQWN0aW9uVHlwZSk7XHJcblxyXG5leHBvcnQgeyBUaWxlbWFwTGF5ZXIsIEN1c3RvbVByb3BlcnR5LCBMb2FkZXJLZXksIEVudGl0eVR5cGUsIFRpbGUsIEl0ZW0sIEFuaW1hdGlvbiwgRnJhbWUsIEFjdGlvblR5cGUsIERpcmVjdGlvbiB9O1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVzdCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuXHRsb2NrZWQgPSB0cnVlO1xyXG5cdGxvY2tlZE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgbG9ja2VkLCBsb2NrZWRNZXNzYWdlKSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUpO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbG9ja2VkTWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHR1bmxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aXNMb2NrZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubG9ja2VkTWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9ja2VkTWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHRcclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd25JdGVtKHNwYXduSXRlbSkge1xyXG5cdFx0dGhpcy5zcGF3bUl0ZW0gPSBzcGF3bkl0ZW07XHJcblx0fVxyXG5cclxuXHRnZXRTcGF3bkl0ZW0oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bUl0ZW07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRuYW1lID0gbnVsbDtcclxuXHRsb2NrZWQgPSBmYWxzZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBsb2NrZWQsIGxvY2tlZE1lc3NhZ2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKGZyYW1lKTtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgyKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuXHR9XHJcblxyXG5cdHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldExvY2tlZE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBUaWxlbWFwTGF5ZXIsIEFjdGlvblR5cGUsIERpcmVjdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBNb2RhbFV0aWxzIGZyb20gJy4uL3V0aWxzL01vZGFsVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RpdmVab25lIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XHJcblx0YWN0aW9uID0gbnVsbDtcclxuXHRzcGF3bkl0ZW0gPSBudWxsO1xyXG5cdG5hdmlnYXRlVG8gPSBudWxsO1xyXG5cdHJlcGVhdGFibGVBY3Rpb24gPSBmYWxzZTtcclxuXHRpdGVtUmVxdWlyZWQgPSBudWxsO1xyXG5cdGl0ZW1SZXF1aXJlZE1lc3NhZ2UgPSBudWxsO1xyXG5cdGl0ZW1SZXF1aXJlZE1lc3NhZ2VWaXNpYmxlID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGV4ZWN1dGVBY3Rpb24oaXRlbSwgb25Db21wbGV0ZUNhbGxiYWNrKSB7XHJcblx0XHRsZXQgaXRlbVVzZWQgPSBmYWxzZTtcclxuXHRcdGlmICh0aGlzLml0ZW1SZXF1aXJlZCAmJiBpdGVtPy5uYW1lICE9PSB0aGlzLml0ZW1SZXF1aXJlZCkge1xyXG5cdFx0XHRpZiAodGhpcy5pdGVtUmVxdWlyZWRNZXNzYWdlVmlzaWJsZSkge1xyXG5cdFx0XHRcdE1vZGFsVXRpbHMuc2hvd1RleHRNb2RhbCh0aGlzLnNjZW5lLCB0aGlzLml0ZW1SZXF1aXJlZE1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5pdGVtUmVxdWlyZWQgJiYgaXRlbT8ubmFtZSA9PT0gdGhpcy5pdGVtUmVxdWlyZWQpIHtcclxuXHRcdFx0XHRpdGVtVXNlZCA9IHRydWU7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHRsZXQgeyB0eXBlLCB2ZWxvY2l0eSwgbmV3VGlsZXMsIGRpcmVjdGlvbiwgdGV4dCwgdGV4dHVyZUtleSwgcmVwZWF0IH0gPSB0aGlzLmFjdGlvbjtcclxuXHJcblx0XHRcdG5ld1RpbGVzID0gbmV3VGlsZXM/LnNwbGl0KCcsJykubWFwKChzKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHMsIDEwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCB0aWxlcyA9IHRoaXMuc2NlbmUudGlsZU1hcC5nZXRUaWxlc1dpdGhpbldvcmxkWFkoXHJcblx0XHRcdFx0dGhpcy54LFxyXG5cdFx0XHRcdHRoaXMueSxcclxuXHRcdFx0XHR0aGlzLndpZHRoLFxyXG5cdFx0XHRcdHRoaXMuaGVpZ2h0LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlzTm90RW1wdHk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0VGlsZW1hcExheWVyLkZPUkVHUk9VTkRcclxuXHRcdFx0KTtcclxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlJFUExBQ0VfVElMRTpcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAobmV3VGlsZXNbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KG5ld1RpbGVzW2ldLCB0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRPR0dMRV9USUxFOlxyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnByZXZpb3VzVGlsZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmV2aW91c1RpbGVzID0gdGlsZXMubWFwKHQgPT4gdC5pbmRleCk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChuZXdUaWxlc1tpXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChuZXdUaWxlc1tpXSwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wcmV2aW91c1RpbGVzW2ldKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRoaXMucHJldmlvdXNUaWxlc1tpXSwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMucHJldmlvdXNUaWxlcyA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuREVTVFJPWV9USUxFOlxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuTU9WRV9USUxFOlxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCArIHZlbG9jaXR5LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCAtIHZlbG9jaXR5LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLlVQOlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSAtIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLkRPV046XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54LCB0aWxlc1tpXS55ICsgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5TSE9XX1RFWFQ6XHJcblx0XHRcdFx0XHRNb2RhbFV0aWxzLnNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGV4dCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuU0hPV19JTUFHRTpcclxuXHRcdFx0XHRcdE1vZGFsVXRpbHMuc2hvd0ltYWdlTW9kYWwodGhpcy5zY2VuZSwgdGV4dHVyZUtleSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zcGF3bkl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduSXRlbSh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnNwYXduSXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMubmF2aWdhdGVUbykge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmUucmVsb2FkUm9vbSh0aGlzLm5hdmlnYXRlVG8pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcmVwZWF0KSB7XHJcblx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKG9uQ29tcGxldGVDYWxsYmFjaykge1xyXG5cdFx0XHRcdG9uQ29tcGxldGVDYWxsYmFjayhpdGVtVXNlZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldEFjdGlvbihhY3Rpb24pIHtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0Z2V0QWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd25JdGVtKHNwYXduSXRlbSkge1xyXG5cdFx0dGhpcy5zcGF3bkl0ZW0gPSBzcGF3bkl0ZW07XHJcblx0fVxyXG5cclxuXHRnZXRTcGF3bkl0ZW0oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bkl0ZW07XHJcblx0fVxyXG5cclxuXHRzZXROYXZpZ2F0ZVRvKG5hdmlnYXRlVG8pIHtcclxuXHRcdHRoaXMubmF2aWdhdGVUbyA9IG5hdmlnYXRlVG87XHJcblx0fVxyXG5cclxuXHRnZXROYXZpZ2F0ZVRvKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2aWdhdGVUbztcclxuXHR9XHJcblxyXG5cdHNldEl0ZW1SZXF1aXJlZChpdGVtUmVxdWlyZWQpIHtcclxuXHRcdHRoaXMuaXRlbVJlcXVpcmVkID0gaXRlbVJlcXVpcmVkO1xyXG5cdH1cclxuXHJcblx0Z2V0SXRlbVJlcXVpcmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXRlbVJlcXVpcmVkO1xyXG5cdH1cclxuXHJcblx0c2V0SXRlbVJlcXVpcmVkTWVzc2FnZShpdGVtUmVxdWlyZWRNZXNzYWdlKSB7XHJcblx0XHR0aGlzLml0ZW1SZXF1aXJlZE1lc3NhZ2UgPSBpdGVtUmVxdWlyZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0Z2V0SXRlbVJlcXVpcmVkTWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLml0ZW1SZXF1aXJlZE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRzZXRJdGVtUmVxdWlyZWRNZXNzYWdlVmlzaWJsZShpdGVtUmVxdWlyZWRNZXNzYWdlVmlzaWJsZSkge1xyXG5cdFx0dGhpcy5pdGVtUmVxdWlyZWRNZXNzYWdlVmlzaWJsZSA9IGl0ZW1SZXF1aXJlZE1lc3NhZ2VWaXNpYmxlO1xyXG5cdH1cclxuXHJcblx0aXNJdGVtUmVxdWlyZWRNZXNzYWdlVmlzaWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLml0ZW1SZXF1aXJlZE1lc3NhZ2VWaXNpYmxlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcblx0Y29tYmluYXRpb24gPSBudWxsO1xyXG5cdHByb21wdE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgY29tYmluYXRpb24sIHByb21wdE1lc3NhZ2UpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSk7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gcHJvbXB0TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldENvbWJpbmF0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tYmluYXRpb247XHJcblx0fVxyXG5cclxuXHRzZXRDb21iaW5hdGlvbihjb21iaW5hdGlvbikge1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdH1cclxuXHJcblx0Z2V0UHJvbXB0TWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnByb21wdE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRzZXRQcm9tcHRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRcdHRoaXMucHJvbXB0TWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd25JdGVtKHNwYXduSXRlbSkge1xyXG5cdFx0dGhpcy5zcGF3bkl0ZW0gPSBzcGF3bkl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFNwYXduSXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGF3bkl0ZW07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vc2NlbmVzL0dhbWUnO1xyXG5pbXBvcnQgR2FtZU92ZXJTY2VuZSAgZnJvbSAnLi9zY2VuZXMvR2FtZU92ZXInO1xyXG5pbXBvcnQgV2luU2NlbmUgZnJvbSAnLi9zY2VuZXMvV2luJztcclxuaW1wb3J0IFNwbGFzaFNjZW5lIGZyb20gJy4vc2NlbmVzL01lbnUnO1xyXG5pbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gJy4vc2NlbmVzL0xvYWRpbmcnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cdHNjYWxlOiB7XHJcblx0XHRtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCxcclxuXHRcdHdpZHRoOiAxMDI0LFxyXG5cdFx0aGVpZ2h0OiA3NjhcclxuXHR9LFxyXG5cdHBoeXNpY3M6IHtcclxuXHRcdGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG5cdFx0YXJjYWRlOiB7XHJcblx0XHRcdGRlYnVnOiB0cnVlLFxyXG5cdFx0XHRncmF2aXR5OiB7IHk6IDIwMCB9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzY2VuZTogW0xvYWRpbmdTY2VuZSwgU3BsYXNoU2NlbmUsIEdhbWVTY2VuZSwgR2FtZU92ZXJTY2VuZSwgV2luU2NlbmVdXHJcbn07XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IENoZXN0IGZyb20gJy4uL2VudGl0aWVzL0NoZXN0JztcclxuaW1wb3J0IFNhZmUgZnJvbSAnLi4vZW50aXRpZXMvU2FmZSc7XHJcbmltcG9ydCBEb29yIGZyb20gJy4uL2VudGl0aWVzL0Rvb3InO1xyXG5pbXBvcnQgSW50ZXJhY3RpdmVab25lIGZyb20gJy4uL2VudGl0aWVzL0ludGVyYWN0aXZlWm9uZSc7XHJcbmltcG9ydCBNb2RhbFV0aWxzIGZyb20gJy4uL3V0aWxzL01vZGFsVXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUHJvcGVydHksIFRpbGVtYXBMYXllciwgRW50aXR5VHlwZSwgTG9hZGVyS2V5LCBBbmltYXRpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgVFJBTlNJVElPTl9ERUxBWSA9IDUwMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0c2lnbnMgPSBbXTtcclxuXHRzY3JhbWJsZWRTaWducyA9IFtdO1xyXG5cdGRvb3IgPSBudWxsO1xyXG5cdGNoZXN0cyA9IFtdO1xyXG5cdHRpbGVNYXAgPSBudWxsO1xyXG5cdHNhZmVzID0gW107XHJcblx0aXRlbXMgPSBbXTtcclxuXHRpdGVtSW1hZ2VzID0gW107XHJcblx0c2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRzZWxlY3RlZFJlY3RhbmdsZSA9IG51bGw7XHJcblx0cm9vbU5hbWUgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdnYW1lJyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmxvYWRSb29tKCdyb29tLW9uZScpO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb25zKCk7XHJcblx0XHR0aGlzLmNyZWF0ZUh1ZCgpO1xyXG5cdFx0dGhpcy5zdGFydFRpbWVyKDEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSHVkKCkge1xyXG5cdFx0Y29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoOTIwLCAyMCwgJ0l0ZW1zJywgeyBmb250U2l6ZTogJzIwcHgnLCBmb250RmFtaWx5OiAnVmVyZGFuYScgfSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVIdWQoKSB7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RlZFJlY3RhbmdsZSAmJiAhdGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pdGVtSW1hZ2VzKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5pdGVtSW1hZ2VzW2ldLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGl0ZW1JbWFnZSA9IHRoaXMuYWRkLmltYWdlKDk1MCwgaSAqIDUwICsgODAsIHRoaXMuaXRlbXNbaV0udGV4dHVyZUtleSwgdGhpcy5pdGVtc1tpXS50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0XHRpdGVtSW1hZ2Uuc2V0QWxwaGEoMCk7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRTY2FsZSgyKTtcclxuXHRcdFx0aXRlbUltYWdlLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcdGl0ZW1JbWFnZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZSA9IHRoaXMuYWRkLnJlY3RhbmdsZShpdGVtSW1hZ2UueCwgaXRlbUltYWdlLnksIDUwLCA1MCk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5zZXRTdHJva2VTdHlsZSgzLCAweGZmZmZmZik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHRcdHRhcmdldHM6IGl0ZW1JbWFnZSxcclxuXHRcdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwLFxyXG5cdFx0XHRcdHJlcGVhdDogMCxcclxuXHRcdFx0XHR5b3lvOiBmYWxzZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5pdGVtSW1hZ2VzLnB1c2goaXRlbUltYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxvYWRSb29tKHJvb21OYW1lKSB7XHJcblx0XHR0aGlzLnJvb21OYW1lID0gcm9vbU5hbWU7XHJcblx0XHR0aGlzLmNhbWVyYXMubWFpbi5mYWRlSW4oVFJBTlNJVElPTl9ERUxBWSwgMCwgMCwgMCk7XHJcblx0XHR0aGlzLnRpbGVNYXAgPSB0aGlzLmNyZWF0ZVRpbGVNYXAocm9vbU5hbWUpO1xyXG5cdFx0Y29uc3QgY2FzdGxlVGlsZXMgPSB0aGlzLmNyZWF0ZVRpbGVTZXQodGhpcy50aWxlTWFwLCAnY2FzdGxlLXRpbGVzJywgJ2Nhc3RsZS10aWxlcycpO1xyXG5cdFx0Y29uc3QgY3JlZXB5VGlsZXMgPSB0aGlzLmNyZWF0ZVRpbGVTZXQodGhpcy50aWxlTWFwLCAnY3JlZXB5LXRpbGVzJywgJ2NyZWVweS10aWxlcycpO1xyXG5cdFx0Y29uc3QgeyBvYmplY3RzTGF5ZXIsIGZvcmVncm91bmRMYXllciB9ID0gdGhpcy5nZXRUaWxlTWFwTGF5ZXJzKHRoaXMudGlsZU1hcCwgW2NyZWVweVRpbGVzLCBjYXN0bGVUaWxlc10pO1xyXG5cdFx0dGhpcy5sb2FkVGlsZU1hcE9iamVjdHMob2JqZWN0c0xheWVyKTtcclxuXHR9XHJcblxyXG5cdHJlbG9hZFJvb20ocm9vbUtleSkge1xyXG5cdFx0dGhpcy5jYW1lcmFzLm1haW4uZmFkZU91dChUUkFOU0lUSU9OX0RFTEFZLCAwLCAwLCAwLCAoY2FtZXJhLCBwcm9ncmVzcykgPT4ge1xyXG5cdFx0XHRpZiAocHJvZ3Jlc3MgPT09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRSb29tKHJvb21LZXkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRpbGVNYXAodGlsZU1hcEtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMubWFrZS50aWxlbWFwKHsga2V5OiB0aWxlTWFwS2V5IH0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGlsZVNldCh0aWxlTWFwLCB0aWxlU2V0S2V5LCB0aWxlU2V0VGV4dHVyZUtleSkge1xyXG5cdFx0cmV0dXJuIHRpbGVNYXAuYWRkVGlsZXNldEltYWdlKHRpbGVTZXRLZXksIHRpbGVTZXRUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdGdldFRpbGVNYXBMYXllcnModGlsZW1hcCwgdGlsZXNldHMpIHtcclxuXHRcdGNvbnN0IGJhY2tncm91bmRMYXllciA9IHRpbGVtYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkJBQ0tHUk9VTkQsIHRpbGVzZXRzKTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVtYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVzZXRzKTtcclxuXHRcdGNvbnN0IG9iamVjdHNMYXllciA9IHRpbGVtYXAuZ2V0T2JqZWN0TGF5ZXIoVGlsZW1hcExheWVyLk9CSkVDVFMpO1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZExheWVyLCBmb3JlZ3JvdW5kTGF5ZXIsIG9iamVjdHNMYXllciB9O1xyXG5cdH1cclxuXHJcblx0bG9hZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcikge1xyXG5cdFx0Y29uc3QgdGlsZU1hcE9iamVjdHMgPSBvYmplY3RzTGF5ZXIub2JqZWN0cztcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlTWFwT2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRzd2l0Y2ggKHRpbGVNYXBPYmplY3RzW2ldLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuSU5URVJBQ1RJVkVfWk9ORTpcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3RzW2ldKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5DSEVTVDpcclxuXHRcdFx0XHRcdHRoaXMuY2hlc3RzLnB1c2godGhpcy5jcmVhdGVDaGVzdCh0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLlNBRkU6XHJcblx0XHRcdFx0XHR0aGlzLnNhZmVzLnB1c2godGhpcy5jcmVhdGVTYWZlKHRpbGVNYXBPYmplY3RzW2ldKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuRE9PUjpcclxuXHRcdFx0XHRcdHRoaXMuZG9vciA9IHRoaXMuY3JlYXRlRG9vcih0aWxlTWFwT2JqZWN0c1tpXSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGNvbnN0IHpvbmUgPSBuZXcgSW50ZXJhY3RpdmVab25lKHRoaXMsIHRpbGVNYXBPYmplY3QueCwgdGlsZU1hcE9iamVjdC55LCB0aWxlTWFwT2JqZWN0LndpZHRoLCB0aWxlTWFwT2JqZWN0LmhlaWdodCk7XHJcblx0XHR6b25lLnNldEFjdGlvbih0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkFDVElPTikpO1xyXG5cdFx0em9uZS5zZXROYXZpZ2F0ZVRvKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkFWSUdBVEVfVE8pKTtcclxuXHRcdHpvbmUuc2V0SXRlbVJlcXVpcmVkKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuSVRFTV9SRVFVSVJFRCkpO1xyXG5cdFx0em9uZS5zZXRJdGVtUmVxdWlyZWRNZXNzYWdlKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuSVRFTV9SRVFVSVJFRF9NRVNTQUdFKSk7XHJcblx0XHR6b25lLnNldEl0ZW1SZXF1aXJlZE1lc3NhZ2VWaXNpYmxlKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuSVRFTV9SRVFVSVJFRF9NRVNTQUdFX1ZJU0lCTEUpKTtcclxuXHRcdHpvbmUuc2V0U3Bhd25JdGVtKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTSkpO1xyXG5cdFx0em9uZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdHpvbmUuZXhlY3V0ZUFjdGlvbih0aGlzLnNlbGVjdGVkSXRlbSwgKGl0ZW1Vc2VkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGl0ZW1Vc2VkKSB7XHJcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtPy5uYW1lID09PSB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSk7XHJcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNhZmUodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0Y29uc3Qgc2FmZSA9IG5ldyBTYWZlKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LngsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueSxcclxuXHRcdFx0TG9hZGVyS2V5LlNBRkUsXHJcblx0XHRcdDEyLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQ09NQklOQVRJT04pLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlBST01QVF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdHNhZmUuc2V0U3Bhd25JdGVtKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTSkpO1xyXG5cdFx0c2FmZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGlmICghc2FmZS5pc09wZW5lZCgpKSB7XHJcblx0XHRcdFx0Y29uc3QgYW5zd2VyID0gd2luZG93LnByb21wdChzYWZlLmdldFByb21wdE1lc3NhZ2UoKSk7XHJcblx0XHRcdFx0aWYgKGFuc3dlciAmJiBhbnN3ZXIudG9Mb2NhbGVVcHBlckNhc2UoKSA9PT0gc2FmZS5nZXRDb21iaW5hdGlvbigpLnRvTG9jYWxlVXBwZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdHNhZmUucGxheShBbmltYXRpb24uU0FGRV9PUEVOKTtcclxuXHRcdFx0XHRcdHNhZmUuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oc2FmZS54LCBzYWZlLnkgKyBzYWZlLmhlaWdodCwgc2FmZS5nZXRTcGF3bkl0ZW0oKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzYWZlO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRG9vcih0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRjb25zdCBkb29yID0gbmV3IERvb3IoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuRE9PUixcclxuXHRcdFx0MTAsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRUQpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGRvb3Iub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZG9vci5pc0xvY2tlZCgpKSB7XHJcblx0XHRcdFx0TW9kYWxVdGlscy5zaG93VGV4dE1vZGFsKHRoaXMsIGRvb3IuZ2V0TG9ja2VkTWVzc2FnZSgpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkb29yLnBsYXkoQW5pbWF0aW9uLkRPT1JfT1BFTik7XHJcblx0XHRcdFx0ZG9vci5zZXRPcGVuZWQodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGRvb3I7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDaGVzdCh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRjb25zdCBjaGVzdCA9IG5ldyBDaGVzdChcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC54LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LnksXHJcblx0XHRcdExvYWRlcktleS5DSEVTVCxcclxuXHRcdFx0bnVsbCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTE9DS0VEX01FU1NBR0UpXHJcblx0XHQpO1xyXG5cdFx0Y2hlc3Quc2V0U3Bhd25JdGVtKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTSkpO1xyXG5cdFx0Y2hlc3Qub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoY2hlc3QuaXNMb2NrZWQoKSkge1xyXG5cdFx0XHRcdE1vZGFsVXRpbHMuc2hvd1RleHRNb2RhbCh0aGlzLCBjaGVzdC5sb2NrZWRNZXNzYWdlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoIWNoZXN0LmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHRcdGNoZXN0LnBsYXkoQW5pbWF0aW9uLkNIRVNUX09QRU4pO1xyXG5cdFx0XHRcdFx0Y2hlc3Quc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oY2hlc3QueCwgY2hlc3QueSArIGNoZXN0LmhlaWdodCArIDUsIGNoZXN0LmdldFNwYXduSXRlbSgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGNoZXN0O1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQW5pbWF0aW9ucygpIHtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5TQUZFX09QRU4sIExvYWRlcktleS5TQUZFLCBbMTNdLCA0KTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5ET09SX09QRU4sIExvYWRlcktleS5ET09SLCBbNSwgMF0sIDQpO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLkNIRVNUX09QRU4sIExvYWRlcktleS5DSEVTVCwgWzFdLCA4LCAtMSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBbmltYXRpb24oa2V5LCB0ZXh0dXJlLCBmcmFtZXMsIGZyYW1lUmF0ZSwgcmVwZWF0KSB7XHJcblx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdGtleSxcclxuXHRcdFx0ZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHRleHR1cmUsIHsgZnJhbWVzIH0pLFxyXG5cdFx0XHRmcmFtZVJhdGUsXHJcblx0XHRcdHJlcGVhdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgbmFtZSkge1xyXG5cdFx0bGV0IHByb3BlcnR5ID0gbnVsbDtcclxuXHRcdGlmIChzcGF3bk9iamVjdCkge1xyXG5cdFx0XHRwcm9wZXJ0eSA9IHNwYXduT2JqZWN0LnByb3BlcnRpZXMuZmluZCgocHJvcGVydHkpID0+IHByb3BlcnR5Lm5hbWUgPT09IG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BlcnR5Py52YWx1ZTtcclxuXHR9XHJcblxyXG5cdGdldERpYWxvZyhkaWFsb2dzLCBuYW1lKSB7XHJcblx0XHRyZXR1cm4gZGlhbG9ncy5maW5kKChkaWFsb2cpID0+IGRpYWxvZy5uYW1lID09IG5hbWUpO1xyXG5cdH1cclxuXHJcblx0c3Bhd25JdGVtKHgsIHksIGl0ZW0pIHtcclxuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgaXRlbS50ZXh0dXJlS2V5LCBpdGVtLnRleHR1cmVGcmFtZSk7XHJcblx0XHRpbWFnZS5zZXRTY2FsZSgyKTtcclxuXHRcdGltYWdlLnNldEFscGhhKDApO1xyXG5cdFx0aW1hZ2Uuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdGltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aW1hZ2UuZGVzdHJveSgpO1xyXG5cdFx0XHRNb2RhbFV0aWxzLnNob3dJdGVtTW9kYWwodGhpcywgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS50ZXh0dXJlS2V5LCBpdGVtLnRleHR1cmVGcmFtZSwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXRlbXMucHVzaCh7XHJcblx0XHRcdFx0XHRuYW1lOiBpdGVtLm5hbWUsXHJcblx0XHRcdFx0XHR0ZXh0dXJlS2V5OiBpdGVtLnRleHR1cmVLZXksXHJcblx0XHRcdFx0XHR0ZXh0dXJlRnJhbWU6IGl0ZW0udGV4dHVyZUZyYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IGltYWdlLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aXNJdGVtU2VsZWN0ZWQobmFtZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lID09PSBuYW1lO1xyXG5cdH1cclxuXHJcblx0c3RhcnRUaW1lcihudW1iZXJPZkhvdXJzKSB7XHJcblx0XHRpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcblx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShub3cgKyBudW1iZXJPZkhvdXJzICogNjAgKiA2MCAqIDEwMDApLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdHRoaXMudGltZVJlbWFpbmluZyA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdztcclxuXHRcdFx0XHRpZiAobm93ID49IHRoaXMuY291bnREb3duRGF0ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVUaW1lKCkge1xyXG5cdFx0aWYgKHRoaXMudGltZVRleHQpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBob3Vyc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuXHRcdGNvbnN0IG1pbnV0ZXNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuXHRcdGNvbnN0IHNlY29uZHNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHRcdGlmICh0aGlzLnRpbWVSZW1haW5pbmcpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dCA9IHRoaXMuYWRkLnRleHQoOTE1LCA3MzAsIGAke2hvdXJzUmVtYWluaW5nfToke21pbnV0ZXNSZW1haW5pbmd9OiR7c2Vjb25kc1JlbWFpbmluZ31gLCB7XHJcblx0XHRcdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYScsXHJcblx0XHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy51cGRhdGVUaW1lKCk7XHJcblx0XHRzd2l0Y2ggKHRoaXMucm9vbU5hbWUpIHtcclxuXHRcdFx0Y2FzZSAncm9vbS1vbmUnOlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyb29tLXR3byc6XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pc1RpbWVFbGFwc2VkKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWVvdmVyJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdnYW1lb3ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0dhbWUgb3ZlcicsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignbG9hZGluZycpO1xyXG5cdH1cclxuXHJcblx0cHJlbG9hZCgpIHtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLW9uZScsICdhc3NldHMvanNvbi9yb29tLW9uZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tdHdvJywgJ2Fzc2V0cy9qc29uL3Jvb20tdHdvLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ2Nhc3RsZS10aWxlcycsICdhc3NldHMvaW1nL2Nhc3RsZS10aWxlcy9UaWxlc2V0LnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjcmVlcHktdGlsZXMnLCAnYXNzZXRzL2ltZy90aWxlcy5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZShMb2FkZXJLZXkuTUVOVV9JTUFHRSwgJ2Fzc2V0cy9pbWcvY2FzdGxlLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCd0ZXN0JywgJ2Fzc2V0cy9pbWcvaHRtbC1jc3MtamF2YXNjcmlwdC5qcGcnKTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuSVRFTVMsICdhc3NldHMvaW1nL2l0ZW1zLnBuZycsIHsgZnJhbWVXaWR0aDogMTYsIGZyYW1lSGVpZ2h0OiAxNiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuVUksICdhc3NldHMvaW1nL3VpLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAxMyB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuQ0hFU1QsICdhc3NldHMvaW1nL2NoZXN0LnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuRE9PUiwgJ2Fzc2V0cy9pbWcvZG9vci5wbmcnLCB7IGZyYW1lV2lkdGg6IDI0LCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LlNBRkUsICdhc3NldHMvaW1nL3NhZmUucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDQwIH0pO1xyXG5cclxuXHRcdHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ21lbnUnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ21lbnUnKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgwLCAwLCBMb2FkZXJLZXkuTUVOVV9JTUFHRSkuc2V0T3JpZ2luKDApLnNldFNjYWxlKDAuOCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoMzUwLCAzODQsICdFc2NhcGUgZnJvbSB0aGUgY2FzdGxlJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzMycHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IGNsaWNrVG9Db250aW51ZSA9IHRoaXMuYWRkLnRleHQoNTEyLCA0NjAsICdDbGljayB0byBzdGFydCB0aGUgZ2FtZScsIHtcclxuXHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcblx0XHR9KTtcclxuXHRcdGNsaWNrVG9Db250aW51ZS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0aWYgKHRoaXMuaW5wdXQubWFuYWdlci5hY3RpdmVQb2ludGVyLmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdnYW1lJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbm5pbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0NvbmdyYXR1bGF0aW9ucyBmb3IgZXNjYXBpbmc/IFRoYW5rIHlvdSBmb3IgcGxheWluZyEnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFV0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgc2hvd1RleHRNb2RhbChzY2VuZSwgdGV4dCwgc2l6ZSA9ICdub3JtYWwnLCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0XHRsZXQgYm94ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZVRleHQgPSBudWxsO1xyXG5cclxuXHRcdHN3aXRjaCAoc2l6ZSkge1xyXG5cdFx0XHRjYXNlICdub3JtYWwnOlxyXG5cdFx0XHRcdGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAxNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdFx0Y2xvc2VUZXh0ID0gc2NlbmUuYWRkXHJcblx0XHRcdFx0XHQudGV4dCgxNTUsIC02OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xhcmdlJzpcclxuXHRcdFx0XHRjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdFx0XHRcdC50ZXh0KDE1NSwgLTE2OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcdFx0Ym94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDM1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNvbnN0IHRleHRPYmogPSBzY2VuZS5hZGRcclxuXHRcdFx0LnRleHQoMCwgMCwgdGV4dCwge1xyXG5cdFx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0fSlcclxuXHRcdFx0LnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRcdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRkdXJhdGlvbjogMjAwXHJcblx0XHR9KTtcclxuXHRcdG1vZGFsLmFkZChbYm94LCB0ZXh0T2JqLCBjbG9zZVRleHRdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIHNob3dJbWFnZU1vZGFsKHNjZW5lLCBpbWFnZUtleSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0Y29uc3QgYmxvY2tlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgc2NlbmUuc2NhbGUud2lkdGgsIHNjZW5lLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdFx0Y29uc3QgYm94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDM1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdGNvbnN0IGltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsIGltYWdlS2V5KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdGltYWdlLnNldERpc3BsYXlTaXplKGJveC53aWR0aCAtIDYwLCBib3guaGVpZ2h0IC0gNjApO1xyXG5cclxuXHRcdGNvbnN0IGNsb3NlVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0XHQudGV4dCgxNTUsIC0xNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcblx0XHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1vZGFsLmFkZChbYm94LCBpbWFnZSwgY2xvc2VUZXh0XSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBzaG93SXRlbU1vZGFsKHNjZW5lLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUsIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0Y29uc3QgbW9kYWwgPSBzY2VuZS5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRcdGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAxNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRjb25zdCBjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdFx0LnRleHQoMTU1LCAtNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcblx0XHRjb25zdCBpdGVtSW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgLTEwLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lKS5zZXRTY2FsZSgyLjUpO1xyXG5cdFx0Y29uc3QgaXRlbURlc2NyaXB0aW9uVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0XHQudGV4dCgwLCAzMCwgaXRlbURlc2NyaXB0aW9uLCB7XHJcblx0XHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0XHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1vZGFsLmFkZChbYm94LCBpdGVtSW1hZ2UsIGl0ZW1EZXNjcmlwdGlvblRleHQsIGNsb3NlVGV4dF0pO1xyXG5cdH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV9kcmFjdWxhX2Nhc3RsZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV9kcmFjdWxhX2Nhc3RsZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=