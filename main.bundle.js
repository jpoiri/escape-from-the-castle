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
	DIRECTION: 'direction'
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
	DOOR: 'door',
	SAFE: 'safe',
	CHEST: 'chest',
	SIGN: 'sign',
	SCRAMBLED_SIGN: 'scrambled-sign',
	INTERACTIVE_ZONE: 'InteractiveZone'
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
/* harmony import */ var _scenes_rooms_RoomOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/rooms/RoomOne */ "./src/scenes/rooms/RoomOne.js");
/* harmony import */ var _scenes_rooms_RoomTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/rooms/RoomTwo */ "./src/scenes/rooms/RoomTwo.js");
/* harmony import */ var _scenes_GameOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/GameOver */ "./src/scenes/GameOver.js");
/* harmony import */ var _scenes_Win__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/Win */ "./src/scenes/Win.js");
/* harmony import */ var _scenes_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/Menu */ "./src/scenes/Menu.js");
/* harmony import */ var _scenes_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/Loading */ "./src/scenes/Loading.js");








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
	scene: [_scenes_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], _scenes_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], _scenes_rooms_RoomOne__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_rooms_RoomTwo__WEBPACK_IMPORTED_MODULE_2__["default"], _scenes_GameOver__WEBPACK_IMPORTED_MODULE_3__["default"], _scenes_Win__WEBPACK_IMPORTED_MODULE_4__["default"]]
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
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.FRAME, 'assets/img/frame.png');
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.ITEMS, 'assets/img/items.png', { frameWidth: 16, frameHeight: 16 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.UI, 'assets/img/ui.png', { frameWidth: 32, frameHeight: 13 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.CHEST, 'assets/img/chest.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.DOOR, 'assets/img/door.png', { frameWidth: 24, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.SAFE, 'assets/img/safe.png', { frameWidth: 32, frameHeight: 40 });
		this.scene.start('menu');
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


class MenuScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    constructor() {
        super('menu');
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
            this.scene.start('room-one');
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

/***/ "./src/scenes/rooms/BaseRoom.js":
/*!**************************************!*\
  !*** ./src/scenes/rooms/BaseRoom.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseRoomScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_Chest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Chest */ "./src/entities/Chest.js");
/* harmony import */ var _entities_Safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/Safe */ "./src/entities/Safe.js");
/* harmony import */ var _entities_Door__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/Door */ "./src/entities/Door.js");
/* harmony import */ var _entities_Sign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/Sign */ "./src/entities/Sign.js");
/* harmony import */ var _entities_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/Item */ "./src/entities/Item.js");
/* harmony import */ var _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/ScrambledSign */ "./src/entities/ScrambledSign.js");
/* harmony import */ var _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entities/InteractiveZone */ "./src/entities/InteractiveZone.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");










class BaseRoomScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
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
		const tileSet = this.createTileSet(this.tileMap, 'castle-tiles', _constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.TILESET);
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
		const backgroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_8__.TilemapLayer.BACKGROUND, tileset);
		const foregroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_8__.TilemapLayer.FOREGROUND, tileset);
		const objectsLayer = tilemap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_8__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	loadTileMapObjects(objectsLayer) {
		const tileMapObjects = objectsLayer.objects;
		for (let i = 0, len = tileMapObjects.length; i < len; i++) {
			switch (tileMapObjects[i].type) {
				case _constants__WEBPACK_IMPORTED_MODULE_8__.EntityType.INTERACTIVE_ZONE:
					this.createInteractiveZone(tileMapObjects[i]);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_8__.EntityType.CHEST:
					this.chests.push(this.createChest(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_8__.EntityType.SAFE:
					this.safes.push(this.createSafe(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_8__.EntityType.DOOR:
					this.door = this.createDoor(tileMapObjects[i]);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_8__.EntityType.SCRAMBLED_SIGN:
					this.scrambledSigns.push(this.createScrambledSign(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_8__.EntityType.SIGN:
					this.signs.push(this.createSign(tileMapObjects[i]));
					break;
			}
		}
	}

	createInteractiveZone(tileMapObject) {
		const zone = new _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_7__["default"](this, tileMapObject.x, tileMapObject.y, tileMapObject.width, tileMapObject.height);
		zone.setVelocity(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.VELOCITY));
		zone.setDirection(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.DIRECTION));
		zone.setAction(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.ACTION));
		zone.setNewTiles(
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.NEW_TILES)
				?.split(',')
				.map((s) => parseInt(s))
		);
		const itemName = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_NAME);
		if (itemName) {
			zone.setSpawnItem(
				new _entities_Item__WEBPACK_IMPORTED_MODULE_5__["default"](
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_DESCRIPTION),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_FRAME)
				)
			);
		}
	}

	createSafe(spawnObject) {
		const safe = new _entities_Safe__WEBPACK_IMPORTED_MODULE_2__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.SAFE,
			12,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.COMBINATION),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.PROMPT_MESSAGE),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_NAME),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_TEXTURE),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_FRAME),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_DESCRIPTION)
		);
		safe.on('pointerdown', () => {
			if (!safe.isOpened()) {
				const answer = window.prompt(safe.getPromptMessage());
				if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
					safe.play(_constants__WEBPACK_IMPORTED_MODULE_8__.Animation.SAFE_OPEN);
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
		const door = new _entities_Door__WEBPACK_IMPORTED_MODULE_3__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.DOOR,
			10,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.LOCKED),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				this.showDialog(door.getLockedMessage());
			} else {
				door.play(_constants__WEBPACK_IMPORTED_MODULE_8__.Animation.DOOR_OPEN);
				door.setOpened(true);
				this.showDialog('Mouahahah you thought the game was over? Try to find the real escape route now!');
			}
		});
		return door;
	}

	createChest(spawnObject) {
		const chest = new _entities_Chest__WEBPACK_IMPORTED_MODULE_1__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.CHEST,
			null,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.LOCKED),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.LOCKED_MESSAGE),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_NAME),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_TEXTURE),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_FRAME),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SPAWN_ITEM_DESCRIPTION)
		);
		chest.on('pointerdown', () => {
			if (chest.isLocked()) {
				this.showDialog(chest.lockedMessage);
			} else {
				if (!chest.isOpened()) {
					chest.play(_constants__WEBPACK_IMPORTED_MODULE_8__.Animation.CHEST_OPEN);
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
		const sign = new _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_6__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.TEXT),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.VISIBLE),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SCRAMBLED),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.SCRAMBLED_TEXT)
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
		const sign = new _entities_Sign__WEBPACK_IMPORTED_MODULE_4__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.TEXT),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_8__.CustomProperty.VISIBLE)
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
		const dialogFrame = this.add.nineslice(450, 350, _constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.FRAME, null, 300, 550);
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
		const closeButton = this.add.image(585, 300, _constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.UI, 2);
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
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_8__.Animation.SAFE_OPEN, _constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.SAFE, [13], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_8__.Animation.DOOR_OPEN, _constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.DOOR, [5, 0], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_8__.Animation.CHEST_OPEN, _constants__WEBPACK_IMPORTED_MODULE_8__.LoaderKey.CHEST, [1], 8, -1);
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

		return this.tileMap.getTileAt(pointerTileX, pointerTileY, false, _constants__WEBPACK_IMPORTED_MODULE_8__.TilemapLayer.FOREGROUND);
	}

	update() {
		this.updateTime();
		if (this.isTimeElapsed) {
			this.scene.start('gameover');
		}
	}
}


/***/ }),

/***/ "./src/scenes/rooms/RoomOne.js":
/*!*************************************!*\
  !*** ./src/scenes/rooms/RoomOne.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoomOne)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRoom */ "./src/scenes/rooms/BaseRoom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




class RoomOne extends _BaseRoom__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor() {
		super('room-one');
	}

	create() {
		console.log('room 1');
		super.create('room-one');
	}

	update() {
		super.update();

		/**
		if (this.input.manager.activePointer.isDown) {
			this.scene.start('room-two');
		}
		**/
	}
}


/***/ }),

/***/ "./src/scenes/rooms/RoomTwo.js":
/*!*************************************!*\
  !*** ./src/scenes/rooms/RoomTwo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoomTwo)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRoom */ "./src/scenes/rooms/BaseRoom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




class RoomTwo extends _BaseRoom__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor() {
		super('room-two');
	}

	create() {
		console.log('room 2');
		super.create('room-two');
	}

	update() {
		super.update();

		if (this.input.manager.activePointer.isDown) {
			const tile = super.getPointerTile();
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSHhGO0FBQ2dCO0FBQzVDO0FBQ2Usb0JBQW9CLHNEQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0NoZXN0LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0Rvb3IuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvSW50ZXJhY3RpdmVab25lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0l0ZW0uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvSXRlbUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9TYWZlLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL1NjcmFtYmxlZFNpZ24uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvU2lnbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL01lbnUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL1dpbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvcm9vbXMvQmFzZVJvb20uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL3Jvb21zL1Jvb21PbmUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL3Jvb21zL1Jvb21Ud28uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHtcclxuXHRDT01CSU5BVElPTjogJ2NvbWJpbmF0aW9uJyxcclxuXHRQUk9NUFRfTUVTU0FHRTogJ3Byb21wdE1lc3NhZ2UnLFxyXG5cdFNQQVdOX0lURU1fTkFNRTogJ3NwYXduSXRlbScsXHJcblx0U1BBV05fSVRFTV9URVhUVVJFOiAnc3Bhd25JdGVtVGV4dHVyZScsXHJcblx0U1BBV05fSVRFTV9GUkFNRTogJ3NwYXduSXRlbUZyYW1lJyxcclxuXHRTUEFXTl9JVEVNX0RFU0NSSVBUSU9OOiAnc3Bhd25JdGVtRGVzY3JpcHRpb24nLFxyXG5cdExPQ0tFRDogJ2xvY2tlZCcsXHJcblx0TE9DS0VEX01FU1NBR0U6ICdsb2NrZWRNZXNzYWdlJyxcclxuXHRURVhUOiAndGV4dCcsXHJcblx0VklTSUJMRTogJ3Zpc2libGUnLFxyXG5cdFNDUkFNQkxFRDogJ3NjcmFtYmxlZCcsXHJcblx0U0NSQU1CTEVEX1RFWFQ6ICdzY3JhbWJsZWRUZXh0JyxcclxuXHRBQ1RJT046ICdhY3Rpb24nLFxyXG5cdE5FV19USUxFUzogJ25ld1RpbGVzJyxcclxuXHRWRUxPQ0lUWTogJ3ZlbG9jaXR5JyxcclxuXHRESVJFQ1RJT046ICdkaXJlY3Rpb24nXHJcbn07XHJcblxyXG5jb25zdCBUaWxlQWN0aW9uID0ge1xyXG5cdE1PVkU6ICdtb3ZlJyxcclxuXHRERVNUUk9ZOiAnZGVzdHJveScsXHJcblx0UkVQTEFDRTogJ3JlcGxhY2UnXHJcbn07XHJcblxyXG5jb25zdCBEaXJlY3Rpb24gPSB7XHJcblx0TEVGVDogJ2xlZnQnLFxyXG5cdFJJR0hUOiAncmlnaHQnLFxyXG5cdFVQOiAnVVAnLFxyXG5cdERPV046ICdkb3duJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZW1hcExheWVyID0ge1xyXG5cdEJBQ0tHUk9VTkQ6ICdiYWNrZ3JvdW5kJyxcclxuXHRGT1JFR1JPVU5EOiAnZm9yZWdyb3VuZCcsXHJcblx0T0JKRUNUUzogJ29iamVjdHMnXHJcbn07XHJcblxyXG5jb25zdCBFbnRpdHlUeXBlID0ge1xyXG5cdERPT1I6ICdkb29yJyxcclxuXHRTQUZFOiAnc2FmZScsXHJcblx0Q0hFU1Q6ICdjaGVzdCcsXHJcblx0U0lHTjogJ3NpZ24nLFxyXG5cdFNDUkFNQkxFRF9TSUdOOiAnc2NyYW1ibGVkLXNpZ24nLFxyXG5cdElOVEVSQUNUSVZFX1pPTkU6ICdJbnRlcmFjdGl2ZVpvbmUnXHJcbn07XHJcblxyXG5jb25zdCBMb2FkZXJLZXkgPSB7XHJcblx0VElMRU1BUDogJ3RpbGVtYXAnLFxyXG5cdFRJTEVTRVQ6ICd0aWxlcycsXHJcblx0RlJBTUU6ICdmcmFtZScsXHJcblx0SVRFTVM6ICdpdGVtcycsXHJcblx0VUk6ICd1aScsXHJcblx0Q0hFU1Q6ICdjaGVzdCcsXHJcblx0RE9PUjogJ2Rvb3InLFxyXG5cdFNBRkU6ICdzYWZlJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZSA9IHtcclxuXHRTSUdOOiAxNDQsXHJcblx0Q0xPU0VfV0lORE9XOiAyNTgsXHJcblx0T1BFTl9XSU5ET1c6IDIzNSxcclxuXHRDT0ZGSU46IFs3MSwgOTVdLFxyXG5cdERFU1RST1lFRF9LTklHSFQ6IDk2LFxyXG5cdFRPUF9DSEFJUjogMzEyLFxyXG5cdE1JRERMRV9DSEFJUjogMzM2LFxyXG5cdEJPVFRPTV9DSEFJUjogMzYwLFxyXG5cdEhPTEVfSU5fV0FMTDogMjQ5LFxyXG5cdFRPUF9MRUZUX0dBUkdPWUxFOiAyMzIsXHJcblx0VE9QX1JJR0hUX0dBUkdPWUxFOiAyMzMsXHJcblx0Qk9UVE9NX0xFRlRfR0FSR09ZTEU6IDI1NixcclxuXHRCT1RUT01fUklHSFRfR0FSR09ZTEU6IDI1NyxcclxuXHRUT1BfTEVGVF9XQVRFUjogMTAsXHJcblx0VE9QX0NFTlRFUl9XQVRFUjogMTEsXHJcblx0VE9QX1JJR0hUX1dBVEVSOiAxMixcclxuXHRNSURETEVfTEVGVF9XQVRFUjogMzQsXHJcblx0TUlERExFX0NFTlRFUl9XQVRFUjogMzUsXHJcblx0TUlERExFX1JJR0hUX1dBVEVSOiAzNixcclxuXHRCT1RUT01fTEVGVF9XQVRFUjogNTgsXHJcblx0Qk9UVE9NX0NFTlRFUl9XQVRFUjogNTksXHJcblx0Qk9UVE9NX1JJR0hUX1dBVEVSOiA2MCxcclxuXHRESUdHRURfSE9MRTogMzE2LFxyXG5cdFNUQUlSOiAxMjRcclxufTtcclxuXHJcbmNvbnN0IEl0ZW0gPSB7XHJcblx0Qk9PSzogJ2Jvb2snLFxyXG5cdEhBTU1FUjogJ2hhbW1lcicsXHJcblx0UElDS0FYRTogJ3BpY2theGUnLFxyXG5cdEtFWTogJ2tleScsXHJcblx0TUFTVEVSX0tFWTogJ21hc3Rlci1rZXknLFxyXG5cdElDRV9ST0Q6ICdpY2Utcm9kJyxcclxuXHRQT1RJT046ICdwb3Rpb24nLFxyXG5cdFNIT1ZFTDogJ3Nob3ZlbCcsXHJcblx0UklORzogJ3JpbmcnXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSB7XHJcblx0RE9PUl9PUEVOOiAnZG9vci1vcGVuJyxcclxuXHRTQUZFX09QRU46ICdzYWZlLW9wZW4nLFxyXG5cdENIRVNUX09QRU46ICdjaGVzdC1vcGVuJ1xyXG59O1xyXG5cclxuY29uc3QgRnJhbWUgPSB7XHJcblx0TUFTVEVSX0tFWTogNTEsXHJcblx0UElDS0FYRTogODMsXHJcblx0UE9USU9OOiA2MSxcclxuXHRLRVk6IDUwLFxyXG5cdFJJTkc6IDEzXHJcbn07XHJcblxyXG5PYmplY3QuZnJlZXplKFRpbGVtYXBMYXllcik7XHJcbk9iamVjdC5mcmVlemUoQ3VzdG9tUHJvcGVydHkpO1xyXG5PYmplY3QuZnJlZXplKExvYWRlcktleSk7XHJcbk9iamVjdC5mcmVlemUoRW50aXR5VHlwZSk7XHJcbk9iamVjdC5mcmVlemUoVGlsZSk7XHJcbk9iamVjdC5mcmVlemUoSXRlbSk7XHJcbk9iamVjdC5mcmVlemUoQW5pbWF0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShGcmFtZSk7XHJcbk9iamVjdC5mcmVlemUoRGlyZWN0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShUaWxlQWN0aW9uKTtcclxuXHJcbmV4cG9ydCB7IFRpbGVtYXBMYXllciwgQ3VzdG9tUHJvcGVydHksIExvYWRlcktleSwgRW50aXR5VHlwZSwgVGlsZSwgSXRlbSwgQW5pbWF0aW9uLCBGcmFtZSwgVGlsZUFjdGlvbiwgRGlyZWN0aW9uIH07XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSAnLi9JdGVtQ29udGFpbmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZXN0IGV4dGVuZHMgSXRlbUNvbnRhaW5lciB7XHJcblxyXG5cdGxvY2tlZCA9IHRydWU7XHJcblx0bG9ja2VkTWVzc2FnZSA9IG51bGw7XHJcblx0b3BlbmVkID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgbG9ja2VkLCBsb2NrZWRNZXNzYWdlLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbikge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbik7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0TG9ja2VkTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NrZWRNZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cdFxyXG5cdGlzT3BlbmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0T3BlbmVkKG9wZW5lZCkge1xyXG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRuYW1lID0gbnVsbDtcclxuXHRsb2NrZWQgPSBmYWxzZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBsb2NrZWQsIGxvY2tlZE1lc3NhZ2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKGZyYW1lKTtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgyKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuXHR9XHJcblxyXG5cdHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldExvY2tlZE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgVGlsZW1hcExheWVyLCBUaWxlQWN0aW9uLCBEaXJlY3Rpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGl2ZVpvbmUgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcblx0dmVsb2NpdHkgPSAwO1xuXHRkaXJlY3Rpb24gPSBudWxsO1xuXHRhY3Rpb24gPSBudWxsO1xuXHRuZXdUaWxlcyA9IG51bGw7XG5cdHNwYXduSXRlbSA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cdFx0dGhpcy5zZXRPcmlnaW4oMCwgMCk7XG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuXHRcdHRoaXMub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGlsZXMgPSBzY2VuZS50aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcblx0XHRcdFx0dGhpcy54LFxuXHRcdFx0XHR0aGlzLnksXG5cdFx0XHRcdHRoaXMud2lkdGgsXG5cdFx0XHRcdHRoaXMuaGVpZ2h0LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aXNOb3RFbXB0eTogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRUaWxlbWFwTGF5ZXIuRk9SRUdST1VORFxuXHRcdFx0KTtcblx0XHRcdHN3aXRjaCAodGhpcy5hY3Rpb24pIHtcblx0XHRcdFx0Y2FzZSBUaWxlQWN0aW9uLlJFUExBQ0U6XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5uZXdUaWxlc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRzY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aGlzLm5ld1RpbGVzW2ldLCB0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgVGlsZUFjdGlvbi5ERVNUUk9ZOlxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0c2NlbmUudGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFRpbGVBY3Rpb24uTU9WRTpcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRcdHNjZW5lLnRpbGVNYXAucmVtb3ZlVGlsZUF0KHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5MRUZUOlxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRzY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCArIHRoaXMudmVsb2NpdHksIHRpbGVzW2ldLnkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uUklHSFQ6XG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54IC0gdGhpcy52ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5VUDpcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2NlbmUudGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkgLSB0aGlzLnZlbG9jaXR5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLkRPV046XG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54LCB0aWxlc1tpXS55ICsgdGhpcy52ZWxvY2l0eSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3Bhd25JdGVtKSB7XG5cdFx0XHRcdHNjZW5lLnNwYXduSXRlbSh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnNwYXduSXRlbSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9KTtcblx0fVxuXG5cdHNldFZlbG9jaXR5KHZlbG9jaXR5KSB7XG5cdFx0dGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuXHR9XG5cblx0Z2V0VmVsb2NpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmVsb2NpdHk7XG5cdH1cblxuXHRzZXRBY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cdH1cblxuXHRnZXRBY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aW9uO1xuXHR9XG5cblx0c2V0RGlyZWN0aW9uKGRpcmVjdGlvbikge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0Z2V0RGlyZWN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbjtcblx0fVxuXG5cdHNldFNwYXduSXRlbShzcGF3bkl0ZW0pIHtcblx0XHR0aGlzLnNwYXduSXRlbSA9IHNwYXduSXRlbTtcblx0fVxuXG5cdGdldFNwYXduSXRlbSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zcGF3bkl0ZW07XG5cdH1cblxuXHRzZXROZXdUaWxlcyhuZXdUaWxlcykge1xuXHRcdHRoaXMubmV3VGlsZXMgPSBuZXdUaWxlcztcblx0fVxuXG5cdGdldE5ld1RpbGVzKCkge1xuXHRcdHJldHVybiB0aGlzLm5ld1RpbGVzO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcblxuXHRuYW1lID0gbnVsbDtcblx0dGV4dHVyZSA9IG51bGw7XG5cdGZyYW1lID0gbnVsbDtcbiAgICBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHRleHR1cmUsIGZyYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRUZXh0dXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xuICAgIH1cblxuICAgIHNldFRleHR1cmUodGV4dHVyZSkge1xuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHNldEZyYW1lKGZyYW1lKSB7XG4gICAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB9XG5cbiAgICBnZXRGcmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gICAgfVxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1Db250YWluZXIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICAgIG5hbWUgPSBudWxsO1xyXG4gICAgc3Bhd25JdGVtTmFtZSA9IG51bGw7XHJcblx0c3Bhd25JdGVtVGV4dHVyZSA9IG51bGw7XHJcblx0c3Bhd25JdGVtRnJhbWUgPSBudWxsO1xyXG5cdHNwYXduSXRlbURlc2NyaXB0aW9uID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBzcGF3bkl0ZW1OYW1lLCBzcGF3bkl0ZW1UZXh0dXJlLCBzcGF3bkl0ZW1GcmFtZSwgc3Bhd25JdGVtRGVzY3JpcHRpb24pIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1OYW1lID0gc3Bhd25JdGVtTmFtZTtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbVRleHR1cmUgPSBzcGF3bkl0ZW1UZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuc3Bhd25JdGVtRnJhbWUgPSBzcGF3bkl0ZW1GcmFtZTtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbURlc2NyaXB0aW9uID0gc3Bhd25JdGVtRGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3Bhd25JdGVtKHNwYXduSXRlbU5hbWUpIHtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbU5hbWUgPSBzcGF3bkl0ZW1OYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYXduSXRlbU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bhd25JdGVtTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGF3bkl0ZW1UZXh0dXJlKHRleHR1cmUpIHtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbVRleHR1cmUgPSB0ZXh0dXJlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Bhd25JdGVtVGV4dHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGF3bkl0ZW1UZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwYXduSXRlbUZyYW1lKGZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1GcmFtZSA9IGZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYXduSXRlbUZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduSXRlbUZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwYXduSXRlbURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICB0aGlzLnNwYXduSXRlbURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYXduSXRlbURlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduSXRlbURlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gJy4vSXRlbUNvbnRhaW5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZlIGV4dGVuZHMgSXRlbUNvbnRhaW5lciB7XHJcblxyXG4gICAgY29tYmluYXRpb24gPSBudWxsO1xyXG4gICAgcHJvbXB0TWVzc2FnZSA9IG51bGw7XHJcbiAgICBvcGVuZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUsIGNvbWJpbmF0aW9uLCBwcm9tcHRNZXNzYWdlLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbikge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbik7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gcHJvbXB0TWVzc2FnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q29tYmluYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tYmluYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29tYmluYXRpb24oY29tYmluYXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0aW9uID0gY29tYmluYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvbXB0TWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9tcHRNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb21wdE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMucHJvbXB0TWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9wZW5lZChvcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW5lZDtcclxuICAgIH1cclxufSIsImltcG9ydCBTaWduIGZyb20gJy4vU2lnbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhbWJsZWRTaWduIGV4dGVuZHMgU2lnbiB7XHJcblxyXG4gICAgc2NyYW1ibGVkID0gdHJ1ZTtcclxuICAgIHNjcmFtYmxlZFRleHQgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgbmFtZSwgdGV4dCwgdmlzaWJsZSwgc2NyYW1ibGVkLCBzY3JhbWJsZWRUZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIG5hbWUsIHRleHQsIHZpc2libGUpO1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkID0gc2NyYW1ibGVkO1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkVGV4dCA9IHNjcmFtYmxlZFRleHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzU2NyYW1ibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcmFtYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY3JhbWJsZWQoc2NyYW1ibGVkKSB7XHJcbiAgICAgICAgdGhpcy5zY3JhbWJsZWQgPSBzY3JhbWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2NyYW1ibGVkVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JhbWJsZWRUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjcmFtYmxlZFRleHQodGV4dCkge1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkVGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbiBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSB7XHJcblx0dGV4dCA9IG51bGw7XHJcblx0bmFtZSA9IG51bGw7XHJcblx0dmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgbmFtZSwgdGV4dCwgdmlzaWJsZSkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHkpO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcblx0fVxyXG5cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHNldE5hbWUobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGdldFRleHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0O1xyXG5cdH1cclxuXHJcblx0c2V0VGV4dCh0ZXh0KSB7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdH1cclxuXHJcblx0aXNWaXNpYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmlzaWJsZTtcclxuXHR9XHJcblxyXG5cdHNldFZpc2libGUodmlzaWJsZSkge1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgUm9vbU9uZVNjZW5lIGZyb20gJy4vc2NlbmVzL3Jvb21zL1Jvb21PbmUnO1xyXG5pbXBvcnQgUm9vbVR3b1NjZW5lIGZyb20gJy4vc2NlbmVzL3Jvb21zL1Jvb21Ud28nO1xyXG5pbXBvcnQgR2FtZU92ZXJTY2VuZSAgZnJvbSAnLi9zY2VuZXMvR2FtZU92ZXInO1xyXG5pbXBvcnQgV2luU2NlbmUgZnJvbSAnLi9zY2VuZXMvV2luJztcclxuaW1wb3J0IFNwbGFzaFNjZW5lIGZyb20gJy4vc2NlbmVzL01lbnUnO1xyXG5pbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gJy4vc2NlbmVzL0xvYWRpbmcnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cdHNjYWxlOiB7XHJcblx0XHRtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCxcclxuXHRcdHdpZHRoOiAxMDI0LFxyXG5cdFx0aGVpZ2h0OiA3NjhcclxuXHR9LFxyXG5cdHBoeXNpY3M6IHtcclxuXHRcdGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG5cdFx0YXJjYWRlOiB7XHJcblx0XHRcdGRlYnVnOiB0cnVlLFxyXG5cdFx0XHRncmF2aXR5OiB7IHk6IDIwMCB9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzY2VuZTogW0xvYWRpbmdTY2VuZSwgU3BsYXNoU2NlbmUsIFJvb21PbmVTY2VuZSwgUm9vbVR3b1NjZW5lLCBHYW1lT3ZlclNjZW5lLCBXaW5TY2VuZV1cclxufTtcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2dhbWVvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDUxMiwgMzg0LCAnR2FtZSBvdmVyJywge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzIycHgnLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignbG9hZGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKSB7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1vbmUnLCAnYXNzZXRzL2pzb24vcm9vbS1vbmUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXR3bycsICdhc3NldHMvanNvbi9yb29tLXR3by1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKExvYWRlcktleS5USUxFU0VULCAnYXNzZXRzL2ltZy9jYXN0bGUtdGlsZXMvVGlsZXNldC5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZShMb2FkZXJLZXkuRlJBTUUsICdhc3NldHMvaW1nL2ZyYW1lLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5JVEVNUywgJ2Fzc2V0cy9pbWcvaXRlbXMucG5nJywgeyBmcmFtZVdpZHRoOiAxNiwgZnJhbWVIZWlnaHQ6IDE2IH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5VSSwgJ2Fzc2V0cy9pbWcvdWkucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDEzIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5DSEVTVCwgJ2Fzc2V0cy9pbWcvY2hlc3QucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5ET09SLCAnYXNzZXRzL2ltZy9kb29yLnBuZycsIHsgZnJhbWVXaWR0aDogMjQsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuU0FGRSwgJ2Fzc2V0cy9pbWcvc2FmZS5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogNDAgfSk7XHJcblx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdtZW51Jyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignbWVudScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDI1MCwgJ0VzY2FwZSBmcm9tIHRoZSBEcmFjdWxhIENhc3RsZScsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICc1MHB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnLFxyXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZidcclxuICAgICAgICB9KTtcclxuICAgICAgICB0ZXh0LnNldFN0cm9rZSgnIzU0Mzg3MycsIDYpO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjbGlja1RvQ29udGludWUgPSB0aGlzLmFkZC50ZXh0KDUxMiwgNDAwLCAnQ2xpY2sgdG8gc3RhcnQgdGhlIGdhbWUnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsaWNrVG9Db250aW51ZS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5tYW5hZ2VyLmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ3Jvb20tb25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbm5pbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0NvbmdyYXR1bGF0aW9ucyBmb3IgZXNjYXBpbmc/IFRoYW5rIHlvdSBmb3IgcGxheWluZyEnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBDaGVzdCBmcm9tICcuLi8uLi9lbnRpdGllcy9DaGVzdCc7XHJcbmltcG9ydCBTYWZlIGZyb20gJy4uLy4uL2VudGl0aWVzL1NhZmUnO1xyXG5pbXBvcnQgRG9vciBmcm9tICcuLi8uLi9lbnRpdGllcy9Eb29yJztcclxuaW1wb3J0IFNpZ24gZnJvbSAnLi4vLi4vZW50aXRpZXMvU2lnbic7XHJcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uL2VudGl0aWVzL0l0ZW0nO1xyXG5pbXBvcnQgU2NyYW1ibGVkU2lnbiBmcm9tICcuLi8uLi9lbnRpdGllcy9TY3JhbWJsZWRTaWduJztcclxuaW1wb3J0IEludGVyYWN0aXZlWm9uZSBmcm9tICcuLi8uLi9lbnRpdGllcy9JbnRlcmFjdGl2ZVpvbmUnO1xyXG5pbXBvcnQgeyBDdXN0b21Qcm9wZXJ0eSwgVGlsZW1hcExheWVyLCBFbnRpdHlUeXBlLCBMb2FkZXJLZXksIFRpbGUsIEFuaW1hdGlvbiwgRnJhbWUsIFRpbGVBY3Rpb24sIERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUm9vbVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRzaWducyA9IFtdO1xyXG5cdHNjcmFtYmxlZFNpZ25zID0gW107XHJcblx0ZG9vciA9IG51bGw7XHJcblx0Y2hlc3RzID0gW107XHJcblx0dGlsZU1hcCA9IG51bGw7XHJcblx0c2FmZXMgPSBbXTtcclxuXHRpdGVtcyA9IFtdO1xyXG5cdHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0c2VsZWN0ZWRSZWN0YW5nbGUgPSBudWxsO1xyXG5cdGRpYWxvZ0dyb3VwID0gbnVsbDtcclxuXHJcblx0Y3JlYXRlKHJvb21LZXkpIHtcclxuXHRcdHRoaXMubG9hZFJvb20ocm9vbUtleSk7XHJcblx0XHR0aGlzLmNyZWF0ZUh1ZCgpO1xyXG5cdFx0dGhpcy5zdGFydFRpbWVyKDEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSHVkKCkge1xyXG5cdFx0Y29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoOTIwLCAyMCwgJ0l0ZW1zJywgeyBmb250U2l6ZTogJzIwcHgnLCBmb250RmFtaWx5OiAnVmVyZGFuYScgfSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVIdWQoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSg5NTAsIGkgKiA1MCArIDgwLCB0aGlzLml0ZW1zW2ldLnRleHR1cmUsIHRoaXMuaXRlbXNbaV0uZnJhbWUpO1xyXG5cdFx0XHRpbWFnZS5zZXRTY2FsZSgyKTtcclxuXHRcdFx0aW1hZ2Uuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdFx0aW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaW1hZ2UueCwgaW1hZ2UueSwgNTAsIDUwKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLnNldFN0cm9rZVN0eWxlKDMsIDB4ZmZmZmZmKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2FkUm9vbShyb29tS2V5KSB7XHJcblx0XHR0aGlzLnRpbGVNYXAgPSB0aGlzLmNyZWF0ZVRpbGVNYXAocm9vbUtleSk7XHJcblx0XHRjb25zdCB0aWxlU2V0ID0gdGhpcy5jcmVhdGVUaWxlU2V0KHRoaXMudGlsZU1hcCwgJ2Nhc3RsZS10aWxlcycsIExvYWRlcktleS5USUxFU0VUKTtcclxuXHRcdGNvbnN0IHsgb2JqZWN0c0xheWVyLCBmb3JlZ3JvdW5kTGF5ZXIgfSA9IHRoaXMuZ2V0VGlsZU1hcExheWVycyh0aGlzLnRpbGVNYXAsIHRpbGVTZXQpO1xyXG5cdFx0dGhpcy5sb2FkVGlsZU1hcE9iamVjdHMob2JqZWN0c0xheWVyKTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGlsZU1hcCh0aWxlTWFwS2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tYWtlLnRpbGVtYXAoeyBrZXk6IHRpbGVNYXBLZXkgfSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVUaWxlU2V0KHRpbGVNYXAsIHRpbGVTZXRLZXksIHRpbGVTZXRUZXh0dXJlS2V5KSB7XHJcblx0XHRyZXR1cm4gdGlsZU1hcC5hZGRUaWxlc2V0SW1hZ2UodGlsZVNldEtleSwgdGlsZVNldFRleHR1cmVLZXkpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGlsZU1hcExheWVycyh0aWxlbWFwLCB0aWxlc2V0KSB7XHJcblx0XHRjb25zdCBiYWNrZ3JvdW5kTGF5ZXIgPSB0aWxlbWFwLmNyZWF0ZUxheWVyKFRpbGVtYXBMYXllci5CQUNLR1JPVU5ELCB0aWxlc2V0KTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVtYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVzZXQpO1xyXG5cdFx0Y29uc3Qgb2JqZWN0c0xheWVyID0gdGlsZW1hcC5nZXRPYmplY3RMYXllcihUaWxlbWFwTGF5ZXIuT0JKRUNUUyk7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kTGF5ZXIsIGZvcmVncm91bmRMYXllciwgb2JqZWN0c0xheWVyIH07XHJcblx0fVxyXG5cclxuXHRsb2FkVGlsZU1hcE9iamVjdHMob2JqZWN0c0xheWVyKSB7XHJcblx0XHRjb25zdCB0aWxlTWFwT2JqZWN0cyA9IG9iamVjdHNMYXllci5vYmplY3RzO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVNYXBPYmplY3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdHN3aXRjaCAodGlsZU1hcE9iamVjdHNbaV0udHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5JTlRFUkFDVElWRV9aT05FOlxyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVJbnRlcmFjdGl2ZVpvbmUodGlsZU1hcE9iamVjdHNbaV0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLkNIRVNUOlxyXG5cdFx0XHRcdFx0dGhpcy5jaGVzdHMucHVzaCh0aGlzLmNyZWF0ZUNoZXN0KHRpbGVNYXBPYmplY3RzW2ldKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuU0FGRTpcclxuXHRcdFx0XHRcdHRoaXMuc2FmZXMucHVzaCh0aGlzLmNyZWF0ZVNhZmUodGlsZU1hcE9iamVjdHNbaV0pKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5ET09SOlxyXG5cdFx0XHRcdFx0dGhpcy5kb29yID0gdGhpcy5jcmVhdGVEb29yKHRpbGVNYXBPYmplY3RzW2ldKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5TQ1JBTUJMRURfU0lHTjpcclxuXHRcdFx0XHRcdHRoaXMuc2NyYW1ibGVkU2lnbnMucHVzaCh0aGlzLmNyZWF0ZVNjcmFtYmxlZFNpZ24odGlsZU1hcE9iamVjdHNbaV0pKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5TSUdOOlxyXG5cdFx0XHRcdFx0dGhpcy5zaWducy5wdXNoKHRoaXMuY3JlYXRlU2lnbih0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZUludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRjb25zdCB6b25lID0gbmV3IEludGVyYWN0aXZlWm9uZSh0aGlzLCB0aWxlTWFwT2JqZWN0LngsIHRpbGVNYXBPYmplY3QueSwgdGlsZU1hcE9iamVjdC53aWR0aCwgdGlsZU1hcE9iamVjdC5oZWlnaHQpO1xyXG5cdFx0em9uZS5zZXRWZWxvY2l0eSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlZFTE9DSVRZKSk7XHJcblx0XHR6b25lLnNldERpcmVjdGlvbih0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkRJUkVDVElPTikpO1xyXG5cdFx0em9uZS5zZXRBY3Rpb24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5BQ1RJT04pKTtcclxuXHRcdHpvbmUuc2V0TmV3VGlsZXMoXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkVXX1RJTEVTKVxyXG5cdFx0XHRcdD8uc3BsaXQoJywnKVxyXG5cdFx0XHRcdC5tYXAoKHMpID0+IHBhcnNlSW50KHMpKVxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IGl0ZW1OYW1lID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX05BTUUpO1xyXG5cdFx0aWYgKGl0ZW1OYW1lKSB7XHJcblx0XHRcdHpvbmUuc2V0U3Bhd25JdGVtKFxyXG5cdFx0XHRcdG5ldyBJdGVtKFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX05BTUUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX0RFU0NSSVBUSU9OKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9URVhUVVJFKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9GUkFNRSlcclxuXHRcdFx0XHQpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTYWZlKHNwYXduT2JqZWN0KSB7XHJcblx0XHRjb25zdCBzYWZlID0gbmV3IFNhZmUoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHNwYXduT2JqZWN0LngsXHJcblx0XHRcdHNwYXduT2JqZWN0LnksXHJcblx0XHRcdExvYWRlcktleS5TQUZFLFxyXG5cdFx0XHQxMixcclxuXHRcdFx0c3Bhd25PYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQ09NQklOQVRJT04pLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5QUk9NUFRfTUVTU0FHRSksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fTkFNRSksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fVEVYVFVSRSksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fRlJBTUUpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX0RFU0NSSVBUSU9OKVxyXG5cdFx0KTtcclxuXHRcdHNhZmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoIXNhZmUuaXNPcGVuZWQoKSkge1xyXG5cdFx0XHRcdGNvbnN0IGFuc3dlciA9IHdpbmRvdy5wcm9tcHQoc2FmZS5nZXRQcm9tcHRNZXNzYWdlKCkpO1xyXG5cdFx0XHRcdGlmIChhbnN3ZXIgJiYgYW5zd2VyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IHNhZmUuZ2V0Q29tYmluYXRpb24oKS50b0xvY2FsZVVwcGVyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRzYWZlLnBsYXkoQW5pbWF0aW9uLlNBRkVfT1BFTik7XHJcblx0XHRcdFx0XHRzYWZlLnNldE9wZW5lZCh0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKFxyXG5cdFx0XHRcdFx0XHRzYWZlLngsXHJcblx0XHRcdFx0XHRcdHNhZmUueSArIHNhZmUuaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRzYWZlLmdldFNwYXduSXRlbU5hbWUoKSxcclxuXHRcdFx0XHRcdFx0c2FmZS5nZXRTcGF3bkl0ZW1UZXh0dXJlKCksXHJcblx0XHRcdFx0XHRcdHNhZmUuZ2V0U3Bhd25JdGVtRnJhbWUoKSxcclxuXHRcdFx0XHRcdFx0c2FmZS5nZXRTcGF3bkl0ZW1EZXNjcmlwdGlvbigpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gc2FmZTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZURvb3Ioc3Bhd25PYmplY3QpIHtcclxuXHRcdGNvbnN0IGRvb3IgPSBuZXcgRG9vcihcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0c3Bhd25PYmplY3QueCxcclxuXHRcdFx0c3Bhd25PYmplY3QueSxcclxuXHRcdFx0TG9hZGVyS2V5LkRPT1IsXHJcblx0XHRcdDEwLFxyXG5cdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRUQpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRURfTUVTU0FHRSlcclxuXHRcdCk7XHJcblx0XHRkb29yLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aWYgKGRvb3IuaXNMb2NrZWQoKSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0RpYWxvZyhkb29yLmdldExvY2tlZE1lc3NhZ2UoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9vci5wbGF5KEFuaW1hdGlvbi5ET09SX09QRU4pO1xyXG5cdFx0XHRcdGRvb3Iuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0RpYWxvZygnTW91YWhhaGFoIHlvdSB0aG91Z2h0IHRoZSBnYW1lIHdhcyBvdmVyPyBUcnkgdG8gZmluZCB0aGUgcmVhbCBlc2NhcGUgcm91dGUgbm93IScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBkb29yO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ2hlc3Qoc3Bhd25PYmplY3QpIHtcclxuXHRcdGNvbnN0IGNoZXN0ID0gbmV3IENoZXN0KFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuQ0hFU1QsXHJcblx0XHRcdG51bGwsXHJcblx0XHRcdHNwYXduT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9OQU1FKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9URVhUVVJFKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9GUkFNRSksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fREVTQ1JJUFRJT04pXHJcblx0XHQpO1xyXG5cdFx0Y2hlc3Qub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoY2hlc3QuaXNMb2NrZWQoKSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0RpYWxvZyhjaGVzdC5sb2NrZWRNZXNzYWdlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoIWNoZXN0LmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHRcdGNoZXN0LnBsYXkoQW5pbWF0aW9uLkNIRVNUX09QRU4pO1xyXG5cdFx0XHRcdFx0Y2hlc3Quc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oXHJcblx0XHRcdFx0XHRcdGNoZXN0LngsXHJcblx0XHRcdFx0XHRcdGNoZXN0LnkgKyBjaGVzdC5oZWlnaHQgKyA1LFxyXG5cdFx0XHRcdFx0XHRjaGVzdC5nZXRTcGF3bkl0ZW1OYW1lKCksXHJcblx0XHRcdFx0XHRcdGNoZXN0LmdldFNwYXduSXRlbVRleHR1cmUoKSxcclxuXHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtRnJhbWUoKSxcclxuXHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtRGVzY3JpcHRpb24oKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGNoZXN0O1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2NyYW1ibGVkU2lnbihzcGF3bk9iamVjdCkge1xyXG5cdFx0Y29uc3Qgc2lnbiA9IG5ldyBTY3JhbWJsZWRTaWduKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5URVhUKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVklTSUJMRSksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNDUkFNQkxFRCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNDUkFNQkxFRF9URVhUKVxyXG5cdFx0KTtcclxuXHRcdHNpZ24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoc2lnbi5pc1Zpc2libGUoKSkge1xyXG5cdFx0XHRcdGlmIChzaWduLmlzU2NyYW1ibGVkKCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd0RpYWxvZyhzaWduLmdldFNjcmFtYmxlZFRleHQoKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd0RpYWxvZyhzaWduLmdldFRleHQoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzaWduO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2lnbihzcGF3bk9iamVjdCkge1xyXG5cdFx0Y29uc3Qgc2lnbiA9IG5ldyBTaWduKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5URVhUKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVklTSUJMRSlcclxuXHRcdCk7XHJcblx0XHRzaWduLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aWYgKHNpZ24uaXNWaXNpYmxlKCkpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dEaWFsb2coc2lnbi5nZXRUZXh0KCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzaWduO1xyXG5cdH1cclxuXHJcblx0c2NyYW1ibGVEaWFsb2dzKHNjcmFtYmxlZCkge1xyXG5cdFx0aWYgKHRoaXMuc2NyYW1ibGVTaWducykge1xyXG5cdFx0XHR0aGlzLnNjcmFtYmxlZFNpZ25zLmZvckVhY2goKGRpYWxvZykgPT4gZGlhbG9nLnNldFNjcmFtYmxlZChzY3JhbWJsZWQpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dEaWFsb2codGV4dCwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0aWYgKHRoaXMuZGlhbG9nR3JvdXApIHtcclxuXHRcdFx0dGhpcy5kaWFsb2dHcm91cC5kZXN0cm95KHRydWUsIGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlhbG9nR3JvdXAgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG5cdFx0Y29uc3QgZGlhbG9nRnJhbWUgPSB0aGlzLmFkZC5uaW5lc2xpY2UoNDUwLCAzNTAsIExvYWRlcktleS5GUkFNRSwgbnVsbCwgMzAwLCA1NTApO1xyXG5cdFx0bGV0IHRleHRZID0gMzUwO1xyXG5cdFx0aWYgKGl0ZW1UZXh0dXJlKSB7XHJcblx0XHRcdHRleHRZID0gMzMwO1xyXG5cdFx0XHRjb25zdCBkaWFsb2dJbWFnZSA9IHRoaXMuYWRkLmltYWdlKDQ1MCwgMzYwLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lKTtcclxuXHRcdFx0ZGlhbG9nSW1hZ2Uuc2V0U2NhbGUoMik7XHJcblx0XHRcdGRpYWxvZ0ltYWdlLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0XHRcdHRoaXMuZGlhbG9nR3JvdXAuYWRkKGRpYWxvZ0ltYWdlKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGRpYWxvZ1RleHQgPSB0aGlzLmFkZC50ZXh0KDQ1MCwgdGV4dFksIHRleHQsIHtcclxuXHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnLFxyXG5cdFx0XHRmb250U2l6ZTogJzEycHgnXHJcblx0XHR9KTtcclxuXHRcdGRpYWxvZ1RleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHRcdGRpYWxvZ1RleHQuc2V0V29yZFdyYXBXaWR0aCgyNTApO1xyXG5cdFx0Y29uc3QgY2xvc2VCdXR0b24gPSB0aGlzLmFkZC5pbWFnZSg1ODUsIDMwMCwgTG9hZGVyS2V5LlVJLCAyKTtcclxuXHRcdGNsb3NlQnV0dG9uLnNldEludGVyYWN0aXZlKCk7XHJcblxyXG5cdFx0dGhpcy5kaWFsb2dHcm91cC5hZGQoY2xvc2VCdXR0b24pO1xyXG5cdFx0dGhpcy5kaWFsb2dHcm91cC5hZGQoZGlhbG9nVGV4dCk7XHJcblx0XHR0aGlzLmRpYWxvZ0dyb3VwLmFkZChkaWFsb2dGcmFtZSk7XHJcblx0XHRjbG9zZUJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZGlhbG9nR3JvdXAuZGVzdHJveSh0cnVlLCBmYWxzZSk7XHJcblx0XHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUFuaW1hdGlvbnMoKSB7XHJcblx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbihBbmltYXRpb24uU0FGRV9PUEVOLCBMb2FkZXJLZXkuU0FGRSwgWzEzXSwgNCk7XHJcblx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbihBbmltYXRpb24uRE9PUl9PUEVOLCBMb2FkZXJLZXkuRE9PUiwgWzUsIDBdLCA0KTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5DSEVTVF9PUEVOLCBMb2FkZXJLZXkuQ0hFU1QsIFsxXSwgOCwgLTEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQW5pbWF0aW9uKGtleSwgdGV4dHVyZSwgZnJhbWVzLCBmcmFtZVJhdGUsIHJlcGVhdCkge1xyXG5cdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRrZXksXHJcblx0XHRcdGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyh0ZXh0dXJlLCB7IGZyYW1lcyB9KSxcclxuXHRcdFx0ZnJhbWVSYXRlLFxyXG5cdFx0XHRyZXBlYXRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIG5hbWUpIHtcclxuXHRcdGxldCBwcm9wZXJ0eSA9IG51bGw7XHJcblx0XHRpZiAoc3Bhd25PYmplY3QpIHtcclxuXHRcdFx0cHJvcGVydHkgPSBzcGF3bk9iamVjdC5wcm9wZXJ0aWVzLmZpbmQoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5uYW1lID09PSBuYW1lKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwcm9wZXJ0eT8udmFsdWU7XHJcblx0fVxyXG5cclxuXHRnZXREaWFsb2coZGlhbG9ncywgbmFtZSkge1xyXG5cdFx0cmV0dXJuIGRpYWxvZ3MuZmluZCgoZGlhbG9nKSA9PiBkaWFsb2cubmFtZSA9PSBuYW1lKTtcclxuXHR9XHJcblxyXG5cdHNwYXduSXRlbSh4LCB5LCBpdGVtTmFtZSwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSwgaXRlbURlc2NyaXB0aW9uKSB7XHJcblx0XHRjb25zdCBpdGVtID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSk7XHJcblx0XHRpdGVtLnNldFNjYWxlKDIpO1xyXG5cdFx0aXRlbS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0aXRlbS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHR0aGlzLnNob3dEaWFsb2coaXRlbURlc2NyaXB0aW9uLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pdGVtcy5wdXNoKHtcclxuXHRcdFx0XHRcdG5hbWU6IGl0ZW1OYW1lLFxyXG5cdFx0XHRcdFx0dGV4dHVyZTogaXRlbVRleHR1cmUsXHJcblx0XHRcdFx0XHRmcmFtZTogaXRlbUZyYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNwYXduSXRlbSh4LCB5LCBpdGVtKSB7XHJcblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuYWRkLmltYWdlKHgsIHksIGl0ZW0uZ2V0VGV4dHVyZSgpLCBpdGVtLmdldEZyYW1lKCkpO1xyXG5cdFx0aW1hZ2Uuc2V0U2NhbGUoMik7XHJcblx0XHRpbWFnZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0aW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpbWFnZS5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMuc2hvd0RpYWxvZyhpdGVtLmdldERlc2NyaXB0aW9uKCksIGl0ZW0uZ2V0VGV4dHVyZSgpLCBpdGVtLmdldEZyYW1lKCksICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLml0ZW1zLnB1c2goe1xyXG5cdFx0XHRcdFx0bmFtZTogaXRlbS5nZXROYW1lKCksXHJcblx0XHRcdFx0XHR0ZXh0dXJlOiBpdGVtLmdldFRleHR1cmUoKSxcclxuXHRcdFx0XHRcdGZyYW1lOiBpdGVtLmdldEZyYW1lKClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aXNJdGVtU2VsZWN0ZWQobmFtZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lID09PSBuYW1lO1xyXG5cdH1cclxuXHJcblx0c3RhcnRUaW1lcihudW1iZXJPZkhvdXJzKSB7XHJcblx0XHRpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcblx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShub3cgKyBudW1iZXJPZkhvdXJzICogNjAgKiA2MCAqIDEwMDApLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdHRoaXMudGltZVJlbWFpbmluZyA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdztcclxuXHRcdFx0XHRpZiAobm93ID49IHRoaXMuY291bnREb3duRGF0ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVUaW1lKCkge1xyXG5cdFx0aWYgKHRoaXMudGltZVRleHQpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBob3Vyc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuXHRcdGNvbnN0IG1pbnV0ZXNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuXHRcdGNvbnN0IHNlY29uZHNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHRcdGlmICh0aGlzLnRpbWVSZW1haW5pbmcpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dCA9IHRoaXMuYWRkLnRleHQoOTE1LCA3MzAsIGAke2hvdXJzUmVtYWluaW5nfToke21pbnV0ZXNSZW1haW5pbmd9OiR7c2Vjb25kc1JlbWFpbmluZ31gLCB7XHJcblx0XHRcdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRQb2ludGVyVGlsZSgpIHtcclxuXHRcdGNvbnN0IHdvcmxkUG9pbnQgPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIucG9zaXRpb25Ub0NhbWVyYSh0aGlzLmNhbWVyYXMubWFpbik7XHJcblxyXG5cdFx0Ly8gUm91bmRzIGRvd24gdG8gbmVhcmVzdCB0aWxlXHJcblx0XHRjb25zdCBwb2ludGVyVGlsZVggPSB0aGlzLnRpbGVNYXAud29ybGRUb1RpbGVYKHdvcmxkUG9pbnQueCk7XHJcblx0XHRjb25zdCBwb2ludGVyVGlsZVkgPSB0aGlzLnRpbGVNYXAud29ybGRUb1RpbGVZKHdvcmxkUG9pbnQueSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudGlsZU1hcC5nZXRUaWxlQXQocG9pbnRlclRpbGVYLCBwb2ludGVyVGlsZVksIGZhbHNlLCBUaWxlbWFwTGF5ZXIuRk9SRUdST1VORCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnVwZGF0ZVRpbWUoKTtcclxuXHRcdGlmICh0aGlzLmlzVGltZUVsYXBzZWQpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnZ2FtZW92ZXInKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgQmFzZVJvb21TY2VuZSBmcm9tICcuL0Jhc2VSb29tJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5LCBUaWxlbWFwTGF5ZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbU9uZSBleHRlbmRzIEJhc2VSb29tU2NlbmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ3Jvb20tb25lJyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHRjb25zb2xlLmxvZygncm9vbSAxJyk7XHJcblx0XHRzdXBlci5jcmVhdGUoJ3Jvb20tb25lJyk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHRzdXBlci51cGRhdGUoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdGlmICh0aGlzLmlucHV0Lm1hbmFnZXIuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgncm9vbS10d28nKTtcclxuXHRcdH1cclxuXHRcdCoqL1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBCYXNlUm9vbVNjZW5lIGZyb20gJy4vQmFzZVJvb20nO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXksIFRpbGVtYXBMYXllciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tVHdvIGV4dGVuZHMgQmFzZVJvb21TY2VuZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigncm9vbS10d28nKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdyb29tIDInKTtcclxuXHRcdHN1cGVyLmNyZWF0ZSgncm9vbS10d28nKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHN1cGVyLnVwZGF0ZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmlucHV0Lm1hbmFnZXIuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcclxuXHRcdFx0Y29uc3QgdGlsZSA9IHN1cGVyLmdldFBvaW50ZXJUaWxlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV9kcmFjdWxhX2Nhc3RsZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV9kcmFjdWxhX2Nhc3RsZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=