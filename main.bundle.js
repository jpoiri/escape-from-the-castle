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
		this.load.audio('open-door-audio', 'assets/sounds/creaky-door-hinge.wav');
		this.load.audio('open-chest-audio', 'assets/sounds/open-chest.wav');
		this.load.audio('push-audio', 'assets/sounds/sfx-push-boulder.flac');
		this.load.audio('got-item-audio', 'assets/sounds/Item1A.wav');
		this.load.audio('explosion-audio', 'assets/sounds/rumble.flac');
		this.load.audio('wood-impact-audio', 'assets/sounds/wood_impact/crack01.mp3.flac');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySzBCO0FBQzhDO0FBQzNCO0FBQ3NEO0FBQ2hDO0FBQ3JFO0FBQ0E7QUFD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LElBQUkscURBQU07QUFDVix3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7Ozs7OztVQ3BKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvZW50aXRpZXMvSW50ZXJhY3RpdmVab25lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvZXJyb3JzL0ludmFsaWRhQXJndW1lbnRFcnJvci5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvc2NlbmVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9zY2VuZXMvR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9zY2VuZXMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3NjZW5lcy9NZW51LmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvc2NlbmVzL1dpbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3V0aWxzL2Fzc2VydC11dGlscy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3V0aWxzL21vZGFsLXV0aWxzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvdXRpbHMvdGV4dC11dGlscy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3V0aWxzL3RpbGVtYXAtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEN1c3RvbVByb3BlcnR5ID0ge1xyXG5cdENPTUJJTkFUSU9OOiAnY29tYmluYXRpb24nLFxyXG5cdFBST01QVF9NRVNTQUdFOiAncHJvbXB0TWVzc2FnZScsXHJcblx0U1BBV046ICdzcGF3bicsXHJcblx0U1BBV05fSVRFTTogJ3NwYXduSXRlbScsXHJcblx0TE9DS0VEOiAnbG9ja2VkJyxcclxuXHRMT0NLRURfTUVTU0FHRTogJ2xvY2tlZE1lc3NhZ2UnLFxyXG5cdEFDVElPTjogJ2FjdGlvbicsXHJcblx0Q09OU1RSQUlOVFM6ICdjb25zdHJhaW50cycsXHJcblx0TkFWSUdBVEVfVE86ICduYXZpZ2F0ZVRvJyxcclxuXHROQVZJR0FURV9UT19TQ0VORTogJ25hdmlnYXRlVG9TY2VuZScsXHJcblx0Q09OU1RSQUlOVF9NRVNTQUdFOiAnY29uc3RyYWludE1lc3NhZ2UnLFxyXG5cdEVWRU5UUzogJ2V2ZW50cycsXHJcblx0U0NSRUVOX1RFWFQ6ICdzY3JlZW5UZXh0JyxcclxuXHRNT0RBTF9TSVpFOiAnbW9kYWxTaXplJyxcclxuXHRUSU1FX1BFTkFMSVRZOiAndGltZVBlbmFsaXR5JyxcclxuXHRUSU1FX1BFTkFMSVRZX01FU1NBR0U6ICd0aW1lUGVuYWxpdHlNZXNzYWdlJyxcclxuXHRBVURJT19DTElQX0tFWTogJ2F1ZGlvQ2xpcEtleSdcclxufTtcclxuXHJcbmNvbnN0IEFjdGlvblR5cGUgPSB7XHJcblx0TU9WRV9USUxFOiAnTU9WRV9USUxFJyxcclxuXHRUT0dHTEVfVElMRV9NT1ZFTUVOVDogJ1RPR0dMRV9USUxFX01PVkVNRU5UJyxcclxuXHRERVNUUk9ZX1RJTEU6ICdERVNUUk9ZX1RJTEUnLFxyXG5cdFJFUExBQ0VfVElMRTogJ1JFUExBQ0VfVElMRScsXHJcblx0VE9HR0xFX1RJTEU6ICdUT0dHTEVfVElMRScsXHJcblx0U0hPV19URVhUOiAnU0hPV19URVhUJyxcclxuXHRTSE9XX0lNQUdFOiAnU0hPV19JTUFHRScsXHJcblx0REVTVFJPWTogJ0RFU1RST1knLFxyXG5cdFRVUk5fT05fTElHSFQ6ICdUVVJOX09OX0xJR0hUJyxcclxuXHRUVVJOX09GRl9MSUdIVDogJ1RVUk5fT0ZGX0xJR0hUJ1xyXG59O1xyXG5cclxuY29uc3QgU3Bhd25UeXBlID0ge1xyXG5cdElURU06ICdJVEVNJyxcclxuXHROUEM6ICdOUEMnXHJcbn07XHJcblxyXG5jb25zdCBEaXJlY3Rpb24gPSB7XHJcblx0TEVGVDogJ0xFRlQnLFxyXG5cdFJJR0hUOiAnUklHSFQnLFxyXG5cdFVQOiAnVVAnLFxyXG5cdERPV046ICdET1dOJ1xyXG59O1xyXG5cclxuY29uc3QgUm90YXRpb24gPSB7XHJcblx0Uk9UQVRFXzkwOiAnOTAnLFxyXG5cdFJPVEFURV8xODA6ICcxODAnLFxyXG5cdFJPVEFURV8yNzA6ICcyNzAnXHJcbn07XHJcblxyXG5jb25zdCBNb2RhbFNpemUgPSB7XHJcblx0UkVHVUxBUjogJ1JFR1VMQVInLFxyXG5cdExBUkdFOiAnTEFSR0UnXHJcbn07XHJcblxyXG5jb25zdCBUZXh0U2l6ZSA9IHtcclxuXHRSRUdVTEFSOiAnUkVHVUxBUicsXHJcblx0TEFSR0U6ICdMQVJHRScsXHJcblx0U01BTEw6ICdTTUFMTCdcclxufTtcclxuXHJcbmNvbnN0IFRpbGVtYXBMYXllciA9IHtcclxuXHRCQUNLR1JPVU5EOiAnYmFja2dyb3VuZCcsXHJcblx0Rk9SRUdST1VORDogJ2ZvcmVncm91bmQnLFxyXG5cdE9CSkVDVFM6ICdvYmplY3RzJ1xyXG59O1xyXG5cclxuY29uc3QgRW50aXR5VHlwZSA9IHtcclxuXHRET09SOiAnRG9vcicsXHJcblx0U0FGRTogJ1NhZmUnLFxyXG5cdENIRVNUOiAnQ2hlc3QnLFxyXG5cdFRFWFQ6ICdUZXh0JyxcclxuXHRJTlRFUkFDVElWRV9aT05FOiAnSW50ZXJhY3RpdmVab25lJ1xyXG59O1xyXG5cclxuY29uc3QgTG9hZGVyS2V5ID0ge1xyXG5cdFRJTEVNQVA6ICd0aWxlbWFwJyxcclxuXHRUSUxFU0VUOiAndGlsZXMnLFxyXG5cdElURU1TOiAnaXRlbXMnLFxyXG5cdFVJOiAndWknLFxyXG5cdENIRVNUOiAnY2hlc3QnLFxyXG5cdERPT1I6ICdkb29yJyxcclxuXHRTQUZFOiAnc2FmZScsXHJcblx0TUVOVV9JTUFHRTogJ21lbnUtaW1hZ2UnXHJcbn07XHJcblxyXG5jb25zdCBUaWxlID0ge1xyXG5cdFNJR046IDE0NCxcclxuXHRDTE9TRV9XSU5ET1c6IDI1OCxcclxuXHRPUEVOX1dJTkRPVzogMjM1LFxyXG5cdENPRkZJTjogWzcxLCA5NV0sXHJcblx0REVTVFJPWUVEX0tOSUdIVDogOTYsXHJcblx0VE9QX0NIQUlSOiAzMTIsXHJcblx0TUlERExFX0NIQUlSOiAzMzYsXHJcblx0Qk9UVE9NX0NIQUlSOiAzNjAsXHJcblx0SE9MRV9JTl9XQUxMOiAyNDksXHJcblx0VE9QX0xFRlRfR0FSR09ZTEU6IDIzMixcclxuXHRUT1BfUklHSFRfR0FSR09ZTEU6IDIzMyxcclxuXHRCT1RUT01fTEVGVF9HQVJHT1lMRTogMjU2LFxyXG5cdEJPVFRPTV9SSUdIVF9HQVJHT1lMRTogMjU3LFxyXG5cdFRPUF9MRUZUX1dBVEVSOiAxMCxcclxuXHRUT1BfQ0VOVEVSX1dBVEVSOiAxMSxcclxuXHRUT1BfUklHSFRfV0FURVI6IDEyLFxyXG5cdE1JRERMRV9MRUZUX1dBVEVSOiAzNCxcclxuXHRNSURETEVfQ0VOVEVSX1dBVEVSOiAzNSxcclxuXHRNSURETEVfUklHSFRfV0FURVI6IDM2LFxyXG5cdEJPVFRPTV9MRUZUX1dBVEVSOiA1OCxcclxuXHRCT1RUT01fQ0VOVEVSX1dBVEVSOiA1OSxcclxuXHRCT1RUT01fUklHSFRfV0FURVI6IDYwLFxyXG5cdERJR0dFRF9IT0xFOiAzMTYsXHJcblx0U1RBSVI6IDEyNFxyXG59O1xyXG5cclxuY29uc3QgSXRlbSA9IHtcclxuXHRCT09LOiAnYm9vaycsXHJcblx0SEFNTUVSOiAnaGFtbWVyJyxcclxuXHRQSUNLQVhFOiAncGlja2F4ZScsXHJcblx0S0VZOiAna2V5JyxcclxuXHRNQVNURVJfS0VZOiAnbWFzdGVyLWtleScsXHJcblx0SUNFX1JPRDogJ2ljZS1yb2QnLFxyXG5cdFBPVElPTjogJ3BvdGlvbicsXHJcblx0U0hPVkVMOiAnc2hvdmVsJyxcclxuXHRSSU5HOiAncmluZydcclxufTtcclxuXHJcbmNvbnN0IEFuaW1hdGlvbiA9IHtcclxuXHRET09SX09QRU46ICdkb29yLW9wZW4nLFxyXG5cdFNBRkVfT1BFTjogJ3NhZmUtb3BlbicsXHJcblx0Q0hFU1RfT1BFTjogJ2NoZXN0LW9wZW4nXHJcbn07XHJcblxyXG5jb25zdCBGcmFtZSA9IHtcclxuXHRNQVNURVJfS0VZOiA1MSxcclxuXHRQSUNLQVhFOiA4MyxcclxuXHRQT1RJT046IDYxLFxyXG5cdEtFWTogNTAsXHJcblx0UklORzogMTNcclxufTtcclxuXHJcbk9iamVjdC5mcmVlemUoVGlsZW1hcExheWVyKTtcclxuT2JqZWN0LmZyZWV6ZShDdXN0b21Qcm9wZXJ0eSk7XHJcbk9iamVjdC5mcmVlemUoTG9hZGVyS2V5KTtcclxuT2JqZWN0LmZyZWV6ZShFbnRpdHlUeXBlKTtcclxuT2JqZWN0LmZyZWV6ZShUaWxlKTtcclxuT2JqZWN0LmZyZWV6ZShJdGVtKTtcclxuT2JqZWN0LmZyZWV6ZShBbmltYXRpb24pO1xyXG5PYmplY3QuZnJlZXplKEZyYW1lKTtcclxuT2JqZWN0LmZyZWV6ZShEaXJlY3Rpb24pO1xyXG5PYmplY3QuZnJlZXplKEFjdGlvblR5cGUpO1xyXG5cclxuZXhwb3J0IHtcclxuXHRUaWxlbWFwTGF5ZXIsXHJcblx0Q3VzdG9tUHJvcGVydHksXHJcblx0TG9hZGVyS2V5LFxyXG5cdEVudGl0eVR5cGUsXHJcblx0VGlsZSxcclxuXHRJdGVtLFxyXG5cdEFuaW1hdGlvbixcclxuXHRGcmFtZSxcclxuXHRBY3Rpb25UeXBlLFxyXG5cdERpcmVjdGlvbixcclxuXHRTcGF3blR5cGUsXHJcblx0TW9kYWxTaXplLFxyXG5cdFRleHRTaXplXHJcbn07XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgRGlyZWN0aW9uLCBTcGF3blR5cGUsIFJvdGF0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi4vdXRpbHMvYXNzZXJ0LXV0aWxzJztcclxuaW1wb3J0IHsgZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZLCByZW1vdmVUaWxlcywgcmVwbGFjZVRpbGVzLCBtb3ZlVGlsZXMgfSBmcm9tICcuLi91dGlscy90aWxlbWFwLXV0aWxzJztcclxuaW1wb3J0IHsgc2hvd0ltYWdlTW9kYWwsIHNob3dUZXh0TW9kYWwgfSBmcm9tICcuLi91dGlscy9tb2RhbC11dGlscyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGFuIEludGVyYWN0aW9uWm9uZSBpbiB0aGUgZXNjYXBlIHJvb21cclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMjVcclxuICogQGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RpdmVab25lIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XHJcblx0YWN0aW9uID0gbnVsbDtcclxuXHRjb25zdHJhaW50cyA9IG51bGw7XHJcblx0c3Bhd24gPSBudWxsO1xyXG5cdG5hdmlnYXRlVG8gPSBudWxsO1xyXG5cdG5hdmlnYXRlVG9TY2VuZSA9IG51bGw7XHJcblx0Y29uc3RyYWludE1lc3NhZ2UgPSBudWxsO1xyXG5cdHRpbWVQZW5hbGl0eSA9IDA7XHJcblx0dGltZVBlbmFsaXR5TWVzc2FnZSA9IG51bGw7XHJcblx0YXVkaW9DbGlwS2V5O1xyXG5cdGRpcnR5ID0gZmFsc2U7XHJcblx0bmFtZSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuU2NlbmV9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBhc3NvY2lhdGVkIHdpdGggdGhpcyB6b25lXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHpvbmUgeCBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHpvbmUgeSBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFRoZSB6b25lIHdpZHRoXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgem9uZSBoZWlnaHRcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSwgbmFtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuc2V0T3JpZ2luKDAsIDApO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRXhlY3V0ZSB0aGUgYWN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIHVzZWQgb24gdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge01hcH0gZGlydHlPYmplY3RNYXAgVGhlIG1hcCBvZiBkaXJ0eSBvYmplY3RzXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZUNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYWN0aW9uIGlzIGNvbXBsZXRlZC5cclxuXHQgKi9cclxuXHRleGVjdXRlQWN0aW9uKGl0ZW0sIGRpcnR5T2JqZWN0TWFwLCBvbkNvbXBsZXRlQ2FsbGJhY2spIHtcclxuXHRcdGxldCBpdGVtVXNlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRpbGVzID0gbnVsbDtcclxuXHRcdGlmICghdGhpcy5jYW5FeGVjdXRlKGl0ZW0sIGRpcnR5T2JqZWN0TWFwKSkge1xyXG5cdFx0XHRpZiAodGhpcy5jb25zdHJhaW50TWVzc2FnZSkge1xyXG5cdFx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGhpcy5jb25zdHJhaW50TWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB7IHR5cGUsIHZlbG9jaXR5LCBuZXdUaWxlcywgZGlyZWN0aW9uLCB0ZXh0LCB0ZXh0dXJlS2V5LCByZXBlYXQsIGFscGhhIH0gPSB0aGlzLmFjdGlvbjtcclxuXHJcblx0XHRcdG5ld1RpbGVzID0gbmV3VGlsZXM/LnNwbGl0KCcsJykubWFwKChzKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHMsIDEwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuUkVQTEFDRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0cmVwbGFjZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIG5ld1RpbGVzKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRPR0dMRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmRpcnR5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJldmlvdXNUaWxlcyA9IHRpbGVzLm1hcCgodCkgPT4gdC5pbmRleCk7XHJcblx0XHRcdFx0XHRcdHJlcGxhY2VUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCBuZXdUaWxlcyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVwbGFjZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIHRoaXMucHJldmlvdXNUaWxlcyk7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJldmlvdXNUaWxlcyA9IG51bGw7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5ERVNUUk9ZX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRyZW1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLk1PVkVfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdHJlbW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMpO1xyXG5cdFx0XHRcdFx0bW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlKGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuVE9HR0xFX1RJTEVfTU9WRU1FTlQ6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZGlydHkpIHtcclxuXHRcdFx0XHRcdFx0cmVtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcyk7XHJcblx0XHRcdFx0XHRcdG1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCBkaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlKGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IG1vdmVkVGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRyZW1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIG1vdmVkVGlsZXMpO1xyXG5cdFx0XHRcdFx0XHRtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgdGhpcy5yZXZlcnNlRGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdHRoaXMubW92ZSh0aGlzLnJldmVyc2VEaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlNIT1dfVEVYVDpcclxuXHRcdFx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGV4dCk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5TSE9XX0lNQUdFOlxyXG5cdFx0XHRcdFx0c2hvd0ltYWdlTW9kYWwodGhpcy5zY2VuZSwgdGV4dHVyZUtleSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5ERVNUUk9ZOiB7XHJcblx0XHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UVVJOX09OX0xJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnR1cm5PbkxpZ2h0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRVUk5fT0ZGX0xJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnR1cm5PZmZMaWdodCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnNwYXduKSB7XHJcblx0XHRcdFx0dGhpcy5zcGF3bk9iamVjdCh0aGlzLnNwYXduLCB0eXBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5uYXZpZ2F0ZVRvKSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5jaGFuZ2VSb29tKHRoaXMubmF2aWdhdGVUbyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMubmF2aWdhdGVUb1NjZW5lKSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5zY2VuZS5zdGFydCh0aGlzLm5hdmlnYXRlVG9TY2VuZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMudGltZVBlbmFsaXR5KSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5hZGRUaW1lUGVuYWxpdHkodGhpcy50aW1lUGVuYWxpdHkpO1xyXG5cdFx0XHRcdGlmICh0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGhpcy50aW1lUGVuYWxpdHlNZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuYXVkaW9DbGlwS2V5KSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5zb3VuZC5wbGF5KHRoaXMuYXVkaW9DbGlwS2V5KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAob25Db21wbGV0ZUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0b25Db21wbGV0ZUNhbGxiYWNrKHRoaXMuaXNJdGVtVXNlZChpdGVtKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFyZXBlYXQgJiYgdGhpcy5hY3RpdmUpIHtcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3Bhd24gYSBpdGVtIG9yIE5QQ1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzcGF3biBUaGUgc3Bhd24gb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25UeXBlIFRoZSBhY3Rpb24gdHlwZVxyXG5cdCAqL1xyXG5cdHNwYXduT2JqZWN0KHNwYXduLCBhY3Rpb25UeXBlKSB7XHJcblx0XHRhc3NlcnQoIXNwYXduLCAnVGhlIHNwYXduIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0c3dpdGNoIChzcGF3bi50eXBlKSB7XHJcblx0XHRcdGNhc2UgU3Bhd25UeXBlLk5QQzpcclxuXHRcdFx0XHRpZiAoYWN0aW9uVHlwZSA9PT0gKEFjdGlvblR5cGUuUkVQTEFDRV9USUxFIHx8IEFjdGlvblR5cGUuVE9HR0xFX1RJTEUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduTlBDKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyA1MCwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25OUEModGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFNwYXduVHlwZS5JVEVNOlxyXG5cdFx0XHRcdGlmIChhY3Rpb25UeXBlID09PSAoQWN0aW9uVHlwZS5SRVBMQUNFX1RJTEUgfHwgQWN0aW9uVHlwZS5UT0dHTEVfVElMRSkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25JdGVtKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyA1MCwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25JdGVtKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIsIHRoaXMuc3Bhd24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0cnVlIGlmIHRoZSBpdGVtIHdhcyB1c2VkLCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGlzSXRlbVVzZWQoaXRlbSkge1xyXG5cdFx0aWYgKHRoaXMuY29uc3RyYWludHMgJiYgaXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IGl0ZW1SZXF1aXJlZCB9ID0gdGhpcy5jb25zdHJhaW50cztcclxuXHRcdFx0aWYgKGl0ZW1SZXF1aXJlZCAmJiBpdGVtPy5uYW1lID09PSBpdGVtUmVxdWlyZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTW92ZSB6b25lIGZvciBnaXZlbiBkaXJlY3Rpb24gYW5kIHZlbG9jaXR5XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRvIG1vdmUgdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgVGhlIHZlbG9jaXR5IHRvIG1vdmUgdGhlIHpvbmVcclxuXHQgKi9cclxuXHRtb3ZlKGRpcmVjdGlvbiwgdmVsb2NpdHkpIHtcclxuXHRcdGFzc2VydCghZGlyZWN0aW9uLCAnVGhlIGRpcmVjdGlvbiBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG5cdFx0XHRcdHRoaXMueCA9IHRoaXMueCAtIHRoaXMud2lkdGggLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUklHSFQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG5cdFx0XHRcdHRoaXMueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyB2ZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uTEVGVDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEaXJlY3Rpb24uVVA6XHJcblx0XHRcdFx0dGhpcy55ID0gdGhpcy55IC0gdGhpcy5oZWlnaHQgLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uRE9XTjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuXHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5VUDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBjdXJzb3IgZm9yIHpvbmVcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSXRlbVNlbGVjdGVkXHJcblx0ICovXHJcblx0c2V0Q3Vyc29yKGlzSXRlbVNlbGVjdGVkKSB7XHJcblx0XHRpZiAoaXNJdGVtU2VsZWN0ZWQgJiYgdGhpcy5pbnB1dCkge1xyXG5cdFx0XHR0aGlzLmlucHV0LmN1cnNvciA9ICdncmFiYmluZyc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuaW5wdXQpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWN0aW9uPy50eXBlID09PSBBY3Rpb25UeXBlLlNIT1dfVEVYVCB8fCB0aGlzLmFjdGlvbj8udHlwZSA9PT0gQWN0aW9uVHlwZS5TSE9XX0lNQUdFKSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dC5jdXJzb3IgPSAnem9vbS1pbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dC5jdXJzb3IgPSAncG9pbnRlcic7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGFjdGlvbiBjYW4gYmUgZXhlY3V0ZWRcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSB1c2Ugd2l0aCB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7TWFwfSBkaXJ0eU9iamVjdE1hcCBUaGUgZGlydHkgb2JqZWN0IG1hcFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGNhbkV4ZWN1dGUoaXRlbSwgZGlydHlPYmplY3RNYXApIHtcclxuXHRcdGlmICh0aGlzLmNvbnN0cmFpbnRzKSB7XHJcblx0XHRcdGNvbnN0IHsgaXRlbVJlcXVpcmVkLCBwcm9tcHRSZXF1aXJlZCwgZGVwZW5kc09uIH0gPSB0aGlzLmNvbnN0cmFpbnRzO1xyXG5cdFx0XHRpZiAoaXRlbVJlcXVpcmVkICYmIGl0ZW0/Lm5hbWUgIT09IGl0ZW1SZXF1aXJlZCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmIChwcm9tcHRSZXF1aXJlZCkge1xyXG5cdFx0XHRcdGNvbnN0IGFuc3dlciA9IHdpbmRvdy5wcm9tcHQocHJvbXB0UmVxdWlyZWQucXVlc3Rpb24pO1xyXG5cdFx0XHRcdGlmIChhbnN3ZXIgJiYgYW5zd2VyLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByb21wdFJlcXVpcmVkLmFuc3dlci50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRlcGVuZHNPbikge1xyXG5cdFx0XHRcdGxldCB2YWxpZCA9IHRydWU7XHJcblx0XHRcdFx0ZGVwZW5kc09uPy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcclxuXHRcdFx0XHRcdGlmICghZGlydHlPYmplY3RNYXAuaGFzKG5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKCF2YWxpZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBuYW1lXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIG5hbWVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZVxyXG5cdCAqL1xyXG5cdHNldE5hbWUobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB6b25lIGlzIGRpcnR5XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNEaXJ0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmRpcnR5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHdoZXRoZXIgdGhlIHpvbmUgaXMgZGlydHlcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGRpcnR5IFdoZXRoZXIgem9uZSBpcyBkaXJ0eVxyXG5cdCAqL1xyXG5cdHNldERpcnR5KGRpcnR5KSB7XHJcblx0XHR0aGlzLmRpcnR5ID0gZGlydHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBhY3Rpb24gb2JqZWN0XHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBUaGUgYWN0aW9uIG9iamVjdFxyXG5cdCAqL1xyXG5cdHNldEFjdGlvbihhY3Rpb24pIHtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgYWN0aW9uIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2V0QWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgY29uc3RyYWludHMgb2JqZWN0XHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnN0cmFpbnRzIFRoZSBjb25zdHJhaW50IG9iamVjdFxyXG5cdCAqL1xyXG5cdHNldENvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XHJcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBjb25zdHJhaW50cyBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdGdldENvbnN0cmFpbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludHM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBzcGF3biBvYmplY3RcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gc3Bhd24gVGhlIHNwYXduIG9iamVjdFxyXG5cdCAqL1xyXG5cdHNldFNwYXduKHNwYXduKSB7XHJcblx0XHR0aGlzLnNwYXduID0gc3Bhd247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBzcGF3biBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdGdldFNwYXduKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3Bhd247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSByb29tIHdoZXJlIHRvIG5hdmlnYXRlIG5leHRcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmF2aWdhdGVUbyBUaGUgcm9vbSB3aGVyZSB0byBuYXZpZ2F0ZSBuZXh0XHJcblx0ICovXHJcblx0c2V0TmF2aWdhdGVUbyhuYXZpZ2F0ZVRvKSB7XHJcblx0XHR0aGlzLm5hdmlnYXRlVG8gPSBuYXZpZ2F0ZVRvO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgcm9vbSB3aGVyZSB0byBuYXZpZ2F0ZSBuZXh0XHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXROYXZpZ2F0ZVRvKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2aWdhdGVUbztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIG5hdmlnYXRlVG9TY2VuZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYXZpZ2F0ZVRvU2NlbmVcclxuXHQgKi9cclxuXHRzZXROYXZpZ2F0ZVRvU2NlbmUobmF2aWdhdGVUb1NjZW5lKSB7XHJcblx0XHR0aGlzLm5hdmlnYXRlVG9TY2VuZSA9IG5hdmlnYXRlVG9TY2VuZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIG5hdmlnYXRlVG9TY2VuZVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0TmF2aWdhdGVUb1NjZW5lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2aWdhdGVUb1NjZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgY29uc3RyYWludCBtZXNzYWdlXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnN0cmFpbnRNZXNzYWdlIFRoZSBjb25zdHJhaW50IG1lc3NhZ2VcclxuXHQgKi9cclxuXHRzZXRDb25zdHJhaW50TWVzc2FnZShjb25zdHJhaW50TWVzc2FnZSkge1xyXG5cdFx0dGhpcy5jb25zdHJhaW50TWVzc2FnZSA9IGNvbnN0cmFpbnRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY29uc3RyYWludCBtZXNzYWdlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRDb25zdHJhaW50TWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgdGltZSBwZW5hbGl0eVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lUGVuYWxpdHkgVGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKi9cclxuXHRzZXRUaW1lUGVuYWxpdHkodGltZVBlbmFsaXR5KSB7XHJcblx0XHR0aGlzLnRpbWVQZW5hbGl0eSA9IHRpbWVQZW5hbGl0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGdldFRpbWVQZW5hbGl0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRpbWVQZW5hbGl0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHRpbWUgcGVuYWxpdHkgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lUGVuYWxpdHlNZXNzYWdlIFRoZSB0aW1lIHBlbmFsaXR5IG1lc3NzYWdlXHJcblx0ICovXHJcblx0c2V0VGltZVBlbmFsaXR5TWVzc2FnZSh0aW1lUGVuYWxpdHlNZXNzYWdlKSB7XHJcblx0XHR0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2UgPSB0aW1lUGVuYWxpdHlNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdGltZSBwZW5hbGl0eSBtZXNzYWdlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRUaW1lUGVuYWxpdHlNZXNzYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGltZVBlbmFsaXR5TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGF1ZGlvIGNsaXAga2V5XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGF1ZGlvQ2xpcEtleSBUaGUgYXVkaW8gY2xpcCBrZXlcclxuXHQgKi9cclxuXHRzZXRBdWRpb0NsaXBLZXkoYXVkaW9DbGlwS2V5KSB7XHJcblx0XHR0aGlzLmF1ZGlvQ2xpcEtleSA9IGF1ZGlvQ2xpcEtleTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGF1ZGlvIGNsaXAga2V5XHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRBdWRpb0NsaXBLZXkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hdWRpb0NsaXBLZXk7XHJcblx0fVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYW4gaW52YWxpZCBhcmd1bWVudCBlcnJvclxyXG4gKiBAZXh0ZW5kcyBFcnJvclxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZSBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdJbnZhbGlkQXJndW1lbnRFcnJvcidcclxuICAgIH1cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL3NjZW5lcy9HYW1lJztcclxuaW1wb3J0IEdhbWVPdmVyU2NlbmUgIGZyb20gJy4vc2NlbmVzL0dhbWVPdmVyJztcclxuaW1wb3J0IFdpblNjZW5lIGZyb20gJy4vc2NlbmVzL1dpbic7XHJcbmltcG9ydCBTcGxhc2hTY2VuZSBmcm9tICcuL3NjZW5lcy9NZW51JztcclxuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tICcuL3NjZW5lcy9Mb2FkaW5nJztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHR0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHRzY2FsZToge1xyXG5cdFx0bW9kZTogUGhhc2VyLlNjYWxlLkZJVCxcclxuICAgICAgICBhdXRvQ2VudGVyOiBQaGFzZXIuU2NhbGUuQ0VOVEVSX0JPVEgsXHJcblx0XHR3aWR0aDogMTAyNCxcclxuXHRcdGhlaWdodDogNzY4XHJcblx0fSxcclxuXHRwaHlzaWNzOiB7XHJcblx0XHRkZWZhdWx0OiAnYXJjYWRlJyxcclxuXHRcdGFyY2FkZToge1xyXG5cdFx0XHRkZWJ1ZzogdHJ1ZSxcclxuXHRcdFx0Z3Jhdml0eTogeyB5OiAyMDAgfVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2NlbmU6IFtMb2FkaW5nU2NlbmUsIFNwbGFzaFNjZW5lLCBHYW1lU2NlbmUsIEdhbWVPdmVyU2NlbmUsIFdpblNjZW5lXVxyXG59O1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBJbnRlcmFjdGl2ZVpvbmUgZnJvbSAnLi4vZW50aXRpZXMvSW50ZXJhY3RpdmVab25lJztcclxuaW1wb3J0IHsgc2hvd1RleHRNb2RhbCwgc2hvd0l0ZW1Nb2RhbCB9IGZyb20gJy4uL3V0aWxzL21vZGFsLXV0aWxzJztcclxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi4vdXRpbHMvYXNzZXJ0LXV0aWxzJztcclxuaW1wb3J0IHsgYWRkVGV4dCB9IGZyb20gJy4uL3V0aWxzL3RleHQtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUHJvcGVydHksIFRpbGVtYXBMYXllciwgRW50aXR5VHlwZSwgVGV4dFNpemUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgVFJBTlNJVElPTl9ERUxBWSA9IDUwMDtcclxuY29uc3QgTlVNQkVSX09GX01JTlVURVMgPSA2MDtcclxuY29uc3QgTlVNQkVSX09GX1NFQ09ORFMgPSA2MDtcclxuY29uc3QgTlVNQkVSX09GX0hPVVJTID0gMjQ7XHJcbmNvbnN0IE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgPSAxMDAwO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgdGhlIGdhbWUgc2NlbmUuXHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHR0aWxlTWFwID0gbnVsbDtcclxuXHR6b25lcyA9IFtdO1xyXG5cdGl0ZW1zID0gW107XHJcblx0bnBjcyA9IFtdO1xyXG5cdHRleHRzID0gW107XHJcblx0aXRlbUltYWdlcyA9IFtdO1xyXG5cdHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0c2VsZWN0ZWRSZWN0YW5nbGUgPSBudWxsO1xyXG5cdHJvb21OYW1lID0gbnVsbDtcclxuXHRkaXJ0eU9iamVjdE1hcCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignZ2FtZScpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGhvb2sgdGhhdCBpcyBydW4gb25jZSB3aGVuIHRoZSBzY2VuZSBzdGFydHNcclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmFkZFJvb21PdmVybGF5KCk7XHJcblx0XHR0aGlzLmxvYWRSb29tKCdyb29tLW9uZScpO1xyXG5cdFx0dGhpcy5hZGRIdWQoKTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lcigxKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBvdmVybGF5IG92ZXIgcm9vbSB0byBjb250cm9sIHJvb20gbGlnaHRcclxuXHQgKi9cclxuXHRhZGRSb29tT3ZlcmxheSgpIHtcclxuXHRcdHRoaXMucm9vbU92ZXJsYXkgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW1lcmFzLm1haW4ud2lkdGgsIHRoaXMuY2FtZXJhcy5tYWluLmhlaWdodCwgMHgwMDAwMDAsIDAuNSk7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldFZpc2libGUoZmFsc2UpO1xyXG5cdFx0dGhpcy5yb29tT3ZlcmxheS5zZXRPcmlnaW4oMCk7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldERlcHRoKDEwMDApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVHVybiBvZmYgbGlnaHRcclxuXHQgKi9cclxuXHR0dXJuT2ZmTGlnaHQoKSB7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldFZpc2libGUodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUdXJuIG9uIGxpZ2h0XHJcblx0ICovXHJcblx0dHVybk9uTGlnaHQoKSB7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldFZpc2libGUoZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIEhVRCB0byB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqL1xyXG5cdGFkZEh1ZCgpIHtcclxuXHRcdGFkZFRleHQodGhpcywgOTI1LCAyMCwgJ0l0ZW1zJywgVGV4dFNpemUuUkVHVUxBUik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgdGhlIEhVRFxyXG5cdCAqL1xyXG5cdHVwZGF0ZUh1ZCgpIHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlICYmICF0aGlzLnNlbGVjdGVkSXRlbSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLml0ZW1JbWFnZXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1JbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLml0ZW1JbWFnZXNbaV0uZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaXRlbUltYWdlID0gdGhpcy5hZGQuaW1hZ2UoOTUwLCBpICogNTAgKyA4MCwgdGhpcy5pdGVtc1tpXS50ZXh0dXJlS2V5LCB0aGlzLml0ZW1zW2ldLnRleHR1cmVGcmFtZSk7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRBbHBoYSgwKTtcclxuXHRcdFx0aXRlbUltYWdlLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0XHRjdXJzb3I6ICdncmFiJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aXRlbUltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJlY3RhbmdsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLnBvaW50ZXJJdGVtKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNldEN1cnNvcih0cnVlKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZSA9IHRoaXMuYWRkLnJlY3RhbmdsZShpdGVtSW1hZ2UueCwgaXRlbUltYWdlLnksIDUwLCA1MCk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5zZXRTdHJva2VTdHlsZSgzLCAweGZmZmZmZik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHRcdHRhcmdldHM6IGl0ZW1JbWFnZSxcclxuXHRcdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwLFxyXG5cdFx0XHRcdHJlcGVhdDogMCxcclxuXHRcdFx0XHR5b3lvOiBmYWxzZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5pdGVtSW1hZ2VzLnB1c2goaXRlbUltYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBjdXJzb3JcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSXRlbVNlbGVjdGVkIFdoZXRoZXIgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQuXHJcblx0ICovXHJcblx0c2V0Q3Vyc29yKGlzSXRlbVNlbGVjdGVkKSB7XHJcblx0XHRpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcclxuXHRcdFx0dGhpcy5pbnB1dC5zZXREZWZhdWx0Q3Vyc29yKCdncmFiYmluZycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbnB1dC5zZXREZWZhdWx0Q3Vyc29yKCdkZWZhdWx0Jyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnpvbmVzLmZvckVhY2goKHpvbmUpID0+IHtcclxuXHRcdFx0em9uZS5zZXRDdXJzb3IoaXNJdGVtU2VsZWN0ZWQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIHJvb20gb24gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcm9vbU5hbWUgVGhlIHJvb20gbmFtZVxyXG5cdCAqL1xyXG5cdGxvYWRSb29tKHJvb21OYW1lKSB7XHJcblx0XHRhc3NlcnQoIXJvb21OYW1lLCAnVGhlIHJvb21OYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0dGhpcy5yb29tTmFtZSA9IHJvb21OYW1lO1xyXG5cdFx0dGhpcy5kaXJ0eU9iamVjdE1hcCA9IG5ldyBNYXAoKTtcclxuXHRcdHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbihUUkFOU0lUSU9OX0RFTEFZLCAwLCAwLCAwKTtcclxuXHRcdHRoaXMudGlsZU1hcCA9IHRoaXMuY3JlYXRlVGlsZU1hcChyb29tTmFtZSk7XHJcblxyXG5cdFx0Y29uc3QgY2FzdGxlVGlsZXMgPSB0aGlzLmFkZFRpbGVTZXQodGhpcy50aWxlTWFwLCAnY2FzdGxlLXRpbGVzJywgJ2Nhc3RsZS10aWxlcycpO1xyXG5cdFx0Y29uc3QgY3JlZXB5VGlsZXMgPSB0aGlzLmFkZFRpbGVTZXQodGhpcy50aWxlTWFwLCAnY3JlZXB5LXRpbGVzJywgJ2NyZWVweS10aWxlcycpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVycyA9IHRoaXMuYWRkVGlsZVNldCh0aGlzLnRpbGVNYXAsICdjb250YWluZXJzJywgJ2NvbnRhaW5lcnMnKTtcclxuXHRcdGNvbnN0IHsgb2JqZWN0c0xheWVyLCBmb3JlZ3JvdW5kTGF5ZXIgfSA9IHRoaXMuZ2V0VGlsZU1hcExheWVycyh0aGlzLnRpbGVNYXAsIFtjcmVlcHlUaWxlcywgY2FzdGxlVGlsZXMsIGNvbnRhaW5lcnNdKTtcclxuXHJcblx0XHR0aGlzLmFkZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcik7XHJcblxyXG5cdFx0Y29uc3Qgc2NyZWVuVGV4dCA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGhpcy50aWxlTWFwLCBDdXN0b21Qcm9wZXJ0eS5TQ1JFRU5fVEVYVCk7XHJcblx0XHRjb25zdCBtb2RhbFNpemUgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRoaXMudGlsZU1hcCwgQ3VzdG9tUHJvcGVydHkuTU9EQUxfU0laRSk7XHJcblx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIHNjcmVlblRleHQsIG1vZGFsU2l6ZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGFuZ2Ugcm9vbSBsb2FkZWQgb24gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcm9vbU5hbWUgVGhlIGdhbWUgc2NlbmUuXHJcblx0ICovXHJcblx0Y2hhbmdlUm9vbShyb29tTmFtZSkge1xyXG5cdFx0YXNzZXJ0KCFyb29tTmFtZSwgJ1RoZSByb29tTmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoVFJBTlNJVElPTl9ERUxBWSwgMCwgMCwgMCwgKGNhbWVyYSwgcHJvZ3Jlc3MpID0+IHtcclxuXHRcdFx0aWYgKHByb2dyZXNzID09PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5yZXNldFJvb20oKTtcclxuXHRcdFx0XHR0aGlzLmxvYWRSb29tKHJvb21OYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCByb29tIGJ5IGRlc3Ryb3lpbmcgcm9vbSBvYmplY3RzLlxyXG5cdCAqL1xyXG5cdHJlc2V0Um9vbSgpIHtcclxuXHRcdHRoaXMudHVybk9uTGlnaHQoKTtcclxuXHRcdHRoaXMuem9uZXMuZm9yRWFjaCgoem9uZSkgPT4ge1xyXG5cdFx0XHR6b25lLmRlc3Ryb3koKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ucGNzLmZvckVhY2goKG5wYykgPT4ge1xyXG5cdFx0XHRucGMuZGVzdHJveSgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcclxuXHRcdFx0dGV4dC5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlTWFwS2V5IFRoZSBrZXkgb2YgdGhlIHRpbGUgbWFwLlxyXG5cdCAqIEByZXR1cm5zIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH1cclxuXHQgKi9cclxuXHRjcmVhdGVUaWxlTWFwKHRpbGVNYXBLZXkpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcEtleSwgJ1RoZSB0aWxlTWFwS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMubWFrZS50aWxlbWFwKHsga2V5OiB0aWxlTWFwS2V5IH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHRpbGUgc2V0IGltYWdlIHRvIHRoZSBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFRoZSB0aWxlIG1hcFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlU2V0S2V5IFRoZSB0aWxlIHNldCBrZXlcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VUZXh0dXJlS2V5IFRoZSBpbWFnZSB0ZXh0dXJlIGtleVxyXG5cdCAqL1xyXG5cdGFkZFRpbGVTZXQodGlsZU1hcCwgdGlsZVNldEtleSwgaW1hZ2VUZXh0dXJlS2V5KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghdGlsZVNldEtleSwgJ1RoZSB0aWxlU2V0S2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFpbWFnZVRleHR1cmVLZXksICdUaGUgdGlsZVNldFRleHR1cmVLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRyZXR1cm4gdGlsZU1hcC5hZGRUaWxlc2V0SW1hZ2UodGlsZVNldEtleSwgaW1hZ2VUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRpbGUgbWFwIGxheWVycyBhc3NvY2lhdGVkIHdpdGggdGhlIHRpbGUgbWFwXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBUaGUgdGlsZSBtYXBcclxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWxlU2V0c1xyXG5cdCAqL1xyXG5cdGdldFRpbGVNYXBMYXllcnModGlsZU1hcCwgdGlsZVNldHMpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0cywgJ1RoZSB0aWxlU2V0cyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGJhY2tncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkJBQ0tHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IG9iamVjdHNMYXllciA9IHRpbGVNYXAuZ2V0T2JqZWN0TGF5ZXIoVGlsZW1hcExheWVyLk9CSkVDVFMpO1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZExheWVyLCBmb3JlZ3JvdW5kTGF5ZXIsIG9iamVjdHNMYXllciB9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIFRpbGUgbWFwIG9iamVjdHMgdG8gdGhlIGdhbWUgc2NlbmUuXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuT2JqZWN0TGF5ZXJ9IG9iamVjdHNMYXllciBUaGUgb2JqZWN0cyBsYXllclxyXG5cdCAqL1xyXG5cdGFkZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcikge1xyXG5cdFx0YXNzZXJ0KCFvYmplY3RzTGF5ZXIsICdUaGUgb2JqZWN0c0xheWVyIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgdGlsZU1hcE9iamVjdHMgPSBvYmplY3RzTGF5ZXIub2JqZWN0cztcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlTWFwT2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRzd2l0Y2ggKHRpbGVNYXBPYmplY3RzW2ldLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuSU5URVJBQ1RJVkVfWk9ORTpcclxuXHRcdFx0XHRcdHRoaXMuem9uZXMucHVzaCh0aGlzLmFkZEludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLlRFWFQ6XHJcblx0XHRcdFx0XHR0aGlzLmFkZFRleHQodGlsZU1hcE9iamVjdHNbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgY3VzdG9tIHByb3BlcnR5IGZyb20gYSB0aWxlIG1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0geyp9IHRpbGVNYXBPYmplY3QgVGhlIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7Kn0gcHJvcGVydHlOYW1lIFRoZSBwcm9wZXJ0eSBuYW1lXHJcblx0ICovXHJcblx0Z2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgcHJvcGVydHlOYW1lKSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghcHJvcGVydHlOYW1lLCAnVGhlIHByb3BlcnR5TmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGxldCBwcm9wZXJ0eSA9IG51bGw7XHJcblx0XHRpZiAodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0XHRwcm9wZXJ0eSA9IHRpbGVNYXBPYmplY3QucHJvcGVydGllcy5maW5kKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwcm9wZXJ0eT8udmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgaW50ZXJhY3RpdmUgem9uZSBvYmplY3QgdG8gdGhlIGdhbWUgc2NlbmUsXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHRpbGVNYXBPYmplY3QgVGhlIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqL1xyXG5cdGFkZEludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IHpvbmUgPSBuZXcgSW50ZXJhY3RpdmVab25lKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LndpZHRoLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LmhlaWdodFxyXG5cdFx0KTtcclxuXHRcdHpvbmUuc2V0QWN0aW9uKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQUNUSU9OKSk7XHJcblx0XHR6b25lLnNldENvbnN0cmFpbnRzKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQ09OU1RSQUlOVFMpKTtcclxuXHRcdHpvbmUuc2V0Q29uc3RyYWludE1lc3NhZ2UodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT05TVFJBSU5UX01FU1NBR0UpKTtcclxuXHRcdHpvbmUuc2V0TmF2aWdhdGVUbyh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5Lk5BVklHQVRFX1RPKSk7XHJcblx0XHR6b25lLnNldE5hdmlnYXRlVG9TY2VuZSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5Lk5BVklHQVRFX1RPX1NDRU5FKSk7XHJcblx0XHR6b25lLnNldFNwYXduKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV04pKTtcclxuXHRcdHpvbmUuc2V0VGltZVBlbmFsaXR5KHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVElNRV9QRU5BTElUWSkpO1xyXG5cdFx0em9uZS5zZXRUaW1lUGVuYWxpdHlNZXNzYWdlKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVElNRV9QRU5BTElUWV9NRVNTQUdFKSk7XHJcblx0XHR6b25lLnNldEF1ZGlvQ2xpcEtleSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkFVRElPX0NMSVBfS0VZKSk7XHJcblx0XHR6b25lLnNldEN1cnNvcihmYWxzZSk7XHJcblxyXG5cdFx0Y29uc3QgZXZlbnRzID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5FVkVOVFMpO1xyXG5cclxuXHRcdGlmIChldmVudHMpIHtcclxuXHRcdFx0Y29uc3QgeyBsaXN0ZW5UbywgZW1pdCB9ID0gdGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5FVkVOVFMpO1xyXG5cclxuXHRcdFx0aWYgKGxpc3RlblRvKSB7XHJcblx0XHRcdFx0dGhpcy5ldmVudHMub24obGlzdGVuVG8sICgpID0+IHtcclxuXHRcdFx0XHRcdHpvbmUuZXhlY3V0ZUFjdGlvbih0aGlzLnNlbGVjdGVkSXRlbSwgdGhpcy5kaXJ0eU9iamVjdE1hcCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoem9uZS5pc0RpcnR5KCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldCh6b25lLm5hbWUsIHpvbmUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuZGVsZXRlKHpvbmUubmFtZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHpvbmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoaXRlbVVzZWQpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGl0ZW1Vc2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJdGVtLnNpbmdsZVVzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbT8ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRDdXJzb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHpvbmUuaXNEaXJ0eSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoem9uZS5uYW1lLCB6b25lKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLmRlbGV0ZSh6b25lLm5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChlbWl0KSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChlbWl0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHpvbmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdHpvbmUuZXhlY3V0ZUFjdGlvbih0aGlzLnNlbGVjdGVkSXRlbSwgdGhpcy5kaXJ0eU9iamVjdE1hcCwgKGl0ZW1Vc2VkKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoaXRlbVVzZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJdGVtLnNpbmdsZVVzZSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0/Lm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRJdGVtPy5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0Q3Vyc29yKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoem9uZS5pc0RpcnR5KCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5zZXQoem9uZS5uYW1lLCB6b25lKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuZGVsZXRlKHpvbmUubmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHpvbmU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgdGV4dCB0byB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0aWxlTWFwT2JqZWN0IFRoZSB0aWxlIG1hcCBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRhZGRUZXh0KHRpbGVNYXBPYmplY3QpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcE9iamVjdCwgJ1RoZSB0aWxlTWFwT2JqZWN0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgeyB4LCB5LCB0ZXh0IH0gPSB0aWxlTWFwT2JqZWN0O1xyXG5cdFx0Y29uc3QgeyBjb2xvciwgZm9udGZhbWlseSwgaGFsaWduLCBwaXhlbHNpemUgfSA9IHRleHQ7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGQudGV4dCh4LCB5LCB0ZXh0LnRleHQsIHtcclxuXHRcdFx0Zm9udEZhbWlseTogZm9udGZhbWlseSxcclxuXHRcdFx0Zm9udFNpemU6IGAke3BpeGVsc2l6ZX1weGAsXHJcblx0XHRcdGZpbGw6IGNvbG9yLFxyXG5cdFx0XHRhbGlnbjogaGFsaWduXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwYXduIGl0ZW0gb24gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcblx0ICovXHJcblx0c3Bhd25JdGVtKHgsIHksIGl0ZW0pIHtcclxuXHRcdGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIWl0ZW0sICdUaGUgaXRlbSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGl0ZW1JbWFnZSA9IHRoaXMuYWRkLmltYWdlKHgsIHksIGl0ZW0udGV4dHVyZUtleSwgaXRlbS50ZXh0dXJlRnJhbWUpO1xyXG5cdFx0aXRlbUltYWdlLnNldEFscGhhKDApO1xyXG5cdFx0aXRlbUltYWdlLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0Y3Vyc29yOiAnZ3JhYidcclxuXHRcdH0pO1xyXG5cdFx0aXRlbUltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zb3VuZC5wbGF5KCdnb3QtaXRlbS1hdWRpbycsIHtcclxuXHRcdFx0XHR2b2x1bWU6IDAuM1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aXRlbUltYWdlLmRlc3Ryb3koKTsgXHJcblx0XHRcdGlmICh0aGlzLnBvaW50ZXJJdGVtKSB7XHJcblx0XHRcdFx0dGhpcy5wb2ludGVySXRlbS5kZXN0cm95KCk7XHJcblx0XHRcdFx0dGhpcy5wb2ludGVySXRlbSA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0c2hvd0l0ZW1Nb2RhbCh0aGlzLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLnRleHR1cmVLZXksIGl0ZW0udGV4dHVyZUZyYW1lLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHR0YXJnZXRzOiBpdGVtSW1hZ2UsXHJcblx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0ZHVyYXRpb246IDIwMFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTcGF3biBOUEMgb24gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG5wYyBUaGUgbnBjIG9iamVjdFxyXG5cdCAqL1xyXG5cdHNwYXduTlBDKHgsIHksIG5wYykge1xyXG5cdFx0YXNzZXJ0KCF4LCAnVGhlIHggaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXksICdUaGUgeSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghbnBjLCAnVGhlIG5wYyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IG5wY1Nwcml0ZSA9IHRoaXMuYWRkLnNwcml0ZSh4LCB5LCBucGMudGV4dHVyZUtleSwgbnBjLnRleHR1cmVGcmFtZSk7XHJcblx0XHRucGNTcHJpdGUuc2V0U2NhbGUoMik7XHJcblx0XHRucGNTcHJpdGUuc2V0QWxwaGEoMCk7XHJcblx0XHRucGNTcHJpdGUuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdG5wY1Nwcml0ZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdHNob3dUZXh0TW9kYWwodGhpcywgbnBjLmRlc2NyaXB0aW9uKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ucGNzLnB1c2gobnBjU3ByaXRlKTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IG5wY1Nwcml0ZSxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRkdXJhdGlvbjogMjAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBnaXZlbiBpdGVtIG5hbWUgaXMgc2VsZWN0ZWRcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaXRlbU5hbWUgVGhlIGl0ZW0gbmFtZVxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGlzSXRlbVNlbGVjdGVkKGl0ZW1OYW1lKSB7XHJcblx0XHRhc3NlcnQoIWl0ZW1OYW1lLCAnVGhlIG5hbWUgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUgPT09IGl0ZW1OYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnRzIHRoZSB0aW1lclxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZkhvdXJzIFRoZSBudW1iZXIgb2YgaG91cnNcclxuXHQgKi9cclxuXHRzdGFydFRpbWVyKG51bWJlck9mSG91cnMpIHtcclxuXHRcdGFzc2VydCghbnVtYmVyT2ZIb3VycywgJ1RoZSBudW1iZXJPZkhvdXJzIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0aWYgKCF0aGlzLmlzUnVubmluZykge1xyXG5cdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5jb3VudERvd25EYXRlID0gbmV3IERhdGUobm93ICsgbnVtYmVyT2ZIb3VycyAqIE5VTUJFUl9PRl9NSU5VVEVTICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlMTElTRUNPTkRTKS5nZXRUaW1lKCk7XHJcblx0XHRcdHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0XHR0aGlzLnRpbWVSZW1haW5pbmcgPSB0aGlzLmNvdW50RG93bkRhdGUgLSBub3c7XHJcblx0XHRcdFx0aWYgKG5vdyA+PSB0aGlzLmNvdW50RG93bkRhdGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmlzVGltZUVsYXBzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHRpbWUgcGVuYWxpdHlcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZVBlbmFsaXR5IFRoZSB0aW1lIHBlbmFsaXR5XHJcblx0ICovXHJcblx0YWRkVGltZVBlbmFsaXR5KHRpbWVQZW5hbGl0eSkge1xyXG5cdFx0dGhpcy5jb3VudERvd25EYXRlID0gbmV3IERhdGUodGhpcy5jb3VudERvd25EYXRlIC0gdGltZVBlbmFsaXR5ICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlMTElTRUNPTkRTKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSB0aGUgdGltZSBvbiB0aGUgZ2FtZSBzY2VuZS5cclxuXHQgKi9cclxuXHR1cGRhdGVUaW1lKCkge1xyXG5cdFx0aWYgKHRoaXMudGltZVRleHQpIHtcclxuXHRcdFx0dGhpcy50aW1lVGV4dC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBob3Vyc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoXHJcblx0XHRcdCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTlVURVMgKiBOVU1CRVJfT0ZfSE9VUlMpKSAvXHJcblx0XHRcdFx0KE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSU5VVEVTKVxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IG1pbnV0ZXNSZW1haW5pbmcgPSBNYXRoLmZsb29yKFxyXG5cdFx0XHQodGhpcy50aW1lUmVtYWluaW5nICUgKE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSU5VVEVTKSkgL1xyXG5cdFx0XHRcdChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMpXHJcblx0XHQpO1xyXG5cdFx0Y29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlIChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMpKSAvIE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMpO1xyXG5cdFx0aWYgKHRoaXMudGltZVJlbWFpbmluZykge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0ID0gYWRkVGV4dCh0aGlzLCA5MTUsIDczMCwgYCR7aG91cnNSZW1haW5pbmd9OiR7bWludXRlc1JlbWFpbmluZ306JHtzZWNvbmRzUmVtYWluaW5nfWAsIFRleHRTaXplLlNNQUxMKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBob29rIHRoYXQgcnVucyBldmVyeSBjeWNsZS5cclxuXHQgKi9cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnVwZGF0ZVRpbWUoKTtcclxuXHRcdGlmICh0aGlzLmlzVGltZUVsYXBzZWQpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnZ2FtZW92ZXInKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkSXRlbSAmJiAhdGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlcjtcclxuXHRcdFx0Y29uc3QgeyB0ZXh0dXJlS2V5LCB0ZXh0dXJlRnJhbWUgfSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgdGV4dHVyZUtleSwgdGV4dHVyZUZyYW1lKTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gJiYgdGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlcjtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS54ID0geDtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS55ID0geTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbS5kZXN0cm95KCk7XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSwgVGV4dFNpemUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhZGRUZXh0IH0gZnJvbSAnLi4vdXRpbHMvdGV4dC11dGlscyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSBmb3IgdGhlIGdhbWUgb3ZlciBzY2VuZS5cclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0LyoqXHJcblx0ICogQ29uc3R1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ2dhbWVvdmVyJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgUGhhc2VyIGhvb2sgcnVucyBvbmNlLlxyXG5cdCAqL1xyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKDAsIDAsIExvYWRlcktleS5NRU5VX0lNQUdFKS5zZXRPcmlnaW4oMCkuc2V0U2NhbGUoMC44KS5zZXRBbHBoYSgwLjUpO1xyXG5cclxuXHRcdGFkZFRleHQodGhpcywgNDAwLCAzMDAsICdHYW1lIG92ZXIhJywgVGV4dFNpemUuTEFSR0UpO1xyXG5cdFx0YWRkVGV4dChcclxuXHRcdFx0dGhpcyxcclxuXHRcdFx0NTE2LFxyXG5cdFx0XHQ0MDAsXHJcblx0XHRcdCdBbGFzLCB5b3UgZmFpbGVkIHRvIGVzY2FwZSB0aGUgY2FzdGxlIGluIHRpbWUsIGFuZCBub3cgeW91ciBzb3VsIGlzIGRvb21lZCB0byBsaW5nZXIgZm9yZXZlciB3aXRoaW4gaXRzIHdhbGxzLicsXHJcblx0XHRcdFRleHRTaXplLlJFR1VMQVIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3b3JkV3JhcDoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQwMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KS5zZXRPcmlnaW4oMC41KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgZm9yIHRoZSBsb2FkaW5nIHNjZW5lXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ2xvYWRpbmcnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByZWxvYWQgUGhhc2VyIGhvb2sgcnVucyBvbmx5IG9uY2VcclxuXHQgKi9cclxuXHRwcmVsb2FkKCkge1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tb25lJywgJ2Fzc2V0cy9qc29uL3Jvb20tb25lLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS10d28nLCAnYXNzZXRzL2pzb24vcm9vbS10d28tbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXRocmVlJywgJ2Fzc2V0cy9qc29uL3Jvb20tdGhyZWUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLWZvdXInLCAnYXNzZXRzL2pzb24vcm9vbS1mb3VyLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1maXZlJywgJ2Fzc2V0cy9qc29uL3Jvb20tZml2ZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tc2l4JywgJ2Fzc2V0cy9qc29uL3Jvb20tc2l4LW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ2Nhc3RsZS10aWxlcycsICdhc3NldHMvaW1nL2Nhc3RsZS10aWxlcy9UaWxlc2V0LnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjcmVlcHktdGlsZXMnLCAnYXNzZXRzL2ltZy90aWxlcy5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnY29udGFpbmVycycsICdhc3NldHMvaW1nL2NvbnRhaW5lci9jb250YWluZXIucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoTG9hZGVyS2V5Lk1FTlVfSU1BR0UsICdhc3NldHMvaW1nL2Nhc3RsZS5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZHVuZ2Vvbi1jcmF3bCcsICdhc3NldHMvaW1nL2R1bmdlb24tY3Jhd2wucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0cmVhc3VyZTEnLCAnYXNzZXRzL2ltZy9UcmVhc3VyZSBJY29ucy90cmVhc3VyZTEucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0cmVhc3VyZTInLCAnYXNzZXRzL2ltZy9UcmVhc3VyZSBJY29ucy90cmVhc3VyZTQucG5nJywgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLmF1ZGlvKCdvcGVuLWRvb3ItYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9jcmVha3ktZG9vci1oaW5nZS53YXYnKTtcclxuXHRcdHRoaXMubG9hZC5hdWRpbygnb3Blbi1jaGVzdC1hdWRpbycsICdhc3NldHMvc291bmRzL29wZW4tY2hlc3Qud2F2Jyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ3B1c2gtYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9zZngtcHVzaC1ib3VsZGVyLmZsYWMnKTtcclxuXHRcdHRoaXMubG9hZC5hdWRpbygnZ290LWl0ZW0tYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9JdGVtMUEud2F2Jyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ2V4cGxvc2lvbi1hdWRpbycsICdhc3NldHMvc291bmRzL3J1bWJsZS5mbGFjJyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ3dvb2QtaW1wYWN0LWF1ZGlvJywgJ2Fzc2V0cy9zb3VuZHMvd29vZF9pbXBhY3QvY3JhY2swMS5tcDMuZmxhYycpO1xyXG5cdFx0dGhpcy5sb2FkLnNjcmlwdCgnd2ViZm9udCcsICdodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL3dlYmZvbnQvMS42LjI2L3dlYmZvbnQuanMnKTtcclxuXHRcdHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XHJcblx0XHRcdFdlYkZvbnQubG9hZCh7XHJcblx0XHRcdFx0Z29vZ2xlOiB7XHJcblx0XHRcdFx0XHRmYW1pbGllczogWydHZXJtYW5pYSBPbmUnXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWN0aXZlOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdtZW51Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSwgVGV4dFNpemUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhZGRUZXh0IH0gZnJvbSAnLi4vdXRpbHMvdGV4dC11dGlscyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSBmb3IgdGhlIG1lbnUgc2NlbmVcclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMjVcclxuICogQGV4dGVuZHMgUGhhc2VyLlNjZW5lXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignbWVudScpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIFBoYXNlci5qcyBob29rIHJ1bnMgb25seSBvbmNlXHJcblx0ICovXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgwLCAwLCBMb2FkZXJLZXkuTUVOVV9JTUFHRSkuc2V0T3JpZ2luKDApLnNldFNjYWxlKDAuOCk7XHJcblxyXG5cdFx0YWRkVGV4dCh0aGlzLCAzMTAsIDM1MCwgJ0VzY2FwZSBmcm9tIHRoZSBjYXN0bGUnLCBUZXh0U2l6ZS5MQVJHRSk7XHJcblx0XHRhZGRUZXh0KHRoaXMsIDUxMiwgNDUwLCAnQ2xpY2sgdG8gc3RhcnQgdGhlIGdhbWUnKS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIFBoYXNlci5qcyBob29rIHJ1bnMgZXZlcnkgY3ljbGUuXHJcblx0ICovXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0aWYgKHRoaXMuaW5wdXQubWFuYWdlci5hY3RpdmVQb2ludGVyLmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdnYW1lJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5LCBUZXh0U2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGFkZFRleHQgfSBmcm9tICcuLi91dGlscy90ZXh0LXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIGZvciB0aGUgd2lubmluZyBzY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKiBAZXh0ZW5kcyBQaGFzZXIuU2NlbmVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbm5pbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCd3aW4nKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBQaGFzZXIuanMgaG9vay4gUnVucyBvbmx5IG9uY2VcclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmFkZC5pbWFnZSgwLCAwLCBMb2FkZXJLZXkuTUVOVV9JTUFHRSkuc2V0T3JpZ2luKDApLnNldFNjYWxlKDAuOCkuc2V0QWxwaGEoMC41KTtcclxuXHJcblx0XHRhZGRUZXh0KHRoaXMsIDIwMCwgMzAwLCAnQ29uZ3JhdHVsYXRpb25zISBZb3XigJl2ZSBlc2NhcGVkIScsIFRleHRTaXplLkxBUkdFKTtcclxuXHRcdGFkZFRleHQoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdDUxNixcclxuXHRcdFx0NDIwLFxyXG5cdFx0XHQnQXQgbGFzdCwgSeKAmXZlIHdvbiBteSBmcmVlZG9tLiBCdXQgYXMgSSBzdGVwIGJleW9uZCB0aGUgY2FzdGxlIGdhdGVzLCB0aGUgdHJ1dGggcmV0dXJucyBJIGhhZCBhbW5lc2lhLiBUaGlzIHdhcyBteSBjYXN0bGUsIGFuZCBJIHdhcyBteSBvd24gcHJpc29uZXIuJyxcclxuXHRcdFx0VGV4dFNpemUuUkVHVUxBUixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpLnNldE9yaWdpbigwLjUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgSW52YWxpZEFyZ3VtZW50RXJyb3IgZnJvbSAnLi4vZXJyb3JzL0ludmFsaWRhQXJndW1lbnRFcnJvcic7XHJcblxyXG4vKipcclxuICogQXNzZXJ0IGNvbmRpdGlvbiBhbWQgdGhyb3cgZXJyb3IgbWVzc2FnZSBpZiBjb25kaXRpb24gaXMgbm90IG1ldFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvbiBUaGUgY29uZGl0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xyXG5cdGlmIChjb25kaXRpb24pIHtcclxuXHRcdHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihtZXNzYWdlKTtcclxuXHR9XHJcbn07IiwiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9hc3NlcnQtdXRpbHMnO1xyXG5pbXBvcnQgeyBhZGRUZXh0IH0gZnJvbSAnLi90ZXh0LXV0aWxzJztcclxuaW1wb3J0IHsgTW9kYWxTaXplLCBUZXh0U2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgYSBtb2RhbCB3aW5kb3cgd2l0aCB0ZXh0XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlNjZW5lfSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaXplIFRoZSBtb2RhbCBzaXplXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsb3NlQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGwgd2hlbiBtb2RhbCBpcyBjbG9zZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGV4dE1vZGFsKHNjZW5lLCB0ZXh0LCBzaXplID0gTW9kYWxTaXplLlJFR1VMQVIsIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCghdGV4dCwgJ1RoZSB0ZXh0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0bGV0IGJveCA9IG51bGw7XHJcblx0bGV0IGNsb3NlVGV4dCA9IG51bGw7XHJcblxyXG5cdHN3aXRjaCAoc2l6ZSkge1xyXG5cdFx0Y2FzZSBNb2RhbFNpemUuUkVHVUxBUjpcclxuXHRcdFx0Ym94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA1MDAsIDI1MCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHRcdFx0Y2xvc2VUZXh0ID0gYWRkVGV4dChzY2VuZSwgMTY1LCAtMTE1LCAnQ2xvc2UgWCcpLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTW9kYWxTaXplLkxBUkdFOlxyXG5cdFx0XHRjbG9zZVRleHQgPSBhZGRUZXh0KHNjZW5lLCAxNjUsIC0xMTUsICdDbG9zZSBYJykuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdFx0fSk7XHJcblx0XHRcdGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNDUwLCAzNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdGV4dE9iaiA9IGFkZFRleHQoc2NlbmUsIDAsIDAsIHRleHQsIFRleHRTaXplLlJFR1VMQVIsIHtcclxuXHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdHdpZHRoOiA0MDBcclxuXHRcdH1cclxuXHR9KS5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cdG1vZGFsLmFkZChbYm94LCB0ZXh0T2JqLCBjbG9zZVRleHRdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXlzIGEgbW9kYWwgd2luZG93IHRoYXQgd2l0aCBhbiBpbWFnZVxyXG4gKiBAcGFyYW0ge1BoYXNlci5TY2VuZX0gc2NlbmUgVGhlIFBoYXNlciBzY2VuZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VLZXkgVGhlIFBoYXNlciBsb2FkZXIga2V5IGZvciB0aGUgaW1hZ2VcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xvc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbWFnZU1vZGFsKHNjZW5lLCBpbWFnZUtleSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCFpbWFnZUtleSwgJ1RoZSBpbWFnZUtleSBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNTAwLCAyNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0Y29uc3QgaW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgMCwgaW1hZ2VLZXkpLnNldE9yaWdpbigwLjUpO1xyXG5cdGltYWdlLnNldERpc3BsYXlTaXplKGJveC53aWR0aCAtIDYwLCBib3guaGVpZ2h0IC0gNjApO1xyXG5cclxuXHRjb25zdCBjbG9zZVRleHQgPSBhZGRUZXh0KHNjZW5lLCAxNTUsIC0xNjksICdDbG9zZSBYJykuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdH0pO1xyXG5cdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdG1vZGFsLmRlc3Ryb3koKTtcclxuXHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0c2NlbmUudHdlZW5zLmFkZCh7XHJcblx0XHR0YXJnZXRzOiBtb2RhbCxcclxuXHRcdGFscGhhOiAxLFxyXG5cdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRkdXJhdGlvbjogMjAwXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZChbYm94LCBpbWFnZSwgY2xvc2VUZXh0XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyBhIG1vZGFsIHdpbmRvdyB3aXRoIHRleHQgYW5kIGl0ZW0gaW5mb3JtYXRpb25cclxuICogQHBhcmFtIHtvYmplY3R9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcclxuICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1EZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgaXRlbVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbVRleHR1cmUgVGhlIHRleHR1cmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpdGVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtRnJhbWUgIFRoZSBmcmFtZSBhc3NvY2lhdGVkIHdpdGggdGhlIGl0ZW1cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xvc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0l0ZW1Nb2RhbChzY2VuZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lLCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0YXNzZXJ0KCFzY2VuZSwgJ1RoZSBzY2VuZSBpcyB1bmRlZmluZWQnKTtcclxuXHRhc3NlcnQoIWl0ZW1EZXNjcmlwdGlvbiwgJ1RoZSBpdGVtRGVzY3JpcHRpb24gaXMgdW5kZWZpbmVkJyk7XHJcblx0Y29uc3QgYmxvY2tlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgc2NlbmUuc2NhbGUud2lkdGgsIHNjZW5lLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0Y29uc3QgbW9kYWwgPSBzY2VuZS5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRjb25zdCBib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDUwMCwgMjAwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRjb25zdCBjbG9zZVRleHQgPSBhZGRUZXh0KHNjZW5lLCAxNjUsIC05MCwgJ0Nsb3NlIFgnKS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0fSk7XHJcblx0Y29uc3QgaXRlbUltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIC0xMCwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSk7XHJcblx0Y29uc3QgaXRlbURlc2NyaXB0aW9uVGV4dCA9IGFkZFRleHQoc2NlbmUsIDAsIDMwLCBpdGVtRGVzY3JpcHRpb24pLnNldE9yaWdpbigwLjUpO1xyXG5cclxuXHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGQoW2JveCwgaXRlbUltYWdlLCBpdGVtRGVzY3JpcHRpb25UZXh0LCBjbG9zZVRleHRdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL2Fzc2VydC11dGlscyc7XG5pbXBvcnQgeyBUZXh0U2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQWRkIHRleHQgdG8gdGhlIHNjZW5lLlxuICpcbiAqIEBwYXJhbSB7UGhhc2VyLlNjZW5lfSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgcG9zaXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gc2l6ZSBUaGUgc2l6ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVGV4dChzY2VuZSwgeCwgeSwgdGV4dCwgc2l6ZSA9IFRleHRTaXplLlJFR1VMQVIsIHRleHRPcHMgPSB7fSkge1xuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xuXHRhc3NlcnQoeCA9PT0gbnVsbCB8fCB4ID09PSB1bmRlZmluZWQsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcblx0YXNzZXJ0KHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkLCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XG5cdGFzc2VydCghdGV4dCwgJ1RoZSB0ZXh0IGlzIHVuZGVmaW5lZCcpO1xuXHRzd2l0Y2ggKHNpemUpIHtcblx0XHRjYXNlIFRleHRTaXplLkxBUkdFOlxuXHRcdFx0dGV4dE9wcyA9IHsgLi4udGV4dE9wcywgZm9udFNpemU6ICc0OHB4JywgZm9udEZhbWlseTogJ0dlcm1hbmlhIE9uZScgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRleHRTaXplLlNNQUxMOlxuICAgICAgICAgICAgdGV4dE9wcyA9IHsgLi4udGV4dE9wcywgZm9udFNpemU6ICcxOHB4JywgZm9udEZhbWlseTogJ0dlcm1hbmlhIE9uZScgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0ZXh0T3BzID0geyAuLi50ZXh0T3BzLCBmb250U2l6ZTogJzI0cHgnLCBmb250RmFtaWx5OiAnR2VybWFuaWEgT25lJyB9O1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIHNjZW5lLmFkZC50ZXh0KHgsIHksIHRleHQsIHRleHRPcHMpO1xufVxuIiwiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIi4vYXNzZXJ0LXV0aWxzXCI7XHJcbmltcG9ydCB7IFRpbGVtYXBMYXllciwgRGlyZWN0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIHRpbGVzIGJhc2VkIG9uIHRoZSB3b3JsZCBjb29yZGluYXRlcywgd2lkdGggYW5kIGhlaWdodFxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge251bWJlcn0geCBcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBcclxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVyIFxyXG4gKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRpbGVNYXAsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGxheWVyID0gVGlsZW1hcExheWVyLkZPUkVHUk9VTkQpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF4LCAnVGhlIHggaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXksICdUaGUgeSBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghd2lkdGgsICdUaGUgd2lkdGggaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIWhlaWdodCwgJ1RoZSBoZWlnaHQgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICByZXR1cm4gdGlsZU1hcC5nZXRUaWxlc1dpdGhpbldvcmxkWFkoXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzTm90RW1wdHk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbGF5ZXJcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGlsZXMgZnJvbSBUaWxlbWFwXHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRpbGVzKHRpbGVNYXAsIHRpbGVzKSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB0aWxlTWFwLnJlbW92ZVRpbGVBdCh0aWxlc1tpXS54LCB0aWxlc1tpXS55KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcGxhY2UgZ2l2ZW4gdGlsZXMgd2l0aCBuZXcgdGlsZXMgXHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IG9sZFRpbGVzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBuZXdUaWxlcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVGlsZXModGlsZU1hcCwgb2xkVGlsZXMsIG5ld1RpbGVzKSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghb2xkVGlsZXMsICdUaGUgb2xkVGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIW5ld1RpbGVzLCAnVGhlIG5ld1RpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG9sZFRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld1RpbGVzW2ldKSB7XHJcbiAgICAgICAgICAgIHRpbGVNYXAucHV0VGlsZUF0KG5ld1RpbGVzW2ldLCBvbGRUaWxlc1tpXS54LCBvbGRUaWxlc1tpXS55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb3ZlIHRpbGVzIG9uIHRoZSBUaWxlbWFwIGEgZm9yIGdpdmVuIGRpcmVjdGlvbiBhbmQgdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXJlY3Rpb24gXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGlsZXModGlsZU1hcCwgdGlsZXMsIGRpcmVjdGlvbiwgdmVsb2NpdHkpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghZGlyZWN0aW9uLCAnVGhlIGRpcmVjdGlvbiBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcbiAgICAgICAgICAgIG1vdmVUaWxlc0xlZnQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcbiAgICAgICAgICAgIG1vdmVUaWxlc1JpZ2h0KHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLlVQOlxyXG4gICAgICAgICAgICBtb3ZlVGlsZXNVcCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG4gICAgICAgICAgICBtb3ZlVGlsZURvd24odGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb3ZlIHRpbGVzIHRvIHRoZSBsZWZ0IG9uIHRoZSBUaWxlbWFwIGZvciBhIGdpdmVuIHZlbG9jaXR5XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB2ZWxvY2l0eSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGlsZXNMZWZ0KHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54IC0gdmVsb2NpdHksIHRpbGVzW2ldLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW92ZSB0aWxlcyB0byB0aGUgcmlnaHQgb24gdGhlIFRpbGVtYXAgZm9yIGEgZm9yIGdpdmVuIHZlbG9jaXR5XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB2ZWxvY2l0eSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGlsZXNSaWdodCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCArIHZlbG9jaXR5LCB0aWxlc1tpXS55KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vdmUgdGlsZXMgdXAgb24gdGhlIFRpbGVtYXAgZm9yIGEgZ2l2ZW4gdmVsb2NpdHlcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtBcnJheX0gdGlsZXMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlbG9jaXR5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUaWxlc1VwKHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54LCB0aWxlc1tpXS55IC0gdmVsb2NpdHkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW92ZSB0aWxlcyBkb3duIG9uIHRoZSBUaWxlbWFwIGZvciBhIGdpdmVuIHZlbG9jaXR5XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB2ZWxvY2l0eSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGlsZURvd24odGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLngsIHRpbGVzW2ldLnkgKyB2ZWxvY2l0eSk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fdGhlX2Nhc3RsZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfZnJvbV90aGVfY2FzdGxlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==