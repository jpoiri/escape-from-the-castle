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
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   CustomProperty: () => (/* binding */ CustomProperty),
/* harmony export */   Direction: () => (/* binding */ Direction),
/* harmony export */   EntityType: () => (/* binding */ EntityType),
/* harmony export */   Frame: () => (/* binding */ Frame),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   LoaderKey: () => (/* binding */ LoaderKey),
/* harmony export */   Tile: () => (/* binding */ Tile),
/* harmony export */   TileAction: () => (/* binding */ TileAction),
/* harmony export */   TilemapLayer: () => (/* binding */ TilemapLayer)
/* harmony export */ });
const CustomProperty = {
	COMBINATION: 'combination',
	PROMPT_MESSAGE: 'promptMessage',
	SPAWN_ITEM_NAME: 'spawnItem',
	SPAWN_ITEM_TEXTURE: 'spawnItemTexture',
	SPAWN_ITEM_FRAME: 'spawnItemFrame',
	SPAWN_ITEM_DESCRIPTION: 'spawnItemDescription',
	LOCKED: 'locked',
	LOCKED_MESSAGE: 'lockedMessage',
	TEXT: 'text',
	VISIBLE: 'visible',
	SCRAMBLED: 'scrambled',
	SCRAMBLED_TEXT: 'scrambledText',
	ACTION: 'action',
	NEW_TILES: 'newTiles',
	VELOCITY: 'velocity',
	DIRECTION: 'direction',
	NAVIGATE_TO: 'navigateTo',
	IMAGE_KEY: 'imageKey'
};

const TileAction = {
	MOVE: 'move',
	DESTROY: 'destroy',
	REPLACE: 'replace'
};

const Direction = {
	LEFT: 'left',
	RIGHT: 'right',
	UP: 'UP',
	DOWN: 'down'
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
Object.freeze(TileAction);




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

/***/ "./src/entities/ImageModal.js":
/*!************************************!*\
  !*** ./src/entities/ImageModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageSign)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class ImageSign extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Rectangle {
    imageKey = null;

    constructor(scene, x, y, width, heigh, imageKey) {
        super(scene, x, y, width, heigh);
        scene.add.existing(this);
        this.setOrigin(0, 0);
		this.setInteractive();
        this.imageKey = imageKey;
    }

    setImageKey(imageKey) {
        this.imageKey = imageKey;
    }

    getImageKey() {
        return this.imageKey;
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



class InteractiveZone extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Rectangle {
	velocity = 0;
	direction = null;
	action = null;
	newTiles = null;
	spawnItem = null;
	navigateTo = null;

	constructor(scene, x, y, width, height) {
		super(scene, x, y, width, height);
		this.setOrigin(0, 0);
		this.setInteractive();
		scene.add.existing(this);

		this.on('pointerdown', () => {
			const tiles = scene.tileMap.getTilesWithinWorldXY(
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
			switch (this.action) {
				case _constants__WEBPACK_IMPORTED_MODULE_1__.TileAction.REPLACE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						if (this.newTiles[i]) {
							scene.tileMap.putTileAt(this.newTiles[i], tiles[i].x, tiles[i].y);
						}
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.TileAction.DESTROY:
					for (let i = 0, len = tiles.length; i < len; i++) {
						scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.TileAction.MOVE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					switch (this.direction) {
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tileMap.putTileAt(tiles[i].index, tiles[i].x + this.velocity, tiles[i].y);
							}
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tileMap.putTileAt(tiles[i].index, tiles[i].x - this.velocity, tiles[i].y);
							}
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - this.velocity);
							}
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + this.velocity);
							}
							break;
					}
					break;
			}
			if (this.spawnItem) {
				scene.spawnItem(this.x + this.width / 2, this.y + this.height / 2, this.spawnItem);
			}
			if (this.navigateTo) {
				scene.reloadRoom(this.navigateTo);
			}
			this.destroy();
		});
	}

	setVelocity(velocity) {
		this.velocity = velocity;
	}

	getVelocity() {
		return this.velocity;
	}

	setAction(action) {
		this.action = action;
	}

	getAction() {
		return this.action;
	}

	setDirection(direction) {
		this.direction = direction;
	}

	getDirection() {
		return this.direction;
	}

	setSpawnItem(spawnItem) {
		this.spawnItem = spawnItem;
	}

	getSpawnItem() {
		return this.spawnItem;
	}

	setNewTiles(newTiles) {
		this.newTiles = newTiles;
	}

	getNewTiles() {
		return this.newTiles;
	}

	setNavigateTo(navigateTo) {
		this.navigateTo = navigateTo;
	}

	getNavigateTo() {
		return this.navigateTo;
	}
}


/***/ }),

/***/ "./src/entities/Item.js":
/*!******************************!*\
  !*** ./src/entities/Item.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
class Item {

	name = null;
	texture = null;
	frame = null;
    description = null;
    
    constructor(name, description, texture, frame) {
        this.name = name;
        this.description = description;
        this.texture = texture;
        this.frame = frame;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getTexture() {
        return this.texture;
    }

    setTexture(texture) {
        this.texture = texture;
    }

    setFrame(frame) {
        this.frame = frame;
    }

    getFrame() {
        return this.frame;
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

/***/ "./src/entities/ScrambledSign.js":
/*!***************************************!*\
  !*** ./src/entities/ScrambledSign.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrambledSign)
/* harmony export */ });
/* harmony import */ var _TextModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextModal */ "./src/entities/TextModal.js");


class ScrambledSign extends _TextModal__WEBPACK_IMPORTED_MODULE_0__["default"] {

    scrambled = true;
    scrambledText = null;

	constructor(scene, x, y, name, text, visible, scrambled, scrambledText) {
        super(scene, x, y, name, text, visible);
        this.scrambled = scrambled;
        this.scrambledText = scrambledText;
    }
    
    isScrambled() {
        return this.scrambled;
    }

    setScrambled(scrambled) {
        this.scrambled = scrambled;
    }

    getScrambledText() {
        return this.scrambledText;
    }

    setScrambledText(text) {
        this.scrambledText = text;
    }
}


/***/ }),

/***/ "./src/entities/TextModal.js":
/*!***********************************!*\
  !*** ./src/entities/TextModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sign)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class Sign extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Rectangle {
	text = null;
	name = null;
	visible = false;

	constructor(scene, x, y, name, text, visible) {
		super(scene, x, y);
		scene.add.existing(this);
		this.setOrigin(0, 0);
		this.setInteractive();
		this.name = name;
		this.text = text;
		this.visible = visible;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	getText() {
		return this.text;
	}

	setText(text) {
		this.text = text;
	}

	isVisible() {
		return this.visible;
	}

	setVisible(visible) {
		this.visible = visible;
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
/* harmony import */ var _entities_TextModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/TextModal */ "./src/entities/TextModal.js");
/* harmony import */ var _entities_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/Item */ "./src/entities/Item.js");
/* harmony import */ var _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/ScrambledSign */ "./src/entities/ScrambledSign.js");
/* harmony import */ var _entities_ImageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entities/ImageModal */ "./src/entities/ImageModal.js");
/* harmony import */ var _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entities/InteractiveZone */ "./src/entities/InteractiveZone.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/constants.js");











const TRANSITION_DELAY = 500;

class GameScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
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
			image.setAlpha(0);
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
			this.tweens.add({
				targets: image,
				alpha: 1,
				ease: 'Linear',
				duration: 200,
				repeat: 0,
				yoyo: false
			});
		}
	}

	loadRoom(roomKey) {
		this.cameras.main.fadeIn(TRANSITION_DELAY, 0, 0, 0);
		this.tileMap = this.createTileMap(roomKey);
		const tileSet = this.createTileSet(this.tileMap, 'castle-tiles', _constants__WEBPACK_IMPORTED_MODULE_9__.LoaderKey.TILESET);
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
		const backgroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_9__.TilemapLayer.BACKGROUND, tileset);
		const foregroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_9__.TilemapLayer.FOREGROUND, tileset);
		const objectsLayer = tilemap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_9__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	loadTileMapObjects(objectsLayer) {
		const tileMapObjects = objectsLayer.objects;
		for (let i = 0, len = tileMapObjects.length; i < len; i++) {
			switch (tileMapObjects[i].type) {
				case _constants__WEBPACK_IMPORTED_MODULE_9__.EntityType.INTERACTIVE_ZONE:
					this.createInteractiveZone(tileMapObjects[i]);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_9__.EntityType.CHEST:
					this.chests.push(this.createChest(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_9__.EntityType.SAFE:
					this.safes.push(this.createSafe(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_9__.EntityType.DOOR:
					this.door = this.createDoor(tileMapObjects[i]);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_9__.EntityType.TEXT_MODAL:
					this.signs.push(this.createTextModal(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_9__.EntityType.IMAGE_MODAL:
					this.createImageModal(tileMapObjects[i]);
			}
		}
	}

	createInteractiveZone(tileMapObject) {
		const zone = new _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_8__["default"](this, tileMapObject.x, tileMapObject.y, tileMapObject.width, tileMapObject.height);
		zone.setVelocity(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.VELOCITY));
		zone.setDirection(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.DIRECTION));
		zone.setAction(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.ACTION));
		zone.setNewTiles(
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.NEW_TILES)
				?.split(',')
				.map((s) => parseInt(s))
		);
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.NAVIGATE_TO));
		const itemName = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_NAME);
		if (itemName) {
			zone.setSpawnItem(
				new _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"](
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_DESCRIPTION),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_FRAME)
				)
			);
		}
	}

	createImageModal(tileMapObject) {
		const imageSign = new _entities_ImageModal__WEBPACK_IMPORTED_MODULE_7__["default"](this, tileMapObject.x, tileMapObject.y, tileMapObject.width, tileMapObject.height);
		imageSign.setImageKey(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.IMAGE_KEY));
		imageSign.on('pointerdown', () => {
			this.showImageModal(imageSign.getImageKey());
		});
	}

	createSafe(tileMapObject) {
		const safe = new _entities_Safe__WEBPACK_IMPORTED_MODULE_2__["default"](
			this,
			tileMapObject.x,
			tileMapObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_9__.LoaderKey.SAFE,
			12,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.COMBINATION),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.PROMPT_MESSAGE)
		);
		const itemName = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_NAME);
		if (itemName) {
			safe.setSpawnItem(
				new _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"](
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_DESCRIPTION),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_FRAME)
				)
			);
		}
		safe.on('pointerdown', () => {
			if (!safe.isOpened()) {
				const answer = window.prompt(safe.getPromptMessage());
				if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
					safe.play(_constants__WEBPACK_IMPORTED_MODULE_9__.Animation.SAFE_OPEN);
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
			_constants__WEBPACK_IMPORTED_MODULE_9__.LoaderKey.DOOR,
			10,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				this.showTextModal(door.getLockedMessage());
			} else {
				door.play(_constants__WEBPACK_IMPORTED_MODULE_9__.Animation.DOOR_OPEN);
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
			_constants__WEBPACK_IMPORTED_MODULE_9__.LoaderKey.CHEST,
			null,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.LOCKED_MESSAGE)
		);
		const itemName = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_NAME);
		if (itemName) {
			chest.setSpawnItem(
				new _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"](
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_DESCRIPTION),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SPAWN_ITEM_FRAME)
				)
			);
		}
		chest.on('pointerdown', () => {
			if (chest.isLocked()) {
				this.showTextModal(chest.lockedMessage);
			} else {
				if (!chest.isOpened()) {
					chest.play(_constants__WEBPACK_IMPORTED_MODULE_9__.Animation.CHEST_OPEN);
					chest.setOpened(true);
					this.spawnItem(chest.x, chest.y + chest.height + 5, chest.getSpawnItem());
				}
			}
		});
		return chest;
	}

	createScrambledSign(spawnObject) {
		const sign = new _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_6__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.TEXT),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.VISIBLE),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SCRAMBLED),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.SCRAMBLED_TEXT)
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

	createTextModal(spawnObject) {
		const sign = new _entities_TextModal__WEBPACK_IMPORTED_MODULE_4__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.TEXT),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_9__.CustomProperty.VISIBLE)
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
		const modal = this.add.container(450, 350).setAlpha(0);

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

		this.tweens.add({
			targets: modal,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});

		modal.add([box, itemImage, itemDescriptionText, closeText]);
	}

	showImageModal(imageKey, closeCallback) {
		const blocker = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = this.add.container(450, 350).setAlpha(0);
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

		this.tweens.add({
			targets: modal,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});

		modal.add([box, image, closeText]);
	}

	showTextModal(text, size = 'normal', closeCallback) {
		const blocker = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
		const modal = this.add.container(450, 350).setAlpha(0);
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
		this.tweens.add({
			targets: modal,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});
		modal.add([box, textObj, closeText]);
	}

	createAnimations() {
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_9__.Animation.SAFE_OPEN, _constants__WEBPACK_IMPORTED_MODULE_9__.LoaderKey.SAFE, [13], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_9__.Animation.DOOR_OPEN, _constants__WEBPACK_IMPORTED_MODULE_9__.LoaderKey.DOOR, [5, 0], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_9__.Animation.CHEST_OPEN, _constants__WEBPACK_IMPORTED_MODULE_9__.LoaderKey.CHEST, [1], 8, -1);
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
		image.setAlpha(0);
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
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.TILESET, 'assets/img/castle-tiles/Tileset.png');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SHhGO0FBQzVCO0FBQ2Usb0JBQW9CLHVEQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9DaGVzdC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9Eb29yLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0ltYWdlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvSW50ZXJhY3RpdmVab25lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0l0ZW0uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvU2FmZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9TY3JhbWJsZWRTaWduLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL1RleHRNb2RhbC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL01lbnUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL1dpbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEN1c3RvbVByb3BlcnR5ID0ge1xyXG5cdENPTUJJTkFUSU9OOiAnY29tYmluYXRpb24nLFxyXG5cdFBST01QVF9NRVNTQUdFOiAncHJvbXB0TWVzc2FnZScsXHJcblx0U1BBV05fSVRFTV9OQU1FOiAnc3Bhd25JdGVtJyxcclxuXHRTUEFXTl9JVEVNX1RFWFRVUkU6ICdzcGF3bkl0ZW1UZXh0dXJlJyxcclxuXHRTUEFXTl9JVEVNX0ZSQU1FOiAnc3Bhd25JdGVtRnJhbWUnLFxyXG5cdFNQQVdOX0lURU1fREVTQ1JJUFRJT046ICdzcGF3bkl0ZW1EZXNjcmlwdGlvbicsXHJcblx0TE9DS0VEOiAnbG9ja2VkJyxcclxuXHRMT0NLRURfTUVTU0FHRTogJ2xvY2tlZE1lc3NhZ2UnLFxyXG5cdFRFWFQ6ICd0ZXh0JyxcclxuXHRWSVNJQkxFOiAndmlzaWJsZScsXHJcblx0U0NSQU1CTEVEOiAnc2NyYW1ibGVkJyxcclxuXHRTQ1JBTUJMRURfVEVYVDogJ3NjcmFtYmxlZFRleHQnLFxyXG5cdEFDVElPTjogJ2FjdGlvbicsXHJcblx0TkVXX1RJTEVTOiAnbmV3VGlsZXMnLFxyXG5cdFZFTE9DSVRZOiAndmVsb2NpdHknLFxyXG5cdERJUkVDVElPTjogJ2RpcmVjdGlvbicsXHJcblx0TkFWSUdBVEVfVE86ICduYXZpZ2F0ZVRvJyxcclxuXHRJTUFHRV9LRVk6ICdpbWFnZUtleSdcclxufTtcclxuXHJcbmNvbnN0IFRpbGVBY3Rpb24gPSB7XHJcblx0TU9WRTogJ21vdmUnLFxyXG5cdERFU1RST1k6ICdkZXN0cm95JyxcclxuXHRSRVBMQUNFOiAncmVwbGFjZSdcclxufTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuXHRMRUZUOiAnbGVmdCcsXHJcblx0UklHSFQ6ICdyaWdodCcsXHJcblx0VVA6ICdVUCcsXHJcblx0RE9XTjogJ2Rvd24nXHJcbn07XHJcblxyXG5jb25zdCBUaWxlbWFwTGF5ZXIgPSB7XHJcblx0QkFDS0dST1VORDogJ2JhY2tncm91bmQnLFxyXG5cdEZPUkVHUk9VTkQ6ICdmb3JlZ3JvdW5kJyxcclxuXHRPQkpFQ1RTOiAnb2JqZWN0cydcclxufTtcclxuXHJcbmNvbnN0IEVudGl0eVR5cGUgPSB7XHJcblx0RE9PUjogJ0Rvb3InLFxyXG5cdFNBRkU6ICdTYWZlJyxcclxuXHRDSEVTVDogJ0NoZXN0JyxcclxuXHRURVhUX01PREFMOiAnVGV4dE1vZGFsJyxcclxuXHRJTlRFUkFDVElWRV9aT05FOiAnSW50ZXJhY3RpdmVab25lJyxcclxuXHRJTUFHRV9NT0RBTDogJ0ltYWdlTW9kYWwnXHJcbn07XHJcblxyXG5jb25zdCBMb2FkZXJLZXkgPSB7XHJcblx0VElMRU1BUDogJ3RpbGVtYXAnLFxyXG5cdFRJTEVTRVQ6ICd0aWxlcycsXHJcblx0SVRFTVM6ICdpdGVtcycsXHJcblx0VUk6ICd1aScsXHJcblx0Q0hFU1Q6ICdjaGVzdCcsXHJcblx0RE9PUjogJ2Rvb3InLFxyXG5cdFNBRkU6ICdzYWZlJyxcclxuXHRNRU5VX0lNQUdFOiAnbWVudS1pbWFnZSdcclxufTtcclxuXHJcbmNvbnN0IFRpbGUgPSB7XHJcblx0U0lHTjogMTQ0LFxyXG5cdENMT1NFX1dJTkRPVzogMjU4LFxyXG5cdE9QRU5fV0lORE9XOiAyMzUsXHJcblx0Q09GRklOOiBbNzEsIDk1XSxcclxuXHRERVNUUk9ZRURfS05JR0hUOiA5NixcclxuXHRUT1BfQ0hBSVI6IDMxMixcclxuXHRNSURETEVfQ0hBSVI6IDMzNixcclxuXHRCT1RUT01fQ0hBSVI6IDM2MCxcclxuXHRIT0xFX0lOX1dBTEw6IDI0OSxcclxuXHRUT1BfTEVGVF9HQVJHT1lMRTogMjMyLFxyXG5cdFRPUF9SSUdIVF9HQVJHT1lMRTogMjMzLFxyXG5cdEJPVFRPTV9MRUZUX0dBUkdPWUxFOiAyNTYsXHJcblx0Qk9UVE9NX1JJR0hUX0dBUkdPWUxFOiAyNTcsXHJcblx0VE9QX0xFRlRfV0FURVI6IDEwLFxyXG5cdFRPUF9DRU5URVJfV0FURVI6IDExLFxyXG5cdFRPUF9SSUdIVF9XQVRFUjogMTIsXHJcblx0TUlERExFX0xFRlRfV0FURVI6IDM0LFxyXG5cdE1JRERMRV9DRU5URVJfV0FURVI6IDM1LFxyXG5cdE1JRERMRV9SSUdIVF9XQVRFUjogMzYsXHJcblx0Qk9UVE9NX0xFRlRfV0FURVI6IDU4LFxyXG5cdEJPVFRPTV9DRU5URVJfV0FURVI6IDU5LFxyXG5cdEJPVFRPTV9SSUdIVF9XQVRFUjogNjAsXHJcblx0RElHR0VEX0hPTEU6IDMxNixcclxuXHRTVEFJUjogMTI0XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0ge1xyXG5cdEJPT0s6ICdib29rJyxcclxuXHRIQU1NRVI6ICdoYW1tZXInLFxyXG5cdFBJQ0tBWEU6ICdwaWNrYXhlJyxcclxuXHRLRVk6ICdrZXknLFxyXG5cdE1BU1RFUl9LRVk6ICdtYXN0ZXIta2V5JyxcclxuXHRJQ0VfUk9EOiAnaWNlLXJvZCcsXHJcblx0UE9USU9OOiAncG90aW9uJyxcclxuXHRTSE9WRUw6ICdzaG92ZWwnLFxyXG5cdFJJTkc6ICdyaW5nJ1xyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0aW9uID0ge1xyXG5cdERPT1JfT1BFTjogJ2Rvb3Itb3BlbicsXHJcblx0U0FGRV9PUEVOOiAnc2FmZS1vcGVuJyxcclxuXHRDSEVTVF9PUEVOOiAnY2hlc3Qtb3BlbidcclxufTtcclxuXHJcbmNvbnN0IEZyYW1lID0ge1xyXG5cdE1BU1RFUl9LRVk6IDUxLFxyXG5cdFBJQ0tBWEU6IDgzLFxyXG5cdFBPVElPTjogNjEsXHJcblx0S0VZOiA1MCxcclxuXHRSSU5HOiAxM1xyXG59O1xyXG5cclxuT2JqZWN0LmZyZWV6ZShUaWxlbWFwTGF5ZXIpO1xyXG5PYmplY3QuZnJlZXplKEN1c3RvbVByb3BlcnR5KTtcclxuT2JqZWN0LmZyZWV6ZShMb2FkZXJLZXkpO1xyXG5PYmplY3QuZnJlZXplKEVudGl0eVR5cGUpO1xyXG5PYmplY3QuZnJlZXplKFRpbGUpO1xyXG5PYmplY3QuZnJlZXplKEl0ZW0pO1xyXG5PYmplY3QuZnJlZXplKEFuaW1hdGlvbik7XHJcbk9iamVjdC5mcmVlemUoRnJhbWUpO1xyXG5PYmplY3QuZnJlZXplKERpcmVjdGlvbik7XHJcbk9iamVjdC5mcmVlemUoVGlsZUFjdGlvbik7XHJcblxyXG5leHBvcnQgeyBUaWxlbWFwTGF5ZXIsIEN1c3RvbVByb3BlcnR5LCBMb2FkZXJLZXksIEVudGl0eVR5cGUsIFRpbGUsIEl0ZW0sIEFuaW1hdGlvbiwgRnJhbWUsIFRpbGVBY3Rpb24sIERpcmVjdGlvbiB9O1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVzdCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuXHRsb2NrZWQgPSB0cnVlO1xyXG5cdGxvY2tlZE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgbG9ja2VkLCBsb2NrZWRNZXNzYWdlKSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUpO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbG9ja2VkTWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHR1bmxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aXNMb2NrZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubG9ja2VkTWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9ja2VkTWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHRcclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd25JdGVtKHNwYXduSXRlbSkge1xyXG5cdFx0dGhpcy5zcGF3bUl0ZW0gPSBzcGF3bkl0ZW07XHJcblx0fVxyXG5cclxuXHRnZXRTcGF3bkl0ZW0oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bUl0ZW07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRuYW1lID0gbnVsbDtcclxuXHRsb2NrZWQgPSBmYWxzZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBsb2NrZWQsIGxvY2tlZE1lc3NhZ2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKGZyYW1lKTtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgyKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuXHR9XHJcblxyXG5cdHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldExvY2tlZE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVNpZ24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgICBpbWFnZUtleSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgd2lkdGgsIGhlaWdoLCBpbWFnZUtleSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgd2lkdGgsIGhlaWdoKTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgICAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VLZXkgPSBpbWFnZUtleTtcbiAgICB9XG5cbiAgICBzZXRJbWFnZUtleShpbWFnZUtleSkge1xuICAgICAgICB0aGlzLmltYWdlS2V5ID0gaW1hZ2VLZXk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlS2V5O1xuICAgIH1cbn0iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IFRpbGVtYXBMYXllciwgVGlsZUFjdGlvbiwgRGlyZWN0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aXZlWm9uZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xyXG5cdHZlbG9jaXR5ID0gMDtcclxuXHRkaXJlY3Rpb24gPSBudWxsO1xyXG5cdGFjdGlvbiA9IG51bGw7XHJcblx0bmV3VGlsZXMgPSBudWxsO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblx0bmF2aWdhdGVUbyA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcblx0XHR0aGlzLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdGlsZXMgPSBzY2VuZS50aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcclxuXHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0dGhpcy55LFxyXG5cdFx0XHRcdHRoaXMud2lkdGgsXHJcblx0XHRcdFx0dGhpcy5oZWlnaHQsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aXNOb3RFbXB0eTogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRUaWxlbWFwTGF5ZXIuRk9SRUdST1VORFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuYWN0aW9uKSB7XHJcblx0XHRcdFx0Y2FzZSBUaWxlQWN0aW9uLlJFUExBQ0U6XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMubmV3VGlsZXNbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHRzY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aGlzLm5ld1RpbGVzW2ldLCB0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBUaWxlQWN0aW9uLkRFU1RST1k6XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0c2NlbmUudGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFRpbGVBY3Rpb24uTU9WRTpcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRzY2VuZS50aWxlTWFwLnJlbW92ZVRpbGVBdCh0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54ICsgdGhpcy52ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54IC0gdGhpcy52ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5VUDpcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54LCB0aWxlc1tpXS55IC0gdGhpcy52ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2NlbmUudGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkgKyB0aGlzLnZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zcGF3bkl0ZW0pIHtcclxuXHRcdFx0XHRzY2VuZS5zcGF3bkl0ZW0odGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5zcGF3bkl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm5hdmlnYXRlVG8pIHtcclxuXHRcdFx0XHRzY2VuZS5yZWxvYWRSb29tKHRoaXMubmF2aWdhdGVUbyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldFZlbG9jaXR5KHZlbG9jaXR5KSB7XHJcblx0XHR0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcblx0fVxyXG5cclxuXHRnZXRWZWxvY2l0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnZlbG9jaXR5O1xyXG5cdH1cclxuXHJcblx0c2V0QWN0aW9uKGFjdGlvbikge1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0fVxyXG5cclxuXHRnZXRBY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hY3Rpb247XHJcblx0fVxyXG5cclxuXHRzZXREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldERpcmVjdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldFNwYXduSXRlbShzcGF3bkl0ZW0pIHtcclxuXHRcdHRoaXMuc3Bhd25JdGVtID0gc3Bhd25JdGVtO1xyXG5cdH1cclxuXHJcblx0Z2V0U3Bhd25JdGVtKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3Bhd25JdGVtO1xyXG5cdH1cclxuXHJcblx0c2V0TmV3VGlsZXMobmV3VGlsZXMpIHtcclxuXHRcdHRoaXMubmV3VGlsZXMgPSBuZXdUaWxlcztcclxuXHR9XHJcblxyXG5cdGdldE5ld1RpbGVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmV3VGlsZXM7XHJcblx0fVxyXG5cclxuXHRzZXROYXZpZ2F0ZVRvKG5hdmlnYXRlVG8pIHtcclxuXHRcdHRoaXMubmF2aWdhdGVUbyA9IG5hdmlnYXRlVG87XHJcblx0fVxyXG5cclxuXHRnZXROYXZpZ2F0ZVRvKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2aWdhdGVUbztcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XHJcblxyXG5cdG5hbWUgPSBudWxsO1xyXG5cdHRleHR1cmUgPSBudWxsO1xyXG5cdGZyYW1lID0gbnVsbDtcclxuICAgIGRlc2NyaXB0aW9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHRleHR1cmUsIGZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRleHR1cmUodGV4dHVyZSkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJhbWUoZnJhbWUpIHtcclxuICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcblx0Y29tYmluYXRpb24gPSBudWxsO1xyXG5cdHByb21wdE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgY29tYmluYXRpb24sIHByb21wdE1lc3NhZ2UpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSk7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gcHJvbXB0TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldENvbWJpbmF0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tYmluYXRpb247XHJcblx0fVxyXG5cclxuXHRzZXRDb21iaW5hdGlvbihjb21iaW5hdGlvbikge1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdH1cclxuXHJcblx0Z2V0UHJvbXB0TWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnByb21wdE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRzZXRQcm9tcHRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRcdHRoaXMucHJvbXB0TWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd25JdGVtKHNwYXduSXRlbSkge1xyXG5cdFx0dGhpcy5zcGF3bkl0ZW0gPSBzcGF3bkl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFNwYXduSXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGF3bkl0ZW07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFNpZ24gZnJvbSAnLi9UZXh0TW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyYW1ibGVkU2lnbiBleHRlbmRzIFNpZ24ge1xyXG5cclxuICAgIHNjcmFtYmxlZCA9IHRydWU7XHJcbiAgICBzY3JhbWJsZWRUZXh0ID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIG5hbWUsIHRleHQsIHZpc2libGUsIHNjcmFtYmxlZCwgc2NyYW1ibGVkVGV4dCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBuYW1lLCB0ZXh0LCB2aXNpYmxlKTtcclxuICAgICAgICB0aGlzLnNjcmFtYmxlZCA9IHNjcmFtYmxlZDtcclxuICAgICAgICB0aGlzLnNjcmFtYmxlZFRleHQgPSBzY3JhbWJsZWRUZXh0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpc1NjcmFtYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JhbWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NyYW1ibGVkKHNjcmFtYmxlZCkge1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkID0gc2NyYW1ibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjcmFtYmxlZFRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NyYW1ibGVkVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY3JhbWJsZWRUZXh0KHRleHQpIHtcclxuICAgICAgICB0aGlzLnNjcmFtYmxlZFRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuXHR0ZXh0ID0gbnVsbDtcclxuXHRuYW1lID0gbnVsbDtcclxuXHR2aXNpYmxlID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCBuYW1lLCB0ZXh0LCB2aXNpYmxlKSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSk7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0VGV4dCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRleHQ7XHJcblx0fVxyXG5cclxuXHRzZXRUZXh0KHRleHQpIHtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0fVxyXG5cclxuXHRpc1Zpc2libGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52aXNpYmxlO1xyXG5cdH1cclxuXHJcblx0c2V0VmlzaWJsZSh2aXNpYmxlKSB7XHJcblx0XHR0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9zY2VuZXMvR2FtZSc7XHJcbmltcG9ydCBHYW1lT3ZlclNjZW5lICBmcm9tICcuL3NjZW5lcy9HYW1lT3Zlcic7XHJcbmltcG9ydCBXaW5TY2VuZSBmcm9tICcuL3NjZW5lcy9XaW4nO1xyXG5pbXBvcnQgU3BsYXNoU2NlbmUgZnJvbSAnLi9zY2VuZXMvTWVudSc7XHJcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSAnLi9zY2VuZXMvTG9hZGluZyc7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblx0c2NhbGU6IHtcclxuXHRcdG1vZGU6IFBoYXNlci5TY2FsZS5GSVQsXHJcbiAgICAgICAgYXV0b0NlbnRlcjogUGhhc2VyLlNjYWxlLkNFTlRFUl9CT1RILFxyXG5cdFx0d2lkdGg6IDEwMjQsXHJcblx0XHRoZWlnaHQ6IDc2OFxyXG5cdH0sXHJcblx0cGh5c2ljczoge1xyXG5cdFx0ZGVmYXVsdDogJ2FyY2FkZScsXHJcblx0XHRhcmNhZGU6IHtcclxuXHRcdFx0ZGVidWc6IHRydWUsXHJcblx0XHRcdGdyYXZpdHk6IHsgeTogMjAwIH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHNjZW5lOiBbTG9hZGluZ1NjZW5lLCBTcGxhc2hTY2VuZSwgR2FtZVNjZW5lLCBHYW1lT3ZlclNjZW5lLCBXaW5TY2VuZV1cclxufTtcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgQ2hlc3QgZnJvbSAnLi4vZW50aXRpZXMvQ2hlc3QnO1xyXG5pbXBvcnQgU2FmZSBmcm9tICcuLi9lbnRpdGllcy9TYWZlJztcclxuaW1wb3J0IERvb3IgZnJvbSAnLi4vZW50aXRpZXMvRG9vcic7XHJcbmltcG9ydCBUZXh0TW9kYWwgZnJvbSAnLi4vZW50aXRpZXMvVGV4dE1vZGFsJztcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vZW50aXRpZXMvSXRlbSc7XHJcbmltcG9ydCBTY3JhbWJsZWRTaWduIGZyb20gJy4uL2VudGl0aWVzL1NjcmFtYmxlZFNpZ24nO1xyXG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tICcuLi9lbnRpdGllcy9JbWFnZU1vZGFsJztcclxuaW1wb3J0IEludGVyYWN0aXZlWm9uZSBmcm9tICcuLi9lbnRpdGllcy9JbnRlcmFjdGl2ZVpvbmUnO1xyXG5pbXBvcnQgeyBDdXN0b21Qcm9wZXJ0eSwgVGlsZW1hcExheWVyLCBFbnRpdHlUeXBlLCBMb2FkZXJLZXksIFRpbGUsIEFuaW1hdGlvbiwgRnJhbWUsIFRpbGVBY3Rpb24sIERpcmVjdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBUUkFOU0lUSU9OX0RFTEFZID0gNTAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRzaWducyA9IFtdO1xyXG5cdHNjcmFtYmxlZFNpZ25zID0gW107XHJcblx0ZG9vciA9IG51bGw7XHJcblx0Y2hlc3RzID0gW107XHJcblx0dGlsZU1hcCA9IG51bGw7XHJcblx0c2FmZXMgPSBbXTtcclxuXHRpdGVtcyA9IFtdO1xyXG5cdHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0c2VsZWN0ZWRSZWN0YW5nbGUgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdnYW1lJyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmxvYWRSb29tKCdyb29tLW9uZScpO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb25zKCk7XHJcblx0XHR0aGlzLmNyZWF0ZUh1ZCgpO1xyXG5cdFx0dGhpcy5zdGFydFRpbWVyKDEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSHVkKCkge1xyXG5cdFx0Y29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoOTIwLCAyMCwgJ0l0ZW1zJywgeyBmb250U2l6ZTogJzIwcHgnLCBmb250RmFtaWx5OiAnVmVyZGFuYScgfSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVIdWQoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSg5NTAsIGkgKiA1MCArIDgwLCB0aGlzLml0ZW1zW2ldLnRleHR1cmUsIHRoaXMuaXRlbXNbaV0uZnJhbWUpO1xyXG5cdFx0XHRpbWFnZS5zZXRBbHBoYSgwKTtcclxuXHRcdFx0aW1hZ2Uuc2V0U2NhbGUoMik7XHJcblx0XHRcdGltYWdlLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcdGltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJlY3RhbmdsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlID0gdGhpcy5hZGQucmVjdGFuZ2xlKGltYWdlLngsIGltYWdlLnksIDUwLCA1MCk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5zZXRTdHJva2VTdHlsZSgzLCAweGZmZmZmZik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHRcdHRhcmdldHM6IGltYWdlLFxyXG5cdFx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAsXHJcblx0XHRcdFx0cmVwZWF0OiAwLFxyXG5cdFx0XHRcdHlveW86IGZhbHNlXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9hZFJvb20ocm9vbUtleSkge1xyXG5cdFx0dGhpcy5jYW1lcmFzLm1haW4uZmFkZUluKFRSQU5TSVRJT05fREVMQVksIDAsIDAsIDApO1xyXG5cdFx0dGhpcy50aWxlTWFwID0gdGhpcy5jcmVhdGVUaWxlTWFwKHJvb21LZXkpO1xyXG5cdFx0Y29uc3QgdGlsZVNldCA9IHRoaXMuY3JlYXRlVGlsZVNldCh0aGlzLnRpbGVNYXAsICdjYXN0bGUtdGlsZXMnLCBMb2FkZXJLZXkuVElMRVNFVCk7XHJcblx0XHRjb25zdCB7IG9iamVjdHNMYXllciwgZm9yZWdyb3VuZExheWVyIH0gPSB0aGlzLmdldFRpbGVNYXBMYXllcnModGhpcy50aWxlTWFwLCB0aWxlU2V0KTtcclxuXHRcdHRoaXMubG9hZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcik7XHJcblx0fVxyXG5cclxuXHRyZWxvYWRSb29tKHJvb21LZXkpIHtcclxuXHRcdHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoVFJBTlNJVElPTl9ERUxBWSwgMCwgMCwgMCwgKGNhbWVyYSwgcHJvZ3Jlc3MpID0+IHtcclxuXHRcdFx0aWYgKHByb2dyZXNzID09PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5sb2FkUm9vbShyb29tS2V5KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVUaWxlTWFwKHRpbGVNYXBLZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLm1ha2UudGlsZW1hcCh7IGtleTogdGlsZU1hcEtleSB9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRpbGVTZXQodGlsZU1hcCwgdGlsZVNldEtleSwgdGlsZVNldFRleHR1cmVLZXkpIHtcclxuXHRcdHJldHVybiB0aWxlTWFwLmFkZFRpbGVzZXRJbWFnZSh0aWxlU2V0S2V5LCB0aWxlU2V0VGV4dHVyZUtleSk7XHJcblx0fVxyXG5cclxuXHRnZXRUaWxlTWFwTGF5ZXJzKHRpbGVtYXAsIHRpbGVzZXQpIHtcclxuXHRcdGNvbnN0IGJhY2tncm91bmRMYXllciA9IHRpbGVtYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkJBQ0tHUk9VTkQsIHRpbGVzZXQpO1xyXG5cdFx0Y29uc3QgZm9yZWdyb3VuZExheWVyID0gdGlsZW1hcC5jcmVhdGVMYXllcihUaWxlbWFwTGF5ZXIuRk9SRUdST1VORCwgdGlsZXNldCk7XHJcblx0XHRjb25zdCBvYmplY3RzTGF5ZXIgPSB0aWxlbWFwLmdldE9iamVjdExheWVyKFRpbGVtYXBMYXllci5PQkpFQ1RTKTtcclxuXHRcdHJldHVybiB7IGJhY2tncm91bmRMYXllciwgZm9yZWdyb3VuZExheWVyLCBvYmplY3RzTGF5ZXIgfTtcclxuXHR9XHJcblxyXG5cdGxvYWRUaWxlTWFwT2JqZWN0cyhvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGNvbnN0IHRpbGVNYXBPYmplY3RzID0gb2JqZWN0c0xheWVyLm9iamVjdHM7XHJcblx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZU1hcE9iamVjdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0c3dpdGNoICh0aWxlTWFwT2JqZWN0c1tpXS50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLklOVEVSQUNUSVZFX1pPTkU6XHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZUludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0c1tpXSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuQ0hFU1Q6XHJcblx0XHRcdFx0XHR0aGlzLmNoZXN0cy5wdXNoKHRoaXMuY3JlYXRlQ2hlc3QodGlsZU1hcE9iamVjdHNbaV0pKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5TQUZFOlxyXG5cdFx0XHRcdFx0dGhpcy5zYWZlcy5wdXNoKHRoaXMuY3JlYXRlU2FmZSh0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLkRPT1I6XHJcblx0XHRcdFx0XHR0aGlzLmRvb3IgPSB0aGlzLmNyZWF0ZURvb3IodGlsZU1hcE9iamVjdHNbaV0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLlRFWFRfTU9EQUw6XHJcblx0XHRcdFx0XHR0aGlzLnNpZ25zLnB1c2godGhpcy5jcmVhdGVUZXh0TW9kYWwodGlsZU1hcE9iamVjdHNbaV0pKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5JTUFHRV9NT0RBTDpcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlSW1hZ2VNb2RhbCh0aWxlTWFwT2JqZWN0c1tpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZUludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRjb25zdCB6b25lID0gbmV3IEludGVyYWN0aXZlWm9uZSh0aGlzLCB0aWxlTWFwT2JqZWN0LngsIHRpbGVNYXBPYmplY3QueSwgdGlsZU1hcE9iamVjdC53aWR0aCwgdGlsZU1hcE9iamVjdC5oZWlnaHQpO1xyXG5cdFx0em9uZS5zZXRWZWxvY2l0eSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlZFTE9DSVRZKSk7XHJcblx0XHR6b25lLnNldERpcmVjdGlvbih0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkRJUkVDVElPTikpO1xyXG5cdFx0em9uZS5zZXRBY3Rpb24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5BQ1RJT04pKTtcclxuXHRcdHpvbmUuc2V0TmV3VGlsZXMoXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkVXX1RJTEVTKVxyXG5cdFx0XHRcdD8uc3BsaXQoJywnKVxyXG5cdFx0XHRcdC5tYXAoKHMpID0+IHBhcnNlSW50KHMpKVxyXG5cdFx0KTtcclxuXHRcdHpvbmUuc2V0TmF2aWdhdGVUbyh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5Lk5BVklHQVRFX1RPKSk7XHJcblx0XHRjb25zdCBpdGVtTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9OQU1FKTtcclxuXHRcdGlmIChpdGVtTmFtZSkge1xyXG5cdFx0XHR6b25lLnNldFNwYXduSXRlbShcclxuXHRcdFx0XHRuZXcgSXRlbShcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9OQU1FKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9ERVNDUklQVElPTiksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fVEVYVFVSRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fRlJBTUUpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW1hZ2VNb2RhbCh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRjb25zdCBpbWFnZVNpZ24gPSBuZXcgSW1hZ2VNb2RhbCh0aGlzLCB0aWxlTWFwT2JqZWN0LngsIHRpbGVNYXBPYmplY3QueSwgdGlsZU1hcE9iamVjdC53aWR0aCwgdGlsZU1hcE9iamVjdC5oZWlnaHQpO1xyXG5cdFx0aW1hZ2VTaWduLnNldEltYWdlS2V5KHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuSU1BR0VfS0VZKSk7XHJcblx0XHRpbWFnZVNpZ24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNob3dJbWFnZU1vZGFsKGltYWdlU2lnbi5nZXRJbWFnZUtleSgpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2FmZSh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRjb25zdCBzYWZlID0gbmV3IFNhZmUoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuU0FGRSxcclxuXHRcdFx0MTIsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT01CSU5BVElPTiksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuUFJPTVBUX01FU1NBR0UpXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgaXRlbU5hbWUgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fTkFNRSk7XHJcblx0XHRpZiAoaXRlbU5hbWUpIHtcclxuXHRcdFx0c2FmZS5zZXRTcGF3bkl0ZW0oXHJcblx0XHRcdFx0bmV3IEl0ZW0oXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fTkFNRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fREVTQ1JJUFRJT04pLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX1RFWFRVUkUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX0ZSQU1FKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHNhZmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoIXNhZmUuaXNPcGVuZWQoKSkge1xyXG5cdFx0XHRcdGNvbnN0IGFuc3dlciA9IHdpbmRvdy5wcm9tcHQoc2FmZS5nZXRQcm9tcHRNZXNzYWdlKCkpO1xyXG5cdFx0XHRcdGlmIChhbnN3ZXIgJiYgYW5zd2VyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IHNhZmUuZ2V0Q29tYmluYXRpb24oKS50b0xvY2FsZVVwcGVyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRzYWZlLnBsYXkoQW5pbWF0aW9uLlNBRkVfT1BFTik7XHJcblx0XHRcdFx0XHRzYWZlLnNldE9wZW5lZCh0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKHNhZmUueCwgc2FmZS55ICsgc2FmZS5oZWlnaHQsIHNhZmUuZ2V0U3Bhd25JdGVtKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gc2FmZTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZURvb3IodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0Y29uc3QgZG9vciA9IG5ldyBEb29yKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LngsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueSxcclxuXHRcdFx0TG9hZGVyS2V5LkRPT1IsXHJcblx0XHRcdDEwLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTE9DS0VEKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRURfTUVTU0FHRSlcclxuXHRcdCk7XHJcblx0XHRkb29yLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aWYgKGRvb3IuaXNMb2NrZWQoKSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RleHRNb2RhbChkb29yLmdldExvY2tlZE1lc3NhZ2UoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9vci5wbGF5KEFuaW1hdGlvbi5ET09SX09QRU4pO1xyXG5cdFx0XHRcdGRvb3Iuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBkb29yO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ2hlc3QodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0Y29uc3QgY2hlc3QgPSBuZXcgQ2hlc3QoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuQ0hFU1QsXHJcblx0XHRcdG51bGwsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRUQpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IGl0ZW1OYW1lID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX05BTUUpO1xyXG5cdFx0aWYgKGl0ZW1OYW1lKSB7XHJcblx0XHRcdGNoZXN0LnNldFNwYXduSXRlbShcclxuXHRcdFx0XHRuZXcgSXRlbShcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9OQU1FKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9ERVNDUklQVElPTiksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fVEVYVFVSRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fRlJBTUUpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y2hlc3Qub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoY2hlc3QuaXNMb2NrZWQoKSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RleHRNb2RhbChjaGVzdC5sb2NrZWRNZXNzYWdlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoIWNoZXN0LmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHRcdGNoZXN0LnBsYXkoQW5pbWF0aW9uLkNIRVNUX09QRU4pO1xyXG5cdFx0XHRcdFx0Y2hlc3Quc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oY2hlc3QueCwgY2hlc3QueSArIGNoZXN0LmhlaWdodCArIDUsIGNoZXN0LmdldFNwYXduSXRlbSgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGNoZXN0O1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2NyYW1ibGVkU2lnbihzcGF3bk9iamVjdCkge1xyXG5cdFx0Y29uc3Qgc2lnbiA9IG5ldyBTY3JhbWJsZWRTaWduKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5URVhUKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVklTSUJMRSksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNDUkFNQkxFRCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNDUkFNQkxFRF9URVhUKVxyXG5cdFx0KTtcclxuXHRcdHNpZ24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoc2lnbi5pc1Zpc2libGUoKSkge1xyXG5cdFx0XHRcdGlmIChzaWduLmlzU2NyYW1ibGVkKCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1RleHRNb2RhbChzaWduLmdldFNjcmFtYmxlZFRleHQoKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1RleHRNb2RhbChzaWduLmdldFRleHQoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzaWduO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGV4dE1vZGFsKHNwYXduT2JqZWN0KSB7XHJcblx0XHRjb25zdCBzaWduID0gbmV3IFRleHRNb2RhbChcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0c3Bhd25PYmplY3QueCxcclxuXHRcdFx0c3Bhd25PYmplY3QueSxcclxuXHRcdFx0c3Bhd25PYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVEVYVCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlZJU0lCTEUpXHJcblx0XHQpO1xyXG5cdFx0c2lnbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGlmIChzaWduLmlzVmlzaWJsZSgpKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93VGV4dE1vZGFsKHNpZ24uZ2V0VGV4dCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gc2lnbjtcclxuXHR9XHJcblxyXG5cdHNjcmFtYmxlRGlhbG9ncyhzY3JhbWJsZWQpIHtcclxuXHRcdGlmICh0aGlzLnNjcmFtYmxlU2lnbnMpIHtcclxuXHRcdFx0dGhpcy5zY3JhbWJsZWRTaWducy5mb3JFYWNoKChkaWFsb2cpID0+IGRpYWxvZy5zZXRTY3JhbWJsZWQoc2NyYW1ibGVkKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaG93SXRlbU1vZGFsKGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0Y29uc3QgYmxvY2tlciA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLCAwLCB0aGlzLnNjYWxlLndpZHRoLCB0aGlzLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRjb25zdCBtb2RhbCA9IHRoaXMuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblxyXG5cdFx0Y29uc3QgYm94ID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDQ1MCwgMTUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdFx0Y29uc3QgY2xvc2VUZXh0ID0gdGhpcy5hZGRcclxuXHRcdFx0LnRleHQoMTU1LCAtNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcblx0XHRjb25zdCBpdGVtSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgwLCAtMTAsIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUpLnNldFNjYWxlKDIuNSk7XHJcblx0XHRjb25zdCBpdGVtRGVzY3JpcHRpb25UZXh0ID0gdGhpcy5hZGRcclxuXHRcdFx0LnRleHQoMCwgMzAsIGl0ZW1EZXNjcmlwdGlvbiwge1xyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG5cdFx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRcdG1vZGFsLmRlc3Ryb3koKTtcclxuXHRcdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1vZGFsLmFkZChbYm94LCBpdGVtSW1hZ2UsIGl0ZW1EZXNjcmlwdGlvblRleHQsIGNsb3NlVGV4dF0pO1xyXG5cdH1cclxuXHJcblx0c2hvd0ltYWdlTW9kYWwoaW1hZ2VLZXksIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdGNvbnN0IGJsb2NrZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgdGhpcy5zY2FsZS53aWR0aCwgdGhpcy5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0Y29uc3QgbW9kYWwgPSB0aGlzLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdFx0Y29uc3QgYm94ID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDQ1MCwgMzUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgwLCAwLCBpbWFnZUtleSkuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRpbWFnZS5zZXREaXNwbGF5U2l6ZShib3gud2lkdGggLSA2MCwgYm94LmhlaWdodCAtIDYwKTtcclxuXHJcblx0XHRjb25zdCBjbG9zZVRleHQgPSB0aGlzLmFkZFxyXG5cdFx0XHQudGV4dCgxNTUsIC0xNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcblx0XHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy50d2VlbnMuYWRkKHtcclxuXHRcdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0ZHVyYXRpb246IDIwMFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bW9kYWwuYWRkKFtib3gsIGltYWdlLCBjbG9zZVRleHRdKTtcclxuXHR9XHJcblxyXG5cdHNob3dUZXh0TW9kYWwodGV4dCwgc2l6ZSA9ICdub3JtYWwnLCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRjb25zdCBibG9ja2VyID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIHRoaXMuc2NhbGUud2lkdGgsIHRoaXMuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdGNvbnN0IG1vZGFsID0gdGhpcy5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRcdGxldCBib3ggPSBudWxsO1xyXG5cdFx0bGV0IGNsb3NlVGV4dCA9IG51bGw7XHJcblxyXG5cdFx0c3dpdGNoIChzaXplKSB7XHJcblx0XHRcdGNhc2UgJ25vcm1hbCc6XHJcblx0XHRcdFx0Ym94ID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDQ1MCwgMTUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdFx0XHRcdGNsb3NlVGV4dCA9IHRoaXMuYWRkXHJcblx0XHRcdFx0XHQudGV4dCgxNTUsIC02OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xhcmdlJzpcclxuXHRcdFx0XHRjbG9zZVRleHQgPSB0aGlzLmFkZFxyXG5cdFx0XHRcdFx0LnRleHQoMTU1LCAtMTY5LCAnQ2xvc2UgWCcsIHtcclxuXHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdFx0XHRib3ggPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjb25zdCB0ZXh0T2JqID0gdGhpcy5hZGRcclxuXHRcdFx0LnRleHQoMCwgMCwgdGV4dCwge1xyXG5cdFx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0fSlcclxuXHRcdFx0LnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRcdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cdFx0bW9kYWwuYWRkKFtib3gsIHRleHRPYmosIGNsb3NlVGV4dF0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQW5pbWF0aW9ucygpIHtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5TQUZFX09QRU4sIExvYWRlcktleS5TQUZFLCBbMTNdLCA0KTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5ET09SX09QRU4sIExvYWRlcktleS5ET09SLCBbNSwgMF0sIDQpO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLkNIRVNUX09QRU4sIExvYWRlcktleS5DSEVTVCwgWzFdLCA4LCAtMSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBbmltYXRpb24oa2V5LCB0ZXh0dXJlLCBmcmFtZXMsIGZyYW1lUmF0ZSwgcmVwZWF0KSB7XHJcblx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdGtleSxcclxuXHRcdFx0ZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHRleHR1cmUsIHsgZnJhbWVzIH0pLFxyXG5cdFx0XHRmcmFtZVJhdGUsXHJcblx0XHRcdHJlcGVhdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgbmFtZSkge1xyXG5cdFx0bGV0IHByb3BlcnR5ID0gbnVsbDtcclxuXHRcdGlmIChzcGF3bk9iamVjdCkge1xyXG5cdFx0XHRwcm9wZXJ0eSA9IHNwYXduT2JqZWN0LnByb3BlcnRpZXMuZmluZCgocHJvcGVydHkpID0+IHByb3BlcnR5Lm5hbWUgPT09IG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BlcnR5Py52YWx1ZTtcclxuXHR9XHJcblxyXG5cdGdldERpYWxvZyhkaWFsb2dzLCBuYW1lKSB7XHJcblx0XHRyZXR1cm4gZGlhbG9ncy5maW5kKChkaWFsb2cpID0+IGRpYWxvZy5uYW1lID09IG5hbWUpO1xyXG5cdH1cclxuXHJcblx0c3Bhd25JdGVtKHgsIHksIGl0ZW0pIHtcclxuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgaXRlbS5nZXRUZXh0dXJlKCksIGl0ZW0uZ2V0RnJhbWUoKSk7XHJcblx0XHRpbWFnZS5zZXRTY2FsZSgyKTtcclxuXHRcdGltYWdlLnNldEFscGhhKDApO1xyXG5cdFx0aW1hZ2Uuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdGltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aW1hZ2UuZGVzdHJveSgpO1xyXG5cdFx0XHR0aGlzLnNob3dJdGVtTW9kYWwoaXRlbS5nZXREZXNjcmlwdGlvbigpLCBpdGVtLmdldFRleHR1cmUoKSwgaXRlbS5nZXRGcmFtZSgpLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pdGVtcy5wdXNoKHtcclxuXHRcdFx0XHRcdG5hbWU6IGl0ZW0uZ2V0TmFtZSgpLFxyXG5cdFx0XHRcdFx0dGV4dHVyZTogaXRlbS5nZXRUZXh0dXJlKCksXHJcblx0XHRcdFx0XHRmcmFtZTogaXRlbS5nZXRGcmFtZSgpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IGltYWdlLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aXNJdGVtU2VsZWN0ZWQobmFtZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lID09PSBuYW1lO1xyXG5cdH1cclxuXHJcblx0c3RhcnRUaW1lcihudW1iZXJPZkhvdXJzKSB7XHJcblx0XHRpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcblx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShub3cgKyBudW1iZXJPZkhvdXJzICogNjAgKiA2MCAqIDEwMDApLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdHRoaXMudGltZVJlbWFpbmluZyA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdztcclxuXHRcdFx0XHRpZiAobm93ID49IHRoaXMuY291bnREb3duRGF0ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVUaW1lKCkge1xyXG5cdFx0aWYgKHRoaXMudGltZVRleHQpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBob3Vyc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuXHRcdGNvbnN0IG1pbnV0ZXNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuXHRcdGNvbnN0IHNlY29uZHNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHRcdGlmICh0aGlzLnRpbWVSZW1haW5pbmcpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dCA9IHRoaXMuYWRkLnRleHQoOTE1LCA3MzAsIGAke2hvdXJzUmVtYWluaW5nfToke21pbnV0ZXNSZW1haW5pbmd9OiR7c2Vjb25kc1JlbWFpbmluZ31gLCB7XHJcblx0XHRcdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYScsXHJcblx0XHRcdFx0Y29sb3I6IDB4ZmZmZmZmXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy51cGRhdGVUaW1lKCk7XHJcblx0XHRpZiAodGhpcy5pc1RpbWVFbGFwc2VkKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWVvdmVyJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdnYW1lb3ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0dhbWUgb3ZlcicsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignbG9hZGluZycpO1xyXG5cdH1cclxuXHJcblx0cHJlbG9hZCgpIHtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLW9uZScsICdhc3NldHMvanNvbi9yb29tLW9uZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tdHdvJywgJ2Fzc2V0cy9qc29uL3Jvb20tdHdvLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoTG9hZGVyS2V5LlRJTEVTRVQsICdhc3NldHMvaW1nL2Nhc3RsZS10aWxlcy9UaWxlc2V0LnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKExvYWRlcktleS5NRU5VX0lNQUdFLCAnYXNzZXRzL2ltZy9jYXN0bGUucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ3Rlc3QnLCAnYXNzZXRzL2ltZy9odG1sLWNzcy1qYXZhc2NyaXB0LmpwZycpO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5JVEVNUywgJ2Fzc2V0cy9pbWcvaXRlbXMucG5nJywgeyBmcmFtZVdpZHRoOiAxNiwgZnJhbWVIZWlnaHQ6IDE2IH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5VSSwgJ2Fzc2V0cy9pbWcvdWkucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDEzIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5DSEVTVCwgJ2Fzc2V0cy9pbWcvY2hlc3QucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5ET09SLCAnYXNzZXRzL2ltZy9kb29yLnBuZycsIHsgZnJhbWVXaWR0aDogMjQsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuU0FGRSwgJ2Fzc2V0cy9pbWcvc2FmZS5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogNDAgfSk7XHJcblxyXG5cdFx0dGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnbWVudScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignbWVudScpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuYWRkLmltYWdlKDAsIDAsIExvYWRlcktleS5NRU5VX0lNQUdFKS5zZXRPcmlnaW4oMCkuc2V0U2NhbGUoMC44KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCgzNTAsIDM4NCwgJ0VzY2FwZSBmcm9tIHRoZSBjYXN0bGUnLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMzJweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgY2xpY2tUb0NvbnRpbnVlID0gdGhpcy5hZGQudGV4dCg1MTIsIDQ2MCwgJ0NsaWNrIHRvIHN0YXJ0IHRoZSBnYW1lJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdH0pO1xyXG5cdFx0Y2xpY2tUb0NvbnRpbnVlLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHRpZiAodGhpcy5pbnB1dC5tYW5hZ2VyLmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWUnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignd2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDUxMiwgMzg0LCAnQ29uZ3JhdHVsYXRpb25zIGZvciBlc2NhcGluZz8gVGhhbmsgeW91IGZvciBwbGF5aW5nIScsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV9kcmFjdWxhX2Nhc3RsZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV9kcmFjdWxhX2Nhc3RsZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=