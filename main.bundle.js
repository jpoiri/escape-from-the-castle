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
/* harmony export */   Rotation: () => (/* binding */ Rotation),
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
	MODAL_SIZE: 'modalSize',
	TIME_PENALITY: 'timePenality',
	TIME_PENALITY_MESSAGE: 'timePenalityMessage',
	AUDIO_CLIP_KEY: 'audioClipKey'
};

const ActionType = {
	MOVE_TILE: 'MOVE_TILE',
	TOGGLE_TILE_MOVEMENT: 'TOGGLE_TILE_MOVEMENT',
	DESTROY_TILE: 'DESTROY_TILE',
	REPLACE_TILE: 'REPLACE_TILE',
	TOGGLE_TILE: 'TOGGLE_TILE',
	SHOW_TEXT: 'SHOW_TEXT',
	SHOW_IMAGE: 'SHOW_IMAGE',
	DESTROY: 'DESTROY',
	ROTATE_TILE: 'ROTATE_TILE'
};

const SpawnType = {
	ITEM: 'ITEM',
	NPC: 'NPC'
};

const Direction = {
	LEFT: 'LEFT',
	RIGHT: 'RIGHT',
	UP: 'UP',
	DOWN: 'DOWN'
};

const Rotation = {
	ROTATE_90: '90',
	ROTATE_180: '180',
	ROTATE_270: '270'
};

const ModalSize = {
	REGULAR: 'REGULAR',
	LARGE: 'LARGE'
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
	TEXT: 'Text',
	INTERACTIVE_ZONE: 'InteractiveZone'
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
/* harmony import */ var _utils_assert_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/assert-utils */ "./src/utils/assert-utils.js");
/* harmony import */ var _utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tilemap-utils */ "./src/utils/tilemap-utils.js");
/* harmony import */ var _utils_modal_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/modal-utils */ "./src/utils/modal-utils.js");






/**
 * This class represents an InteractionZone in the escape room
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.GameObjects.Rectangle
 */
class InteractiveZone extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Rectangle {
	action = null;
	constraints = null;
	spawn = null;
	navigateTo = null;
	constraintMessage = null;
	timePenality = 0;
	timePenalityMessage = null; 
	audioClipKey
	dirty = false;
	name = null;

	/**
	 * Constructor
	 * @param {Phaser.Scene} scene The Phaser scene
	 * @param {string} name The name associated with this zone
	 * @param {number} x The zone x coordinate
	 * @param {number} y The zone y coordinate
	 * @param {number} width The zone width
	 * @param {number} height The zone height
	 */
	constructor(scene, name, x, y, width, height) {
		super(scene, x, y, width, height);
		this.name = name;
		this.setOrigin(0, 0);
		this.setInteractive({
			useHandCursor: true
		});
		scene.add.existing(this);
	}

	/**
	 * Execute the action associated with the zone
	 * @param {Object} item The item used on the zone
	 * @param {Map} dirtyObjectMap The map of dirty objects
	 * @param {Function} onCompleteCallback The function to call when action is completed.
	 */
	executeAction(item, dirtyObjectMap, onCompleteCallback) {
		let itemUsed = false;
		let tiles = null;
		if (!this.canExecute(item, dirtyObjectMap)) {
			if (this.constraintMessage) {
				(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_4__.showTextModal)(this.scene, this.constraintMessage);
			}
		} else {
			let { type, velocity, newTiles, direction, text, textureKey, repeat } = this.action;

			newTiles = newTiles?.split(',').map((s) => {
				return parseInt(s, 10);
			});

			switch (type) {
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE:
					tiles = (0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.getTilesWithinWorldXY)(this.scene.tileMap, this.x, this.y, this.width, this.height);
					(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.replaceTiles)(this.scene.tileMap, tiles, newTiles);
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE:
					tiles = (0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.getTilesWithinWorldXY)(this.scene.tileMap, this.x, this.y, this.width, this.height);
					if (!this.dirty) {
						this.previousTiles = tiles.map((t) => t.index);
						(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.replaceTiles)(this.scene.tileMap, tiles, newTiles);
						this.dirty = true;
					} else {
						(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.replaceTiles)(this.scene.tileMap, tiles, this.previousTiles);
						this.previousTiles = null;
						this.dirty = false;
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.DESTROY_TILE:
					tiles = (0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.getTilesWithinWorldXY)(this.scene.tileMap, this.x, this.y, this.width, this.height);
					(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.removeTiles)(this.scene.tileMap, tiles);
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.MOVE_TILE:
					tiles = (0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.getTilesWithinWorldXY)(this.scene.tileMap, this.x, this.y, this.width, this.height);
					(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.removeTiles)(this.scene.tileMap, tiles);
					(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.moveTiles)(this.scene.tileMap, tiles, direction, velocity);
					this.move(direction, velocity);
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE_MOVEMENT:
					tiles = (0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.getTilesWithinWorldXY)(this.scene.tileMap, this.x, this.y, this.width, this.height);
					if (!this.dirty) {
						(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.removeTiles)(this.scene.tileMap, tiles);
						(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.moveTiles)(this.scene.tileMap, tiles, direction, velocity);
						this.move(direction, velocity);
						this.dirty = true;
					} else {
						const movedTiles = (0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.getTilesWithinWorldXY)(this.scene.tileMap, this.x, this.y, this.width, this.height);
						(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.removeTiles)(this.scene.tileMap, movedTiles);
						(0,_utils_tilemap_utils__WEBPACK_IMPORTED_MODULE_3__.moveTiles)(this.scene.tileMap, tiles, this.reverseDirection, velocity);
						this.move(this.reverseDirection, velocity);
						this.dirty = false;
					}
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_TEXT:
					(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_4__.showTextModal)(this.scene, text);
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_IMAGE:
					(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_4__.showImageModal)(this.scene, textureKey);
					this.dirty = true;
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.DESTROY: {
					this.destroy();
					this.dirty = true;
					break;
				}
			}
			if (this.spawn) {
				this.spawnObject(this.spawn, type);
			}
			if (this.navigateTo) {
				this.scene.changeRoom(this.navigateTo);
			}
			if (this.timePenality) {
				this.scene.addTimePenality(this.timePenality);
				if (this.timePenalityMessage) {
					(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_4__.showTextModal)(this.scene, this.timePenalityMessage);
				}
			}
			if (this.audioClipKey) {
				this.scene.sound.play(this.audioClipKey);
			}
			if (onCompleteCallback) {
				onCompleteCallback(this.isItemUsed(item));
			}
			if (!repeat && this.active) {
				this.destroy();
			}
		}
	}

	/**
	 * Spawn a item or NPC
	 * @param {Object} spawn The spawn object associated with the zone
	 * @param {string} actionType The action type
	 */
	spawnObject(spawn, actionType) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_2__.assert)(!spawn, 'The spawn is undefined');
		switch (spawn.type) {
			case _constants__WEBPACK_IMPORTED_MODULE_1__.SpawnType.NPC:
				if (actionType === (_constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE || _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE)) {
					this.scene.spawnNPC(this.x + this.width / 2, this.y + 50, this.spawn);
				} else {
					this.scene.spawnNPC(this.x + this.width / 2, this.y + this.height / 2, this.spawn);
				}
				break;
			case _constants__WEBPACK_IMPORTED_MODULE_1__.SpawnType.ITEM:
				if (actionType === (_constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.REPLACE_TILE || _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TOGGLE_TILE)) {
					this.scene.spawnItem(this.x + this.width / 2, this.y + 50, this.spawn);
				} else {
					this.scene.spawnItem(this.x + this.width / 2, this.y + this.height / 2, this.spawn);
				}
				break;
		}
	}

	/**
	 * Return true if the item was used, otherwise returns false.
	 * @param {Object} item
	 * @returns {boolean}
	 */
	isItemUsed(item) {
		if (this.constraints && item) {
			const { itemRequired } = this.constraints;
			if (itemRequired && item?.name === itemRequired) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Move zone for given direction and velocity
	 * @param {string} direction The direction to move the zone
	 * @param {number} velocity The velocity to move the zone
	 */
	move(direction, velocity) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_2__.assert)(!direction, 'The direction is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_2__.assert)(!velocity, 'The velocity is undefined');
		switch (direction) {
			case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT:
				this.x = this.x - this.width - velocity;
				this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT;
				break;
			case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
				this.x = this.x + this.width + velocity;
				this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT;
				break;
			case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP:
				this.y = this.y - this.height - velocity;
				this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN;
				break;
			case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN:
				this.y = this.y + this.height + velocity;
				this.reverseDirection = _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP;
				break;
		}
	}

	/**
	 * Set cursor for zone
	 * @param {boolean} isItemSelected
	 */
	setCursor(isItemSelected) {
		if (isItemSelected && this.input) {
			this.input.cursor = 'grabbing';
		} else if (this.input) {
			if (this.action?.type === _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_TEXT || this.action?.type === _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.SHOW_IMAGE) {
				this.input.cursor = 'zoom-in';
			} else {
				this.input.cursor = 'pointer';
			}
		}
	}

	/**
	 * Check whether the action can be executed
	 * @param {Object} item The item use with the zone
	 * @param {Map} dirtyObjectMap The dirty object map
	 * @returns {boolean}
	 */
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

	/**
	 * Returns the name
	 * @returns {string}
	 */
	getName() {
		return this.name;
	}

	/**
	 * Sets the name
	 * @param {string} name The name
	 */
	setName(name) {
		this.name = name;
	}

	/**
	 * Returns true if zone is dirty
	 * @returns {boolean}
	 */
	isDirty() {
		return this.dirty;
	}

	/**
	 * Set whether the zone is dirty
	 * @param {boolean} dirty Whether zone is dirty
	 */
	setDirty(dirty) {
		this.dirty = dirty;
	}

	/**
	 * Sets the action object
	 * @param {Object} action The action object
	 */
	setAction(action) {
		this.action = action;
	}

	/**
	 * Returns the action object
	 * @returns {Object}
	 */
	getAction() {
		return this.action;
	}

	/**
	 * Sets the constraints object
	 * @param {Object} constraints The constraint object
	 */
	setConstraints(constraints) {
		this.constraints = constraints;
	}

	/**
	 * Returns the constraints object
	 * @returns {Object}
	 */
	getConstraints() {
		return this.constraints;
	}

	/**
	 * Sets the spawn object
	 * @param {Object} spawn The spawn object
	 */
	setSpawn(spawn) {
		this.spawn = spawn;
	}

	/**
	 * Returns the spawn object
	 * @returns {Object}
	 */
	getSpawn() {
		return this.spawn;
	}

	/**
	 * Sets the room where to navigate next
	 * @param {string} navigateTo The room where to navigate next
	 */
	setNavigateTo(navigateTo) {
		this.navigateTo = navigateTo;
	}

	/**
	 * Returns the room where to navigate next
	 * @returns {string}
	 */
	getNavigateTo() {
		return this.navigateTo;
	}

	/**
	 * Sets the constraint message
	 * @param {string} constraintMessage The constraint message
	 */
	setConstraintMessage(constraintMessage) {
		this.constraintMessage = constraintMessage;
	}

	/**
	 * Returns the constraint message
	 * @returns {string}
	 */
	getConstraintMessage() {
		return this.constraintMessage;
	}

	/**
	 * Sets the time penality
	 * @param {number} timePenality The time penality
	 */
	setTimePenality(timePenality) {
		this.timePenality = timePenality;
	}

	/**
	 * Returns the time penality
	 * @returns {number}
	 */
	getTimePenality() {
		return this.timePenality;
	}

	/**
	 * Sets the time penality message
	 * @param {string} timePenalityMessage The time penality messsage
	 */
	setTimePenalityMessage(timePenalityMessage) {
		this.timePenalityMessage = timePenalityMessage;
	}

	/**
	 * Returns the time penality message
	 * @returns {string}
	 */
	getTimePenalityMessage() {
		return this.timePenalityMessage;
	}

	/**
	 * Sets the audio clip key
	 * @param {string} audioClipKey The audio clip key
	 */
	setAudioClipKey(audioClipKey) {
		this.audioClipKey = audioClipKey
	}

	/**
	 * Returns the audio clip key
	 * @returns {string}
	 */
	getAudioClipKey() {
		return this.audioClipKey
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
/**
 * This class represents an invalid argument error
 * @extends Error
 * @author Justin Poirier
 * @copyright 2025
 */
class InvalidArgumentError extends Error {
    /**
     * Constructor
     * @param {string} message The error message 
     */
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
/* harmony import */ var _utils_modal_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/modal-utils */ "./src/utils/modal-utils.js");
/* harmony import */ var _utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/assert-utils */ "./src/utils/assert-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/constants.js");










const TRANSITION_DELAY = 500;
const NUMBER_OF_MINUTES = 60;
const NUMBER_OF_SECONDS = 60;
const NUMBER_OF_HOURS = 24;
const NUMBER_OF_MILLISECONDS = 1000;

/**
 * This class holds the code the game scene.
 * @extends Phaser.Scene
 * @author Justin Poirier
 * @copyright 2025
 */
class GameScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
	door = null;
	chests = [];
	tileMap = null;
	zones = [];
	safes = [];
	items = [];
	itemImages = [];
	selectedItem = null;
	selectedRectangle = null;
	roomName = null;
	dirtyObjectMap = null;

	/**
	 * Constructor
	 */
	constructor() {
		super('game');
	}

	/**
	 * Create hook that is run once when the scene starts
	 */
	create() {
		this.loadRoom('room-one');
		this.createAnimations();
		this.addHud();
		this.startTimer(1);
	}

	/**
	 * Add HUD to the game scene
	 */
	addHud() {
		const text = this.add.text(920, 20, 'Items', { fontSize: '20px', fontFamily: 'Verdana' });
	}

	/**
	 * Update the HUD
	 */
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
			itemImage.setInteractive({
				cursor: 'grab'
			});
			itemImage.on('pointerdown', () => {
				if (this.selectedRectangle) {
					this.selectedRectangle.destroy();
				}
				if (this.pointerItem) {
					this.pointerItem.destroy();
					this.pointerItem = null;
				}
				this.setCursor(true);
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

	/**
	 * Set cursor
	 * @param {boolean} isItemSelected Whether the item is selected.
	 */
	setCursor(isItemSelected) {
		if (isItemSelected) {
			this.input.setDefaultCursor('grabbing');
		} else {
			this.input.setDefaultCursor('default');
		}
		this.zones.forEach((zone) => {
			zone.setCursor(isItemSelected);
		});
	}

	/**
	 * Load room on the game scene
	 * @param {string} roomName The room name
	 */
	loadRoom(roomName) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!roomName, 'The roomName is undefined');
		this.roomName = roomName;
		this.dirtyObjectMap = new Map();
		this.cameras.main.fadeIn(TRANSITION_DELAY, 0, 0, 0);
		this.tileMap = this.createTileMap(roomName);

		const castleTiles = this.addTileSet(this.tileMap, 'castle-tiles', 'castle-tiles');
		const creepyTiles = this.addTileSet(this.tileMap, 'creepy-tiles', 'creepy-tiles');
		const containers = this.addTileSet(this.tileMap, 'containers', 'containers');
		const { objectsLayer, foregroundLayer } = this.getTileMapLayers(this.tileMap, [creepyTiles, castleTiles, containers]);

		this.addTileMapObjects(objectsLayer);

		const screenText = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.SCREEN_TEXT);
		const modalSize = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.MODAL_SIZE);
		(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, screenText, modalSize);
	}

	/**
	 * Change room loaded on the game scene
	 * @param {String} roomName The game scene.
	 */
	changeRoom(roomName) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!roomName, 'The roomName is undefined');
		this.cameras.main.fadeOut(TRANSITION_DELAY, 0, 0, 0, (camera, progress) => {
			if (progress === 1) {
				this.loadRoom(roomName);
			}
		});
	}

	/**
	 * Create a Phaser.Tilemaps.Tilemap object
	 * @param {string} tileMapKey The key of the tile map.
	 * @returns {Phaser.Tilemaps.Tilemap}
	 */
	createTileMap(tileMapKey) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapKey, 'The tileMapKey is undefined');
		return this.make.tilemap({ key: tileMapKey });
	}

	/**
	 * Add tile set image to the Phaser.Tilemaps.Tilemap object
	 * @param {Phaser.Tilemaps.Tilemap} tileMap The tile map
	 * @param {string} tileSetKey The tile set key
	 * @param {string} imageTextureKey The image texture key
	 */
	addTileSet(tileMap, tileSetKey, imageTextureKey) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMap, 'The tileMap is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileSetKey, 'The tileSetKey is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!imageTextureKey, 'The tileSetTextureKey is undefined');
		return tileMap.addTilesetImage(tileSetKey, imageTextureKey);
	}

	/**
	 * Returns the tile map layers associated with the tile map
	 * @param {Phaser.Tilemaps.Tilemap} tileMap The tile map
	 * @param {Array} tileSets
	 */
	getTileMapLayers(tileMap, tileSets) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMap, 'The tileMap is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileSets, 'The tileSets is undefined');
		const backgroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_7__.TilemapLayer.BACKGROUND, tileSets);
		const foregroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_7__.TilemapLayer.FOREGROUND, tileSets);
		const objectsLayer = tileMap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_7__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	/**
	 * Add Tile map objects to the game scene.
	 * @param {Phaser.Tilemaps.ObjectLayer} objectsLayer The objects layer
	 */
	addTileMapObjects(objectsLayer) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!objectsLayer, 'The objectsLayer is undefined');
		const tileMapObjects = objectsLayer.objects;
		for (let i = 0, len = tileMapObjects.length; i < len; i++) {
			switch (tileMapObjects[i].type) {
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.INTERACTIVE_ZONE:
					this.zones.push(this.addInteractiveZone(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.CHEST:
					this.chests.push(this.addChest(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.SAFE:
					this.safes.push(this.addSafe(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.DOOR:
					this.door = this.addDoor(tileMapObjects[i]);
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_7__.EntityType.TEXT:
					this.addText(tileMapObjects[i]);
			}
		}
	}

	/**
	 * Get custom property from a tile map object
	 * @param {*} tileMapObject The tile map object
	 * @param {*} propertyName The property name
	 */
	getCustomProperty(tileMapObject, propertyName) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!propertyName, 'The propertyName is undefined');
		let property = null;
		if (tileMapObject) {
			property = tileMapObject.properties.find((property) => property.name === propertyName);
		}
		return property?.value;
	}

	/**
	 * Add interactive zone object to the game scene,
	 * @param {Object} tileMapObject The tile map object
	 */
	addInteractiveZone(tileMapObject) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
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
		zone.setTimePenality(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.TIME_PENALITY));
		zone.setTimePenalityMessage(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.TIME_PENALITY_MESSAGE));
		zone.setAudioClipKey(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.AUDIO_CLIP_KEY));
	
		const events = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.EVENTS);

		zone.setCursor(false);

		if (events) {
			const { listenTo, emit } = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_7__.CustomProperty.EVENTS);

			if (listenTo) {
				this.events.on(listenTo, () => {
					zone.executeAction(this.selectedItem, this.dirtyObjectMap, () => {
						if (zone.isDirty()) {
							this.dirtyObjectMap.set(zone.name, zone);
						} else {
							this.dirtyObjectMap.delete(zone.name);
						}
					});
				});
			} else {
				zone.on('pointerdown', () => {
					zone.executeAction(this.selectedItem, this.dirtyObjectMap, (itemUsed) => {
						if (itemUsed) {
							if (this.selectedItem.singleUse) {
								const index = this.items.findIndex((item) => item?.name === this.selectedItem?.name);
								this.items.splice(index, 1);
								this.selectedItem = null;
								this.setCursor(false);
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
							this.setCursor(false);
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
		return zone;
	}

	/**
	 * Add text to the game scene
	 * @param {Object} tileMapObject The tile map object
	 */
	addText(tileMapObject) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		console.log(tileMapObject);
		const { x, y, text } = tileMapObject;
		const { color, fontfamily, halign, pixelsize } = text;
		this.add.text(x, y, text.text, {
			fontFamily: fontfamily,
			fontSize: `${pixelsize}px`,
			fill: color,
			align: halign
		});
	}

	/**
	 * Add safe to the game scene
	 * @param {Object} tileMapObject The tile map object
	 */
	addSafe(tileMapObject) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
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

	/**
	 * Add a door to the game scene
	 * @param {Object} tileMapObject The tile map object
	 */
	addDoor(tileMapObject) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
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
				(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, door.getLockedMessage());
			} else {
				door.play(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.DOOR_OPEN);
				door.setOpened(true);
				this.dirtyObjectMap.set(door.name, door);
			}
		});
		return door;
	}

	/**
	 * Add chest tile to the game scene
	 * @param {*} tileMapObject
	 */
	addChest(tileMapObject) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!tileMapObject, 'The tileMapObject is undefined');
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
				(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, chest.lockedMessage);
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

	/**
	 * Create animations
	 */
	createAnimations() {
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.SAFE_OPEN, _constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.SAFE, [13], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.DOOR_OPEN, _constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.DOOR, [5, 0], 4);
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_7__.Animation.CHEST_OPEN, _constants__WEBPACK_IMPORTED_MODULE_7__.LoaderKey.CHEST, [1], 8, -1);
	}

	/**
	 * Create animation
	 * @param {string} key The key of the animation
	 * @param {string} textureKey The loader key of the texture
	 * @param {Array} frames The spritesheet frames
	 * @param {number} frameRate The frame rate
	 * @param {boolean} repeat Whether the animation should be repeated
	 */
	createAnimation(key, textureKey, frames, frameRate, repeat) {
		this.anims.create({
			key,
			frames: this.anims.generateFrameNumbers(textureKey, { frames }),
			frameRate,
			repeat
		});
	}

	/**
	 * Spawn item on the game scene
	 * @param {number} x The x coordinate
	 * @param {number} y The y coordinate
	 * @param {Object} item
	 */
	spawnItem(x, y, item) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!x, 'The x is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!y, 'The y is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!item, 'The item is undefined');
		const itemImage = this.add.image(x, y, item.textureKey, item.textureFrame);
		itemImage.setScale(2);
		itemImage.setAlpha(0);
		itemImage.setInteractive({
			cursor: 'grab'
		});
		itemImage.on('pointerdown', () => {
			itemImage.destroy();
			if (this.pointerItem) {
				this.pointerItem.destroy();
				this.pointerItem = null;
			}
			(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_5__.showItemModal)(this, item.description, item.textureKey, item.textureFrame, () => {
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

	/**
	 * Spawn NPC on the game scene
	 * @param {number} x The x position
	 * @param {number} y The y position
	 * @param {Object} npc The npc object
	 */
	spawnNPC(x, y, npc) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!x, 'The x is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!y, 'The y is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!npc, 'The npc is undefined');
		const npcSprite = this.add.sprite(x, y, npc.textureKey, npc.textureFrame);
		npcSprite.setScale(2);
		npcSprite.setAlpha(0);
		npcSprite.setInteractive({
			useHandCursor: true
		});
		npcSprite.on('pointerdown', () => {
			(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_5__.showTextModal)(this, npc.description);
		});
		this.tweens.add({
			targets: npcSprite,
			alpha: 1,
			ease: 'Linear',
			duration: 200
		});
	}

	/**
	 * Returns true if given item name is selected
	 * @param {string} itemName The item name
	 * @returns {boolean}
	 */
	isItemSelected(itemName) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!itemName, 'The name is undefined');
		return this.selectedItem?.name === itemName;
	}

	/**
	 * Starts the timer
	 * @param {number} numberOfHours The number of hours
	 */
	startTimer(numberOfHours) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_6__.assert)(!numberOfHours, 'The numberOfHours is undefined');
		if (!this.isRunning) {
			const now = new Date().getTime();
			this.countDownDate = new Date(now + numberOfHours * NUMBER_OF_MINUTES * NUMBER_OF_SECONDS * NUMBER_OF_MILLISECONDS).getTime();
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

	/**
	 * Add time penality
	 * @param {number} timePenality The time penality
	 */
	addTimePenality(timePenality) {
		this.countDownDate = new Date(this.countDownDate - timePenality * NUMBER_OF_SECONDS * NUMBER_OF_MILLISECONDS);
	}

	/**
	 * Update the time on the game scene.
	 */
	updateTime() {
		if (this.timeText) {
			this.timeText.destroy();
		}
		const hoursRemaining = Math.floor(
			(this.timeRemaining % (NUMBER_OF_MILLISECONDS * NUMBER_OF_SECONDS * NUMBER_OF_MINUTES * NUMBER_OF_HOURS)) /
				(NUMBER_OF_MILLISECONDS * NUMBER_OF_SECONDS * NUMBER_OF_MINUTES)
		);
		const minutesRemaining = Math.floor(
			(this.timeRemaining % (NUMBER_OF_MILLISECONDS * NUMBER_OF_SECONDS * NUMBER_OF_MINUTES)) /
				(NUMBER_OF_MILLISECONDS * NUMBER_OF_SECONDS)
		);
		const secondsRemaining = Math.floor((this.timeRemaining % (NUMBER_OF_MILLISECONDS * NUMBER_OF_SECONDS)) / NUMBER_OF_MILLISECONDS);
		if (this.timeRemaining) {
			this.timeText = this.add.text(915, 730, `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`, {
				fontSize: '12px',
				fontFamily: 'Verdana',
				fill: '#FFFFFF'
			});
		}
	}

	/**
	 * Update hook that runs every cycle.
	 */
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


/**
 * This class holds the code for the game over scene.
 * @author Justin Poirier
 * @copyright 20025
 * @extends Phaser.Scene
 */
class GameOverScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    /**
     * Constuctor
     */
    constructor() {
        super('gameover');
    }

    /**
     * Create Phaser hook runs once.
     */
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



/**
 * This class holds the code for the loading scene
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.Scene
 */
class LoadingScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
	
	/**
	 * Constructor
	 */
	constructor() {
		super('loading');
	}

	/**
	 * Preload Phaser hook runs only once
	 */
	preload() {
		this.load.tilemapTiledJSON('room-one', 'assets/json/room-one-map.json');
		this.load.tilemapTiledJSON('room-two', 'assets/json/room-two-map.json');
		this.load.tilemapTiledJSON('room-three', 'assets/json/room-three-map.json');
		this.load.tilemapTiledJSON('room-four', 'assets/json/room-four-map.json');
		this.load.tilemapTiledJSON('room-five', 'assets/json/room-five-map.json');
		this.load.tilemapTiledJSON('room-six', 'assets/json/room-six-map.json');
		this.load.image('castle-tiles', 'assets/img/castle-tiles/Tileset.png');
		this.load.image('creepy-tiles', 'assets/img/tiles.png');
		this.load.image('containers', 'assets/img/container/container.png');
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.MENU_IMAGE, 'assets/img/castle.png');
		this.load.spritesheet('dungeon-crawl', 'assets/img/dungeon-crawl.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.ITEMS, 'assets/img/items.png', { frameWidth: 16, frameHeight: 16 });
		this.load.spritesheet('treasure1', 'assets/img/Treasure Icons/treasure1.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.CHEST, 'assets/img/chest.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.DOOR, 'assets/img/door.png', { frameWidth: 24, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.SAFE, 'assets/img/safe.png', { frameWidth: 32, frameHeight: 40 });
		this.load.audio('open-door-audio', 'assets/sounds/creaky-door-hinge.wav');
		this.load.audio('open-chest-audio', 'assets/sounds/open-chest.wav');
		this.load.audio('push-audio', 'assets/sounds/sfx-push-boulder.flac');
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



/**
 * This class holds the code for the menu scene
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.Scene
 */
class MenuScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

	/**
	 * Constructor
	 */
	constructor() {
		super('menu');
	}

	/**
	 * Create Phaser.js hook runs only once
	 */
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

	/**
	 * Update Phaser.js hook runs every cycle.
	 */
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


/**
 * This class holds the code for the winning scene
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.Scene
 */
class WinningScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    /**
     * Constructor
     */
    constructor() {
        super('win');
    }

    /**
     * Create Phaser.js hook. Runs only once
     */
    create() {
        const text = this.add.text(512, 384, 'Congratulations for escaping? Thank you for playing!', {
            fontSize: '22px',
            fontFamily: 'Verdana'
        });
        text.setOrigin(0.5, 0.5);
    }

}

/***/ }),

/***/ "./src/utils/assert-utils.js":
/*!***********************************!*\
  !*** ./src/utils/assert-utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/* harmony import */ var _errors_InvalidaArgumentError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/InvalidaArgumentError */ "./src/errors/InvalidaArgumentError.js");


/**
 * Assert condition amd throw error message if condition is not met
 * @param {boolean} condition The condition
 * @param {string} message The error message
 */
function assert(condition, message) {
	if (condition) {
		throw new _errors_InvalidaArgumentError__WEBPACK_IMPORTED_MODULE_0__["default"](message);
	}
};

/***/ }),

/***/ "./src/utils/modal-utils.js":
/*!**********************************!*\
  !*** ./src/utils/modal-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showImageModal: () => (/* binding */ showImageModal),
/* harmony export */   showItemModal: () => (/* binding */ showItemModal),
/* harmony export */   showTextModal: () => (/* binding */ showTextModal)
/* harmony export */ });
/* harmony import */ var _assert_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert-utils */ "./src/utils/assert-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



/**
 * Displays a modal window with text
 * @param {Phaser.Scene} scene The Phaser scene
 * @param {string} text The text
 * @param {string} size The modal size
 * @param {function} closeCallback The callback function call when modal is closed
 */
function showTextModal(scene, text, size = _constants__WEBPACK_IMPORTED_MODULE_1__.ModalSize.REGULAR, closeCallback) {
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!text, 'The text is undefined');
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
				.setInteractive({
					useHandCursor: true
				});
			break;
		case _constants__WEBPACK_IMPORTED_MODULE_1__.ModalSize.LARGE:
			closeText = scene.add
				.text(155, -169, 'Close X', {
					fontSize: '16px',
					fontFamily: 'verdana',
					fill: '#FFFFFF'
				})
				.setInteractive({
					useHandCursor: true
				});
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

/**
 * Displays a modal window that with an image
 * @param {Phaser.Scene} scene The Phaser scene
 * @param {string} imageKey The Phaser loader key for the image
 * @param {function} closeCallback The callback function called when modal is closed.
 */
function showImageModal(scene, imageKey, closeCallback) {
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!imageKey, 'The imageKey is undefined');
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
		.setInteractive({
			useHandCursor: true
		});

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

/**
 * Displays a modal window with text and item information
 * @param {object} scene The Phaser scene
 * @param {string} itemDescription The description of item
 * @param {string} itemTexture The texture associated with the item
 * @param {number} itemFrame  The frame associated with the item
 * @param {function} closeCallback The callback function called when modal is closed
 */
function showItemModal(scene, itemDescription, itemTexture, itemFrame, closeCallback) {
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!itemDescription, 'The itemDescription is undefined');
	const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
	const modal = scene.add.container(450, 350).setAlpha(0);
	const box = scene.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
	const closeText = scene.add
		.text(155, -69, 'Close X', {
			fontSize: '16px',
			fontFamily: 'verdana',
			fill: '#FFFFFF'
		})
		.setInteractive({
			useHandCursor: true
		});

	const itemImage = scene.add.image(0, -10, itemTexture, itemFrame).setScale(2);
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


/***/ }),

/***/ "./src/utils/tilemap-utils.js":
/*!************************************!*\
  !*** ./src/utils/tilemap-utils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTilesWithinWorldXY: () => (/* binding */ getTilesWithinWorldXY),
/* harmony export */   moveTileDown: () => (/* binding */ moveTileDown),
/* harmony export */   moveTiles: () => (/* binding */ moveTiles),
/* harmony export */   moveTilesLeft: () => (/* binding */ moveTilesLeft),
/* harmony export */   moveTilesRight: () => (/* binding */ moveTilesRight),
/* harmony export */   moveTilesUp: () => (/* binding */ moveTilesUp),
/* harmony export */   removeTiles: () => (/* binding */ removeTiles),
/* harmony export */   replaceTiles: () => (/* binding */ replaceTiles)
/* harmony export */ });
/* harmony import */ var _assert_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert-utils */ "./src/utils/assert-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



/**
 * Get the tiles based on the world coordinates, width and height
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @param {string} layer 
 * @returns {Array}
 */
function getTilesWithinWorldXY(tileMap, x, y, width, height, layer = _constants__WEBPACK_IMPORTED_MODULE_1__.TilemapLayer.FOREGROUND) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!x, 'The x is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!y, 'The y is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!width, 'The width is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!height, 'The height is undefined');
    return tileMap.getTilesWithinWorldXY(
        x,
        y,
        width,
        height,
        {
            isNotEmpty: true
        },
        null,
        layer
    );
}

/**
 * Remove tiles from Tilemap
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {Array} tiles 
 */
function removeTiles(tileMap, tiles) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tiles, 'The tiles is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.removeTileAt(tiles[i].x, tiles[i].y);
    }
}

/**
 * Replace given tiles with new tiles 
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {Array} oldTiles 
 * @param {Array} newTiles 
 */
function replaceTiles(tileMap, oldTiles, newTiles) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!oldTiles, 'The oldTiles is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!newTiles, 'The newTiles is undefined');
    for (let i = 0, len = oldTiles.length; i < len; i++) {
        if (newTiles[i]) {
            tileMap.putTileAt(newTiles[i], oldTiles[i].x, oldTiles[i].y);
        }
    }
}

/**
 * Move tiles on the Tilemap a for given direction and velocity
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {Array} tiles 
 * @param {string} direction 
 * @param {number} velocity 
 */
function moveTiles(tileMap, tiles, direction, velocity) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tiles, 'The tiles is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!direction, 'The direction is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!velocity, 'The velocity is undefined');
    switch (direction) {
        case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT:
            moveTilesLeft(tileMap, tiles, velocity);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT:
            moveTilesRight(tileMap, tiles, velocity);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.UP:
            moveTilesUp(tileMap, tiles, velocity);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN:
            moveTileDown(tileMap, tiles, velocity);
            break;
    }
}

/**
 * Move tiles to the left on the Tilemap for a given velocity
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {Array} tiles 
 * @param {Array} velocity 
 */
function moveTilesLeft(tileMap, tiles, velocity) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tiles, 'The tiles is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
    }
}

/**
 * Move tiles to the right on the Tilemap for a for given velocity
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {Array} tiles 
 * @param {Array} velocity 
 */
function moveTilesRight(tileMap, tiles, velocity) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tiles, 'The tiles is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
    }
}

/**
 * Move tiles up on the Tilemap for a given velocity
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {Array} tiles 
 * @param {Array} velocity 
 */
function moveTilesUp(tileMap, tiles, velocity) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tiles, 'The tiles is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - velocity);
    }
}

/**
 * Move tiles down on the Tilemap for a given velocity
 * @param {Phaser.Tilemaps.Tilemap} tileMap 
 * @param {Array} tiles 
 * @param {Array} velocity 
 */
function moveTileDown(tileMap, tiles, velocity) {
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tileMap, 'The tileMap is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!tiles, 'The tiles is undefined');
    (0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0owQjtBQUM1QjtBQUNlLG9CQUFvQix1REFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0NoZXN0LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0Rvb3IuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvSW50ZXJhY3RpdmVab25lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlLy4vc3JjL2VudGl0aWVzL1NhZmUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvZXJyb3JzL0ludmFsaWRhQXJndW1lbnRFcnJvci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL01lbnUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvc2NlbmVzL1dpbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS8uL3NyYy91dGlscy9hc3NlcnQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvdXRpbHMvbW9kYWwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvLi9zcmMvdXRpbHMvdGlsZW1hcC11dGlscy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzY2FwZS1mcm9tLWRyYWN1bGEtY2FzdGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS1kcmFjdWxhLWNhc3RsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tZHJhY3VsYS1jYXN0bGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEN1c3RvbVByb3BlcnR5ID0ge1xyXG5cdENPTUJJTkFUSU9OOiAnY29tYmluYXRpb24nLFxyXG5cdFBST01QVF9NRVNTQUdFOiAncHJvbXB0TWVzc2FnZScsXHJcblx0U1BBV046ICdzcGF3bicsXHJcblx0U1BBV05fSVRFTTogJ3NwYXduSXRlbScsXHJcblx0TE9DS0VEOiAnbG9ja2VkJyxcclxuXHRMT0NLRURfTUVTU0FHRTogJ2xvY2tlZE1lc3NhZ2UnLFxyXG5cdEFDVElPTjogJ2FjdGlvbicsXHJcblx0Q09OU1RSQUlOVFM6ICdjb25zdHJhaW50cycsXHJcblx0TkFWSUdBVEVfVE86ICduYXZpZ2F0ZVRvJyxcclxuXHRDT05TVFJBSU5UX01FU1NBR0U6ICdjb25zdHJhaW50TWVzc2FnZScsXHJcblx0RVZFTlRTOiAnZXZlbnRzJyxcclxuXHRTQ1JFRU5fVEVYVDogJ3NjcmVlblRleHQnLFxyXG5cdE1PREFMX1NJWkU6ICdtb2RhbFNpemUnLFxyXG5cdFRJTUVfUEVOQUxJVFk6ICd0aW1lUGVuYWxpdHknLFxyXG5cdFRJTUVfUEVOQUxJVFlfTUVTU0FHRTogJ3RpbWVQZW5hbGl0eU1lc3NhZ2UnLFxyXG5cdEFVRElPX0NMSVBfS0VZOiAnYXVkaW9DbGlwS2V5J1xyXG59O1xyXG5cclxuY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuXHRNT1ZFX1RJTEU6ICdNT1ZFX1RJTEUnLFxyXG5cdFRPR0dMRV9USUxFX01PVkVNRU5UOiAnVE9HR0xFX1RJTEVfTU9WRU1FTlQnLFxyXG5cdERFU1RST1lfVElMRTogJ0RFU1RST1lfVElMRScsXHJcblx0UkVQTEFDRV9USUxFOiAnUkVQTEFDRV9USUxFJyxcclxuXHRUT0dHTEVfVElMRTogJ1RPR0dMRV9USUxFJyxcclxuXHRTSE9XX1RFWFQ6ICdTSE9XX1RFWFQnLFxyXG5cdFNIT1dfSU1BR0U6ICdTSE9XX0lNQUdFJyxcclxuXHRERVNUUk9ZOiAnREVTVFJPWScsXHJcblx0Uk9UQVRFX1RJTEU6ICdST1RBVEVfVElMRSdcclxufTtcclxuXHJcbmNvbnN0IFNwYXduVHlwZSA9IHtcclxuXHRJVEVNOiAnSVRFTScsXHJcblx0TlBDOiAnTlBDJ1xyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG5cdExFRlQ6ICdMRUZUJyxcclxuXHRSSUdIVDogJ1JJR0hUJyxcclxuXHRVUDogJ1VQJyxcclxuXHRET1dOOiAnRE9XTidcclxufTtcclxuXHJcbmNvbnN0IFJvdGF0aW9uID0ge1xyXG5cdFJPVEFURV85MDogJzkwJyxcclxuXHRST1RBVEVfMTgwOiAnMTgwJyxcclxuXHRST1RBVEVfMjcwOiAnMjcwJ1xyXG59O1xyXG5cclxuY29uc3QgTW9kYWxTaXplID0ge1xyXG5cdFJFR1VMQVI6ICdSRUdVTEFSJyxcclxuXHRMQVJHRTogJ0xBUkdFJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZW1hcExheWVyID0ge1xyXG5cdEJBQ0tHUk9VTkQ6ICdiYWNrZ3JvdW5kJyxcclxuXHRGT1JFR1JPVU5EOiAnZm9yZWdyb3VuZCcsXHJcblx0T0JKRUNUUzogJ29iamVjdHMnXHJcbn07XHJcblxyXG5jb25zdCBFbnRpdHlUeXBlID0ge1xyXG5cdERPT1I6ICdEb29yJyxcclxuXHRTQUZFOiAnU2FmZScsXHJcblx0Q0hFU1Q6ICdDaGVzdCcsXHJcblx0VEVYVDogJ1RleHQnLFxyXG5cdElOVEVSQUNUSVZFX1pPTkU6ICdJbnRlcmFjdGl2ZVpvbmUnXHJcbn07XHJcblxyXG5jb25zdCBMb2FkZXJLZXkgPSB7XHJcblx0VElMRU1BUDogJ3RpbGVtYXAnLFxyXG5cdFRJTEVTRVQ6ICd0aWxlcycsXHJcblx0SVRFTVM6ICdpdGVtcycsXHJcblx0VUk6ICd1aScsXHJcblx0Q0hFU1Q6ICdjaGVzdCcsXHJcblx0RE9PUjogJ2Rvb3InLFxyXG5cdFNBRkU6ICdzYWZlJyxcclxuXHRNRU5VX0lNQUdFOiAnbWVudS1pbWFnZSdcclxufTtcclxuXHJcbmNvbnN0IFRpbGUgPSB7XHJcblx0U0lHTjogMTQ0LFxyXG5cdENMT1NFX1dJTkRPVzogMjU4LFxyXG5cdE9QRU5fV0lORE9XOiAyMzUsXHJcblx0Q09GRklOOiBbNzEsIDk1XSxcclxuXHRERVNUUk9ZRURfS05JR0hUOiA5NixcclxuXHRUT1BfQ0hBSVI6IDMxMixcclxuXHRNSURETEVfQ0hBSVI6IDMzNixcclxuXHRCT1RUT01fQ0hBSVI6IDM2MCxcclxuXHRIT0xFX0lOX1dBTEw6IDI0OSxcclxuXHRUT1BfTEVGVF9HQVJHT1lMRTogMjMyLFxyXG5cdFRPUF9SSUdIVF9HQVJHT1lMRTogMjMzLFxyXG5cdEJPVFRPTV9MRUZUX0dBUkdPWUxFOiAyNTYsXHJcblx0Qk9UVE9NX1JJR0hUX0dBUkdPWUxFOiAyNTcsXHJcblx0VE9QX0xFRlRfV0FURVI6IDEwLFxyXG5cdFRPUF9DRU5URVJfV0FURVI6IDExLFxyXG5cdFRPUF9SSUdIVF9XQVRFUjogMTIsXHJcblx0TUlERExFX0xFRlRfV0FURVI6IDM0LFxyXG5cdE1JRERMRV9DRU5URVJfV0FURVI6IDM1LFxyXG5cdE1JRERMRV9SSUdIVF9XQVRFUjogMzYsXHJcblx0Qk9UVE9NX0xFRlRfV0FURVI6IDU4LFxyXG5cdEJPVFRPTV9DRU5URVJfV0FURVI6IDU5LFxyXG5cdEJPVFRPTV9SSUdIVF9XQVRFUjogNjAsXHJcblx0RElHR0VEX0hPTEU6IDMxNixcclxuXHRTVEFJUjogMTI0XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0ge1xyXG5cdEJPT0s6ICdib29rJyxcclxuXHRIQU1NRVI6ICdoYW1tZXInLFxyXG5cdFBJQ0tBWEU6ICdwaWNrYXhlJyxcclxuXHRLRVk6ICdrZXknLFxyXG5cdE1BU1RFUl9LRVk6ICdtYXN0ZXIta2V5JyxcclxuXHRJQ0VfUk9EOiAnaWNlLXJvZCcsXHJcblx0UE9USU9OOiAncG90aW9uJyxcclxuXHRTSE9WRUw6ICdzaG92ZWwnLFxyXG5cdFJJTkc6ICdyaW5nJ1xyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0aW9uID0ge1xyXG5cdERPT1JfT1BFTjogJ2Rvb3Itb3BlbicsXHJcblx0U0FGRV9PUEVOOiAnc2FmZS1vcGVuJyxcclxuXHRDSEVTVF9PUEVOOiAnY2hlc3Qtb3BlbidcclxufTtcclxuXHJcbmNvbnN0IEZyYW1lID0ge1xyXG5cdE1BU1RFUl9LRVk6IDUxLFxyXG5cdFBJQ0tBWEU6IDgzLFxyXG5cdFBPVElPTjogNjEsXHJcblx0S0VZOiA1MCxcclxuXHRSSU5HOiAxM1xyXG59O1xyXG5cclxuT2JqZWN0LmZyZWV6ZShUaWxlbWFwTGF5ZXIpO1xyXG5PYmplY3QuZnJlZXplKEN1c3RvbVByb3BlcnR5KTtcclxuT2JqZWN0LmZyZWV6ZShMb2FkZXJLZXkpO1xyXG5PYmplY3QuZnJlZXplKEVudGl0eVR5cGUpO1xyXG5PYmplY3QuZnJlZXplKFRpbGUpO1xyXG5PYmplY3QuZnJlZXplKEl0ZW0pO1xyXG5PYmplY3QuZnJlZXplKEFuaW1hdGlvbik7XHJcbk9iamVjdC5mcmVlemUoRnJhbWUpO1xyXG5PYmplY3QuZnJlZXplKERpcmVjdGlvbik7XHJcbk9iamVjdC5mcmVlemUoQWN0aW9uVHlwZSk7XHJcblxyXG5leHBvcnQge1xyXG5cdFRpbGVtYXBMYXllcixcclxuXHRDdXN0b21Qcm9wZXJ0eSxcclxuXHRMb2FkZXJLZXksXHJcblx0RW50aXR5VHlwZSxcclxuXHRUaWxlLFxyXG5cdEl0ZW0sXHJcblx0QW5pbWF0aW9uLFxyXG5cdEZyYW1lLFxyXG5cdEFjdGlvblR5cGUsXHJcblx0RGlyZWN0aW9uLFxyXG5cdFNwYXduVHlwZSxcclxuXHRNb2RhbFNpemUsXHJcblx0Um90YXRpb25cclxufTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlc3QgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHJcblx0bG9ja2VkID0gdHJ1ZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHRzcGF3bkl0ZW0gPSBudWxsO1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgdGV4dHVyZSwgZnJhbWUsIG5hbWUsIGxvY2tlZCwgbG9ja2VkTWVzc2FnZSkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lKTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuXHRcdHRoaXMubG9ja2VkTWVzc2FnZSA9IGxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHNldE5hbWUobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHR1bmxvY2soKSB7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aXNMb2NrZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubG9ja2VkTWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9ja2VkTWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHRcclxuXHRpc09wZW5lZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcclxuXHR9XHJcblxyXG5cdHNldE9wZW5lZChvcGVuZWQpIHtcclxuXHRcdHRoaXMub3BlbmVkID0gb3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0U3Bhd25JdGVtKHNwYXduSXRlbSkge1xyXG5cdFx0dGhpcy5zcGF3bUl0ZW0gPSBzcGF3bkl0ZW07XHJcblx0fVxyXG5cclxuXHRnZXRTcGF3bkl0ZW0oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bUl0ZW07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRuYW1lID0gbnVsbDtcclxuXHRsb2NrZWQgPSBmYWxzZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBsb2NrZWQsIGxvY2tlZE1lc3NhZ2UpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgyKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuXHR9XHJcblxyXG5cdHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldExvY2tlZE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBEaXJlY3Rpb24sIFNwYXduVHlwZSwgUm90YXRpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuLi91dGlscy9hc3NlcnQtdXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRUaWxlc1dpdGhpbldvcmxkWFksIHJlbW92ZVRpbGVzLCByZXBsYWNlVGlsZXMsIG1vdmVUaWxlcyB9IGZyb20gJy4uL3V0aWxzL3RpbGVtYXAtdXRpbHMnO1xyXG5pbXBvcnQgeyBzaG93SW1hZ2VNb2RhbCwgc2hvd1RleHRNb2RhbCB9IGZyb20gJy4uL3V0aWxzL21vZGFsLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYW4gSW50ZXJhY3Rpb25ab25lIGluIHRoZSBlc2NhcGUgcm9vbVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGl2ZVpvbmUgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuXHRhY3Rpb24gPSBudWxsO1xyXG5cdGNvbnN0cmFpbnRzID0gbnVsbDtcclxuXHRzcGF3biA9IG51bGw7XHJcblx0bmF2aWdhdGVUbyA9IG51bGw7XHJcblx0Y29uc3RyYWludE1lc3NhZ2UgPSBudWxsO1xyXG5cdHRpbWVQZW5hbGl0eSA9IDA7XHJcblx0dGltZVBlbmFsaXR5TWVzc2FnZSA9IG51bGw7IFxyXG5cdGF1ZGlvQ2xpcEtleVxyXG5cdGRpcnR5ID0gZmFsc2U7XHJcblx0bmFtZSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuU2NlbmV9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBhc3NvY2lhdGVkIHdpdGggdGhpcyB6b25lXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHpvbmUgeCBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHpvbmUgeSBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFRoZSB6b25lIHdpZHRoXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgem9uZSBoZWlnaHRcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgbmFtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuc2V0T3JpZ2luKDAsIDApO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRXhlY3V0ZSB0aGUgYWN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIHVzZWQgb24gdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge01hcH0gZGlydHlPYmplY3RNYXAgVGhlIG1hcCBvZiBkaXJ0eSBvYmplY3RzXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZUNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYWN0aW9uIGlzIGNvbXBsZXRlZC5cclxuXHQgKi9cclxuXHRleGVjdXRlQWN0aW9uKGl0ZW0sIGRpcnR5T2JqZWN0TWFwLCBvbkNvbXBsZXRlQ2FsbGJhY2spIHtcclxuXHRcdGxldCBpdGVtVXNlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRpbGVzID0gbnVsbDtcclxuXHRcdGlmICghdGhpcy5jYW5FeGVjdXRlKGl0ZW0sIGRpcnR5T2JqZWN0TWFwKSkge1xyXG5cdFx0XHRpZiAodGhpcy5jb25zdHJhaW50TWVzc2FnZSkge1xyXG5cdFx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGhpcy5jb25zdHJhaW50TWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB7IHR5cGUsIHZlbG9jaXR5LCBuZXdUaWxlcywgZGlyZWN0aW9uLCB0ZXh0LCB0ZXh0dXJlS2V5LCByZXBlYXQgfSA9IHRoaXMuYWN0aW9uO1xyXG5cclxuXHRcdFx0bmV3VGlsZXMgPSBuZXdUaWxlcz8uc3BsaXQoJywnKS5tYXAoKHMpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQocywgMTApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5SRVBMQUNFX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRyZXBsYWNlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgbmV3VGlsZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuVE9HR0xFX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZGlydHkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmV2aW91c1RpbGVzID0gdGlsZXMubWFwKCh0KSA9PiB0LmluZGV4KTtcclxuXHRcdFx0XHRcdFx0cmVwbGFjZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIG5ld1RpbGVzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXBsYWNlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgdGhpcy5wcmV2aW91c1RpbGVzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmV2aW91c1RpbGVzID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLkRFU1RST1lfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdHJlbW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuTU9WRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0cmVtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcyk7XHJcblx0XHRcdFx0XHRtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgZGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmUoZGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UT0dHTEVfVElMRV9NT1ZFTUVOVDpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5kaXJ0eSkge1xyXG5cdFx0XHRcdFx0XHRyZW1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzKTtcclxuXHRcdFx0XHRcdFx0bW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1vdmUoZGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbW92ZWRUaWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRcdHJlbW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgbW92ZWRUaWxlcyk7XHJcblx0XHRcdFx0XHRcdG1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCB0aGlzLnJldmVyc2VEaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlKHRoaXMucmV2ZXJzZURpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuU0hPV19URVhUOlxyXG5cdFx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLnNjZW5lLCB0ZXh0KTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlNIT1dfSU1BR0U6XHJcblx0XHRcdFx0XHRzaG93SW1hZ2VNb2RhbCh0aGlzLnNjZW5lLCB0ZXh0dXJlS2V5KTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLkRFU1RST1k6IHtcclxuXHRcdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc3Bhd24pIHtcclxuXHRcdFx0XHR0aGlzLnNwYXduT2JqZWN0KHRoaXMuc3Bhd24sIHR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm5hdmlnYXRlVG8pIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLmNoYW5nZVJvb20odGhpcy5uYXZpZ2F0ZVRvKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy50aW1lUGVuYWxpdHkpIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLmFkZFRpbWVQZW5hbGl0eSh0aGlzLnRpbWVQZW5hbGl0eSk7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZVBlbmFsaXR5TWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLnNjZW5lLCB0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5hdWRpb0NsaXBLZXkpIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLnNvdW5kLnBsYXkodGhpcy5hdWRpb0NsaXBLZXkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChvbkNvbXBsZXRlQ2FsbGJhY2spIHtcclxuXHRcdFx0XHRvbkNvbXBsZXRlQ2FsbGJhY2sodGhpcy5pc0l0ZW1Vc2VkKGl0ZW0pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXJlcGVhdCAmJiB0aGlzLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTcGF3biBhIGl0ZW0gb3IgTlBDXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHNwYXduIFRoZSBzcGF3biBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblR5cGUgVGhlIGFjdGlvbiB0eXBlXHJcblx0ICovXHJcblx0c3Bhd25PYmplY3Qoc3Bhd24sIGFjdGlvblR5cGUpIHtcclxuXHRcdGFzc2VydCghc3Bhd24sICdUaGUgc3Bhd24gaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRzd2l0Y2ggKHNwYXduLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBTcGF3blR5cGUuTlBDOlxyXG5cdFx0XHRcdGlmIChhY3Rpb25UeXBlID09PSAoQWN0aW9uVHlwZS5SRVBMQUNFX1RJTEUgfHwgQWN0aW9uVHlwZS5UT0dHTEVfVElMRSkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25OUEModGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIDUwLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bk5QQyh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3Bhd25UeXBlLklURU06XHJcblx0XHRcdFx0aWYgKGFjdGlvblR5cGUgPT09IChBY3Rpb25UeXBlLlJFUExBQ0VfVElMRSB8fCBBY3Rpb25UeXBlLlRPR0dMRV9USUxFKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bkl0ZW0odGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIDUwLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bkl0ZW0odGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRydWUgaWYgdGhlIGl0ZW0gd2FzIHVzZWQsIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNJdGVtVXNlZChpdGVtKSB7XHJcblx0XHRpZiAodGhpcy5jb25zdHJhaW50cyAmJiBpdGVtKSB7XHJcblx0XHRcdGNvbnN0IHsgaXRlbVJlcXVpcmVkIH0gPSB0aGlzLmNvbnN0cmFpbnRzO1xyXG5cdFx0XHRpZiAoaXRlbVJlcXVpcmVkICYmIGl0ZW0/Lm5hbWUgPT09IGl0ZW1SZXF1aXJlZCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNb3ZlIHpvbmUgZm9yIGdpdmVuIGRpcmVjdGlvbiBhbmQgdmVsb2NpdHlcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdG8gbW92ZSB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSBUaGUgdmVsb2NpdHkgdG8gbW92ZSB0aGUgem9uZVxyXG5cdCAqL1xyXG5cdG1vdmUoZGlyZWN0aW9uLCB2ZWxvY2l0eSkge1xyXG5cdFx0YXNzZXJ0KCFkaXJlY3Rpb24sICdUaGUgZGlyZWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcblx0XHRcdFx0dGhpcy54ID0gdGhpcy54IC0gdGhpcy53aWR0aCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcblx0XHRcdFx0dGhpcy54ID0gdGhpcy54ICsgdGhpcy53aWR0aCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5MRUZUO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERpcmVjdGlvbi5VUDpcclxuXHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLmhlaWdodCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5ET1dOO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG5cdFx0XHRcdHRoaXMueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLlVQO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IGN1cnNvciBmb3Igem9uZVxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNJdGVtU2VsZWN0ZWRcclxuXHQgKi9cclxuXHRzZXRDdXJzb3IoaXNJdGVtU2VsZWN0ZWQpIHtcclxuXHRcdGlmIChpc0l0ZW1TZWxlY3RlZCAmJiB0aGlzLmlucHV0KSB7XHJcblx0XHRcdHRoaXMuaW5wdXQuY3Vyc29yID0gJ2dyYWJiaW5nJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5pbnB1dCkge1xyXG5cdFx0XHRpZiAodGhpcy5hY3Rpb24/LnR5cGUgPT09IEFjdGlvblR5cGUuU0hPV19URVhUIHx8IHRoaXMuYWN0aW9uPy50eXBlID09PSBBY3Rpb25UeXBlLlNIT1dfSU1BR0UpIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0LmN1cnNvciA9ICd6b29tLWluJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0LmN1cnNvciA9ICdwb2ludGVyJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgYWN0aW9uIGNhbiBiZSBleGVjdXRlZFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIHVzZSB3aXRoIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtNYXB9IGRpcnR5T2JqZWN0TWFwIFRoZSBkaXJ0eSBvYmplY3QgbWFwXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0Y2FuRXhlY3V0ZShpdGVtLCBkaXJ0eU9iamVjdE1hcCkge1xyXG5cdFx0aWYgKHRoaXMuY29uc3RyYWludHMpIHtcclxuXHRcdFx0Y29uc3QgeyBpdGVtUmVxdWlyZWQsIHByb21wdFJlcXVpcmVkLCBkZXBlbmRzT24gfSA9IHRoaXMuY29uc3RyYWludHM7XHJcblx0XHRcdGlmIChpdGVtUmVxdWlyZWQgJiYgaXRlbT8ubmFtZSAhPT0gaXRlbVJlcXVpcmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHByb21wdFJlcXVpcmVkKSB7XHJcblx0XHRcdFx0Y29uc3QgYW5zd2VyID0gd2luZG93LnByb21wdChwcm9tcHRSZXF1aXJlZC5xdWVzdGlvbik7XHJcblx0XHRcdFx0aWYgKGFuc3dlciAmJiBhbnN3ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvbXB0UmVxdWlyZWQuYW5zd2VyLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGVwZW5kc09uKSB7XHJcblx0XHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0XHRkZXBlbmRzT24/LnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFkaXJ0eU9iamVjdE1hcC5oYXMobmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoIXZhbGlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIG5hbWVcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgbmFtZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lXHJcblx0ICovXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0cnVlIGlmIHpvbmUgaXMgZGlydHlcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc0RpcnR5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGlydHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgd2hldGhlciB0aGUgem9uZSBpcyBkaXJ0eVxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlydHkgV2hldGhlciB6b25lIGlzIGRpcnR5XHJcblx0ICovXHJcblx0c2V0RGlydHkoZGlydHkpIHtcclxuXHRcdHRoaXMuZGlydHkgPSBkaXJ0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGFjdGlvbiBvYmplY3RcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIFRoZSBhY3Rpb24gb2JqZWN0XHJcblx0ICovXHJcblx0c2V0QWN0aW9uKGFjdGlvbikge1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBhY3Rpb24gb2JqZWN0XHJcblx0ICogQHJldHVybnMge09iamVjdH1cclxuXHQgKi9cclxuXHRnZXRBY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hY3Rpb247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBjb25zdHJhaW50cyBvYmplY3RcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uc3RyYWludHMgVGhlIGNvbnN0cmFpbnQgb2JqZWN0XHJcblx0ICovXHJcblx0c2V0Q29uc3RyYWludHMoY29uc3RyYWludHMpIHtcclxuXHRcdHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGNvbnN0cmFpbnRzIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2V0Q29uc3RyYWludHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJhaW50cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHNwYXduIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzcGF3biBUaGUgc3Bhd24gb2JqZWN0XHJcblx0ICovXHJcblx0c2V0U3Bhd24oc3Bhd24pIHtcclxuXHRcdHRoaXMuc3Bhd24gPSBzcGF3bjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHNwYXduIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2V0U3Bhd24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHJvb20gd2hlcmUgdG8gbmF2aWdhdGUgbmV4dFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYXZpZ2F0ZVRvIFRoZSByb29tIHdoZXJlIHRvIG5hdmlnYXRlIG5leHRcclxuXHQgKi9cclxuXHRzZXROYXZpZ2F0ZVRvKG5hdmlnYXRlVG8pIHtcclxuXHRcdHRoaXMubmF2aWdhdGVUbyA9IG5hdmlnYXRlVG87XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSByb29tIHdoZXJlIHRvIG5hdmlnYXRlIG5leHRcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldE5hdmlnYXRlVG8oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgY29uc3RyYWludCBtZXNzYWdlXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnN0cmFpbnRNZXNzYWdlIFRoZSBjb25zdHJhaW50IG1lc3NhZ2VcclxuXHQgKi9cclxuXHRzZXRDb25zdHJhaW50TWVzc2FnZShjb25zdHJhaW50TWVzc2FnZSkge1xyXG5cdFx0dGhpcy5jb25zdHJhaW50TWVzc2FnZSA9IGNvbnN0cmFpbnRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY29uc3RyYWludCBtZXNzYWdlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRDb25zdHJhaW50TWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgdGltZSBwZW5hbGl0eVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lUGVuYWxpdHkgVGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKi9cclxuXHRzZXRUaW1lUGVuYWxpdHkodGltZVBlbmFsaXR5KSB7XHJcblx0XHR0aGlzLnRpbWVQZW5hbGl0eSA9IHRpbWVQZW5hbGl0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGdldFRpbWVQZW5hbGl0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRpbWVQZW5hbGl0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHRpbWUgcGVuYWxpdHkgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lUGVuYWxpdHlNZXNzYWdlIFRoZSB0aW1lIHBlbmFsaXR5IG1lc3NzYWdlXHJcblx0ICovXHJcblx0c2V0VGltZVBlbmFsaXR5TWVzc2FnZSh0aW1lUGVuYWxpdHlNZXNzYWdlKSB7XHJcblx0XHR0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2UgPSB0aW1lUGVuYWxpdHlNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdGltZSBwZW5hbGl0eSBtZXNzYWdlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRUaW1lUGVuYWxpdHlNZXNzYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGltZVBlbmFsaXR5TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGF1ZGlvIGNsaXAga2V5XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGF1ZGlvQ2xpcEtleSBUaGUgYXVkaW8gY2xpcCBrZXlcclxuXHQgKi9cclxuXHRzZXRBdWRpb0NsaXBLZXkoYXVkaW9DbGlwS2V5KSB7XHJcblx0XHR0aGlzLmF1ZGlvQ2xpcEtleSA9IGF1ZGlvQ2xpcEtleVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgYXVkaW8gY2xpcCBrZXlcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldEF1ZGlvQ2xpcEtleSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmF1ZGlvQ2xpcEtleVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcblx0Y29tYmluYXRpb24gPSBudWxsO1xyXG5cdHByb21wdE1lc3NhZ2UgPSBudWxsO1xyXG5cdG9wZW5lZCA9IGZhbHNlO1xyXG5cdHNwYXduSXRlbSA9IG51bGw7XHJcblx0bmFtZSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgY29tYmluYXRpb24sIHByb21wdE1lc3NhZ2UpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gcHJvbXB0TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29tYmluYXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21iaW5hdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldENvbWJpbmF0aW9uKGNvbWJpbmF0aW9uKSB7XHJcblx0XHR0aGlzLmNvbWJpbmF0aW9uID0gY29tYmluYXRpb247XHJcblx0fVxyXG5cclxuXHRnZXRQcm9tcHRNZXNzYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvbXB0TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdHNldFByb21wdE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5wcm9tcHRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGlzT3BlbmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0T3BlbmVkKG9wZW5lZCkge1xyXG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRTcGF3bkl0ZW0oc3Bhd25JdGVtKSB7XHJcblx0XHR0aGlzLnNwYXduSXRlbSA9IHNwYXduSXRlbTtcclxuXHR9XHJcblxyXG5cdGdldFNwYXduSXRlbSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNwYXduSXRlbTtcclxuXHR9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhbiBpbnZhbGlkIGFyZ3VtZW50IGVycm9yXHJcbiAqIEBleHRlbmRzIEVycm9yXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlIFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ludmFsaWRBcmd1bWVudEVycm9yJ1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vc2NlbmVzL0dhbWUnO1xyXG5pbXBvcnQgR2FtZU92ZXJTY2VuZSAgZnJvbSAnLi9zY2VuZXMvR2FtZU92ZXInO1xyXG5pbXBvcnQgV2luU2NlbmUgZnJvbSAnLi9zY2VuZXMvV2luJztcclxuaW1wb3J0IFNwbGFzaFNjZW5lIGZyb20gJy4vc2NlbmVzL01lbnUnO1xyXG5pbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gJy4vc2NlbmVzL0xvYWRpbmcnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cdHNjYWxlOiB7XHJcblx0XHRtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCxcclxuXHRcdHdpZHRoOiAxMDI0LFxyXG5cdFx0aGVpZ2h0OiA3NjhcclxuXHR9LFxyXG5cdHBoeXNpY3M6IHtcclxuXHRcdGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG5cdFx0YXJjYWRlOiB7XHJcblx0XHRcdGRlYnVnOiB0cnVlLFxyXG5cdFx0XHRncmF2aXR5OiB7IHk6IDIwMCB9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzY2VuZTogW0xvYWRpbmdTY2VuZSwgU3BsYXNoU2NlbmUsIEdhbWVTY2VuZSwgR2FtZU92ZXJTY2VuZSwgV2luU2NlbmVdXHJcbn07XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IENoZXN0IGZyb20gJy4uL2VudGl0aWVzL0NoZXN0JztcclxuaW1wb3J0IFNhZmUgZnJvbSAnLi4vZW50aXRpZXMvU2FmZSc7XHJcbmltcG9ydCBEb29yIGZyb20gJy4uL2VudGl0aWVzL0Rvb3InO1xyXG5pbXBvcnQgSW50ZXJhY3RpdmVab25lIGZyb20gJy4uL2VudGl0aWVzL0ludGVyYWN0aXZlWm9uZSc7XHJcbmltcG9ydCB7IHNob3dUZXh0TW9kYWwsIHNob3dJdGVtTW9kYWwgfSBmcm9tICcuLi91dGlscy9tb2RhbC11dGlscyc7XHJcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4uL3V0aWxzL2Fzc2VydC11dGlscyc7XHJcblxyXG5pbXBvcnQgeyBDdXN0b21Qcm9wZXJ0eSwgVGlsZW1hcExheWVyLCBFbnRpdHlUeXBlLCBMb2FkZXJLZXksIEFuaW1hdGlvbiwgQWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBUUkFOU0lUSU9OX0RFTEFZID0gNTAwO1xyXG5jb25zdCBOVU1CRVJfT0ZfTUlOVVRFUyA9IDYwO1xyXG5jb25zdCBOVU1CRVJfT0ZfU0VDT05EUyA9IDYwO1xyXG5jb25zdCBOVU1CRVJfT0ZfSE9VUlMgPSAyNDtcclxuY29uc3QgTlVNQkVSX09GX01JTExJU0VDT05EUyA9IDEwMDA7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSB0aGUgZ2FtZSBzY2VuZS5cclxuICogQGV4dGVuZHMgUGhhc2VyLlNjZW5lXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdGRvb3IgPSBudWxsO1xyXG5cdGNoZXN0cyA9IFtdO1xyXG5cdHRpbGVNYXAgPSBudWxsO1xyXG5cdHpvbmVzID0gW107XHJcblx0c2FmZXMgPSBbXTtcclxuXHRpdGVtcyA9IFtdO1xyXG5cdGl0ZW1JbWFnZXMgPSBbXTtcclxuXHRzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdHNlbGVjdGVkUmVjdGFuZ2xlID0gbnVsbDtcclxuXHRyb29tTmFtZSA9IG51bGw7XHJcblx0ZGlydHlPYmplY3RNYXAgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ2dhbWUnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBob29rIHRoYXQgaXMgcnVuIG9uY2Ugd2hlbiB0aGUgc2NlbmUgc3RhcnRzXHJcblx0ICovXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0dGhpcy5sb2FkUm9vbSgncm9vbS1vbmUnKTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG5cdFx0dGhpcy5hZGRIdWQoKTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lcigxKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBIVUQgdG8gdGhlIGdhbWUgc2NlbmVcclxuXHQgKi9cclxuXHRhZGRIdWQoKSB7XHJcblx0XHRjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg5MjAsIDIwLCAnSXRlbXMnLCB7IGZvbnRTaXplOiAnMjBweCcsIGZvbnRGYW1pbHk6ICdWZXJkYW5hJyB9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSB0aGUgSFVEXHJcblx0ICovXHJcblx0dXBkYXRlSHVkKCkge1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUgJiYgIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaXRlbUltYWdlcykge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUltYWdlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuaXRlbUltYWdlc1tpXS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpdGVtSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSg5NTAsIGkgKiA1MCArIDgwLCB0aGlzLml0ZW1zW2ldLnRleHR1cmVLZXksIHRoaXMuaXRlbXNbaV0udGV4dHVyZUZyYW1lKTtcclxuXHRcdFx0aXRlbUltYWdlLnNldEFscGhhKDApO1xyXG5cdFx0XHRpdGVtSW1hZ2Uuc2V0U2NhbGUoMik7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdFx0Y3Vyc29yOiAnZ3JhYidcclxuXHRcdFx0fSk7XHJcblx0XHRcdGl0ZW1JbWFnZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRcdFx0dGhpcy5wb2ludGVySXRlbS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZXRDdXJzb3IodHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaXRlbUltYWdlLngsIGl0ZW1JbWFnZS55LCA1MCwgNTApO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuc2V0U3Ryb2tlU3R5bGUoMywgMHhmZmZmZmYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy50d2VlbnMuYWRkKHtcclxuXHRcdFx0XHR0YXJnZXRzOiBpdGVtSW1hZ2UsXHJcblx0XHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdFx0ZHVyYXRpb246IDIwMCxcclxuXHRcdFx0XHRyZXBlYXQ6IDAsXHJcblx0XHRcdFx0eW95bzogZmFsc2VcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuaXRlbUltYWdlcy5wdXNoKGl0ZW1JbWFnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgY3Vyc29yXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBpc0l0ZW1TZWxlY3RlZCBXaGV0aGVyIHRoZSBpdGVtIGlzIHNlbGVjdGVkLlxyXG5cdCAqL1xyXG5cdHNldEN1cnNvcihpc0l0ZW1TZWxlY3RlZCkge1xyXG5cdFx0aWYgKGlzSXRlbVNlbGVjdGVkKSB7XHJcblx0XHRcdHRoaXMuaW5wdXQuc2V0RGVmYXVsdEN1cnNvcignZ3JhYmJpbmcnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5wdXQuc2V0RGVmYXVsdEN1cnNvcignZGVmYXVsdCcpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56b25lcy5mb3JFYWNoKCh6b25lKSA9PiB7XHJcblx0XHRcdHpvbmUuc2V0Q3Vyc29yKGlzSXRlbVNlbGVjdGVkKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCByb29tIG9uIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJvb21OYW1lIFRoZSByb29tIG5hbWVcclxuXHQgKi9cclxuXHRsb2FkUm9vbShyb29tTmFtZSkge1xyXG5cdFx0YXNzZXJ0KCFyb29tTmFtZSwgJ1RoZSByb29tTmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHRoaXMucm9vbU5hbWUgPSByb29tTmFtZTtcclxuXHRcdHRoaXMuZGlydHlPYmplY3RNYXAgPSBuZXcgTWFwKCk7XHJcblx0XHR0aGlzLmNhbWVyYXMubWFpbi5mYWRlSW4oVFJBTlNJVElPTl9ERUxBWSwgMCwgMCwgMCk7XHJcblx0XHR0aGlzLnRpbGVNYXAgPSB0aGlzLmNyZWF0ZVRpbGVNYXAocm9vbU5hbWUpO1xyXG5cclxuXHRcdGNvbnN0IGNhc3RsZVRpbGVzID0gdGhpcy5hZGRUaWxlU2V0KHRoaXMudGlsZU1hcCwgJ2Nhc3RsZS10aWxlcycsICdjYXN0bGUtdGlsZXMnKTtcclxuXHRcdGNvbnN0IGNyZWVweVRpbGVzID0gdGhpcy5hZGRUaWxlU2V0KHRoaXMudGlsZU1hcCwgJ2NyZWVweS10aWxlcycsICdjcmVlcHktdGlsZXMnKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lcnMgPSB0aGlzLmFkZFRpbGVTZXQodGhpcy50aWxlTWFwLCAnY29udGFpbmVycycsICdjb250YWluZXJzJyk7XHJcblx0XHRjb25zdCB7IG9iamVjdHNMYXllciwgZm9yZWdyb3VuZExheWVyIH0gPSB0aGlzLmdldFRpbGVNYXBMYXllcnModGhpcy50aWxlTWFwLCBbY3JlZXB5VGlsZXMsIGNhc3RsZVRpbGVzLCBjb250YWluZXJzXSk7XHJcblxyXG5cdFx0dGhpcy5hZGRUaWxlTWFwT2JqZWN0cyhvYmplY3RzTGF5ZXIpO1xyXG5cclxuXHRcdGNvbnN0IHNjcmVlblRleHQgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRoaXMudGlsZU1hcCwgQ3VzdG9tUHJvcGVydHkuU0NSRUVOX1RFWFQpO1xyXG5cdFx0Y29uc3QgbW9kYWxTaXplID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aGlzLnRpbGVNYXAsIEN1c3RvbVByb3BlcnR5Lk1PREFMX1NJWkUpO1xyXG5cdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBzY3JlZW5UZXh0LCBtb2RhbFNpemUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hhbmdlIHJvb20gbG9hZGVkIG9uIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHJvb21OYW1lIFRoZSBnYW1lIHNjZW5lLlxyXG5cdCAqL1xyXG5cdGNoYW5nZVJvb20ocm9vbU5hbWUpIHtcclxuXHRcdGFzc2VydCghcm9vbU5hbWUsICdUaGUgcm9vbU5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHR0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KFRSQU5TSVRJT05fREVMQVksIDAsIDAsIDAsIChjYW1lcmEsIHByb2dyZXNzKSA9PiB7XHJcblx0XHRcdGlmIChwcm9ncmVzcyA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMubG9hZFJvb20ocm9vbU5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlTWFwS2V5IFRoZSBrZXkgb2YgdGhlIHRpbGUgbWFwLlxyXG5cdCAqIEByZXR1cm5zIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH1cclxuXHQgKi9cclxuXHRjcmVhdGVUaWxlTWFwKHRpbGVNYXBLZXkpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcEtleSwgJ1RoZSB0aWxlTWFwS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMubWFrZS50aWxlbWFwKHsga2V5OiB0aWxlTWFwS2V5IH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHRpbGUgc2V0IGltYWdlIHRvIHRoZSBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFRoZSB0aWxlIG1hcFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlU2V0S2V5IFRoZSB0aWxlIHNldCBrZXlcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VUZXh0dXJlS2V5IFRoZSBpbWFnZSB0ZXh0dXJlIGtleVxyXG5cdCAqL1xyXG5cdGFkZFRpbGVTZXQodGlsZU1hcCwgdGlsZVNldEtleSwgaW1hZ2VUZXh0dXJlS2V5KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghdGlsZVNldEtleSwgJ1RoZSB0aWxlU2V0S2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFpbWFnZVRleHR1cmVLZXksICdUaGUgdGlsZVNldFRleHR1cmVLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRyZXR1cm4gdGlsZU1hcC5hZGRUaWxlc2V0SW1hZ2UodGlsZVNldEtleSwgaW1hZ2VUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRpbGUgbWFwIGxheWVycyBhc3NvY2lhdGVkIHdpdGggdGhlIHRpbGUgbWFwXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBUaGUgdGlsZSBtYXBcclxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWxlU2V0c1xyXG5cdCAqL1xyXG5cdGdldFRpbGVNYXBMYXllcnModGlsZU1hcCwgdGlsZVNldHMpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0cywgJ1RoZSB0aWxlU2V0cyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGJhY2tncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkJBQ0tHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IG9iamVjdHNMYXllciA9IHRpbGVNYXAuZ2V0T2JqZWN0TGF5ZXIoVGlsZW1hcExheWVyLk9CSkVDVFMpO1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZExheWVyLCBmb3JlZ3JvdW5kTGF5ZXIsIG9iamVjdHNMYXllciB9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIFRpbGUgbWFwIG9iamVjdHMgdG8gdGhlIGdhbWUgc2NlbmUuXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuT2JqZWN0TGF5ZXJ9IG9iamVjdHNMYXllciBUaGUgb2JqZWN0cyBsYXllclxyXG5cdCAqL1xyXG5cdGFkZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcikge1xyXG5cdFx0YXNzZXJ0KCFvYmplY3RzTGF5ZXIsICdUaGUgb2JqZWN0c0xheWVyIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgdGlsZU1hcE9iamVjdHMgPSBvYmplY3RzTGF5ZXIub2JqZWN0cztcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlTWFwT2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRzd2l0Y2ggKHRpbGVNYXBPYmplY3RzW2ldLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuSU5URVJBQ1RJVkVfWk9ORTpcclxuXHRcdFx0XHRcdHRoaXMuem9uZXMucHVzaCh0aGlzLmFkZEludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLkNIRVNUOlxyXG5cdFx0XHRcdFx0dGhpcy5jaGVzdHMucHVzaCh0aGlzLmFkZENoZXN0KHRpbGVNYXBPYmplY3RzW2ldKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuU0FGRTpcclxuXHRcdFx0XHRcdHRoaXMuc2FmZXMucHVzaCh0aGlzLmFkZFNhZmUodGlsZU1hcE9iamVjdHNbaV0pKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5ET09SOlxyXG5cdFx0XHRcdFx0dGhpcy5kb29yID0gdGhpcy5hZGREb29yKHRpbGVNYXBPYmplY3RzW2ldKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5URVhUOlxyXG5cdFx0XHRcdFx0dGhpcy5hZGRUZXh0KHRpbGVNYXBPYmplY3RzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGN1c3RvbSBwcm9wZXJ0eSBmcm9tIGEgdGlsZSBtYXAgb2JqZWN0XHJcblx0ICogQHBhcmFtIHsqfSB0aWxlTWFwT2JqZWN0IFRoZSB0aWxlIG1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0geyp9IHByb3BlcnR5TmFtZSBUaGUgcHJvcGVydHkgbmFtZVxyXG5cdCAqL1xyXG5cdGdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIHByb3BlcnR5TmFtZSkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXByb3BlcnR5TmFtZSwgJ1RoZSBwcm9wZXJ0eU5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRsZXQgcHJvcGVydHkgPSBudWxsO1xyXG5cdFx0aWYgKHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdFx0cHJvcGVydHkgPSB0aWxlTWFwT2JqZWN0LnByb3BlcnRpZXMuZmluZCgocHJvcGVydHkpID0+IHByb3BlcnR5Lm5hbWUgPT09IHByb3BlcnR5TmFtZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJvcGVydHk/LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGludGVyYWN0aXZlIHpvbmUgb2JqZWN0IHRvIHRoZSBnYW1lIHNjZW5lLFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0aWxlTWFwT2JqZWN0IFRoZSB0aWxlIG1hcCBvYmplY3RcclxuXHQgKi9cclxuXHRhZGRJbnRlcmFjdGl2ZVpvbmUodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCB6b25lID0gbmV3IEludGVyYWN0aXZlWm9uZShcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LngsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueSxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC53aWR0aCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR6b25lLnNldEFjdGlvbih0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkFDVElPTikpO1xyXG5cdFx0em9uZS5zZXRDb25zdHJhaW50cyh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkNPTlNUUkFJTlRTKSk7XHJcblx0XHR6b25lLnNldENvbnN0cmFpbnRNZXNzYWdlKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQ09OU1RSQUlOVF9NRVNTQUdFKSk7XHJcblx0XHR6b25lLnNldE5hdmlnYXRlVG8odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5OQVZJR0FURV9UTykpO1xyXG5cdFx0em9uZS5zZXRTcGF3bih0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOKSk7XHJcblx0XHR6b25lLnNldFRpbWVQZW5hbGl0eSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlRJTUVfUEVOQUxJVFkpKTtcclxuXHRcdHpvbmUuc2V0VGltZVBlbmFsaXR5TWVzc2FnZSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlRJTUVfUEVOQUxJVFlfTUVTU0FHRSkpO1xyXG5cdFx0em9uZS5zZXRBdWRpb0NsaXBLZXkodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5BVURJT19DTElQX0tFWSkpO1xyXG5cdFxyXG5cdFx0Y29uc3QgZXZlbnRzID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5FVkVOVFMpO1xyXG5cclxuXHRcdHpvbmUuc2V0Q3Vyc29yKGZhbHNlKTtcclxuXHJcblx0XHRpZiAoZXZlbnRzKSB7XHJcblx0XHRcdGNvbnN0IHsgbGlzdGVuVG8sIGVtaXQgfSA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuRVZFTlRTKTtcclxuXHJcblx0XHRcdGlmIChsaXN0ZW5Ubykge1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRzLm9uKGxpc3RlblRvLCAoKSA9PiB7XHJcblx0XHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXAsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHpvbmUuaXNEaXJ0eSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoem9uZS5uYW1lLCB6b25lKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLmRlbGV0ZSh6b25lLm5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR6b25lLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHRcdHpvbmUuZXhlY3V0ZUFjdGlvbih0aGlzLnNlbGVjdGVkSXRlbSwgdGhpcy5kaXJ0eU9iamVjdE1hcCwgKGl0ZW1Vc2VkKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtVXNlZCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkSXRlbS5zaW5nbGVVc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0/Lm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0Q3Vyc29yKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh6b25lLmlzRGlydHkoKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHpvbmUubmFtZSwgem9uZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5kZWxldGUoem9uZS5uYW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoZW1pdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQoZW1pdCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR6b25lLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXAsIChpdGVtVXNlZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW1Vc2VkKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkSXRlbS5zaW5nbGVVc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtPy5uYW1lID09PSB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldEN1cnNvcihmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHpvbmUuaXNEaXJ0eSgpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHpvbmUubmFtZSwgem9uZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLmRlbGV0ZSh6b25lLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB6b25lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHRleHQgdG8gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gdGlsZU1hcE9iamVjdCBUaGUgdGlsZSBtYXAgb2JqZWN0XHJcblx0ICovXHJcblx0YWRkVGV4dCh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnNvbGUubG9nKHRpbGVNYXBPYmplY3QpO1xyXG5cdFx0Y29uc3QgeyB4LCB5LCB0ZXh0IH0gPSB0aWxlTWFwT2JqZWN0O1xyXG5cdFx0Y29uc3QgeyBjb2xvciwgZm9udGZhbWlseSwgaGFsaWduLCBwaXhlbHNpemUgfSA9IHRleHQ7XHJcblx0XHR0aGlzLmFkZC50ZXh0KHgsIHksIHRleHQudGV4dCwge1xyXG5cdFx0XHRmb250RmFtaWx5OiBmb250ZmFtaWx5LFxyXG5cdFx0XHRmb250U2l6ZTogYCR7cGl4ZWxzaXplfXB4YCxcclxuXHRcdFx0ZmlsbDogY29sb3IsXHJcblx0XHRcdGFsaWduOiBoYWxpZ25cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHNhZmUgdG8gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gdGlsZU1hcE9iamVjdCBUaGUgdGlsZSBtYXAgb2JqZWN0XHJcblx0ICovXHJcblx0YWRkU2FmZSh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IHNhZmUgPSBuZXcgU2FmZShcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC54LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LnksXHJcblx0XHRcdExvYWRlcktleS5TQUZFLFxyXG5cdFx0XHQxMixcclxuXHRcdFx0dGlsZU1hcE9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkNPTUJJTkFUSU9OKSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5QUk9NUFRfTUVTU0FHRSlcclxuXHRcdCk7XHJcblx0XHRzYWZlLnNldFNwYXduSXRlbSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU0pKTtcclxuXHRcdHNhZmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoIXNhZmUuaXNPcGVuZWQoKSkge1xyXG5cdFx0XHRcdGNvbnN0IGFuc3dlciA9IHdpbmRvdy5wcm9tcHQoc2FmZS5nZXRQcm9tcHRNZXNzYWdlKCkpO1xyXG5cdFx0XHRcdGlmIChhbnN3ZXIgJiYgYW5zd2VyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IHNhZmUuZ2V0Q29tYmluYXRpb24oKS50b0xvY2FsZVVwcGVyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRzYWZlLnBsYXkoQW5pbWF0aW9uLlNBRkVfT1BFTik7XHJcblx0XHRcdFx0XHRzYWZlLnNldE9wZW5lZCh0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKHNhZmUueCwgc2FmZS55ICsgc2FmZS5oZWlnaHQsIHNhZmUuZ2V0U3Bhd25JdGVtKCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoc2FmZS5uYW1lLCBzYWZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNhZmU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgYSBkb29yIHRvIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHRpbGVNYXBPYmplY3QgVGhlIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqL1xyXG5cdGFkZERvb3IodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBkb29yID0gbmV3IERvb3IoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuRE9PUixcclxuXHRcdFx0MTAsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRUQpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGRvb3Iub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZG9vci5pc0xvY2tlZCgpKSB7XHJcblx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBkb29yLmdldExvY2tlZE1lc3NhZ2UoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZG9vci5wbGF5KEFuaW1hdGlvbi5ET09SX09QRU4pO1xyXG5cdFx0XHRcdGRvb3Iuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KGRvb3IubmFtZSwgZG9vcik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGRvb3I7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgY2hlc3QgdGlsZSB0byB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7Kn0gdGlsZU1hcE9iamVjdFxyXG5cdCAqL1xyXG5cdGFkZENoZXN0KHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgY2hlc3QgPSBuZXcgQ2hlc3QoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuQ0hFU1QsXHJcblx0XHRcdG51bGwsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5MT0NLRUQpLFxyXG5cdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGNoZXN0LnNldFNwYXduSXRlbSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU0pKTtcclxuXHRcdGNoZXN0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aWYgKGNoZXN0LmlzTG9ja2VkKCkpIHtcclxuXHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIGNoZXN0LmxvY2tlZE1lc3NhZ2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICghY2hlc3QuaXNPcGVuZWQoKSkge1xyXG5cdFx0XHRcdFx0Y2hlc3QucGxheShBbmltYXRpb24uQ0hFU1RfT1BFTik7XHJcblx0XHRcdFx0XHRjaGVzdC5zZXRPcGVuZWQodHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNwYXduSXRlbShjaGVzdC54LCBjaGVzdC55ICsgY2hlc3QuaGVpZ2h0ICsgNSwgY2hlc3QuZ2V0U3Bhd25JdGVtKCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoY2hlc3QubmFtZSwgY2hlc3QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gY2hlc3Q7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYW5pbWF0aW9uc1xyXG5cdCAqL1xyXG5cdGNyZWF0ZUFuaW1hdGlvbnMoKSB7XHJcblx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbihBbmltYXRpb24uU0FGRV9PUEVOLCBMb2FkZXJLZXkuU0FGRSwgWzEzXSwgNCk7XHJcblx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbihBbmltYXRpb24uRE9PUl9PUEVOLCBMb2FkZXJLZXkuRE9PUiwgWzUsIDBdLCA0KTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5DSEVTVF9PUEVOLCBMb2FkZXJLZXkuQ0hFU1QsIFsxXSwgOCwgLTEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGFuaW1hdGlvblxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgYW5pbWF0aW9uXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHR1cmVLZXkgVGhlIGxvYWRlciBrZXkgb2YgdGhlIHRleHR1cmVcclxuXHQgKiBAcGFyYW0ge0FycmF5fSBmcmFtZXMgVGhlIHNwcml0ZXNoZWV0IGZyYW1lc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmcmFtZVJhdGUgVGhlIGZyYW1lIHJhdGVcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGVhdCBXaGV0aGVyIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIHJlcGVhdGVkXHJcblx0ICovXHJcblx0Y3JlYXRlQW5pbWF0aW9uKGtleSwgdGV4dHVyZUtleSwgZnJhbWVzLCBmcmFtZVJhdGUsIHJlcGVhdCkge1xyXG5cdFx0dGhpcy5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRrZXksXHJcblx0XHRcdGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyh0ZXh0dXJlS2V5LCB7IGZyYW1lcyB9KSxcclxuXHRcdFx0ZnJhbWVSYXRlLFxyXG5cdFx0XHRyZXBlYXRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3Bhd24gaXRlbSBvbiB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuXHQgKi9cclxuXHRzcGF3bkl0ZW0oeCwgeSwgaXRlbSkge1xyXG5cdFx0YXNzZXJ0KCF4LCAnVGhlIHggaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXksICdUaGUgeSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghaXRlbSwgJ1RoZSBpdGVtIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgaXRlbUltYWdlID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgaXRlbS50ZXh0dXJlS2V5LCBpdGVtLnRleHR1cmVGcmFtZSk7XHJcblx0XHRpdGVtSW1hZ2Uuc2V0U2NhbGUoMik7XHJcblx0XHRpdGVtSW1hZ2Uuc2V0QWxwaGEoMCk7XHJcblx0XHRpdGVtSW1hZ2Uuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHRjdXJzb3I6ICdncmFiJ1xyXG5cdFx0fSk7XHJcblx0XHRpdGVtSW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpdGVtSW1hZ2UuZGVzdHJveSgpO1xyXG5cdFx0XHRpZiAodGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNob3dJdGVtTW9kYWwodGhpcywgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS50ZXh0dXJlS2V5LCBpdGVtLnRleHR1cmVGcmFtZSwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50d2VlbnMuYWRkKHtcclxuXHRcdFx0dGFyZ2V0czogaXRlbUltYWdlLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3Bhd24gTlBDIG9uIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cclxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBucGMgVGhlIG5wYyBvYmplY3RcclxuXHQgKi9cclxuXHRzcGF3bk5QQyh4LCB5LCBucGMpIHtcclxuXHRcdGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIW5wYywgJ1RoZSBucGMgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBucGNTcHJpdGUgPSB0aGlzLmFkZC5zcHJpdGUoeCwgeSwgbnBjLnRleHR1cmVLZXksIG5wYy50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0bnBjU3ByaXRlLnNldFNjYWxlKDIpO1xyXG5cdFx0bnBjU3ByaXRlLnNldEFscGhhKDApO1xyXG5cdFx0bnBjU3ByaXRlLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRucGNTcHJpdGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIG5wYy5kZXNjcmlwdGlvbik7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG5wY1Nwcml0ZSxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRkdXJhdGlvbjogMjAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBnaXZlbiBpdGVtIG5hbWUgaXMgc2VsZWN0ZWRcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaXRlbU5hbWUgVGhlIGl0ZW0gbmFtZVxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGlzSXRlbVNlbGVjdGVkKGl0ZW1OYW1lKSB7XHJcblx0XHRhc3NlcnQoIWl0ZW1OYW1lLCAnVGhlIG5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUgPT09IGl0ZW1OYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnRzIHRoZSB0aW1lclxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZkhvdXJzIFRoZSBudW1iZXIgb2YgaG91cnNcclxuXHQgKi9cclxuXHRzdGFydFRpbWVyKG51bWJlck9mSG91cnMpIHtcclxuXHRcdGFzc2VydCghbnVtYmVyT2ZIb3VycywgJ1RoZSBudW1iZXJPZkhvdXJzIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0aWYgKCF0aGlzLmlzUnVubmluZykge1xyXG5cdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5jb3VudERvd25EYXRlID0gbmV3IERhdGUobm93ICsgbnVtYmVyT2ZIb3VycyAqIE5VTUJFUl9PRl9NSU5VVEVTICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlMTElTRUNPTkRTKS5nZXRUaW1lKCk7XHJcblx0XHRcdHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0XHR0aGlzLnRpbWVSZW1haW5pbmcgPSB0aGlzLmNvdW50RG93bkRhdGUgLSBub3c7XHJcblx0XHRcdFx0aWYgKG5vdyA+PSB0aGlzLmNvdW50RG93bkRhdGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmlzVGltZUVsYXBzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHRpbWUgcGVuYWxpdHlcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZVBlbmFsaXR5IFRoZSB0aW1lIHBlbmFsaXR5XHJcblx0ICovXHJcblx0YWRkVGltZVBlbmFsaXR5KHRpbWVQZW5hbGl0eSkge1xyXG5cdFx0dGhpcy5jb3VudERvd25EYXRlID0gbmV3IERhdGUodGhpcy5jb3VudERvd25EYXRlIC0gdGltZVBlbmFsaXR5ICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlMTElTRUNPTkRTKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSB0aGUgdGltZSBvbiB0aGUgZ2FtZSBzY2VuZS5cclxuXHQgKi9cclxuXHR1cGRhdGVUaW1lKCkge1xyXG5cdFx0aWYgKHRoaXMudGltZVRleHQpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBob3Vyc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoXHJcblx0XHRcdCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTlVURVMgKiBOVU1CRVJfT0ZfSE9VUlMpKSAvXHJcblx0XHRcdFx0KE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSU5VVEVTKVxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IG1pbnV0ZXNSZW1haW5pbmcgPSBNYXRoLmZsb29yKFxyXG5cdFx0XHQodGhpcy50aW1lUmVtYWluaW5nICUgKE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSU5VVEVTKSkgL1xyXG5cdFx0XHRcdChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMpXHJcblx0XHQpO1xyXG5cdFx0Y29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlIChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMpKSAvIE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMpO1xyXG5cdFx0aWYgKHRoaXMudGltZVJlbWFpbmluZykge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0ID0gdGhpcy5hZGQudGV4dCg5MTUsIDczMCwgYCR7aG91cnNSZW1haW5pbmd9OiR7bWludXRlc1JlbWFpbmluZ306JHtzZWNvbmRzUmVtYWluaW5nfWAsIHtcclxuXHRcdFx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJyxcclxuXHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgaG9vayB0aGF0IHJ1bnMgZXZlcnkgY3ljbGUuXHJcblx0ICovXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy51cGRhdGVUaW1lKCk7XHJcblx0XHRpZiAodGhpcy5pc1RpbWVFbGFwc2VkKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWVvdmVyJyk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zZWxlY3RlZEl0ZW0gJiYgIXRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0Y29uc3QgeyB4LCB5IH0gPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXI7XHJcblx0XHRcdGNvbnN0IHsgdGV4dHVyZUtleSwgdGV4dHVyZUZyYW1lIH0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbSA9IHRoaXMuYWRkLmltYWdlKHgsIHksIHRleHR1cmVLZXksIHRleHR1cmVGcmFtZSk7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0uc2V0U2NhbGUoMik7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0Y29uc3QgeyB4LCB5IH0gPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXI7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0ueCA9IHg7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0ueSA9IHk7XHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSAmJiB0aGlzLnBvaW50ZXJJdGVtKSB7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgZm9yIHRoZSBnYW1lIG92ZXIgc2NlbmUuXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3R1Y3RvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZ2FtZW92ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBQaGFzZXIgaG9vayBydW5zIG9uY2UuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDM4NCwgJ0dhbWUgb3ZlcicsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIGZvciB0aGUgbG9hZGluZyBzY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdsb2FkaW5nJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcmVsb2FkIFBoYXNlciBob29rIHJ1bnMgb25seSBvbmNlXHJcblx0ICovXHJcblx0cHJlbG9hZCgpIHtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLW9uZScsICdhc3NldHMvanNvbi9yb29tLW9uZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tdHdvJywgJ2Fzc2V0cy9qc29uL3Jvb20tdHdvLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS10aHJlZScsICdhc3NldHMvanNvbi9yb29tLXRocmVlLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1mb3VyJywgJ2Fzc2V0cy9qc29uL3Jvb20tZm91ci1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tZml2ZScsICdhc3NldHMvanNvbi9yb29tLWZpdmUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXNpeCcsICdhc3NldHMvanNvbi9yb29tLXNpeC1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjYXN0bGUtdGlsZXMnLCAnYXNzZXRzL2ltZy9jYXN0bGUtdGlsZXMvVGlsZXNldC5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnY3JlZXB5LXRpbGVzJywgJ2Fzc2V0cy9pbWcvdGlsZXMucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ2NvbnRhaW5lcnMnLCAnYXNzZXRzL2ltZy9jb250YWluZXIvY29udGFpbmVyLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKExvYWRlcktleS5NRU5VX0lNQUdFLCAnYXNzZXRzL2ltZy9jYXN0bGUucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2R1bmdlb24tY3Jhd2wnLCAnYXNzZXRzL2ltZy9kdW5nZW9uLWNyYXdsLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuSVRFTVMsICdhc3NldHMvaW1nL2l0ZW1zLnBuZycsIHsgZnJhbWVXaWR0aDogMTYsIGZyYW1lSGVpZ2h0OiAxNiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldCgndHJlYXN1cmUxJywgJ2Fzc2V0cy9pbWcvVHJlYXN1cmUgSWNvbnMvdHJlYXN1cmUxLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuQ0hFU1QsICdhc3NldHMvaW1nL2NoZXN0LnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuRE9PUiwgJ2Fzc2V0cy9pbWcvZG9vci5wbmcnLCB7IGZyYW1lV2lkdGg6IDI0LCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LlNBRkUsICdhc3NldHMvaW1nL3NhZmUucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDQwIH0pO1xyXG5cdFx0dGhpcy5sb2FkLmF1ZGlvKCdvcGVuLWRvb3ItYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9jcmVha3ktZG9vci1oaW5nZS53YXYnKTtcclxuXHRcdHRoaXMubG9hZC5hdWRpbygnb3Blbi1jaGVzdC1hdWRpbycsICdhc3NldHMvc291bmRzL29wZW4tY2hlc3Qud2F2Jyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ3B1c2gtYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9zZngtcHVzaC1ib3VsZGVyLmZsYWMnKTtcclxuXHRcdHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ21lbnUnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSBmb3IgdGhlIG1lbnUgc2NlbmVcclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMjVcclxuICogQGV4dGVuZHMgUGhhc2VyLlNjZW5lXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ21lbnUnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBQaGFzZXIuanMgaG9vayBydW5zIG9ubHkgb25jZVxyXG5cdCAqL1xyXG5cdGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuYWRkLmltYWdlKDAsIDAsIExvYWRlcktleS5NRU5VX0lNQUdFKS5zZXRPcmlnaW4oMCkuc2V0U2NhbGUoMC44KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCgzNTAsIDM4NCwgJ0VzY2FwZSBmcm9tIHRoZSBjYXN0bGUnLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMzJweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgY2xpY2tUb0NvbnRpbnVlID0gdGhpcy5hZGQudGV4dCg1MTIsIDQ2MCwgJ0NsaWNrIHRvIHN0YXJ0IHRoZSBnYW1lJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdH0pO1xyXG5cdFx0Y2xpY2tUb0NvbnRpbnVlLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgUGhhc2VyLmpzIGhvb2sgcnVucyBldmVyeSBjeWNsZS5cclxuXHQgKi9cclxuXHR1cGRhdGUoKSB7XHJcblx0XHRpZiAodGhpcy5pbnB1dC5tYW5hZ2VyLmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWUnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgZm9yIHRoZSB3aW5uaW5nIHNjZW5lXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCd3aW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBQaGFzZXIuanMgaG9vay4gUnVucyBvbmx5IG9uY2VcclxuICAgICAqL1xyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDUxMiwgMzg0LCAnQ29uZ3JhdHVsYXRpb25zIGZvciBlc2NhcGluZz8gVGhhbmsgeW91IGZvciBwbGF5aW5nIScsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBJbnZhbGlkQXJndW1lbnRFcnJvciBmcm9tICcuLi9lcnJvcnMvSW52YWxpZGFBcmd1bWVudEVycm9yJztcclxuXHJcbi8qKlxyXG4gKiBBc3NlcnQgY29uZGl0aW9uIGFtZCB0aHJvdyBlcnJvciBtZXNzYWdlIGlmIGNvbmRpdGlvbiBpcyBub3QgbWV0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZGl0aW9uIFRoZSBjb25kaXRpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcblx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0dGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKG1lc3NhZ2UpO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL2Fzc2VydC11dGlscyc7XHJcbmltcG9ydCB7IE1vZGFsU2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgYSBtb2RhbCB3aW5kb3cgd2l0aCB0ZXh0XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlNjZW5lfSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaXplIFRoZSBtb2RhbCBzaXplXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsb3NlQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGwgd2hlbiBtb2RhbCBpcyBjbG9zZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGV4dE1vZGFsKHNjZW5lLCB0ZXh0LCBzaXplID0gTW9kYWxTaXplLlJFR1VMQVIsIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCghdGV4dCwgJ1RoZSB0ZXh0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0bGV0IGJveCA9IG51bGw7XHJcblx0bGV0IGNsb3NlVGV4dCA9IG51bGw7XHJcblxyXG5cdHN3aXRjaCAoc2l6ZSkge1xyXG5cdFx0Y2FzZSBNb2RhbFNpemUuUkVHVUxBUjpcclxuXHRcdFx0Ym94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDE1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdFx0Y2xvc2VUZXh0ID0gc2NlbmUuYWRkXHJcblx0XHRcdFx0LnRleHQoMTU1LCAtNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIE1vZGFsU2l6ZS5MQVJHRTpcclxuXHRcdFx0Y2xvc2VUZXh0ID0gc2NlbmUuYWRkXHJcblx0XHRcdFx0LnRleHQoMTU1LCAtMTY5LCAnQ2xvc2UgWCcsIHtcclxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdFx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRjb25zdCB0ZXh0T2JqID0gc2NlbmUuYWRkXHJcblx0XHQudGV4dCgwLCAwLCB0ZXh0LCB7XHJcblx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0d2lkdGg6IDQwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0fSlcclxuXHRcdC5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cdG1vZGFsLmFkZChbYm94LCB0ZXh0T2JqLCBjbG9zZVRleHRdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXlzIGEgbW9kYWwgd2luZG93IHRoYXQgd2l0aCBhbiBpbWFnZVxyXG4gKiBAcGFyYW0ge1BoYXNlci5TY2VuZX0gc2NlbmUgVGhlIFBoYXNlciBzY2VuZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VLZXkgVGhlIFBoYXNlciBsb2FkZXIga2V5IGZvciB0aGUgaW1hZ2VcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xvc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbWFnZU1vZGFsKHNjZW5lLCBpbWFnZUtleSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCFpbWFnZUtleSwgJ1RoZSBpbWFnZUtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0Y29uc3QgaW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgMCwgaW1hZ2VLZXkpLnNldE9yaWdpbigwLjUpO1xyXG5cdGltYWdlLnNldERpc3BsYXlTaXplKGJveC53aWR0aCAtIDYwLCBib3guaGVpZ2h0IC0gNjApO1xyXG5cclxuXHRjb25zdCBjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdC50ZXh0KDE1NSwgLTE2OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdG1vZGFsLmRlc3Ryb3koKTtcclxuXHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdGFscGhhOiAxLFxyXG5cdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRkdXJhdGlvbjogMjAwXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZChbYm94LCBpbWFnZSwgY2xvc2VUZXh0XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyBhIG1vZGFsIHdpbmRvdyB3aXRoIHRleHQgYW5kIGl0ZW0gaW5mb3JtYXRpb25cclxuICogQHBhcmFtIHtvYmplY3R9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcclxuICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1EZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgaXRlbVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbVRleHR1cmUgVGhlIHRleHR1cmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpdGVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtRnJhbWUgIFRoZSBmcmFtZSBhc3NvY2lhdGVkIHdpdGggdGhlIGl0ZW1cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xvc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0l0ZW1Nb2RhbChzY2VuZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lLCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0YXNzZXJ0KCFzY2VuZSwgJ1RoZSBzY2VuZSBpcyB1bmRlZmluZWQnKTtcclxuXHRhc3NlcnQoIWl0ZW1EZXNjcmlwdGlvbiwgJ1RoZSBpdGVtRGVzY3JpcHRpb24gaXMgdW5kZWZpbmVkJyk7XHJcblx0Y29uc3QgYmxvY2tlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgc2NlbmUuc2NhbGUud2lkdGgsIHNjZW5lLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0Y29uc3QgbW9kYWwgPSBzY2VuZS5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRjb25zdCBib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDQ1MCwgMTUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdGNvbnN0IGNsb3NlVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0LnRleHQoMTU1LCAtNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0fSlcclxuXHRcdC5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdH0pO1xyXG5cclxuXHRjb25zdCBpdGVtSW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgLTEwLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lKS5zZXRTY2FsZSgyKTtcclxuXHRjb25zdCBpdGVtRGVzY3JpcHRpb25UZXh0ID0gc2NlbmUuYWRkXHJcblx0XHQudGV4dCgwLCAzMCwgaXRlbURlc2NyaXB0aW9uLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGQoW2JveCwgaXRlbUltYWdlLCBpdGVtRGVzY3JpcHRpb25UZXh0LCBjbG9zZVRleHRdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiLi9hc3NlcnQtdXRpbHNcIjtcbmltcG9ydCB7IFRpbGVtYXBMYXllciwgRGlyZWN0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBHZXQgdGhlIHRpbGVzIGJhc2VkIG9uIHRoZSB3b3JsZCBjb29yZGluYXRlcywgd2lkdGggYW5kIGhlaWdodFxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFxuICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVyIFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRpbGVNYXAsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxheWVyID0gVGlsZW1hcExheWVyLkZPUkVHUk9VTkQpIHtcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcbiAgICBhc3NlcnQoIXgsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcbiAgICBhc3NlcnQoIXksICdUaGUgeSBpcyB1bmRlZmluZWQnKTtcbiAgICBhc3NlcnQoIXdpZHRoLCAnVGhlIHdpZHRoIGlzIHVuZGVmaW5lZCcpO1xuICAgIGFzc2VydCghaGVpZ2h0LCAnVGhlIGhlaWdodCBpcyB1bmRlZmluZWQnKTtcbiAgICByZXR1cm4gdGlsZU1hcC5nZXRUaWxlc1dpdGhpbldvcmxkWFkoXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlzTm90RW1wdHk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbGF5ZXJcbiAgICApO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aWxlcyBmcm9tIFRpbGVtYXBcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRpbGVzKHRpbGVNYXAsIHRpbGVzKSB7XG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgZ2l2ZW4gdGlsZXMgd2l0aCBuZXcgdGlsZXMgXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxuICogQHBhcmFtIHtBcnJheX0gb2xkVGlsZXMgXG4gKiBAcGFyYW0ge0FycmF5fSBuZXdUaWxlcyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUaWxlcyh0aWxlTWFwLCBvbGRUaWxlcywgbmV3VGlsZXMpIHtcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcbiAgICBhc3NlcnQoIW9sZFRpbGVzLCAnVGhlIG9sZFRpbGVzIGlzIHVuZGVmaW5lZCcpO1xuICAgIGFzc2VydCghbmV3VGlsZXMsICdUaGUgbmV3VGlsZXMgaXMgdW5kZWZpbmVkJyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG9sZFRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChuZXdUaWxlc1tpXSkge1xuICAgICAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQobmV3VGlsZXNbaV0sIG9sZFRpbGVzW2ldLngsIG9sZFRpbGVzW2ldLnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIE1vdmUgdGlsZXMgb24gdGhlIFRpbGVtYXAgYSBmb3IgZ2l2ZW4gZGlyZWN0aW9uIGFuZCB2ZWxvY2l0eVxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIFxuICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBcbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlcyh0aWxlTWFwLCB0aWxlcywgZGlyZWN0aW9uLCB2ZWxvY2l0eSkge1xuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XG4gICAgYXNzZXJ0KCFkaXJlY3Rpb24sICdUaGUgZGlyZWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgIG1vdmVUaWxlc0xlZnQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgICAgIG1vdmVUaWxlc1JpZ2h0KHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XG4gICAgICAgICAgICBtb3ZlVGlsZXNVcCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLkRPV046XG4gICAgICAgICAgICBtb3ZlVGlsZURvd24odGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRpbGVzIHRvIHRoZSBsZWZ0IG9uIHRoZSBUaWxlbWFwIGZvciBhIGdpdmVuIHZlbG9jaXR5XG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXG4gKiBAcGFyYW0ge0FycmF5fSB2ZWxvY2l0eSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlc0xlZnQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCAtIHZlbG9jaXR5LCB0aWxlc1tpXS55KTtcbiAgICB9XG59XG5cbi8qKlxuICogTW92ZSB0aWxlcyB0byB0aGUgcmlnaHQgb24gdGhlIFRpbGVtYXAgZm9yIGEgZm9yIGdpdmVuIHZlbG9jaXR5XG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXG4gKiBAcGFyYW0ge0FycmF5fSB2ZWxvY2l0eSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlc1JpZ2h0KHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSkge1xuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLnggKyB2ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XG4gICAgfVxufVxuXG4vKipcbiAqIE1vdmUgdGlsZXMgdXAgb24gdGhlIFRpbGVtYXAgZm9yIGEgZ2l2ZW4gdmVsb2NpdHlcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxuICovXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRpbGVzVXAodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSAtIHZlbG9jaXR5KTtcbiAgICB9XG59XG5cbi8qKlxuICogTW92ZSB0aWxlcyBkb3duIG9uIHRoZSBUaWxlbWFwIGZvciBhIGdpdmVuIHZlbG9jaXR5XG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXG4gKiBAcGFyYW0ge0FycmF5fSB2ZWxvY2l0eSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlRG93bih0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpIHtcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54LCB0aWxlc1tpXS55ICsgdmVsb2NpdHkpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fZHJhY3VsYV9jYXN0bGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fZHJhY3VsYV9jYXN0bGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9