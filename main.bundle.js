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
	NAVIGATE_TO_SCENE: 'navigateToScene',
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
	TURN_ON_LIGHT: 'TURN_ON_LIGHT',
	TURN_OFF_LIGHT: 'TURN_OFF_LIGHT'
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
	navigateToScene = null;
	constraintMessage = null;
	timePenality = 0;
	timePenalityMessage = null;
	audioClipKey;
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
			let { type, velocity, newTiles, direction, text, textureKey, repeat, alpha } = this.action;

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
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TURN_ON_LIGHT: {
					this.scene.turnOnLight();
					break;
				}
				case _constants__WEBPACK_IMPORTED_MODULE_1__.ActionType.TURN_OFF_LIGHT: {
					this.scene.turnOffLight();
					break;
				}
			}
			if (this.spawn) {
				this.spawnObject(this.spawn, type);
			}
			if (this.navigateTo) {
				this.scene.changeRoom(this.navigateTo);
			}
			if (this.navigateToScene) {
				this.scene.scene.start(this.navigateToScene);
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
	 * Sets the navigateToScene
	 * @param {string} navigateToScene
	 */
	setNavigateToScene(navigateToScene) {
		this.navigateToScene = navigateToScene;
	}

	/**
	 * Returns the navigateToScene
	 * @returns {string}
	 */
	getNavigateToScene() {
		return this.navigateToScene;
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
		this.audioClipKey = audioClipKey;
	}

	/**
	 * Returns the audio clip key
	 * @returns {string}
	 */
	getAudioClipKey() {
		return this.audioClipKey;
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
/* harmony import */ var _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/InteractiveZone */ "./src/entities/InteractiveZone.js");
/* harmony import */ var _utils_modal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/modal-utils */ "./src/utils/modal-utils.js");
/* harmony import */ var _utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/assert-utils */ "./src/utils/assert-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");







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
	tileMap = null;
	zones = [];
	items = [];
	npcs = [];
	texts = [];
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
		this.addRoomOverlay();
		this.loadRoom('room-six');
		this.addHud();
		this.startTimer(1);
	}

	/**
	 * Add overlay over room to control room light
	 */
	addRoomOverlay() {
		this.roomOverlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0.5);
		this.roomOverlay.setVisible(false);
		this.roomOverlay.setOrigin(0);
		this.roomOverlay.setDepth(1000);
	}

	/**
	 * Turn off light
	 */
	turnOffLight() {
		this.roomOverlay.setVisible(true);
	}

	/**
	 * Turn on light
	 */
	turnOnLight() {
		this.roomOverlay.setVisible(false);
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
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!roomName, 'The roomName is undefined');
		this.roomName = roomName;
		this.dirtyObjectMap = new Map();
		this.cameras.main.fadeIn(TRANSITION_DELAY, 0, 0, 0);
		this.tileMap = this.createTileMap(roomName);

		const castleTiles = this.addTileSet(this.tileMap, 'castle-tiles', 'castle-tiles');
		const creepyTiles = this.addTileSet(this.tileMap, 'creepy-tiles', 'creepy-tiles');
		const containers = this.addTileSet(this.tileMap, 'containers', 'containers');
		const { objectsLayer, foregroundLayer } = this.getTileMapLayers(this.tileMap, [creepyTiles, castleTiles, containers]);

		this.addTileMapObjects(objectsLayer);

		const screenText = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.SCREEN_TEXT);
		const modalSize = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.MODAL_SIZE);
		(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_2__.showTextModal)(this, screenText, modalSize);
	}

	/**
	 * Change room loaded on the game scene
	 * @param {String} roomName The game scene.
	 */
	changeRoom(roomName) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!roomName, 'The roomName is undefined');
		this.cameras.main.fadeOut(TRANSITION_DELAY, 0, 0, 0, (camera, progress) => {
			if (progress === 1) {
				this.resetRoom();
				this.loadRoom(roomName);
			}
		});
	}

	/**
	 * Reset room by destroying room objects.
	 */
	resetRoom() {
		this.turnOnLight();
		this.zones.forEach((zone) => {
			zone.destroy();
		});
		this.npcs.forEach((npc) => {
			npc.destroy();
		});
		this.texts.forEach((text) => {
			text.destroy();
		});
	}

	/**
	 * Create a Phaser.Tilemaps.Tilemap object
	 * @param {string} tileMapKey The key of the tile map.
	 * @returns {Phaser.Tilemaps.Tilemap}
	 */
	createTileMap(tileMapKey) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileMapKey, 'The tileMapKey is undefined');
		return this.make.tilemap({ key: tileMapKey });
	}

	/**
	 * Add tile set image to the Phaser.Tilemaps.Tilemap object
	 * @param {Phaser.Tilemaps.Tilemap} tileMap The tile map
	 * @param {string} tileSetKey The tile set key
	 * @param {string} imageTextureKey The image texture key
	 */
	addTileSet(tileMap, tileSetKey, imageTextureKey) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileMap, 'The tileMap is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileSetKey, 'The tileSetKey is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!imageTextureKey, 'The tileSetTextureKey is undefined');
		return tileMap.addTilesetImage(tileSetKey, imageTextureKey);
	}

	/**
	 * Returns the tile map layers associated with the tile map
	 * @param {Phaser.Tilemaps.Tilemap} tileMap The tile map
	 * @param {Array} tileSets
	 */
	getTileMapLayers(tileMap, tileSets) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileMap, 'The tileMap is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileSets, 'The tileSets is undefined');
		const backgroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_4__.TilemapLayer.BACKGROUND, tileSets);
		const foregroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_4__.TilemapLayer.FOREGROUND, tileSets);
		const objectsLayer = tileMap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_4__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	/**
	 * Add Tile map objects to the game scene.
	 * @param {Phaser.Tilemaps.ObjectLayer} objectsLayer The objects layer
	 */
	addTileMapObjects(objectsLayer) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!objectsLayer, 'The objectsLayer is undefined');
		const tileMapObjects = objectsLayer.objects;
		for (let i = 0, len = tileMapObjects.length; i < len; i++) {
			switch (tileMapObjects[i].type) {
				case _constants__WEBPACK_IMPORTED_MODULE_4__.EntityType.INTERACTIVE_ZONE:
					this.zones.push(this.addInteractiveZone(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_4__.EntityType.TEXT:
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
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!propertyName, 'The propertyName is undefined');
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
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		const zone = new _entities_InteractiveZone__WEBPACK_IMPORTED_MODULE_1__["default"](
			this,
			tileMapObject.name,
			tileMapObject.x,
			tileMapObject.y,
			tileMapObject.width,
			tileMapObject.height
		);
		zone.setAction(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.ACTION));
		zone.setConstraints(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.CONSTRAINTS));
		zone.setConstraintMessage(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.CONSTRAINT_MESSAGE));
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.NAVIGATE_TO));
		zone.setNavigateToScene(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.NAVIGATE_TO_SCENE));
		zone.setSpawn(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.SPAWN));
		zone.setTimePenality(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.TIME_PENALITY));
		zone.setTimePenalityMessage(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.TIME_PENALITY_MESSAGE));
		zone.setAudioClipKey(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.AUDIO_CLIP_KEY));
		zone.setCursor(false);

		const events = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.EVENTS);

		if (events) {
			const { listenTo, emit } = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_4__.CustomProperty.EVENTS);

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
	 * @returns {boolean}
	 */
	addText(tileMapObject) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!tileMapObject, 'The tileMapObject is undefined');
		console.log(tileMapObject);
		const { x, y, text } = tileMapObject;
		const { color, fontfamily, halign, pixelsize } = text;
		const textObj = this.add.text(x, y, text.text, {
			fontFamily: fontfamily,
			fontSize: `${pixelsize}px`,
			fill: color,
			align: halign
		});
		return textObj;
	}

	/**
	 * Spawn item on the game scene
	 * @param {number} x The x coordinate
	 * @param {number} y The y coordinate
	 * @param {Object} item
	 */
	spawnItem(x, y, item) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!x, 'The x is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!y, 'The y is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!item, 'The item is undefined');
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
			(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_2__.showItemModal)(this, item.description, item.textureKey, item.textureFrame, () => {
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
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!x, 'The x is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!y, 'The y is undefined');
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!npc, 'The npc is undefined');
		const npcSprite = this.add.sprite(x, y, npc.textureKey, npc.textureFrame);
		npcSprite.setScale(2);
		npcSprite.setAlpha(0);
		npcSprite.setInteractive({
			useHandCursor: true
		});
		npcSprite.on('pointerdown', () => {
			(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_2__.showTextModal)(this, npc.description);
		});
		this.npcs.push(npcSprite);
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
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!itemName, 'The name is undefined');
		return this.selectedItem?.name === itemName;
	}

	/**
	 * Starts the timer
	 * @param {number} numberOfHours The number of hours
	 */
	startTimer(numberOfHours) {
		(0,_utils_assert_utils__WEBPACK_IMPORTED_MODULE_3__.assert)(!numberOfHours, 'The numberOfHours is undefined');
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



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
		this.add.image(0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.MENU_IMAGE).setOrigin(0).setScale(0.8).setAlpha(0.5);

		const text = this.add.text(400, 300, 'Game over!', {
			fontSize: '32px',
			fontFamily: 'Verdana'
		});

		this.add
			.text(
				516,
				400,
				'Alas, you failed to escape the castle in time, and now your soul is doomed to linger forever within its walls.',
				{
					fontSize: '16px',
					fontFamily: 'Verdana',
					wordWrap: {
						width: 400
					}
				}
			)
			.setOrigin(0.5, 0.5);
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



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
		this.add.image(0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__.LoaderKey.MENU_IMAGE).setOrigin(0).setScale(0.8).setAlpha(0.5);

        const text = this.add.text(260, 300, 'Congratulations! You’ve escaped!', {
			fontSize: '32px',
			fontFamily: 'Verdana'
		});

		this.add
			.text(516,
				400,
				'At last, I’ve won my freedom. But as I step beyond the castle gates, the truth returns I had amnesia. This was my castle, and I was my own prisoner.',
				{
					fontSize: '16px',
					fontFamily: 'Verdana',
					wordWrap: {
						width: 400
					}
				}
			)
			.setOrigin(0.5, 0.5);
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkescape_from_the_castle"] = self["webpackChunkescape_from_the_castle"] || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSjBCO0FBQzhDO0FBQzNCO0FBQ3NEO0FBQ2hDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsOEJB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QTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9lbnRpdGllcy9JbnRlcmFjdGl2ZVpvbmUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9lcnJvcnMvSW52YWxpZGFBcmd1bWVudEVycm9yLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3NjZW5lcy9HYW1lT3Zlci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3NjZW5lcy9Mb2FkaW5nLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvc2NlbmVzL01lbnUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9zY2VuZXMvV2luLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvdXRpbHMvYXNzZXJ0LXV0aWxzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvdXRpbHMvbW9kYWwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy91dGlscy90aWxlbWFwLXV0aWxzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHtcclxuXHRDT01CSU5BVElPTjogJ2NvbWJpbmF0aW9uJyxcclxuXHRQUk9NUFRfTUVTU0FHRTogJ3Byb21wdE1lc3NhZ2UnLFxyXG5cdFNQQVdOOiAnc3Bhd24nLFxyXG5cdFNQQVdOX0lURU06ICdzcGF3bkl0ZW0nLFxyXG5cdExPQ0tFRDogJ2xvY2tlZCcsXHJcblx0TE9DS0VEX01FU1NBR0U6ICdsb2NrZWRNZXNzYWdlJyxcclxuXHRBQ1RJT046ICdhY3Rpb24nLFxyXG5cdENPTlNUUkFJTlRTOiAnY29uc3RyYWludHMnLFxyXG5cdE5BVklHQVRFX1RPOiAnbmF2aWdhdGVUbycsXHJcblx0TkFWSUdBVEVfVE9fU0NFTkU6ICduYXZpZ2F0ZVRvU2NlbmUnLFxyXG5cdENPTlNUUkFJTlRfTUVTU0FHRTogJ2NvbnN0cmFpbnRNZXNzYWdlJyxcclxuXHRFVkVOVFM6ICdldmVudHMnLFxyXG5cdFNDUkVFTl9URVhUOiAnc2NyZWVuVGV4dCcsXHJcblx0TU9EQUxfU0laRTogJ21vZGFsU2l6ZScsXHJcblx0VElNRV9QRU5BTElUWTogJ3RpbWVQZW5hbGl0eScsXHJcblx0VElNRV9QRU5BTElUWV9NRVNTQUdFOiAndGltZVBlbmFsaXR5TWVzc2FnZScsXHJcblx0QVVESU9fQ0xJUF9LRVk6ICdhdWRpb0NsaXBLZXknXHJcbn07XHJcblxyXG5jb25zdCBBY3Rpb25UeXBlID0ge1xyXG5cdE1PVkVfVElMRTogJ01PVkVfVElMRScsXHJcblx0VE9HR0xFX1RJTEVfTU9WRU1FTlQ6ICdUT0dHTEVfVElMRV9NT1ZFTUVOVCcsXHJcblx0REVTVFJPWV9USUxFOiAnREVTVFJPWV9USUxFJyxcclxuXHRSRVBMQUNFX1RJTEU6ICdSRVBMQUNFX1RJTEUnLFxyXG5cdFRPR0dMRV9USUxFOiAnVE9HR0xFX1RJTEUnLFxyXG5cdFNIT1dfVEVYVDogJ1NIT1dfVEVYVCcsXHJcblx0U0hPV19JTUFHRTogJ1NIT1dfSU1BR0UnLFxyXG5cdERFU1RST1k6ICdERVNUUk9ZJyxcclxuXHRUVVJOX09OX0xJR0hUOiAnVFVSTl9PTl9MSUdIVCcsXHJcblx0VFVSTl9PRkZfTElHSFQ6ICdUVVJOX09GRl9MSUdIVCdcclxufTtcclxuXHJcbmNvbnN0IFNwYXduVHlwZSA9IHtcclxuXHRJVEVNOiAnSVRFTScsXHJcblx0TlBDOiAnTlBDJ1xyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG5cdExFRlQ6ICdMRUZUJyxcclxuXHRSSUdIVDogJ1JJR0hUJyxcclxuXHRVUDogJ1VQJyxcclxuXHRET1dOOiAnRE9XTidcclxufTtcclxuXHJcbmNvbnN0IFJvdGF0aW9uID0ge1xyXG5cdFJPVEFURV85MDogJzkwJyxcclxuXHRST1RBVEVfMTgwOiAnMTgwJyxcclxuXHRST1RBVEVfMjcwOiAnMjcwJ1xyXG59O1xyXG5cclxuY29uc3QgTW9kYWxTaXplID0ge1xyXG5cdFJFR1VMQVI6ICdSRUdVTEFSJyxcclxuXHRMQVJHRTogJ0xBUkdFJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZW1hcExheWVyID0ge1xyXG5cdEJBQ0tHUk9VTkQ6ICdiYWNrZ3JvdW5kJyxcclxuXHRGT1JFR1JPVU5EOiAnZm9yZWdyb3VuZCcsXHJcblx0T0JKRUNUUzogJ29iamVjdHMnXHJcbn07XHJcblxyXG5jb25zdCBFbnRpdHlUeXBlID0ge1xyXG5cdERPT1I6ICdEb29yJyxcclxuXHRTQUZFOiAnU2FmZScsXHJcblx0Q0hFU1Q6ICdDaGVzdCcsXHJcblx0VEVYVDogJ1RleHQnLFxyXG5cdElOVEVSQUNUSVZFX1pPTkU6ICdJbnRlcmFjdGl2ZVpvbmUnXHJcbn07XHJcblxyXG5jb25zdCBMb2FkZXJLZXkgPSB7XHJcblx0VElMRU1BUDogJ3RpbGVtYXAnLFxyXG5cdFRJTEVTRVQ6ICd0aWxlcycsXHJcblx0SVRFTVM6ICdpdGVtcycsXHJcblx0VUk6ICd1aScsXHJcblx0Q0hFU1Q6ICdjaGVzdCcsXHJcblx0RE9PUjogJ2Rvb3InLFxyXG5cdFNBRkU6ICdzYWZlJyxcclxuXHRNRU5VX0lNQUdFOiAnbWVudS1pbWFnZSdcclxufTtcclxuXHJcbmNvbnN0IFRpbGUgPSB7XHJcblx0U0lHTjogMTQ0LFxyXG5cdENMT1NFX1dJTkRPVzogMjU4LFxyXG5cdE9QRU5fV0lORE9XOiAyMzUsXHJcblx0Q09GRklOOiBbNzEsIDk1XSxcclxuXHRERVNUUk9ZRURfS05JR0hUOiA5NixcclxuXHRUT1BfQ0hBSVI6IDMxMixcclxuXHRNSURETEVfQ0hBSVI6IDMzNixcclxuXHRCT1RUT01fQ0hBSVI6IDM2MCxcclxuXHRIT0xFX0lOX1dBTEw6IDI0OSxcclxuXHRUT1BfTEVGVF9HQVJHT1lMRTogMjMyLFxyXG5cdFRPUF9SSUdIVF9HQVJHT1lMRTogMjMzLFxyXG5cdEJPVFRPTV9MRUZUX0dBUkdPWUxFOiAyNTYsXHJcblx0Qk9UVE9NX1JJR0hUX0dBUkdPWUxFOiAyNTcsXHJcblx0VE9QX0xFRlRfV0FURVI6IDEwLFxyXG5cdFRPUF9DRU5URVJfV0FURVI6IDExLFxyXG5cdFRPUF9SSUdIVF9XQVRFUjogMTIsXHJcblx0TUlERExFX0xFRlRfV0FURVI6IDM0LFxyXG5cdE1JRERMRV9DRU5URVJfV0FURVI6IDM1LFxyXG5cdE1JRERMRV9SSUdIVF9XQVRFUjogMzYsXHJcblx0Qk9UVE9NX0xFRlRfV0FURVI6IDU4LFxyXG5cdEJPVFRPTV9DRU5URVJfV0FURVI6IDU5LFxyXG5cdEJPVFRPTV9SSUdIVF9XQVRFUjogNjAsXHJcblx0RElHR0VEX0hPTEU6IDMxNixcclxuXHRTVEFJUjogMTI0XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0ge1xyXG5cdEJPT0s6ICdib29rJyxcclxuXHRIQU1NRVI6ICdoYW1tZXInLFxyXG5cdFBJQ0tBWEU6ICdwaWNrYXhlJyxcclxuXHRLRVk6ICdrZXknLFxyXG5cdE1BU1RFUl9LRVk6ICdtYXN0ZXIta2V5JyxcclxuXHRJQ0VfUk9EOiAnaWNlLXJvZCcsXHJcblx0UE9USU9OOiAncG90aW9uJyxcclxuXHRTSE9WRUw6ICdzaG92ZWwnLFxyXG5cdFJJTkc6ICdyaW5nJ1xyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0aW9uID0ge1xyXG5cdERPT1JfT1BFTjogJ2Rvb3Itb3BlbicsXHJcblx0U0FGRV9PUEVOOiAnc2FmZS1vcGVuJyxcclxuXHRDSEVTVF9PUEVOOiAnY2hlc3Qtb3BlbidcclxufTtcclxuXHJcbmNvbnN0IEZyYW1lID0ge1xyXG5cdE1BU1RFUl9LRVk6IDUxLFxyXG5cdFBJQ0tBWEU6IDgzLFxyXG5cdFBPVElPTjogNjEsXHJcblx0S0VZOiA1MCxcclxuXHRSSU5HOiAxM1xyXG59O1xyXG5cclxuT2JqZWN0LmZyZWV6ZShUaWxlbWFwTGF5ZXIpO1xyXG5PYmplY3QuZnJlZXplKEN1c3RvbVByb3BlcnR5KTtcclxuT2JqZWN0LmZyZWV6ZShMb2FkZXJLZXkpO1xyXG5PYmplY3QuZnJlZXplKEVudGl0eVR5cGUpO1xyXG5PYmplY3QuZnJlZXplKFRpbGUpO1xyXG5PYmplY3QuZnJlZXplKEl0ZW0pO1xyXG5PYmplY3QuZnJlZXplKEFuaW1hdGlvbik7XHJcbk9iamVjdC5mcmVlemUoRnJhbWUpO1xyXG5PYmplY3QuZnJlZXplKERpcmVjdGlvbik7XHJcbk9iamVjdC5mcmVlemUoQWN0aW9uVHlwZSk7XHJcblxyXG5leHBvcnQge1xyXG5cdFRpbGVtYXBMYXllcixcclxuXHRDdXN0b21Qcm9wZXJ0eSxcclxuXHRMb2FkZXJLZXksXHJcblx0RW50aXR5VHlwZSxcclxuXHRUaWxlLFxyXG5cdEl0ZW0sXHJcblx0QW5pbWF0aW9uLFxyXG5cdEZyYW1lLFxyXG5cdEFjdGlvblR5cGUsXHJcblx0RGlyZWN0aW9uLFxyXG5cdFNwYXduVHlwZSxcclxuXHRNb2RhbFNpemUsXHJcblx0Um90YXRpb25cclxufTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBEaXJlY3Rpb24sIFNwYXduVHlwZSwgUm90YXRpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuLi91dGlscy9hc3NlcnQtdXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRUaWxlc1dpdGhpbldvcmxkWFksIHJlbW92ZVRpbGVzLCByZXBsYWNlVGlsZXMsIG1vdmVUaWxlcyB9IGZyb20gJy4uL3V0aWxzL3RpbGVtYXAtdXRpbHMnO1xyXG5pbXBvcnQgeyBzaG93SW1hZ2VNb2RhbCwgc2hvd1RleHRNb2RhbCB9IGZyb20gJy4uL3V0aWxzL21vZGFsLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYW4gSW50ZXJhY3Rpb25ab25lIGluIHRoZSBlc2NhcGUgcm9vbVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGl2ZVpvbmUgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcclxuXHRhY3Rpb24gPSBudWxsO1xyXG5cdGNvbnN0cmFpbnRzID0gbnVsbDtcclxuXHRzcGF3biA9IG51bGw7XHJcblx0bmF2aWdhdGVUbyA9IG51bGw7XHJcblx0bmF2aWdhdGVUb1NjZW5lID0gbnVsbDtcclxuXHRjb25zdHJhaW50TWVzc2FnZSA9IG51bGw7XHJcblx0dGltZVBlbmFsaXR5ID0gMDtcclxuXHR0aW1lUGVuYWxpdHlNZXNzYWdlID0gbnVsbDtcclxuXHRhdWRpb0NsaXBLZXk7XHJcblx0ZGlydHkgPSBmYWxzZTtcclxuXHRuYW1lID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKiBAcGFyYW0ge1BoYXNlci5TY2VuZX0gc2NlbmUgVGhlIFBoYXNlciBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHpvbmVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgem9uZSB4IGNvb3JkaW5hdGVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgem9uZSB5IGNvb3JkaW5hdGVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggVGhlIHpvbmUgd2lkdGhcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFRoZSB6b25lIGhlaWdodFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCBuYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcihzY2VuZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5zZXRPcmlnaW4oMCwgMCk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBFeGVjdXRlIHRoZSBhY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gdXNlZCBvbiB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7TWFwfSBkaXJ0eU9iamVjdE1hcCBUaGUgbWFwIG9mIGRpcnR5IG9iamVjdHNcclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlQ2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhY3Rpb24gaXMgY29tcGxldGVkLlxyXG5cdCAqL1xyXG5cdGV4ZWN1dGVBY3Rpb24oaXRlbSwgZGlydHlPYmplY3RNYXAsIG9uQ29tcGxldGVDYWxsYmFjaykge1xyXG5cdFx0bGV0IGl0ZW1Vc2VkID0gZmFsc2U7XHJcblx0XHRsZXQgdGlsZXMgPSBudWxsO1xyXG5cdFx0aWYgKCF0aGlzLmNhbkV4ZWN1dGUoaXRlbSwgZGlydHlPYmplY3RNYXApKSB7XHJcblx0XHRcdGlmICh0aGlzLmNvbnN0cmFpbnRNZXNzYWdlKSB7XHJcblx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLnNjZW5lLCB0aGlzLmNvbnN0cmFpbnRNZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHsgdHlwZSwgdmVsb2NpdHksIG5ld1RpbGVzLCBkaXJlY3Rpb24sIHRleHQsIHRleHR1cmVLZXksIHJlcGVhdCwgYWxwaGEgfSA9IHRoaXMuYWN0aW9uO1xyXG5cclxuXHRcdFx0bmV3VGlsZXMgPSBuZXdUaWxlcz8uc3BsaXQoJywnKS5tYXAoKHMpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQocywgMTApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5SRVBMQUNFX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRyZXBsYWNlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgbmV3VGlsZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuVE9HR0xFX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZGlydHkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmV2aW91c1RpbGVzID0gdGlsZXMubWFwKCh0KSA9PiB0LmluZGV4KTtcclxuXHRcdFx0XHRcdFx0cmVwbGFjZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIG5ld1RpbGVzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXBsYWNlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgdGhpcy5wcmV2aW91c1RpbGVzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcmV2aW91c1RpbGVzID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLkRFU1RST1lfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdHJlbW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuTU9WRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0cmVtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcyk7XHJcblx0XHRcdFx0XHRtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgZGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmUoZGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UT0dHTEVfVElMRV9NT1ZFTUVOVDpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5kaXJ0eSkge1xyXG5cdFx0XHRcdFx0XHRyZW1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzKTtcclxuXHRcdFx0XHRcdFx0bW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1vdmUoZGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbW92ZWRUaWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRcdHJlbW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgbW92ZWRUaWxlcyk7XHJcblx0XHRcdFx0XHRcdG1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCB0aGlzLnJldmVyc2VEaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlKHRoaXMucmV2ZXJzZURpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuU0hPV19URVhUOlxyXG5cdFx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLnNjZW5lLCB0ZXh0KTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlNIT1dfSU1BR0U6XHJcblx0XHRcdFx0XHRzaG93SW1hZ2VNb2RhbCh0aGlzLnNjZW5lLCB0ZXh0dXJlS2V5KTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLkRFU1RST1k6IHtcclxuXHRcdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRVUk5fT05fTElHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUudHVybk9uTGlnaHQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuVFVSTl9PRkZfTElHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUudHVybk9mZkxpZ2h0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc3Bhd24pIHtcclxuXHRcdFx0XHR0aGlzLnNwYXduT2JqZWN0KHRoaXMuc3Bhd24sIHR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm5hdmlnYXRlVG8pIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLmNoYW5nZVJvb20odGhpcy5uYXZpZ2F0ZVRvKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5uYXZpZ2F0ZVRvU2NlbmUpIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KHRoaXMubmF2aWdhdGVUb1NjZW5lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy50aW1lUGVuYWxpdHkpIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLmFkZFRpbWVQZW5hbGl0eSh0aGlzLnRpbWVQZW5hbGl0eSk7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZVBlbmFsaXR5TWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLnNjZW5lLCB0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5hdWRpb0NsaXBLZXkpIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLnNvdW5kLnBsYXkodGhpcy5hdWRpb0NsaXBLZXkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChvbkNvbXBsZXRlQ2FsbGJhY2spIHtcclxuXHRcdFx0XHRvbkNvbXBsZXRlQ2FsbGJhY2sodGhpcy5pc0l0ZW1Vc2VkKGl0ZW0pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXJlcGVhdCAmJiB0aGlzLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTcGF3biBhIGl0ZW0gb3IgTlBDXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHNwYXduIFRoZSBzcGF3biBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblR5cGUgVGhlIGFjdGlvbiB0eXBlXHJcblx0ICovXHJcblx0c3Bhd25PYmplY3Qoc3Bhd24sIGFjdGlvblR5cGUpIHtcclxuXHRcdGFzc2VydCghc3Bhd24sICdUaGUgc3Bhd24gaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRzd2l0Y2ggKHNwYXduLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBTcGF3blR5cGUuTlBDOlxyXG5cdFx0XHRcdGlmIChhY3Rpb25UeXBlID09PSAoQWN0aW9uVHlwZS5SRVBMQUNFX1RJTEUgfHwgQWN0aW9uVHlwZS5UT0dHTEVfVElMRSkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25OUEModGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIDUwLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bk5QQyh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3Bhd25UeXBlLklURU06XHJcblx0XHRcdFx0aWYgKGFjdGlvblR5cGUgPT09IChBY3Rpb25UeXBlLlJFUExBQ0VfVElMRSB8fCBBY3Rpb25UeXBlLlRPR0dMRV9USUxFKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bkl0ZW0odGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIDUwLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bkl0ZW0odGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRydWUgaWYgdGhlIGl0ZW0gd2FzIHVzZWQsIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNJdGVtVXNlZChpdGVtKSB7XHJcblx0XHRpZiAodGhpcy5jb25zdHJhaW50cyAmJiBpdGVtKSB7XHJcblx0XHRcdGNvbnN0IHsgaXRlbVJlcXVpcmVkIH0gPSB0aGlzLmNvbnN0cmFpbnRzO1xyXG5cdFx0XHRpZiAoaXRlbVJlcXVpcmVkICYmIGl0ZW0/Lm5hbWUgPT09IGl0ZW1SZXF1aXJlZCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNb3ZlIHpvbmUgZm9yIGdpdmVuIGRpcmVjdGlvbiBhbmQgdmVsb2NpdHlcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdG8gbW92ZSB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSBUaGUgdmVsb2NpdHkgdG8gbW92ZSB0aGUgem9uZVxyXG5cdCAqL1xyXG5cdG1vdmUoZGlyZWN0aW9uLCB2ZWxvY2l0eSkge1xyXG5cdFx0YXNzZXJ0KCFkaXJlY3Rpb24sICdUaGUgZGlyZWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcblx0XHRcdFx0dGhpcy54ID0gdGhpcy54IC0gdGhpcy53aWR0aCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcblx0XHRcdFx0dGhpcy54ID0gdGhpcy54ICsgdGhpcy53aWR0aCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5MRUZUO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERpcmVjdGlvbi5VUDpcclxuXHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLmhlaWdodCAtIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5ET1dOO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG5cdFx0XHRcdHRoaXMueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLlVQO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IGN1cnNvciBmb3Igem9uZVxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNJdGVtU2VsZWN0ZWRcclxuXHQgKi9cclxuXHRzZXRDdXJzb3IoaXNJdGVtU2VsZWN0ZWQpIHtcclxuXHRcdGlmIChpc0l0ZW1TZWxlY3RlZCAmJiB0aGlzLmlucHV0KSB7XHJcblx0XHRcdHRoaXMuaW5wdXQuY3Vyc29yID0gJ2dyYWJiaW5nJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5pbnB1dCkge1xyXG5cdFx0XHRpZiAodGhpcy5hY3Rpb24/LnR5cGUgPT09IEFjdGlvblR5cGUuU0hPV19URVhUIHx8IHRoaXMuYWN0aW9uPy50eXBlID09PSBBY3Rpb25UeXBlLlNIT1dfSU1BR0UpIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0LmN1cnNvciA9ICd6b29tLWluJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0LmN1cnNvciA9ICdwb2ludGVyJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgYWN0aW9uIGNhbiBiZSBleGVjdXRlZFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIHVzZSB3aXRoIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtNYXB9IGRpcnR5T2JqZWN0TWFwIFRoZSBkaXJ0eSBvYmplY3QgbWFwXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0Y2FuRXhlY3V0ZShpdGVtLCBkaXJ0eU9iamVjdE1hcCkge1xyXG5cdFx0aWYgKHRoaXMuY29uc3RyYWludHMpIHtcclxuXHRcdFx0Y29uc3QgeyBpdGVtUmVxdWlyZWQsIHByb21wdFJlcXVpcmVkLCBkZXBlbmRzT24gfSA9IHRoaXMuY29uc3RyYWludHM7XHJcblx0XHRcdGlmIChpdGVtUmVxdWlyZWQgJiYgaXRlbT8ubmFtZSAhPT0gaXRlbVJlcXVpcmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHByb21wdFJlcXVpcmVkKSB7XHJcblx0XHRcdFx0Y29uc3QgYW5zd2VyID0gd2luZG93LnByb21wdChwcm9tcHRSZXF1aXJlZC5xdWVzdGlvbik7XHJcblx0XHRcdFx0aWYgKGFuc3dlciAmJiBhbnN3ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvbXB0UmVxdWlyZWQuYW5zd2VyLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGVwZW5kc09uKSB7XHJcblx0XHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0XHRkZXBlbmRzT24/LnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFkaXJ0eU9iamVjdE1hcC5oYXMobmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoIXZhbGlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIG5hbWVcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgbmFtZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lXHJcblx0ICovXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0cnVlIGlmIHpvbmUgaXMgZGlydHlcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc0RpcnR5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGlydHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgd2hldGhlciB0aGUgem9uZSBpcyBkaXJ0eVxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlydHkgV2hldGhlciB6b25lIGlzIGRpcnR5XHJcblx0ICovXHJcblx0c2V0RGlydHkoZGlydHkpIHtcclxuXHRcdHRoaXMuZGlydHkgPSBkaXJ0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGFjdGlvbiBvYmplY3RcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIFRoZSBhY3Rpb24gb2JqZWN0XHJcblx0ICovXHJcblx0c2V0QWN0aW9uKGFjdGlvbikge1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBhY3Rpb24gb2JqZWN0XHJcblx0ICogQHJldHVybnMge09iamVjdH1cclxuXHQgKi9cclxuXHRnZXRBY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hY3Rpb247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBjb25zdHJhaW50cyBvYmplY3RcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uc3RyYWludHMgVGhlIGNvbnN0cmFpbnQgb2JqZWN0XHJcblx0ICovXHJcblx0c2V0Q29uc3RyYWludHMoY29uc3RyYWludHMpIHtcclxuXHRcdHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGNvbnN0cmFpbnRzIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2V0Q29uc3RyYWludHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJhaW50cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHNwYXduIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzcGF3biBUaGUgc3Bhd24gb2JqZWN0XHJcblx0ICovXHJcblx0c2V0U3Bhd24oc3Bhd24pIHtcclxuXHRcdHRoaXMuc3Bhd24gPSBzcGF3bjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHNwYXduIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2V0U3Bhd24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGF3bjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHJvb20gd2hlcmUgdG8gbmF2aWdhdGUgbmV4dFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYXZpZ2F0ZVRvIFRoZSByb29tIHdoZXJlIHRvIG5hdmlnYXRlIG5leHRcclxuXHQgKi9cclxuXHRzZXROYXZpZ2F0ZVRvKG5hdmlnYXRlVG8pIHtcclxuXHRcdHRoaXMubmF2aWdhdGVUbyA9IG5hdmlnYXRlVG87XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSByb29tIHdoZXJlIHRvIG5hdmlnYXRlIG5leHRcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldE5hdmlnYXRlVG8oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgbmF2aWdhdGVUb1NjZW5lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hdmlnYXRlVG9TY2VuZVxyXG5cdCAqL1xyXG5cdHNldE5hdmlnYXRlVG9TY2VuZShuYXZpZ2F0ZVRvU2NlbmUpIHtcclxuXHRcdHRoaXMubmF2aWdhdGVUb1NjZW5lID0gbmF2aWdhdGVUb1NjZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgbmF2aWdhdGVUb1NjZW5lXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXROYXZpZ2F0ZVRvU2NlbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvU2NlbmU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBjb25zdHJhaW50IG1lc3NhZ2VcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uc3RyYWludE1lc3NhZ2UgVGhlIGNvbnN0cmFpbnQgbWVzc2FnZVxyXG5cdCAqL1xyXG5cdHNldENvbnN0cmFpbnRNZXNzYWdlKGNvbnN0cmFpbnRNZXNzYWdlKSB7XHJcblx0XHR0aGlzLmNvbnN0cmFpbnRNZXNzYWdlID0gY29uc3RyYWludE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBjb25zdHJhaW50IG1lc3NhZ2VcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldENvbnN0cmFpbnRNZXNzYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludE1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSB0aW1lIHBlbmFsaXR5XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpbWVQZW5hbGl0eSBUaGUgdGltZSBwZW5hbGl0eVxyXG5cdCAqL1xyXG5cdHNldFRpbWVQZW5hbGl0eSh0aW1lUGVuYWxpdHkpIHtcclxuXHRcdHRoaXMudGltZVBlbmFsaXR5ID0gdGltZVBlbmFsaXR5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdGltZSBwZW5hbGl0eVxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcblx0Z2V0VGltZVBlbmFsaXR5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGltZVBlbmFsaXR5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgdGltZSBwZW5hbGl0eSBtZXNzYWdlXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpbWVQZW5hbGl0eU1lc3NhZ2UgVGhlIHRpbWUgcGVuYWxpdHkgbWVzc3NhZ2VcclxuXHQgKi9cclxuXHRzZXRUaW1lUGVuYWxpdHlNZXNzYWdlKHRpbWVQZW5hbGl0eU1lc3NhZ2UpIHtcclxuXHRcdHRoaXMudGltZVBlbmFsaXR5TWVzc2FnZSA9IHRpbWVQZW5hbGl0eU1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB0aW1lIHBlbmFsaXR5IG1lc3NhZ2VcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldFRpbWVQZW5hbGl0eU1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50aW1lUGVuYWxpdHlNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgYXVkaW8gY2xpcCBrZXlcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXVkaW9DbGlwS2V5IFRoZSBhdWRpbyBjbGlwIGtleVxyXG5cdCAqL1xyXG5cdHNldEF1ZGlvQ2xpcEtleShhdWRpb0NsaXBLZXkpIHtcclxuXHRcdHRoaXMuYXVkaW9DbGlwS2V5ID0gYXVkaW9DbGlwS2V5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgYXVkaW8gY2xpcCBrZXlcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldEF1ZGlvQ2xpcEtleSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmF1ZGlvQ2xpcEtleTtcclxuXHR9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhbiBpbnZhbGlkIGFyZ3VtZW50IGVycm9yXHJcbiAqIEBleHRlbmRzIEVycm9yXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlIFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ludmFsaWRBcmd1bWVudEVycm9yJ1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vc2NlbmVzL0dhbWUnO1xyXG5pbXBvcnQgR2FtZU92ZXJTY2VuZSAgZnJvbSAnLi9zY2VuZXMvR2FtZU92ZXInO1xyXG5pbXBvcnQgV2luU2NlbmUgZnJvbSAnLi9zY2VuZXMvV2luJztcclxuaW1wb3J0IFNwbGFzaFNjZW5lIGZyb20gJy4vc2NlbmVzL01lbnUnO1xyXG5pbXBvcnQgTG9hZGluZ1NjZW5lIGZyb20gJy4vc2NlbmVzL0xvYWRpbmcnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cdHNjYWxlOiB7XHJcblx0XHRtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCxcclxuXHRcdHdpZHRoOiAxMDI0LFxyXG5cdFx0aGVpZ2h0OiA3NjhcclxuXHR9LFxyXG5cdHBoeXNpY3M6IHtcclxuXHRcdGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG5cdFx0YXJjYWRlOiB7XHJcblx0XHRcdGRlYnVnOiB0cnVlLFxyXG5cdFx0XHRncmF2aXR5OiB7IHk6IDIwMCB9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzY2VuZTogW0xvYWRpbmdTY2VuZSwgU3BsYXNoU2NlbmUsIEdhbWVTY2VuZSwgR2FtZU92ZXJTY2VuZSwgV2luU2NlbmVdXHJcbn07XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IEludGVyYWN0aXZlWm9uZSBmcm9tICcuLi9lbnRpdGllcy9JbnRlcmFjdGl2ZVpvbmUnO1xyXG5pbXBvcnQgeyBzaG93VGV4dE1vZGFsLCBzaG93SXRlbU1vZGFsIH0gZnJvbSAnLi4vdXRpbHMvbW9kYWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuLi91dGlscy9hc3NlcnQtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUHJvcGVydHksIFRpbGVtYXBMYXllciwgRW50aXR5VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBUUkFOU0lUSU9OX0RFTEFZID0gNTAwO1xyXG5jb25zdCBOVU1CRVJfT0ZfTUlOVVRFUyA9IDYwO1xyXG5jb25zdCBOVU1CRVJfT0ZfU0VDT05EUyA9IDYwO1xyXG5jb25zdCBOVU1CRVJfT0ZfSE9VUlMgPSAyNDtcclxuY29uc3QgTlVNQkVSX09GX01JTExJU0VDT05EUyA9IDEwMDA7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSB0aGUgZ2FtZSBzY2VuZS5cclxuICogQGV4dGVuZHMgUGhhc2VyLlNjZW5lXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdHRpbGVNYXAgPSBudWxsO1xyXG5cdHpvbmVzID0gW107XHJcblx0aXRlbXMgPSBbXTtcclxuXHRucGNzID0gW107XHJcblx0dGV4dHMgPSBbXTtcclxuXHRpdGVtSW1hZ2VzID0gW107XHJcblx0c2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRzZWxlY3RlZFJlY3RhbmdsZSA9IG51bGw7XHJcblx0cm9vbU5hbWUgPSBudWxsO1xyXG5cdGRpcnR5T2JqZWN0TWFwID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdnYW1lJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgaG9vayB0aGF0IGlzIHJ1biBvbmNlIHdoZW4gdGhlIHNjZW5lIHN0YXJ0c1xyXG5cdCAqL1xyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuYWRkUm9vbU92ZXJsYXkoKTtcclxuXHRcdHRoaXMubG9hZFJvb20oJ3Jvb20tc2l4Jyk7XHJcblx0XHR0aGlzLmFkZEh1ZCgpO1xyXG5cdFx0dGhpcy5zdGFydFRpbWVyKDEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIG92ZXJsYXkgb3ZlciByb29tIHRvIGNvbnRyb2wgcm9vbSBsaWdodFxyXG5cdCAqL1xyXG5cdGFkZFJvb21PdmVybGF5KCkge1xyXG5cdFx0dGhpcy5yb29tT3ZlcmxheSA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLCAwLCB0aGlzLmNhbWVyYXMubWFpbi53aWR0aCwgdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0LCAweDAwMDAwMCwgMC41KTtcclxuXHRcdHRoaXMucm9vbU92ZXJsYXkuc2V0VmlzaWJsZShmYWxzZSk7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldE9yaWdpbigwKTtcclxuXHRcdHRoaXMucm9vbU92ZXJsYXkuc2V0RGVwdGgoMTAwMCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUdXJuIG9mZiBsaWdodFxyXG5cdCAqL1xyXG5cdHR1cm5PZmZMaWdodCgpIHtcclxuXHRcdHRoaXMucm9vbU92ZXJsYXkuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFR1cm4gb24gbGlnaHRcclxuXHQgKi9cclxuXHR0dXJuT25MaWdodCgpIHtcclxuXHRcdHRoaXMucm9vbU92ZXJsYXkuc2V0VmlzaWJsZShmYWxzZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgSFVEIHRvIHRoZSBnYW1lIHNjZW5lXHJcblx0ICovXHJcblx0YWRkSHVkKCkge1xyXG5cdFx0Y29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoOTIwLCAyMCwgJ0l0ZW1zJywgeyBmb250U2l6ZTogJzIwcHgnLCBmb250RmFtaWx5OiAnVmVyZGFuYScgfSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgdGhlIEhVRFxyXG5cdCAqL1xyXG5cdHVwZGF0ZUh1ZCgpIHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlICYmICF0aGlzLnNlbGVjdGVkSXRlbSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLml0ZW1JbWFnZXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1JbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLml0ZW1JbWFnZXNbaV0uZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaXRlbUltYWdlID0gdGhpcy5hZGQuaW1hZ2UoOTUwLCBpICogNTAgKyA4MCwgdGhpcy5pdGVtc1tpXS50ZXh0dXJlS2V5LCB0aGlzLml0ZW1zW2ldLnRleHR1cmVGcmFtZSk7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRBbHBoYSgwKTtcclxuXHRcdFx0aXRlbUltYWdlLnNldFNjYWxlKDIpO1xyXG5cdFx0XHRpdGVtSW1hZ2Uuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHRcdGN1cnNvcjogJ2dyYWInXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpdGVtSW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5wb2ludGVySXRlbSA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0Q3Vyc29yKHRydWUpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlID0gdGhpcy5hZGQucmVjdGFuZ2xlKGl0ZW1JbWFnZS54LCBpdGVtSW1hZ2UueSwgNTAsIDUwKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLnNldFN0cm9rZVN0eWxlKDMsIDB4ZmZmZmZmKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdFx0dGFyZ2V0czogaXRlbUltYWdlLFxyXG5cdFx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAsXHJcblx0XHRcdFx0cmVwZWF0OiAwLFxyXG5cdFx0XHRcdHlveW86IGZhbHNlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLml0ZW1JbWFnZXMucHVzaChpdGVtSW1hZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IGN1cnNvclxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNJdGVtU2VsZWN0ZWQgV2hldGhlciB0aGUgaXRlbSBpcyBzZWxlY3RlZC5cclxuXHQgKi9cclxuXHRzZXRDdXJzb3IoaXNJdGVtU2VsZWN0ZWQpIHtcclxuXHRcdGlmIChpc0l0ZW1TZWxlY3RlZCkge1xyXG5cdFx0XHR0aGlzLmlucHV0LnNldERlZmF1bHRDdXJzb3IoJ2dyYWJiaW5nJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmlucHV0LnNldERlZmF1bHRDdXJzb3IoJ2RlZmF1bHQnKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuem9uZXMuZm9yRWFjaCgoem9uZSkgPT4ge1xyXG5cdFx0XHR6b25lLnNldEN1cnNvcihpc0l0ZW1TZWxlY3RlZCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgcm9vbSBvbiB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByb29tTmFtZSBUaGUgcm9vbSBuYW1lXHJcblx0ICovXHJcblx0bG9hZFJvb20ocm9vbU5hbWUpIHtcclxuXHRcdGFzc2VydCghcm9vbU5hbWUsICdUaGUgcm9vbU5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHR0aGlzLnJvb21OYW1lID0gcm9vbU5hbWU7XHJcblx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwID0gbmV3IE1hcCgpO1xyXG5cdFx0dGhpcy5jYW1lcmFzLm1haW4uZmFkZUluKFRSQU5TSVRJT05fREVMQVksIDAsIDAsIDApO1xyXG5cdFx0dGhpcy50aWxlTWFwID0gdGhpcy5jcmVhdGVUaWxlTWFwKHJvb21OYW1lKTtcclxuXHJcblx0XHRjb25zdCBjYXN0bGVUaWxlcyA9IHRoaXMuYWRkVGlsZVNldCh0aGlzLnRpbGVNYXAsICdjYXN0bGUtdGlsZXMnLCAnY2FzdGxlLXRpbGVzJyk7XHJcblx0XHRjb25zdCBjcmVlcHlUaWxlcyA9IHRoaXMuYWRkVGlsZVNldCh0aGlzLnRpbGVNYXAsICdjcmVlcHktdGlsZXMnLCAnY3JlZXB5LXRpbGVzJyk7XHJcblx0XHRjb25zdCBjb250YWluZXJzID0gdGhpcy5hZGRUaWxlU2V0KHRoaXMudGlsZU1hcCwgJ2NvbnRhaW5lcnMnLCAnY29udGFpbmVycycpO1xyXG5cdFx0Y29uc3QgeyBvYmplY3RzTGF5ZXIsIGZvcmVncm91bmRMYXllciB9ID0gdGhpcy5nZXRUaWxlTWFwTGF5ZXJzKHRoaXMudGlsZU1hcCwgW2NyZWVweVRpbGVzLCBjYXN0bGVUaWxlcywgY29udGFpbmVyc10pO1xyXG5cclxuXHRcdHRoaXMuYWRkVGlsZU1hcE9iamVjdHMob2JqZWN0c0xheWVyKTtcclxuXHJcblx0XHRjb25zdCBzY3JlZW5UZXh0ID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aGlzLnRpbGVNYXAsIEN1c3RvbVByb3BlcnR5LlNDUkVFTl9URVhUKTtcclxuXHRcdGNvbnN0IG1vZGFsU2l6ZSA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGhpcy50aWxlTWFwLCBDdXN0b21Qcm9wZXJ0eS5NT0RBTF9TSVpFKTtcclxuXHRcdHNob3dUZXh0TW9kYWwodGhpcywgc2NyZWVuVGV4dCwgbW9kYWxTaXplKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoYW5nZSByb29tIGxvYWRlZCBvbiB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSByb29tTmFtZSBUaGUgZ2FtZSBzY2VuZS5cclxuXHQgKi9cclxuXHRjaGFuZ2VSb29tKHJvb21OYW1lKSB7XHJcblx0XHRhc3NlcnQoIXJvb21OYW1lLCAnVGhlIHJvb21OYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0dGhpcy5jYW1lcmFzLm1haW4uZmFkZU91dChUUkFOU0lUSU9OX0RFTEFZLCAwLCAwLCAwLCAoY2FtZXJhLCBwcm9ncmVzcykgPT4ge1xyXG5cdFx0XHRpZiAocHJvZ3Jlc3MgPT09IDEpIHtcclxuXHRcdFx0XHR0aGlzLnJlc2V0Um9vbSgpO1xyXG5cdFx0XHRcdHRoaXMubG9hZFJvb20ocm9vbU5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHJvb20gYnkgZGVzdHJveWluZyByb29tIG9iamVjdHMuXHJcblx0ICovXHJcblx0cmVzZXRSb29tKCkge1xyXG5cdFx0dGhpcy50dXJuT25MaWdodCgpO1xyXG5cdFx0dGhpcy56b25lcy5mb3JFYWNoKCh6b25lKSA9PiB7XHJcblx0XHRcdHpvbmUuZGVzdHJveSgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm5wY3MuZm9yRWFjaCgobnBjKSA9PiB7XHJcblx0XHRcdG5wYy5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG5cdFx0XHR0ZXh0LmRlc3Ryb3koKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgUGhhc2VyLlRpbGVtYXBzLlRpbGVtYXAgb2JqZWN0XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpbGVNYXBLZXkgVGhlIGtleSBvZiB0aGUgdGlsZSBtYXAuXHJcblx0ICogQHJldHVybnMge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfVxyXG5cdCAqL1xyXG5cdGNyZWF0ZVRpbGVNYXAodGlsZU1hcEtleSkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwS2V5LCAnVGhlIHRpbGVNYXBLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5tYWtlLnRpbGVtYXAoeyBrZXk6IHRpbGVNYXBLZXkgfSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgdGlsZSBzZXQgaW1hZ2UgdG8gdGhlIFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgVGhlIHRpbGUgbWFwXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpbGVTZXRLZXkgVGhlIHRpbGUgc2V0IGtleVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVRleHR1cmVLZXkgVGhlIGltYWdlIHRleHR1cmUga2V5XHJcblx0ICovXHJcblx0YWRkVGlsZVNldCh0aWxlTWFwLCB0aWxlU2V0S2V5LCBpbWFnZVRleHR1cmVLZXkpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0S2V5LCAnVGhlIHRpbGVTZXRLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIWltYWdlVGV4dHVyZUtleSwgJ1RoZSB0aWxlU2V0VGV4dHVyZUtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHJldHVybiB0aWxlTWFwLmFkZFRpbGVzZXRJbWFnZSh0aWxlU2V0S2V5LCBpbWFnZVRleHR1cmVLZXkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdGlsZSBtYXAgbGF5ZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGlsZSBtYXBcclxuXHQgKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFRoZSB0aWxlIG1hcFxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpbGVTZXRzXHJcblx0ICovXHJcblx0Z2V0VGlsZU1hcExheWVycyh0aWxlTWFwLCB0aWxlU2V0cykge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXRpbGVTZXRzLCAnVGhlIHRpbGVTZXRzIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgYmFja2dyb3VuZExheWVyID0gdGlsZU1hcC5jcmVhdGVMYXllcihUaWxlbWFwTGF5ZXIuQkFDS0dST1VORCwgdGlsZVNldHMpO1xyXG5cdFx0Y29uc3QgZm9yZWdyb3VuZExheWVyID0gdGlsZU1hcC5jcmVhdGVMYXllcihUaWxlbWFwTGF5ZXIuRk9SRUdST1VORCwgdGlsZVNldHMpO1xyXG5cdFx0Y29uc3Qgb2JqZWN0c0xheWVyID0gdGlsZU1hcC5nZXRPYmplY3RMYXllcihUaWxlbWFwTGF5ZXIuT0JKRUNUUyk7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kTGF5ZXIsIGZvcmVncm91bmRMYXllciwgb2JqZWN0c0xheWVyIH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgVGlsZSBtYXAgb2JqZWN0cyB0byB0aGUgZ2FtZSBzY2VuZS5cclxuXHQgKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5PYmplY3RMYXllcn0gb2JqZWN0c0xheWVyIFRoZSBvYmplY3RzIGxheWVyXHJcblx0ICovXHJcblx0YWRkVGlsZU1hcE9iamVjdHMob2JqZWN0c0xheWVyKSB7XHJcblx0XHRhc3NlcnQoIW9iamVjdHNMYXllciwgJ1RoZSBvYmplY3RzTGF5ZXIgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCB0aWxlTWFwT2JqZWN0cyA9IG9iamVjdHNMYXllci5vYmplY3RzO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVNYXBPYmplY3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdHN3aXRjaCAodGlsZU1hcE9iamVjdHNbaV0udHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5JTlRFUkFDVElWRV9aT05FOlxyXG5cdFx0XHRcdFx0dGhpcy56b25lcy5wdXNoKHRoaXMuYWRkSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3RzW2ldKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuVEVYVDpcclxuXHRcdFx0XHRcdHRoaXMuYWRkVGV4dCh0aWxlTWFwT2JqZWN0c1tpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBjdXN0b20gcHJvcGVydHkgZnJvbSBhIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7Kn0gdGlsZU1hcE9iamVjdCBUaGUgdGlsZSBtYXAgb2JqZWN0XHJcblx0ICogQHBhcmFtIHsqfSBwcm9wZXJ0eU5hbWUgVGhlIHByb3BlcnR5IG5hbWVcclxuXHQgKi9cclxuXHRnZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFwcm9wZXJ0eU5hbWUsICdUaGUgcHJvcGVydHlOYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0bGV0IHByb3BlcnR5ID0gbnVsbDtcclxuXHRcdGlmICh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRcdHByb3BlcnR5ID0gdGlsZU1hcE9iamVjdC5wcm9wZXJ0aWVzLmZpbmQoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BlcnR5Py52YWx1ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBpbnRlcmFjdGl2ZSB6b25lIG9iamVjdCB0byB0aGUgZ2FtZSBzY2VuZSxcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gdGlsZU1hcE9iamVjdCBUaGUgdGlsZSBtYXAgb2JqZWN0XHJcblx0ICovXHJcblx0YWRkSW50ZXJhY3RpdmVab25lKHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3Qgem9uZSA9IG5ldyBJbnRlcmFjdGl2ZVpvbmUoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QubmFtZSxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC54LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LnksXHJcblx0XHRcdHRpbGVNYXBPYmplY3Qud2lkdGgsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QuaGVpZ2h0XHJcblx0XHQpO1xyXG5cdFx0em9uZS5zZXRBY3Rpb24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5BQ1RJT04pKTtcclxuXHRcdHpvbmUuc2V0Q29uc3RyYWludHModGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT05TVFJBSU5UUykpO1xyXG5cdFx0em9uZS5zZXRDb25zdHJhaW50TWVzc2FnZSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkNPTlNUUkFJTlRfTUVTU0FHRSkpO1xyXG5cdFx0em9uZS5zZXROYXZpZ2F0ZVRvKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkFWSUdBVEVfVE8pKTtcclxuXHRcdHpvbmUuc2V0TmF2aWdhdGVUb1NjZW5lKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkFWSUdBVEVfVE9fU0NFTkUpKTtcclxuXHRcdHpvbmUuc2V0U3Bhd24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTikpO1xyXG5cdFx0em9uZS5zZXRUaW1lUGVuYWxpdHkodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5USU1FX1BFTkFMSVRZKSk7XHJcblx0XHR6b25lLnNldFRpbWVQZW5hbGl0eU1lc3NhZ2UodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5USU1FX1BFTkFMSVRZX01FU1NBR0UpKTtcclxuXHRcdHpvbmUuc2V0QXVkaW9DbGlwS2V5KHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQVVESU9fQ0xJUF9LRVkpKTtcclxuXHRcdHpvbmUuc2V0Q3Vyc29yKGZhbHNlKTtcclxuXHJcblx0XHRjb25zdCBldmVudHMgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkVWRU5UUyk7XHJcblxyXG5cdFx0aWYgKGV2ZW50cykge1xyXG5cdFx0XHRjb25zdCB7IGxpc3RlblRvLCBlbWl0IH0gPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkVWRU5UUyk7XHJcblxyXG5cdFx0XHRpZiAobGlzdGVuVG8pIHtcclxuXHRcdFx0XHR0aGlzLmV2ZW50cy5vbihsaXN0ZW5UbywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh6b25lLmlzRGlydHkoKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHpvbmUubmFtZSwgem9uZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5kZWxldGUoem9uZS5uYW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0em9uZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXAsIChpdGVtVXNlZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbVVzZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZEl0ZW0uc2luZ2xlVXNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtPy5uYW1lID09PSB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEN1cnNvcihmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoem9uZS5pc0RpcnR5KCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldCh6b25lLm5hbWUsIHpvbmUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuZGVsZXRlKHpvbmUubmFtZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGVtaXQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGVtaXQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0em9uZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoaXRlbVVzZWQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtVXNlZCkge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZEl0ZW0uc2luZ2xlVXNlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbT8ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRDdXJzb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh6b25lLmlzRGlydHkoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldCh6b25lLm5hbWUsIHpvbmUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5kZWxldGUoem9uZS5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gem9uZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCB0ZXh0IHRvIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHRpbGVNYXBPYmplY3QgVGhlIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGFkZFRleHQodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zb2xlLmxvZyh0aWxlTWFwT2JqZWN0KTtcclxuXHRcdGNvbnN0IHsgeCwgeSwgdGV4dCB9ID0gdGlsZU1hcE9iamVjdDtcclxuXHRcdGNvbnN0IHsgY29sb3IsIGZvbnRmYW1pbHksIGhhbGlnbiwgcGl4ZWxzaXplIH0gPSB0ZXh0O1xyXG5cdFx0Y29uc3QgdGV4dE9iaiA9IHRoaXMuYWRkLnRleHQoeCwgeSwgdGV4dC50ZXh0LCB7XHJcblx0XHRcdGZvbnRGYW1pbHk6IGZvbnRmYW1pbHksXHJcblx0XHRcdGZvbnRTaXplOiBgJHtwaXhlbHNpemV9cHhgLFxyXG5cdFx0XHRmaWxsOiBjb2xvcixcclxuXHRcdFx0YWxpZ246IGhhbGlnblxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGV4dE9iajtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwYXduIGl0ZW0gb24gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcblx0ICovXHJcblx0c3Bhd25JdGVtKHgsIHksIGl0ZW0pIHtcclxuXHRcdGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIWl0ZW0sICdUaGUgaXRlbSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGl0ZW1JbWFnZSA9IHRoaXMuYWRkLmltYWdlKHgsIHksIGl0ZW0udGV4dHVyZUtleSwgaXRlbS50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0aXRlbUltYWdlLnNldFNjYWxlKDIpO1xyXG5cdFx0aXRlbUltYWdlLnNldEFscGhhKDApO1xyXG5cdFx0aXRlbUltYWdlLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0Y3Vyc29yOiAnZ3JhYidcclxuXHRcdH0pO1xyXG5cdFx0aXRlbUltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0aXRlbUltYWdlLmRlc3Ryb3koKTtcclxuXHRcdFx0aWYgKHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRzaG93SXRlbU1vZGFsKHRoaXMsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0udGV4dHVyZUtleSwgaXRlbS50ZXh0dXJlRnJhbWUsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IGl0ZW1JbWFnZSxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRkdXJhdGlvbjogMjAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwYXduIE5QQyBvbiB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgcG9zaXRpb25cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gbnBjIFRoZSBucGMgb2JqZWN0XHJcblx0ICovXHJcblx0c3Bhd25OUEMoeCwgeSwgbnBjKSB7XHJcblx0XHRhc3NlcnQoIXgsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCgheSwgJ1RoZSB5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFucGMsICdUaGUgbnBjIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgbnBjU3ByaXRlID0gdGhpcy5hZGQuc3ByaXRlKHgsIHksIG5wYy50ZXh0dXJlS2V5LCBucGMudGV4dHVyZUZyYW1lKTtcclxuXHRcdG5wY1Nwcml0ZS5zZXRTY2FsZSgyKTtcclxuXHRcdG5wY1Nwcml0ZS5zZXRBbHBoYSgwKTtcclxuXHRcdG5wY1Nwcml0ZS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0bnBjU3ByaXRlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBucGMuZGVzY3JpcHRpb24pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm5wY3MucHVzaChucGNTcHJpdGUpO1xyXG5cdFx0dGhpcy50d2VlbnMuYWRkKHtcclxuXHRcdFx0dGFyZ2V0czogbnBjU3ByaXRlLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0cnVlIGlmIGdpdmVuIGl0ZW0gbmFtZSBpcyBzZWxlY3RlZFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtTmFtZSBUaGUgaXRlbSBuYW1lXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNJdGVtU2VsZWN0ZWQoaXRlbU5hbWUpIHtcclxuXHRcdGFzc2VydCghaXRlbU5hbWUsICdUaGUgbmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSA9PT0gaXRlbU5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdGFydHMgdGhlIHRpbWVyXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mSG91cnMgVGhlIG51bWJlciBvZiBob3Vyc1xyXG5cdCAqL1xyXG5cdHN0YXJ0VGltZXIobnVtYmVyT2ZIb3Vycykge1xyXG5cdFx0YXNzZXJ0KCFudW1iZXJPZkhvdXJzLCAnVGhlIG51bWJlck9mSG91cnMgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcblx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShub3cgKyBudW1iZXJPZkhvdXJzICogTlVNQkVSX09GX01JTlVURVMgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMpLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdHRoaXMudGltZVJlbWFpbmluZyA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdztcclxuXHRcdFx0XHRpZiAobm93ID49IHRoaXMuY291bnREb3duRGF0ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgdGltZSBwZW5hbGl0eVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lUGVuYWxpdHkgVGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKi9cclxuXHRhZGRUaW1lUGVuYWxpdHkodGltZVBlbmFsaXR5KSB7XHJcblx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSh0aGlzLmNvdW50RG93bkRhdGUgLSB0aW1lUGVuYWxpdHkgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHRoZSB0aW1lIG9uIHRoZSBnYW1lIHNjZW5lLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVRpbWUoKSB7XHJcblx0XHRpZiAodGhpcy50aW1lVGV4dCkge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGhvdXJzUmVtYWluaW5nID0gTWF0aC5mbG9vcihcclxuXHRcdFx0KHRoaXMudGltZVJlbWFpbmluZyAlIChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlOVVRFUyAqIE5VTUJFUl9PRl9IT1VSUykpIC9cclxuXHRcdFx0XHQoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTlVURVMpXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgbWludXRlc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoXHJcblx0XHRcdCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTlVURVMpKSAvXHJcblx0XHRcdFx0KE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUylcclxuXHRcdCk7XHJcblx0XHRjb25zdCBzZWNvbmRzUmVtYWluaW5nID0gTWF0aC5mbG9vcigodGhpcy50aW1lUmVtYWluaW5nICUgKE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUykpIC8gTlVNQkVSX09GX01JTExJU0VDT05EUyk7XHJcblx0XHRpZiAodGhpcy50aW1lUmVtYWluaW5nKSB7XHJcblx0XHRcdHRoaXMudGltZVRleHQgPSB0aGlzLmFkZC50ZXh0KDkxNSwgNzMwLCBgJHtob3Vyc1JlbWFpbmluZ306JHttaW51dGVzUmVtYWluaW5nfToke3NlY29uZHNSZW1haW5pbmd9YCwge1xyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTJweCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnLFxyXG5cdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBob29rIHRoYXQgcnVucyBldmVyeSBjeWNsZS5cclxuXHQgKi9cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnVwZGF0ZVRpbWUoKTtcclxuXHRcdGlmICh0aGlzLmlzVGltZUVsYXBzZWQpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnZ2FtZW92ZXInKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkSXRlbSAmJiAhdGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlcjtcclxuXHRcdFx0Y29uc3QgeyB0ZXh0dXJlS2V5LCB0ZXh0dXJlRnJhbWUgfSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgdGV4dHVyZUtleSwgdGV4dHVyZUZyYW1lKTtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS5zZXRTY2FsZSgyKTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gJiYgdGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlcjtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS54ID0geDtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS55ID0geTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSBmb3IgdGhlIGdhbWUgb3ZlciBzY2VuZS5cclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0LyoqXHJcblx0ICogQ29uc3R1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ2dhbWVvdmVyJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgUGhhc2VyIGhvb2sgcnVucyBvbmNlLlxyXG5cdCAqL1xyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKDAsIDAsIExvYWRlcktleS5NRU5VX0lNQUdFKS5zZXRPcmlnaW4oMCkuc2V0U2NhbGUoMC44KS5zZXRBbHBoYSgwLjUpO1xyXG5cclxuXHRcdGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDQwMCwgMzAwLCAnR2FtZSBvdmVyIScsIHtcclxuXHRcdFx0Zm9udFNpemU6ICczMnB4JyxcclxuXHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZFxyXG5cdFx0XHQudGV4dChcclxuXHRcdFx0XHQ1MTYsXHJcblx0XHRcdFx0NDAwLFxyXG5cdFx0XHRcdCdBbGFzLCB5b3UgZmFpbGVkIHRvIGVzY2FwZSB0aGUgY2FzdGxlIGluIHRpbWUsIGFuZCBub3cgeW91ciBzb3VsIGlzIGRvb21lZCB0byBsaW5nZXIgZm9yZXZlciB3aXRoaW4gaXRzIHdhbGxzLicsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJyxcclxuXHRcdFx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA0MDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIGZvciB0aGUgbG9hZGluZyBzY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdsb2FkaW5nJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcmVsb2FkIFBoYXNlciBob29rIHJ1bnMgb25seSBvbmNlXHJcblx0ICovXHJcblx0cHJlbG9hZCgpIHtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLW9uZScsICdhc3NldHMvanNvbi9yb29tLW9uZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tdHdvJywgJ2Fzc2V0cy9qc29uL3Jvb20tdHdvLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS10aHJlZScsICdhc3NldHMvanNvbi9yb29tLXRocmVlLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1mb3VyJywgJ2Fzc2V0cy9qc29uL3Jvb20tZm91ci1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tZml2ZScsICdhc3NldHMvanNvbi9yb29tLWZpdmUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXNpeCcsICdhc3NldHMvanNvbi9yb29tLXNpeC1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjYXN0bGUtdGlsZXMnLCAnYXNzZXRzL2ltZy9jYXN0bGUtdGlsZXMvVGlsZXNldC5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnY3JlZXB5LXRpbGVzJywgJ2Fzc2V0cy9pbWcvdGlsZXMucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ2NvbnRhaW5lcnMnLCAnYXNzZXRzL2ltZy9jb250YWluZXIvY29udGFpbmVyLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKExvYWRlcktleS5NRU5VX0lNQUdFLCAnYXNzZXRzL2ltZy9jYXN0bGUucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2R1bmdlb24tY3Jhd2wnLCAnYXNzZXRzL2ltZy9kdW5nZW9uLWNyYXdsLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldChMb2FkZXJLZXkuSVRFTVMsICdhc3NldHMvaW1nL2l0ZW1zLnBuZycsIHsgZnJhbWVXaWR0aDogMTYsIGZyYW1lSGVpZ2h0OiAxNiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldCgndHJlYXN1cmUxJywgJ2Fzc2V0cy9pbWcvVHJlYXN1cmUgSWNvbnMvdHJlYXN1cmUxLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5hdWRpbygnb3Blbi1kb29yLWF1ZGlvJywgJ2Fzc2V0cy9zb3VuZHMvY3JlYWt5LWRvb3ItaGluZ2Uud2F2Jyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ29wZW4tY2hlc3QtYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9vcGVuLWNoZXN0LndhdicpO1xyXG5cdFx0dGhpcy5sb2FkLmF1ZGlvKCdwdXNoLWF1ZGlvJywgJ2Fzc2V0cy9zb3VuZHMvc2Z4LXB1c2gtYm91bGRlci5mbGFjJyk7XHJcblx0XHR0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdtZW51Jyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgZm9yIHRoZSBtZW51IHNjZW5lXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdtZW51Jyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgUGhhc2VyLmpzIGhvb2sgcnVucyBvbmx5IG9uY2VcclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgwLCAwLCBMb2FkZXJLZXkuTUVOVV9JTUFHRSkuc2V0T3JpZ2luKDApLnNldFNjYWxlKDAuOCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoMzUwLCAzODQsICdFc2NhcGUgZnJvbSB0aGUgY2FzdGxlJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzMycHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IGNsaWNrVG9Db250aW51ZSA9IHRoaXMuYWRkLnRleHQoNTEyLCA0NjAsICdDbGljayB0byBzdGFydCB0aGUgZ2FtZScsIHtcclxuXHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0Zm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcblx0XHR9KTtcclxuXHRcdGNsaWNrVG9Db250aW51ZS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIFBoYXNlci5qcyBob29rIHJ1bnMgZXZlcnkgY3ljbGUuXHJcblx0ICovXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0aWYgKHRoaXMuaW5wdXQubWFuYWdlci5hY3RpdmVQb2ludGVyLmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdnYW1lJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIGZvciB0aGUgd2lubmluZyBzY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbm5pbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCd3aW4nKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBQaGFzZXIuanMgaG9vay4gUnVucyBvbmx5IG9uY2VcclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmFkZC5pbWFnZSgwLCAwLCBMb2FkZXJLZXkuTUVOVV9JTUFHRSkuc2V0T3JpZ2luKDApLnNldFNjYWxlKDAuOCkuc2V0QWxwaGEoMC41KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoMjYwLCAzMDAsICdDb25ncmF0dWxhdGlvbnMhIFlvdeKAmXZlIGVzY2FwZWQhJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzMycHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAnVmVyZGFuYSdcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWRkXHJcblx0XHRcdC50ZXh0KDUxNixcclxuXHRcdFx0XHQ0MDAsXHJcblx0XHRcdFx0J0F0IGxhc3QsIEnigJl2ZSB3b24gbXkgZnJlZWRvbS4gQnV0IGFzIEkgc3RlcCBiZXlvbmQgdGhlIGNhc3RsZSBnYXRlcywgdGhlIHRydXRoIHJldHVybnMgSSBoYWQgYW1uZXNpYS4gVGhpcyB3YXMgbXkgY2FzdGxlLCBhbmQgSSB3YXMgbXkgb3duIHByaXNvbmVyLicsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJyxcclxuXHRcdFx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA0MDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdFx0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBJbnZhbGlkQXJndW1lbnRFcnJvciBmcm9tICcuLi9lcnJvcnMvSW52YWxpZGFBcmd1bWVudEVycm9yJztcclxuXHJcbi8qKlxyXG4gKiBBc3NlcnQgY29uZGl0aW9uIGFtZCB0aHJvdyBlcnJvciBtZXNzYWdlIGlmIGNvbmRpdGlvbiBpcyBub3QgbWV0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZGl0aW9uIFRoZSBjb25kaXRpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcblx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0dGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKG1lc3NhZ2UpO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL2Fzc2VydC11dGlscyc7XHJcbmltcG9ydCB7IE1vZGFsU2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgYSBtb2RhbCB3aW5kb3cgd2l0aCB0ZXh0XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlNjZW5lfSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaXplIFRoZSBtb2RhbCBzaXplXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsb3NlQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGwgd2hlbiBtb2RhbCBpcyBjbG9zZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGV4dE1vZGFsKHNjZW5lLCB0ZXh0LCBzaXplID0gTW9kYWxTaXplLlJFR1VMQVIsIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCghdGV4dCwgJ1RoZSB0ZXh0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0bGV0IGJveCA9IG51bGw7XHJcblx0bGV0IGNsb3NlVGV4dCA9IG51bGw7XHJcblxyXG5cdHN3aXRjaCAoc2l6ZSkge1xyXG5cdFx0Y2FzZSBNb2RhbFNpemUuUkVHVUxBUjpcclxuXHRcdFx0Ym94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDE1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdFx0Y2xvc2VUZXh0ID0gc2NlbmUuYWRkXHJcblx0XHRcdFx0LnRleHQoMTU1LCAtNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIE1vZGFsU2l6ZS5MQVJHRTpcclxuXHRcdFx0Y2xvc2VUZXh0ID0gc2NlbmUuYWRkXHJcblx0XHRcdFx0LnRleHQoMTU1LCAtMTY5LCAnQ2xvc2UgWCcsIHtcclxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdFx0XHRmaWxsOiAnI0ZGRkZGRidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdFx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRjb25zdCB0ZXh0T2JqID0gc2NlbmUuYWRkXHJcblx0XHQudGV4dCgwLCAwLCB0ZXh0LCB7XHJcblx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0d2lkdGg6IDQwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0fSlcclxuXHRcdC5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cdG1vZGFsLmFkZChbYm94LCB0ZXh0T2JqLCBjbG9zZVRleHRdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXlzIGEgbW9kYWwgd2luZG93IHRoYXQgd2l0aCBhbiBpbWFnZVxyXG4gKiBAcGFyYW0ge1BoYXNlci5TY2VuZX0gc2NlbmUgVGhlIFBoYXNlciBzY2VuZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VLZXkgVGhlIFBoYXNlciBsb2FkZXIga2V5IGZvciB0aGUgaW1hZ2VcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xvc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbWFnZU1vZGFsKHNjZW5lLCBpbWFnZUtleSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCFpbWFnZUtleSwgJ1RoZSBpbWFnZUtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0Y29uc3QgaW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgMCwgaW1hZ2VLZXkpLnNldE9yaWdpbigwLjUpO1xyXG5cdGltYWdlLnNldERpc3BsYXlTaXplKGJveC53aWR0aCAtIDYwLCBib3guaGVpZ2h0IC0gNjApO1xyXG5cclxuXHRjb25zdCBjbG9zZVRleHQgPSBzY2VuZS5hZGRcclxuXHRcdC50ZXh0KDE1NSwgLTE2OSwgJ0Nsb3NlIFgnLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdG1vZGFsLmRlc3Ryb3koKTtcclxuXHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdGFscGhhOiAxLFxyXG5cdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRkdXJhdGlvbjogMjAwXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZChbYm94LCBpbWFnZSwgY2xvc2VUZXh0XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyBhIG1vZGFsIHdpbmRvdyB3aXRoIHRleHQgYW5kIGl0ZW0gaW5mb3JtYXRpb25cclxuICogQHBhcmFtIHtvYmplY3R9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcclxuICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1EZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgaXRlbVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbVRleHR1cmUgVGhlIHRleHR1cmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpdGVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtRnJhbWUgIFRoZSBmcmFtZSBhc3NvY2lhdGVkIHdpdGggdGhlIGl0ZW1cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xvc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0l0ZW1Nb2RhbChzY2VuZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lLCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0YXNzZXJ0KCFzY2VuZSwgJ1RoZSBzY2VuZSBpcyB1bmRlZmluZWQnKTtcclxuXHRhc3NlcnQoIWl0ZW1EZXNjcmlwdGlvbiwgJ1RoZSBpdGVtRGVzY3JpcHRpb24gaXMgdW5kZWZpbmVkJyk7XHJcblx0Y29uc3QgYmxvY2tlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgc2NlbmUuc2NhbGUud2lkdGgsIHNjZW5lLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0Y29uc3QgbW9kYWwgPSBzY2VuZS5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRjb25zdCBib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDQ1MCwgMTUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdGNvbnN0IGNsb3NlVGV4dCA9IHNjZW5lLmFkZFxyXG5cdFx0LnRleHQoMTU1LCAtNjksICdDbG9zZSBYJywge1xyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRmb250RmFtaWx5OiAndmVyZGFuYScsXHJcblx0XHRcdGZpbGw6ICcjRkZGRkZGJ1xyXG5cdFx0fSlcclxuXHRcdC5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdH0pO1xyXG5cclxuXHRjb25zdCBpdGVtSW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgLTEwLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lKS5zZXRTY2FsZSgyKTtcclxuXHRjb25zdCBpdGVtRGVzY3JpcHRpb25UZXh0ID0gc2NlbmUuYWRkXHJcblx0XHQudGV4dCgwLCAzMCwgaXRlbURlc2NyaXB0aW9uLCB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdGZvbnRGYW1pbHk6ICd2ZXJkYW5hJyxcclxuXHRcdFx0ZmlsbDogJyNGRkZGRkYnXHJcblx0XHR9KVxyXG5cdFx0LnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGQoW2JveCwgaXRlbUltYWdlLCBpdGVtRGVzY3JpcHRpb25UZXh0LCBjbG9zZVRleHRdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiLi9hc3NlcnQtdXRpbHNcIjtcclxuaW1wb3J0IHsgVGlsZW1hcExheWVyLCBEaXJlY3Rpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgdGlsZXMgYmFzZWQgb24gdGhlIHdvcmxkIGNvb3JkaW5hdGVzLCB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXIgXHJcbiAqIEByZXR1cm5zIHtBcnJheX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGlsZU1hcCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbGF5ZXIgPSBUaWxlbWFwTGF5ZXIuRk9SRUdST1VORCkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXgsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCgheSwgJ1RoZSB5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF3aWR0aCwgJ1RoZSB3aWR0aCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghaGVpZ2h0LCAnVGhlIGhlaWdodCBpcyB1bmRlZmluZWQnKTtcclxuICAgIHJldHVybiB0aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcclxuICAgICAgICB4LFxyXG4gICAgICAgIHksXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNOb3RFbXB0eTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBsYXllclxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aWxlcyBmcm9tIFRpbGVtYXBcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGlsZXModGlsZU1hcCwgdGlsZXMpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRpbGVNYXAucmVtb3ZlVGlsZUF0KHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVwbGFjZSBnaXZlbiB0aWxlcyB3aXRoIG5ldyB0aWxlcyBcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gb2xkVGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IG5ld1RpbGVzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUaWxlcyh0aWxlTWFwLCBvbGRUaWxlcywgbmV3VGlsZXMpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCFvbGRUaWxlcywgJ1RoZSBvbGRUaWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghbmV3VGlsZXMsICdUaGUgbmV3VGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gb2xkVGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAobmV3VGlsZXNbaV0pIHtcclxuICAgICAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQobmV3VGlsZXNbaV0sIG9sZFRpbGVzW2ldLngsIG9sZFRpbGVzW2ldLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vdmUgdGlsZXMgb24gdGhlIFRpbGVtYXAgYSBmb3IgZ2l2ZW4gZGlyZWN0aW9uIGFuZCB2ZWxvY2l0eVxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlcyh0aWxlTWFwLCB0aWxlcywgZGlyZWN0aW9uLCB2ZWxvY2l0eSkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCFkaXJlY3Rpb24sICdUaGUgZGlyZWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuICAgICAgICAgICAgbW92ZVRpbGVzTGVmdCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICAgICAgbW92ZVRpbGVzUmlnaHQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XHJcbiAgICAgICAgICAgIG1vdmVUaWxlc1VwKHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLkRPV046XHJcbiAgICAgICAgICAgIG1vdmVUaWxlRG93bih0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vdmUgdGlsZXMgdG8gdGhlIGxlZnQgb24gdGhlIFRpbGVtYXAgZm9yIGEgZ2l2ZW4gdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlc0xlZnQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLnggLSB2ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb3ZlIHRpbGVzIHRvIHRoZSByaWdodCBvbiB0aGUgVGlsZW1hcCBmb3IgYSBmb3IgZ2l2ZW4gdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlc1JpZ2h0KHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54ICsgdmVsb2NpdHksIHRpbGVzW2ldLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW92ZSB0aWxlcyB1cCBvbiB0aGUgVGlsZW1hcCBmb3IgYSBnaXZlbiB2ZWxvY2l0eVxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICogQHBhcmFtIHtBcnJheX0gdmVsb2NpdHkgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRpbGVzVXAodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkgLSB2ZWxvY2l0eSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb3ZlIHRpbGVzIGRvd24gb24gdGhlIFRpbGVtYXAgZm9yIGEgZ2l2ZW4gdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlRG93bih0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSArIHZlbG9jaXR5KTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV90aGVfY2FzdGxlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2VzY2FwZV9mcm9tX3RoZV9jYXN0bGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9