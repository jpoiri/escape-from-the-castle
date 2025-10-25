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
/* harmony export */   TextSize: () => (/* binding */ TextSize),
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

const TextSize = {
	REGULAR: 'REGULAR',
	LARGE: 'LARGE',
	SMALL: 'SMALL'
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
/* harmony import */ var _utils_text_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/text-utils */ "./src/utils/text-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.js");








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
		this.loadRoom('room-one');
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
		(0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_4__.addText)(this, 925, 20, 'Items', _constants__WEBPACK_IMPORTED_MODULE_5__.TextSize.REGULAR);
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

		const screenText = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.SCREEN_TEXT);
		const modalSize = this.getCustomProperty(this.tileMap, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.MODAL_SIZE);
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
		const backgroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_5__.TilemapLayer.BACKGROUND, tileSets);
		const foregroundLayer = tileMap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_5__.TilemapLayer.FOREGROUND, tileSets);
		const objectsLayer = tileMap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_5__.TilemapLayer.OBJECTS);
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
				case _constants__WEBPACK_IMPORTED_MODULE_5__.EntityType.INTERACTIVE_ZONE:
					this.zones.push(this.addInteractiveZone(tileMapObjects[i]));
					break;
				case _constants__WEBPACK_IMPORTED_MODULE_5__.EntityType.TEXT:
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
		zone.setAction(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.ACTION));
		zone.setConstraints(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.CONSTRAINTS));
		zone.setConstraintMessage(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.CONSTRAINT_MESSAGE));
		zone.setNavigateTo(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.NAVIGATE_TO));
		zone.setNavigateToScene(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.NAVIGATE_TO_SCENE));
		zone.setSpawn(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.SPAWN));
		zone.setTimePenality(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.TIME_PENALITY));
		zone.setTimePenalityMessage(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.TIME_PENALITY_MESSAGE));
		zone.setAudioClipKey(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.AUDIO_CLIP_KEY));
		zone.setCursor(false);

		const events = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.EVENTS);

		if (events) {
			const { listenTo, emit } = this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.EVENTS);

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
		const { x, y, text } = tileMapObject;
		const { color, fontfamily, halign, pixelsize } = text;
		return this.add.text(x, y, text.text, {
			fontFamily: fontfamily,
			fontSize: `${pixelsize}px`,
			fill: color,
			align: halign
		});
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
		itemImage.setAlpha(0);
		itemImage.setInteractive({
			cursor: 'grab'
		});
		itemImage.on('pointerdown', () => {
			this.sound.play('got-item-audio', {
				volume: 0.3
			});
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
			this.timeText = (0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_4__.addText)(this, 915, 730, `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`, _constants__WEBPACK_IMPORTED_MODULE_5__.TextSize.SMALL);
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
/* harmony import */ var _utils_text_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text-utils */ "./src/utils/text-utils.js");




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

		(0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_2__.addText)(this, 400, 300, 'Game over!', _constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.LARGE);
		(0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_2__.addText)(
			this,
			516,
			400,
			'Alas, you failed to escape the castle in time, and now your soul is doomed to linger forever within its walls.',
			_constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.REGULAR,
			{
				wordWrap: {
					width: 400
				}
			}
		).setOrigin(0.5);
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
		this.load.spritesheet('treasure1', 'assets/img/Treasure Icons/treasure1.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet('treasure2', 'assets/img/Treasure Icons/treasure4.png', { frameWidth: 32, frameHeight: 32 });
		this.load.audio('open-door-audio', 'assets/sounds/qubodup-DoorSet/flac/qubodup-DoorOpen01.flac');
		this.load.audio('open-chest-audio', 'assets/sounds/open-chest.wav');
		this.load.audio('push-audio', 'assets/sounds/sfx-push-boulder.flac');
		this.load.audio('got-item-audio', 'assets/sounds/Item1A.wav');
		this.load.audio('explosion-audio', 'assets/sounds/rumble.flac');
		this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
		this.load.on('complete', () => {
			WebFont.load({
				google: {
					families: ['Germania One']
				},
				active: () => {
					this.scene.start('menu');
				}
			});
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
/* harmony import */ var _utils_text_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text-utils */ "./src/utils/text-utils.js");




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

		(0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_2__.addText)(this, 310, 350, 'Escape from the castle', _constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.LARGE);
		(0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_2__.addText)(this, 512, 450, 'Click to start the game').setOrigin(0.5, 0.5);
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
/* harmony import */ var _utils_text_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text-utils */ "./src/utils/text-utils.js");




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

		(0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_2__.addText)(this, 200, 300, 'Congratulations! You’ve escaped!', _constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.LARGE);
		(0,_utils_text_utils__WEBPACK_IMPORTED_MODULE_2__.addText)(
			this,
			516,
			420,
			'At last, I’ve won my freedom. But as I step beyond the castle gates, the truth returns I had amnesia. This was my castle, and I was my own prisoner.',
			_constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.REGULAR,
			{
				wordWrap: {
					width: 400
				}
			}
		).setOrigin(0.5);
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
/* harmony import */ var _text_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-utils */ "./src/utils/text-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");




/**
 * Displays a modal window with text
 * @param {Phaser.Scene} scene The Phaser scene
 * @param {string} text The text
 * @param {string} size The modal size
 * @param {function} closeCallback The callback function call when modal is closed
 */
function showTextModal(scene, text, size = _constants__WEBPACK_IMPORTED_MODULE_2__.ModalSize.REGULAR, closeCallback) {
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!text, 'The text is undefined');
	const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
	const modal = scene.add.container(450, 350).setAlpha(0);
	let box = null;
	let closeText = null;

	switch (size) {
		case _constants__WEBPACK_IMPORTED_MODULE_2__.ModalSize.REGULAR:
			box = scene.add.rectangle(0, 0, 500, 250, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
			closeText = (0,_text_utils__WEBPACK_IMPORTED_MODULE_1__.addText)(scene, 165, -115, 'Close X').setInteractive({
				useHandCursor: true
			});
			break;
		case _constants__WEBPACK_IMPORTED_MODULE_2__.ModalSize.LARGE:
			closeText = (0,_text_utils__WEBPACK_IMPORTED_MODULE_1__.addText)(scene, 165, -115, 'Close X').setInteractive({
				useHandCursor: true
			});
			box = scene.add.rectangle(0, 0, 450, 350, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
			break;
	}

	const textObj = (0,_text_utils__WEBPACK_IMPORTED_MODULE_1__.addText)(scene, 0, 0, text, _constants__WEBPACK_IMPORTED_MODULE_2__.TextSize.REGULAR, {
		wordWrap: {
			width: 400
		}
	}).setOrigin(0.5);

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
	const box = scene.add.rectangle(0, 0, 500, 250, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
	const image = scene.add.image(0, 0, imageKey).setOrigin(0.5);
	image.setDisplaySize(box.width - 60, box.height - 60);

	const closeText = (0,_text_utils__WEBPACK_IMPORTED_MODULE_1__.addText)(scene, 155, -169, 'Close X').setInteractive({
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
	const box = scene.add.rectangle(0, 0, 500, 200, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);

	const closeText = (0,_text_utils__WEBPACK_IMPORTED_MODULE_1__.addText)(scene, 165, -90, 'Close X').setInteractive({
		useHandCursor: true
	});
	const itemImage = scene.add.image(0, -10, itemTexture, itemFrame);
	const itemDescriptionText = (0,_text_utils__WEBPACK_IMPORTED_MODULE_1__.addText)(scene, 0, 30, itemDescription).setOrigin(0.5);

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

/***/ "./src/utils/text-utils.js":
/*!*********************************!*\
  !*** ./src/utils/text-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addText: () => (/* binding */ addText)
/* harmony export */ });
/* harmony import */ var _assert_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert-utils */ "./src/utils/assert-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



/**
 * Add text to the scene.
 *
 * @param {Phaser.Scene} scene The Phaser scene
 * @param {number} x The x position
 * @param {number} y The y position
 * @param {string} text The text
 * @param {string} size The size
 */
function addText(scene, x, y, text, size = _constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.REGULAR, textOps = {}) {
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!scene, 'The scene is undefined');
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(x === null || x === undefined, 'The x is undefined');
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(y === null || y === undefined, 'The y is undefined');
	(0,_assert_utils__WEBPACK_IMPORTED_MODULE_0__.assert)(!text, 'The text is undefined');
	switch (size) {
		case _constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.LARGE:
			textOps = { ...textOps, fontSize: '48px', fontFamily: 'Germania One' };
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.TextSize.SMALL:
            textOps = { ...textOps, fontSize: '18px', fontFamily: 'Germania One' };
            break;
		default:
			textOps = { ...textOps, fontSize: '24px', fontFamily: 'Germania One' };
			break;
	}
	return scene.add.text(x, y, text, textOps);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySzBCO0FBQzhDO0FBQzNCO0FBQ3NEO0FBQ2hDO0FBQ3JFO0FBQ0E7QUFD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LHFEQUFNO0FBQ1Ysd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBOzs7Ozs7VUNwSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0ludGVyYWN0aXZlWm9uZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL2Vycm9ycy9JbnZhbGlkYUFyZ3VtZW50RXJyb3IuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3NjZW5lcy9HYW1lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvc2NlbmVzL0dhbWVPdmVyLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvc2NlbmVzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9zY2VuZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3NjZW5lcy9XaW4uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy91dGlscy9hc3NlcnQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy91dGlscy9tb2RhbC11dGlscy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3V0aWxzL3RleHQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy91dGlscy90aWxlbWFwLXV0aWxzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHtcclxuXHRDT01CSU5BVElPTjogJ2NvbWJpbmF0aW9uJyxcclxuXHRQUk9NUFRfTUVTU0FHRTogJ3Byb21wdE1lc3NhZ2UnLFxyXG5cdFNQQVdOOiAnc3Bhd24nLFxyXG5cdFNQQVdOX0lURU06ICdzcGF3bkl0ZW0nLFxyXG5cdExPQ0tFRDogJ2xvY2tlZCcsXHJcblx0TE9DS0VEX01FU1NBR0U6ICdsb2NrZWRNZXNzYWdlJyxcclxuXHRBQ1RJT046ICdhY3Rpb24nLFxyXG5cdENPTlNUUkFJTlRTOiAnY29uc3RyYWludHMnLFxyXG5cdE5BVklHQVRFX1RPOiAnbmF2aWdhdGVUbycsXHJcblx0TkFWSUdBVEVfVE9fU0NFTkU6ICduYXZpZ2F0ZVRvU2NlbmUnLFxyXG5cdENPTlNUUkFJTlRfTUVTU0FHRTogJ2NvbnN0cmFpbnRNZXNzYWdlJyxcclxuXHRFVkVOVFM6ICdldmVudHMnLFxyXG5cdFNDUkVFTl9URVhUOiAnc2NyZWVuVGV4dCcsXHJcblx0TU9EQUxfU0laRTogJ21vZGFsU2l6ZScsXHJcblx0VElNRV9QRU5BTElUWTogJ3RpbWVQZW5hbGl0eScsXHJcblx0VElNRV9QRU5BTElUWV9NRVNTQUdFOiAndGltZVBlbmFsaXR5TWVzc2FnZScsXHJcblx0QVVESU9fQ0xJUF9LRVk6ICdhdWRpb0NsaXBLZXknXHJcbn07XHJcblxyXG5jb25zdCBBY3Rpb25UeXBlID0ge1xyXG5cdE1PVkVfVElMRTogJ01PVkVfVElMRScsXHJcblx0VE9HR0xFX1RJTEVfTU9WRU1FTlQ6ICdUT0dHTEVfVElMRV9NT1ZFTUVOVCcsXHJcblx0REVTVFJPWV9USUxFOiAnREVTVFJPWV9USUxFJyxcclxuXHRSRVBMQUNFX1RJTEU6ICdSRVBMQUNFX1RJTEUnLFxyXG5cdFRPR0dMRV9USUxFOiAnVE9HR0xFX1RJTEUnLFxyXG5cdFNIT1dfVEVYVDogJ1NIT1dfVEVYVCcsXHJcblx0U0hPV19JTUFHRTogJ1NIT1dfSU1BR0UnLFxyXG5cdERFU1RST1k6ICdERVNUUk9ZJyxcclxuXHRUVVJOX09OX0xJR0hUOiAnVFVSTl9PTl9MSUdIVCcsXHJcblx0VFVSTl9PRkZfTElHSFQ6ICdUVVJOX09GRl9MSUdIVCdcclxufTtcclxuXHJcbmNvbnN0IFNwYXduVHlwZSA9IHtcclxuXHRJVEVNOiAnSVRFTScsXHJcblx0TlBDOiAnTlBDJ1xyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG5cdExFRlQ6ICdMRUZUJyxcclxuXHRSSUdIVDogJ1JJR0hUJyxcclxuXHRVUDogJ1VQJyxcclxuXHRET1dOOiAnRE9XTidcclxufTtcclxuXHJcbmNvbnN0IFJvdGF0aW9uID0ge1xyXG5cdFJPVEFURV85MDogJzkwJyxcclxuXHRST1RBVEVfMTgwOiAnMTgwJyxcclxuXHRST1RBVEVfMjcwOiAnMjcwJ1xyXG59O1xyXG5cclxuY29uc3QgTW9kYWxTaXplID0ge1xyXG5cdFJFR1VMQVI6ICdSRUdVTEFSJyxcclxuXHRMQVJHRTogJ0xBUkdFJ1xyXG59O1xyXG5cclxuY29uc3QgVGV4dFNpemUgPSB7XHJcblx0UkVHVUxBUjogJ1JFR1VMQVInLFxyXG5cdExBUkdFOiAnTEFSR0UnLFxyXG5cdFNNQUxMOiAnU01BTEwnXHJcbn07XHJcblxyXG5jb25zdCBUaWxlbWFwTGF5ZXIgPSB7XHJcblx0QkFDS0dST1VORDogJ2JhY2tncm91bmQnLFxyXG5cdEZPUkVHUk9VTkQ6ICdmb3JlZ3JvdW5kJyxcclxuXHRPQkpFQ1RTOiAnb2JqZWN0cydcclxufTtcclxuXHJcbmNvbnN0IEVudGl0eVR5cGUgPSB7XHJcblx0RE9PUjogJ0Rvb3InLFxyXG5cdFNBRkU6ICdTYWZlJyxcclxuXHRDSEVTVDogJ0NoZXN0JyxcclxuXHRURVhUOiAnVGV4dCcsXHJcblx0SU5URVJBQ1RJVkVfWk9ORTogJ0ludGVyYWN0aXZlWm9uZSdcclxufTtcclxuXHJcbmNvbnN0IExvYWRlcktleSA9IHtcclxuXHRUSUxFTUFQOiAndGlsZW1hcCcsXHJcblx0VElMRVNFVDogJ3RpbGVzJyxcclxuXHRJVEVNUzogJ2l0ZW1zJyxcclxuXHRVSTogJ3VpJyxcclxuXHRDSEVTVDogJ2NoZXN0JyxcclxuXHRET09SOiAnZG9vcicsXHJcblx0U0FGRTogJ3NhZmUnLFxyXG5cdE1FTlVfSU1BR0U6ICdtZW51LWltYWdlJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZSA9IHtcclxuXHRTSUdOOiAxNDQsXHJcblx0Q0xPU0VfV0lORE9XOiAyNTgsXHJcblx0T1BFTl9XSU5ET1c6IDIzNSxcclxuXHRDT0ZGSU46IFs3MSwgOTVdLFxyXG5cdERFU1RST1lFRF9LTklHSFQ6IDk2LFxyXG5cdFRPUF9DSEFJUjogMzEyLFxyXG5cdE1JRERMRV9DSEFJUjogMzM2LFxyXG5cdEJPVFRPTV9DSEFJUjogMzYwLFxyXG5cdEhPTEVfSU5fV0FMTDogMjQ5LFxyXG5cdFRPUF9MRUZUX0dBUkdPWUxFOiAyMzIsXHJcblx0VE9QX1JJR0hUX0dBUkdPWUxFOiAyMzMsXHJcblx0Qk9UVE9NX0xFRlRfR0FSR09ZTEU6IDI1NixcclxuXHRCT1RUT01fUklHSFRfR0FSR09ZTEU6IDI1NyxcclxuXHRUT1BfTEVGVF9XQVRFUjogMTAsXHJcblx0VE9QX0NFTlRFUl9XQVRFUjogMTEsXHJcblx0VE9QX1JJR0hUX1dBVEVSOiAxMixcclxuXHRNSURETEVfTEVGVF9XQVRFUjogMzQsXHJcblx0TUlERExFX0NFTlRFUl9XQVRFUjogMzUsXHJcblx0TUlERExFX1JJR0hUX1dBVEVSOiAzNixcclxuXHRCT1RUT01fTEVGVF9XQVRFUjogNTgsXHJcblx0Qk9UVE9NX0NFTlRFUl9XQVRFUjogNTksXHJcblx0Qk9UVE9NX1JJR0hUX1dBVEVSOiA2MCxcclxuXHRESUdHRURfSE9MRTogMzE2LFxyXG5cdFNUQUlSOiAxMjRcclxufTtcclxuXHJcbmNvbnN0IEl0ZW0gPSB7XHJcblx0Qk9PSzogJ2Jvb2snLFxyXG5cdEhBTU1FUjogJ2hhbW1lcicsXHJcblx0UElDS0FYRTogJ3BpY2theGUnLFxyXG5cdEtFWTogJ2tleScsXHJcblx0TUFTVEVSX0tFWTogJ21hc3Rlci1rZXknLFxyXG5cdElDRV9ST0Q6ICdpY2Utcm9kJyxcclxuXHRQT1RJT046ICdwb3Rpb24nLFxyXG5cdFNIT1ZFTDogJ3Nob3ZlbCcsXHJcblx0UklORzogJ3JpbmcnXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSB7XHJcblx0RE9PUl9PUEVOOiAnZG9vci1vcGVuJyxcclxuXHRTQUZFX09QRU46ICdzYWZlLW9wZW4nLFxyXG5cdENIRVNUX09QRU46ICdjaGVzdC1vcGVuJ1xyXG59O1xyXG5cclxuY29uc3QgRnJhbWUgPSB7XHJcblx0TUFTVEVSX0tFWTogNTEsXHJcblx0UElDS0FYRTogODMsXHJcblx0UE9USU9OOiA2MSxcclxuXHRLRVk6IDUwLFxyXG5cdFJJTkc6IDEzXHJcbn07XHJcblxyXG5PYmplY3QuZnJlZXplKFRpbGVtYXBMYXllcik7XHJcbk9iamVjdC5mcmVlemUoQ3VzdG9tUHJvcGVydHkpO1xyXG5PYmplY3QuZnJlZXplKExvYWRlcktleSk7XHJcbk9iamVjdC5mcmVlemUoRW50aXR5VHlwZSk7XHJcbk9iamVjdC5mcmVlemUoVGlsZSk7XHJcbk9iamVjdC5mcmVlemUoSXRlbSk7XHJcbk9iamVjdC5mcmVlemUoQW5pbWF0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShGcmFtZSk7XHJcbk9iamVjdC5mcmVlemUoRGlyZWN0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShBY3Rpb25UeXBlKTtcclxuXHJcbmV4cG9ydCB7XHJcblx0VGlsZW1hcExheWVyLFxyXG5cdEN1c3RvbVByb3BlcnR5LFxyXG5cdExvYWRlcktleSxcclxuXHRFbnRpdHlUeXBlLFxyXG5cdFRpbGUsXHJcblx0SXRlbSxcclxuXHRBbmltYXRpb24sXHJcblx0RnJhbWUsXHJcblx0QWN0aW9uVHlwZSxcclxuXHREaXJlY3Rpb24sXHJcblx0U3Bhd25UeXBlLFxyXG5cdE1vZGFsU2l6ZSxcclxuXHRUZXh0U2l6ZVxyXG59O1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIERpcmVjdGlvbiwgU3Bhd25UeXBlLCBSb3RhdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4uL3V0aWxzL2Fzc2VydC11dGlscyc7XHJcbmltcG9ydCB7IGdldFRpbGVzV2l0aGluV29ybGRYWSwgcmVtb3ZlVGlsZXMsIHJlcGxhY2VUaWxlcywgbW92ZVRpbGVzIH0gZnJvbSAnLi4vdXRpbHMvdGlsZW1hcC11dGlscyc7XHJcbmltcG9ydCB7IHNob3dJbWFnZU1vZGFsLCBzaG93VGV4dE1vZGFsIH0gZnJvbSAnLi4vdXRpbHMvbW9kYWwtdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhbiBJbnRlcmFjdGlvblpvbmUgaW4gdGhlIGVzY2FwZSByb29tXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aXZlWm9uZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xyXG5cdGFjdGlvbiA9IG51bGw7XHJcblx0Y29uc3RyYWludHMgPSBudWxsO1xyXG5cdHNwYXduID0gbnVsbDtcclxuXHRuYXZpZ2F0ZVRvID0gbnVsbDtcclxuXHRuYXZpZ2F0ZVRvU2NlbmUgPSBudWxsO1xyXG5cdGNvbnN0cmFpbnRNZXNzYWdlID0gbnVsbDtcclxuXHR0aW1lUGVuYWxpdHkgPSAwO1xyXG5cdHRpbWVQZW5hbGl0eU1lc3NhZ2UgPSBudWxsO1xyXG5cdGF1ZGlvQ2xpcEtleTtcclxuXHRkaXJ0eSA9IGZhbHNlO1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSB7UGhhc2VyLlNjZW5lfSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgem9uZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB6b25lIHggY29vcmRpbmF0ZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB6b25lIHkgY29vcmRpbmF0ZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgem9uZSB3aWR0aFxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgVGhlIHpvbmUgaGVpZ2h0XHJcblx0ICovXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIG5hbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEV4ZWN1dGUgdGhlIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSB1c2VkIG9uIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtNYXB9IGRpcnR5T2JqZWN0TWFwIFRoZSBtYXAgb2YgZGlydHkgb2JqZWN0c1xyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVDYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGFjdGlvbiBpcyBjb21wbGV0ZWQuXHJcblx0ICovXHJcblx0ZXhlY3V0ZUFjdGlvbihpdGVtLCBkaXJ0eU9iamVjdE1hcCwgb25Db21wbGV0ZUNhbGxiYWNrKSB7XHJcblx0XHRsZXQgaXRlbVVzZWQgPSBmYWxzZTtcclxuXHRcdGxldCB0aWxlcyA9IG51bGw7XHJcblx0XHRpZiAoIXRoaXMuY2FuRXhlY3V0ZShpdGVtLCBkaXJ0eU9iamVjdE1hcCkpIHtcclxuXHRcdFx0aWYgKHRoaXMuY29uc3RyYWludE1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMuc2NlbmUsIHRoaXMuY29uc3RyYWludE1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgeyB0eXBlLCB2ZWxvY2l0eSwgbmV3VGlsZXMsIGRpcmVjdGlvbiwgdGV4dCwgdGV4dHVyZUtleSwgcmVwZWF0LCBhbHBoYSB9ID0gdGhpcy5hY3Rpb247XHJcblxyXG5cdFx0XHRuZXdUaWxlcyA9IG5ld1RpbGVzPy5zcGxpdCgnLCcpLm1hcCgocykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChzLCAxMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlJFUExBQ0VfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdHJlcGxhY2VUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCBuZXdUaWxlcyk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UT0dHTEVfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5kaXJ0eSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZXZpb3VzVGlsZXMgPSB0aWxlcy5tYXAoKHQpID0+IHQuaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRyZXBsYWNlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgbmV3VGlsZXMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJlcGxhY2VUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCB0aGlzLnByZXZpb3VzVGlsZXMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZXZpb3VzVGlsZXMgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuREVTVFJPWV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0cmVtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcyk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5NT1ZFX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRyZW1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzKTtcclxuXHRcdFx0XHRcdG1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCBkaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdHRoaXMubW92ZShkaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRPR0dMRV9USUxFX01PVkVNRU5UOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmRpcnR5KSB7XHJcblx0XHRcdFx0XHRcdHJlbW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMpO1xyXG5cdFx0XHRcdFx0XHRtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgZGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdHRoaXMubW92ZShkaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBtb3ZlZFRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdFx0cmVtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCBtb3ZlZFRpbGVzKTtcclxuXHRcdFx0XHRcdFx0bW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIHRoaXMucmV2ZXJzZURpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1vdmUodGhpcy5yZXZlcnNlRGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5TSE9XX1RFWFQ6XHJcblx0XHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMuc2NlbmUsIHRleHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuU0hPV19JTUFHRTpcclxuXHRcdFx0XHRcdHNob3dJbWFnZU1vZGFsKHRoaXMuc2NlbmUsIHRleHR1cmVLZXkpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuREVTVFJPWToge1xyXG5cdFx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuVFVSTl9PTl9MSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS50dXJuT25MaWdodCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UVVJOX09GRl9MSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS50dXJuT2ZmTGlnaHQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zcGF3bikge1xyXG5cdFx0XHRcdHRoaXMuc3Bhd25PYmplY3QodGhpcy5zcGF3biwgdHlwZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMubmF2aWdhdGVUbykge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmUuY2hhbmdlUm9vbSh0aGlzLm5hdmlnYXRlVG8pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm5hdmlnYXRlVG9TY2VuZSkge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmUuc2NlbmUuc3RhcnQodGhpcy5uYXZpZ2F0ZVRvU2NlbmUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnRpbWVQZW5hbGl0eSkge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmUuYWRkVGltZVBlbmFsaXR5KHRoaXMudGltZVBlbmFsaXR5KTtcclxuXHRcdFx0XHRpZiAodGhpcy50aW1lUGVuYWxpdHlNZXNzYWdlKSB7XHJcblx0XHRcdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMuc2NlbmUsIHRoaXMudGltZVBlbmFsaXR5TWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmF1ZGlvQ2xpcEtleSkge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmUuc291bmQucGxheSh0aGlzLmF1ZGlvQ2xpcEtleSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKG9uQ29tcGxldGVDYWxsYmFjaykge1xyXG5cdFx0XHRcdG9uQ29tcGxldGVDYWxsYmFjayh0aGlzLmlzSXRlbVVzZWQoaXRlbSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcmVwZWF0ICYmIHRoaXMuYWN0aXZlKSB7XHJcblx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwYXduIGEgaXRlbSBvciBOUENcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gc3Bhd24gVGhlIHNwYXduIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uVHlwZSBUaGUgYWN0aW9uIHR5cGVcclxuXHQgKi9cclxuXHRzcGF3bk9iamVjdChzcGF3biwgYWN0aW9uVHlwZSkge1xyXG5cdFx0YXNzZXJ0KCFzcGF3biwgJ1RoZSBzcGF3biBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHN3aXRjaCAoc3Bhd24udHlwZSkge1xyXG5cdFx0XHRjYXNlIFNwYXduVHlwZS5OUEM6XHJcblx0XHRcdFx0aWYgKGFjdGlvblR5cGUgPT09IChBY3Rpb25UeXBlLlJFUExBQ0VfVElMRSB8fCBBY3Rpb25UeXBlLlRPR0dMRV9USUxFKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zcGF3bk5QQyh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgNTAsIHRoaXMuc3Bhd24pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduTlBDKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIsIHRoaXMuc3Bhd24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBTcGF3blR5cGUuSVRFTTpcclxuXHRcdFx0XHRpZiAoYWN0aW9uVHlwZSA9PT0gKEFjdGlvblR5cGUuUkVQTEFDRV9USUxFIHx8IEFjdGlvblR5cGUuVE9HR0xFX1RJTEUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduSXRlbSh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgNTAsIHRoaXMuc3Bhd24pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduSXRlbSh0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLnNwYXduKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgaXRlbSB3YXMgdXNlZCwgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc0l0ZW1Vc2VkKGl0ZW0pIHtcclxuXHRcdGlmICh0aGlzLmNvbnN0cmFpbnRzICYmIGl0ZW0pIHtcclxuXHRcdFx0Y29uc3QgeyBpdGVtUmVxdWlyZWQgfSA9IHRoaXMuY29uc3RyYWludHM7XHJcblx0XHRcdGlmIChpdGVtUmVxdWlyZWQgJiYgaXRlbT8ubmFtZSA9PT0gaXRlbVJlcXVpcmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1vdmUgem9uZSBmb3IgZ2l2ZW4gZGlyZWN0aW9uIGFuZCB2ZWxvY2l0eVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiB0byBtb3ZlIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHZlbG9jaXR5IFRoZSB2ZWxvY2l0eSB0byBtb3ZlIHRoZSB6b25lXHJcblx0ICovXHJcblx0bW92ZShkaXJlY3Rpb24sIHZlbG9jaXR5KSB7XHJcblx0XHRhc3NlcnQoIWRpcmVjdGlvbiwgJ1RoZSBkaXJlY3Rpb24gaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0c3dpdGNoIChkaXJlY3Rpb24pIHtcclxuXHRcdFx0Y2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuXHRcdFx0XHR0aGlzLnggPSB0aGlzLnggLSB0aGlzLndpZHRoIC0gdmVsb2NpdHk7XHJcblx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLlJJR0hUO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuXHRcdFx0XHR0aGlzLnggPSB0aGlzLnggKyB0aGlzLndpZHRoICsgdmVsb2NpdHk7XHJcblx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLkxFRlQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgRGlyZWN0aW9uLlVQOlxyXG5cdFx0XHRcdHRoaXMueSA9IHRoaXMueSAtIHRoaXMuaGVpZ2h0IC0gdmVsb2NpdHk7XHJcblx0XHRcdFx0dGhpcy5yZXZlcnNlRGlyZWN0aW9uID0gRGlyZWN0aW9uLkRPV047XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgRGlyZWN0aW9uLkRPV046XHJcblx0XHRcdFx0dGhpcy55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgKyB2ZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uVVA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgY3Vyc29yIGZvciB6b25lXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBpc0l0ZW1TZWxlY3RlZFxyXG5cdCAqL1xyXG5cdHNldEN1cnNvcihpc0l0ZW1TZWxlY3RlZCkge1xyXG5cdFx0aWYgKGlzSXRlbVNlbGVjdGVkICYmIHRoaXMuaW5wdXQpIHtcclxuXHRcdFx0dGhpcy5pbnB1dC5jdXJzb3IgPSAnZ3JhYmJpbmcnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlucHV0KSB7XHJcblx0XHRcdGlmICh0aGlzLmFjdGlvbj8udHlwZSA9PT0gQWN0aW9uVHlwZS5TSE9XX1RFWFQgfHwgdGhpcy5hY3Rpb24/LnR5cGUgPT09IEFjdGlvblR5cGUuU0hPV19JTUFHRSkge1xyXG5cdFx0XHRcdHRoaXMuaW5wdXQuY3Vyc29yID0gJ3pvb20taW4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW5wdXQuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZSBhY3Rpb24gY2FuIGJlIGV4ZWN1dGVkXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gdXNlIHdpdGggdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge01hcH0gZGlydHlPYmplY3RNYXAgVGhlIGRpcnR5IG9iamVjdCBtYXBcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRjYW5FeGVjdXRlKGl0ZW0sIGRpcnR5T2JqZWN0TWFwKSB7XHJcblx0XHRpZiAodGhpcy5jb25zdHJhaW50cykge1xyXG5cdFx0XHRjb25zdCB7IGl0ZW1SZXF1aXJlZCwgcHJvbXB0UmVxdWlyZWQsIGRlcGVuZHNPbiB9ID0gdGhpcy5jb25zdHJhaW50cztcclxuXHRcdFx0aWYgKGl0ZW1SZXF1aXJlZCAmJiBpdGVtPy5uYW1lICE9PSBpdGVtUmVxdWlyZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAocHJvbXB0UmVxdWlyZWQpIHtcclxuXHRcdFx0XHRjb25zdCBhbnN3ZXIgPSB3aW5kb3cucHJvbXB0KHByb21wdFJlcXVpcmVkLnF1ZXN0aW9uKTtcclxuXHRcdFx0XHRpZiAoYW5zd2VyICYmIGFuc3dlci50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcm9tcHRSZXF1aXJlZC5hbnN3ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmIChkZXBlbmRzT24pIHtcclxuXHRcdFx0XHRsZXQgdmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdGRlcGVuZHNPbj8uc3BsaXQoJywnKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIWRpcnR5T2JqZWN0TWFwLmhhcyhuYW1lKSkge1xyXG5cdFx0XHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmICghdmFsaWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgbmFtZVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBuYW1lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWVcclxuXHQgKi9cclxuXHRzZXROYW1lKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRydWUgaWYgem9uZSBpcyBkaXJ0eVxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGlzRGlydHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kaXJ0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCB3aGV0aGVyIHRoZSB6b25lIGlzIGRpcnR5XHJcblx0ICogQHBhcmFtIHtib29sZWFufSBkaXJ0eSBXaGV0aGVyIHpvbmUgaXMgZGlydHlcclxuXHQgKi9cclxuXHRzZXREaXJ0eShkaXJ0eSkge1xyXG5cdFx0dGhpcy5kaXJ0eSA9IGRpcnR5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgYWN0aW9uIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gVGhlIGFjdGlvbiBvYmplY3RcclxuXHQgKi9cclxuXHRzZXRBY3Rpb24oYWN0aW9uKSB7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGFjdGlvbiBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdGdldEFjdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmFjdGlvbjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGNvbnN0cmFpbnRzIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25zdHJhaW50cyBUaGUgY29uc3RyYWludCBvYmplY3RcclxuXHQgKi9cclxuXHRzZXRDb25zdHJhaW50cyhjb25zdHJhaW50cykge1xyXG5cdFx0dGhpcy5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY29uc3RyYWludHMgb2JqZWN0XHJcblx0ICogQHJldHVybnMge09iamVjdH1cclxuXHQgKi9cclxuXHRnZXRDb25zdHJhaW50cygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnRzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgc3Bhd24gb2JqZWN0XHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHNwYXduIFRoZSBzcGF3biBvYmplY3RcclxuXHQgKi9cclxuXHRzZXRTcGF3bihzcGF3bikge1xyXG5cdFx0dGhpcy5zcGF3biA9IHNwYXduO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgc3Bhd24gb2JqZWN0XHJcblx0ICogQHJldHVybnMge09iamVjdH1cclxuXHQgKi9cclxuXHRnZXRTcGF3bigpIHtcclxuXHRcdHJldHVybiB0aGlzLnNwYXduO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgcm9vbSB3aGVyZSB0byBuYXZpZ2F0ZSBuZXh0XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hdmlnYXRlVG8gVGhlIHJvb20gd2hlcmUgdG8gbmF2aWdhdGUgbmV4dFxyXG5cdCAqL1xyXG5cdHNldE5hdmlnYXRlVG8obmF2aWdhdGVUbykge1xyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvID0gbmF2aWdhdGVUbztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHJvb20gd2hlcmUgdG8gbmF2aWdhdGUgbmV4dFxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0TmF2aWdhdGVUbygpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hdmlnYXRlVG87XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBuYXZpZ2F0ZVRvU2NlbmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmF2aWdhdGVUb1NjZW5lXHJcblx0ICovXHJcblx0c2V0TmF2aWdhdGVUb1NjZW5lKG5hdmlnYXRlVG9TY2VuZSkge1xyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvU2NlbmUgPSBuYXZpZ2F0ZVRvU2NlbmU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBuYXZpZ2F0ZVRvU2NlbmVcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldE5hdmlnYXRlVG9TY2VuZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hdmlnYXRlVG9TY2VuZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGNvbnN0cmFpbnQgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25zdHJhaW50TWVzc2FnZSBUaGUgY29uc3RyYWludCBtZXNzYWdlXHJcblx0ICovXHJcblx0c2V0Q29uc3RyYWludE1lc3NhZ2UoY29uc3RyYWludE1lc3NhZ2UpIHtcclxuXHRcdHRoaXMuY29uc3RyYWludE1lc3NhZ2UgPSBjb25zdHJhaW50TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGNvbnN0cmFpbnQgbWVzc2FnZVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0Q29uc3RyYWludE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJhaW50TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZVBlbmFsaXR5IFRoZSB0aW1lIHBlbmFsaXR5XHJcblx0ICovXHJcblx0c2V0VGltZVBlbmFsaXR5KHRpbWVQZW5hbGl0eSkge1xyXG5cdFx0dGhpcy50aW1lUGVuYWxpdHkgPSB0aW1lUGVuYWxpdHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB0aW1lIHBlbmFsaXR5XHJcblx0ICogQHJldHVybnMge251bWJlcn1cclxuXHQgKi9cclxuXHRnZXRUaW1lUGVuYWxpdHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50aW1lUGVuYWxpdHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSB0aW1lIHBlbmFsaXR5IG1lc3NhZ2VcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGltZVBlbmFsaXR5TWVzc2FnZSBUaGUgdGltZSBwZW5hbGl0eSBtZXNzc2FnZVxyXG5cdCAqL1xyXG5cdHNldFRpbWVQZW5hbGl0eU1lc3NhZ2UodGltZVBlbmFsaXR5TWVzc2FnZSkge1xyXG5cdFx0dGhpcy50aW1lUGVuYWxpdHlNZXNzYWdlID0gdGltZVBlbmFsaXR5TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRpbWUgcGVuYWxpdHkgbWVzc2FnZVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0VGltZVBlbmFsaXR5TWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBhdWRpbyBjbGlwIGtleVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhdWRpb0NsaXBLZXkgVGhlIGF1ZGlvIGNsaXAga2V5XHJcblx0ICovXHJcblx0c2V0QXVkaW9DbGlwS2V5KGF1ZGlvQ2xpcEtleSkge1xyXG5cdFx0dGhpcy5hdWRpb0NsaXBLZXkgPSBhdWRpb0NsaXBLZXk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBhdWRpbyBjbGlwIGtleVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0QXVkaW9DbGlwS2V5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXVkaW9DbGlwS2V5O1xyXG5cdH1cclxufVxyXG4iLCIvKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGFuIGludmFsaWQgYXJndW1lbnQgZXJyb3JcclxuICogQGV4dGVuZHMgRXJyb3JcclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMjVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWRBcmd1bWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnSW52YWxpZEFyZ3VtZW50RXJyb3InXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9zY2VuZXMvR2FtZSc7XHJcbmltcG9ydCBHYW1lT3ZlclNjZW5lICBmcm9tICcuL3NjZW5lcy9HYW1lT3Zlcic7XHJcbmltcG9ydCBXaW5TY2VuZSBmcm9tICcuL3NjZW5lcy9XaW4nO1xyXG5pbXBvcnQgU3BsYXNoU2NlbmUgZnJvbSAnLi9zY2VuZXMvTWVudSc7XHJcbmltcG9ydCBMb2FkaW5nU2NlbmUgZnJvbSAnLi9zY2VuZXMvTG9hZGluZyc7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblx0c2NhbGU6IHtcclxuXHRcdG1vZGU6IFBoYXNlci5TY2FsZS5GSVQsXHJcbiAgICAgICAgYXV0b0NlbnRlcjogUGhhc2VyLlNjYWxlLkNFTlRFUl9CT1RILFxyXG5cdFx0d2lkdGg6IDEwMjQsXHJcblx0XHRoZWlnaHQ6IDc2OFxyXG5cdH0sXHJcblx0cGh5c2ljczoge1xyXG5cdFx0ZGVmYXVsdDogJ2FyY2FkZScsXHJcblx0XHRhcmNhZGU6IHtcclxuXHRcdFx0ZGVidWc6IHRydWUsXHJcblx0XHRcdGdyYXZpdHk6IHsgeTogMjAwIH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHNjZW5lOiBbTG9hZGluZ1NjZW5lLCBTcGxhc2hTY2VuZSwgR2FtZVNjZW5lLCBHYW1lT3ZlclNjZW5lLCBXaW5TY2VuZV1cclxufTtcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgSW50ZXJhY3RpdmVab25lIGZyb20gJy4uL2VudGl0aWVzL0ludGVyYWN0aXZlWm9uZSc7XHJcbmltcG9ydCB7IHNob3dUZXh0TW9kYWwsIHNob3dJdGVtTW9kYWwgfSBmcm9tICcuLi91dGlscy9tb2RhbC11dGlscyc7XHJcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4uL3V0aWxzL2Fzc2VydC11dGlscyc7XHJcbmltcG9ydCB7IGFkZFRleHQgfSBmcm9tICcuLi91dGlscy90ZXh0LXV0aWxzJztcclxuXHJcbmltcG9ydCB7IEN1c3RvbVByb3BlcnR5LCBUaWxlbWFwTGF5ZXIsIEVudGl0eVR5cGUsIFRleHRTaXplIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFRSQU5TSVRJT05fREVMQVkgPSA1MDA7XHJcbmNvbnN0IE5VTUJFUl9PRl9NSU5VVEVTID0gNjA7XHJcbmNvbnN0IE5VTUJFUl9PRl9TRUNPTkRTID0gNjA7XHJcbmNvbnN0IE5VTUJFUl9PRl9IT1VSUyA9IDI0O1xyXG5jb25zdCBOVU1CRVJfT0ZfTUlMTElTRUNPTkRTID0gMTAwMDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIHRoZSBnYW1lIHNjZW5lLlxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMjVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0dGlsZU1hcCA9IG51bGw7XHJcblx0em9uZXMgPSBbXTtcclxuXHRpdGVtcyA9IFtdO1xyXG5cdG5wY3MgPSBbXTtcclxuXHR0ZXh0cyA9IFtdO1xyXG5cdGl0ZW1JbWFnZXMgPSBbXTtcclxuXHRzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdHNlbGVjdGVkUmVjdGFuZ2xlID0gbnVsbDtcclxuXHRyb29tTmFtZSA9IG51bGw7XHJcblx0ZGlydHlPYmplY3RNYXAgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ2dhbWUnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBob29rIHRoYXQgaXMgcnVuIG9uY2Ugd2hlbiB0aGUgc2NlbmUgc3RhcnRzXHJcblx0ICovXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0dGhpcy5hZGRSb29tT3ZlcmxheSgpO1xyXG5cdFx0dGhpcy5sb2FkUm9vbSgncm9vbS1vbmUnKTtcclxuXHRcdHRoaXMuYWRkSHVkKCk7XHJcblx0XHR0aGlzLnN0YXJ0VGltZXIoMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgb3ZlcmxheSBvdmVyIHJvb20gdG8gY29udHJvbCByb29tIGxpZ2h0XHJcblx0ICovXHJcblx0YWRkUm9vbU92ZXJsYXkoKSB7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5ID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoLCB0aGlzLmNhbWVyYXMubWFpbi5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpO1xyXG5cdFx0dGhpcy5yb29tT3ZlcmxheS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuXHRcdHRoaXMucm9vbU92ZXJsYXkuc2V0T3JpZ2luKDApO1xyXG5cdFx0dGhpcy5yb29tT3ZlcmxheS5zZXREZXB0aCgxMDAwKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFR1cm4gb2ZmIGxpZ2h0XHJcblx0ICovXHJcblx0dHVybk9mZkxpZ2h0KCkge1xyXG5cdFx0dGhpcy5yb29tT3ZlcmxheS5zZXRWaXNpYmxlKHRydWUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVHVybiBvbiBsaWdodFxyXG5cdCAqL1xyXG5cdHR1cm5PbkxpZ2h0KCkge1xyXG5cdFx0dGhpcy5yb29tT3ZlcmxheS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBIVUQgdG8gdGhlIGdhbWUgc2NlbmVcclxuXHQgKi9cclxuXHRhZGRIdWQoKSB7XHJcblx0XHRhZGRUZXh0KHRoaXMsIDkyNSwgMjAsICdJdGVtcycsIFRleHRTaXplLlJFR1VMQVIpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHRoZSBIVURcclxuXHQgKi9cclxuXHR1cGRhdGVIdWQoKSB7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RlZFJlY3RhbmdsZSAmJiAhdGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pdGVtSW1hZ2VzKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5pdGVtSW1hZ2VzW2ldLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGl0ZW1JbWFnZSA9IHRoaXMuYWRkLmltYWdlKDk1MCwgaSAqIDUwICsgODAsIHRoaXMuaXRlbXNbaV0udGV4dHVyZUtleSwgdGhpcy5pdGVtc1tpXS50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0XHRpdGVtSW1hZ2Uuc2V0QWxwaGEoMCk7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdFx0Y3Vyc29yOiAnZ3JhYidcclxuXHRcdFx0fSk7XHJcblx0XHRcdGl0ZW1JbWFnZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRcdFx0dGhpcy5wb2ludGVySXRlbS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zZXRDdXJzb3IodHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaXRlbUltYWdlLngsIGl0ZW1JbWFnZS55LCA1MCwgNTApO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuc2V0U3Ryb2tlU3R5bGUoMywgMHhmZmZmZmYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy50d2VlbnMuYWRkKHtcclxuXHRcdFx0XHR0YXJnZXRzOiBpdGVtSW1hZ2UsXHJcblx0XHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdFx0ZHVyYXRpb246IDIwMCxcclxuXHRcdFx0XHRyZXBlYXQ6IDAsXHJcblx0XHRcdFx0eW95bzogZmFsc2VcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuaXRlbUltYWdlcy5wdXNoKGl0ZW1JbWFnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgY3Vyc29yXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBpc0l0ZW1TZWxlY3RlZCBXaGV0aGVyIHRoZSBpdGVtIGlzIHNlbGVjdGVkLlxyXG5cdCAqL1xyXG5cdHNldEN1cnNvcihpc0l0ZW1TZWxlY3RlZCkge1xyXG5cdFx0aWYgKGlzSXRlbVNlbGVjdGVkKSB7XHJcblx0XHRcdHRoaXMuaW5wdXQuc2V0RGVmYXVsdEN1cnNvcignZ3JhYmJpbmcnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5wdXQuc2V0RGVmYXVsdEN1cnNvcignZGVmYXVsdCcpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56b25lcy5mb3JFYWNoKCh6b25lKSA9PiB7XHJcblx0XHRcdHpvbmUuc2V0Q3Vyc29yKGlzSXRlbVNlbGVjdGVkKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCByb29tIG9uIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJvb21OYW1lIFRoZSByb29tIG5hbWVcclxuXHQgKi9cclxuXHRsb2FkUm9vbShyb29tTmFtZSkge1xyXG5cdFx0YXNzZXJ0KCFyb29tTmFtZSwgJ1RoZSByb29tTmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHRoaXMucm9vbU5hbWUgPSByb29tTmFtZTtcclxuXHRcdHRoaXMuZGlydHlPYmplY3RNYXAgPSBuZXcgTWFwKCk7XHJcblx0XHR0aGlzLmNhbWVyYXMubWFpbi5mYWRlSW4oVFJBTlNJVElPTl9ERUxBWSwgMCwgMCwgMCk7XHJcblx0XHR0aGlzLnRpbGVNYXAgPSB0aGlzLmNyZWF0ZVRpbGVNYXAocm9vbU5hbWUpO1xyXG5cclxuXHRcdGNvbnN0IGNhc3RsZVRpbGVzID0gdGhpcy5hZGRUaWxlU2V0KHRoaXMudGlsZU1hcCwgJ2Nhc3RsZS10aWxlcycsICdjYXN0bGUtdGlsZXMnKTtcclxuXHRcdGNvbnN0IGNyZWVweVRpbGVzID0gdGhpcy5hZGRUaWxlU2V0KHRoaXMudGlsZU1hcCwgJ2NyZWVweS10aWxlcycsICdjcmVlcHktdGlsZXMnKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lcnMgPSB0aGlzLmFkZFRpbGVTZXQodGhpcy50aWxlTWFwLCAnY29udGFpbmVycycsICdjb250YWluZXJzJyk7XHJcblx0XHRjb25zdCB7IG9iamVjdHNMYXllciwgZm9yZWdyb3VuZExheWVyIH0gPSB0aGlzLmdldFRpbGVNYXBMYXllcnModGhpcy50aWxlTWFwLCBbY3JlZXB5VGlsZXMsIGNhc3RsZVRpbGVzLCBjb250YWluZXJzXSk7XHJcblxyXG5cdFx0dGhpcy5hZGRUaWxlTWFwT2JqZWN0cyhvYmplY3RzTGF5ZXIpO1xyXG5cclxuXHRcdGNvbnN0IHNjcmVlblRleHQgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRoaXMudGlsZU1hcCwgQ3VzdG9tUHJvcGVydHkuU0NSRUVOX1RFWFQpO1xyXG5cdFx0Y29uc3QgbW9kYWxTaXplID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aGlzLnRpbGVNYXAsIEN1c3RvbVByb3BlcnR5Lk1PREFMX1NJWkUpO1xyXG5cdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBzY3JlZW5UZXh0LCBtb2RhbFNpemUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hhbmdlIHJvb20gbG9hZGVkIG9uIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHJvb21OYW1lIFRoZSBnYW1lIHNjZW5lLlxyXG5cdCAqL1xyXG5cdGNoYW5nZVJvb20ocm9vbU5hbWUpIHtcclxuXHRcdGFzc2VydCghcm9vbU5hbWUsICdUaGUgcm9vbU5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHR0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KFRSQU5TSVRJT05fREVMQVksIDAsIDAsIDAsIChjYW1lcmEsIHByb2dyZXNzKSA9PiB7XHJcblx0XHRcdGlmIChwcm9ncmVzcyA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMucmVzZXRSb29tKCk7XHJcblx0XHRcdFx0dGhpcy5sb2FkUm9vbShyb29tTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgcm9vbSBieSBkZXN0cm95aW5nIHJvb20gb2JqZWN0cy5cclxuXHQgKi9cclxuXHRyZXNldFJvb20oKSB7XHJcblx0XHR0aGlzLnR1cm5PbkxpZ2h0KCk7XHJcblx0XHR0aGlzLnpvbmVzLmZvckVhY2goKHpvbmUpID0+IHtcclxuXHRcdFx0em9uZS5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubnBjcy5mb3JFYWNoKChucGMpID0+IHtcclxuXHRcdFx0bnBjLmRlc3Ryb3koKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7XHJcblx0XHRcdHRleHQuZGVzdHJveSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGlsZU1hcEtleSBUaGUga2V5IG9mIHRoZSB0aWxlIG1hcC5cclxuXHQgKiBAcmV0dXJucyB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9XHJcblx0ICovXHJcblx0Y3JlYXRlVGlsZU1hcCh0aWxlTWFwS2V5KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBLZXksICdUaGUgdGlsZU1hcEtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHJldHVybiB0aGlzLm1ha2UudGlsZW1hcCh7IGtleTogdGlsZU1hcEtleSB9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCB0aWxlIHNldCBpbWFnZSB0byB0aGUgUGhhc2VyLlRpbGVtYXBzLlRpbGVtYXAgb2JqZWN0XHJcblx0ICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBUaGUgdGlsZSBtYXBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGlsZVNldEtleSBUaGUgdGlsZSBzZXQga2V5XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlVGV4dHVyZUtleSBUaGUgaW1hZ2UgdGV4dHVyZSBrZXlcclxuXHQgKi9cclxuXHRhZGRUaWxlU2V0KHRpbGVNYXAsIHRpbGVTZXRLZXksIGltYWdlVGV4dHVyZUtleSkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXRpbGVTZXRLZXksICdUaGUgdGlsZVNldEtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghaW1hZ2VUZXh0dXJlS2V5LCAnVGhlIHRpbGVTZXRUZXh0dXJlS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRpbGVNYXAuYWRkVGlsZXNldEltYWdlKHRpbGVTZXRLZXksIGltYWdlVGV4dHVyZUtleSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB0aWxlIG1hcCBsYXllcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSB0aWxlIG1hcFxyXG5cdCAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgVGhlIHRpbGUgbWFwXHJcblx0ICogQHBhcmFtIHtBcnJheX0gdGlsZVNldHNcclxuXHQgKi9cclxuXHRnZXRUaWxlTWFwTGF5ZXJzKHRpbGVNYXAsIHRpbGVTZXRzKSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghdGlsZVNldHMsICdUaGUgdGlsZVNldHMgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBiYWNrZ3JvdW5kTGF5ZXIgPSB0aWxlTWFwLmNyZWF0ZUxheWVyKFRpbGVtYXBMYXllci5CQUNLR1JPVU5ELCB0aWxlU2V0cyk7XHJcblx0XHRjb25zdCBmb3JlZ3JvdW5kTGF5ZXIgPSB0aWxlTWFwLmNyZWF0ZUxheWVyKFRpbGVtYXBMYXllci5GT1JFR1JPVU5ELCB0aWxlU2V0cyk7XHJcblx0XHRjb25zdCBvYmplY3RzTGF5ZXIgPSB0aWxlTWFwLmdldE9iamVjdExheWVyKFRpbGVtYXBMYXllci5PQkpFQ1RTKTtcclxuXHRcdHJldHVybiB7IGJhY2tncm91bmRMYXllciwgZm9yZWdyb3VuZExheWVyLCBvYmplY3RzTGF5ZXIgfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBUaWxlIG1hcCBvYmplY3RzIHRvIHRoZSBnYW1lIHNjZW5lLlxyXG5cdCAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLk9iamVjdExheWVyfSBvYmplY3RzTGF5ZXIgVGhlIG9iamVjdHMgbGF5ZXJcclxuXHQgKi9cclxuXHRhZGRUaWxlTWFwT2JqZWN0cyhvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGFzc2VydCghb2JqZWN0c0xheWVyLCAnVGhlIG9iamVjdHNMYXllciBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IHRpbGVNYXBPYmplY3RzID0gb2JqZWN0c0xheWVyLm9iamVjdHM7XHJcblx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZU1hcE9iamVjdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0c3dpdGNoICh0aWxlTWFwT2JqZWN0c1tpXS50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLklOVEVSQUNUSVZFX1pPTkU6XHJcblx0XHRcdFx0XHR0aGlzLnpvbmVzLnB1c2godGhpcy5hZGRJbnRlcmFjdGl2ZVpvbmUodGlsZU1hcE9iamVjdHNbaV0pKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRW50aXR5VHlwZS5URVhUOlxyXG5cdFx0XHRcdFx0dGhpcy5hZGRUZXh0KHRpbGVNYXBPYmplY3RzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGN1c3RvbSBwcm9wZXJ0eSBmcm9tIGEgdGlsZSBtYXAgb2JqZWN0XHJcblx0ICogQHBhcmFtIHsqfSB0aWxlTWFwT2JqZWN0IFRoZSB0aWxlIG1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0geyp9IHByb3BlcnR5TmFtZSBUaGUgcHJvcGVydHkgbmFtZVxyXG5cdCAqL1xyXG5cdGdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIHByb3BlcnR5TmFtZSkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXByb3BlcnR5TmFtZSwgJ1RoZSBwcm9wZXJ0eU5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRsZXQgcHJvcGVydHkgPSBudWxsO1xyXG5cdFx0aWYgKHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdFx0cHJvcGVydHkgPSB0aWxlTWFwT2JqZWN0LnByb3BlcnRpZXMuZmluZCgocHJvcGVydHkpID0+IHByb3BlcnR5Lm5hbWUgPT09IHByb3BlcnR5TmFtZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJvcGVydHk/LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGludGVyYWN0aXZlIHpvbmUgb2JqZWN0IHRvIHRoZSBnYW1lIHNjZW5lLFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0aWxlTWFwT2JqZWN0IFRoZSB0aWxlIG1hcCBvYmplY3RcclxuXHQgKi9cclxuXHRhZGRJbnRlcmFjdGl2ZVpvbmUodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCB6b25lID0gbmV3IEludGVyYWN0aXZlWm9uZShcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC5uYW1lLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LngsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueSxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC53aWR0aCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR6b25lLnNldEFjdGlvbih0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkFDVElPTikpO1xyXG5cdFx0em9uZS5zZXRDb25zdHJhaW50cyh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkNPTlNUUkFJTlRTKSk7XHJcblx0XHR6b25lLnNldENvbnN0cmFpbnRNZXNzYWdlKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQ09OU1RSQUlOVF9NRVNTQUdFKSk7XHJcblx0XHR6b25lLnNldE5hdmlnYXRlVG8odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5OQVZJR0FURV9UTykpO1xyXG5cdFx0em9uZS5zZXROYXZpZ2F0ZVRvU2NlbmUodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5OQVZJR0FURV9UT19TQ0VORSkpO1xyXG5cdFx0em9uZS5zZXRTcGF3bih0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOKSk7XHJcblx0XHR6b25lLnNldFRpbWVQZW5hbGl0eSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlRJTUVfUEVOQUxJVFkpKTtcclxuXHRcdHpvbmUuc2V0VGltZVBlbmFsaXR5TWVzc2FnZSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LlRJTUVfUEVOQUxJVFlfTUVTU0FHRSkpO1xyXG5cdFx0em9uZS5zZXRBdWRpb0NsaXBLZXkodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5BVURJT19DTElQX0tFWSkpO1xyXG5cdFx0em9uZS5zZXRDdXJzb3IoZmFsc2UpO1xyXG5cclxuXHRcdGNvbnN0IGV2ZW50cyA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuRVZFTlRTKTtcclxuXHJcblx0XHRpZiAoZXZlbnRzKSB7XHJcblx0XHRcdGNvbnN0IHsgbGlzdGVuVG8sIGVtaXQgfSA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuRVZFTlRTKTtcclxuXHJcblx0XHRcdGlmIChsaXN0ZW5Ubykge1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRzLm9uKGxpc3RlblRvLCAoKSA9PiB7XHJcblx0XHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXAsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHpvbmUuaXNEaXJ0eSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoem9uZS5uYW1lLCB6b25lKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLmRlbGV0ZSh6b25lLm5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR6b25lLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHRcdHpvbmUuZXhlY3V0ZUFjdGlvbih0aGlzLnNlbGVjdGVkSXRlbSwgdGhpcy5kaXJ0eU9iamVjdE1hcCwgKGl0ZW1Vc2VkKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtVXNlZCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkSXRlbS5zaW5nbGVVc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0/Lm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0Q3Vyc29yKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICh6b25lLmlzRGlydHkoKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHpvbmUubmFtZSwgem9uZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5kZWxldGUoem9uZS5uYW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoZW1pdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQoZW1pdCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR6b25lLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXAsIChpdGVtVXNlZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW1Vc2VkKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkSXRlbS5zaW5nbGVVc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtPy5uYW1lID09PSB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldEN1cnNvcihmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHpvbmUuaXNEaXJ0eSgpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHpvbmUubmFtZSwgem9uZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLmRlbGV0ZSh6b25lLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB6b25lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHRleHQgdG8gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gdGlsZU1hcE9iamVjdCBUaGUgdGlsZSBtYXAgb2JqZWN0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0YWRkVGV4dCh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IHsgeCwgeSwgdGV4dCB9ID0gdGlsZU1hcE9iamVjdDtcclxuXHRcdGNvbnN0IHsgY29sb3IsIGZvbnRmYW1pbHksIGhhbGlnbiwgcGl4ZWxzaXplIH0gPSB0ZXh0O1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkLnRleHQoeCwgeSwgdGV4dC50ZXh0LCB7XHJcblx0XHRcdGZvbnRGYW1pbHk6IGZvbnRmYW1pbHksXHJcblx0XHRcdGZvbnRTaXplOiBgJHtwaXhlbHNpemV9cHhgLFxyXG5cdFx0XHRmaWxsOiBjb2xvcixcclxuXHRcdFx0YWxpZ246IGhhbGlnblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTcGF3biBpdGVtIG9uIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG5cdCAqL1xyXG5cdHNwYXduSXRlbSh4LCB5LCBpdGVtKSB7XHJcblx0XHRhc3NlcnQoIXgsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCgheSwgJ1RoZSB5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFpdGVtLCAnVGhlIGl0ZW0gaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBpdGVtSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSh4LCB5LCBpdGVtLnRleHR1cmVLZXksIGl0ZW0udGV4dHVyZUZyYW1lKTtcclxuXHRcdGl0ZW1JbWFnZS5zZXRBbHBoYSgwKTtcclxuXHRcdGl0ZW1JbWFnZS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdGN1cnNvcjogJ2dyYWInXHJcblx0XHR9KTtcclxuXHRcdGl0ZW1JbWFnZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc291bmQucGxheSgnZ290LWl0ZW0tYXVkaW8nLCB7XHJcblx0XHRcdFx0dm9sdW1lOiAwLjNcclxuXHRcdFx0fSk7XHJcblx0XHRcdGl0ZW1JbWFnZS5kZXN0cm95KCk7IFxyXG5cdFx0XHRpZiAodGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNob3dJdGVtTW9kYWwodGhpcywgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS50ZXh0dXJlS2V5LCBpdGVtLnRleHR1cmVGcmFtZSwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50d2VlbnMuYWRkKHtcclxuXHRcdFx0dGFyZ2V0czogaXRlbUltYWdlLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3Bhd24gTlBDIG9uIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cclxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBucGMgVGhlIG5wYyBvYmplY3RcclxuXHQgKi9cclxuXHRzcGF3bk5QQyh4LCB5LCBucGMpIHtcclxuXHRcdGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIW5wYywgJ1RoZSBucGMgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCBucGNTcHJpdGUgPSB0aGlzLmFkZC5zcHJpdGUoeCwgeSwgbnBjLnRleHR1cmVLZXksIG5wYy50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0bnBjU3ByaXRlLnNldFNjYWxlKDIpO1xyXG5cdFx0bnBjU3ByaXRlLnNldEFscGhhKDApO1xyXG5cdFx0bnBjU3ByaXRlLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRucGNTcHJpdGUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIG5wYy5kZXNjcmlwdGlvbik7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubnBjcy5wdXNoKG5wY1Nwcml0ZSk7XHJcblx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHR0YXJnZXRzOiBucGNTcHJpdGUsXHJcblx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0ZHVyYXRpb246IDIwMFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRydWUgaWYgZ2l2ZW4gaXRlbSBuYW1lIGlzIHNlbGVjdGVkXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1OYW1lIFRoZSBpdGVtIG5hbWVcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc0l0ZW1TZWxlY3RlZChpdGVtTmFtZSkge1xyXG5cdFx0YXNzZXJ0KCFpdGVtTmFtZSwgJ1RoZSBuYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lID09PSBpdGVtTmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN0YXJ0cyB0aGUgdGltZXJcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZIb3VycyBUaGUgbnVtYmVyIG9mIGhvdXJzXHJcblx0ICovXHJcblx0c3RhcnRUaW1lcihudW1iZXJPZkhvdXJzKSB7XHJcblx0XHRhc3NlcnQoIW51bWJlck9mSG91cnMsICdUaGUgbnVtYmVyT2ZIb3VycyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuXHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKG5vdyArIG51bWJlck9mSG91cnMgKiBOVU1CRVJfT0ZfTUlOVVRFUyAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTExJU0VDT05EUykuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzVGltZUVsYXBzZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0dGhpcy50aW1lUmVtYWluaW5nID0gdGhpcy5jb3VudERvd25EYXRlIC0gbm93O1xyXG5cdFx0XHRcdGlmIChub3cgPj0gdGhpcy5jb3VudERvd25EYXRlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCB0aW1lIHBlbmFsaXR5XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpbWVQZW5hbGl0eSBUaGUgdGltZSBwZW5hbGl0eVxyXG5cdCAqL1xyXG5cdGFkZFRpbWVQZW5hbGl0eSh0aW1lUGVuYWxpdHkpIHtcclxuXHRcdHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY291bnREb3duRGF0ZSAtIHRpbWVQZW5hbGl0eSAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTExJU0VDT05EUyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgdGhlIHRpbWUgb24gdGhlIGdhbWUgc2NlbmUuXHJcblx0ICovXHJcblx0dXBkYXRlVGltZSgpIHtcclxuXHRcdGlmICh0aGlzLnRpbWVUZXh0KSB7XHJcblx0XHRcdHRoaXMudGltZVRleHQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgaG91cnNSZW1haW5pbmcgPSBNYXRoLmZsb29yKFxyXG5cdFx0XHQodGhpcy50aW1lUmVtYWluaW5nICUgKE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSU5VVEVTICogTlVNQkVSX09GX0hPVVJTKSkgL1xyXG5cdFx0XHRcdChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlOVVRFUylcclxuXHRcdCk7XHJcblx0XHRjb25zdCBtaW51dGVzUmVtYWluaW5nID0gTWF0aC5mbG9vcihcclxuXHRcdFx0KHRoaXMudGltZVJlbWFpbmluZyAlIChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlOVVRFUykpIC9cclxuXHRcdFx0XHQoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTKVxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IHNlY29uZHNSZW1haW5pbmcgPSBNYXRoLmZsb29yKCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTKSkgLyBOVU1CRVJfT0ZfTUlMTElTRUNPTkRTKTtcclxuXHRcdGlmICh0aGlzLnRpbWVSZW1haW5pbmcpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dCA9IGFkZFRleHQodGhpcywgOTE1LCA3MzAsIGAke2hvdXJzUmVtYWluaW5nfToke21pbnV0ZXNSZW1haW5pbmd9OiR7c2Vjb25kc1JlbWFpbmluZ31gLCBUZXh0U2l6ZS5TTUFMTCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgaG9vayB0aGF0IHJ1bnMgZXZlcnkgY3ljbGUuXHJcblx0ICovXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy51cGRhdGVUaW1lKCk7XHJcblx0XHRpZiAodGhpcy5pc1RpbWVFbGFwc2VkKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWVvdmVyJyk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zZWxlY3RlZEl0ZW0gJiYgIXRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0Y29uc3QgeyB4LCB5IH0gPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXI7XHJcblx0XHRcdGNvbnN0IHsgdGV4dHVyZUtleSwgdGV4dHVyZUZyYW1lIH0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbSA9IHRoaXMuYWRkLmltYWdlKHgsIHksIHRleHR1cmVLZXksIHRleHR1cmVGcmFtZSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0Y29uc3QgeyB4LCB5IH0gPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXI7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0ueCA9IHg7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0ueSA9IHk7XHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSAmJiB0aGlzLnBvaW50ZXJJdGVtKSB7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXksIFRleHRTaXplIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYWRkVGV4dCB9IGZyb20gJy4uL3V0aWxzL3RleHQtdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgZm9yIHRoZSBnYW1lIG92ZXIgc2NlbmUuXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0dWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdnYW1lb3ZlcicpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIFBoYXNlciBob29rIHJ1bnMgb25jZS5cclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmFkZC5pbWFnZSgwLCAwLCBMb2FkZXJLZXkuTUVOVV9JTUFHRSkuc2V0T3JpZ2luKDApLnNldFNjYWxlKDAuOCkuc2V0QWxwaGEoMC41KTtcclxuXHJcblx0XHRhZGRUZXh0KHRoaXMsIDQwMCwgMzAwLCAnR2FtZSBvdmVyIScsIFRleHRTaXplLkxBUkdFKTtcclxuXHRcdGFkZFRleHQoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdDUxNixcclxuXHRcdFx0NDAwLFxyXG5cdFx0XHQnQWxhcywgeW91IGZhaWxlZCB0byBlc2NhcGUgdGhlIGNhc3RsZSBpbiB0aW1lLCBhbmQgbm93IHlvdXIgc291bCBpcyBkb29tZWQgdG8gbGluZ2VyIGZvcmV2ZXIgd2l0aGluIGl0cyB3YWxscy4nLFxyXG5cdFx0XHRUZXh0U2l6ZS5SRUdVTEFSLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d29yZFdyYXA6IHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0MDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCkuc2V0T3JpZ2luKDAuNSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIGZvciB0aGUgbG9hZGluZyBzY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdsb2FkaW5nJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcmVsb2FkIFBoYXNlciBob29rIHJ1bnMgb25seSBvbmNlXHJcblx0ICovXHJcblx0cHJlbG9hZCgpIHtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLW9uZScsICdhc3NldHMvanNvbi9yb29tLW9uZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tdHdvJywgJ2Fzc2V0cy9qc29uL3Jvb20tdHdvLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS10aHJlZScsICdhc3NldHMvanNvbi9yb29tLXRocmVlLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1mb3VyJywgJ2Fzc2V0cy9qc29uL3Jvb20tZm91ci1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tZml2ZScsICdhc3NldHMvanNvbi9yb29tLWZpdmUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXNpeCcsICdhc3NldHMvanNvbi9yb29tLXNpeC1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjYXN0bGUtdGlsZXMnLCAnYXNzZXRzL2ltZy9jYXN0bGUtdGlsZXMvVGlsZXNldC5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnY3JlZXB5LXRpbGVzJywgJ2Fzc2V0cy9pbWcvdGlsZXMucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ2NvbnRhaW5lcnMnLCAnYXNzZXRzL2ltZy9jb250YWluZXIvY29udGFpbmVyLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKExvYWRlcktleS5NRU5VX0lNQUdFLCAnYXNzZXRzL2ltZy9jYXN0bGUucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2R1bmdlb24tY3Jhd2wnLCAnYXNzZXRzL2ltZy9kdW5nZW9uLWNyYXdsLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldCgndHJlYXN1cmUxJywgJ2Fzc2V0cy9pbWcvVHJlYXN1cmUgSWNvbnMvdHJlYXN1cmUxLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldCgndHJlYXN1cmUyJywgJ2Fzc2V0cy9pbWcvVHJlYXN1cmUgSWNvbnMvdHJlYXN1cmU0LnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiAzMiB9KTtcclxuXHRcdHRoaXMubG9hZC5hdWRpbygnb3Blbi1kb29yLWF1ZGlvJywgJ2Fzc2V0cy9zb3VuZHMvcXVib2R1cC1Eb29yU2V0L2ZsYWMvcXVib2R1cC1Eb29yT3BlbjAxLmZsYWMnKTtcclxuXHRcdHRoaXMubG9hZC5hdWRpbygnb3Blbi1jaGVzdC1hdWRpbycsICdhc3NldHMvc291bmRzL29wZW4tY2hlc3Qud2F2Jyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ3B1c2gtYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9zZngtcHVzaC1ib3VsZGVyLmZsYWMnKTtcclxuXHRcdHRoaXMubG9hZC5hdWRpbygnZ290LWl0ZW0tYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9JdGVtMUEud2F2Jyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ2V4cGxvc2lvbi1hdWRpbycsICdhc3NldHMvc291bmRzL3J1bWJsZS5mbGFjJyk7XHJcblx0XHR0aGlzLmxvYWQuc2NyaXB0KCd3ZWJmb250JywgJ2h0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvd2ViZm9udC8xLjYuMjYvd2ViZm9udC5qcycpO1xyXG5cdFx0dGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcclxuXHRcdFx0V2ViRm9udC5sb2FkKHtcclxuXHRcdFx0XHRnb29nbGU6IHtcclxuXHRcdFx0XHRcdGZhbWlsaWVzOiBbJ0dlcm1hbmlhIE9uZSddXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhY3RpdmU6ICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ21lbnUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5LCBUZXh0U2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGFkZFRleHQgfSBmcm9tICcuLi91dGlscy90ZXh0LXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIGZvciB0aGUgbWVudSBzY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCdtZW51Jyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgUGhhc2VyLmpzIGhvb2sgcnVucyBvbmx5IG9uY2VcclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuYWRkLmltYWdlKDAsIDAsIExvYWRlcktleS5NRU5VX0lNQUdFKS5zZXRPcmlnaW4oMCkuc2V0U2NhbGUoMC44KTtcclxuXHJcblx0XHRhZGRUZXh0KHRoaXMsIDMxMCwgMzUwLCAnRXNjYXBlIGZyb20gdGhlIGNhc3RsZScsIFRleHRTaXplLkxBUkdFKTtcclxuXHRcdGFkZFRleHQodGhpcywgNTEyLCA0NTAsICdDbGljayB0byBzdGFydCB0aGUgZ2FtZScpLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgUGhhc2VyLmpzIGhvb2sgcnVucyBldmVyeSBjeWNsZS5cclxuXHQgKi9cclxuXHR1cGRhdGUoKSB7XHJcblx0XHRpZiAodGhpcy5pbnB1dC5tYW5hZ2VyLmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoJ2dhbWUnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXksIFRleHRTaXplIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYWRkVGV4dCB9IGZyb20gJy4uL3V0aWxzL3RleHQtdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgZm9yIHRoZSB3aW5uaW5nIHNjZW5lXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ3dpbicpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIFBoYXNlci5qcyBob29rLiBSdW5zIG9ubHkgb25jZVxyXG5cdCAqL1xyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKDAsIDAsIExvYWRlcktleS5NRU5VX0lNQUdFKS5zZXRPcmlnaW4oMCkuc2V0U2NhbGUoMC44KS5zZXRBbHBoYSgwLjUpO1xyXG5cclxuXHRcdGFkZFRleHQodGhpcywgMjAwLCAzMDAsICdDb25ncmF0dWxhdGlvbnMhIFlvdeKAmXZlIGVzY2FwZWQhJywgVGV4dFNpemUuTEFSR0UpO1xyXG5cdFx0YWRkVGV4dChcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0NTE2LFxyXG5cdFx0XHQ0MjAsXHJcblx0XHRcdCdBdCBsYXN0LCBJ4oCZdmUgd29uIG15IGZyZWVkb20uIEJ1dCBhcyBJIHN0ZXAgYmV5b25kIHRoZSBjYXN0bGUgZ2F0ZXMsIHRoZSB0cnV0aCByZXR1cm5zIEkgaGFkIGFtbmVzaWEuIFRoaXMgd2FzIG15IGNhc3RsZSwgYW5kIEkgd2FzIG15IG93biBwcmlzb25lci4nLFxyXG5cdFx0XHRUZXh0U2l6ZS5SRUdVTEFSLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d29yZFdyYXA6IHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0MDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCkuc2V0T3JpZ2luKDAuNSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBJbnZhbGlkQXJndW1lbnRFcnJvciBmcm9tICcuLi9lcnJvcnMvSW52YWxpZGFBcmd1bWVudEVycm9yJztcclxuXHJcbi8qKlxyXG4gKiBBc3NlcnQgY29uZGl0aW9uIGFtZCB0aHJvdyBlcnJvciBtZXNzYWdlIGlmIGNvbmRpdGlvbiBpcyBub3QgbWV0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZGl0aW9uIFRoZSBjb25kaXRpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcblx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0dGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKG1lc3NhZ2UpO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL2Fzc2VydC11dGlscyc7XHJcbmltcG9ydCB7IGFkZFRleHQgfSBmcm9tICcuL3RleHQtdXRpbHMnO1xyXG5pbXBvcnQgeyBNb2RhbFNpemUsIFRleHRTaXplIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyBhIG1vZGFsIHdpbmRvdyB3aXRoIHRleHRcclxuICogQHBhcmFtIHtQaGFzZXIuU2NlbmV9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcclxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHRcclxuICogQHBhcmFtIHtzdHJpbmd9IHNpemUgVGhlIG1vZGFsIHNpemVcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xvc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbCB3aGVuIG1vZGFsIGlzIGNsb3NlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUZXh0TW9kYWwoc2NlbmUsIHRleHQsIHNpemUgPSBNb2RhbFNpemUuUkVHVUxBUiwgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCF0ZXh0LCAnVGhlIHRleHQgaXMgdW5kZWZpbmVkJyk7XHJcblx0Y29uc3QgYmxvY2tlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgc2NlbmUuc2NhbGUud2lkdGgsIHNjZW5lLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0Y29uc3QgbW9kYWwgPSBzY2VuZS5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRsZXQgYm94ID0gbnVsbDtcclxuXHRsZXQgY2xvc2VUZXh0ID0gbnVsbDtcclxuXHJcblx0c3dpdGNoIChzaXplKSB7XHJcblx0XHRjYXNlIE1vZGFsU2l6ZS5SRUdVTEFSOlxyXG5cdFx0XHRib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDUwMCwgMjUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdFx0XHRjbG9zZVRleHQgPSBhZGRUZXh0KHNjZW5lLCAxNjUsIC0xMTUsICdDbG9zZSBYJykuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdFx0fSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBNb2RhbFNpemUuTEFSR0U6XHJcblx0XHRcdGNsb3NlVGV4dCA9IGFkZFRleHQoc2NlbmUsIDE2NSwgLTExNSwgJ0Nsb3NlIFgnKS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ym94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA0NTAsIDM1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0ZXh0T2JqID0gYWRkVGV4dChzY2VuZSwgMCwgMCwgdGV4dCwgVGV4dFNpemUuUkVHVUxBUiwge1xyXG5cdFx0d29yZFdyYXA6IHtcclxuXHRcdFx0d2lkdGg6IDQwMFxyXG5cdFx0fVxyXG5cdH0pLnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdGFscGhhOiAxLFxyXG5cdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRkdXJhdGlvbjogMjAwXHJcblx0fSk7XHJcblx0bW9kYWwuYWRkKFtib3gsIHRleHRPYmosIGNsb3NlVGV4dF0pO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgYSBtb2RhbCB3aW5kb3cgdGhhdCB3aXRoIGFuIGltYWdlXHJcbiAqIEBwYXJhbSB7UGhhc2VyLlNjZW5lfSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZUtleSBUaGUgUGhhc2VyIGxvYWRlciBrZXkgZm9yIHRoZSBpbWFnZVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjbG9zZUNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBtb2RhbCBpcyBjbG9zZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0ltYWdlTW9kYWwoc2NlbmUsIGltYWdlS2V5LCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0YXNzZXJ0KCFzY2VuZSwgJ1RoZSBzY2VuZSBpcyB1bmRlZmluZWQnKTtcclxuXHRhc3NlcnQoIWltYWdlS2V5LCAnVGhlIGltYWdlS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0Y29uc3QgYm94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA1MDAsIDI1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRjb25zdCBpbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAwLCBpbWFnZUtleSkuc2V0T3JpZ2luKDAuNSk7XHJcblx0aW1hZ2Uuc2V0RGlzcGxheVNpemUoYm94LndpZHRoIC0gNjAsIGJveC5oZWlnaHQgLSA2MCk7XHJcblxyXG5cdGNvbnN0IGNsb3NlVGV4dCA9IGFkZFRleHQoc2NlbmUsIDE1NSwgLTE2OSwgJ0Nsb3NlIFgnKS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0fSk7XHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRzY2VuZS50d2VlbnMuYWRkKHtcclxuXHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0YWxwaGE6IDEsXHJcblx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdGR1cmF0aW9uOiAyMDBcclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkKFtib3gsIGltYWdlLCBjbG9zZVRleHRdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXlzIGEgbW9kYWwgd2luZG93IHdpdGggdGV4dCBhbmQgaXRlbSBpbmZvcm1hdGlvblxyXG4gKiBAcGFyYW0ge29iamVjdH0gc2NlbmUgVGhlIFBoYXNlciBzY2VuZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbURlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiBvZiBpdGVtXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtVGV4dHVyZSBUaGUgdGV4dHVyZSBhc3NvY2lhdGVkIHdpdGggdGhlIGl0ZW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1GcmFtZSAgVGhlIGZyYW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgaXRlbVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjbG9zZUNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBtb2RhbCBpcyBjbG9zZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93SXRlbU1vZGFsKHNjZW5lLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUsIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCghaXRlbURlc2NyaXB0aW9uLCAnVGhlIGl0ZW1EZXNjcmlwdGlvbiBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNTAwLCAyMDAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG5cdGNvbnN0IGNsb3NlVGV4dCA9IGFkZFRleHQoc2NlbmUsIDE2NSwgLTkwLCAnQ2xvc2UgWCcpLnNldEludGVyYWN0aXZlKHtcclxuXHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHR9KTtcclxuXHRjb25zdCBpdGVtSW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgLTEwLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lKTtcclxuXHRjb25zdCBpdGVtRGVzY3JpcHRpb25UZXh0ID0gYWRkVGV4dChzY2VuZSwgMCwgMzAsIGl0ZW1EZXNjcmlwdGlvbikuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG5cdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdG1vZGFsLmRlc3Ryb3koKTtcclxuXHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdGFscGhhOiAxLFxyXG5cdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRkdXJhdGlvbjogMjAwXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZChbYm94LCBpdGVtSW1hZ2UsIGl0ZW1EZXNjcmlwdGlvblRleHQsIGNsb3NlVGV4dF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vYXNzZXJ0LXV0aWxzJztcbmltcG9ydCB7IFRleHRTaXplIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBBZGQgdGV4dCB0byB0aGUgc2NlbmUuXG4gKlxuICogQHBhcmFtIHtQaGFzZXIuU2NlbmV9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaXplIFRoZSBzaXplXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZXh0KHNjZW5lLCB4LCB5LCB0ZXh0LCBzaXplID0gVGV4dFNpemUuUkVHVUxBUiwgdGV4dE9wcyA9IHt9KSB7XG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XG5cdGFzc2VydCh4ID09PSBudWxsIHx8IHggPT09IHVuZGVmaW5lZCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xuXHRhc3NlcnQoeSA9PT0gbnVsbCB8fCB5ID09PSB1bmRlZmluZWQsICdUaGUgeSBpcyB1bmRlZmluZWQnKTtcblx0YXNzZXJ0KCF0ZXh0LCAnVGhlIHRleHQgaXMgdW5kZWZpbmVkJyk7XG5cdHN3aXRjaCAoc2l6ZSkge1xuXHRcdGNhc2UgVGV4dFNpemUuTEFSR0U6XG5cdFx0XHR0ZXh0T3BzID0geyAuLi50ZXh0T3BzLCBmb250U2l6ZTogJzQ4cHgnLCBmb250RmFtaWx5OiAnR2VybWFuaWEgT25lJyB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVGV4dFNpemUuU01BTEw6XG4gICAgICAgICAgICB0ZXh0T3BzID0geyAuLi50ZXh0T3BzLCBmb250U2l6ZTogJzE4cHgnLCBmb250RmFtaWx5OiAnR2VybWFuaWEgT25lJyB9O1xuICAgICAgICAgICAgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRleHRPcHMgPSB7IC4uLnRleHRPcHMsIGZvbnRTaXplOiAnMjRweCcsIGZvbnRGYW1pbHk6ICdHZXJtYW5pYSBPbmUnIH07XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gc2NlbmUuYWRkLnRleHQoeCwgeSwgdGV4dCwgdGV4dE9wcyk7XG59XG4iLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiLi9hc3NlcnQtdXRpbHNcIjtcclxuaW1wb3J0IHsgVGlsZW1hcExheWVyLCBEaXJlY3Rpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgdGlsZXMgYmFzZWQgb24gdGhlIHdvcmxkIGNvb3JkaW5hdGVzLCB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXIgXHJcbiAqIEByZXR1cm5zIHtBcnJheX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGlsZU1hcCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbGF5ZXIgPSBUaWxlbWFwTGF5ZXIuRk9SRUdST1VORCkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXgsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCgheSwgJ1RoZSB5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF3aWR0aCwgJ1RoZSB3aWR0aCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghaGVpZ2h0LCAnVGhlIGhlaWdodCBpcyB1bmRlZmluZWQnKTtcclxuICAgIHJldHVybiB0aWxlTWFwLmdldFRpbGVzV2l0aGluV29ybGRYWShcclxuICAgICAgICB4LFxyXG4gICAgICAgIHksXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNOb3RFbXB0eTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBsYXllclxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aWxlcyBmcm9tIFRpbGVtYXBcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGlsZXModGlsZU1hcCwgdGlsZXMpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRpbGVNYXAucmVtb3ZlVGlsZUF0KHRpbGVzW2ldLngsIHRpbGVzW2ldLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVwbGFjZSBnaXZlbiB0aWxlcyB3aXRoIG5ldyB0aWxlcyBcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gb2xkVGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IG5ld1RpbGVzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUaWxlcyh0aWxlTWFwLCBvbGRUaWxlcywgbmV3VGlsZXMpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCFvbGRUaWxlcywgJ1RoZSBvbGRUaWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghbmV3VGlsZXMsICdUaGUgbmV3VGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gb2xkVGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAobmV3VGlsZXNbaV0pIHtcclxuICAgICAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQobmV3VGlsZXNbaV0sIG9sZFRpbGVzW2ldLngsIG9sZFRpbGVzW2ldLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vdmUgdGlsZXMgb24gdGhlIFRpbGVtYXAgYSBmb3IgZ2l2ZW4gZGlyZWN0aW9uIGFuZCB2ZWxvY2l0eVxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlcyh0aWxlTWFwLCB0aWxlcywgZGlyZWN0aW9uLCB2ZWxvY2l0eSkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCFkaXJlY3Rpb24sICdUaGUgZGlyZWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuICAgICAgICAgICAgbW92ZVRpbGVzTGVmdCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICAgICAgbW92ZVRpbGVzUmlnaHQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XHJcbiAgICAgICAgICAgIG1vdmVUaWxlc1VwKHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLkRPV046XHJcbiAgICAgICAgICAgIG1vdmVUaWxlRG93bih0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vdmUgdGlsZXMgdG8gdGhlIGxlZnQgb24gdGhlIFRpbGVtYXAgZm9yIGEgZ2l2ZW4gdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlc0xlZnQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLnggLSB2ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb3ZlIHRpbGVzIHRvIHRoZSByaWdodCBvbiB0aGUgVGlsZW1hcCBmb3IgYSBmb3IgZ2l2ZW4gdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlc1JpZ2h0KHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54ICsgdmVsb2NpdHksIHRpbGVzW2ldLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW92ZSB0aWxlcyB1cCBvbiB0aGUgVGlsZW1hcCBmb3IgYSBnaXZlbiB2ZWxvY2l0eVxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICogQHBhcmFtIHtBcnJheX0gdmVsb2NpdHkgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRpbGVzVXAodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkgLSB2ZWxvY2l0eSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb3ZlIHRpbGVzIGRvd24gb24gdGhlIFRpbGVtYXAgZm9yIGEgZ2l2ZW4gdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlRG93bih0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSArIHZlbG9jaXR5KTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV90aGVfY2FzdGxlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2VzY2FwZV9mcm9tX3RoZV9jYXN0bGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9