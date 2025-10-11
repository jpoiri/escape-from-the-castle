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
	SCREEN_TEXT: 'screenText'
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
			console.log('cannot execute');
			if (this.constraintMessage) {
				(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.showTextModal)(this.scene, this.constraintMessage);
			}
		} else {
			console.log('execute');
			const { itemRequired } = this.constraints;

			if (itemRequired && item?.name === itemRequired) {
				itemUsed = true;
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
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
							}
							this.x = this.x + this.width + velocity;
							this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT;
							break;
						case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
							}
							this.x = this.x - this.width - velocity;
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
										tiles[i].x + velocity,
										tiles[i].y
									);
								}
								this.x = this.x + this.width + velocity;
								this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x - velocity,
										tiles[i].y
									);
								}
								this.x = this.x - this.width - velocity;
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
										movedTiles[i].x + velocity,
										movedTiles[i].y
									);
								}
								this.x = this.x + this.width + velocity;
								break;
							case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x - velocity,
										movedTiles[i].y
									);
								}
								this.x = this.x - this.width - velocity;
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
							this.scene.spawnNPC(this.x + this.width / 2, this.y + 50, this.spawn);
						} else {
							this.scene.spawnNPC(this.x + this.width / 2, this.y + this.height / 2, this.spawn);
						}
						break;
					case _constants__WEBPACK_IMPORTED_MODULE_1__.SpawnType.ITEM:
						if (type === (_constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE || _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE)) {
							this.scene.spawnItem(this.x + this.width / 2, this.y + 50, this.spawn);
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
				console.log(answer);
				console.log(promptRequired.answer);
				if (answer && answer.toLocaleLowerCase() === promptRequired.answer.toLocaleLowerCase()) {
					console.log('goes here');
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
		(0,_utils_ModalUtils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, screenText, 'large');
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


function showTextModal(scene, text, size = 'normal', closeCallback) {
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_utils_AssertUtils__WEBPACK_IMPORTED_MODULE_0__.assert)(!text, 'The text is undefined');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0huRztBQUM1QjtBQUNlLG9CQUFvQix1REFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0NoZXN0LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0Rvb3IuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvSW50ZXJhY3RpdmVab25lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL1NhZmUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZXJyb3JzL0ludmFsaWRhQXJndW1lbnRFcnJvci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL01lbnUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL1dpbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy91dGlscy9Bc3NlcnRVdGlscy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy91dGlscy9Nb2RhbFV0aWxzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ3VzdG9tUHJvcGVydHkgPSB7XHJcblx0Q09NQklOQVRJT046ICdjb21iaW5hdGlvbicsXHJcblx0UFJPTVBUX01FU1NBR0U6ICdwcm9tcHRNZXNzYWdlJyxcclxuXHRTUEFXTjogJ3NwYXduJyxcclxuXHRTUEFXTl9JVEVNOiAnc3Bhd25JdGVtJyxcclxuXHRMT0NLRUQ6ICdsb2NrZWQnLFxyXG5cdExPQ0tFRF9NRVNTQUdFOiAnbG9ja2VkTWVzc2FnZScsXHJcblx0QUNUSU9OOiAnYWN0aW9uJyxcclxuXHRDT05TVFJBSU5UUzogJ2NvbnN0cmFpbnRzJyxcclxuXHROQVZJR0FURV9UTzogJ25hdmlnYXRlVG8nLFxyXG5cdENPTlNUUkFJTlRfTUVTU0FHRTogJ2NvbnN0cmFpbnRNZXNzYWdlJyxcclxuXHRFVkVOVFM6ICdldmVudHMnLFxyXG5cdFNDUkVFTl9URVhUOiAnc2NyZWVuVGV4dCdcclxufTtcclxuXHJcbmNvbnN0IEFjdGlvblR5cGUgPSB7XHJcblx0TU9WRV9USUxFOiAnTU9WRV9USUxFJyxcclxuXHRUT0dHTEVfVElMRV9NT1ZFTUVOVDogJ1RPR0dMRV9USUxFX01PVkVNRU5UJyxcclxuXHRERVNUUk9ZX1RJTEU6ICdERVNUUk9ZX1RJTEUnLFxyXG5cdFJFUExBQ0VfVElMRTogJ1JFUExBQ0VfVElMRScsXHJcblx0VE9HR0xFX1RJTEU6ICdUT0dHTEVfVElMRScsXHJcblx0U0hPV19URVhUOiAnU0hPV19URVhUJyxcclxuXHRTSE9XX0lNQUdFOiAnU0hPV19JTUFHRSdcclxufTtcclxuXHJcbmNvbnN0IFNwYXduVHlwZSA9IHtcclxuXHRJVEVNOiAnSVRFTScsXHJcblx0TlBDOiAnTlBDJ1xyXG59XHJcblxyXG5jb25zdCBEaXJlY3Rpb24gPSB7XHJcblx0TEVGVDogJ0xFRlQnLFxyXG5cdFJJR0hUOiAnUklHSFQnLFxyXG5cdFVQOiAnVVAnLFxyXG5cdERPV046ICdET1dOJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZW1hcExheWVyID0ge1xyXG5cdEJBQ0tHUk9VTkQ6ICdiYWNrZ3JvdW5kJyxcclxuXHRGT1JFR1JPVU5EOiAnZm9yZWdyb3VuZCcsXHJcblx0T0JKRUNUUzogJ29iamVjdHMnXHJcbn07XHJcblxyXG5jb25zdCBFbnRpdHlUeXBlID0ge1xyXG5cdERPT1I6ICdEb29yJyxcclxuXHRTQUZFOiAnU2FmZScsXHJcblx0Q0hFU1Q6ICdDaGVzdCcsXHJcblx0VEVYVF9NT0RBTDogJ1RleHRNb2RhbCcsXHJcblx0SU5URVJBQ1RJVkVfWk9ORTogJ0ludGVyYWN0aXZlWm9uZScsXHJcblx0SU1BR0VfTU9EQUw6ICdJbWFnZU1vZGFsJ1xyXG59O1xyXG5cclxuY29uc3QgTG9hZGVyS2V5ID0ge1xyXG5cdFRJTEVNQVA6ICd0aWxlbWFwJyxcclxuXHRUSUxFU0VUOiAndGlsZXMnLFxyXG5cdElURU1TOiAnaXRlbXMnLFxyXG5cdFVJOiAndWknLFxyXG5cdENIRVNUOiAnY2hlc3QnLFxyXG5cdERPT1I6ICdkb29yJyxcclxuXHRTQUZFOiAnc2FmZScsXHJcblx0TUVOVV9JTUFHRTogJ21lbnUtaW1hZ2UnXHJcbn07XHJcblxyXG5jb25zdCBUaWxlID0ge1xyXG5cdFNJR046IDE0NCxcclxuXHRDTE9TRV9XSU5ET1c6IDI1OCxcclxuXHRPUEVOX1dJTkRPVzogMjM1LFxyXG5cdENPRkZJTjogWzcxLCA5NV0sXHJcblx0REVTVFJPWUVEX0tOSUdIVDogOTYsXHJcblx0VE9QX0NIQUlSOiAzMTIsXHJcblx0TUlERExFX0NIQUlSOiAzMzYsXHJcblx0Qk9UVE9NX0NIQUlSOiAzNjAsXHJcblx0SE9MRV9JTl9XQUxMOiAyNDksXHJcblx0VE9QX0xFRlRfR0FSR09ZTEU6IDIzMixcclxuXHRUT1BfUklHSFRfR0FSR09ZTEU6IDIzMyxcclxuXHRCT1RUT01fTEVGVF9HQVJHT1lMRTogMjU2LFxyXG5cdEJPVFRPTV9SSUdIVF9HQVJHT1lMRTogMjU3LFxyXG5cdFRPUF9MRUZUX1dBVEVSOiAxMCxcclxuXHRUT1BfQ0VOVEVSX1dBVEVSOiAxMSxcclxuXHRUT1BfUklHSFRfV0FURVI6IDEyLFxyXG5cdE1JRERMRV9MRUZUX1dBVEVSOiAzNCxcclxuXHRNSURETEVfQ0VOVEVSX1dBVEVSOiAzNSxcclxuXHRNSURETEVfUklHSFRfV0FURVI6IDM2LFxyXG5cdEJPVFRPTV9MRUZUX1dBVEVSOiA1OCxcclxuXHRCT1RUT01fQ0VOVEVSX1dBVEVSOiA1OSxcclxuXHRCT1RUT01fUklHSFRfV0FURVI6IDYwLFxyXG5cdERJR0dFRF9IT0xFOiAzMTYsXHJcblx0U1RBSVI6IDEyNFxyXG59O1xyXG5cclxuY29uc3QgSXRlbSA9IHtcclxuXHRCT09LOiAnYm9vaycsXHJcblx0SEFNTUVSOiAnaGFtbWVyJyxcclxuXHRQSUNLQVhFOiAncGlja2F4ZScsXHJcblx0S0VZOiAna2V5JyxcclxuXHRNQVNURVJfS0VZOiAnbWFzdGVyLWtleScsXHJcblx0SUNFX1JPRDogJ2ljZS1yb2QnLFxyXG5cdFBPVElPTjogJ3BvdGlvbicsXHJcblx0U0hPVkVMOiAnc2hvdmVsJyxcclxuXHRSSU5HOiAncmluZydcclxufTtcclxuXHJcbmNvbnN0IEFuaW1hdGlvbiA9IHtcclxuXHRET09SX09QRU46ICdkb29yLW9wZW4nLFxyXG5cdFNBRkVfT1BFTjogJ3NhZmUtb3BlbicsXHJcblx0Q0hFU1RfT1BFTjogJ2NoZXN0LW9wZW4nXHJcbn07XHJcblxyXG5jb25zdCBGcmFtZSA9IHtcclxuXHRNQVNURVJfS0VZOiA1MSxcclxuXHRQSUNLQVhFOiA4MyxcclxuXHRQT1RJT046IDYxLFxyXG5cdEtFWTogNTAsXHJcblx0UklORzogMTNcclxufTtcclxuXHJcbk9iamVjdC5mcmVlemUoVGlsZW1hcExheWVyKTtcclxuT2JqZWN0LmZyZWV6ZShDdXN0b21Qcm9wZXJ0eSk7XHJcbk9iamVjdC5mcmVlemUoTG9hZGVyS2V5KTtcclxuT2JqZWN0LmZyZWV6ZShFbnRpdHlUeXBlKTtcclxuT2JqZWN0LmZyZWV6ZShUaWxlKTtcclxuT2JqZWN0LmZyZWV6ZShJdGVtKTtcclxuT2JqZWN0LmZyZWV6ZShBbmltYXRpb24pO1xyXG5PYmplY3QuZnJlZXplKEZyYW1lKTtcclxuT2JqZWN0LmZyZWV6ZShEaXJlY3Rpb24pO1xyXG5PYmplY3QuZnJlZXplKEFjdGlvblR5cGUpO1xyXG5cclxuZXhwb3J0IHsgVGlsZW1hcExheWVyLCBDdXN0b21Qcm9wZXJ0eSwgTG9hZGVyS2V5LCBFbnRpdHlUeXBlLCBUaWxlLCBJdGVtLCBBbmltYXRpb24sIEZyYW1lLCBBY3Rpb25UeXBlLCBEaXJlY3Rpb24sIFNwYXduVHlwZSB9O1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVzdCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuXHRsb2NrZWQgPSB0cnVlO1xyXG5cdGxvY2tlZE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblx0bmFtZSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgbG9ja2VkLCBsb2NrZWRNZXNzYWdlKSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUpO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbG9ja2VkTWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0TG9ja2VkTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NrZWRNZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cdFxyXG5cdGlzT3BlbmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0T3BlbmVkKG9wZW5lZCkge1xyXG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRTcGF3bkl0ZW0oc3Bhd25JdGVtKSB7XHJcblx0XHR0aGlzLnNwYXdtSXRlbSA9IHNwYXduSXRlbTtcclxuXHR9XHJcblxyXG5cdGdldFNwYXduSXRlbSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNwYXdtSXRlbTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9vciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cdGxvY2tlZCA9IGZhbHNlO1xyXG5cdGxvY2tlZE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUsIGxvY2tlZCwgbG9ja2VkTWVzc2FnZSkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lKTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuXHRcdHRoaXMubG9ja2VkTWVzc2FnZSA9IGxvY2tlZE1lc3NhZ2U7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldFNjYWxlKDIpO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRzZXROYW1lKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRsb2NrKCkge1xyXG5cdFx0dGhpcy5sb2NrZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0dW5sb2NrKCkge1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlzTG9ja2VkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9ja2VkO1xyXG5cdH1cclxuXHJcblx0c2V0TG9ja2VkTWVzc2FnZShtZXNzYWdlKSB7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0Z2V0TG9ja2VkTWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IFRpbGVtYXBMYXllciwgQWN0aW9uVHlwZSwgRGlyZWN0aW9uLCBTcGF3blR5b2UsIFNwYXduVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHNob3dJbWFnZU1vZGFsLCBzaG93VGV4dE1vZGFsIH0gZnJvbSAnLi4vdXRpbHMvTW9kYWxVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGl2ZVpvbmUgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuXHRhY3Rpb24gPSBudWxsO1xyXG5cdGNvbnN0cmFpbnRzID0gbnVsbDtcclxuXHRzcGF3biA9IG51bGw7XHJcblx0bmF2aWdhdGVUbyA9IG51bGw7XHJcblx0Y29uc3RyYWludE1lc3NhZ2UgPSBudWxsO1xyXG5cdGRpcnR5ID0gZmFsc2U7XHJcblx0bmFtZSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCBuYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0fVxyXG5cclxuXHRleGVjdXRlQWN0aW9uKGl0ZW0sIGRpcnR5T2JqZWN0TWFwLCBvbkNvbXBsZXRlQ2FsbGJhY2spIHtcclxuXHRcdGxldCBpdGVtVXNlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRpbGVzID0gbnVsbDtcclxuXHRcdGlmICghdGhpcy5jYW5FeGVjdXRlKGl0ZW0sIGRpcnR5T2JqZWN0TWFwKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY2Fubm90IGV4ZWN1dGUnKTtcclxuXHRcdFx0aWYgKHRoaXMuY29uc3RyYWludE1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMuc2NlbmUsIHRoaXMuY29uc3RyYWludE1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZXhlY3V0ZScpO1xyXG5cdFx0XHRjb25zdCB7IGl0ZW1SZXF1aXJlZCB9ID0gdGhpcy5jb25zdHJhaW50cztcclxuXHJcblx0XHRcdGlmIChpdGVtUmVxdWlyZWQgJiYgaXRlbT8ubmFtZSA9PT0gaXRlbVJlcXVpcmVkKSB7XHJcblx0XHRcdFx0aXRlbVVzZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgeyB0eXBlLCB2ZWxvY2l0eSwgbmV3VGlsZXMsIGRpcmVjdGlvbiwgdGV4dCwgdGV4dHVyZUtleSwgcmVwZWF0IH0gPSB0aGlzLmFjdGlvbjtcclxuXHJcblx0XHRcdG5ld1RpbGVzID0gbmV3VGlsZXM/LnNwbGl0KCcsJykubWFwKChzKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHMsIDEwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuUkVQTEFDRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSB0aGlzLnNjZW5lLnRpbGVNYXAuZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKFxyXG5cdFx0XHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0XHRcdHRoaXMueSxcclxuXHRcdFx0XHRcdFx0dGhpcy53aWR0aCxcclxuXHRcdFx0XHRcdFx0dGhpcy5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpc05vdEVtcHR5OiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFRpbGVtYXBMYXllci5GT1JFR1JPVU5EXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuZXdUaWxlc1tpXSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQobmV3VGlsZXNbaV0sIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UT0dHTEVfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gdGhpcy5zY2VuZS50aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcclxuXHRcdFx0XHRcdFx0dGhpcy54LFxyXG5cdFx0XHRcdFx0XHR0aGlzLnksXHJcblx0XHRcdFx0XHRcdHRoaXMud2lkdGgsXHJcblx0XHRcdFx0XHRcdHRoaXMuaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aXNOb3RFbXB0eTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRudWxsLFxyXG5cdFx0XHRcdFx0XHRUaWxlbWFwTGF5ZXIuRk9SRUdST1VORFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5kaXJ0eSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZXZpb3VzVGlsZXMgPSB0aWxlcy5tYXAoKHQpID0+IHQuaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAobmV3VGlsZXNbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQobmV3VGlsZXNbaV0sIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnByZXZpb3VzVGlsZXNbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQodGhpcy5wcmV2aW91c1RpbGVzW2ldLCB0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5wcmV2aW91c1RpbGVzID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLkRFU1RST1lfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gdGhpcy5zY2VuZS50aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcclxuXHRcdFx0XHRcdFx0dGhpcy54LFxyXG5cdFx0XHRcdFx0XHR0aGlzLnksXHJcblx0XHRcdFx0XHRcdHRoaXMud2lkdGgsXHJcblx0XHRcdFx0XHRcdHRoaXMuaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aXNOb3RFbXB0eTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRudWxsLFxyXG5cdFx0XHRcdFx0XHRUaWxlbWFwTGF5ZXIuRk9SRUdST1VORFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucmVtb3ZlVGlsZUF0KHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuTU9WRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSB0aGlzLnNjZW5lLnRpbGVNYXAuZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKFxyXG5cdFx0XHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0XHRcdHRoaXMueSxcclxuXHRcdFx0XHRcdFx0dGhpcy53aWR0aCxcclxuXHRcdFx0XHRcdFx0dGhpcy5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpc05vdEVtcHR5OiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFRpbGVtYXBMYXllci5GT1JFR1JPVU5EXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCArIHZlbG9jaXR5LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy54ID0gdGhpcy54ICsgdGhpcy53aWR0aCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVDtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54IC0gdmVsb2NpdHksIHRpbGVzW2ldLnkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnggPSB0aGlzLnggLSB0aGlzLndpZHRoIC0gdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLkxFRlQ7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLlVQOlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSAtIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy55ID0gdGhpcy55IC0gdGhpcy5oZWlnaHQgLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uRE9XTjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkgKyB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLlVQO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuVE9HR0xFX1RJTEVfTU9WRU1FTlQ6XHJcblx0XHRcdFx0XHR0aWxlcyA9IHRoaXMuc2NlbmUudGlsZU1hcC5nZXRUaWxlc1dpdGhpbldvcmxkWFkoXHJcblx0XHRcdFx0XHRcdHRoaXMueCxcclxuXHRcdFx0XHRcdFx0dGhpcy55LFxyXG5cdFx0XHRcdFx0XHR0aGlzLndpZHRoLFxyXG5cdFx0XHRcdFx0XHR0aGlzLmhlaWdodCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlzTm90RW1wdHk6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0VGlsZW1hcExheWVyLkZPUkVHUk9VTkRcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZGlydHkpIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnJlbW92ZVRpbGVBdCh0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS5pbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS54ICsgdmVsb2NpdHksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlsZXNbaV0ueVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy54ID0gdGhpcy54ICsgdGhpcy53aWR0aCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLlJJR0hUO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS5pbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS54IC0gdmVsb2NpdHksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlsZXNbaV0ueVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy54ID0gdGhpcy54IC0gdGhpcy53aWR0aCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLkxFRlQ7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5VUDpcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbGVzW2ldLmluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbGVzW2ldLngsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlsZXNbaV0ueSAtIHZlbG9jaXR5XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLmhlaWdodCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLkRPV047XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlsZXNbaV0uaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlsZXNbaV0ueCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWxlc1tpXS55ICsgdmVsb2NpdHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uVVA7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBtb3ZlZFRpbGVzID0gdGhpcy5zY2VuZS50aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcclxuXHRcdFx0XHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0XHRcdFx0dGhpcy55LFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMud2lkdGgsXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aXNOb3RFbXB0eTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0XHRUaWxlbWFwTGF5ZXIuRk9SRUdST1VORFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IG1vdmVkVGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucmVtb3ZlVGlsZUF0KG1vdmVkVGlsZXNbaV0ueCwgbW92ZWRUaWxlc1tpXS55KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMucmV2ZXJzZURpcmVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gbW92ZWRUaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0uaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS54ICsgdmVsb2NpdHksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS55XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnggPSB0aGlzLnggKyB0aGlzLndpZHRoICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBtb3ZlZFRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUudGlsZU1hcC5wdXRUaWxlQXQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS5pbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLnggLSB2ZWxvY2l0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLnlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMueCA9IHRoaXMueCAtIHRoaXMud2lkdGggLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLlVQOlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IG1vdmVkVGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS50aWxlTWFwLnB1dFRpbGVBdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLmluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0ueCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlZFRpbGVzW2ldLnkgLSB2ZWxvY2l0eVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy55ID0gdGhpcy55IC0gdGhpcy5oZWlnaHQgLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgRGlyZWN0aW9uLkRPV046XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gbW92ZWRUaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnRpbGVNYXAucHV0VGlsZUF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0uaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZWRUaWxlc1tpXS54LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVkVGlsZXNbaV0ueSArIHZlbG9jaXR5XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlNIT1dfVEVYVDpcclxuXHRcdFx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGV4dCk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5TSE9XX0lNQUdFOlxyXG5cdFx0XHRcdFx0c2hvd0ltYWdlTW9kYWwodGhpcy5zY2VuZSwgdGV4dHVyZUtleSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnNwYXduKSB7XHJcblx0XHRcdFx0c3dpdGNoICh0aGlzLnNwYXduLnR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgU3Bhd25UeXBlLk5QQzpcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGUgPT09IChBY3Rpb25UeXBlLlJFUExBQ0VfVElMRSB8fCBBY3Rpb25UeXBlLlRPR0dMRV9USUxFKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25OUEModGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIDUwLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduTlBDKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIsIHRoaXMuc3Bhd24pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBTcGF3blR5cGUuSVRFTTpcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGUgPT09IChBY3Rpb25UeXBlLlJFUExBQ0VfVElMRSB8fCBBY3Rpb25UeXBlLlRPR0dMRV9USUxFKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25JdGVtKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyA1MCwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bkl0ZW0odGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm5hdmlnYXRlVG8pIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLnJlbG9hZFJvb20odGhpcy5uYXZpZ2F0ZVRvKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAob25Db21wbGV0ZUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0b25Db21wbGV0ZUNhbGxiYWNrKGl0ZW1Vc2VkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXJlcGVhdCkge1xyXG5cdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjYW5FeGVjdXRlKGl0ZW0sIGRpcnR5T2JqZWN0TWFwKSB7XHJcblx0XHRpZiAodGhpcy5jb25zdHJhaW50cykge1xyXG5cdFx0XHRjb25zdCB7IGl0ZW1SZXF1aXJlZCwgcHJvbXB0UmVxdWlyZWQsIGRlcGVuZHNPbiB9ID0gdGhpcy5jb25zdHJhaW50cztcclxuXHRcdFx0aWYgKGl0ZW1SZXF1aXJlZCAmJiBpdGVtPy5uYW1lICE9PSBpdGVtUmVxdWlyZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAocHJvbXB0UmVxdWlyZWQpIHtcclxuXHRcdFx0XHRjb25zdCBhbnN3ZXIgPSB3aW5kb3cucHJvbXB0KHByb21wdFJlcXVpcmVkLnF1ZXN0aW9uKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhhbnN3ZXIpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHByb21wdFJlcXVpcmVkLmFuc3dlcik7XHJcblx0XHRcdFx0aWYgKGFuc3dlciAmJiBhbnN3ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvbXB0UmVxdWlyZWQuYW5zd2VyLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnb2VzIGhlcmUnKTtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGVwZW5kc09uKSB7XHJcblx0XHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0XHRkZXBlbmRzT24/LnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFkaXJ0eU9iamVjdE1hcC5oYXMobmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoIXZhbGlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0aXNEaXJ0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmRpcnR5O1xyXG5cdH1cclxuXHJcblx0c2V0RGlydHkoZGlydHkpIHtcclxuXHRcdHRoaXMuZGlydHkgPSBkaXJ0eTtcclxuXHR9XHJcblxyXG5cdHNldEFjdGlvbihhY3Rpb24pIHtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0Z2V0QWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0c2V0Q29uc3RyYWludHMoY29uc3RyYWludHMpIHtcclxuXHRcdHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcclxuXHR9XHJcblxyXG5cdGdldENvbnN0cmFpbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludHM7XHJcblx0fVxyXG5cclxuXHRzZXRTcGF3bihzcGF3bikge1xyXG5cdFx0dGhpcy5zcGF3biA9IHNwYXduO1xyXG5cdH1cclxuXHJcblx0Z2V0U3Bhd24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bjtcclxuXHR9XHJcblxyXG5cdHNldE5hdmlnYXRlVG8obmF2aWdhdGVUbykge1xyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvID0gbmF2aWdhdGVUbztcclxuXHR9XHJcblxyXG5cdGdldE5hdmlnYXRlVG8oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvO1xyXG5cdH1cclxuXHJcblx0c2V0Q29uc3RyYWludE1lc3NhZ2UoY29uc3RyYWludE1lc3NhZ2UpIHtcclxuXHRcdHRoaXMuY29uc3RyYWludE1lc3NhZ2UgPSBjb25zdHJhaW50TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldENvbnN0cmFpbnRNZXNzYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludE1lc3NhZ2U7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhZmUgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRjb21iaW5hdGlvbiA9IG51bGw7XHJcblx0cHJvbXB0TWVzc2FnZSA9IG51bGw7XHJcblx0b3BlbmVkID0gZmFsc2U7XHJcblx0c3Bhd25JdGVtID0gbnVsbDtcclxuXHRuYW1lID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBjb21iaW5hdGlvbiwgcHJvbXB0TWVzc2FnZSkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lKTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmNvbWJpbmF0aW9uID0gY29tYmluYXRpb247XHJcblx0XHR0aGlzLnByb21wdE1lc3NhZ2UgPSBwcm9tcHRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRzZXROYW1lKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXRDb21iaW5hdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbWJpbmF0aW9uO1xyXG5cdH1cclxuXHJcblx0c2V0Q29tYmluYXRpb24oY29tYmluYXRpb24pIHtcclxuXHRcdHRoaXMuY29tYmluYXRpb24gPSBjb21iaW5hdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldFByb21wdE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9tcHRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0c2V0UHJvbXB0TWVzc2FnZShtZXNzYWdlKSB7XHJcblx0XHR0aGlzLnByb21wdE1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldFNwYXduSXRlbShzcGF3bkl0ZW0pIHtcclxuXHRcdHRoaXMuc3Bhd25JdGVtID0gc3Bhd25JdGVtO1xyXG5cdH1cclxuXHJcblx0Z2V0U3Bhd25JdGVtKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3Bhd25JdGVtO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnSW52YWxpZEFyZ3VtZW50RXJyb3InXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9zY2VuZXMvR2FtZSc7XHJcbmltcG9ydCBHYW1lT3ZlclNjZW5lICBmcm9tICcuL3NjZW5lcy9HYW1lT3Zlcic7XHJcbmltcG9ydCBXaW5TY2VuZSBmcm9tICcuL3NjZW5lcy9XaW4nO1xyXG5pbXBvcnQgU3BsYXNoU2NlbmUgZnJvbSAnLi9zY2VuZXMvTWVudSc7XHJcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSAnLi9zY2VuZXMvTG9hZGluZyc7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblx0c2NhbGU6IHtcclxuXHRcdG1vZGU6IFBoYXNlci5TY2FsZS5GSVQsXHJcbiAgICAgICAgYXV0b0NlbnRlcjogUGhhc2VyLlNjYWxlLkNFTlRFUl9CT1RILFxyXG5cdFx0d2lkdGg6IDEwMjQsXHJcblx0XHRoZWlnaHQ6IDc2OFxyXG5cdH0sXHJcblx0cGh5c2ljczoge1xyXG5cdFx0ZGVmYXVsdDogJ2FyY2FkZScsXHJcblx0XHRhcmNhZGU6IHtcclxuXHRcdFx0ZGVidWc6IHRydWUsXHJcblx0XHRcdGdyYXZpdHk6IHsgeTogMjAwIH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHNjZW5lOiBbTG9hZGluZ1NjZW5lLCBTcGxhc2hTY2VuZSwgR2FtZVNjZW5lLCBHYW1lT3ZlclNjZW5lLCBXaW5TY2VuZV1cclxufTtcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgQ2hlc3QgZnJvbSAnLi4vZW50aXRpZXMvQ2hlc3QnO1xyXG5pbXBvcnQgU2FmZSBmcm9tICcuLi9lbnRpdGllcy9TYWZlJztcclxuaW1wb3J0IERvb3IgZnJvbSAnLi4vZW50aXRpZXMvRG9vcic7XHJcbmltcG9ydCBJbnRlcmFjdGl2ZVpvbmUgZnJvbSAnLi4vZW50aXRpZXMvSW50ZXJhY3RpdmVab25lJztcclxuaW1wb3J0IHsgc2hvd1RleHRNb2RhbCwgc2hvd0l0ZW1Nb2RhbCB9IGZyb20gJy4uL3V0aWxzL01vZGFsVXRpbHMnO1xyXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuLi91dGlscy9Bc3NlcnRVdGlscyc7XHJcblxyXG5pbXBvcnQgeyBDdXN0b21Qcm9wZXJ0eSwgVGlsZW1hcExheWVyLCBFbnRpdHlUeXBlLCBMb2FkZXJLZXksIEFuaW1hdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBUUkFOU0lUSU9OX0RFTEFZID0gNTAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRzaWducyA9IFtdO1xyXG5cdHNjcmFtYmxlZFNpZ25zID0gW107XHJcblx0ZG9vciA9IG51bGw7XHJcblx0Y2hlc3RzID0gW107XHJcblx0dGlsZU1hcCA9IG51bGw7XHJcblx0c2FmZXMgPSBbXTtcclxuXHRpdGVtcyA9IFtdO1xyXG5cdGl0ZW1JbWFnZXMgPSBbXTtcclxuXHRzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdHNlbGVjdGVkUmVjdGFuZ2xlID0gbnVsbDtcclxuXHRyb29tTmFtZSA9IG51bGw7XHJcblx0ZGlydHlPYmplY3RNYXAgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdnYW1lJyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmxvYWRSb29tKCdyb29tLW9uZScpO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb25zKCk7XHJcblx0XHR0aGlzLmNyZWF0ZUh1ZCgpO1xyXG5cdFx0dGhpcy5zdGFydFRpbWVyKDEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSHVkKCkge1xyXG5cdFx0Y29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoOTIwLCAyMCwgJ0l0ZW1zJywgeyBmb250U2l6ZTogJzIwcHgnLCBmb250RmFtaWx5OiAnVmVyZGFuYScgfSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVIdWQoKSB7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RlZFJlY3RhbmdsZSAmJiAhdGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pdGVtSW1hZ2VzKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5pdGVtSW1hZ2VzW2ldLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGl0ZW1JbWFnZSA9IHRoaXMuYWRkLmltYWdlKDk1MCwgaSAqIDUwICsgODAsIHRoaXMuaXRlbXNbaV0udGV4dHVyZUtleSwgdGhpcy5pdGVtc1tpXS50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0XHRpdGVtSW1hZ2Uuc2V0QWxwaGEoMCk7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRTY2FsZSgyKTtcclxuXHRcdFx0aXRlbUltYWdlLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRcdGl0ZW1JbWFnZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZSA9IHRoaXMuYWRkLnJlY3RhbmdsZShpdGVtSW1hZ2UueCwgaXRlbUltYWdlLnksIDUwLCA1MCk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5zZXRTdHJva2VTdHlsZSgzLCAweGZmZmZmZik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHRcdHRhcmdldHM6IGl0ZW1JbWFnZSxcclxuXHRcdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwLFxyXG5cdFx0XHRcdHJlcGVhdDogMCxcclxuXHRcdFx0XHR5b3lvOiBmYWxzZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5pdGVtSW1hZ2VzLnB1c2goaXRlbUltYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxvYWRSb29tKHJvb21OYW1lKSB7XHJcblx0XHRhc3NlcnQoIXJvb21OYW1lLCAnVGhlIHJvb21OYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0dGhpcy5yb29tTmFtZSA9IHJvb21OYW1lO1xyXG5cdFx0dGhpcy5kaXJ0eU9iamVjdE1hcCA9IG5ldyBNYXAoKTtcclxuXHRcdHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbihUUkFOU0lUSU9OX0RFTEFZLCAwLCAwLCAwKTtcclxuXHRcdHRoaXMudGlsZU1hcCA9IHRoaXMuY3JlYXRlVGlsZU1hcChyb29tTmFtZSk7XHJcblxyXG5cdFx0Y29uc3QgY2FzdGxlVGlsZXMgPSB0aGlzLmNyZWF0ZVRpbGVTZXQodGhpcy50aWxlTWFwLCAnY2FzdGxlLXRpbGVzJywgJ2Nhc3RsZS10aWxlcycpO1xyXG5cdFx0Y29uc3QgY3JlZXB5VGlsZXMgPSB0aGlzLmNyZWF0ZVRpbGVTZXQodGhpcy50aWxlTWFwLCAnY3JlZXB5LXRpbGVzJywgJ2NyZWVweS10aWxlcycpO1xyXG5cdFx0Y29uc3QgeyBvYmplY3RzTGF5ZXIsIGZvcmVncm91bmRMYXllciB9ID0gdGhpcy5nZXRUaWxlTWFwTGF5ZXJzKHRoaXMudGlsZU1hcCwgW2NyZWVweVRpbGVzLCBjYXN0bGVUaWxlc10pO1xyXG5cdFx0XHJcblx0XHR0aGlzLmxvYWRUaWxlTWFwT2JqZWN0cyhvYmplY3RzTGF5ZXIpO1xyXG5cclxuXHRcdGNvbnN0IHNjcmVlblRleHQgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRoaXMudGlsZU1hcCwgQ3VzdG9tUHJvcGVydHkuU0NSRUVOX1RFWFQpO1xyXG5cdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBzY3JlZW5UZXh0LCAnbGFyZ2UnKTtcclxuXHR9XHJcblxyXG5cdHJlbG9hZFJvb20ocm9vbUtleSkge1xyXG5cdFx0YXNzZXJ0KCFyb29tS2V5LCAnVGhlIHJvb21LZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHR0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KFRSQU5TSVRJT05fREVMQVksIDAsIDAsIDAsIChjYW1lcmEsIHByb2dyZXNzKSA9PiB7XHJcblx0XHRcdGlmIChwcm9ncmVzcyA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMubG9hZFJvb20ocm9vbUtleSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGlsZU1hcCh0aWxlTWFwS2V5KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBLZXksICdUaGUgdGlsZU1hcEtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHJldHVybiB0aGlzLm1ha2UudGlsZW1hcCh7IGtleTogdGlsZU1hcEtleSB9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRpbGVTZXQodGlsZU1hcCwgdGlsZVNldEtleSwgdGlsZVNldFRleHR1cmVLZXkpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0S2V5LCAnVGhlIHRpbGVTZXRLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXRpbGVTZXRUZXh0dXJlS2V5LCAnVGhlIHRpbGVTZXRUZXh0dXJlS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRpbGVNYXAuYWRkVGlsZXNldEltYWdlKHRpbGVTZXRLZXksIHRpbGVTZXRUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdGdldFRpbGVNYXBMYXllcnModGlsZU1hcCwgdGlsZVNldHMpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0cywgJ1RoZSB0aWxlU2V0cyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGJhY2tncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkJBQ0tHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IG9iamVjdHNMYXllciA9IHRpbGVNYXAuZ2V0T2JqZWN0TGF5ZXIoVGlsZW1hcExheWVyLk9CSkVDVFMpO1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZExheWVyLCBmb3JlZ3JvdW5kTGF5ZXIsIG9iamVjdHNMYXllciB9O1xyXG5cdH1cclxuXHJcblx0bG9hZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcikge1xyXG5cdFx0YXNzZXJ0KCFvYmplY3RzTGF5ZXIsICdUaGUgb2JqZWN0c0xheWVyIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgdGlsZU1hcE9iamVjdHMgPSBvYmplY3RzTGF5ZXIub2JqZWN0cztcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlTWFwT2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRzd2l0Y2ggKHRpbGVNYXBPYmplY3RzW2ldLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuSU5URVJBQ1RJVkVfWk9ORTpcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3RzW2ldKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5DSEVTVDpcclxuXHRcdFx0XHRcdHRoaXMuY2hlc3RzLnB1c2godGhpcy5jcmVhdGVDaGVzdCh0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLlNBRkU6XHJcblx0XHRcdFx0XHR0aGlzLnNhZmVzLnB1c2godGhpcy5jcmVhdGVTYWZlKHRpbGVNYXBPYmplY3RzW2ldKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuRE9PUjpcclxuXHRcdFx0XHRcdHRoaXMuZG9vciA9IHRoaXMuY3JlYXRlRG9vcih0aWxlTWFwT2JqZWN0c1tpXSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3Qgem9uZSA9IG5ldyBJbnRlcmFjdGl2ZVpvbmUoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC54LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LnksXHJcblx0XHRcdHRpbGVNYXBPYmplY3Qud2lkdGgsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QuaGVpZ2h0XHJcblx0XHQpO1xyXG5cdFx0em9uZS5zZXRBY3Rpb24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5BQ1RJT04pKTtcclxuXHRcdHpvbmUuc2V0Q29uc3RyYWludHModGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT05TVFJBSU5UUykpO1xyXG5cdFx0em9uZS5zZXRDb25zdHJhaW50TWVzc2FnZSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkNPTlNUUkFJTlRfTUVTU0FHRSkpO1xyXG5cdFx0em9uZS5zZXROYXZpZ2F0ZVRvKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkFWSUdBVEVfVE8pKTtcclxuXHRcdHpvbmUuc2V0U3Bhd24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTikpO1xyXG5cclxuXHRcdGNvbnN0IGV2ZW50cyA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuRVZFTlRTKTtcclxuXHJcblx0XHRpZiAoZXZlbnRzKSB7XHJcblx0XHRcdGNvbnN0IHsgbGlzdGVuVG8sIGVtaXQgfSA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuRVZFTlRTKTtcclxuXHJcblx0XHRcdGlmIChsaXN0ZW5Ubykge1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRzLm9uKGxpc3RlblRvLCAoKSA9PiB7XHJcblx0XHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHpvbmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoaXRlbVVzZWQpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGl0ZW1Vc2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbT8ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoem9uZS5pc0RpcnR5KCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldCh6b25lLm5hbWUsIHpvbmUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuZGVsZXRlKHpvbmUubmFtZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGVtaXQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGVtaXQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0em9uZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoaXRlbVVzZWQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtVXNlZCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtPy5uYW1lID09PSB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHpvbmUuaXNEaXJ0eSgpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHpvbmUubmFtZSwgem9uZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLmRlbGV0ZSh6b25lLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNhZmUodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBzYWZlID0gbmV3IFNhZmUoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuU0FGRSxcclxuXHRcdFx0MTIsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT01CSU5BVElPTiksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuUFJPTVBUX01FU1NBR0UpXHJcblx0XHQpO1xyXG5cdFx0c2FmZS5zZXRTcGF3bkl0ZW0odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNKSk7XHJcblx0XHRzYWZlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aWYgKCFzYWZlLmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHRjb25zdCBhbnN3ZXIgPSB3aW5kb3cucHJvbXB0KHNhZmUuZ2V0UHJvbXB0TWVzc2FnZSgpKTtcclxuXHRcdFx0XHRpZiAoYW5zd2VyICYmIGFuc3dlci50b0xvY2FsZVVwcGVyQ2FzZSgpID09PSBzYWZlLmdldENvbWJpbmF0aW9uKCkudG9Mb2NhbGVVcHBlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0c2FmZS5wbGF5KEFuaW1hdGlvbi5TQUZFX09QRU4pO1xyXG5cdFx0XHRcdFx0c2FmZS5zZXRPcGVuZWQodHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNwYXduSXRlbShzYWZlLngsIHNhZmUueSArIHNhZmUuaGVpZ2h0LCBzYWZlLmdldFNwYXduSXRlbSgpKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHNhZmUubmFtZSwgc2FmZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzYWZlO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRG9vcih0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGRvb3IgPSBuZXcgRG9vcihcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC54LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LnksXHJcblx0XHRcdExvYWRlcktleS5ET09SLFxyXG5cdFx0XHQxMCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTE9DS0VEX01FU1NBR0UpXHJcblx0XHQpO1xyXG5cdFx0ZG9vci5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGlmIChkb29yLmlzTG9ja2VkKCkpIHtcclxuXHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIGRvb3IuZ2V0TG9ja2VkTWVzc2FnZSgpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkb29yLnBsYXkoQW5pbWF0aW9uLkRPT1JfT1BFTik7XHJcblx0XHRcdFx0ZG9vci5zZXRPcGVuZWQodHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoZG9vci5uYW1lLCBkb29yKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZG9vcjtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNoZXN0KHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgY2hlc3QgPSBuZXcgQ2hlc3QoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuQ0hFU1QsXHJcblx0XHRcdG51bGwsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRUQpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGNoZXN0LnNldFNwYXduSXRlbSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU0pKTtcclxuXHRcdGNoZXN0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aWYgKGNoZXN0LmlzTG9ja2VkKCkpIHtcclxuXHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIGNoZXN0LmxvY2tlZE1lc3NhZ2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICghY2hlc3QuaXNPcGVuZWQoKSkge1xyXG5cdFx0XHRcdFx0Y2hlc3QucGxheShBbmltYXRpb24uQ0hFU1RfT1BFTik7XHJcblx0XHRcdFx0XHRjaGVzdC5zZXRPcGVuZWQodHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNwYXduSXRlbShjaGVzdC54LCBjaGVzdC55ICsgY2hlc3QuaGVpZ2h0ICsgNSwgY2hlc3QuZ2V0U3Bhd25JdGVtKCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoY2hlc3QubmFtZSwgY2hlc3QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gY2hlc3Q7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBbmltYXRpb25zKCkge1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLlNBRkVfT1BFTiwgTG9hZGVyS2V5LlNBRkUsIFsxM10sIDQpO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLkRPT1JfT1BFTiwgTG9hZGVyS2V5LkRPT1IsIFs1LCAwXSwgNCk7XHJcblx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbihBbmltYXRpb24uQ0hFU1RfT1BFTiwgTG9hZGVyS2V5LkNIRVNULCBbMV0sIDgsIC0xKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUFuaW1hdGlvbihrZXksIHRleHR1cmUsIGZyYW1lcywgZnJhbWVSYXRlLCByZXBlYXQpIHtcclxuXHRcdHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0a2V5LFxyXG5cdFx0XHRmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnModGV4dHVyZSwgeyBmcmFtZXMgfSksXHJcblx0XHRcdGZyYW1lUmF0ZSxcclxuXHRcdFx0cmVwZWF0XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBuYW1lKSB7XHJcblx0XHRhc3NlcnQoIXNwYXduT2JqZWN0LCAnVGhlIHNwYXduT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFuYW1lLCAnVGhlIG5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRsZXQgcHJvcGVydHkgPSBudWxsO1xyXG5cdFx0aWYgKHNwYXduT2JqZWN0KSB7XHJcblx0XHRcdHByb3BlcnR5ID0gc3Bhd25PYmplY3QucHJvcGVydGllcy5maW5kKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkubmFtZSA9PT0gbmFtZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJvcGVydHk/LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c3Bhd25JdGVtKHgsIHksIGl0ZW0pIHtcclxuXHRcdGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIWl0ZW0sICdUaGUgaXRlbSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGl0ZW1JbWFnZSA9IHRoaXMuYWRkLmltYWdlKHgsIHksIGl0ZW0udGV4dHVyZUtleSwgaXRlbS50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0aXRlbUltYWdlLnNldFNjYWxlKDIpO1xyXG5cdFx0aXRlbUltYWdlLnNldEFscGhhKDApO1xyXG5cdFx0aXRlbUltYWdlLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRpdGVtSW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpdGVtSW1hZ2UuZGVzdHJveSgpO1xyXG5cdFx0XHRzaG93SXRlbU1vZGFsKHRoaXMsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0udGV4dHVyZUtleSwgaXRlbS50ZXh0dXJlRnJhbWUsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLml0ZW1zLnB1c2goe1xyXG5cdFx0XHRcdFx0bmFtZTogaXRlbS5uYW1lLFxyXG5cdFx0XHRcdFx0dGV4dHVyZUtleTogaXRlbS50ZXh0dXJlS2V5LFxyXG5cdFx0XHRcdFx0dGV4dHVyZUZyYW1lOiBpdGVtLnRleHR1cmVGcmFtZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHR0YXJnZXRzOiBpdGVtSW1hZ2UsXHJcblx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0ZHVyYXRpb246IDIwMFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzcGF3bk5QQyh4LCB5LCBucGMpIHtcclxuXHRcdGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIW5wYywgJ1RoZSBucGMgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBucGNTcHJpdGUgPSB0aGlzLmFkZC5zcHJpdGUoeCwgeSwgbnBjLnRleHR1cmVLZXksIG5wYy50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0bnBjU3ByaXRlLnNldFNjYWxlKDIpO1xyXG5cdFx0bnBjU3ByaXRlLnNldEFscGhhKDApO1xyXG5cdFx0bnBjU3ByaXRlLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHRucGNTcHJpdGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIG5wYy5kZXNjcmlwdGlvbik7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG5wY1Nwcml0ZSxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRkdXJhdGlvbjogMjAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlzSXRlbVNlbGVjdGVkKG5hbWUpIHtcclxuXHRcdGFzc2VydCghbmFtZSwgJ1RoZSBuYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lID09PSBuYW1lO1xyXG5cdH1cclxuXHJcblx0c3RhcnRUaW1lcihudW1iZXJPZkhvdXJzKSB7XHJcblx0XHRhc3NlcnQoIW51bWJlck9mSG91cnMsICdUaGUgbnVtYmVyT2ZIb3VycyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuXHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKG5vdyArIG51bWJlck9mSG91cnMgKiA2MCAqIDYwICogMTAwMCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzVGltZUVsYXBzZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0dGhpcy50aW1lUmVtYWluaW5nID0gdGhpcy5jb3VudERvd25EYXRlIC0gbm93O1xyXG5cdFx0XHRcdGlmIChub3cgPj0gdGhpcy5jb3VudERvd25EYXRlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZVRpbWUoKSB7XHJcblx0XHRpZiAodGhpcy50aW1lVGV4dCkge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGhvdXJzUmVtYWluaW5nID0gTWF0aC5mbG9vcigodGhpcy50aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG5cdFx0Y29uc3QgbWludXRlc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG5cdFx0Y29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cdFx0aWYgKHRoaXMudGltZVJlbWFpbmluZykge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0ID0gdGhpcy5hZGQudGV4dCg5MTUsIDczMCwgYCR7aG91cnNSZW1haW5pbmd9OiR7bWludXRlc1JlbWFpbmluZ306JHtzZWNvbmRzUmVtYWluaW5nfWAsIHtcclxuXHRcdFx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJyxcclxuXHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnVwZGF0ZVRpbWUoKTtcclxuXHRcdGlmICh0aGlzLmlzVGltZUVsYXBzZWQpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnZ2FtZW92ZXInKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2dhbWVvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDUxMiwgMzg0LCAnR2FtZSBvdmVyJywge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzIycHgnLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdsb2FkaW5nJyk7XHJcblx0fVxyXG5cclxuXHRwcmVsb2FkKCkge1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tb25lJywgJ2Fzc2V0cy9qc29uL3Jvb20tb25lLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS10d28nLCAnYXNzZXRzL2pzb24vcm9vbS10d28tbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXRocmVlJywgJ2Fzc2V0cy9qc29uL3Jvb20tdGhyZWUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLWZvdXInLCAnYXNzZXRzL2pzb24vcm9vbS1mb3VyLW1hcC5qc29uJyk7XHJcblx0XHRcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnY2FzdGxlLXRpbGVzJywgJ2Fzc2V0cy9pbWcvY2FzdGxlLXRpbGVzL1RpbGVzZXQucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ2NyZWVweS10aWxlcycsICdhc3NldHMvaW1nL3RpbGVzLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKExvYWRlcktleS5NRU5VX0lNQUdFLCAnYXNzZXRzL2ltZy9jYXN0bGUucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2R1bmdlb24tY3Jhd2wnLCAnYXNzZXRzL2ltZy9kdW5nZW9uLWNyYXdsLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuSVRFTVMsICdhc3NldHMvaW1nL2l0ZW1zLnBuZycsIHsgZnJhbWVXaWR0aDogMTYsIGZyYW1lSGVpZ2h0OiAxNiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuVUksICdhc3NldHMvaW1nL3VpLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAxMyB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuQ0hFU1QsICdhc3NldHMvaW1nL2NoZXN0LnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuRE9PUiwgJ2Fzc2V0cy9pbWcvZG9vci5wbmcnLCB7IGZyYW1lV2lkdGg6IDI0LCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LlNBRkUsICdhc3NldHMvaW1nL3NhZmUucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDQwIH0pO1xyXG5cclxuXHRcdHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ21lbnUnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ21lbnUnKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgwLCAwLCBMb2FkZXJLZXkuTUVOVV9JTUFHRSkuc2V0T3JpZ2luKDApLnNldFNjYWxlKDAuOCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoMzUwLCAzODQsICdFc2NhcGUgZnJvbSB0aGUgY2FzdGxlJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzMycHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IGNsaWNrVG9Db250aW51ZSA9IHRoaXMuYWRkLnRleHQoNTEyLCA0NjAsICdDbGljayB0byBzdGFydCB0aGUgZ2FtZScsIHtcclxuXHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcblx0XHR9KTtcclxuXHRcdGNsaWNrVG9Db250aW51ZS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0aWYgKHRoaXMuaW5wdXQubWFuYWdlci5hY3RpdmVQb2ludGVyLmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdnYW1lJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbm5pbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0NvbmdyYXR1bGF0aW9ucyBmb3IgZXNjYXBpbmc/IFRoYW5rIHlvdSBmb3IgcGxheWluZyEnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgSW52YWxpZEFyZ3VtZW50RXJyb3IgZnJvbSAnLi4vZXJyb3JzL0ludmFsaWRhQXJndW1lbnRFcnJvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xyXG5cdGlmIChjb25kaXRpb24pIHtcclxuXHRcdHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihtZXNzYWdlKTtcclxuXHR9XHJcbn07IiwiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi4vdXRpbHMvQXNzZXJ0VXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUZXh0TW9kYWwoc2NlbmUsIHRleHQsIHNpemUgPSAnbm9ybWFsJywgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCF0ZXh0LCAnVGhlIHRleHQgaXMgdW5kZWZpbmVkJyk7XHJcblx0Y29uc3QgYmxvY2tlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgc2NlbmUuc2NhbGUud2lkdGgsIHNjZW5lLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0Y29uc3QgbW9kYWwgPSBzY2VuZS5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRsZXQgYm94ID0gbnVsbDtcclxuXHRsZXQgY2xvc2VUZXh0ID0gbnVsbDtcclxuXHJcblx0c3dpdGNoIChzaXplKSB7XHJcblx0XHRjYXNlICdub3JtYWwnOlxyXG5cdFx0XHRib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDQ1MCwgMTUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdFx0XHRjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdFx0XHQudGV4dCgxNTUsIC02OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdsYXJnZSc6XHJcblx0XHRcdGNsb3NlVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0XHRcdC50ZXh0KDE1NSwgLTE2OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdFx0Ym94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDM1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cdGNvbnN0IHRleHRPYmogPSBzY2VuZS5hZGRcclxuXHRcdC50ZXh0KDAsIDAsIHRleHQsIHtcclxuXHRcdFx0d29yZFdyYXA6IHtcclxuXHRcdFx0XHR3aWR0aDogNDAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdGFscGhhOiAxLFxyXG5cdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRkdXJhdGlvbjogMjAwXHJcblx0fSk7XHJcblx0bW9kYWwuYWRkKFtib3gsIHRleHRPYmosIGNsb3NlVGV4dF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0ltYWdlTW9kYWwoc2NlbmUsIGltYWdlS2V5LCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0YXNzZXJ0KCFzY2VuZSwgJ1RoZSBzY2VuZSBpcyB1bmRlZmluZWQnKTtcclxuXHRhc3NlcnQoIWltYWdlS2V5LCAnVGhlIGltYWdlS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0Y29uc3QgYm94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDM1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRjb25zdCBpbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAwLCBpbWFnZUtleSkuc2V0T3JpZ2luKDAuNSk7XHJcblx0aW1hZ2Uuc2V0RGlzcGxheVNpemUoYm94LndpZHRoIC0gNjAsIGJveC5oZWlnaHQgLSA2MCk7XHJcblxyXG5cdGNvbnN0IGNsb3NlVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0LnRleHQoMTU1LCAtMTY5LCAnQ2xvc2UgWCcsIHtcclxuXHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdH0pXHJcblx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRzY2VuZS50d2VlbnMuYWRkKHtcclxuXHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0YWxwaGE6IDEsXHJcblx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdGR1cmF0aW9uOiAyMDBcclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkKFtib3gsIGltYWdlLCBjbG9zZVRleHRdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJdGVtTW9kYWwoc2NlbmUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCFpdGVtRGVzY3JpcHRpb24sICdUaGUgaXRlbURlc2NyaXB0aW9uIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0Y29uc3QgYm94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDE1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRjb25zdCBjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdC50ZXh0KDE1NSwgLTY5LCAnQ2xvc2UgWCcsIHtcclxuXHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0Zm9udEZhbWlseTogJ3ZlcmRhbmEnLFxyXG5cdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdH0pXHJcblx0XHQuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcblx0Y29uc3QgaXRlbUltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIC0xMCwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSkuc2V0U2NhbGUoMi41KTtcclxuXHRjb25zdCBpdGVtRGVzY3JpcHRpb25UZXh0ID0gc2NlbmUuYWRkXHJcblx0XHQudGV4dCgwLCAzMCwgaXRlbURlc2NyaXB0aW9uLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGQoW2JveCwgaXRlbUltYWdlLCBpdGVtRGVzY3JpcHRpb25UZXh0LCBjbG9zZVRleHRdKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fZHJhY3VsYV9jYXN0bGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fZHJhY3VsYV9jYXN0bGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9