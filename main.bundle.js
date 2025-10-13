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
/* harmony export */   ModalSize: () => (/* binding */ ModalSize),
/* harmony export */   SpawnType: () => (/* binding */ SpawnType),
/* harmony export */   Tile: () => (/* binding */ Tile),
/* harmony export */   TilemapLayer: () => (/* binding */ TilemapLayer)
/* harmony export */ });
const CustomProperty = {
	COMBINATION: 'combination',
	PROMPT_MESSAGE: 'promptMessage',
	SPAWN: 'spawn',
	SPAWN_ITEM: 'spawnItem',
	LOCKED: 'locked',
	LOCKED_MESSAGE: 'lockedMessage',
	ACTION: 'action',
	CONSTRAINTS: 'constraints',
	NAVIGATE_TO: 'navigateTo',
	CONSTRAINT_MESSAGE: 'constraintMessage',
	EVENTS: 'events',
	SCREEN_TEXT: 'screenText',
	MODAL_SIZE: 'modalSize'
};

const ActionType = {
	MOVE_TILE: 'MOVE_TILE',
	TOGGLE_TILE_MOVEMENT: 'TOGGLE_TILE_MOVEMENT',
	DESTROY_TILE: 'DESTROY_TILE',
	REPLACE_TILE: 'REPLACE_TILE',
	TOGGLE_TILE: 'TOGGLE_TILE',
	SHOW_TEXT: 'SHOW_TEXT',
	SHOW_IMAGE: 'SHOW_IMAGE'
};

const SpawnType = {
	ITEM: 'ITEM',
	NPC: 'NPC'
}

const Direction = {
	LEFT: 'LEFT',
	RIGHT: 'RIGHT',
	UP: 'UP',
	DOWN: 'DOWN'
};

const ModalSize = {
	REGULAR: 'REGULAR',
	LARGE: 'LARGE'
}

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
	name = null;

	constructor(scene, x, y, texture, frame, name, locked, lockedMessage) {
		super(scene, x, y, texture, frame);
		scene.add.existing(this);
		this.setInteractive();
		this.name = name;
		this.locked = locked;
		this.lockedMessage = lockedMessage;
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
	constraints = null;
	spawn = null;
	navigateTo = null;
	constraintMessage = null;
	dirty = false;
	name = null;

	constructor(scene, name, x, y, width, height) {
		super(scene, x, y, width, height);
		this.name = name;
		this.setOrigin(0, 0);
		this.setInteractive();
		scene.add.existing(this);
	}

	executeAction(item, dirtyObjectMap, onCompleteCallback) {
		let itemUsed = false;
		let tiles = null;
		if (!this.canExecute(item, dirtyObjectMap)) {
			if (this.constraintMessage) {
				(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.showTextModal)(this.scene, this.constraintMessage);
			}
		} else {
			if (this.constraints) {
				const { itemRequired } = this.constraints;
				if (itemRequired && item?.name === itemRequired) {
					itemUsed = true;
				}
			}
			let { type, velocity, newTiles, direction, text, textureKey, repeat } = this.action;

			newTiles = newTiles?.split(',').map((s) => {
				return parseInt(s, 10);
			});

			switch (type) {
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					for (let i = 0, len = tiles.length; i < len; i++) {
						if (newTiles[i]) {
							this.scene.tileMap.putTileAt(newTiles[i], tiles[i].x, tiles[i].y);
						}
					}
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					if (!this.dirty) {
						this.previousTiles = tiles.map((t) => t.index);
						for (let i = 0, len = tiles.length; i < len; i++) {
							if (newTiles[i]) {
								this.scene.tileMap.putTileAt(newTiles[i], tiles[i].x, tiles[i].y);
							}
						}
						this.dirty = true;
					} else {
						for (let i = 0, len = tiles.length; i < len; i++) {
							if (this.previousTiles[i]) {
								this.scene.tileMap.putTileAt(this.previousTiles[i], tiles[i].x, tiles[i].y);
							}
						}
						this.previousTiles = null;
						this.dirty = false;
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.DESTROY_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.MOVE_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					switch (direction) {
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
							}
							this.x = this.x - this.width - velocity;
							this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT;
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
							}
							this.x = this.x + this.width + velocity;
							this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT;
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - velocity);
							}
							this.y = this.y - this.height - velocity;
							this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN;
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
							}
							this.y = this.y + this.height + velocity;
							this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP;
							break;
					}
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE_MOVEMENT:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					if (!this.dirty) {
						for (let i = 0, len = tiles.length; i < len; i++) {
							this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
						}
						switch (direction) {
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x - velocity,
										tiles[i].y
									);
								}
								this.x = this.x - this.width - velocity;
								this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x + velocity,
										tiles[i].y
									);
								}
								this.x = this.x + this.width + velocity;
								this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x,
										tiles[i].y - velocity
									);
								}
								this.y = this.y - this.height - velocity;
								this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x,
										tiles[i].y + velocity
									);
								}
								this.y = this.y + this.height + velocity;
								this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP;
								break;
						}

						this.dirty = true;
					} else {
						const movedTiles = this.scene.tileMap.getTilesWithinWorldXY(
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

						for (let i = 0, len = movedTiles.length; i < len; i++) {
							this.scene.tileMap.removeTileAt(movedTiles[i].x, movedTiles[i].y);
						}
						switch (this.reverseDirection) {
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x - velocity,
										movedTiles[i].y
									);
								}
								this.x = this.x - this.width - velocity;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x + velocity,
										movedTiles[i].y
									);
								}
								this.x = this.x + this.width + velocity;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x,
										movedTiles[i].y - velocity
									);
								}
								this.y = this.y - this.height - velocity;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x,
										movedTiles[i].y + velocity
									);
								}
								this.y = this.y + this.height + velocity;
								break;
						}
						this.dirty = false;
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_TEXT:
					(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.showTextModal)(this.scene, text);
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_IMAGE:
					(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.showImageModal)(this.scene, textureKey);
					this.dirty = true;
					break;
			}
			if (this.spawn) {
				switch (this.spawn.type) {
					case _constants__WEBPACK_IMPORTED_MODULE_1__.SpawnType.NPC:
						if (type === (_constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE || _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE)) {
							this.scene.spawnNPC(this.x + this.width / 2, this.y + 60, this.spawn);
						} else {
							this.scene.spawnNPC(this.x + this.width / 2, this.y + this.height / 2, this.spawn);
						}
						break;
					case _constants__WEBPACK_IMPORTED_MODULE_1__.SpawnType.ITEM:
						if (type === (_constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE || _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE)) {
							this.scene.spawnItem(this.x + this.width / 2, this.y + 60, this.spawn);
						} else {
							this.scene.spawnItem(this.x + this.width / 2, this.y + this.height / 2, this.spawn);
						}
						break;
				}
			}
			if (this.navigateTo) {
				this.scene.reloadRoom(this.navigateTo);
			}
			if (onCompleteCallback) {
				onCompleteCallback(itemUsed);
			}
			if (!repeat) {
				this.destroy();
			}
		}
	}

	canExecute(item, dirtyObjectMap) {
		if (this.constraints) {
			const { itemRequired, promptRequired, dependsOn } = this.constraints;
			if (itemRequired && item?.name !== itemRequired) {
				return false;
			} else if (promptRequired) {
				const answer = window.prompt(promptRequired.question);
				if (answer && answer.toLocaleLowerCase() === promptRequired.answer.toLocaleLowerCase()) {
					return true;
				}
				return false;
			} else if (dependsOn) {
				let valid = true;
				dependsOn?.split(',').forEach((name) => {
					if (!dirtyObjectMap.has(name)) {
						valid = false;
					}
				});
				if (!valid) {
					return false;
				}
			}
		}
		return true;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	isDirty() {
		return this.dirty;
	}

	setDirty(dirty) {
		this.dirty = dirty;
	}

	setAction(action) {
		this.action = action;
	}

	getAction() {
		return this.action;
	}

	setConstraints(constraints) {
		this.constraints = constraints;
	}

	getConstraints() {
		return this.constraints;
	}

	setSpawn(spawn) {
		this.spawn = spawn;
	}

	getSpawn() {
		return this.spawn;
	}

	setNavigateTo(navigateTo) {
		this.navigateTo = navigateTo;
	}

	getNavigateTo() {
		return this.navigateTo;
	}

	setConstraintMessage(constraintMessage) {
		this.constraintMessage = constraintMessage;
	}

	getConstraintMessage() {
		return this.constraintMessage;
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
	name = null;

	constructor(scene, x, y, texture, frame, name, combination, promptMessage) {
		super(scene, x, y, texture, frame);
		scene.add.existing(this);
		this.setInteractive();
		this.name = name;
		this.combination = combination;
		this.promptMessage = promptMessage;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
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

/***/ "./src/errors/InvalidaArgumentError.js":
/*!*********************************************!*\
  !*** ./src/errors/InvalidaArgumentError.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvalidArgumentError)
/* harmony export */ });
class InvalidArgumentError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidArgumentError'
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
/* harmony import */ var _utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/AssertUtils */ "./src/utils/AssertUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/constants.js");










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
	dirtyObjectMap = null;

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
				if (this.pointerItem) {
					this.pointerItem.destroy();
					this.pointerItem = null;
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
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!roomName, 'The roomName is undefined');
		this.roomName = roomName;
		this.dirtyObjectMap = new Map();
		this.cameras.main.fadeIn(TRANSITION_DELAY, 0, 0, 0);
		this.tileMap = this.createTileMap(roomName);

		const castleTiles = this.createTileSet(this.tileMap, 'castle-tiles', 'castle-tiles');
		const creepyTiles = this.createTileSet(this.tileMap, 'creepy-tiles', 'creepy-tiles');
		const { objectsLayer, foregroundLayer } = this.getTileMapLayers(this.tileMap, [creepyTiles, castleTiles]);

		this.loadTileMapObjects(objectsLayer);

		const screenText = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.SCREEN_TEXT);
		const modalSize = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.MODAL_SIZE);
		(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, screenText, modalSize);
	}

	reloadRoom(roomKey) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!roomKey, 'The roomKey is undefined');
		this.cameras.main.fadeOut(TRANSITION_DELAY, 0, 0, 0, (camera, progress) => {
			if (progress === 1) {
				this.loadRoom(roomKey);
			}
		});
	}

	createTileMap(tileMapKey) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapKey, 'The tileMapKey is undefined');
		return this.make.tilemap({ key: tileMapKey });
	}

	createTileSet(tileMap, tileSetKey, tileSetTextureKey) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMap, 'The tileMap is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileSetKey, 'The tileSetKey is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileSetTextureKey, 'The tileSetTextureKey is undefined');
		return tileMap.addTilesetImage(tileSetKey, tileSetTextureKey);
	}

	getTileMapLayers(tileMap, tileSets) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMap, 'The tileMap is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileSets, 'The tileSets is undefined');
		const backgroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_7__.TilemapLayer.BACKGROUND, tileSets);
		const foregroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_7__.TilemapLayer.FOREGROUND, tileSets);
		const objectsLayer = tileMap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_7__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	loadTileMapObjects(objectsLayer) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!objectsLayer, 'The objectsLayer is undefined');
		const tileMapObjects = objectsLayer.objects;
		for (let i = 0, len = tileMapObjects.length; i < len; i++) {
			switch (tileMapObjects[i].type) {
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.INTERACTIVE_ZONE:
					this.createInteractiveZone(tileMapObjects[i]);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.CHEST:
					this.chests.push(this.createChest(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.SAFE:
					this.safes.push(this.createSafe(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.DOOR:
					this.door = this.createDoor(tileMapObjects[i]);
					break;
			}
		}
	}

	createInteractiveZone(tileMapObject) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		const zone = new _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_4__["default"](
			this,
			tileMapObject.name,
			tileMapObject.x,
			tileMapObject.y,
			tileMapObject.width,
			tileMapObject.height
		);
		zone.setAction(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.ACTION));
		zone.setConstraints(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.CONSTRAINTS));
		zone.setConstraintMessage(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.CONSTRAINT_MESSAGE));
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.NAVIGATE_TO));
		zone.setSpawn(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.SPAWN));

		const events = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.EVENTS);

		if (events) {
			const { listenTo, emit } = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.EVENTS);

			if (listenTo) {
				this.events.on(listenTo, () => {
					zone.executeAction(this.selectedItem, this.dirtyObjectMap);
				});
			} else {
				zone.on('pointerdown', () => {
					zone.executeAction(this.selectedItem, this.dirtyObjectMap, (itemUsed) => {
						if (itemUsed) {
							if (this.selectedItem.singleUse) {
								const index = this.items.findIndex((item) => item?.name === this.selectedItem?.name);
								this.items.splice(index, 1);
								this.selectedItem = null;
								this.updateHud();
							}
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
						if (this.selectedItem.singleUse) {
							const index = this.items.findIndex((item) => item?.name === this.selectedItem?.name);
							this.items.splice(index, 1);
							this.selectedItem = null;
							this.updateHud();
						}
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
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		const safe = new _entities_Safe__WEBPACK_IMPORTED_MODULE_2__["default"](
			this,
			tileMapObject.x,
			tileMapObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.SAFE,
			12,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.COMBINATION),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.PROMPT_MESSAGE)
		);
		safe.setSpawnItem(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.SPAWN_ITEM));
		safe.on('pointerdown', () => {
			if (!safe.isOpened()) {
				const answer = window.prompt(safe.getPromptMessage());
				if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
					safe.play(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.SAFE_OPEN);
					safe.setOpened(true);
					this.spawnItem(safe.x, safe.y + safe.height, safe.getSpawnItem());
					this.dirtyObjectMap.set(safe.name, safe);
				}
			}
		});
		return safe;
	}

	createDoor(tileMapObject) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		const door = new _entities_Door__WEBPACK_IMPORTED_MODULE_3__["default"](
			this,
			tileMapObject.x,
			tileMapObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.DOOR,
			10,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, door.getLockedMessage());
			} else {
				door.play(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.DOOR_OPEN);
				door.setOpened(true);
				this.dirtyObjectMap.set(door.name, door);
			}
		});
		return door;
	}

	createChest(tileMapObject) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		const chest = new _entities_Chest__WEBPACK_IMPORTED_MODULE_1__["default"](
			this,
			tileMapObject.x,
			tileMapObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.CHEST,
			null,
			tileMapObject.name,
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.LOCKED),
			this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.LOCKED_MESSAGE)
		);
		chest.setSpawnItem(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.SPAWN_ITEM));
		chest.on('pointerdown', () => {
			if (chest.isLocked()) {
				(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, chest.lockedMessage);
			} else {
				if (!chest.isOpened()) {
					chest.play(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.CHEST_OPEN);
					chest.setOpened(true);
					this.spawnItem(chest.x, chest.y + chest.height + 5, chest.getSpawnItem());
					this.dirtyObjectMap.set(chest.name, chest);
				}
			}
		});
		return chest;
	}

	createAnimations() {
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.SAFE_OPEN, _constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.SAFE, [13], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.DOOR_OPEN, _constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.DOOR, [5, 0], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.CHEST_OPEN, _constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.CHEST, [1], 8, -1);
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
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!spawnObject, 'The spawnObject is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!name, 'The name is undefined');
		let property = null;
		if (spawnObject) {
			property = spawnObject.properties.find((property) => property.name === name);
		}
		return property?.value;
	}

	spawnItem(x, y, item) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!x, 'The x is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!y, 'The y is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!item, 'The item is undefined');
		const itemImage = this.add.image(x, y, item.textureKey, item.textureFrame);
		itemImage.setScale(2);
		itemImage.setAlpha(0);
		itemImage.setInteractive();
		itemImage.on('pointerdown', () => {
			itemImage.destroy();
			(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__.showItemModal)(this, item.description, item.textureKey, item.textureFrame, () => {
				this.items.push(item);
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

	spawnNPC(x, y, npc) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!x, 'The x is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!y, 'The y is undefined');
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!npc, 'The npc is undefined');
		const npcSprite = this.add.sprite(x, y, npc.textureKey, npc.textureFrame);
		npcSprite.setScale(2);
		npcSprite.setAlpha(0);
		npcSprite.setInteractive();
		npcSprite.on('pointerdown', () => {
			(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, npc.description);
		});
		this.tweens.add({
			targets: npcSprite,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});
	}

	isItemSelected(name) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!name, 'The name is undefined');
		return this.selectedItem?.name === name;
	}

	startTimer(numberOfHours) {
		(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_6__.assert)(!numberOfHours, 'The numberOfHours is undefined');
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
		if (this.selectedItem && !this.pointerItem) {
			const { x, y } = this.input.activePointer;
			const { textureKey, textureFrame } = this.selectedItem;
			this.pointerItem = this.add.image(x, y, textureKey, textureFrame);
			this.pointerItem.setScale(2);
		} else if (this.selectedItem && this.pointerItem) {
			const { x, y } = this.input.activePointer;
			this.pointerItem.x = x;
			this.pointerItem.y = y;
		} else if (!this.selectedItem && this.pointerItem) {
			this.pointerItem.destroy();
			this.pointerItem = null;
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
		this.load.tilemapTiledJSON('room-three', 'assets/json/room-three-map.json');
		this.load.tilemapTiledJSON('room-four', 'assets/json/room-four-map.json');
		
		this.load.image('castle-tiles', 'assets/img/castle-tiles/Tileset.png');
		this.load.image('creepy-tiles', 'assets/img/tiles.png');
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.MENU_IMAGE, 'assets/img/castle.png');
		this.load.spritesheet('dungeon-crawl', 'assets/img/dungeon-crawl.png', { frameWidth: 32, frameHeight: 32 });
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

/***/ "./src/utils/AssertUtils.js":
/*!**********************************!*\
  !*** ./src/utils/AssertUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/* harmony import */ var _errors_InvalidaArgumentError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/InvalidaArgumentError */ "./src/errors/InvalidaArgumentError.js");


function assert(condition, message) {
	if (condition) {
		throw new _errors_InvalidaArgumentError__WEBPACK_IMPORTED_MODULE_0__["default"](message);
	}
};

/***/ }),

/***/ "./src/utils/ModalUtils.js":
/*!*********************************!*\
  !*** ./src/utils/ModalUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showImageModal: () => (/* binding */ showImageModal),
/* harmony export */   showItemModal: () => (/* binding */ showItemModal),
/* harmony export */   showTextModal: () => (/* binding */ showTextModal)
/* harmony export */ });
/* harmony import */ var _utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/AssertUtils */ "./src/utils/AssertUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


   
function showTextModal(scene, text, size = _constants__WEBPACK_IMPORTED_MODULE_1__.ModalSize.REGULAR, closeCallback) {
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!text, 'The text is undefined');
	const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
	const modal = scene.add.container(450, 350).setAlpha(0);
	let box = null;
	let closeText = null;

	switch (size) {
		case _constants__WEBPACK_IMPORTED_MODULE_1__.ModalSize.REGULAR:
			box = scene.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
			closeText = scene.add
				.text(155, -69, 'Close X', {
					fontSize: '16px',
					fontFamily: 'verdana',
					fill: '#FFFFFF'
				})
				.setInteractive();
			break;
		case _constants__WEBPACK_IMPORTED_MODULE_1__.ModalSize.LARGE:
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

function showImageModal(scene, imageKey, closeCallback) {
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!imageKey, 'The imageKey is undefined');
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

function showItemModal(scene, itemDescription, itemTexture, itemFrame, closeCallback) {
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!itemDescription, 'The itemDescription is undefined');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJL0c7QUFDNUI7QUFDZSxvQkFBb0IsdURBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvQ2hlc3QuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvRG9vci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9JbnRlcmFjdGl2ZVpvbmUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvU2FmZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9lcnJvcnMvSW52YWxpZGFBcmd1bWVudEVycm9yLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL3NjZW5lcy9HYW1lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL3NjZW5lcy9HYW1lT3Zlci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvV2luLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL3V0aWxzL0Fzc2VydFV0aWxzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL3V0aWxzL01vZGFsVXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHtcclxuXHRDT01CSU5BVElPTjogJ2NvbWJpbmF0aW9uJyxcclxuXHRQUk9NUFRfTUVTU0FHRTogJ3Byb21wdE1lc3NhZ2UnLFxyXG5cdFNQQVdOOiAnc3Bhd24nLFxyXG5cdFNQQVdOX0lURU06ICdzcGF3bkl0ZW0nLFxyXG5cdExPQ0tFRDogJ2xvY2tlZCcsXHJcblx0TE9DS0VEX01FU1NBR0U6ICdsb2NrZWRNZXNzYWdlJyxcclxuXHRBQ1RJT046ICdhY3Rpb24nLFxyXG5cdENPTlNUUkFJTlRTOiAnY29uc3RyYWludHMnLFxyXG5cdE5BVklHQVRFX1RPOiAnbmF2aWdhdGVUbycsXHJcblx0Q09OU1RSQUlOVF9NRVNTQUdFOiAnY29uc3RyYWludE1lc3NhZ2UnLFxyXG5cdEVWRU5UUzogJ2V2ZW50cycsXHJcblx0U0NSRUVOX1RFWFQ6ICdzY3JlZW5UZXh0JyxcclxuXHRNT0RBTF9TSVpFOiAnbW9kYWxTaXplJ1xyXG59O1xyXG5cclxuY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuXHRNT1ZFX1RJTEU6ICdNT1ZFX1RJTEUnLFxyXG5cdFRPR0dMRV9USUxFX01PVkVNRU5UOiAnVE9HR0xFX1RJTEVfTU9WRU1FTlQnLFxyXG5cdERFU1RST1lfVElMRTogJ0RFU1RST1lfVElMRScsXHJcblx0UkVQTEFDRV9USUxFOiAnUkVQTEFDRV9USUxFJyxcclxuXHRUT0dHTEVfVElMRTogJ1RPR0dMRV9USUxFJyxcclxuXHRTSE9XX1RFWFQ6ICdTSE9XX1RFWFQnLFxyXG5cdFNIT1dfSU1BR0U6ICdTSE9XX0lNQUdFJ1xyXG59O1xyXG5cclxuY29uc3QgU3Bhd25UeXBlID0ge1xyXG5cdElURU06ICdJVEVNJyxcclxuXHROUEM6ICdOUEMnXHJcbn1cclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuXHRMRUZUOiAnTEVGVCcsXHJcblx0UklHSFQ6ICdSSUdIVCcsXHJcblx0VVA6ICdVUCcsXHJcblx0RE9XTjogJ0RPV04nXHJcbn07XHJcblxyXG5jb25zdCBNb2RhbFNpemUgPSB7XHJcblx0UkVHVUxBUjogJ1JFR1VMQVInLFxyXG5cdExBUkdFOiAnTEFSR0UnXHJcbn1cclxuXHJcbmNvbnN0IFRpbGVtYXBMYXllciA9IHtcclxuXHRCQUNLR1JPVU5EOiAnYmFja2dyb3VuZCcsXHJcblx0Rk9SRUdST1VORDogJ2ZvcmVncm91bmQnLFxyXG5cdE9CSkVDVFM6ICdvYmplY3RzJ1xyXG59O1xyXG5cclxuY29uc3QgRW50aXR5VHlwZSA9IHtcclxuXHRET09SOiAnRG9vcicsXHJcblx0U0FGRTogJ1NhZmUnLFxyXG5cdENIRVNUOiAnQ2hlc3QnLFxyXG5cdFRFWFRfTU9EQUw6ICdUZXh0TW9kYWwnLFxyXG5cdElOVEVSQUNUSVZFX1pPTkU6ICdJbnRlcmFjdGl2ZVpvbmUnLFxyXG5cdElNQUdFX01PREFMOiAnSW1hZ2VNb2RhbCdcclxufTtcclxuXHJcbmNvbnN0IExvYWRlcktleSA9IHtcclxuXHRUSUxFTUFQOiAndGlsZW1hcCcsXHJcblx0VElMRVNFVDogJ3RpbGVzJyxcclxuXHRJVEVNUzogJ2l0ZW1zJyxcclxuXHRVSTogJ3VpJyxcclxuXHRDSEVTVDogJ2NoZXN0JyxcclxuXHRET09SOiAnZG9vcicsXHJcblx0U0FGRTogJ3NhZmUnLFxyXG5cdE1FTlVfSU1BR0U6ICdtZW51LWltYWdlJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZSA9IHtcclxuXHRTSUdOOiAxNDQsXHJcblx0Q0xPU0VfV0lORE9XOiAyNTgsXHJcblx0T1BFTl9XSU5ET1c6IDIzNSxcclxuXHRDT0ZGSU46IFs3MSwgOTVdLFxyXG5cdERFU1RST1lFRF9LTklHSFQ6IDk2LFxyXG5cdFRPUF9DSEFJUjogMzEyLFxyXG5cdE1JRERMRV9DSEFJUjogMzM2LFxyXG5cdEJPVFRPTV9DSEFJUjogMzYwLFxyXG5cdEhPTEVfSU5fV0FMTDogMjQ5LFxyXG5cdFRPUF9MRUZUX0dBUkdPWUxFOiAyMzIsXHJcblx0VE9QX1JJR0hUX0dBUkdPWUxFOiAyMzMsXHJcblx0Qk9UVE9NX0xFRlRfR0FSR09ZTEU6IDI1NixcclxuXHRCT1RUT01fUklHSFRfR0FSR09ZTEU6IDI1NyxcclxuXHRUT1BfTEVGVF9XQVRFUjogMTAsXHJcblx0VE9QX0NFTlRFUl9XQVRFUjogMTEsXHJcblx0VE9QX1JJR0hUX1dBVEVSOiAxMixcclxuXHRNSURETEVfTEVGVF9XQVRFUjogMzQsXHJcblx0TUlERExFX0NFTlRFUl9XQVRFUjogMzUsXHJcblx0TUlERExFX1JJR0hUX1dBVEVSOiAzNixcclxuXHRCT1RUT01fTEVGVF9XQVRFUjogNTgsXHJcblx0Qk9UVE9NX0NFTlRFUl9XQVRFUjogNTksXHJcblx0Qk9UVE9NX1JJR0hUX1dBVEVSOiA2MCxcclxuXHRESUdHRURfSE9MRTogMzE2LFxyXG5cdFNUQUlSOiAxMjRcclxufTtcclxuXHJcbmNvbnN0IEl0ZW0gPSB7XHJcblx0Qk9PSzogJ2Jvb2snLFxyXG5cdEhBTU1FUjogJ2hhbW1lcicsXHJcblx0UElDS0FYRTogJ3BpY2theGUnLFxyXG5cdEtFWTogJ2tleScsXHJcblx0TUFTVEVSX0tFWTogJ21hc3Rlci1rZXknLFxyXG5cdElDRV9ST0Q6ICdpY2Utcm9kJyxcclxuXHRQT1RJT046ICdwb3Rpb24nLFxyXG5cdFNIT1ZFTDogJ3Nob3ZlbCcsXHJcblx0UklORzogJ3JpbmcnXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSB7XHJcblx0RE9PUl9PUEVOOiAnZG9vci1vcGVuJyxcclxuXHRTQUZFX09QRU46ICdzYWZlLW9wZW4nLFxyXG5cdENIRVNUX09QRU46ICdjaGVzdC1vcGVuJ1xyXG59O1xyXG5cclxuY29uc3QgRnJhbWUgPSB7XHJcblx0TUFTVEVSX0tFWTogNTEsXHJcblx0UElDS0FYRTogODMsXHJcblx0UE9USU9OOiA2MSxcclxuXHRLRVk6IDUwLFxyXG5cdFJJTkc6IDEzXHJcbn07XHJcblxyXG5PYmplY3QuZnJlZXplKFRpbGVtYXBMYXllcik7XHJcbk9iamVjdC5mcmVlemUoQ3VzdG9tUHJvcGVydHkpO1xyXG5PYmplY3QuZnJlZXplKExvYWRlcktleSk7XHJcbk9iamVjdC5mcmVlemUoRW50aXR5VHlwZSk7XHJcbk9iamVjdC5mcmVlemUoVGlsZSk7XHJcbk9iamVjdC5mcmVlemUoSXRlbSk7XHJcbk9iamVjdC5mcmVlemUoQW5pbWF0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShGcmFtZSk7XHJcbk9iamVjdC5mcmVlemUoRGlyZWN0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShBY3Rpb25UeXBlKTtcclxuXHJcbmV4cG9ydCB7IFRpbGVtYXBMYXllciwgQ3VzdG9tUHJvcGVydHksIExvYWRlcktleSwgRW50aXR5VHlwZSwgVGlsZSwgSXRlbSwgQW5pbWF0aW9uLCBGcmFtZSwgQWN0aW9uVHlwZSwgRGlyZWN0aW9uLCBTcGF3blR5cGUgLCBNb2RhbFNpemUgfTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlc3QgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHJcblx0bG9ja2VkID0gdHJ1ZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHRzcGF3bkl0ZW0gPSBudWxsO1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUsIGxvY2tlZCwgbG9ja2VkTWVzc2FnZSkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lKTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuXHRcdHRoaXMubG9ja2VkTWVzc2FnZSA9IGxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHNldE5hbWUobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHR1bmxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aXNMb2NrZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubG9ja2VkTWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9ja2VkTWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHRcclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd25JdGVtKHNwYXduSXRlbSkge1xyXG5cdFx0dGhpcy5zcGF3bUl0ZW0gPSBzcGF3bkl0ZW07XHJcblx0fVxyXG5cclxuXHRnZXRTcGF3bkl0ZW0oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bUl0ZW07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRuYW1lID0gbnVsbDtcclxuXHRsb2NrZWQgPSBmYWxzZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBsb2NrZWQsIGxvY2tlZE1lc3NhZ2UpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgyKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuXHR9XHJcblxyXG5cdHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldExvY2tlZE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBUaWxlbWFwTGF5ZXIsIEFjdGlvblR5cGUsIERpcmVjdGlvbiwgU3Bhd25UeW9lLCBTcGF3blR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBzaG93SW1hZ2VNb2RhbCwgc2hvd1RleHRNb2RhbCB9IGZyb20gJy4uL3V0aWxzL01vZGFsVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RpdmVab25lIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XHJcblx0YWN0aW9uID0gbnVsbDtcclxuXHRjb25zdHJhaW50cyA9IG51bGw7XHJcblx0c3Bhd24gPSBudWxsO1xyXG5cdG5hdmlnYXRlVG8gPSBudWxsO1xyXG5cdGNvbnN0cmFpbnRNZXNzYWdlID0gbnVsbDtcclxuXHRkaXJ0eSA9IGZhbHNlO1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgbmFtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuc2V0T3JpZ2luKDAsIDApO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0ZXhlY3V0ZUFjdGlvbihpdGVtLCBkaXJ0eU9iamVjdE1hcCwgb25Db21wbGV0ZUNhbGxiYWNrKSB7XHJcblx0XHRsZXQgaXRlbVVzZWQgPSBmYWxzZTtcclxuXHRcdGxldCB0aWxlcyA9IG51bGw7XHJcblx0XHRpZiAoIXRoaXMuY2FuRXhlY3V0ZShpdGVtLCBkaXJ0eU9iamVjdE1hcCkpIHtcclxuXHRcdFx0aWYgKHRoaXMuY29uc3RyYWludE1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMuc2NlbmUsIHRoaXMuY29uc3RyYWludE1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jb25zdHJhaW50cykge1xyXG5cdFx0XHRcdGNvbnN0IHsgaXRlbVJlcXVpcmVkIH0gPSB0aGlzLmNvbnN0cmFpbnRzO1xyXG5cdFx0XHRcdGlmIChpdGVtUmVxdWlyZWQgJiYgaXRlbT8ubmFtZSA9PT0gaXRlbVJlcXVpcmVkKSB7XHJcblx0XHRcdFx0XHRpdGVtVXNlZCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB7IHR5cGUsIHZlbG9jaXR5LCBuZXdUaWxlcywgZGlyZWN0aW9uLCB0ZXh0LCB0ZXh0dXJlS2V5LCByZXBlYXQgfSA9IHRoaXMuYWN0aW9uO1xyXG5cclxuXHRcdFx0bmV3VGlsZXMgPSBuZXdUaWxlcz8uc3BsaXQoJywnKS5tYXAoKHMpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQocywgMTApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5SRVBMQUNFX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IHRoaXMuc2NlbmUudGlsZU1hcC5nZXRUaWxlc1dpdGhpbldvcmxkWFkoXHJcblx0XHRcdFx0XHRcdHRoaXMueCxcclxuXHRcdFx0XHRcdFx0dGhpcy55LFxyXG5cdFx0XHRcdFx0XHR0aGlzLndpZHRoLFxyXG5cdFx0XHRcdFx0XHR0aGlzLmhlaWdodCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlzTm90RW1wdHk6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0VGlsZW1hcExheWVyLkZPUkVHUk9VTkRcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKG5ld1RpbGVzW2ldKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChuZXdUaWxlc1tpXSwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRPR0dMRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSB0aGlzLnNjZW5lLnRpbGVNYXAuZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKFxyXG5cdFx0XHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0XHRcdHRoaXMueSxcclxuXHRcdFx0XHRcdFx0dGhpcy53aWR0aCxcclxuXHRcdFx0XHRcdFx0dGhpcy5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpc05vdEVtcHR5OiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFRpbGVtYXBMYXllci5GT1JFR1JPVU5EXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmRpcnR5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJldmlvdXNUaWxlcyA9IHRpbGVzLm1hcCgodCkgPT4gdC5pbmRleCk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChuZXdUaWxlc1tpXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChuZXdUaWxlc1tpXSwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucHJldmlvdXNUaWxlc1tpXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aGlzLnByZXZpb3VzVGlsZXNbaV0sIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLnByZXZpb3VzVGlsZXMgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuREVTVFJPWV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSB0aGlzLnNjZW5lLnRpbGVNYXAuZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKFxyXG5cdFx0XHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0XHRcdHRoaXMueSxcclxuXHRcdFx0XHRcdFx0dGhpcy53aWR0aCxcclxuXHRcdFx0XHRcdFx0dGhpcy5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpc05vdEVtcHR5OiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFRpbGVtYXBMYXllci5GT1JFR1JPVU5EXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5NT1ZFX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IHRoaXMuc2NlbmUudGlsZU1hcC5nZXRUaWxlc1dpdGhpbldvcmxkWFkoXHJcblx0XHRcdFx0XHRcdHRoaXMueCxcclxuXHRcdFx0XHRcdFx0dGhpcy55LFxyXG5cdFx0XHRcdFx0XHR0aGlzLndpZHRoLFxyXG5cdFx0XHRcdFx0XHR0aGlzLmhlaWdodCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlzTm90RW1wdHk6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0VGlsZW1hcExheWVyLkZPUkVHUk9VTkRcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnJlbW92ZVRpbGVBdCh0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54IC0gdmVsb2NpdHksIHRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnggPSB0aGlzLnggLSB0aGlzLndpZHRoIC0gdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLlJJR0hUO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLnggKyB2ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyB2ZWxvY2l0eTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uTEVGVDtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uVVA6XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54LCB0aWxlc1tpXS55IC0gdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLmhlaWdodCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5ET1dOO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSArIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgKyB2ZWxvY2l0eTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uVVA7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UT0dHTEVfVElMRV9NT1ZFTUVOVDpcclxuXHRcdFx0XHRcdHRpbGVzID0gdGhpcy5zY2VuZS50aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcclxuXHRcdFx0XHRcdFx0dGhpcy54LFxyXG5cdFx0XHRcdFx0XHR0aGlzLnksXHJcblx0XHRcdFx0XHRcdHRoaXMud2lkdGgsXHJcblx0XHRcdFx0XHRcdHRoaXMuaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aXNOb3RFbXB0eTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRudWxsLFxyXG5cdFx0XHRcdFx0XHRUaWxlbWFwTGF5ZXIuRk9SRUdST1VORFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5kaXJ0eSkge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucmVtb3ZlVGlsZUF0KHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbGVzW2ldLmluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbGVzW2ldLnggLSB2ZWxvY2l0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS55XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnggPSB0aGlzLnggLSB0aGlzLndpZHRoIC0gdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUklHSFQ7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbGVzW2ldLmluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbGVzW2ldLnggKyB2ZWxvY2l0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS55XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnggPSB0aGlzLnggKyB0aGlzLndpZHRoICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uTEVGVDtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLlVQOlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlsZXNbaV0uaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlsZXNbaV0ueCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS55IC0gdmVsb2NpdHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMueSA9IHRoaXMueSAtIHRoaXMuaGVpZ2h0IC0gdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uRE9XTjtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLkRPV046XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS5pbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS54LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbGVzW2ldLnkgKyB2ZWxvY2l0eVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgKyB2ZWxvY2l0eTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5VUDtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IG1vdmVkVGlsZXMgPSB0aGlzLnNjZW5lLnRpbGVNYXAuZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMueCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnksXHJcblx0XHRcdFx0XHRcdFx0dGhpcy53aWR0aCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmhlaWdodCxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpc05vdEVtcHR5OiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRudWxsLFxyXG5cdFx0XHRcdFx0XHRcdFRpbGVtYXBMYXllci5GT1JFR1JPVU5EXHJcblx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gbW92ZWRUaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5yZW1vdmVUaWxlQXQobW92ZWRUaWxlc1tpXS54LCBtb3ZlZFRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAodGhpcy5yZXZlcnNlRGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBtb3ZlZFRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS5pbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLnggLSB2ZWxvY2l0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLnlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMueCA9IHRoaXMueCAtIHRoaXMud2lkdGggLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IG1vdmVkVGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLmluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0ueCArIHZlbG9jaXR5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0ueVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy54ID0gdGhpcy54ICsgdGhpcy53aWR0aCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uVVA6XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gbW92ZWRUaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0uaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS54LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0ueSAtIHZlbG9jaXR5XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLmhlaWdodCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBtb3ZlZFRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS5pbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLngsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS55ICsgdmVsb2NpdHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuU0hPV19URVhUOlxyXG5cdFx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLnNjZW5lLCB0ZXh0KTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlNIT1dfSU1BR0U6XHJcblx0XHRcdFx0XHRzaG93SW1hZ2VNb2RhbCh0aGlzLnNjZW5lLCB0ZXh0dXJlS2V5KTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc3Bhd24pIHtcclxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMuc3Bhd24udHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBTcGF3blR5cGUuTlBDOlxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZSA9PT0gKEFjdGlvblR5cGUuUkVQTEFDRV9USUxFIHx8IEFjdGlvblR5cGUuVE9HR0xFX1RJTEUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bk5QQyh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgNjAsIHRoaXMuc3Bhd24pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25OUEModGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFNwYXduVHlwZS5JVEVNOlxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZSA9PT0gKEFjdGlvblR5cGUuUkVQTEFDRV9USUxFIHx8IEFjdGlvblR5cGUuVE9HR0xFX1RJTEUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bkl0ZW0odGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIDYwLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduSXRlbSh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMubmF2aWdhdGVUbykge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmUucmVsb2FkUm9vbSh0aGlzLm5hdmlnYXRlVG8pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChvbkNvbXBsZXRlQ2FsbGJhY2spIHtcclxuXHRcdFx0XHRvbkNvbXBsZXRlQ2FsbGJhY2soaXRlbVVzZWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcmVwZWF0KSB7XHJcblx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNhbkV4ZWN1dGUoaXRlbSwgZGlydHlPYmplY3RNYXApIHtcclxuXHRcdGlmICh0aGlzLmNvbnN0cmFpbnRzKSB7XHJcblx0XHRcdGNvbnN0IHsgaXRlbVJlcXVpcmVkLCBwcm9tcHRSZXF1aXJlZCwgZGVwZW5kc09uIH0gPSB0aGlzLmNvbnN0cmFpbnRzO1xyXG5cdFx0XHRpZiAoaXRlbVJlcXVpcmVkICYmIGl0ZW0/Lm5hbWUgIT09IGl0ZW1SZXF1aXJlZCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmIChwcm9tcHRSZXF1aXJlZCkge1xyXG5cdFx0XHRcdGNvbnN0IGFuc3dlciA9IHdpbmRvdy5wcm9tcHQocHJvbXB0UmVxdWlyZWQucXVlc3Rpb24pO1xyXG5cdFx0XHRcdGlmIChhbnN3ZXIgJiYgYW5zd2VyLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByb21wdFJlcXVpcmVkLmFuc3dlci50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRlcGVuZHNPbikge1xyXG5cdFx0XHRcdGxldCB2YWxpZCA9IHRydWU7XHJcblx0XHRcdFx0ZGVwZW5kc09uPy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcclxuXHRcdFx0XHRcdGlmICghZGlydHlPYmplY3RNYXAuaGFzKG5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKCF2YWxpZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHNldE5hbWUobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGlzRGlydHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kaXJ0eTtcclxuXHR9XHJcblxyXG5cdHNldERpcnR5KGRpcnR5KSB7XHJcblx0XHR0aGlzLmRpcnR5ID0gZGlydHk7XHJcblx0fVxyXG5cclxuXHRzZXRBY3Rpb24oYWN0aW9uKSB7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldEFjdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmFjdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldENvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XHJcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XHJcblx0fVxyXG5cclxuXHRnZXRDb25zdHJhaW50cygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnRzO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd24oc3Bhd24pIHtcclxuXHRcdHRoaXMuc3Bhd24gPSBzcGF3bjtcclxuXHR9XHJcblxyXG5cdGdldFNwYXduKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3Bhd247XHJcblx0fVxyXG5cclxuXHRzZXROYXZpZ2F0ZVRvKG5hdmlnYXRlVG8pIHtcclxuXHRcdHRoaXMubmF2aWdhdGVUbyA9IG5hdmlnYXRlVG87XHJcblx0fVxyXG5cclxuXHRnZXROYXZpZ2F0ZVRvKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2aWdhdGVUbztcclxuXHR9XHJcblxyXG5cdHNldENvbnN0cmFpbnRNZXNzYWdlKGNvbnN0cmFpbnRNZXNzYWdlKSB7XHJcblx0XHR0aGlzLmNvbnN0cmFpbnRNZXNzYWdlID0gY29uc3RyYWludE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRnZXRDb25zdHJhaW50TWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnRNZXNzYWdlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcblx0Y29tYmluYXRpb24gPSBudWxsO1xyXG5cdHByb21wdE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblx0bmFtZSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgY29tYmluYXRpb24sIHByb21wdE1lc3NhZ2UpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gcHJvbXB0TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29tYmluYXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21iaW5hdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldENvbWJpbmF0aW9uKGNvbWJpbmF0aW9uKSB7XHJcblx0XHR0aGlzLmNvbWJpbmF0aW9uID0gY29tYmluYXRpb247XHJcblx0fVxyXG5cclxuXHRnZXRQcm9tcHRNZXNzYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvbXB0TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdHNldFByb21wdE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGlzT3BlbmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0T3BlbmVkKG9wZW5lZCkge1xyXG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRTcGF3bkl0ZW0oc3Bhd25JdGVtKSB7XHJcblx0XHR0aGlzLnNwYXduSXRlbSA9IHNwYXduSXRlbTtcclxuXHR9XHJcblxyXG5cdGdldFNwYXduSXRlbSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNwYXduSXRlbTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ludmFsaWRBcmd1bWVudEVycm9yJ1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vc2NlbmVzL0dhbWUnO1xyXG5pbXBvcnQgR2FtZU92ZXJTY2VuZSAgZnJvbSAnLi9zY2VuZXMvR2FtZU92ZXInO1xyXG5pbXBvcnQgV2luU2NlbmUgZnJvbSAnLi9zY2VuZXMvV2luJztcclxuaW1wb3J0IFNwbGFzaFNjZW5lIGZyb20gJy4vc2NlbmVzL01lbnUnO1xyXG5pbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gJy4vc2NlbmVzL0xvYWRpbmcnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cdHNjYWxlOiB7XHJcblx0XHRtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCxcclxuXHRcdHdpZHRoOiAxMDI0LFxyXG5cdFx0aGVpZ2h0OiA3NjhcclxuXHR9LFxyXG5cdHBoeXNpY3M6IHtcclxuXHRcdGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG5cdFx0YXJjYWRlOiB7XHJcblx0XHRcdGRlYnVnOiB0cnVlLFxyXG5cdFx0XHRncmF2aXR5OiB7IHk6IDIwMCB9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzY2VuZTogW0xvYWRpbmdTY2VuZSwgU3BsYXNoU2NlbmUsIEdhbWVTY2VuZSwgR2FtZU92ZXJTY2VuZSwgV2luU2NlbmVdXHJcbn07XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IENoZXN0IGZyb20gJy4uL2VudGl0aWVzL0NoZXN0JztcclxuaW1wb3J0IFNhZmUgZnJvbSAnLi4vZW50aXRpZXMvU2FmZSc7XHJcbmltcG9ydCBEb29yIGZyb20gJy4uL2VudGl0aWVzL0Rvb3InO1xyXG5pbXBvcnQgSW50ZXJhY3RpdmVab25lIGZyb20gJy4uL2VudGl0aWVzL0ludGVyYWN0aXZlWm9uZSc7XHJcbmltcG9ydCB7IHNob3dUZXh0TW9kYWwsIHNob3dJdGVtTW9kYWwgfSBmcm9tICcuLi91dGlscy9Nb2RhbFV0aWxzJztcclxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi4vdXRpbHMvQXNzZXJ0VXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUHJvcGVydHksIFRpbGVtYXBMYXllciwgRW50aXR5VHlwZSwgTG9hZGVyS2V5LCBBbmltYXRpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgVFJBTlNJVElPTl9ERUxBWSA9IDUwMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0c2lnbnMgPSBbXTtcclxuXHRzY3JhbWJsZWRTaWducyA9IFtdO1xyXG5cdGRvb3IgPSBudWxsO1xyXG5cdGNoZXN0cyA9IFtdO1xyXG5cdHRpbGVNYXAgPSBudWxsO1xyXG5cdHNhZmVzID0gW107XHJcblx0aXRlbXMgPSBbXTtcclxuXHRpdGVtSW1hZ2VzID0gW107XHJcblx0c2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRzZWxlY3RlZFJlY3RhbmdsZSA9IG51bGw7XHJcblx0cm9vbU5hbWUgPSBudWxsO1xyXG5cdGRpcnR5T2JqZWN0TWFwID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignZ2FtZScpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0dGhpcy5sb2FkUm9vbSgncm9vbS1vbmUnKTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG5cdFx0dGhpcy5jcmVhdGVIdWQoKTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lcigxKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUh1ZCgpIHtcclxuXHRcdGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDkyMCwgMjAsICdJdGVtcycsIHsgZm9udFNpemU6ICcyMHB4JywgZm9udEZhbWlseTogJ1ZlcmRhbmEnIH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSHVkKCkge1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUgJiYgIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaXRlbUltYWdlcykge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUltYWdlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuaXRlbUltYWdlc1tpXS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpdGVtSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSg5NTAsIGkgKiA1MCArIDgwLCB0aGlzLml0ZW1zW2ldLnRleHR1cmVLZXksIHRoaXMuaXRlbXNbaV0udGV4dHVyZUZyYW1lKTtcclxuXHRcdFx0aXRlbUltYWdlLnNldEFscGhhKDApO1xyXG5cdFx0XHRpdGVtSW1hZ2Uuc2V0U2NhbGUoMik7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0XHRpdGVtSW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5wb2ludGVySXRlbSA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlID0gdGhpcy5hZGQucmVjdGFuZ2xlKGl0ZW1JbWFnZS54LCBpdGVtSW1hZ2UueSwgNTAsIDUwKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLnNldFN0cm9rZVN0eWxlKDMsIDB4ZmZmZmZmKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdFx0dGFyZ2V0czogaXRlbUltYWdlLFxyXG5cdFx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAsXHJcblx0XHRcdFx0cmVwZWF0OiAwLFxyXG5cdFx0XHRcdHlveW86IGZhbHNlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLml0ZW1JbWFnZXMucHVzaChpdGVtSW1hZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9hZFJvb20ocm9vbU5hbWUpIHtcclxuXHRcdGFzc2VydCghcm9vbU5hbWUsICdUaGUgcm9vbU5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHR0aGlzLnJvb21OYW1lID0gcm9vbU5hbWU7XHJcblx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwID0gbmV3IE1hcCgpO1xyXG5cdFx0dGhpcy5jYW1lcmFzLm1haW4uZmFkZUluKFRSQU5TSVRJT05fREVMQVksIDAsIDAsIDApO1xyXG5cdFx0dGhpcy50aWxlTWFwID0gdGhpcy5jcmVhdGVUaWxlTWFwKHJvb21OYW1lKTtcclxuXHJcblx0XHRjb25zdCBjYXN0bGVUaWxlcyA9IHRoaXMuY3JlYXRlVGlsZVNldCh0aGlzLnRpbGVNYXAsICdjYXN0bGUtdGlsZXMnLCAnY2FzdGxlLXRpbGVzJyk7XHJcblx0XHRjb25zdCBjcmVlcHlUaWxlcyA9IHRoaXMuY3JlYXRlVGlsZVNldCh0aGlzLnRpbGVNYXAsICdjcmVlcHktdGlsZXMnLCAnY3JlZXB5LXRpbGVzJyk7XHJcblx0XHRjb25zdCB7IG9iamVjdHNMYXllciwgZm9yZWdyb3VuZExheWVyIH0gPSB0aGlzLmdldFRpbGVNYXBMYXllcnModGhpcy50aWxlTWFwLCBbY3JlZXB5VGlsZXMsIGNhc3RsZVRpbGVzXSk7XHJcblxyXG5cdFx0dGhpcy5sb2FkVGlsZU1hcE9iamVjdHMob2JqZWN0c0xheWVyKTtcclxuXHJcblx0XHRjb25zdCBzY3JlZW5UZXh0ID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aGlzLnRpbGVNYXAsIEN1c3RvbVByb3BlcnR5LlNDUkVFTl9URVhUKTtcclxuXHRcdGNvbnN0IG1vZGFsU2l6ZSA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGhpcy50aWxlTWFwLCBDdXN0b21Qcm9wZXJ0eS5NT0RBTF9TSVpFKTtcclxuXHRcdHNob3dUZXh0TW9kYWwodGhpcywgc2NyZWVuVGV4dCwgbW9kYWxTaXplKTtcclxuXHR9XHJcblxyXG5cdHJlbG9hZFJvb20ocm9vbUtleSkge1xyXG5cdFx0YXNzZXJ0KCFyb29tS2V5LCAnVGhlIHJvb21LZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHR0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KFRSQU5TSVRJT05fREVMQVksIDAsIDAsIDAsIChjYW1lcmEsIHByb2dyZXNzKSA9PiB7XHJcblx0XHRcdGlmIChwcm9ncmVzcyA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMubG9hZFJvb20ocm9vbUtleSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGlsZU1hcCh0aWxlTWFwS2V5KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBLZXksICdUaGUgdGlsZU1hcEtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHJldHVybiB0aGlzLm1ha2UudGlsZW1hcCh7IGtleTogdGlsZU1hcEtleSB9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRpbGVTZXQodGlsZU1hcCwgdGlsZVNldEtleSwgdGlsZVNldFRleHR1cmVLZXkpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0S2V5LCAnVGhlIHRpbGVTZXRLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXRpbGVTZXRUZXh0dXJlS2V5LCAnVGhlIHRpbGVTZXRUZXh0dXJlS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRpbGVNYXAuYWRkVGlsZXNldEltYWdlKHRpbGVTZXRLZXksIHRpbGVTZXRUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdGdldFRpbGVNYXBMYXllcnModGlsZU1hcCwgdGlsZVNldHMpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0cywgJ1RoZSB0aWxlU2V0cyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGJhY2tncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkJBQ0tHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IG9iamVjdHNMYXllciA9IHRpbGVNYXAuZ2V0T2JqZWN0TGF5ZXIoVGlsZW1hcExheWVyLk9CSkVDVFMpO1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZExheWVyLCBmb3JlZ3JvdW5kTGF5ZXIsIG9iamVjdHNMYXllciB9O1xyXG5cdH1cclxuXHJcblx0bG9hZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcikge1xyXG5cdFx0YXNzZXJ0KCFvYmplY3RzTGF5ZXIsICdUaGUgb2JqZWN0c0xheWVyIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgdGlsZU1hcE9iamVjdHMgPSBvYmplY3RzTGF5ZXIub2JqZWN0cztcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlTWFwT2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRzd2l0Y2ggKHRpbGVNYXBPYmplY3RzW2ldLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuSU5URVJBQ1RJVkVfWk9ORTpcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3RzW2ldKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5DSEVTVDpcclxuXHRcdFx0XHRcdHRoaXMuY2hlc3RzLnB1c2godGhpcy5jcmVhdGVDaGVzdCh0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLlNBRkU6XHJcblx0XHRcdFx0XHR0aGlzLnNhZmVzLnB1c2godGhpcy5jcmVhdGVTYWZlKHRpbGVNYXBPYmplY3RzW2ldKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuRE9PUjpcclxuXHRcdFx0XHRcdHRoaXMuZG9vciA9IHRoaXMuY3JlYXRlRG9vcih0aWxlTWFwT2JqZWN0c1tpXSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3Qgem9uZSA9IG5ldyBJbnRlcmFjdGl2ZVpvbmUoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC54LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LnksXHJcblx0XHRcdHRpbGVNYXBPYmplY3Qud2lkdGgsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QuaGVpZ2h0XHJcblx0XHQpO1xyXG5cdFx0em9uZS5zZXRBY3Rpb24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5BQ1RJT04pKTtcclxuXHRcdHpvbmUuc2V0Q29uc3RyYWludHModGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT05TVFJBSU5UUykpO1xyXG5cdFx0em9uZS5zZXRDb25zdHJhaW50TWVzc2FnZSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkNPTlNUUkFJTlRfTUVTU0FHRSkpO1xyXG5cdFx0em9uZS5zZXROYXZpZ2F0ZVRvKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkFWSUdBVEVfVE8pKTtcclxuXHRcdHpvbmUuc2V0U3Bhd24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTikpO1xyXG5cclxuXHRcdGNvbnN0IGV2ZW50cyA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuRVZFTlRTKTtcclxuXHJcblx0XHRpZiAoZXZlbnRzKSB7XHJcblx0XHRcdGNvbnN0IHsgbGlzdGVuVG8sIGVtaXQgfSA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuRVZFTlRTKTtcclxuXHJcblx0XHRcdGlmIChsaXN0ZW5Ubykge1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRzLm9uKGxpc3RlblRvLCAoKSA9PiB7XHJcblx0XHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHpvbmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoaXRlbVVzZWQpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGl0ZW1Vc2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJdGVtLnNpbmdsZVVzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbT8ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHpvbmUuaXNEaXJ0eSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoem9uZS5uYW1lLCB6b25lKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLmRlbGV0ZSh6b25lLm5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChlbWl0KSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChlbWl0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHpvbmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdHpvbmUuZXhlY3V0ZUFjdGlvbih0aGlzLnNlbGVjdGVkSXRlbSwgdGhpcy5kaXJ0eU9iamVjdE1hcCwgKGl0ZW1Vc2VkKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoaXRlbVVzZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJdGVtLnNpbmdsZVVzZSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0/Lm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh6b25lLmlzRGlydHkoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldCh6b25lLm5hbWUsIHpvbmUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5kZWxldGUoem9uZS5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTYWZlKHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3Qgc2FmZSA9IG5ldyBTYWZlKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LngsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueSxcclxuXHRcdFx0TG9hZGVyS2V5LlNBRkUsXHJcblx0XHRcdDEyLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQ09NQklOQVRJT04pLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlBST01QVF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdHNhZmUuc2V0U3Bhd25JdGVtKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTSkpO1xyXG5cdFx0c2FmZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGlmICghc2FmZS5pc09wZW5lZCgpKSB7XHJcblx0XHRcdFx0Y29uc3QgYW5zd2VyID0gd2luZG93LnByb21wdChzYWZlLmdldFByb21wdE1lc3NhZ2UoKSk7XHJcblx0XHRcdFx0aWYgKGFuc3dlciAmJiBhbnN3ZXIudG9Mb2NhbGVVcHBlckNhc2UoKSA9PT0gc2FmZS5nZXRDb21iaW5hdGlvbigpLnRvTG9jYWxlVXBwZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdHNhZmUucGxheShBbmltYXRpb24uU0FGRV9PUEVOKTtcclxuXHRcdFx0XHRcdHNhZmUuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oc2FmZS54LCBzYWZlLnkgKyBzYWZlLmhlaWdodCwgc2FmZS5nZXRTcGF3bkl0ZW0oKSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldChzYWZlLm5hbWUsIHNhZmUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gc2FmZTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZURvb3IodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBkb29yID0gbmV3IERvb3IoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuRE9PUixcclxuXHRcdFx0MTAsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRUQpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGRvb3Iub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZG9vci5pc0xvY2tlZCgpKSB7XHJcblx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBkb29yLmdldExvY2tlZE1lc3NhZ2UoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9vci5wbGF5KEFuaW1hdGlvbi5ET09SX09QRU4pO1xyXG5cdFx0XHRcdGRvb3Iuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KGRvb3IubmFtZSwgZG9vcik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGRvb3I7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDaGVzdCh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGNoZXN0ID0gbmV3IENoZXN0KFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LngsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueSxcclxuXHRcdFx0TG9hZGVyS2V5LkNIRVNULFxyXG5cdFx0XHRudWxsLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTE9DS0VEKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRURfTUVTU0FHRSlcclxuXHRcdCk7XHJcblx0XHRjaGVzdC5zZXRTcGF3bkl0ZW0odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNKSk7XHJcblx0XHRjaGVzdC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGlmIChjaGVzdC5pc0xvY2tlZCgpKSB7XHJcblx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBjaGVzdC5sb2NrZWRNZXNzYWdlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoIWNoZXN0LmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHRcdGNoZXN0LnBsYXkoQW5pbWF0aW9uLkNIRVNUX09QRU4pO1xyXG5cdFx0XHRcdFx0Y2hlc3Quc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oY2hlc3QueCwgY2hlc3QueSArIGNoZXN0LmhlaWdodCArIDUsIGNoZXN0LmdldFNwYXduSXRlbSgpKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KGNoZXN0Lm5hbWUsIGNoZXN0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGNoZXN0O1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQW5pbWF0aW9ucygpIHtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5TQUZFX09QRU4sIExvYWRlcktleS5TQUZFLCBbMTNdLCA0KTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5ET09SX09QRU4sIExvYWRlcktleS5ET09SLCBbNSwgMF0sIDQpO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLkNIRVNUX09QRU4sIExvYWRlcktleS5DSEVTVCwgWzFdLCA4LCAtMSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBbmltYXRpb24oa2V5LCB0ZXh0dXJlLCBmcmFtZXMsIGZyYW1lUmF0ZSwgcmVwZWF0KSB7XHJcblx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdGtleSxcclxuXHRcdFx0ZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHRleHR1cmUsIHsgZnJhbWVzIH0pLFxyXG5cdFx0XHRmcmFtZVJhdGUsXHJcblx0XHRcdHJlcGVhdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgbmFtZSkge1xyXG5cdFx0YXNzZXJ0KCFzcGF3bk9iamVjdCwgJ1RoZSBzcGF3bk9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghbmFtZSwgJ1RoZSBuYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0bGV0IHByb3BlcnR5ID0gbnVsbDtcclxuXHRcdGlmIChzcGF3bk9iamVjdCkge1xyXG5cdFx0XHRwcm9wZXJ0eSA9IHNwYXduT2JqZWN0LnByb3BlcnRpZXMuZmluZCgocHJvcGVydHkpID0+IHByb3BlcnR5Lm5hbWUgPT09IG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BlcnR5Py52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNwYXduSXRlbSh4LCB5LCBpdGVtKSB7XHJcblx0XHRhc3NlcnQoIXgsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCgheSwgJ1RoZSB5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFpdGVtLCAnVGhlIGl0ZW0gaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBpdGVtSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSh4LCB5LCBpdGVtLnRleHR1cmVLZXksIGl0ZW0udGV4dHVyZUZyYW1lKTtcclxuXHRcdGl0ZW1JbWFnZS5zZXRTY2FsZSgyKTtcclxuXHRcdGl0ZW1JbWFnZS5zZXRBbHBoYSgwKTtcclxuXHRcdGl0ZW1JbWFnZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0aXRlbUltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aXRlbUltYWdlLmRlc3Ryb3koKTtcclxuXHRcdFx0c2hvd0l0ZW1Nb2RhbCh0aGlzLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLnRleHR1cmVLZXksIGl0ZW0udGV4dHVyZUZyYW1lLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHR0YXJnZXRzOiBpdGVtSW1hZ2UsXHJcblx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0ZHVyYXRpb246IDIwMFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzcGF3bk5QQyh4LCB5LCBucGMpIHtcclxuXHRcdGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIW5wYywgJ1RoZSBucGMgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBucGNTcHJpdGUgPSB0aGlzLmFkZC5zcHJpdGUoeCwgeSwgbnBjLnRleHR1cmVLZXksIG5wYy50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0bnBjU3ByaXRlLnNldFNjYWxlKDIpO1xyXG5cdFx0bnBjU3ByaXRlLnNldEFscGhhKDApO1xyXG5cdFx0bnBjU3ByaXRlLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRucGNTcHJpdGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIG5wYy5kZXNjcmlwdGlvbik7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG5wY1Nwcml0ZSxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRkdXJhdGlvbjogMjAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlzSXRlbVNlbGVjdGVkKG5hbWUpIHtcclxuXHRcdGFzc2VydCghbmFtZSwgJ1RoZSBuYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lID09PSBuYW1lO1xyXG5cdH1cclxuXHJcblx0c3RhcnRUaW1lcihudW1iZXJPZkhvdXJzKSB7XHJcblx0XHRhc3NlcnQoIW51bWJlck9mSG91cnMsICdUaGUgbnVtYmVyT2ZIb3VycyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuXHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKG5vdyArIG51bWJlck9mSG91cnMgKiA2MCAqIDYwICogMTAwMCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzVGltZUVsYXBzZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0dGhpcy50aW1lUmVtYWluaW5nID0gdGhpcy5jb3VudERvd25EYXRlIC0gbm93O1xyXG5cdFx0XHRcdGlmIChub3cgPj0gdGhpcy5jb3VudERvd25EYXRlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZVRpbWUoKSB7XHJcblx0XHRpZiAodGhpcy50aW1lVGV4dCkge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGhvdXJzUmVtYWluaW5nID0gTWF0aC5mbG9vcigodGhpcy50aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG5cdFx0Y29uc3QgbWludXRlc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG5cdFx0Y29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cdFx0aWYgKHRoaXMudGltZVJlbWFpbmluZykge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0ID0gdGhpcy5hZGQudGV4dCg5MTUsIDczMCwgYCR7aG91cnNSZW1haW5pbmd9OiR7bWludXRlc1JlbWFpbmluZ306JHtzZWNvbmRzUmVtYWluaW5nfWAsIHtcclxuXHRcdFx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJyxcclxuXHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnVwZGF0ZVRpbWUoKTtcclxuXHRcdGlmICh0aGlzLmlzVGltZUVsYXBzZWQpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnZ2FtZW92ZXInKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkSXRlbSAmJiAhdGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlcjtcclxuXHRcdFx0Y29uc3QgeyB0ZXh0dXJlS2V5LCB0ZXh0dXJlRnJhbWUgfSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgdGV4dHVyZUtleSwgdGV4dHVyZUZyYW1lKTtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS5zZXRTY2FsZSgyKTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gJiYgdGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlcjtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS54ID0geDtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS55ID0geTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZ2FtZW92ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoNTEyLCAzODQsICdHYW1lIG92ZXInLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ2xvYWRpbmcnKTtcclxuXHR9XHJcblxyXG5cdHByZWxvYWQoKSB7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1vbmUnLCAnYXNzZXRzL2pzb24vcm9vbS1vbmUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXR3bycsICdhc3NldHMvanNvbi9yb29tLXR3by1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tdGhyZWUnLCAnYXNzZXRzL2pzb24vcm9vbS10aHJlZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tZm91cicsICdhc3NldHMvanNvbi9yb29tLWZvdXItbWFwLmpzb24nKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjYXN0bGUtdGlsZXMnLCAnYXNzZXRzL2ltZy9jYXN0bGUtdGlsZXMvVGlsZXNldC5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnY3JlZXB5LXRpbGVzJywgJ2Fzc2V0cy9pbWcvdGlsZXMucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoTG9hZGVyS2V5Lk1FTlVfSU1BR0UsICdhc3NldHMvaW1nL2Nhc3RsZS5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZHVuZ2Vvbi1jcmF3bCcsICdhc3NldHMvaW1nL2R1bmdlb24tY3Jhd2wucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5JVEVNUywgJ2Fzc2V0cy9pbWcvaXRlbXMucG5nJywgeyBmcmFtZVdpZHRoOiAxNiwgZnJhbWVIZWlnaHQ6IDE2IH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5VSSwgJ2Fzc2V0cy9pbWcvdWkucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDEzIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5DSEVTVCwgJ2Fzc2V0cy9pbWcvY2hlc3QucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5ET09SLCAnYXNzZXRzL2ltZy9kb29yLnBuZycsIHsgZnJhbWVXaWR0aDogMjQsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuU0FGRSwgJ2Fzc2V0cy9pbWcvc2FmZS5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogNDAgfSk7XHJcblxyXG5cdFx0dGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnbWVudScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignbWVudScpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuYWRkLmltYWdlKDAsIDAsIExvYWRlcktleS5NRU5VX0lNQUdFKS5zZXRPcmlnaW4oMCkuc2V0U2NhbGUoMC44KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCgzNTAsIDM4NCwgJ0VzY2FwZSBmcm9tIHRoZSBjYXN0bGUnLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMzJweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgY2xpY2tUb0NvbnRpbnVlID0gdGhpcy5hZGQudGV4dCg1MTIsIDQ2MCwgJ0NsaWNrIHRvIHN0YXJ0IHRoZSBnYW1lJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdH0pO1xyXG5cdFx0Y2xpY2tUb0NvbnRpbnVlLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHRpZiAodGhpcy5pbnB1dC5tYW5hZ2VyLmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWUnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignd2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDUxMiwgMzg0LCAnQ29uZ3JhdHVsYXRpb25zIGZvciBlc2NhcGluZz8gVGhhbmsgeW91IGZvciBwbGF5aW5nIScsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBJbnZhbGlkQXJndW1lbnRFcnJvciBmcm9tICcuLi9lcnJvcnMvSW52YWxpZGFBcmd1bWVudEVycm9yJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcblx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0dGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKG1lc3NhZ2UpO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuLi91dGlscy9Bc3NlcnRVdGlscyc7XHJcbmltcG9ydCB7IE1vZGFsU2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbiAgIFxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RleHRNb2RhbChzY2VuZSwgdGV4dCwgc2l6ZSA9IE1vZGFsU2l6ZS5SRUdVTEFSLCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0YXNzZXJ0KCFzY2VuZSwgJ1RoZSBzY2VuZSBpcyB1bmRlZmluZWQnKTtcclxuXHRhc3NlcnQoIXRleHQsICdUaGUgdGV4dCBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGxldCBib3ggPSBudWxsO1xyXG5cdGxldCBjbG9zZVRleHQgPSBudWxsO1xyXG5cclxuXHRzd2l0Y2ggKHNpemUpIHtcclxuXHRcdGNhc2UgTW9kYWxTaXplLlJFR1VMQVI6XHJcblx0XHRcdGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAxNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdGNsb3NlVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0XHRcdC50ZXh0KDE1NSwgLTY5LCAnQ2xvc2UgWCcsIHtcclxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTW9kYWxTaXplLkxBUkdFOlxyXG5cdFx0XHRjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdFx0XHQudGV4dCgxNTUsIC0xNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcdGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRjb25zdCB0ZXh0T2JqID0gc2NlbmUuYWRkXHJcblx0XHQudGV4dCgwLCAwLCB0ZXh0LCB7XHJcblx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0d2lkdGg6IDQwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0fSlcclxuXHRcdC5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cdG1vZGFsLmFkZChbYm94LCB0ZXh0T2JqLCBjbG9zZVRleHRdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbWFnZU1vZGFsKHNjZW5lLCBpbWFnZUtleSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCFpbWFnZUtleSwgJ1RoZSBpbWFnZUtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0Y29uc3QgaW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgMCwgaW1hZ2VLZXkpLnNldE9yaWdpbigwLjUpO1xyXG5cdGltYWdlLnNldERpc3BsYXlTaXplKGJveC53aWR0aCAtIDYwLCBib3guaGVpZ2h0IC0gNjApO1xyXG5cclxuXHRjb25zdCBjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdC50ZXh0KDE1NSwgLTE2OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldEludGVyYWN0aXZlKCk7XHJcblxyXG5cdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdG1vZGFsLmRlc3Ryb3koKTtcclxuXHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdGFscGhhOiAxLFxyXG5cdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRkdXJhdGlvbjogMjAwXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZChbYm94LCBpbWFnZSwgY2xvc2VUZXh0XSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93SXRlbU1vZGFsKHNjZW5lLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUsIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCghaXRlbURlc2NyaXB0aW9uLCAnVGhlIGl0ZW1EZXNjcmlwdGlvbiBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAxNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0Y29uc3QgY2xvc2VUZXh0ID0gc2NlbmUuYWRkXHJcblx0XHQudGV4dCgxNTUsIC02OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldEludGVyYWN0aXZlKCk7XHJcblxyXG5cdGNvbnN0IGl0ZW1JbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAtMTAsIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUpLnNldFNjYWxlKDIuNSk7XHJcblx0Y29uc3QgaXRlbURlc2NyaXB0aW9uVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0LnRleHQoMCwgMzAsIGl0ZW1EZXNjcmlwdGlvbiwge1xyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0fSlcclxuXHRcdC5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRzY2VuZS50d2VlbnMuYWRkKHtcclxuXHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0YWxwaGE6IDEsXHJcblx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdGR1cmF0aW9uOiAyMDBcclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkKFtib3gsIGl0ZW1JbWFnZSwgaXRlbURlc2NyaXB0aW9uVGV4dCwgY2xvc2VUZXh0XSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2VzY2FwZV9mcm9tX2RyYWN1bGFfY2FzdGxlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2VzY2FwZV9mcm9tX2RyYWN1bGFfY2FzdGxlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==