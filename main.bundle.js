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
	SPAWN_ITEM_NAME: 'spawnItem',
	SPAWN_ITEM_TEXTURE: 'spawnItemTexture',
	SPAWN_ITEM_FRAME: 'spawnItemFrame',
	SPAWN_ITEM_DESCRIPTION: 'spawnItemDescription',
	LOCKED: 'locked',
	LOCKED_MESSAGE: 'lockedMessage',
	TEXT: 'text',
	VISIBLE: 'visible',
	SCRAMBLED: 'scrambled',
	SCRAMBLED_TEXT: 'scrambledText'
};

const TilemapLayer = {
	BACKGROUND: 'background',
	FOREGROUND: 'foreground',
	OBJECTS: 'objects'
};

const EntityType = {
	DOOR: 'door',
	SAFE: 'safe',
	CHEST: 'chest',
	SIGN: 'sign',
	SCRAMBLED_SIGN: 'scrambled-sign'
};

const LoaderKey = {
	TILEMAP: 'tilemap',
	TILESET: 'tiles',
	FRAME: 'frame',
	ITEMS: 'items',
	UI: 'ui',
	CHEST: 'chest',
	DOOR: 'door',
	SAFE: 'safe'
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
	STAIR: 124,
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
/* harmony import */ var _ItemContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemContainer */ "./src/entities/ItemContainer.js");



class Chest extends _ItemContainer__WEBPACK_IMPORTED_MODULE_1__["default"] {

	locked = true;
	lockedMessage = null;
	opened = false;

	constructor(scene, x, y, texture, frame, name, locked, lockedMessage, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription) {
		super(scene, x, y, texture, frame, name, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription);
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

/***/ "./src/entities/ItemContainer.js":
/*!***************************************!*\
  !*** ./src/entities/ItemContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemContainer)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class ItemContainer extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Sprite {
    name = null;
    spawnItemName = null;
	spawnItemTexture = null;
	spawnItemFrame = null;
	spawnItemDescription = null;

	constructor(scene, x, y, texture, frame, name, spawnItemName, spawnItemTexture, spawnItemFrame, spawnItemDescription) {
        super(scene, x, y, texture, frame);
        this.name = name;
        this.spawnItemName = spawnItemName;
        this.spawnItemTexture = spawnItemTexture;
        this.spawnItemFrame = spawnItemFrame;
        this.spawnItemDescription = spawnItemDescription;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setSpawnItem(spawnItemName) {
        this.spawnItemName = spawnItemName;
    }

    getSpawnItemName() {
        return this.spawnItemName;
    }

    setSpawnItemTexture(texture) {
        this.spawnItemTexture = texture
    }

    getSpawnItemTexture() {
        return this.spawnItemTexture;
    }

    setSpawnItemFrame(frame) {
        this.spawnItemFrame = frame;
    }

    getSpawnItemFrame() {
        return this.spawnItemFrame;
    }

    setSpawnItemDescription(description) {
       this.spawnItemDescription = description; 
    }

    getSpawnItemDescription() {
        return this.spawnItemDescription;
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
/* harmony import */ var _ItemContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemContainer */ "./src/entities/ItemContainer.js");


class Safe extends _ItemContainer__WEBPACK_IMPORTED_MODULE_0__["default"] {

    combination = null;
    promptMessage = null;
    opened = false;

    constructor(scene, x, y, texture, frame, name, combination, promptMessage, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription) {
		super(scene, x, y, texture, frame, name, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription);
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
        this.opened;
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
/* harmony import */ var _Sign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sign */ "./src/entities/Sign.js");


class ScrambledSign extends _Sign__WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/***/ "./src/entities/Sign.js":
/*!******************************!*\
  !*** ./src/entities/Sign.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sign)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class Sign extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Image {
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
/* harmony import */ var _scenes_Play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Play */ "./src/scenes/Play.js");
/* harmony import */ var _scenes_GameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/GameOver */ "./src/scenes/GameOver.js");
/* harmony import */ var _scenes_Win__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Win */ "./src/scenes/Win.js");
/* harmony import */ var _scenes_Splash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/Splash */ "./src/scenes/Splash.js");






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
	scene: [_scenes_Splash__WEBPACK_IMPORTED_MODULE_4__["default"], _scenes_Play__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_GameOver__WEBPACK_IMPORTED_MODULE_2__["default"], _scenes_Win__WEBPACK_IMPORTED_MODULE_3__["default"]]
};

const game = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(config);


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

/***/ "./src/scenes/Play.js":
/*!****************************!*\
  !*** ./src/scenes/Play.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_Chest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Chest */ "./src/entities/Chest.js");
/* harmony import */ var _entities_Safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Safe */ "./src/entities/Safe.js");
/* harmony import */ var _entities_Door__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/Door */ "./src/entities/Door.js");
/* harmony import */ var _entities_Sign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/Sign */ "./src/entities/Sign.js");
/* harmony import */ var _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/ScrambledSign */ "./src/entities/ScrambledSign.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");








const SECRET_TILE_X = 6;
const SECRET_TILE_Y = 3;

class PlayScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
	signs = null;
	door = null;
	chests = null;
	tilemap = null;
	safes = null;
	items = null;
	selectedItem = null;
	selectedRectangle = null;
	dialogGroup = null;

	constructor() {
		super('play');
	}

	preload() {
		this.load.tilemapTiledJSON(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILEMAP, 'assets/json/escape-room-map-room-a.json');
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILESET, 'assets/img/castle-tiles/Tileset.png');
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.FRAME, 'assets/img/frame.png');
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, 'assets/img/items.png', { frameWidth: 16, frameHeight: 16 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.UI, 'assets/img/ui.png', { frameWidth: 32, frameHeight: 13 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST, 'assets/img/chest.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR, 'assets/img/door.png', { frameWidth: 24, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE, 'assets/img/safe.png', { frameWidth: 32, frameHeight: 40 });
	}

	create() {
		this.tilemap = this.createTilemap(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILEMAP);
		const tileset = this.createTileset(this.tilemap, 'castle-tiles', _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILESET);
		const { objectsLayer, foregroundLayer } = this.createLayers(this.tilemap, tileset);
		//this.chests = this.createChests(objectsLayer);
		//this.door = this.createDoor(objectsLayer);
		//this.safes = this.createSafes(objectsLayer);
		//this.scrambledSigns = this.createScrambledSigns(objectsLayer);
		//this.signs = this.createSigns(objectsLayer);
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

	createTilemap(tilemapKey) {
		return this.make.tilemap({ key: tilemapKey });
	}

	createTileset(tilemap, tilesetKey, tilesetTextureKey) {
		return tilemap.addTilesetImage(tilesetKey, tilesetTextureKey);
	}

	createLayers(tilemap, tileset) {
		const backgroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.BACKGROUND, tileset);
		const foregroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.FOREGROUND, tileset);
		const objectsLayer = tilemap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	createSafes(objectsLayer) {
		const safes = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.SAFE) {
				const safe = new _entities_Safe__WEBPACK_IMPORTED_MODULE_2__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE,
					12,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.COMBINATION),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.PROMPT_MESSAGE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_FRAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_DESCRIPTION)
				);
				safe.on('pointerdown', () => {
					if (!safe.isOpened()) {
						const answer = window.prompt(safe.getPromptMessage());
						if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
							safe.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.SAFE_OPEN);
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
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.SAFE_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE, [13], 4);
		return safes;
	}

	createDoor(objectsLayer) {
		const spawnObject = objectsLayer.objects.find((spawnObject) => {
			return spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.DOOR;
		});
		const door = new _entities_Door__WEBPACK_IMPORTED_MODULE_3__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR,
			10,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				this.showDialog(door.getLockedMessage());
			} else {
				door.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.DOOR_OPEN);
				door.setOpened(true);
				this.showDialog('Mouahahah you thought the game was over? Try to find the real escape route now!');
			}
		});
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.DOOR_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR, [5, 0], 4);
		return door;
	}

	createChests(objectsLayer) {
		const chests = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.CHEST) {
				const chest = new _entities_Chest__WEBPACK_IMPORTED_MODULE_1__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST,
					null,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED_MESSAGE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_FRAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_DESCRIPTION)
				);
				chest.on('pointerdown', () => {
					if (chest.isLocked()) {
						this.showDialog(chest.lockedMessage);
					} else {
						if (!chest.isOpened()) {
							chest.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.CHEST_OPEN);
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
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.CHEST_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST, [1], 8, -1);
		return chests;
	}

	createScrambledSigns(objectsLayer) {
		const signs = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.SCRAMBLED_SIGN) {
				const sign = new _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_5__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.TEXT),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.VISIBLE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SCRAMBLED),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SCRAMBLED_TEXT)
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
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.SIGN) {
				const sign = new _entities_Sign__WEBPACK_IMPORTED_MODULE_4__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.TEXT),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.VISIBLE)
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
		const dialogFrame = this.add.nineslice(450, 350, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.FRAME, null, 300, 550);
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
		const closeButton = this.add.image(585, 300, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.UI, 2);
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

	isBreakableWindowTile(tile) {
		return tile?.index === _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.CLOSE_WINDOW;
	}

	breakWindow(x, y) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.OPEN_WINDOW, x, y);
	}

	getBreakableWindowsTiles(tilemap) {
		return tilemap.filterTiles((tile) => tile.index === _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.CLOSE_WINDOW);
	}

	hasBreakableWindowsTiles() {
		return this.getBreakableWindowsTiles(this.tilemap).length === 0 ? false : true;
	}

	getCoffinTiles(tilemap) {
		return this.tilemap.filterTiles((tile) => _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.COFFIN.includes(tile.index));
	}

	destroyCoffin() {
		this.tilemap.removeTile(this.getCoffinTiles(this.tilemap));
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

	isChairTile(tile) {
		return (tile?.x === 23 && tile?.y === 4) || (tile?.x === 23 && tile?.y === 5) || (tile?.x === 23 && tile?.y === 6);
	}

	moveChair() {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_CHAIR, 22, 4);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_CHAIR, 22, 5);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_CHAIR, 22, 6);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.SIGN, 23, 6);
		this.tilemap.removeTileAt(23, 4);
		this.tilemap.removeTileAt(23, 5);
		const sign = this.signs.find((sign) => sign.name === 'chair-sign');
		sign.setVisible(true);
	}

	isKnightTile(tile) {
		return (tile?.x === 22 && tile?.y === 15) || (tile?.x === 22 && tile?.y === 16);
	}

	destroyKnight() {
		const sign = this.signs.find((sign) => sign.name === 'knight-sign');
		sign.setVisible(true);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.SIGN, 22, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.DESTROYED_KNIGHT, 22, 16);
	}

	isBreakableWallTile(tile) {
		return tile?.x === SECRET_TILE_X && tile?.y === SECRET_TILE_Y;
	}

	breakWall(x, y) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.HOLE_IN_WALL, x, y);
	}

	isLeftGargoyleTile(tile) {
		return (
			(tile?.x === 3 && tile?.y === 15) ||
			(tile?.x === 3 && tile?.y === 16) ||
			(tile?.x === 4 && tile?.y === 15) ||
			(tile?.x === 4 && tile?.y === 16)
		);
	}

	isRightGargoyleTile(tile) {
		return (
			(tile?.x === 8 && tile?.y === 15) ||
			(tile?.x === 8 && tile?.y === 16) ||
			(tile?.x === 9 && tile?.y === 15) ||
			(tile?.x === 9 && tile?.y === 16)
		);
	}

	moveLeftGargoyle(tile) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_LEFT_GARGOYLE, 2, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_RIGHT_GARGOYLE, 3, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_LEFT_GARGOYLE, 2, 16);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_RIGHT_GARGOYLE, 3, 16);
		this.tilemap.removeTileAt(4, 15);
		this.tilemap.removeTileAt(4, 16);
	}

	moveRightGargoyle(tile) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_LEFT_GARGOYLE, 9, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_RIGHT_GARGOYLE, 10, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_LEFT_GARGOYLE, 9, 16);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_RIGHT_GARGOYLE, 10, 16);
		this.tilemap.removeTileAt(8, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.STAIR, 8, 16);
	}

	isFireTile(tile) {
		return (
			(tile?.x === 12 && tile?.y === 18) ||
			(tile?.x === 13 && tile?.y === 18) ||
			(tile?.x === 14 && tile?.y === 18) ||
			(tile?.x === 12 && tile?.y === 19) ||
			(tile?.x === 13 && tile?.y === 19) ||
			(tile?.x === 14 && tile?.y === 19) ||
			(tile?.x === 12 && tile?.y === 20) ||
			(tile?.x === 13 && tile?.y === 20) ||
			(tile?.x === 14 && tile?.y === 20)
		);
	}

	extinguishFire() {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_LEFT_WATER, 12, 18);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_CENTER_WATER, 13, 18);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_RIGHT_WATER, 14, 18);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_LEFT_WATER, 12, 19);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_CENTER_WATER, 13, 19);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_RIGHT_WATER, 14, 19);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_LEFT_WATER, 12, 20);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_CENTER_WATER, 13, 20);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_RIGHT_WATER, 14, 20);
	}

	isSkeletonTile(tile) {
		return tile?.x === 7 && tile?.y === 9;
	}

	isStairTile(tile) {
		return tile?.index === _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.STAIR;
	}

	digSkeleton() {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.DIGGED_HOLE, 7, 9);
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

	update() {
		this.updateTime();

		if (this.isTimeElapsed) {
			this.scene.start('gameover');
		}

		if (this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.BOOK)) {
			this.scrambleDialogs(false);
		} else {
			this.scrambleDialogs(true);
		}

		if (this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.KEY)) {
			if (this.chests) {
				const chest = this.chests.find((chest) => chest.name === 'chest');
				chest.unlock();
			}
		} else {
			if (this.chests) {
				const chest = this.chests.find((chest) => chest.name === 'chest');
				chest.lock();
			}
		}

		if (this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.MASTER_KEY)) {
			if (this.door) {
				this.door.unlock();
			}
		} else {
			if (this.door) {
				this.door.lock();
			}
		}

		const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

		// Rounds down to nearest tile
		const pointerTileX = this.tilemap.worldToTileX(worldPoint.x);
		const pointerTileY = this.tilemap.worldToTileY(worldPoint.y);

		if (this.input.manager.activePointer.isDown) {
			const tile = this.tilemap.getTileAt(pointerTileX, pointerTileY, false, _constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.FOREGROUND);

			if (this.isBreakableWindowTile(tile) && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.HAMMER)) {
				this.breakWindow(pointerTileX, pointerTileY);
				if (!this.hasBreakableWindowsTiles()) {
					this.destroyCoffin();
					this.spawnItem(530, 205, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.RING, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.RING, 'You got the power ring');
				}
			}

			// move chair when clicked on it
			if (this.isChairTile(tile)) {
				this.moveChair();
			}

			// if tile if knight
			if (this.isKnightTile(tile) && !this.knightDestroyed && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.POTION)) {
				this.knightDestroyed = true;
				this.destroyKnight();
			}

			if (this.isBreakableWallTile(tile) && !this.wallDestroyed && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.PICKAXE)) {
				this.wallDestroyed = true;
				this.breakWall(pointerTileX, pointerTileY);
				this.spawnItem(205, 140, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.KEY, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.KEY, 'You got the key');
			}

			// if tile is gargoyle
			if (this.isLeftGargoyleTile(tile) && !this.isLeftGargoyleMoved && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.RING)) {
				this.isLeftGargoyleMoved = true;
				this.moveLeftGargoyle();
				this.spawnItem(145, 525, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.POTION, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.POTION, 'You got the magic solvent');
			}

			if (this.isRightGargoyleTile(tile) && !this.isRightGargoyleMoved && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.RING) && this.door.isOpened()) {
				this.isRightGargoyleMoved = true;
				this.moveRightGargoyle();
			}

			if (this.isFireTile(tile) && !this.fireExtinguished && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.ICE_ROD)) {
				this.fireExtinguished = true;
				this.extinguishFire();
				this.spawnItem(435, 620, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.PICKAXE, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.PICKAXE, 'You got the pickaxe');
			}

			if (this.isSkeletonTile(tile) && !this.isDigged && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.SHOVEL)) {
				this.isDigged = true;
				this.digSkeleton();
				this.spawnItem(250, 300, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.MASTER_KEY, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.MASTER_KEY, 'You got the master key');
			}

			if (this.isStairTile(tile)) {
				this.scene.start('win');
			}
		}
	}
}


/***/ }),

/***/ "./src/scenes/Splash.js":
/*!******************************!*\
  !*** ./src/scenes/Splash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SplashScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class SplashScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    constructor() {
        super('splash');
    }

    create() {
        const text = this.add.text(512, 250, 'Escape from the Dracula Castle', {
            fontSize: '50px',
            fontFamily: 'Verdana',
            fill: '#fff'
        });
        text.setStroke('#543873', 6);
        text.setOrigin(0.5, 0.5);
        
        const clickToContinue = this.add.text(512, 400, 'Click to start the game', {
            fontSize: '12px',
            fontFamily: 'Verdana'
        });
        clickToContinue.setOrigin(0.5, 0.5);
    }

    update() {
        if (this.input.manager.activePointer.isDown) {
            this.scene.start('play');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRzRCO0FBQ2dCO0FBQzVDO0FBQ2Usb0JBQW9CLHNEQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QzRCO0FBQzVCO0FBQ2UsbUJBQW1CLHVEQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REMEM7QUFDMUM7QUFDZSw0QkFBNEIsdURBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RDRDO0FBQzVDO0FBQ2UsbUJBQW1CLHNEQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hDMEI7QUFDMUI7QUFDZSw0QkFBNEIsNkNBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjRCO0FBQzVCO0FBQ2UsbUJBQW1CLHVEQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNEI7QUFDVTtBQUNTO0FBQ1g7QUFDTTtBQUMxQztBQUNBO0FBQ0EsT0FBTyxvREFBVztBQUNsQjtBQUNBLFFBQVEscURBQVk7QUFDcEIsb0JBQW9CLHFEQUFZO0FBQ2hDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxFQUFFO0FBQ0YsU0FBUyxzREFBVyxFQUFFLG9EQUFTLEVBQUUsd0RBQWEsRUFBRSxtREFBUTtBQUN4RDtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUM1QjtBQUNlLDRCQUE0QixxREFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjRCO0FBQ1U7QUFDRjtBQUNBO0FBQ0E7QUFDa0I7QUFDMkQ7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDZSx3QkFBd0IscURBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFTO0FBQ3RDLGtCQUFrQixpREFBUztBQUMzQixrQkFBa0IsaURBQVM7QUFDM0Isd0JBQXdCLGlEQUFTLGtDQUFrQyxpQ0FBaUM7QUFDcEcsd0JBQXdCLGlEQUFTLDRCQUE0QixpQ0FBaUM7QUFDOUYsd0JBQXdCLGlEQUFTLGtDQUFrQyxpQ0FBaUM7QUFDcEcsd0JBQXdCLGlEQUFTLGdDQUFnQyxpQ0FBaUM7QUFDbEcsd0JBQXdCLGlEQUFTLGdDQUFnQyxpQ0FBaUM7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFTO0FBQzdDLG1FQUFtRSxpREFBUztBQUM1RSxVQUFVLGdDQUFnQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx5Q0FBeUM7QUFDMUY7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsb0RBQVk7QUFDMUQsOENBQThDLG9EQUFZO0FBQzFELDhDQUE4QyxvREFBWTtBQUMxRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBVTtBQUN0QyxxQkFBcUIsc0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpREFBUztBQUNkO0FBQ0E7QUFDQSx5Q0FBeUMsc0RBQWM7QUFDdkQseUNBQXlDLHNEQUFjO0FBQ3ZELHlDQUF5QyxzREFBYztBQUN2RCx5Q0FBeUMsc0RBQWM7QUFDdkQseUNBQXlDLHNEQUFjO0FBQ3ZELHlDQUF5QyxzREFBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsaURBQVMsWUFBWSxpREFBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtEQUFVO0FBQ3pDLEdBQUc7QUFDSCxtQkFBbUIsc0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpREFBUztBQUNaO0FBQ0E7QUFDQSx1Q0FBdUMsc0RBQWM7QUFDckQsdUNBQXVDLHNEQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGNBQWMsaURBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QixpREFBUyxZQUFZLGlEQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBVTtBQUN0QyxzQkFBc0IsdURBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpREFBUztBQUNkO0FBQ0E7QUFDQSx5Q0FBeUMsc0RBQWM7QUFDdkQseUNBQXlDLHNEQUFjO0FBQ3ZELHlDQUF5QyxzREFBYztBQUN2RCx5Q0FBeUMsc0RBQWM7QUFDdkQseUNBQXlDLHNEQUFjO0FBQ3ZELHlDQUF5QyxzREFBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGtCQUFrQixpREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLGlEQUFTLGFBQWEsaURBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFVO0FBQ3RDLHFCQUFxQiwrREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzREFBYztBQUN2RCx5Q0FBeUMsc0RBQWM7QUFDdkQseUNBQXlDLHNEQUFjO0FBQ3ZELHlDQUF5QyxzREFBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBVTtBQUN0QyxxQkFBcUIsc0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsc0RBQWM7QUFDdkQseUNBQXlDLHNEQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGlEQUFTO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLCtDQUErQyxpREFBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw0Q0FBSTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw0Q0FBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0I7QUFDQSx5QkFBeUIsNENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSTtBQUM3QjtBQUNBO0FB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QSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0NoZXN0LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0Rvb3IuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvSXRlbUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9TYWZlLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL1NjcmFtYmxlZFNpZ24uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvU2lnbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL1BsYXkuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL1NwbGFzaC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvV2luLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ3VzdG9tUHJvcGVydHkgPSB7XHJcblx0Q09NQklOQVRJT046ICdjb21iaW5hdGlvbicsXHJcblx0UFJPTVBUX01FU1NBR0U6ICdwcm9tcHRNZXNzYWdlJyxcclxuXHRTUEFXTl9JVEVNX05BTUU6ICdzcGF3bkl0ZW0nLFxyXG5cdFNQQVdOX0lURU1fVEVYVFVSRTogJ3NwYXduSXRlbVRleHR1cmUnLFxyXG5cdFNQQVdOX0lURU1fRlJBTUU6ICdzcGF3bkl0ZW1GcmFtZScsXHJcblx0U1BBV05fSVRFTV9ERVNDUklQVElPTjogJ3NwYXduSXRlbURlc2NyaXB0aW9uJyxcclxuXHRMT0NLRUQ6ICdsb2NrZWQnLFxyXG5cdExPQ0tFRF9NRVNTQUdFOiAnbG9ja2VkTWVzc2FnZScsXHJcblx0VEVYVDogJ3RleHQnLFxyXG5cdFZJU0lCTEU6ICd2aXNpYmxlJyxcclxuXHRTQ1JBTUJMRUQ6ICdzY3JhbWJsZWQnLFxyXG5cdFNDUkFNQkxFRF9URVhUOiAnc2NyYW1ibGVkVGV4dCdcclxufTtcclxuXHJcbmNvbnN0IFRpbGVtYXBMYXllciA9IHtcclxuXHRCQUNLR1JPVU5EOiAnYmFja2dyb3VuZCcsXHJcblx0Rk9SRUdST1VORDogJ2ZvcmVncm91bmQnLFxyXG5cdE9CSkVDVFM6ICdvYmplY3RzJ1xyXG59O1xyXG5cclxuY29uc3QgRW50aXR5VHlwZSA9IHtcclxuXHRET09SOiAnZG9vcicsXHJcblx0U0FGRTogJ3NhZmUnLFxyXG5cdENIRVNUOiAnY2hlc3QnLFxyXG5cdFNJR046ICdzaWduJyxcclxuXHRTQ1JBTUJMRURfU0lHTjogJ3NjcmFtYmxlZC1zaWduJ1xyXG59O1xyXG5cclxuY29uc3QgTG9hZGVyS2V5ID0ge1xyXG5cdFRJTEVNQVA6ICd0aWxlbWFwJyxcclxuXHRUSUxFU0VUOiAndGlsZXMnLFxyXG5cdEZSQU1FOiAnZnJhbWUnLFxyXG5cdElURU1TOiAnaXRlbXMnLFxyXG5cdFVJOiAndWknLFxyXG5cdENIRVNUOiAnY2hlc3QnLFxyXG5cdERPT1I6ICdkb29yJyxcclxuXHRTQUZFOiAnc2FmZSdcclxufTtcclxuXHJcbmNvbnN0IFRpbGUgPSB7XHJcblx0U0lHTjogMTQ0LFxyXG5cdENMT1NFX1dJTkRPVzogMjU4LFxyXG5cdE9QRU5fV0lORE9XOiAyMzUsXHJcblx0Q09GRklOOiBbNzEsIDk1XSxcclxuXHRERVNUUk9ZRURfS05JR0hUOiA5NixcclxuXHRUT1BfQ0hBSVI6IDMxMixcclxuXHRNSURETEVfQ0hBSVI6IDMzNixcclxuXHRCT1RUT01fQ0hBSVI6IDM2MCxcclxuXHRIT0xFX0lOX1dBTEw6IDI0OSxcclxuXHRUT1BfTEVGVF9HQVJHT1lMRTogMjMyLFxyXG5cdFRPUF9SSUdIVF9HQVJHT1lMRTogMjMzLFxyXG5cdEJPVFRPTV9MRUZUX0dBUkdPWUxFOiAyNTYsXHJcblx0Qk9UVE9NX1JJR0hUX0dBUkdPWUxFOiAyNTcsXHJcblx0VE9QX0xFRlRfV0FURVI6IDEwLFxyXG5cdFRPUF9DRU5URVJfV0FURVI6IDExLFxyXG5cdFRPUF9SSUdIVF9XQVRFUjogMTIsXHJcblx0TUlERExFX0xFRlRfV0FURVI6IDM0LFxyXG5cdE1JRERMRV9DRU5URVJfV0FURVI6IDM1LFxyXG5cdE1JRERMRV9SSUdIVF9XQVRFUjogMzYsXHJcblx0Qk9UVE9NX0xFRlRfV0FURVI6IDU4LFxyXG5cdEJPVFRPTV9DRU5URVJfV0FURVI6IDU5LFxyXG5cdEJPVFRPTV9SSUdIVF9XQVRFUjogNjAsXHJcblx0RElHR0VEX0hPTEU6IDMxNixcclxuXHRTVEFJUjogMTI0LFxyXG59O1xyXG5cclxuY29uc3QgSXRlbSA9IHtcclxuXHRCT09LOiAnYm9vaycsXHJcblx0SEFNTUVSOiAnaGFtbWVyJyxcclxuXHRQSUNLQVhFOiAncGlja2F4ZScsXHJcblx0S0VZOiAna2V5JyxcclxuXHRNQVNURVJfS0VZOiAnbWFzdGVyLWtleScsXHJcblx0SUNFX1JPRDogJ2ljZS1yb2QnLFxyXG5cdFBPVElPTjogJ3BvdGlvbicsXHJcblx0U0hPVkVMOiAnc2hvdmVsJyxcclxuXHRSSU5HOiAncmluZydcclxufTtcclxuXHJcbmNvbnN0IEFuaW1hdGlvbiA9IHtcclxuXHRET09SX09QRU46ICdkb29yLW9wZW4nLFxyXG5cdFNBRkVfT1BFTjogJ3NhZmUtb3BlbicsXHJcblx0Q0hFU1RfT1BFTjogJ2NoZXN0LW9wZW4nXHJcbn07XHJcblxyXG5jb25zdCBGcmFtZSA9IHtcclxuXHRNQVNURVJfS0VZOiA1MSxcclxuXHRQSUNLQVhFOiA4MyxcclxuXHRQT1RJT046IDYxLFxyXG5cdEtFWTogNTAsXHJcblx0UklORzogMTNcclxufTtcclxuXHJcbk9iamVjdC5mcmVlemUoVGlsZW1hcExheWVyKTtcclxuT2JqZWN0LmZyZWV6ZShDdXN0b21Qcm9wZXJ0eSk7XHJcbk9iamVjdC5mcmVlemUoTG9hZGVyS2V5KTtcclxuT2JqZWN0LmZyZWV6ZShFbnRpdHlUeXBlKTtcclxuT2JqZWN0LmZyZWV6ZShUaWxlKTtcclxuT2JqZWN0LmZyZWV6ZShJdGVtKTtcclxuT2JqZWN0LmZyZWV6ZShBbmltYXRpb24pO1xyXG5PYmplY3QuZnJlZXplKEZyYW1lKTtcclxuXHJcbmV4cG9ydCB7IFRpbGVtYXBMYXllciwgQ3VzdG9tUHJvcGVydHksIExvYWRlcktleSwgRW50aXR5VHlwZSwgVGlsZSwgSXRlbSwgQW5pbWF0aW9uLCBGcmFtZSB9IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgSXRlbUNvbnRhaW5lciBmcm9tICcuL0l0ZW1Db250YWluZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlc3QgZXh0ZW5kcyBJdGVtQ29udGFpbmVyIHtcclxuXHJcblx0bG9ja2VkID0gdHJ1ZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBsb2NrZWQsIGxvY2tlZE1lc3NhZ2UsIHNwYXduSXRlbSwgc3Bhd25JdGVtVGV4dHVyZSwgc3Bhd25JdGVtRnJhbWUsIHNwYXduSXRlbURlc2NyaXB0aW9uKSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUsIHNwYXduSXRlbSwgc3Bhd25JdGVtVGV4dHVyZSwgc3Bhd25JdGVtRnJhbWUsIHNwYXduSXRlbURlc2NyaXB0aW9uKTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuXHRcdHRoaXMubG9ja2VkTWVzc2FnZSA9IGxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRsb2NrKCkge1xyXG5cdFx0dGhpcy5sb2NrZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0dW5sb2NrKCkge1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlzTG9ja2VkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9ja2VkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRMb2NrZWRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZE1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2tlZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9ja2VkTWVzc2FnZTtcclxuXHR9XHJcblx0XHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9vciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cdGxvY2tlZCA9IGZhbHNlO1xyXG5cdGxvY2tlZE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUsIGxvY2tlZCwgbG9ja2VkTWVzc2FnZSkge1xyXG5cdFx0Y29uc29sZS5sb2coZnJhbWUpO1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lKTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuXHRcdHRoaXMubG9ja2VkTWVzc2FnZSA9IGxvY2tlZE1lc3NhZ2U7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldFNjYWxlKDIpO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRzZXROYW1lKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRsb2NrKCkge1xyXG5cdFx0dGhpcy5sb2NrZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0dW5sb2NrKCkge1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlzTG9ja2VkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9ja2VkO1xyXG5cdH1cclxuXHJcblx0c2V0TG9ja2VkTWVzc2FnZShtZXNzYWdlKSB7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0Z2V0TG9ja2VkTWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyLCB7IFRpbGVtYXBzIH0gZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1Db250YWluZXIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICAgIG5hbWUgPSBudWxsO1xyXG4gICAgc3Bhd25JdGVtTmFtZSA9IG51bGw7XHJcblx0c3Bhd25JdGVtVGV4dHVyZSA9IG51bGw7XHJcblx0c3Bhd25JdGVtRnJhbWUgPSBudWxsO1xyXG5cdHNwYXduSXRlbURlc2NyaXB0aW9uID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBzcGF3bkl0ZW1OYW1lLCBzcGF3bkl0ZW1UZXh0dXJlLCBzcGF3bkl0ZW1GcmFtZSwgc3Bhd25JdGVtRGVzY3JpcHRpb24pIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1OYW1lID0gc3Bhd25JdGVtTmFtZTtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbVRleHR1cmUgPSBzcGF3bkl0ZW1UZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuc3Bhd25JdGVtRnJhbWUgPSBzcGF3bkl0ZW1GcmFtZTtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbURlc2NyaXB0aW9uID0gc3Bhd25JdGVtRGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3Bhd25JdGVtKHNwYXduSXRlbU5hbWUpIHtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbU5hbWUgPSBzcGF3bkl0ZW1OYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYXduSXRlbU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bhd25JdGVtTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGF3bkl0ZW1UZXh0dXJlKHRleHR1cmUpIHtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbVRleHR1cmUgPSB0ZXh0dXJlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Bhd25JdGVtVGV4dHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGF3bkl0ZW1UZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwYXduSXRlbUZyYW1lKGZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1GcmFtZSA9IGZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYXduSXRlbUZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduSXRlbUZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwYXduSXRlbURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICB0aGlzLnNwYXduSXRlbURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYXduSXRlbURlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduSXRlbURlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gJy4vSXRlbUNvbnRhaW5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZlIGV4dGVuZHMgSXRlbUNvbnRhaW5lciB7XHJcblxyXG4gICAgY29tYmluYXRpb24gPSBudWxsO1xyXG4gICAgcHJvbXB0TWVzc2FnZSA9IG51bGw7XHJcbiAgICBvcGVuZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUsIGNvbWJpbmF0aW9uLCBwcm9tcHRNZXNzYWdlLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbikge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbik7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gcHJvbXB0TWVzc2FnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q29tYmluYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tYmluYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29tYmluYXRpb24oY29tYmluYXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0aW9uID0gY29tYmluYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvbXB0TWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9tcHRNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb21wdE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMucHJvbXB0TWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9wZW5lZChvcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW5lZDtcclxuICAgIH1cclxufSIsImltcG9ydCBTaWduIGZyb20gJy4vU2lnbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhbWJsZWRTaWduIGV4dGVuZHMgU2lnbiB7XHJcblxyXG4gICAgc2NyYW1ibGVkID0gdHJ1ZTtcclxuICAgIHNjcmFtYmxlZFRleHQgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgbmFtZSwgdGV4dCwgdmlzaWJsZSwgc2NyYW1ibGVkLCBzY3JhbWJsZWRUZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIG5hbWUsIHRleHQsIHZpc2libGUpO1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkID0gc2NyYW1ibGVkO1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkVGV4dCA9IHNjcmFtYmxlZFRleHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzU2NyYW1ibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcmFtYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY3JhbWJsZWQoc2NyYW1ibGVkKSB7XHJcbiAgICAgICAgdGhpcy5zY3JhbWJsZWQgPSBzY3JhbWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2NyYW1ibGVkVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JhbWJsZWRUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjcmFtYmxlZFRleHQodGV4dCkge1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkVGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbiBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSB7XHJcblx0dGV4dCA9IG51bGw7XHJcblx0bmFtZSA9IG51bGw7XHJcblx0dmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgbmFtZSwgdGV4dCwgdmlzaWJsZSkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHkpO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcblx0fVxyXG5cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHNldE5hbWUobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGdldFRleHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0O1xyXG5cdH1cclxuXHJcblx0c2V0VGV4dCh0ZXh0KSB7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdH1cclxuXHJcblx0aXNWaXNpYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmlzaWJsZTtcclxuXHR9XHJcblxyXG5cdHNldFZpc2libGUodmlzaWJsZSkge1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgUGxheVNjZW5lIGZyb20gJy4vc2NlbmVzL1BsYXknO1xyXG5pbXBvcnQgR2FtZU92ZXJTY2VuZSAgZnJvbSAnLi9zY2VuZXMvR2FtZU92ZXInO1xyXG5pbXBvcnQgV2luU2NlbmUgZnJvbSAnLi9zY2VuZXMvV2luJztcclxuaW1wb3J0IFNwbGFzaFNjZW5lIGZyb20gJy4vc2NlbmVzL1NwbGFzaCc7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblx0c2NhbGU6IHtcclxuXHRcdG1vZGU6IFBoYXNlci5TY2FsZS5GSVQsXHJcbiAgICAgICAgYXV0b0NlbnRlcjogUGhhc2VyLlNjYWxlLkNFTlRFUl9CT1RILFxyXG5cdFx0d2lkdGg6IDEwMjQsXHJcblx0XHRoZWlnaHQ6IDc2OFxyXG5cdH0sXHJcblx0cGh5c2ljczoge1xyXG5cdFx0ZGVmYXVsdDogJ2FyY2FkZScsXHJcblx0XHRhcmNhZGU6IHtcclxuXHRcdFx0ZGVidWc6IHRydWUsXHJcblx0XHRcdGdyYXZpdHk6IHsgeTogMjAwIH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHNjZW5lOiBbU3BsYXNoU2NlbmUsIFBsYXlTY2VuZSwgR2FtZU92ZXJTY2VuZSwgV2luU2NlbmVdXHJcbn07XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdnYW1lb3ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0dhbWUgb3ZlcicsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IENoZXN0IGZyb20gJy4uL2VudGl0aWVzL0NoZXN0JztcclxuaW1wb3J0IFNhZmUgZnJvbSAnLi4vZW50aXRpZXMvU2FmZSc7XHJcbmltcG9ydCBEb29yIGZyb20gJy4uL2VudGl0aWVzL0Rvb3InO1xyXG5pbXBvcnQgU2lnbiBmcm9tICcuLi9lbnRpdGllcy9TaWduJztcclxuaW1wb3J0IFNjcmFtYmxlZFNpZ24gZnJvbSAnLi4vZW50aXRpZXMvU2NyYW1ibGVkU2lnbic7XHJcbmltcG9ydCB7IEN1c3RvbVByb3BlcnR5LCBUaWxlbWFwTGF5ZXIsIEVudGl0eVR5cGUsIExvYWRlcktleSwgVGlsZSwgSXRlbSwgQW5pbWF0aW9uLCBGcmFtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBTRUNSRVRfVElMRV9YID0gNjtcclxuY29uc3QgU0VDUkVUX1RJTEVfWSA9IDM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdHNpZ25zID0gbnVsbDtcclxuXHRkb29yID0gbnVsbDtcclxuXHRjaGVzdHMgPSBudWxsO1xyXG5cdHRpbGVtYXAgPSBudWxsO1xyXG5cdHNhZmVzID0gbnVsbDtcclxuXHRpdGVtcyA9IG51bGw7XHJcblx0c2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRzZWxlY3RlZFJlY3RhbmdsZSA9IG51bGw7XHJcblx0ZGlhbG9nR3JvdXAgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdwbGF5Jyk7XHJcblx0fVxyXG5cclxuXHRwcmVsb2FkKCkge1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oTG9hZGVyS2V5LlRJTEVNQVAsICdhc3NldHMvanNvbi9lc2NhcGUtcm9vbS1tYXAtcm9vbS1hLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZShMb2FkZXJLZXkuVElMRVNFVCwgJ2Fzc2V0cy9pbWcvY2FzdGxlLXRpbGVzL1RpbGVzZXQucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoTG9hZGVyS2V5LkZSQU1FLCAnYXNzZXRzL2ltZy9mcmFtZS5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuSVRFTVMsICdhc3NldHMvaW1nL2l0ZW1zLnBuZycsIHsgZnJhbWVXaWR0aDogMTYsIGZyYW1lSGVpZ2h0OiAxNiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuVUksICdhc3NldHMvaW1nL3VpLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAxMyB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuQ0hFU1QsICdhc3NldHMvaW1nL2NoZXN0LnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuRE9PUiwgJ2Fzc2V0cy9pbWcvZG9vci5wbmcnLCB7IGZyYW1lV2lkdGg6IDI0LCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LlNBRkUsICdhc3NldHMvaW1nL3NhZmUucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDQwIH0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0dGhpcy50aWxlbWFwID0gdGhpcy5jcmVhdGVUaWxlbWFwKExvYWRlcktleS5USUxFTUFQKTtcclxuXHRcdGNvbnN0IHRpbGVzZXQgPSB0aGlzLmNyZWF0ZVRpbGVzZXQodGhpcy50aWxlbWFwLCAnY2FzdGxlLXRpbGVzJywgTG9hZGVyS2V5LlRJTEVTRVQpO1xyXG5cdFx0Y29uc3QgeyBvYmplY3RzTGF5ZXIsIGZvcmVncm91bmRMYXllciB9ID0gdGhpcy5jcmVhdGVMYXllcnModGhpcy50aWxlbWFwLCB0aWxlc2V0KTtcclxuXHRcdC8vdGhpcy5jaGVzdHMgPSB0aGlzLmNyZWF0ZUNoZXN0cyhvYmplY3RzTGF5ZXIpO1xyXG5cdFx0Ly90aGlzLmRvb3IgPSB0aGlzLmNyZWF0ZURvb3Iob2JqZWN0c0xheWVyKTtcclxuXHRcdC8vdGhpcy5zYWZlcyA9IHRoaXMuY3JlYXRlU2FmZXMob2JqZWN0c0xheWVyKTtcclxuXHRcdC8vdGhpcy5zY3JhbWJsZWRTaWducyA9IHRoaXMuY3JlYXRlU2NyYW1ibGVkU2lnbnMob2JqZWN0c0xheWVyKTtcclxuXHRcdC8vdGhpcy5zaWducyA9IHRoaXMuY3JlYXRlU2lnbnMob2JqZWN0c0xheWVyKTtcclxuXHRcdHRoaXMuY3JlYXRlSHVkKCk7XHJcblx0XHR0aGlzLnN0YXJ0VGltZXIoMSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVIdWQoKSB7XHJcblx0XHRjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg5MjAsIDIwLCAnSXRlbXMnLCB7IGZvbnRTaXplOiAnMjBweCcsIGZvbnRGYW1pbHk6ICdWZXJkYW5hJyB9KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUh1ZCgpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWFnZSA9IHRoaXMuYWRkLmltYWdlKDk1MCwgaSAqIDUwICsgODAsIHRoaXMuaXRlbXNbaV0udGV4dHVyZSwgdGhpcy5pdGVtc1tpXS5mcmFtZSk7XHJcblx0XHRcdGltYWdlLnNldFNjYWxlKDIpO1xyXG5cdFx0XHRpbWFnZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0XHRpbWFnZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZSA9IHRoaXMuYWRkLnJlY3RhbmdsZShpbWFnZS54LCBpbWFnZS55LCA1MCwgNTApO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuc2V0U3Ryb2tlU3R5bGUoMywgMHhmZmZmZmYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRpbGVtYXAodGlsZW1hcEtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMubWFrZS50aWxlbWFwKHsga2V5OiB0aWxlbWFwS2V5IH0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGlsZXNldCh0aWxlbWFwLCB0aWxlc2V0S2V5LCB0aWxlc2V0VGV4dHVyZUtleSkge1xyXG5cdFx0cmV0dXJuIHRpbGVtYXAuYWRkVGlsZXNldEltYWdlKHRpbGVzZXRLZXksIHRpbGVzZXRUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxheWVycyh0aWxlbWFwLCB0aWxlc2V0KSB7XHJcblx0XHRjb25zdCBiYWNrZ3JvdW5kTGF5ZXIgPSB0aWxlbWFwLmNyZWF0ZUxheWVyKFRpbGVtYXBMYXllci5CQUNLR1JPVU5ELCB0aWxlc2V0KTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVtYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVzZXQpO1xyXG5cdFx0Y29uc3Qgb2JqZWN0c0xheWVyID0gdGlsZW1hcC5nZXRPYmplY3RMYXllcihUaWxlbWFwTGF5ZXIuT0JKRUNUUyk7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kTGF5ZXIsIGZvcmVncm91bmRMYXllciwgb2JqZWN0c0xheWVyIH07XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTYWZlcyhvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGNvbnN0IHNhZmVzID0gW107XHJcblx0XHRvYmplY3RzTGF5ZXIub2JqZWN0cy5mb3JFYWNoKChzcGF3bk9iamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAoc3Bhd25PYmplY3QudHlwZSA9PT0gRW50aXR5VHlwZS5TQUZFKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2FmZSA9IG5ldyBTYWZlKFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0LngsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRcdFx0TG9hZGVyS2V5LlNBRkUsXHJcblx0XHRcdFx0XHQxMixcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0Lm5hbWUsXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT01CSU5BVElPTiksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5QUk9NUFRfTUVTU0FHRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX05BTUUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9URVhUVVJFKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fRlJBTUUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9ERVNDUklQVElPTilcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHNhZmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFzYWZlLmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgYW5zd2VyID0gd2luZG93LnByb21wdChzYWZlLmdldFByb21wdE1lc3NhZ2UoKSk7XHJcblx0XHRcdFx0XHRcdGlmIChhbnN3ZXIgJiYgYW5zd2VyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IHNhZmUuZ2V0Q29tYmluYXRpb24oKS50b0xvY2FsZVVwcGVyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0c2FmZS5wbGF5KEFuaW1hdGlvbi5TQUZFX09QRU4pO1xyXG5cdFx0XHRcdFx0XHRcdHNhZmUuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS54LFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS55ICsgc2FmZS5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0XHRzYWZlLmdldFNwYXduSXRlbU5hbWUoKSxcclxuXHRcdFx0XHRcdFx0XHRcdHNhZmUuZ2V0U3Bhd25JdGVtVGV4dHVyZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS5nZXRTcGF3bkl0ZW1GcmFtZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS5nZXRTcGF3bkl0ZW1EZXNjcmlwdGlvbigpXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNhZmVzLnB1c2goc2FmZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLlNBRkVfT1BFTiwgTG9hZGVyS2V5LlNBRkUsIFsxM10sIDQpO1xyXG5cdFx0cmV0dXJuIHNhZmVzO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRG9vcihvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGNvbnN0IHNwYXduT2JqZWN0ID0gb2JqZWN0c0xheWVyLm9iamVjdHMuZmluZCgoc3Bhd25PYmplY3QpID0+IHtcclxuXHRcdFx0cmV0dXJuIHNwYXduT2JqZWN0LnR5cGUgPT09IEVudGl0eVR5cGUuRE9PUjtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgZG9vciA9IG5ldyBEb29yKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuRE9PUixcclxuXHRcdFx0MTAsXHJcblx0XHRcdHNwYXduT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGRvb3Iub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZG9vci5pc0xvY2tlZCgpKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93RGlhbG9nKGRvb3IuZ2V0TG9ja2VkTWVzc2FnZSgpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkb29yLnBsYXkoQW5pbWF0aW9uLkRPT1JfT1BFTik7XHJcblx0XHRcdFx0ZG9vci5zZXRPcGVuZWQodHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5zaG93RGlhbG9nKCdNb3VhaGFoYWggeW91IHRob3VnaHQgdGhlIGdhbWUgd2FzIG92ZXI/IFRyeSB0byBmaW5kIHRoZSByZWFsIGVzY2FwZSByb3V0ZSBub3chJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLkRPT1JfT1BFTiwgTG9hZGVyS2V5LkRPT1IsIFs1LCAwXSwgNCk7XHJcblx0XHRyZXR1cm4gZG9vcjtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNoZXN0cyhvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGNvbnN0IGNoZXN0cyA9IFtdO1xyXG5cdFx0b2JqZWN0c0xheWVyLm9iamVjdHMuZm9yRWFjaCgoc3Bhd25PYmplY3QpID0+IHtcclxuXHRcdFx0aWYgKHNwYXduT2JqZWN0LnR5cGUgPT09IEVudGl0eVR5cGUuQ0hFU1QpIHtcclxuXHRcdFx0XHRjb25zdCBjaGVzdCA9IG5ldyBDaGVzdChcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRcdFx0c3Bhd25PYmplY3QueSxcclxuXHRcdFx0XHRcdExvYWRlcktleS5DSEVTVCxcclxuXHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTE9DS0VEKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fTkFNRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX1RFWFRVUkUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9GUkFNRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX0RFU0NSSVBUSU9OKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2hlc3Qub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZXN0LmlzTG9ja2VkKCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93RGlhbG9nKGNoZXN0LmxvY2tlZE1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGVzdC5pc09wZW5lZCgpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2hlc3QucGxheShBbmltYXRpb24uQ0hFU1RfT1BFTik7XHJcblx0XHRcdFx0XHRcdFx0Y2hlc3Quc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QueCxcclxuXHRcdFx0XHRcdFx0XHRcdGNoZXN0LnkgKyBjaGVzdC5oZWlnaHQgKyA1LFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtTmFtZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtVGV4dHVyZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtRnJhbWUoKSxcclxuXHRcdFx0XHRcdFx0XHRcdGNoZXN0LmdldFNwYXduSXRlbURlc2NyaXB0aW9uKClcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y2hlc3RzLnB1c2goY2hlc3QpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5DSEVTVF9PUEVOLCBMb2FkZXJLZXkuQ0hFU1QsIFsxXSwgOCwgLTEpO1xyXG5cdFx0cmV0dXJuIGNoZXN0cztcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNjcmFtYmxlZFNpZ25zKG9iamVjdHNMYXllcikge1xyXG5cdFx0Y29uc3Qgc2lnbnMgPSBbXTtcclxuXHRcdG9iamVjdHNMYXllci5vYmplY3RzLmZvckVhY2goKHNwYXduT2JqZWN0KSA9PiB7XHJcblx0XHRcdGlmIChzcGF3bk9iamVjdC50eXBlID09PSBFbnRpdHlUeXBlLlNDUkFNQkxFRF9TSUdOKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2lnbiA9IG5ldyBTY3JhbWJsZWRTaWduKFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0LngsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRcdFx0c3Bhd25PYmplY3QubmFtZSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlRFWFQpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVklTSUJMRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TQ1JBTUJMRUQpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU0NSQU1CTEVEX1RFWFQpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRzaWduLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChzaWduLmlzVmlzaWJsZSgpKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzaWduLmlzU2NyYW1ibGVkKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3dEaWFsb2coc2lnbi5nZXRTY3JhbWJsZWRUZXh0KCkpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0RpYWxvZyhzaWduLmdldFRleHQoKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzaWducy5wdXNoKHNpZ24pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzaWducztcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNpZ25zKG9iamVjdHNMYXllcikge1xyXG5cdFx0Y29uc3Qgc2lnbnMgPSBbXTtcclxuXHRcdG9iamVjdHNMYXllci5vYmplY3RzLmZvckVhY2goKHNwYXduT2JqZWN0KSA9PiB7XHJcblx0XHRcdGlmIChzcGF3bk9iamVjdC50eXBlID09PSBFbnRpdHlUeXBlLlNJR04pIHtcclxuXHRcdFx0XHRjb25zdCBzaWduID0gbmV3IFNpZ24oXHJcblx0XHRcdFx0XHR0aGlzLFxyXG5cdFx0XHRcdFx0c3Bhd25PYmplY3QueCxcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0LnksXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVEVYVCksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5WSVNJQkxFKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0c2lnbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoc2lnbi5pc1Zpc2libGUoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dEaWFsb2coc2lnbi5nZXRUZXh0KCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNpZ25zLnB1c2goc2lnbik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNpZ25zO1xyXG5cdH1cclxuXHJcblx0c2NyYW1ibGVEaWFsb2dzKHNjcmFtYmxlZCkge1xyXG5cdFx0aWYgKHRoaXMuc2NyYW1ibGVTaWducykge1xyXG5cdFx0XHR0aGlzLnNjcmFtYmxlZFNpZ25zLmZvckVhY2goKGRpYWxvZykgPT4gZGlhbG9nLnNldFNjcmFtYmxlZChzY3JhbWJsZWQpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dEaWFsb2codGV4dCwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0aWYgKHRoaXMuZGlhbG9nR3JvdXApIHtcclxuXHRcdFx0dGhpcy5kaWFsb2dHcm91cC5kZXN0cm95KHRydWUsIGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlhbG9nR3JvdXAgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG5cdFx0Y29uc3QgZGlhbG9nRnJhbWUgPSB0aGlzLmFkZC5uaW5lc2xpY2UoNDUwLCAzNTAsIExvYWRlcktleS5GUkFNRSwgbnVsbCwgMzAwLCA1NTApO1xyXG5cdFx0bGV0IHRleHRZID0gMzUwO1xyXG5cdFx0aWYgKGl0ZW1UZXh0dXJlKSB7XHJcblx0XHRcdHRleHRZID0gMzMwO1xyXG5cdFx0XHRjb25zdCBkaWFsb2dJbWFnZSA9IHRoaXMuYWRkLmltYWdlKDQ1MCwgMzYwLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lKTtcclxuXHRcdFx0ZGlhbG9nSW1hZ2Uuc2V0U2NhbGUoMik7XHJcblx0XHRcdGRpYWxvZ0ltYWdlLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0XHRcdHRoaXMuZGlhbG9nR3JvdXAuYWRkKGRpYWxvZ0ltYWdlKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGRpYWxvZ1RleHQgPSB0aGlzLmFkZC50ZXh0KDQ1MCwgdGV4dFksIHRleHQsIHtcclxuXHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnLFxyXG5cdFx0XHRmb250U2l6ZTogJzEycHgnXHJcblx0XHR9KTtcclxuXHRcdGRpYWxvZ1RleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHRcdGRpYWxvZ1RleHQuc2V0V29yZFdyYXBXaWR0aCgyNTApO1xyXG5cdFx0Y29uc3QgY2xvc2VCdXR0b24gPSB0aGlzLmFkZC5pbWFnZSg1ODUsIDMwMCwgTG9hZGVyS2V5LlVJLCAyKTtcclxuXHRcdGNsb3NlQnV0dG9uLnNldEludGVyYWN0aXZlKCk7XHJcblxyXG5cdFx0dGhpcy5kaWFsb2dHcm91cC5hZGQoY2xvc2VCdXR0b24pO1xyXG5cdFx0dGhpcy5kaWFsb2dHcm91cC5hZGQoZGlhbG9nVGV4dCk7XHJcblx0XHR0aGlzLmRpYWxvZ0dyb3VwLmFkZChkaWFsb2dGcmFtZSk7XHJcblx0XHRjbG9zZUJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZGlhbG9nR3JvdXAuZGVzdHJveSh0cnVlLCBmYWxzZSk7XHJcblx0XHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUFuaW1hdGlvbihrZXksIHRleHR1cmUsIGZyYW1lcywgZnJhbWVSYXRlLCByZXBlYXQpIHtcclxuXHRcdHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0a2V5LFxyXG5cdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnModGV4dHVyZSwgeyBmcmFtZXMgfSksXHJcblx0XHRcdGZyYW1lUmF0ZSxcclxuXHRcdFx0cmVwZWF0XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBuYW1lKSB7XHJcblx0XHRsZXQgcHJvcGVydHkgPSBudWxsO1xyXG5cdFx0aWYgKHNwYXduT2JqZWN0KSB7XHJcblx0XHRcdHByb3BlcnR5ID0gc3Bhd25PYmplY3QucHJvcGVydGllcy5maW5kKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkubmFtZSA9PT0gbmFtZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJvcGVydHk/LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlhbG9nKGRpYWxvZ3MsIG5hbWUpIHtcclxuXHRcdHJldHVybiBkaWFsb2dzLmZpbmQoKGRpYWxvZykgPT4gZGlhbG9nLm5hbWUgPT0gbmFtZSk7XHJcblx0fVxyXG5cclxuXHRpc0JyZWFrYWJsZVdpbmRvd1RpbGUodGlsZSkge1xyXG5cdFx0cmV0dXJuIHRpbGU/LmluZGV4ID09PSBUaWxlLkNMT1NFX1dJTkRPVztcclxuXHR9XHJcblxyXG5cdGJyZWFrV2luZG93KHgsIHkpIHtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5PUEVOX1dJTkRPVywgeCwgeSk7XHJcblx0fVxyXG5cclxuXHRnZXRCcmVha2FibGVXaW5kb3dzVGlsZXModGlsZW1hcCkge1xyXG5cdFx0cmV0dXJuIHRpbGVtYXAuZmlsdGVyVGlsZXMoKHRpbGUpID0+IHRpbGUuaW5kZXggPT09IFRpbGUuQ0xPU0VfV0lORE9XKTtcclxuXHR9XHJcblxyXG5cdGhhc0JyZWFrYWJsZVdpbmRvd3NUaWxlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldEJyZWFrYWJsZVdpbmRvd3NUaWxlcyh0aGlzLnRpbGVtYXApLmxlbmd0aCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldENvZmZpblRpbGVzKHRpbGVtYXApIHtcclxuXHRcdHJldHVybiB0aGlzLnRpbGVtYXAuZmlsdGVyVGlsZXMoKHRpbGUpID0+IFRpbGUuQ09GRklOLmluY2x1ZGVzKHRpbGUuaW5kZXgpKTtcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3lDb2ZmaW4oKSB7XHJcblx0XHR0aGlzLnRpbGVtYXAucmVtb3ZlVGlsZSh0aGlzLmdldENvZmZpblRpbGVzKHRoaXMudGlsZW1hcCkpO1xyXG5cdH1cclxuXHJcblx0c3Bhd25JdGVtKHgsIHksIGl0ZW1OYW1lLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lLCBpdGVtRGVzY3JpcHRpb24pIHtcclxuXHRcdGNvbnN0IGl0ZW0gPSB0aGlzLmFkZC5pbWFnZSh4LCB5LCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lKTtcclxuXHRcdGl0ZW0uc2V0U2NhbGUoMik7XHJcblx0XHRpdGVtLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRpdGVtLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aXRlbS5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMuc2hvd0RpYWxvZyhpdGVtRGVzY3JpcHRpb24sIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLml0ZW1zLnB1c2goe1xyXG5cdFx0XHRcdFx0bmFtZTogaXRlbU5hbWUsXHJcblx0XHRcdFx0XHR0ZXh0dXJlOiBpdGVtVGV4dHVyZSxcclxuXHRcdFx0XHRcdGZyYW1lOiBpdGVtRnJhbWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aXNDaGFpclRpbGUodGlsZSkge1xyXG5cdFx0cmV0dXJuICh0aWxlPy54ID09PSAyMyAmJiB0aWxlPy55ID09PSA0KSB8fCAodGlsZT8ueCA9PT0gMjMgJiYgdGlsZT8ueSA9PT0gNSkgfHwgKHRpbGU/LnggPT09IDIzICYmIHRpbGU/LnkgPT09IDYpO1xyXG5cdH1cclxuXHJcblx0bW92ZUNoYWlyKCkge1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlRPUF9DSEFJUiwgMjIsIDQpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLk1JRERMRV9DSEFJUiwgMjIsIDUpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkJPVFRPTV9DSEFJUiwgMjIsIDYpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlNJR04sIDIzLCA2KTtcclxuXHRcdHRoaXMudGlsZW1hcC5yZW1vdmVUaWxlQXQoMjMsIDQpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnJlbW92ZVRpbGVBdCgyMywgNSk7XHJcblx0XHRjb25zdCBzaWduID0gdGhpcy5zaWducy5maW5kKChzaWduKSA9PiBzaWduLm5hbWUgPT09ICdjaGFpci1zaWduJyk7XHJcblx0XHRzaWduLnNldFZpc2libGUodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRpc0tuaWdodFRpbGUodGlsZSkge1xyXG5cdFx0cmV0dXJuICh0aWxlPy54ID09PSAyMiAmJiB0aWxlPy55ID09PSAxNSkgfHwgKHRpbGU/LnggPT09IDIyICYmIHRpbGU/LnkgPT09IDE2KTtcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3lLbmlnaHQoKSB7XHJcblx0XHRjb25zdCBzaWduID0gdGhpcy5zaWducy5maW5kKChzaWduKSA9PiBzaWduLm5hbWUgPT09ICdrbmlnaHQtc2lnbicpO1xyXG5cdFx0c2lnbi5zZXRWaXNpYmxlKHRydWUpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlNJR04sIDIyLCAxNSk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuREVTVFJPWUVEX0tOSUdIVCwgMjIsIDE2KTtcclxuXHR9XHJcblxyXG5cdGlzQnJlYWthYmxlV2FsbFRpbGUodGlsZSkge1xyXG5cdFx0cmV0dXJuIHRpbGU/LnggPT09IFNFQ1JFVF9USUxFX1ggJiYgdGlsZT8ueSA9PT0gU0VDUkVUX1RJTEVfWTtcclxuXHR9XHJcblxyXG5cdGJyZWFrV2FsbCh4LCB5KSB7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuSE9MRV9JTl9XQUxMLCB4LCB5KTtcclxuXHR9XHJcblxyXG5cdGlzTGVmdEdhcmdveWxlVGlsZSh0aWxlKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gMyAmJiB0aWxlPy55ID09PSAxNSkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDMgJiYgdGlsZT8ueSA9PT0gMTYpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSA0ICYmIHRpbGU/LnkgPT09IDE1KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gNCAmJiB0aWxlPy55ID09PSAxNilcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRpc1JpZ2h0R2FyZ295bGVUaWxlKHRpbGUpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdCh0aWxlPy54ID09PSA4ICYmIHRpbGU/LnkgPT09IDE1KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gOCAmJiB0aWxlPy55ID09PSAxNikgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDkgJiYgdGlsZT8ueSA9PT0gMTUpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSA5ICYmIHRpbGU/LnkgPT09IDE2KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdG1vdmVMZWZ0R2FyZ295bGUodGlsZSkge1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlRPUF9MRUZUX0dBUkdPWUxFLCAyLCAxNSk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuVE9QX1JJR0hUX0dBUkdPWUxFLCAzLCAxNSk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuQk9UVE9NX0xFRlRfR0FSR09ZTEUsIDIsIDE2KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5CT1RUT01fUklHSFRfR0FSR09ZTEUsIDMsIDE2KTtcclxuXHRcdHRoaXMudGlsZW1hcC5yZW1vdmVUaWxlQXQoNCwgMTUpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnJlbW92ZVRpbGVBdCg0LCAxNik7XHJcblx0fVxyXG5cclxuXHRtb3ZlUmlnaHRHYXJnb3lsZSh0aWxlKSB7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuVE9QX0xFRlRfR0FSR09ZTEUsIDksIDE1KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5UT1BfUklHSFRfR0FSR09ZTEUsIDEwLCAxNSk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuQk9UVE9NX0xFRlRfR0FSR09ZTEUsIDksIDE2KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5CT1RUT01fUklHSFRfR0FSR09ZTEUsIDEwLCAxNik7XHJcblx0XHR0aGlzLnRpbGVtYXAucmVtb3ZlVGlsZUF0KDgsIDE1KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5TVEFJUiwgOCwgMTYpO1xyXG5cdH1cclxuXHJcblx0aXNGaXJlVGlsZSh0aWxlKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gMTIgJiYgdGlsZT8ueSA9PT0gMTgpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSAxMyAmJiB0aWxlPy55ID09PSAxOCkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDE0ICYmIHRpbGU/LnkgPT09IDE4KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gMTIgJiYgdGlsZT8ueSA9PT0gMTkpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSAxMyAmJiB0aWxlPy55ID09PSAxOSkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDE0ICYmIHRpbGU/LnkgPT09IDE5KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gMTIgJiYgdGlsZT8ueSA9PT0gMjApIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSAxMyAmJiB0aWxlPy55ID09PSAyMCkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDE0ICYmIHRpbGU/LnkgPT09IDIwKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGV4dGluZ3Vpc2hGaXJlKCkge1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlRPUF9MRUZUX1dBVEVSLCAxMiwgMTgpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlRPUF9DRU5URVJfV0FURVIsIDEzLCAxOCk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuVE9QX1JJR0hUX1dBVEVSLCAxNCwgMTgpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLk1JRERMRV9MRUZUX1dBVEVSLCAxMiwgMTkpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLk1JRERMRV9DRU5URVJfV0FURVIsIDEzLCAxOSk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuTUlERExFX1JJR0hUX1dBVEVSLCAxNCwgMTkpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkJPVFRPTV9MRUZUX1dBVEVSLCAxMiwgMjApO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkJPVFRPTV9DRU5URVJfV0FURVIsIDEzLCAyMCk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuQk9UVE9NX1JJR0hUX1dBVEVSLCAxNCwgMjApO1xyXG5cdH1cclxuXHJcblx0aXNTa2VsZXRvblRpbGUodGlsZSkge1xyXG5cdFx0cmV0dXJuIHRpbGU/LnggPT09IDcgJiYgdGlsZT8ueSA9PT0gOTtcclxuXHR9XHJcblxyXG5cdGlzU3RhaXJUaWxlKHRpbGUpIHtcclxuXHRcdHJldHVybiB0aWxlPy5pbmRleCA9PT0gVGlsZS5TVEFJUjtcclxuXHR9XHJcblxyXG5cdGRpZ1NrZWxldG9uKCkge1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkRJR0dFRF9IT0xFLCA3LCA5KTtcclxuXHR9XHJcblxyXG5cdGlzSXRlbVNlbGVjdGVkKG5hbWUpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSA9PT0gbmFtZTtcclxuXHR9XHJcblxyXG5cdHN0YXJ0VGltZXIobnVtYmVyT2ZIb3Vycykge1xyXG5cdFx0aWYgKCF0aGlzLmlzUnVubmluZykge1xyXG5cdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5jb3VudERvd25EYXRlID0gbmV3IERhdGUobm93ICsgbnVtYmVyT2ZIb3VycyAqIDYwICogNjAgKiAxMDAwKS5nZXRUaW1lKCk7XHJcblx0XHRcdHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0XHR0aGlzLnRpbWVSZW1haW5pbmcgPSB0aGlzLmNvdW50RG93bkRhdGUgLSBub3c7XHJcblx0XHRcdFx0aWYgKG5vdyA+PSB0aGlzLmNvdW50RG93bkRhdGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmlzVGltZUVsYXBzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlVGltZSgpIHtcclxuXHRcdGlmICh0aGlzLnRpbWVUZXh0KSB7XHJcblx0XHRcdHRoaXMudGltZVRleHQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgaG91cnNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcblx0XHRjb25zdCBtaW51dGVzUmVtYWluaW5nID0gTWF0aC5mbG9vcigodGhpcy50aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcblx0XHRjb25zdCBzZWNvbmRzUmVtYWluaW5nID0gTWF0aC5mbG9vcigodGhpcy50aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblx0XHRpZiAodGhpcy50aW1lUmVtYWluaW5nKSB7XHJcblx0XHRcdHRoaXMudGltZVRleHQgPSB0aGlzLmFkZC50ZXh0KDkxNSwgNzMwLCBgJHtob3Vyc1JlbWFpbmluZ306JHttaW51dGVzUmVtYWluaW5nfToke3NlY29uZHNSZW1haW5pbmd9YCwge1xyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTJweCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy51cGRhdGVUaW1lKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNUaW1lRWxhcHNlZCkge1xyXG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdnYW1lb3ZlcicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uQk9PSykpIHtcclxuXHRcdFx0dGhpcy5zY3JhbWJsZURpYWxvZ3MoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zY3JhbWJsZURpYWxvZ3ModHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNJdGVtU2VsZWN0ZWQoSXRlbS5LRVkpKSB7XHJcblx0XHRcdGlmICh0aGlzLmNoZXN0cykge1xyXG5cdFx0XHRcdGNvbnN0IGNoZXN0ID0gdGhpcy5jaGVzdHMuZmluZCgoY2hlc3QpID0+IGNoZXN0Lm5hbWUgPT09ICdjaGVzdCcpO1xyXG5cdFx0XHRcdGNoZXN0LnVubG9jaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jaGVzdHMpIHtcclxuXHRcdFx0XHRjb25zdCBjaGVzdCA9IHRoaXMuY2hlc3RzLmZpbmQoKGNoZXN0KSA9PiBjaGVzdC5uYW1lID09PSAnY2hlc3QnKTtcclxuXHRcdFx0XHRjaGVzdC5sb2NrKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5pc0l0ZW1TZWxlY3RlZChJdGVtLk1BU1RFUl9LRVkpKSB7XHJcblx0XHRcdGlmICh0aGlzLmRvb3IpIHtcclxuXHRcdFx0XHR0aGlzLmRvb3IudW5sb2NrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmRvb3IpIHtcclxuXHRcdFx0XHR0aGlzLmRvb3IubG9jaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgd29ybGRQb2ludCA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5wb3NpdGlvblRvQ2FtZXJhKHRoaXMuY2FtZXJhcy5tYWluKTtcclxuXHJcblx0XHQvLyBSb3VuZHMgZG93biB0byBuZWFyZXN0IHRpbGVcclxuXHRcdGNvbnN0IHBvaW50ZXJUaWxlWCA9IHRoaXMudGlsZW1hcC53b3JsZFRvVGlsZVgod29ybGRQb2ludC54KTtcclxuXHRcdGNvbnN0IHBvaW50ZXJUaWxlWSA9IHRoaXMudGlsZW1hcC53b3JsZFRvVGlsZVkod29ybGRQb2ludC55KTtcclxuXHJcblx0XHRpZiAodGhpcy5pbnB1dC5tYW5hZ2VyLmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XHJcblx0XHRcdGNvbnN0IHRpbGUgPSB0aGlzLnRpbGVtYXAuZ2V0VGlsZUF0KHBvaW50ZXJUaWxlWCwgcG9pbnRlclRpbGVZLCBmYWxzZSwgVGlsZW1hcExheWVyLkZPUkVHUk9VTkQpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuaXNCcmVha2FibGVXaW5kb3dUaWxlKHRpbGUpICYmIHRoaXMuaXNJdGVtU2VsZWN0ZWQoSXRlbS5IQU1NRVIpKSB7XHJcblx0XHRcdFx0dGhpcy5icmVha1dpbmRvdyhwb2ludGVyVGlsZVgsIHBvaW50ZXJUaWxlWSk7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmhhc0JyZWFrYWJsZVdpbmRvd3NUaWxlcygpKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRlc3Ryb3lDb2ZmaW4oKTtcclxuXHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKDUzMCwgMjA1LCBJdGVtLlJJTkcsIExvYWRlcktleS5JVEVNUywgRnJhbWUuUklORywgJ1lvdSBnb3QgdGhlIHBvd2VyIHJpbmcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG1vdmUgY2hhaXIgd2hlbiBjbGlja2VkIG9uIGl0XHJcblx0XHRcdGlmICh0aGlzLmlzQ2hhaXJUaWxlKHRpbGUpKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZlQ2hhaXIoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgdGlsZSBpZiBrbmlnaHRcclxuXHRcdFx0aWYgKHRoaXMuaXNLbmlnaHRUaWxlKHRpbGUpICYmICF0aGlzLmtuaWdodERlc3Ryb3llZCAmJiB0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uUE9USU9OKSkge1xyXG5cdFx0XHRcdHRoaXMua25pZ2h0RGVzdHJveWVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3lLbmlnaHQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuaXNCcmVha2FibGVXYWxsVGlsZSh0aWxlKSAmJiAhdGhpcy53YWxsRGVzdHJveWVkICYmIHRoaXMuaXNJdGVtU2VsZWN0ZWQoSXRlbS5QSUNLQVhFKSkge1xyXG5cdFx0XHRcdHRoaXMud2FsbERlc3Ryb3llZCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5icmVha1dhbGwocG9pbnRlclRpbGVYLCBwb2ludGVyVGlsZVkpO1xyXG5cdFx0XHRcdHRoaXMuc3Bhd25JdGVtKDIwNSwgMTQwLCBJdGVtLktFWSwgTG9hZGVyS2V5LklURU1TLCBGcmFtZS5LRVksICdZb3UgZ290IHRoZSBrZXknKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgdGlsZSBpcyBnYXJnb3lsZVxyXG5cdFx0XHRpZiAodGhpcy5pc0xlZnRHYXJnb3lsZVRpbGUodGlsZSkgJiYgIXRoaXMuaXNMZWZ0R2FyZ295bGVNb3ZlZCAmJiB0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uUklORykpIHtcclxuXHRcdFx0XHR0aGlzLmlzTGVmdEdhcmdveWxlTW92ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMubW92ZUxlZnRHYXJnb3lsZSgpO1xyXG5cdFx0XHRcdHRoaXMuc3Bhd25JdGVtKDE0NSwgNTI1LCBJdGVtLlBPVElPTiwgTG9hZGVyS2V5LklURU1TLCBGcmFtZS5QT1RJT04sICdZb3UgZ290IHRoZSBtYWdpYyBzb2x2ZW50Jyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmlzUmlnaHRHYXJnb3lsZVRpbGUodGlsZSkgJiYgIXRoaXMuaXNSaWdodEdhcmdveWxlTW92ZWQgJiYgdGhpcy5pc0l0ZW1TZWxlY3RlZChJdGVtLlJJTkcpICYmIHRoaXMuZG9vci5pc09wZW5lZCgpKSB7XHJcblx0XHRcdFx0dGhpcy5pc1JpZ2h0R2FyZ295bGVNb3ZlZCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5tb3ZlUmlnaHRHYXJnb3lsZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pc0ZpcmVUaWxlKHRpbGUpICYmICF0aGlzLmZpcmVFeHRpbmd1aXNoZWQgJiYgdGhpcy5pc0l0ZW1TZWxlY3RlZChJdGVtLklDRV9ST0QpKSB7XHJcblx0XHRcdFx0dGhpcy5maXJlRXh0aW5ndWlzaGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmV4dGluZ3Vpc2hGaXJlKCk7XHJcblx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oNDM1LCA2MjAsIEl0ZW0uUElDS0FYRSwgTG9hZGVyS2V5LklURU1TLCBGcmFtZS5QSUNLQVhFLCAnWW91IGdvdCB0aGUgcGlja2F4ZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pc1NrZWxldG9uVGlsZSh0aWxlKSAmJiAhdGhpcy5pc0RpZ2dlZCAmJiB0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uU0hPVkVMKSkge1xyXG5cdFx0XHRcdHRoaXMuaXNEaWdnZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZGlnU2tlbGV0b24oKTtcclxuXHRcdFx0XHR0aGlzLnNwYXduSXRlbSgyNTAsIDMwMCwgSXRlbS5NQVNURVJfS0VZLCBMb2FkZXJLZXkuSVRFTVMsIEZyYW1lLk1BU1RFUl9LRVksICdZb3UgZ290IHRoZSBtYXN0ZXIga2V5Jyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmlzU3RhaXJUaWxlKHRpbGUpKSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnd2luJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsYXNoU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzcGxhc2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoNTEyLCAyNTAsICdFc2NhcGUgZnJvbSB0aGUgRHJhY3VsYSBDYXN0bGUnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnNTBweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJyxcclxuICAgICAgICAgICAgZmlsbDogJyNmZmYnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRTdHJva2UoJyM1NDM4NzMnLCA2KTtcclxuICAgICAgICB0ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2xpY2tUb0NvbnRpbnVlID0gdGhpcy5hZGQudGV4dCg1MTIsIDQwMCwgJ0NsaWNrIHRvIHN0YXJ0IHRoZSBnYW1lJywge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjbGlja1RvQ29udGludWUuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQubWFuYWdlci5hY3RpdmVQb2ludGVyLmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdwbGF5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbm5pbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0NvbmdyYXR1bGF0aW9ucyBmb3IgZXNjYXBpbmc/IFRoYW5rIHlvdSBmb3IgcGxheWluZyEnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fZHJhY3VsYV9jYXN0bGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fZHJhY3VsYV9jYXN0bGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9