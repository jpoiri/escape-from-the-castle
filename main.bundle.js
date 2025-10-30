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
	CONSTRAINT_TIME_PENALITY: 'constraintTimePenality',
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
	constraintTimePenality = null;
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
		let tiles = null;

		if (this.validate(item, dirtyObjectMap)) {
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
	 * Validate whether the action can be executed
	 * @param {Object} item The item use with the zone
	 * @param {Map} dirtyObjectMap The dirty object map
	 * @returns {boolean}
	 */
	validate(item, dirtyObjectMap) {
		if (this.constraints) {
			const { itemRequired, promptRequired, dependsOn } = this.constraints;
			if (itemRequired && item?.name !== itemRequired) {
				this.handleInvalid();
				return false;
			} else if (promptRequired) {
				const answer = window.prompt(promptRequired.question);
				if (answer && answer.toLocaleLowerCase() === promptRequired.answer.toLocaleLowerCase()) {
					return true;
				}
				if (answer) {
					this.handleInvalid();
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
					this.handleInvalid();
					return false;
				}
			}
		}
		return true;
	}

	handleInvalid() {
		if (this.constraintTimePenality) {
			this.scene.addTimePenality(this.constraintTimePenality);
		}
		if (this.constraintMessage) {
			(0,_utils_modal_utils__WEBPACK_IMPORTED_MODULE_4__.showTextModal)(this.scene, this.constraintMessage);
		}
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
	 * Sets the constraint time penality
	 * @param {number} constraintTimePenality
	 */
	setConstraintTimePenality(constraintTimePenality) {
		this.constraintTimePenality = constraintTimePenality;
	}

	/**
	 * Returns the constraint time penality
	 * @returns {number}
	 */
	getConstraintTimePenality() {
		return this.constraintTimePenality;
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
		zone.setConstraintTimePenality(this.getCustomProperty(tileMapObject, _constants__WEBPACK_IMPORTED_MODULE_5__.CustomProperty.CONSTRAINT_TIME_PENALITY));
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
		this.load.audio('explosion-audio', 'assets/sounds/erase.wav');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLMEI7QUFDOEM7QUFDM0I7QUFDc0Q7QUFDaEM7QUFDckU7QUFD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QSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0QjtBQUNVO0FBQ1M7QUFDWDtB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL2VudGl0aWVzL0ludGVyYWN0aXZlWm9uZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL2Vycm9ycy9JbnZhbGlkYUFyZ3VtZW50RXJyb3IuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3NjZW5lcy9HYW1lLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvc2NlbmVzL0dhbWVPdmVyLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvLi9zcmMvc2NlbmVzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy9zY2VuZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3NjZW5lcy9XaW4uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy91dGlscy9hc3NlcnQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy91dGlscy9tb2RhbC11dGlscy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlLy4vc3JjL3V0aWxzL3RleHQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS8uL3NyYy91dGlscy90aWxlbWFwLXV0aWxzLmpzIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNjYXBlLWZyb20tdGhlLWNhc3RsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VzY2FwZS1mcm9tLXRoZS1jYXN0bGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtZnJvbS10aGUtY2FzdGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHtcclxuXHRDT01CSU5BVElPTjogJ2NvbWJpbmF0aW9uJyxcclxuXHRQUk9NUFRfTUVTU0FHRTogJ3Byb21wdE1lc3NhZ2UnLFxyXG5cdFNQQVdOOiAnc3Bhd24nLFxyXG5cdFNQQVdOX0lURU06ICdzcGF3bkl0ZW0nLFxyXG5cdExPQ0tFRDogJ2xvY2tlZCcsXHJcblx0TE9DS0VEX01FU1NBR0U6ICdsb2NrZWRNZXNzYWdlJyxcclxuXHRBQ1RJT046ICdhY3Rpb24nLFxyXG5cdENPTlNUUkFJTlRTOiAnY29uc3RyYWludHMnLFxyXG5cdE5BVklHQVRFX1RPOiAnbmF2aWdhdGVUbycsXHJcblx0TkFWSUdBVEVfVE9fU0NFTkU6ICduYXZpZ2F0ZVRvU2NlbmUnLFxyXG5cdENPTlNUUkFJTlRfTUVTU0FHRTogJ2NvbnN0cmFpbnRNZXNzYWdlJyxcclxuXHRDT05TVFJBSU5UX1RJTUVfUEVOQUxJVFk6ICdjb25zdHJhaW50VGltZVBlbmFsaXR5JyxcclxuXHRFVkVOVFM6ICdldmVudHMnLFxyXG5cdFNDUkVFTl9URVhUOiAnc2NyZWVuVGV4dCcsXHJcblx0TU9EQUxfU0laRTogJ21vZGFsU2l6ZScsXHJcblx0VElNRV9QRU5BTElUWTogJ3RpbWVQZW5hbGl0eScsXHJcblx0VElNRV9QRU5BTElUWV9NRVNTQUdFOiAndGltZVBlbmFsaXR5TWVzc2FnZScsXHJcblx0QVVESU9fQ0xJUF9LRVk6ICdhdWRpb0NsaXBLZXknXHJcbn07XHJcblxyXG5jb25zdCBBY3Rpb25UeXBlID0ge1xyXG5cdE1PVkVfVElMRTogJ01PVkVfVElMRScsXHJcblx0VE9HR0xFX1RJTEVfTU9WRU1FTlQ6ICdUT0dHTEVfVElMRV9NT1ZFTUVOVCcsXHJcblx0REVTVFJPWV9USUxFOiAnREVTVFJPWV9USUxFJyxcclxuXHRSRVBMQUNFX1RJTEU6ICdSRVBMQUNFX1RJTEUnLFxyXG5cdFRPR0dMRV9USUxFOiAnVE9HR0xFX1RJTEUnLFxyXG5cdFNIT1dfVEVYVDogJ1NIT1dfVEVYVCcsXHJcblx0U0hPV19JTUFHRTogJ1NIT1dfSU1BR0UnLFxyXG5cdERFU1RST1k6ICdERVNUUk9ZJyxcclxuXHRUVVJOX09OX0xJR0hUOiAnVFVSTl9PTl9MSUdIVCcsXHJcblx0VFVSTl9PRkZfTElHSFQ6ICdUVVJOX09GRl9MSUdIVCdcclxufTtcclxuXHJcbmNvbnN0IFNwYXduVHlwZSA9IHtcclxuXHRJVEVNOiAnSVRFTScsXHJcblx0TlBDOiAnTlBDJ1xyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG5cdExFRlQ6ICdMRUZUJyxcclxuXHRSSUdIVDogJ1JJR0hUJyxcclxuXHRVUDogJ1VQJyxcclxuXHRET1dOOiAnRE9XTidcclxufTtcclxuXHJcbmNvbnN0IFJvdGF0aW9uID0ge1xyXG5cdFJPVEFURV85MDogJzkwJyxcclxuXHRST1RBVEVfMTgwOiAnMTgwJyxcclxuXHRST1RBVEVfMjcwOiAnMjcwJ1xyXG59O1xyXG5cclxuY29uc3QgTW9kYWxTaXplID0ge1xyXG5cdFJFR1VMQVI6ICdSRUdVTEFSJyxcclxuXHRMQVJHRTogJ0xBUkdFJ1xyXG59O1xyXG5cclxuY29uc3QgVGV4dFNpemUgPSB7XHJcblx0UkVHVUxBUjogJ1JFR1VMQVInLFxyXG5cdExBUkdFOiAnTEFSR0UnLFxyXG5cdFNNQUxMOiAnU01BTEwnXHJcbn07XHJcblxyXG5jb25zdCBUaWxlbWFwTGF5ZXIgPSB7XHJcblx0QkFDS0dST1VORDogJ2JhY2tncm91bmQnLFxyXG5cdEZPUkVHUk9VTkQ6ICdmb3JlZ3JvdW5kJyxcclxuXHRPQkpFQ1RTOiAnb2JqZWN0cydcclxufTtcclxuXHJcbmNvbnN0IEVudGl0eVR5cGUgPSB7XHJcblx0RE9PUjogJ0Rvb3InLFxyXG5cdFNBRkU6ICdTYWZlJyxcclxuXHRDSEVTVDogJ0NoZXN0JyxcclxuXHRURVhUOiAnVGV4dCcsXHJcblx0SU5URVJBQ1RJVkVfWk9ORTogJ0ludGVyYWN0aXZlWm9uZSdcclxufTtcclxuXHJcbmNvbnN0IExvYWRlcktleSA9IHtcclxuXHRUSUxFTUFQOiAndGlsZW1hcCcsXHJcblx0VElMRVNFVDogJ3RpbGVzJyxcclxuXHRJVEVNUzogJ2l0ZW1zJyxcclxuXHRVSTogJ3VpJyxcclxuXHRDSEVTVDogJ2NoZXN0JyxcclxuXHRET09SOiAnZG9vcicsXHJcblx0U0FGRTogJ3NhZmUnLFxyXG5cdE1FTlVfSU1BR0U6ICdtZW51LWltYWdlJ1xyXG59O1xyXG5cclxuY29uc3QgVGlsZSA9IHtcclxuXHRTSUdOOiAxNDQsXHJcblx0Q0xPU0VfV0lORE9XOiAyNTgsXHJcblx0T1BFTl9XSU5ET1c6IDIzNSxcclxuXHRDT0ZGSU46IFs3MSwgOTVdLFxyXG5cdERFU1RST1lFRF9LTklHSFQ6IDk2LFxyXG5cdFRPUF9DSEFJUjogMzEyLFxyXG5cdE1JRERMRV9DSEFJUjogMzM2LFxyXG5cdEJPVFRPTV9DSEFJUjogMzYwLFxyXG5cdEhPTEVfSU5fV0FMTDogMjQ5LFxyXG5cdFRPUF9MRUZUX0dBUkdPWUxFOiAyMzIsXHJcblx0VE9QX1JJR0hUX0dBUkdPWUxFOiAyMzMsXHJcblx0Qk9UVE9NX0xFRlRfR0FSR09ZTEU6IDI1NixcclxuXHRCT1RUT01fUklHSFRfR0FSR09ZTEU6IDI1NyxcclxuXHRUT1BfTEVGVF9XQVRFUjogMTAsXHJcblx0VE9QX0NFTlRFUl9XQVRFUjogMTEsXHJcblx0VE9QX1JJR0hUX1dBVEVSOiAxMixcclxuXHRNSURETEVfTEVGVF9XQVRFUjogMzQsXHJcblx0TUlERExFX0NFTlRFUl9XQVRFUjogMzUsXHJcblx0TUlERExFX1JJR0hUX1dBVEVSOiAzNixcclxuXHRCT1RUT01fTEVGVF9XQVRFUjogNTgsXHJcblx0Qk9UVE9NX0NFTlRFUl9XQVRFUjogNTksXHJcblx0Qk9UVE9NX1JJR0hUX1dBVEVSOiA2MCxcclxuXHRESUdHRURfSE9MRTogMzE2LFxyXG5cdFNUQUlSOiAxMjRcclxufTtcclxuXHJcbmNvbnN0IEl0ZW0gPSB7XHJcblx0Qk9PSzogJ2Jvb2snLFxyXG5cdEhBTU1FUjogJ2hhbW1lcicsXHJcblx0UElDS0FYRTogJ3BpY2theGUnLFxyXG5cdEtFWTogJ2tleScsXHJcblx0TUFTVEVSX0tFWTogJ21hc3Rlci1rZXknLFxyXG5cdElDRV9ST0Q6ICdpY2Utcm9kJyxcclxuXHRQT1RJT046ICdwb3Rpb24nLFxyXG5cdFNIT1ZFTDogJ3Nob3ZlbCcsXHJcblx0UklORzogJ3JpbmcnXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSB7XHJcblx0RE9PUl9PUEVOOiAnZG9vci1vcGVuJyxcclxuXHRTQUZFX09QRU46ICdzYWZlLW9wZW4nLFxyXG5cdENIRVNUX09QRU46ICdjaGVzdC1vcGVuJ1xyXG59O1xyXG5cclxuY29uc3QgRnJhbWUgPSB7XHJcblx0TUFTVEVSX0tFWTogNTEsXHJcblx0UElDS0FYRTogODMsXHJcblx0UE9USU9OOiA2MSxcclxuXHRLRVk6IDUwLFxyXG5cdFJJTkc6IDEzXHJcbn07XHJcblxyXG5PYmplY3QuZnJlZXplKFRpbGVtYXBMYXllcik7XHJcbk9iamVjdC5mcmVlemUoQ3VzdG9tUHJvcGVydHkpO1xyXG5PYmplY3QuZnJlZXplKExvYWRlcktleSk7XHJcbk9iamVjdC5mcmVlemUoRW50aXR5VHlwZSk7XHJcbk9iamVjdC5mcmVlemUoVGlsZSk7XHJcbk9iamVjdC5mcmVlemUoSXRlbSk7XHJcbk9iamVjdC5mcmVlemUoQW5pbWF0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShGcmFtZSk7XHJcbk9iamVjdC5mcmVlemUoRGlyZWN0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShBY3Rpb25UeXBlKTtcclxuXHJcbmV4cG9ydCB7XHJcblx0VGlsZW1hcExheWVyLFxyXG5cdEN1c3RvbVByb3BlcnR5LFxyXG5cdExvYWRlcktleSxcclxuXHRFbnRpdHlUeXBlLFxyXG5cdFRpbGUsXHJcblx0SXRlbSxcclxuXHRBbmltYXRpb24sXHJcblx0RnJhbWUsXHJcblx0QWN0aW9uVHlwZSxcclxuXHREaXJlY3Rpb24sXHJcblx0U3Bhd25UeXBlLFxyXG5cdE1vZGFsU2l6ZSxcclxuXHRUZXh0U2l6ZVxyXG59O1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIERpcmVjdGlvbiwgU3Bhd25UeXBlLCBSb3RhdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4uL3V0aWxzL2Fzc2VydC11dGlscyc7XHJcbmltcG9ydCB7IGdldFRpbGVzV2l0aGluV29ybGRYWSwgcmVtb3ZlVGlsZXMsIHJlcGxhY2VUaWxlcywgbW92ZVRpbGVzIH0gZnJvbSAnLi4vdXRpbHMvdGlsZW1hcC11dGlscyc7XHJcbmltcG9ydCB7IHNob3dJbWFnZU1vZGFsLCBzaG93VGV4dE1vZGFsIH0gZnJvbSAnLi4vdXRpbHMvbW9kYWwtdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhbiBJbnRlcmFjdGlvblpvbmUgaW4gdGhlIGVzY2FwZSByb29tXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aXZlWm9uZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xyXG5cdGFjdGlvbiA9IG51bGw7XHJcblx0Y29uc3RyYWludHMgPSBudWxsO1xyXG5cdHNwYXduID0gbnVsbDtcclxuXHRuYXZpZ2F0ZVRvID0gbnVsbDtcclxuXHRuYXZpZ2F0ZVRvU2NlbmUgPSBudWxsO1xyXG5cdGNvbnN0cmFpbnRNZXNzYWdlID0gbnVsbDtcclxuXHRjb25zdHJhaW50VGltZVBlbmFsaXR5ID0gbnVsbDtcclxuXHR0aW1lUGVuYWxpdHkgPSAwO1xyXG5cdHRpbWVQZW5hbGl0eU1lc3NhZ2UgPSBudWxsO1xyXG5cdGF1ZGlvQ2xpcEtleTtcclxuXHRkaXJ0eSA9IGZhbHNlO1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSB7UGhhc2VyLlNjZW5lfSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgem9uZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB6b25lIHggY29vcmRpbmF0ZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB6b25lIHkgY29vcmRpbmF0ZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgem9uZSB3aWR0aFxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgVGhlIHpvbmUgaGVpZ2h0XHJcblx0ICovXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIG5hbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEV4ZWN1dGUgdGhlIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSB1c2VkIG9uIHRoZSB6b25lXHJcblx0ICogQHBhcmFtIHtNYXB9IGRpcnR5T2JqZWN0TWFwIFRoZSBtYXAgb2YgZGlydHkgb2JqZWN0c1xyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVDYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGFjdGlvbiBpcyBjb21wbGV0ZWQuXHJcblx0ICovXHJcblx0ZXhlY3V0ZUFjdGlvbihpdGVtLCBkaXJ0eU9iamVjdE1hcCwgb25Db21wbGV0ZUNhbGxiYWNrKSB7XHJcblx0XHRsZXQgdGlsZXMgPSBudWxsO1xyXG5cclxuXHRcdGlmICh0aGlzLnZhbGlkYXRlKGl0ZW0sIGRpcnR5T2JqZWN0TWFwKSkge1xyXG5cdFx0XHRsZXQgeyB0eXBlLCB2ZWxvY2l0eSwgbmV3VGlsZXMsIGRpcmVjdGlvbiwgdGV4dCwgdGV4dHVyZUtleSwgcmVwZWF0IH0gPSB0aGlzLmFjdGlvbjtcclxuXHJcblx0XHRcdG5ld1RpbGVzID0gbmV3VGlsZXM/LnNwbGl0KCcsJykubWFwKChzKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHMsIDEwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuUkVQTEFDRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0cmVwbGFjZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIG5ld1RpbGVzKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRPR0dMRV9USUxFOlxyXG5cdFx0XHRcdFx0dGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmRpcnR5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJldmlvdXNUaWxlcyA9IHRpbGVzLm1hcCgodCkgPT4gdC5pbmRleCk7XHJcblx0XHRcdFx0XHRcdHJlcGxhY2VUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCBuZXdUaWxlcyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVwbGFjZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIHRoaXMucHJldmlvdXNUaWxlcyk7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJldmlvdXNUaWxlcyA9IG51bGw7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5ERVNUUk9ZX1RJTEU6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRyZW1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLk1PVkVfVElMRTpcclxuXHRcdFx0XHRcdHRpbGVzID0gZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKHRoaXMuc2NlbmUudGlsZU1hcCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdHJlbW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMpO1xyXG5cdFx0XHRcdFx0bW92ZVRpbGVzKHRoaXMuc2NlbmUudGlsZU1hcCwgdGlsZXMsIGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlKGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEFjdGlvblR5cGUuVE9HR0xFX1RJTEVfTU9WRU1FTlQ6XHJcblx0XHRcdFx0XHR0aWxlcyA9IGdldFRpbGVzV2l0aGluV29ybGRYWSh0aGlzLnNjZW5lLnRpbGVNYXAsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZGlydHkpIHtcclxuXHRcdFx0XHRcdFx0cmVtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcyk7XHJcblx0XHRcdFx0XHRcdG1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIHRpbGVzLCBkaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlKGRpcmVjdGlvbiwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IG1vdmVkVGlsZXMgPSBnZXRUaWxlc1dpdGhpbldvcmxkWFkodGhpcy5zY2VuZS50aWxlTWFwLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRyZW1vdmVUaWxlcyh0aGlzLnNjZW5lLnRpbGVNYXAsIG1vdmVkVGlsZXMpO1xyXG5cdFx0XHRcdFx0XHRtb3ZlVGlsZXModGhpcy5zY2VuZS50aWxlTWFwLCB0aWxlcywgdGhpcy5yZXZlcnNlRGlyZWN0aW9uLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0XHRcdHRoaXMubW92ZSh0aGlzLnJldmVyc2VEaXJlY3Rpb24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlNIT1dfVEVYVDpcclxuXHRcdFx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGV4dCk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5TSE9XX0lNQUdFOlxyXG5cdFx0XHRcdFx0c2hvd0ltYWdlTW9kYWwodGhpcy5zY2VuZSwgdGV4dHVyZUtleSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5ERVNUUk9ZOiB7XHJcblx0XHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQWN0aW9uVHlwZS5UVVJOX09OX0xJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnR1cm5PbkxpZ2h0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBBY3Rpb25UeXBlLlRVUk5fT0ZGX0xJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnR1cm5PZmZMaWdodCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnNwYXduKSB7XHJcblx0XHRcdFx0dGhpcy5zcGF3bk9iamVjdCh0aGlzLnNwYXduLCB0eXBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5uYXZpZ2F0ZVRvKSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5jaGFuZ2VSb29tKHRoaXMubmF2aWdhdGVUbyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMubmF2aWdhdGVUb1NjZW5lKSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5zY2VuZS5zdGFydCh0aGlzLm5hdmlnYXRlVG9TY2VuZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMudGltZVBlbmFsaXR5KSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5hZGRUaW1lUGVuYWxpdHkodGhpcy50aW1lUGVuYWxpdHkpO1xyXG5cdFx0XHRcdGlmICh0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGhpcy50aW1lUGVuYWxpdHlNZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuYXVkaW9DbGlwS2V5KSB7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5zb3VuZC5wbGF5KHRoaXMuYXVkaW9DbGlwS2V5KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAob25Db21wbGV0ZUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0b25Db21wbGV0ZUNhbGxiYWNrKHRoaXMuaXNJdGVtVXNlZChpdGVtKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFyZXBlYXQgJiYgdGhpcy5hY3RpdmUpIHtcclxuXHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3Bhd24gYSBpdGVtIG9yIE5QQ1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzcGF3biBUaGUgc3Bhd24gb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25UeXBlIFRoZSBhY3Rpb24gdHlwZVxyXG5cdCAqL1xyXG5cdHNwYXduT2JqZWN0KHNwYXduLCBhY3Rpb25UeXBlKSB7XHJcblx0XHRhc3NlcnQoIXNwYXduLCAnVGhlIHNwYXduIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0c3dpdGNoIChzcGF3bi50eXBlKSB7XHJcblx0XHRcdGNhc2UgU3Bhd25UeXBlLk5QQzpcclxuXHRcdFx0XHRpZiAoYWN0aW9uVHlwZSA9PT0gKEFjdGlvblR5cGUuUkVQTEFDRV9USUxFIHx8IEFjdGlvblR5cGUuVE9HR0xFX1RJTEUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnNwYXduTlBDKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyA1MCwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25OUEModGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFNwYXduVHlwZS5JVEVNOlxyXG5cdFx0XHRcdGlmIChhY3Rpb25UeXBlID09PSAoQWN0aW9uVHlwZS5SRVBMQUNFX1RJTEUgfHwgQWN0aW9uVHlwZS5UT0dHTEVfVElMRSkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25JdGVtKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyA1MCwgdGhpcy5zcGF3bik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NlbmUuc3Bhd25JdGVtKHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIsIHRoaXMuc3Bhd24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0cnVlIGlmIHRoZSBpdGVtIHdhcyB1c2VkLCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGlzSXRlbVVzZWQoaXRlbSkge1xyXG5cdFx0aWYgKHRoaXMuY29uc3RyYWludHMgJiYgaXRlbSkge1xyXG5cdFx0XHRjb25zdCB7IGl0ZW1SZXF1aXJlZCB9ID0gdGhpcy5jb25zdHJhaW50cztcclxuXHRcdFx0aWYgKGl0ZW1SZXF1aXJlZCAmJiBpdGVtPy5uYW1lID09PSBpdGVtUmVxdWlyZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTW92ZSB6b25lIGZvciBnaXZlbiBkaXJlY3Rpb24gYW5kIHZlbG9jaXR5XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRvIG1vdmUgdGhlIHpvbmVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgVGhlIHZlbG9jaXR5IHRvIG1vdmUgdGhlIHpvbmVcclxuXHQgKi9cclxuXHRtb3ZlKGRpcmVjdGlvbiwgdmVsb2NpdHkpIHtcclxuXHRcdGFzc2VydCghZGlyZWN0aW9uLCAnVGhlIGRpcmVjdGlvbiBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG5cdFx0XHRcdHRoaXMueCA9IHRoaXMueCAtIHRoaXMud2lkdGggLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUklHSFQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG5cdFx0XHRcdHRoaXMueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyB2ZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uTEVGVDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEaXJlY3Rpb24uVVA6XHJcblx0XHRcdFx0dGhpcy55ID0gdGhpcy55IC0gdGhpcy5oZWlnaHQgLSB2ZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLnJldmVyc2VEaXJlY3Rpb24gPSBEaXJlY3Rpb24uRE9XTjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuXHRcdFx0XHR0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMucmV2ZXJzZURpcmVjdGlvbiA9IERpcmVjdGlvbi5VUDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBjdXJzb3IgZm9yIHpvbmVcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSXRlbVNlbGVjdGVkXHJcblx0ICovXHJcblx0c2V0Q3Vyc29yKGlzSXRlbVNlbGVjdGVkKSB7XHJcblx0XHRpZiAoaXNJdGVtU2VsZWN0ZWQgJiYgdGhpcy5pbnB1dCkge1xyXG5cdFx0XHR0aGlzLmlucHV0LmN1cnNvciA9ICdncmFiYmluZyc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuaW5wdXQpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWN0aW9uPy50eXBlID09PSBBY3Rpb25UeXBlLlNIT1dfVEVYVCB8fCB0aGlzLmFjdGlvbj8udHlwZSA9PT0gQWN0aW9uVHlwZS5TSE9XX0lNQUdFKSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dC5jdXJzb3IgPSAnem9vbS1pbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dC5jdXJzb3IgPSAncG9pbnRlcic7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbGlkYXRlIHdoZXRoZXIgdGhlIGFjdGlvbiBjYW4gYmUgZXhlY3V0ZWRcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSB1c2Ugd2l0aCB0aGUgem9uZVxyXG5cdCAqIEBwYXJhbSB7TWFwfSBkaXJ0eU9iamVjdE1hcCBUaGUgZGlydHkgb2JqZWN0IG1hcFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHZhbGlkYXRlKGl0ZW0sIGRpcnR5T2JqZWN0TWFwKSB7XHJcblx0XHRpZiAodGhpcy5jb25zdHJhaW50cykge1xyXG5cdFx0XHRjb25zdCB7IGl0ZW1SZXF1aXJlZCwgcHJvbXB0UmVxdWlyZWQsIGRlcGVuZHNPbiB9ID0gdGhpcy5jb25zdHJhaW50cztcclxuXHRcdFx0aWYgKGl0ZW1SZXF1aXJlZCAmJiBpdGVtPy5uYW1lICE9PSBpdGVtUmVxdWlyZWQpIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZUludmFsaWQoKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAocHJvbXB0UmVxdWlyZWQpIHtcclxuXHRcdFx0XHRjb25zdCBhbnN3ZXIgPSB3aW5kb3cucHJvbXB0KHByb21wdFJlcXVpcmVkLnF1ZXN0aW9uKTtcclxuXHRcdFx0XHRpZiAoYW5zd2VyICYmIGFuc3dlci50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcm9tcHRSZXF1aXJlZC5hbnN3ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMuaGFuZGxlSW52YWxpZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGVwZW5kc09uKSB7XHJcblx0XHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0XHRkZXBlbmRzT24/LnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFkaXJ0eU9iamVjdE1hcC5oYXMobmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoIXZhbGlkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmhhbmRsZUludmFsaWQoKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW52YWxpZCgpIHtcclxuXHRcdGlmICh0aGlzLmNvbnN0cmFpbnRUaW1lUGVuYWxpdHkpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5hZGRUaW1lUGVuYWxpdHkodGhpcy5jb25zdHJhaW50VGltZVBlbmFsaXR5KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNvbnN0cmFpbnRNZXNzYWdlKSB7XHJcblx0XHRcdHNob3dUZXh0TW9kYWwodGhpcy5zY2VuZSwgdGhpcy5jb25zdHJhaW50TWVzc2FnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBuYW1lXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIG5hbWVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZVxyXG5cdCAqL1xyXG5cdHNldE5hbWUobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB6b25lIGlzIGRpcnR5XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNEaXJ0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmRpcnR5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHdoZXRoZXIgdGhlIHpvbmUgaXMgZGlydHlcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGRpcnR5IFdoZXRoZXIgem9uZSBpcyBkaXJ0eVxyXG5cdCAqL1xyXG5cdHNldERpcnR5KGRpcnR5KSB7XHJcblx0XHR0aGlzLmRpcnR5ID0gZGlydHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBhY3Rpb24gb2JqZWN0XHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBUaGUgYWN0aW9uIG9iamVjdFxyXG5cdCAqL1xyXG5cdHNldEFjdGlvbihhY3Rpb24pIHtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgYWN0aW9uIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XHJcblx0ICovXHJcblx0Z2V0QWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgY29uc3RyYWludHMgb2JqZWN0XHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnN0cmFpbnRzIFRoZSBjb25zdHJhaW50IG9iamVjdFxyXG5cdCAqL1xyXG5cdHNldENvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XHJcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBjb25zdHJhaW50cyBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdGdldENvbnN0cmFpbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RyYWludHM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBzcGF3biBvYmplY3RcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gc3Bhd24gVGhlIHNwYXduIG9iamVjdFxyXG5cdCAqL1xyXG5cdHNldFNwYXduKHNwYXduKSB7XHJcblx0XHR0aGlzLnNwYXduID0gc3Bhd247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBzcGF3biBvYmplY3RcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdGdldFNwYXduKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3Bhd247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSByb29tIHdoZXJlIHRvIG5hdmlnYXRlIG5leHRcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmF2aWdhdGVUbyBUaGUgcm9vbSB3aGVyZSB0byBuYXZpZ2F0ZSBuZXh0XHJcblx0ICovXHJcblx0c2V0TmF2aWdhdGVUbyhuYXZpZ2F0ZVRvKSB7XHJcblx0XHR0aGlzLm5hdmlnYXRlVG8gPSBuYXZpZ2F0ZVRvO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgcm9vbSB3aGVyZSB0byBuYXZpZ2F0ZSBuZXh0XHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXROYXZpZ2F0ZVRvKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2aWdhdGVUbztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIG5hdmlnYXRlVG9TY2VuZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYXZpZ2F0ZVRvU2NlbmVcclxuXHQgKi9cclxuXHRzZXROYXZpZ2F0ZVRvU2NlbmUobmF2aWdhdGVUb1NjZW5lKSB7XHJcblx0XHR0aGlzLm5hdmlnYXRlVG9TY2VuZSA9IG5hdmlnYXRlVG9TY2VuZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIG5hdmlnYXRlVG9TY2VuZVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0TmF2aWdhdGVUb1NjZW5lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2aWdhdGVUb1NjZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgY29uc3RyYWludCBtZXNzYWdlXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnN0cmFpbnRNZXNzYWdlIFRoZSBjb25zdHJhaW50IG1lc3NhZ2VcclxuXHQgKi9cclxuXHRzZXRDb25zdHJhaW50TWVzc2FnZShjb25zdHJhaW50TWVzc2FnZSkge1xyXG5cdFx0dGhpcy5jb25zdHJhaW50TWVzc2FnZSA9IGNvbnN0cmFpbnRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY29uc3RyYWludCBtZXNzYWdlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRDb25zdHJhaW50TWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cmFpbnRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgY29uc3RyYWludCB0aW1lIHBlbmFsaXR5XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvbnN0cmFpbnRUaW1lUGVuYWxpdHlcclxuXHQgKi9cclxuXHRzZXRDb25zdHJhaW50VGltZVBlbmFsaXR5KGNvbnN0cmFpbnRUaW1lUGVuYWxpdHkpIHtcclxuXHRcdHRoaXMuY29uc3RyYWludFRpbWVQZW5hbGl0eSA9IGNvbnN0cmFpbnRUaW1lUGVuYWxpdHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBjb25zdHJhaW50IHRpbWUgcGVuYWxpdHlcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGdldENvbnN0cmFpbnRUaW1lUGVuYWxpdHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJhaW50VGltZVBlbmFsaXR5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgdGltZSBwZW5hbGl0eVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lUGVuYWxpdHkgVGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKi9cclxuXHRzZXRUaW1lUGVuYWxpdHkodGltZVBlbmFsaXR5KSB7XHJcblx0XHR0aGlzLnRpbWVQZW5hbGl0eSA9IHRpbWVQZW5hbGl0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGdldFRpbWVQZW5hbGl0eSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRpbWVQZW5hbGl0eTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHRpbWUgcGVuYWxpdHkgbWVzc2FnZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lUGVuYWxpdHlNZXNzYWdlIFRoZSB0aW1lIHBlbmFsaXR5IG1lc3NzYWdlXHJcblx0ICovXHJcblx0c2V0VGltZVBlbmFsaXR5TWVzc2FnZSh0aW1lUGVuYWxpdHlNZXNzYWdlKSB7XHJcblx0XHR0aGlzLnRpbWVQZW5hbGl0eU1lc3NhZ2UgPSB0aW1lUGVuYWxpdHlNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgdGltZSBwZW5hbGl0eSBtZXNzYWdlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRUaW1lUGVuYWxpdHlNZXNzYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGltZVBlbmFsaXR5TWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGF1ZGlvIGNsaXAga2V5XHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGF1ZGlvQ2xpcEtleSBUaGUgYXVkaW8gY2xpcCBrZXlcclxuXHQgKi9cclxuXHRzZXRBdWRpb0NsaXBLZXkoYXVkaW9DbGlwS2V5KSB7XHJcblx0XHR0aGlzLmF1ZGlvQ2xpcEtleSA9IGF1ZGlvQ2xpcEtleTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGF1ZGlvIGNsaXAga2V5XHJcblx0ICogQHJldHVybnMge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRBdWRpb0NsaXBLZXkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hdWRpb0NsaXBLZXk7XHJcblx0fVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYW4gaW52YWxpZCBhcmd1bWVudCBlcnJvclxyXG4gKiBAZXh0ZW5kcyBFcnJvclxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZSBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdJbnZhbGlkQXJndW1lbnRFcnJvcidcclxuICAgIH1cclxufSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL3NjZW5lcy9HYW1lJztcclxuaW1wb3J0IEdhbWVPdmVyU2NlbmUgIGZyb20gJy4vc2NlbmVzL0dhbWVPdmVyJztcclxuaW1wb3J0IFdpblNjZW5lIGZyb20gJy4vc2NlbmVzL1dpbic7XHJcbmltcG9ydCBTcGxhc2hTY2VuZSBmcm9tICcuL3NjZW5lcy9NZW51JztcclxuaW1wb3J0IExvYWRpbmdTY2VuZSBmcm9tICcuL3NjZW5lcy9Mb2FkaW5nJztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHR0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHRzY2FsZToge1xyXG5cdFx0bW9kZTogUGhhc2VyLlNjYWxlLkZJVCxcclxuICAgICAgICBhdXRvQ2VudGVyOiBQaGFzZXIuU2NhbGUuQ0VOVEVSX0JPVEgsXHJcblx0XHR3aWR0aDogMTAyNCxcclxuXHRcdGhlaWdodDogNzY4XHJcblx0fSxcclxuXHRwaHlzaWNzOiB7XHJcblx0XHRkZWZhdWx0OiAnYXJjYWRlJyxcclxuXHRcdGFyY2FkZToge1xyXG5cdFx0XHRkZWJ1ZzogdHJ1ZSxcclxuXHRcdFx0Z3Jhdml0eTogeyB5OiAyMDAgfVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2NlbmU6IFtMb2FkaW5nU2NlbmUsIFNwbGFzaFNjZW5lLCBHYW1lU2NlbmUsIEdhbWVPdmVyU2NlbmUsIFdpblNjZW5lXVxyXG59O1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBJbnRlcmFjdGl2ZVpvbmUgZnJvbSAnLi4vZW50aXRpZXMvSW50ZXJhY3RpdmVab25lJztcclxuaW1wb3J0IHsgc2hvd1RleHRNb2RhbCwgc2hvd0l0ZW1Nb2RhbCB9IGZyb20gJy4uL3V0aWxzL21vZGFsLXV0aWxzJztcclxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi4vdXRpbHMvYXNzZXJ0LXV0aWxzJztcclxuaW1wb3J0IHsgYWRkVGV4dCB9IGZyb20gJy4uL3V0aWxzL3RleHQtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUHJvcGVydHksIFRpbGVtYXBMYXllciwgRW50aXR5VHlwZSwgVGV4dFNpemUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgVFJBTlNJVElPTl9ERUxBWSA9IDUwMDtcclxuY29uc3QgTlVNQkVSX09GX01JTlVURVMgPSA2MDtcclxuY29uc3QgTlVNQkVSX09GX1NFQ09ORFMgPSA2MDtcclxuY29uc3QgTlVNQkVSX09GX0hPVVJTID0gMjQ7XHJcbmNvbnN0IE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgPSAxMDAwO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgdGhlIGdhbWUgc2NlbmUuXHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAyNVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHR0aWxlTWFwID0gbnVsbDtcclxuXHR6b25lcyA9IFtdO1xyXG5cdGl0ZW1zID0gW107XHJcblx0bnBjcyA9IFtdO1xyXG5cdHRleHRzID0gW107XHJcblx0aXRlbUltYWdlcyA9IFtdO1xyXG5cdHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0c2VsZWN0ZWRSZWN0YW5nbGUgPSBudWxsO1xyXG5cdHJvb21OYW1lID0gbnVsbDtcclxuXHRkaXJ0eU9iamVjdE1hcCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignZ2FtZScpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGhvb2sgdGhhdCBpcyBydW4gb25jZSB3aGVuIHRoZSBzY2VuZSBzdGFydHNcclxuXHQgKi9cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmFkZFJvb21PdmVybGF5KCk7XHJcblx0XHR0aGlzLmxvYWRSb29tKCdyb29tLW9uZScpO1xyXG5cdFx0dGhpcy5hZGRIdWQoKTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lcigxKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBvdmVybGF5IG92ZXIgcm9vbSB0byBjb250cm9sIHJvb20gbGlnaHRcclxuXHQgKi9cclxuXHRhZGRSb29tT3ZlcmxheSgpIHtcclxuXHRcdHRoaXMucm9vbU92ZXJsYXkgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW1lcmFzLm1haW4ud2lkdGgsIHRoaXMuY2FtZXJhcy5tYWluLmhlaWdodCwgMHgwMDAwMDAsIDAuNSk7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldFZpc2libGUoZmFsc2UpO1xyXG5cdFx0dGhpcy5yb29tT3ZlcmxheS5zZXRPcmlnaW4oMCk7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldERlcHRoKDEwMDApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVHVybiBvZmYgbGlnaHRcclxuXHQgKi9cclxuXHR0dXJuT2ZmTGlnaHQoKSB7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldFZpc2libGUodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUdXJuIG9uIGxpZ2h0XHJcblx0ICovXHJcblx0dHVybk9uTGlnaHQoKSB7XHJcblx0XHR0aGlzLnJvb21PdmVybGF5LnNldFZpc2libGUoZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIEhVRCB0byB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqL1xyXG5cdGFkZEh1ZCgpIHtcclxuXHRcdGFkZFRleHQodGhpcywgOTI1LCAyMCwgJ0l0ZW1zJywgVGV4dFNpemUuUkVHVUxBUik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgdGhlIEhVRFxyXG5cdCAqL1xyXG5cdHVwZGF0ZUh1ZCgpIHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlICYmICF0aGlzLnNlbGVjdGVkSXRlbSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkUmVjdGFuZ2xlLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLml0ZW1JbWFnZXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1JbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLml0ZW1JbWFnZXNbaV0uZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaXRlbUltYWdlID0gdGhpcy5hZGQuaW1hZ2UoOTUwLCBpICogNTAgKyA4MCwgdGhpcy5pdGVtc1tpXS50ZXh0dXJlS2V5LCB0aGlzLml0ZW1zW2ldLnRleHR1cmVGcmFtZSk7XHJcblx0XHRcdGl0ZW1JbWFnZS5zZXRBbHBoYSgwKTtcclxuXHRcdFx0aXRlbUltYWdlLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0XHRjdXJzb3I6ICdncmFiJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aXRlbUltYWdlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJlY3RhbmdsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLnBvaW50ZXJJdGVtKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNldEN1cnNvcih0cnVlKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZSA9IHRoaXMuYWRkLnJlY3RhbmdsZShpdGVtSW1hZ2UueCwgaXRlbUltYWdlLnksIDUwLCA1MCk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZS5zZXRTdHJva2VTdHlsZSgzLCAweGZmZmZmZik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnR3ZWVucy5hZGQoe1xyXG5cdFx0XHRcdHRhcmdldHM6IGl0ZW1JbWFnZSxcclxuXHRcdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwLFxyXG5cdFx0XHRcdHJlcGVhdDogMCxcclxuXHRcdFx0XHR5b3lvOiBmYWxzZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5pdGVtSW1hZ2VzLnB1c2goaXRlbUltYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBjdXJzb3JcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSXRlbVNlbGVjdGVkIFdoZXRoZXIgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQuXHJcblx0ICovXHJcblx0c2V0Q3Vyc29yKGlzSXRlbVNlbGVjdGVkKSB7XHJcblx0XHRpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcclxuXHRcdFx0dGhpcy5pbnB1dC5zZXREZWZhdWx0Q3Vyc29yKCdncmFiYmluZycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbnB1dC5zZXREZWZhdWx0Q3Vyc29yKCdkZWZhdWx0Jyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnpvbmVzLmZvckVhY2goKHpvbmUpID0+IHtcclxuXHRcdFx0em9uZS5zZXRDdXJzb3IoaXNJdGVtU2VsZWN0ZWQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBMb2FkIHJvb20gb24gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcm9vbU5hbWUgVGhlIHJvb20gbmFtZVxyXG5cdCAqL1xyXG5cdGxvYWRSb29tKHJvb21OYW1lKSB7XHJcblx0XHRhc3NlcnQoIXJvb21OYW1lLCAnVGhlIHJvb21OYW1lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0dGhpcy5yb29tTmFtZSA9IHJvb21OYW1lO1xyXG5cdFx0dGhpcy5kaXJ0eU9iamVjdE1hcCA9IG5ldyBNYXAoKTtcclxuXHRcdHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbihUUkFOU0lUSU9OX0RFTEFZLCAwLCAwLCAwKTtcclxuXHRcdHRoaXMudGlsZU1hcCA9IHRoaXMuY3JlYXRlVGlsZU1hcChyb29tTmFtZSk7XHJcblxyXG5cdFx0Y29uc3QgY2FzdGxlVGlsZXMgPSB0aGlzLmFkZFRpbGVTZXQodGhpcy50aWxlTWFwLCAnY2FzdGxlLXRpbGVzJywgJ2Nhc3RsZS10aWxlcycpO1xyXG5cdFx0Y29uc3QgY3JlZXB5VGlsZXMgPSB0aGlzLmFkZFRpbGVTZXQodGhpcy50aWxlTWFwLCAnY3JlZXB5LXRpbGVzJywgJ2NyZWVweS10aWxlcycpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVycyA9IHRoaXMuYWRkVGlsZVNldCh0aGlzLnRpbGVNYXAsICdjb250YWluZXJzJywgJ2NvbnRhaW5lcnMnKTtcclxuXHRcdGNvbnN0IHsgb2JqZWN0c0xheWVyLCBmb3JlZ3JvdW5kTGF5ZXIgfSA9IHRoaXMuZ2V0VGlsZU1hcExheWVycyh0aGlzLnRpbGVNYXAsIFtjcmVlcHlUaWxlcywgY2FzdGxlVGlsZXMsIGNvbnRhaW5lcnNdKTtcclxuXHJcblx0XHR0aGlzLmFkZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcik7XHJcblxyXG5cdFx0Y29uc3Qgc2NyZWVuVGV4dCA9IHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGhpcy50aWxlTWFwLCBDdXN0b21Qcm9wZXJ0eS5TQ1JFRU5fVEVYVCk7XHJcblx0XHRjb25zdCBtb2RhbFNpemUgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRoaXMudGlsZU1hcCwgQ3VzdG9tUHJvcGVydHkuTU9EQUxfU0laRSk7XHJcblx0XHRzaG93VGV4dE1vZGFsKHRoaXMsIHNjcmVlblRleHQsIG1vZGFsU2l6ZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGFuZ2Ugcm9vbSBsb2FkZWQgb24gdGhlIGdhbWUgc2NlbmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcm9vbU5hbWUgVGhlIGdhbWUgc2NlbmUuXHJcblx0ICovXHJcblx0Y2hhbmdlUm9vbShyb29tTmFtZSkge1xyXG5cdFx0YXNzZXJ0KCFyb29tTmFtZSwgJ1RoZSByb29tTmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoVFJBTlNJVElPTl9ERUxBWSwgMCwgMCwgMCwgKGNhbWVyYSwgcHJvZ3Jlc3MpID0+IHtcclxuXHRcdFx0aWYgKHByb2dyZXNzID09PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5yZXNldFJvb20oKTtcclxuXHRcdFx0XHR0aGlzLmxvYWRSb29tKHJvb21OYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCByb29tIGJ5IGRlc3Ryb3lpbmcgcm9vbSBvYmplY3RzLlxyXG5cdCAqL1xyXG5cdHJlc2V0Um9vbSgpIHtcclxuXHRcdHRoaXMudHVybk9uTGlnaHQoKTtcclxuXHRcdHRoaXMuem9uZXMuZm9yRWFjaCgoem9uZSkgPT4ge1xyXG5cdFx0XHR6b25lLmRlc3Ryb3koKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ucGNzLmZvckVhY2goKG5wYykgPT4ge1xyXG5cdFx0XHRucGMuZGVzdHJveSgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcclxuXHRcdFx0dGV4dC5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlTWFwS2V5IFRoZSBrZXkgb2YgdGhlIHRpbGUgbWFwLlxyXG5cdCAqIEByZXR1cm5zIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH1cclxuXHQgKi9cclxuXHRjcmVhdGVUaWxlTWFwKHRpbGVNYXBLZXkpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcEtleSwgJ1RoZSB0aWxlTWFwS2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXMubWFrZS50aWxlbWFwKHsga2V5OiB0aWxlTWFwS2V5IH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIHRpbGUgc2V0IGltYWdlIHRvIHRoZSBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFRoZSB0aWxlIG1hcFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlU2V0S2V5IFRoZSB0aWxlIHNldCBrZXlcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VUZXh0dXJlS2V5IFRoZSBpbWFnZSB0ZXh0dXJlIGtleVxyXG5cdCAqL1xyXG5cdGFkZFRpbGVTZXQodGlsZU1hcCwgdGlsZVNldEtleSwgaW1hZ2VUZXh0dXJlS2V5KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghdGlsZVNldEtleSwgJ1RoZSB0aWxlU2V0S2V5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFpbWFnZVRleHR1cmVLZXksICdUaGUgdGlsZVNldFRleHR1cmVLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRyZXR1cm4gdGlsZU1hcC5hZGRUaWxlc2V0SW1hZ2UodGlsZVNldEtleSwgaW1hZ2VUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRpbGUgbWFwIGxheWVycyBhc3NvY2lhdGVkIHdpdGggdGhlIHRpbGUgbWFwXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBUaGUgdGlsZSBtYXBcclxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWxlU2V0c1xyXG5cdCAqL1xyXG5cdGdldFRpbGVNYXBMYXllcnModGlsZU1hcCwgdGlsZVNldHMpIHtcclxuXHRcdGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCF0aWxlU2V0cywgJ1RoZSB0aWxlU2V0cyBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IGJhY2tncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkJBQ0tHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVNYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVTZXRzKTtcclxuXHRcdGNvbnN0IG9iamVjdHNMYXllciA9IHRpbGVNYXAuZ2V0T2JqZWN0TGF5ZXIoVGlsZW1hcExheWVyLk9CSkVDVFMpO1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZExheWVyLCBmb3JlZ3JvdW5kTGF5ZXIsIG9iamVjdHNMYXllciB9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIFRpbGUgbWFwIG9iamVjdHMgdG8gdGhlIGdhbWUgc2NlbmUuXHJcblx0ICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuT2JqZWN0TGF5ZXJ9IG9iamVjdHNMYXllciBUaGUgb2JqZWN0cyBsYXllclxyXG5cdCAqL1xyXG5cdGFkZFRpbGVNYXBPYmplY3RzKG9iamVjdHNMYXllcikge1xyXG5cdFx0YXNzZXJ0KCFvYmplY3RzTGF5ZXIsICdUaGUgb2JqZWN0c0xheWVyIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgdGlsZU1hcE9iamVjdHMgPSBvYmplY3RzTGF5ZXIub2JqZWN0cztcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlTWFwT2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRzd2l0Y2ggKHRpbGVNYXBPYmplY3RzW2ldLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEVudGl0eVR5cGUuSU5URVJBQ1RJVkVfWk9ORTpcclxuXHRcdFx0XHRcdHRoaXMuem9uZXMucHVzaCh0aGlzLmFkZEludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0c1tpXSkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBFbnRpdHlUeXBlLlRFWFQ6XHJcblx0XHRcdFx0XHR0aGlzLmFkZFRleHQodGlsZU1hcE9iamVjdHNbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgY3VzdG9tIHByb3BlcnR5IGZyb20gYSB0aWxlIG1hcCBvYmplY3RcclxuXHQgKiBAcGFyYW0geyp9IHRpbGVNYXBPYmplY3QgVGhlIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7Kn0gcHJvcGVydHlOYW1lIFRoZSBwcm9wZXJ0eSBuYW1lXHJcblx0ICovXHJcblx0Z2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgcHJvcGVydHlOYW1lKSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghcHJvcGVydHlOYW1lLCAnVGhlIHByb3BlcnR5TmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGxldCBwcm9wZXJ0eSA9IG51bGw7XHJcblx0XHRpZiAodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0XHRwcm9wZXJ0eSA9IHRpbGVNYXBPYmplY3QucHJvcGVydGllcy5maW5kKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwcm9wZXJ0eT8udmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgaW50ZXJhY3RpdmUgem9uZSBvYmplY3QgdG8gdGhlIGdhbWUgc2NlbmUsXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHRpbGVNYXBPYmplY3QgVGhlIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqL1xyXG5cdGFkZEludGVyYWN0aXZlWm9uZSh0aWxlTWFwT2JqZWN0KSB7XHJcblx0XHRhc3NlcnQoIXRpbGVNYXBPYmplY3QsICdUaGUgdGlsZU1hcE9iamVjdCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGNvbnN0IHpvbmUgPSBuZXcgSW50ZXJhY3RpdmVab25lKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRpbGVNYXBPYmplY3QueCxcclxuXHRcdFx0dGlsZU1hcE9iamVjdC55LFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LndpZHRoLFxyXG5cdFx0XHR0aWxlTWFwT2JqZWN0LmhlaWdodFxyXG5cdFx0KTtcclxuXHRcdHpvbmUuc2V0QWN0aW9uKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQUNUSU9OKSk7XHJcblx0XHR6b25lLnNldENvbnN0cmFpbnRzKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQ09OU1RSQUlOVFMpKTtcclxuXHRcdHpvbmUuc2V0Q29uc3RyYWludE1lc3NhZ2UodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT05TVFJBSU5UX01FU1NBR0UpKTtcclxuXHRcdHpvbmUuc2V0Q29uc3RyYWludFRpbWVQZW5hbGl0eSh0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkNPTlNUUkFJTlRfVElNRV9QRU5BTElUWSkpO1xyXG5cdFx0em9uZS5zZXROYXZpZ2F0ZVRvKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkFWSUdBVEVfVE8pKTtcclxuXHRcdHpvbmUuc2V0TmF2aWdhdGVUb1NjZW5lKHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTkFWSUdBVEVfVE9fU0NFTkUpKTtcclxuXHRcdHpvbmUuc2V0U3Bhd24odGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTikpO1xyXG5cdFx0em9uZS5zZXRUaW1lUGVuYWxpdHkodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5USU1FX1BFTkFMSVRZKSk7XHJcblx0XHR6b25lLnNldFRpbWVQZW5hbGl0eU1lc3NhZ2UodGhpcy5nZXRDdXN0b21Qcm9wZXJ0eSh0aWxlTWFwT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5USU1FX1BFTkFMSVRZX01FU1NBR0UpKTtcclxuXHRcdHpvbmUuc2V0QXVkaW9DbGlwS2V5KHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkodGlsZU1hcE9iamVjdCwgQ3VzdG9tUHJvcGVydHkuQVVESU9fQ0xJUF9LRVkpKTtcclxuXHRcdHpvbmUuc2V0Q3Vyc29yKGZhbHNlKTtcclxuXHJcblx0XHRjb25zdCBldmVudHMgPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkVWRU5UUyk7XHJcblxyXG5cdFx0aWYgKGV2ZW50cykge1xyXG5cdFx0XHRjb25zdCB7IGxpc3RlblRvLCBlbWl0IH0gPSB0aGlzLmdldEN1c3RvbVByb3BlcnR5KHRpbGVNYXBPYmplY3QsIEN1c3RvbVByb3BlcnR5LkVWRU5UUyk7XHJcblxyXG5cdFx0XHRpZiAobGlzdGVuVG8pIHtcclxuXHRcdFx0XHR0aGlzLmV2ZW50cy5vbihsaXN0ZW5UbywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh6b25lLmlzRGlydHkoKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuc2V0KHpvbmUubmFtZSwgem9uZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5kZWxldGUoem9uZS5uYW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0em9uZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0XHR6b25lLmV4ZWN1dGVBY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW0sIHRoaXMuZGlydHlPYmplY3RNYXAsIChpdGVtVXNlZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbVVzZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZEl0ZW0uc2luZ2xlVXNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtPy5uYW1lID09PSB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEN1cnNvcihmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUh1ZCgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoem9uZS5pc0RpcnR5KCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldCh6b25lLm5hbWUsIHpvbmUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlydHlPYmplY3RNYXAuZGVsZXRlKHpvbmUubmFtZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGVtaXQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGVtaXQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0em9uZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0em9uZS5leGVjdXRlQWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtLCB0aGlzLmRpcnR5T2JqZWN0TWFwLCAoaXRlbVVzZWQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtVXNlZCkge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZEl0ZW0uc2luZ2xlVXNlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbT8ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRDdXJzb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlSHVkKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh6b25lLmlzRGlydHkoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpcnR5T2JqZWN0TWFwLnNldCh6b25lLm5hbWUsIHpvbmUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXJ0eU9iamVjdE1hcC5kZWxldGUoem9uZS5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gem9uZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCB0ZXh0IHRvIHRoZSBnYW1lIHNjZW5lXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IHRpbGVNYXBPYmplY3QgVGhlIHRpbGUgbWFwIG9iamVjdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGFkZFRleHQodGlsZU1hcE9iamVjdCkge1xyXG5cdFx0YXNzZXJ0KCF0aWxlTWFwT2JqZWN0LCAnVGhlIHRpbGVNYXBPYmplY3QgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRjb25zdCB7IHgsIHksIHRleHQgfSA9IHRpbGVNYXBPYmplY3Q7XHJcblx0XHRjb25zdCB7IGNvbG9yLCBmb250ZmFtaWx5LCBoYWxpZ24sIHBpeGVsc2l6ZSB9ID0gdGV4dDtcclxuXHRcdHJldHVybiB0aGlzLmFkZC50ZXh0KHgsIHksIHRleHQudGV4dCwge1xyXG5cdFx0XHRmb250RmFtaWx5OiBmb250ZmFtaWx5LFxyXG5cdFx0XHRmb250U2l6ZTogYCR7cGl4ZWxzaXplfXB4YCxcclxuXHRcdFx0ZmlsbDogY29sb3IsXHJcblx0XHRcdGFsaWduOiBoYWxpZ25cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3Bhd24gaXRlbSBvbiB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuXHQgKi9cclxuXHRzcGF3bkl0ZW0oeCwgeSwgaXRlbSkge1xyXG5cdFx0YXNzZXJ0KCF4LCAnVGhlIHggaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRhc3NlcnQoIXksICdUaGUgeSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCghaXRlbSwgJ1RoZSBpdGVtIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgaXRlbUltYWdlID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgaXRlbS50ZXh0dXJlS2V5LCBpdGVtLnRleHR1cmVGcmFtZSk7XHJcblx0XHRpdGVtSW1hZ2Uuc2V0QWxwaGEoMCk7XHJcblx0XHRpdGVtSW1hZ2Uuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0XHRjdXJzb3I6ICdncmFiJ1xyXG5cdFx0fSk7XHJcblx0XHRpdGVtSW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNvdW5kLnBsYXkoJ2dvdC1pdGVtLWF1ZGlvJywge1xyXG5cdFx0XHRcdHZvbHVtZTogMC4zXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpdGVtSW1hZ2UuZGVzdHJveSgpOyBcclxuXHRcdFx0aWYgKHRoaXMucG9pbnRlckl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR0aGlzLnBvaW50ZXJJdGVtID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRzaG93SXRlbU1vZGFsKHRoaXMsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0udGV4dHVyZUtleSwgaXRlbS50ZXh0dXJlRnJhbWUsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHdlZW5zLmFkZCh7XHJcblx0XHRcdHRhcmdldHM6IGl0ZW1JbWFnZSxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0XHRkdXJhdGlvbjogMjAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwYXduIE5QQyBvbiB0aGUgZ2FtZSBzY2VuZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgcG9zaXRpb25cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gbnBjIFRoZSBucGMgb2JqZWN0XHJcblx0ICovXHJcblx0c3Bhd25OUEMoeCwgeSwgbnBjKSB7XHJcblx0XHRhc3NlcnQoIXgsICdUaGUgeCBpcyB1bmRlZmluZWQnKTtcclxuXHRcdGFzc2VydCgheSwgJ1RoZSB5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0YXNzZXJ0KCFucGMsICdUaGUgbnBjIGlzIHVuZGVmaW5lZCcpO1xyXG5cdFx0Y29uc3QgbnBjU3ByaXRlID0gdGhpcy5hZGQuc3ByaXRlKHgsIHksIG5wYy50ZXh0dXJlS2V5LCBucGMudGV4dHVyZUZyYW1lKTtcclxuXHRcdG5wY1Nwcml0ZS5zZXRTY2FsZSgyKTtcclxuXHRcdG5wY1Nwcml0ZS5zZXRBbHBoYSgwKTtcclxuXHRcdG5wY1Nwcml0ZS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0bnBjU3ByaXRlLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0c2hvd1RleHRNb2RhbCh0aGlzLCBucGMuZGVzY3JpcHRpb24pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm5wY3MucHVzaChucGNTcHJpdGUpO1xyXG5cdFx0dGhpcy50d2VlbnMuYWRkKHtcclxuXHRcdFx0dGFyZ2V0czogbnBjU3ByaXRlLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0ZWFzZTogJ0xpbmVhcicsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0cnVlIGlmIGdpdmVuIGl0ZW0gbmFtZSBpcyBzZWxlY3RlZFxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtTmFtZSBUaGUgaXRlbSBuYW1lXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNJdGVtU2VsZWN0ZWQoaXRlbU5hbWUpIHtcclxuXHRcdGFzc2VydCghaXRlbU5hbWUsICdUaGUgbmFtZSBpcyB1bmRlZmluZWQnKTtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbT8ubmFtZSA9PT0gaXRlbU5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdGFydHMgdGhlIHRpbWVyXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mSG91cnMgVGhlIG51bWJlciBvZiBob3Vyc1xyXG5cdCAqL1xyXG5cdHN0YXJ0VGltZXIobnVtYmVyT2ZIb3Vycykge1xyXG5cdFx0YXNzZXJ0KCFudW1iZXJPZkhvdXJzLCAnVGhlIG51bWJlck9mSG91cnMgaXMgdW5kZWZpbmVkJyk7XHJcblx0XHRpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcblx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShub3cgKyBudW1iZXJPZkhvdXJzICogTlVNQkVSX09GX01JTlVURVMgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMpLmdldFRpbWUoKTtcclxuXHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdHRoaXMudGltZVJlbWFpbmluZyA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdztcclxuXHRcdFx0XHRpZiAobm93ID49IHRoaXMuY291bnREb3duRGF0ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNUaW1lRWxhcHNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgdGltZSBwZW5hbGl0eVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lUGVuYWxpdHkgVGhlIHRpbWUgcGVuYWxpdHlcclxuXHQgKi9cclxuXHRhZGRUaW1lUGVuYWxpdHkodGltZVBlbmFsaXR5KSB7XHJcblx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSh0aGlzLmNvdW50RG93bkRhdGUgLSB0aW1lUGVuYWxpdHkgKiBOVU1CRVJfT0ZfU0VDT05EUyAqIE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHRoZSB0aW1lIG9uIHRoZSBnYW1lIHNjZW5lLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVRpbWUoKSB7XHJcblx0XHRpZiAodGhpcy50aW1lVGV4dCkge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGhvdXJzUmVtYWluaW5nID0gTWF0aC5mbG9vcihcclxuXHRcdFx0KHRoaXMudGltZVJlbWFpbmluZyAlIChOVU1CRVJfT0ZfTUlMTElTRUNPTkRTICogTlVNQkVSX09GX1NFQ09ORFMgKiBOVU1CRVJfT0ZfTUlOVVRFUyAqIE5VTUJFUl9PRl9IT1VSUykpIC9cclxuXHRcdFx0XHQoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTlVURVMpXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgbWludXRlc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoXHJcblx0XHRcdCh0aGlzLnRpbWVSZW1haW5pbmcgJSAoTlVNQkVSX09GX01JTExJU0VDT05EUyAqIE5VTUJFUl9PRl9TRUNPTkRTICogTlVNQkVSX09GX01JTlVURVMpKSAvXHJcblx0XHRcdFx0KE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUylcclxuXHRcdCk7XHJcblx0XHRjb25zdCBzZWNvbmRzUmVtYWluaW5nID0gTWF0aC5mbG9vcigodGhpcy50aW1lUmVtYWluaW5nICUgKE5VTUJFUl9PRl9NSUxMSVNFQ09ORFMgKiBOVU1CRVJfT0ZfU0VDT05EUykpIC8gTlVNQkVSX09GX01JTExJU0VDT05EUyk7XHJcblx0XHRpZiAodGhpcy50aW1lUmVtYWluaW5nKSB7XHJcblx0XHRcdHRoaXMudGltZVRleHQgPSBhZGRUZXh0KHRoaXMsIDkxNSwgNzMwLCBgJHtob3Vyc1JlbWFpbmluZ306JHttaW51dGVzUmVtYWluaW5nfToke3NlY29uZHNSZW1haW5pbmd9YCwgVGV4dFNpemUuU01BTEwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIGhvb2sgdGhhdCBydW5zIGV2ZXJ5IGN5Y2xlLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMudXBkYXRlVGltZSgpO1xyXG5cdFx0aWYgKHRoaXMuaXNUaW1lRWxhcHNlZCkge1xyXG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdnYW1lb3ZlcicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRJdGVtICYmICF0aGlzLnBvaW50ZXJJdGVtKSB7XHJcblx0XHRcdGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyO1xyXG5cdFx0XHRjb25zdCB7IHRleHR1cmVLZXksIHRleHR1cmVGcmFtZSB9ID0gdGhpcy5zZWxlY3RlZEl0ZW07XHJcblx0XHRcdHRoaXMucG9pbnRlckl0ZW0gPSB0aGlzLmFkZC5pbWFnZSh4LCB5LCB0ZXh0dXJlS2V5LCB0ZXh0dXJlRnJhbWUpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAmJiB0aGlzLnBvaW50ZXJJdGVtKSB7XHJcblx0XHRcdGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyO1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtLnggPSB4O1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtLnkgPSB5O1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0gJiYgdGhpcy5wb2ludGVySXRlbSkge1xyXG5cdFx0XHR0aGlzLnBvaW50ZXJJdGVtLmRlc3Ryb3koKTtcclxuXHRcdFx0dGhpcy5wb2ludGVySXRlbSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgTG9hZGVyS2V5LCBUZXh0U2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGFkZFRleHQgfSBmcm9tICcuLi91dGlscy90ZXh0LXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBjb2RlIGZvciB0aGUgZ2FtZSBvdmVyIHNjZW5lLlxyXG4gKiBAYXV0aG9yIEp1c3RpbiBQb2lyaWVyXHJcbiAqIEBjb3B5cmlnaHQgMjAwMjVcclxuICogQGV4dGVuZHMgUGhhc2VyLlNjZW5lXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHQvKipcclxuXHQgKiBDb25zdHVjdG9yXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignZ2FtZW92ZXInKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBQaGFzZXIgaG9vayBydW5zIG9uY2UuXHJcblx0ICovXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0dGhpcy5hZGQuaW1hZ2UoMCwgMCwgTG9hZGVyS2V5Lk1FTlVfSU1BR0UpLnNldE9yaWdpbigwKS5zZXRTY2FsZSgwLjgpLnNldEFscGhhKDAuNSk7XHJcblxyXG5cdFx0YWRkVGV4dCh0aGlzLCA0MDAsIDMwMCwgJ0dhbWUgb3ZlciEnLCBUZXh0U2l6ZS5MQVJHRSk7XHJcblx0XHRhZGRUZXh0KFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHQ1MTYsXHJcblx0XHRcdDQwMCxcclxuXHRcdFx0J0FsYXMsIHlvdSBmYWlsZWQgdG8gZXNjYXBlIHRoZSBjYXN0bGUgaW4gdGltZSwgYW5kIG5vdyB5b3VyIHNvdWwgaXMgZG9vbWVkIHRvIGxpbmdlciBmb3JldmVyIHdpdGhpbiBpdHMgd2FsbHMuJyxcclxuXHRcdFx0VGV4dFNpemUuUkVHVUxBUixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdvcmRXcmFwOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpLnNldE9yaWdpbigwLjUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSBmb3IgdGhlIGxvYWRpbmcgc2NlbmVcclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMjVcclxuICogQGV4dGVuZHMgUGhhc2VyLlNjZW5lXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignbG9hZGluZycpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHJlbG9hZCBQaGFzZXIgaG9vayBydW5zIG9ubHkgb25jZVxyXG5cdCAqL1xyXG5cdHByZWxvYWQoKSB7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1vbmUnLCAnYXNzZXRzL2pzb24vcm9vbS1vbmUtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLXR3bycsICdhc3NldHMvanNvbi9yb29tLXR3by1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tdGhyZWUnLCAnYXNzZXRzL2pzb24vcm9vbS10aHJlZS1tYXAuanNvbicpO1xyXG5cdFx0dGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oJ3Jvb20tZm91cicsICdhc3NldHMvanNvbi9yb29tLWZvdXItbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC50aWxlbWFwVGlsZWRKU09OKCdyb29tLWZpdmUnLCAnYXNzZXRzL2pzb24vcm9vbS1maXZlLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTigncm9vbS1zaXgnLCAnYXNzZXRzL2pzb24vcm9vbS1zaXgtbWFwLmpzb24nKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnY2FzdGxlLXRpbGVzJywgJ2Fzc2V0cy9pbWcvY2FzdGxlLXRpbGVzL1RpbGVzZXQucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ2NyZWVweS10aWxlcycsICdhc3NldHMvaW1nL3RpbGVzLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjb250YWluZXJzJywgJ2Fzc2V0cy9pbWcvY29udGFpbmVyL2NvbnRhaW5lci5wbmcnKTtcclxuXHRcdHRoaXMubG9hZC5pbWFnZShMb2FkZXJLZXkuTUVOVV9JTUFHRSwgJ2Fzc2V0cy9pbWcvY2FzdGxlLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdkdW5nZW9uLWNyYXdsJywgJ2Fzc2V0cy9pbWcvZHVuZ2Vvbi1jcmF3bC5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3RyZWFzdXJlMScsICdhc3NldHMvaW1nL1RyZWFzdXJlIEljb25zL3RyZWFzdXJlMS5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3RyZWFzdXJlMicsICdhc3NldHMvaW1nL1RyZWFzdXJlIEljb25zL3RyZWFzdXJlNC5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ29wZW4tZG9vci1hdWRpbycsICdhc3NldHMvc291bmRzL3F1Ym9kdXAtRG9vclNldC9mbGFjL3F1Ym9kdXAtRG9vck9wZW4wMS5mbGFjJyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ29wZW4tY2hlc3QtYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9vcGVuLWNoZXN0LndhdicpO1xyXG5cdFx0dGhpcy5sb2FkLmF1ZGlvKCdwdXNoLWF1ZGlvJywgJ2Fzc2V0cy9zb3VuZHMvc2Z4LXB1c2gtYm91bGRlci5mbGFjJyk7XHJcblx0XHR0aGlzLmxvYWQuYXVkaW8oJ2dvdC1pdGVtLWF1ZGlvJywgJ2Fzc2V0cy9zb3VuZHMvSXRlbTFBLndhdicpO1xyXG5cdFx0dGhpcy5sb2FkLmF1ZGlvKCdleHBsb3Npb24tYXVkaW8nLCAnYXNzZXRzL3NvdW5kcy9lcmFzZS53YXYnKTtcclxuXHRcdHRoaXMubG9hZC5zY3JpcHQoJ3dlYmZvbnQnLCAnaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy93ZWJmb250LzEuNi4yNi93ZWJmb250LmpzJyk7XHJcblx0XHR0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xyXG5cdFx0XHRXZWJGb250LmxvYWQoe1xyXG5cdFx0XHRcdGdvb2dsZToge1xyXG5cdFx0XHRcdFx0ZmFtaWxpZXM6IFsnR2VybWFuaWEgT25lJ11cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFjdGl2ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnbWVudScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBMb2FkZXJLZXksIFRleHRTaXplIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYWRkVGV4dCB9IGZyb20gJy4uL3V0aWxzL3RleHQtdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGNvZGUgZm9yIHRoZSBtZW51IHNjZW5lXHJcbiAqIEBhdXRob3IgSnVzdGluIFBvaXJpZXJcclxuICogQGNvcHlyaWdodCAyMDI1XHJcbiAqIEBleHRlbmRzIFBoYXNlci5TY2VuZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ21lbnUnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBQaGFzZXIuanMgaG9vayBydW5zIG9ubHkgb25jZVxyXG5cdCAqL1xyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5hZGQuaW1hZ2UoMCwgMCwgTG9hZGVyS2V5Lk1FTlVfSU1BR0UpLnNldE9yaWdpbigwKS5zZXRTY2FsZSgwLjgpO1xyXG5cclxuXHRcdGFkZFRleHQodGhpcywgMzEwLCAzNTAsICdFc2NhcGUgZnJvbSB0aGUgY2FzdGxlJywgVGV4dFNpemUuTEFSR0UpO1xyXG5cdFx0YWRkVGV4dCh0aGlzLCA1MTIsIDQ1MCwgJ0NsaWNrIHRvIHN0YXJ0IHRoZSBnYW1lJykuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBQaGFzZXIuanMgaG9vayBydW5zIGV2ZXJ5IGN5Y2xlLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdGlmICh0aGlzLmlucHV0Lm1hbmFnZXIuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnZ2FtZScpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IExvYWRlcktleSwgVGV4dFNpemUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhZGRUZXh0IH0gZnJvbSAnLi4vdXRpbHMvdGV4dC11dGlscyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyB0aGUgY29kZSBmb3IgdGhlIHdpbm5pbmcgc2NlbmVcclxuICogQGF1dGhvciBKdXN0aW4gUG9pcmllclxyXG4gKiBAY29weXJpZ2h0IDIwMjVcclxuICogQGV4dGVuZHMgUGhhc2VyLlNjZW5lXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5uaW5nU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignd2luJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgUGhhc2VyLmpzIGhvb2suIFJ1bnMgb25seSBvbmNlXHJcblx0ICovXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0dGhpcy5hZGQuaW1hZ2UoMCwgMCwgTG9hZGVyS2V5Lk1FTlVfSU1BR0UpLnNldE9yaWdpbigwKS5zZXRTY2FsZSgwLjgpLnNldEFscGhhKDAuNSk7XHJcblxyXG5cdFx0YWRkVGV4dCh0aGlzLCAyMDAsIDMwMCwgJ0NvbmdyYXR1bGF0aW9ucyEgWW914oCZdmUgZXNjYXBlZCEnLCBUZXh0U2l6ZS5MQVJHRSk7XHJcblx0XHRhZGRUZXh0KFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHQ1MTYsXHJcblx0XHRcdDQyMCxcclxuXHRcdFx0J0F0IGxhc3QsIEnigJl2ZSB3b24gbXkgZnJlZWRvbS4gQnV0IGFzIEkgc3RlcCBiZXlvbmQgdGhlIGNhc3RsZSBnYXRlcywgdGhlIHRydXRoIHJldHVybnMgSSBoYWQgYW1uZXNpYS4gVGhpcyB3YXMgbXkgY2FzdGxlLCBhbmQgSSB3YXMgbXkgb3duIHByaXNvbmVyLicsXHJcblx0XHRcdFRleHRTaXplLlJFR1VMQVIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3b3JkV3JhcDoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQwMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KS5zZXRPcmlnaW4oMC41KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEludmFsaWRBcmd1bWVudEVycm9yIGZyb20gJy4uL2Vycm9ycy9JbnZhbGlkYUFyZ3VtZW50RXJyb3InO1xyXG5cclxuLyoqXHJcbiAqIEFzc2VydCBjb25kaXRpb24gYW1kIHRocm93IGVycm9yIG1lc3NhZ2UgaWYgY29uZGl0aW9uIGlzIG5vdCBtZXRcclxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb24gVGhlIGNvbmRpdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcclxuXHRpZiAoY29uZGl0aW9uKSB7XHJcblx0XHR0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IobWVzc2FnZSk7XHJcblx0fVxyXG59OyIsImltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vYXNzZXJ0LXV0aWxzJztcclxuaW1wb3J0IHsgYWRkVGV4dCB9IGZyb20gJy4vdGV4dC11dGlscyc7XHJcbmltcG9ydCB7IE1vZGFsU2l6ZSwgVGV4dFNpemUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIERpc3BsYXlzIGEgbW9kYWwgd2luZG93IHdpdGggdGV4dFxyXG4gKiBAcGFyYW0ge1BoYXNlci5TY2VuZX0gc2NlbmUgVGhlIFBoYXNlciBzY2VuZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2l6ZSBUaGUgbW9kYWwgc2l6ZVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjbG9zZUNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBjYWxsIHdoZW4gbW9kYWwgaXMgY2xvc2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RleHRNb2RhbChzY2VuZSwgdGV4dCwgc2l6ZSA9IE1vZGFsU2l6ZS5SRUdVTEFSLCBjbG9zZUNhbGxiYWNrKSB7XHJcblx0YXNzZXJ0KCFzY2VuZSwgJ1RoZSBzY2VuZSBpcyB1bmRlZmluZWQnKTtcclxuXHRhc3NlcnQoIXRleHQsICdUaGUgdGV4dCBpcyB1bmRlZmluZWQnKTtcclxuXHRjb25zdCBibG9ja2VyID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCBzY2VuZS5zY2FsZS53aWR0aCwgc2NlbmUuc2NhbGUuaGVpZ2h0LCAweDAwMDAwMCwgMC41KS5zZXRPcmlnaW4oMCkuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHRjb25zdCBtb2RhbCA9IHNjZW5lLmFkZC5jb250YWluZXIoNDUwLCAzNTApLnNldEFscGhhKDApO1xyXG5cdGxldCBib3ggPSBudWxsO1xyXG5cdGxldCBjbG9zZVRleHQgPSBudWxsO1xyXG5cclxuXHRzd2l0Y2ggKHNpemUpIHtcclxuXHRcdGNhc2UgTW9kYWxTaXplLlJFR1VMQVI6XHJcblx0XHRcdGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgNTAwLCAyNTAsIDB4MDAwMDAwKS5zZXRTdHJva2VTdHlsZSg2LCAweGE2YTZhNikuc2V0T3JpZ2luKDAuNSk7XHJcblx0XHRcdGNsb3NlVGV4dCA9IGFkZFRleHQoc2NlbmUsIDE2NSwgLTExNSwgJ0Nsb3NlIFgnKS5zZXRJbnRlcmFjdGl2ZSh7XHJcblx0XHRcdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIE1vZGFsU2l6ZS5MQVJHRTpcclxuXHRcdFx0Y2xvc2VUZXh0ID0gYWRkVGV4dChzY2VuZSwgMTY1LCAtMTE1LCAnQ2xvc2UgWCcpLnNldEludGVyYWN0aXZlKHtcclxuXHRcdFx0XHR1c2VIYW5kQ3Vyc29yOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDQ1MCwgMzUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRleHRPYmogPSBhZGRUZXh0KHNjZW5lLCAwLCAwLCB0ZXh0LCBUZXh0U2l6ZS5SRUdVTEFSLCB7XHJcblx0XHR3b3JkV3JhcDoge1xyXG5cdFx0XHR3aWR0aDogNDAwXHJcblx0XHR9XHJcblx0fSkuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG5cdGNsb3NlVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRibG9ja2VyLmRlc3Ryb3koKTtcclxuXHRcdG1vZGFsLmRlc3Ryb3koKTtcclxuXHRcdGlmIChjbG9zZUNhbGxiYWNrKSB7XHJcblx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRzY2VuZS50d2VlbnMuYWRkKHtcclxuXHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0YWxwaGE6IDEsXHJcblx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdGR1cmF0aW9uOiAyMDBcclxuXHR9KTtcclxuXHRtb2RhbC5hZGQoW2JveCwgdGV4dE9iaiwgY2xvc2VUZXh0XSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyBhIG1vZGFsIHdpbmRvdyB0aGF0IHdpdGggYW4gaW1hZ2VcclxuICogQHBhcmFtIHtQaGFzZXIuU2NlbmV9IHNjZW5lIFRoZSBQaGFzZXIgc2NlbmVcclxuICogQHBhcmFtIHtzdHJpbmd9IGltYWdlS2V5IFRoZSBQaGFzZXIgbG9hZGVyIGtleSBmb3IgdGhlIGltYWdlXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsb3NlQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIG1vZGFsIGlzIGNsb3NlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93SW1hZ2VNb2RhbChzY2VuZSwgaW1hZ2VLZXksIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCghaW1hZ2VLZXksICdUaGUgaW1hZ2VLZXkgaXMgdW5kZWZpbmVkJyk7XHJcblx0Y29uc3QgYmxvY2tlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgc2NlbmUuc2NhbGUud2lkdGgsIHNjZW5lLnNjYWxlLmhlaWdodCwgMHgwMDAwMDAsIDAuNSkuc2V0T3JpZ2luKDApLnNldEludGVyYWN0aXZlKCk7XHJcblx0Y29uc3QgbW9kYWwgPSBzY2VuZS5hZGQuY29udGFpbmVyKDQ1MCwgMzUwKS5zZXRBbHBoYSgwKTtcclxuXHRjb25zdCBib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDUwMCwgMjUwLCAweDAwMDAwMCkuc2V0U3Ryb2tlU3R5bGUoNiwgMHhhNmE2YTYpLnNldE9yaWdpbigwLjUpO1xyXG5cdGNvbnN0IGltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsIGltYWdlS2V5KS5zZXRPcmlnaW4oMC41KTtcclxuXHRpbWFnZS5zZXREaXNwbGF5U2l6ZShib3gud2lkdGggLSA2MCwgYm94LmhlaWdodCAtIDYwKTtcclxuXHJcblx0Y29uc3QgY2xvc2VUZXh0ID0gYWRkVGV4dChzY2VuZSwgMTU1LCAtMTY5LCAnQ2xvc2UgWCcpLnNldEludGVyYWN0aXZlKHtcclxuXHRcdHVzZUhhbmRDdXJzb3I6IHRydWVcclxuXHR9KTtcclxuXHRjbG9zZVRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0YmxvY2tlci5kZXN0cm95KCk7XHJcblx0XHRtb2RhbC5kZXN0cm95KCk7XHJcblx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRjbG9zZUNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHNjZW5lLnR3ZWVucy5hZGQoe1xyXG5cdFx0dGFyZ2V0czogbW9kYWwsXHJcblx0XHRhbHBoYTogMSxcclxuXHRcdGVhc2U6ICdMaW5lYXInLFxyXG5cdFx0ZHVyYXRpb246IDIwMFxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGQoW2JveCwgaW1hZ2UsIGNsb3NlVGV4dF0pO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgYSBtb2RhbCB3aW5kb3cgd2l0aCB0ZXh0IGFuZCBpdGVtIGluZm9ybWF0aW9uXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2VuZSBUaGUgUGhhc2VyIHNjZW5lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtRGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIGl0ZW1cclxuICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1UZXh0dXJlIFRoZSB0ZXh0dXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaXRlbVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUZyYW1lICBUaGUgZnJhbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpdGVtXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsb3NlQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIG1vZGFsIGlzIGNsb3NlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJdGVtTW9kYWwoc2NlbmUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSwgY2xvc2VDYWxsYmFjaykge1xyXG5cdGFzc2VydCghc2NlbmUsICdUaGUgc2NlbmUgaXMgdW5kZWZpbmVkJyk7XHJcblx0YXNzZXJ0KCFpdGVtRGVzY3JpcHRpb24sICdUaGUgaXRlbURlc2NyaXB0aW9uIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGNvbnN0IGJsb2NrZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHNjZW5lLnNjYWxlLndpZHRoLCBzY2VuZS5zY2FsZS5oZWlnaHQsIDB4MDAwMDAwLCAwLjUpLnNldE9yaWdpbigwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdGNvbnN0IG1vZGFsID0gc2NlbmUuYWRkLmNvbnRhaW5lcig0NTAsIDM1MCkuc2V0QWxwaGEoMCk7XHJcblx0Y29uc3QgYm94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA1MDAsIDIwMCwgMHgwMDAwMDApLnNldFN0cm9rZVN0eWxlKDYsIDB4YTZhNmE2KS5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0Y29uc3QgY2xvc2VUZXh0ID0gYWRkVGV4dChzY2VuZSwgMTY1LCAtOTAsICdDbG9zZSBYJykuc2V0SW50ZXJhY3RpdmUoe1xyXG5cdFx0dXNlSGFuZEN1cnNvcjogdHJ1ZVxyXG5cdH0pO1xyXG5cdGNvbnN0IGl0ZW1JbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAtMTAsIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUpO1xyXG5cdGNvbnN0IGl0ZW1EZXNjcmlwdGlvblRleHQgPSBhZGRUZXh0KHNjZW5lLCAwLCAzMCwgaXRlbURlc2NyaXB0aW9uKS5zZXRPcmlnaW4oMC41KTtcclxuXHJcblx0Y2xvc2VUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdGJsb2NrZXIuZGVzdHJveSgpO1xyXG5cdFx0bW9kYWwuZGVzdHJveSgpO1xyXG5cdFx0aWYgKGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdFx0Y2xvc2VDYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRzY2VuZS50d2VlbnMuYWRkKHtcclxuXHRcdHRhcmdldHM6IG1vZGFsLFxyXG5cdFx0YWxwaGE6IDEsXHJcblx0XHRlYXNlOiAnTGluZWFyJyxcclxuXHRcdGR1cmF0aW9uOiAyMDBcclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkKFtib3gsIGl0ZW1JbWFnZSwgaXRlbURlc2NyaXB0aW9uVGV4dCwgY2xvc2VUZXh0XSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9hc3NlcnQtdXRpbHMnO1xyXG5pbXBvcnQgeyBUZXh0U2l6ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogQWRkIHRleHQgdG8gdGhlIHNjZW5lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BoYXNlci5TY2VuZX0gc2NlbmUgVGhlIFBoYXNlciBzY2VuZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2l6ZSBUaGUgc2l6ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRleHQoc2NlbmUsIHgsIHksIHRleHQsIHNpemUgPSBUZXh0U2l6ZS5SRUdVTEFSLCB0ZXh0T3BzID0ge30pIHtcclxuXHRhc3NlcnQoIXNjZW5lLCAnVGhlIHNjZW5lIGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCh4ID09PSBudWxsIHx8IHggPT09IHVuZGVmaW5lZCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCwgJ1RoZSB5IGlzIHVuZGVmaW5lZCcpO1xyXG5cdGFzc2VydCghdGV4dCwgJ1RoZSB0ZXh0IGlzIHVuZGVmaW5lZCcpO1xyXG5cdHN3aXRjaCAoc2l6ZSkge1xyXG5cdFx0Y2FzZSBUZXh0U2l6ZS5MQVJHRTpcclxuXHRcdFx0dGV4dE9wcyA9IHsgLi4udGV4dE9wcywgZm9udFNpemU6ICc0OHB4JywgZm9udEZhbWlseTogJ0dlcm1hbmlhIE9uZScgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUZXh0U2l6ZS5TTUFMTDpcclxuICAgICAgICAgICAgdGV4dE9wcyA9IHsgLi4udGV4dE9wcywgZm9udFNpemU6ICcxOHB4JywgZm9udEZhbWlseTogJ0dlcm1hbmlhIE9uZScgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0ZXh0T3BzID0geyAuLi50ZXh0T3BzLCBmb250U2l6ZTogJzI0cHgnLCBmb250RmFtaWx5OiAnR2VybWFuaWEgT25lJyB9O1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0cmV0dXJuIHNjZW5lLmFkZC50ZXh0KHgsIHksIHRleHQsIHRleHRPcHMpO1xyXG59XHJcbiIsImltcG9ydCB7IGFzc2VydCB9IGZyb20gXCIuL2Fzc2VydC11dGlsc1wiO1xyXG5pbXBvcnQgeyBUaWxlbWFwTGF5ZXIsIERpcmVjdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSB0aWxlcyBiYXNlZCBvbiB0aGUgd29ybGQgY29vcmRpbmF0ZXMsIHdpZHRoIGFuZCBoZWlnaHRcclxuICogQHBhcmFtIHtQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcH0gdGlsZU1hcCBcclxuICogQHBhcmFtIHtudW1iZXJ9IHggXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYXllciBcclxuICogQHJldHVybnMge0FycmF5fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbGVzV2l0aGluV29ybGRYWSh0aWxlTWFwLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBsYXllciA9IFRpbGVtYXBMYXllci5GT1JFR1JPVU5EKSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCgheCwgJ1RoZSB4IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF5LCAnVGhlIHkgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXdpZHRoLCAnVGhlIHdpZHRoIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCFoZWlnaHQsICdUaGUgaGVpZ2h0IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgcmV0dXJuIHRpbGVNYXAuZ2V0VGlsZXNXaXRoaW5Xb3JsZFhZKFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeSxcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpc05vdEVtcHR5OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIGxheWVyXHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRpbGVzIGZyb20gVGlsZW1hcFxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUaWxlcyh0aWxlTWFwLCB0aWxlcykge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGlsZU1hcC5yZW1vdmVUaWxlQXQodGlsZXNbaV0ueCwgdGlsZXNbaV0ueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXBsYWNlIGdpdmVuIHRpbGVzIHdpdGggbmV3IHRpbGVzIFxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBvbGRUaWxlcyBcclxuICogQHBhcmFtIHtBcnJheX0gbmV3VGlsZXMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVRpbGVzKHRpbGVNYXAsIG9sZFRpbGVzLCBuZXdUaWxlcykge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIW9sZFRpbGVzLCAnVGhlIG9sZFRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCFuZXdUaWxlcywgJ1RoZSBuZXdUaWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBvbGRUaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmIChuZXdUaWxlc1tpXSkge1xyXG4gICAgICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdChuZXdUaWxlc1tpXSwgb2xkVGlsZXNbaV0ueCwgb2xkVGlsZXNbaV0ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW92ZSB0aWxlcyBvbiB0aGUgVGlsZW1hcCBhIGZvciBnaXZlbiBkaXJlY3Rpb24gYW5kIHZlbG9jaXR5XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRpbGVzKHRpbGVNYXAsIHRpbGVzLCBkaXJlY3Rpb24sIHZlbG9jaXR5KSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIWRpcmVjdGlvbiwgJ1RoZSBkaXJlY3Rpb24gaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG4gICAgICAgICAgICBtb3ZlVGlsZXNMZWZ0KHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG4gICAgICAgICAgICBtb3ZlVGlsZXNSaWdodCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERpcmVjdGlvbi5VUDpcclxuICAgICAgICAgICAgbW92ZVRpbGVzVXAodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICAgICAgbW92ZVRpbGVEb3duKHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW92ZSB0aWxlcyB0byB0aGUgbGVmdCBvbiB0aGUgVGlsZW1hcCBmb3IgYSBnaXZlbiB2ZWxvY2l0eVxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICogQHBhcmFtIHtBcnJheX0gdmVsb2NpdHkgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRpbGVzTGVmdCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCAtIHZlbG9jaXR5LCB0aWxlc1tpXS55KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vdmUgdGlsZXMgdG8gdGhlIHJpZ2h0IG9uIHRoZSBUaWxlbWFwIGZvciBhIGZvciBnaXZlbiB2ZWxvY2l0eVxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICogQHBhcmFtIHtBcnJheX0gdmVsb2NpdHkgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRpbGVzUmlnaHQodGlsZU1hcCwgdGlsZXMsIHZlbG9jaXR5KSB7XHJcbiAgICBhc3NlcnQoIXRpbGVNYXAsICdUaGUgdGlsZU1hcCBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdGlsZXMsICdUaGUgdGlsZXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXZlbG9jaXR5LCAnVGhlIHZlbG9jaXR5IGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGlsZU1hcC5wdXRUaWxlQXQodGlsZXNbaV0uaW5kZXgsIHRpbGVzW2ldLnggKyB2ZWxvY2l0eSwgdGlsZXNbaV0ueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb3ZlIHRpbGVzIHVwIG9uIHRoZSBUaWxlbWFwIGZvciBhIGdpdmVuIHZlbG9jaXR5XHJcbiAqIEBwYXJhbSB7UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXB9IHRpbGVNYXAgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB2ZWxvY2l0eSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGlsZXNVcCh0aWxlTWFwLCB0aWxlcywgdmVsb2NpdHkpIHtcclxuICAgIGFzc2VydCghdGlsZU1hcCwgJ1RoZSB0aWxlTWFwIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF0aWxlcywgJ1RoZSB0aWxlcyBpcyB1bmRlZmluZWQnKTtcclxuICAgIGFzc2VydCghdmVsb2NpdHksICdUaGUgdmVsb2NpdHkgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB0aWxlTWFwLnB1dFRpbGVBdCh0aWxlc1tpXS5pbmRleCwgdGlsZXNbaV0ueCwgdGlsZXNbaV0ueSAtIHZlbG9jaXR5KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vdmUgdGlsZXMgZG93biBvbiB0aGUgVGlsZW1hcCBmb3IgYSBnaXZlbiB2ZWxvY2l0eVxyXG4gKiBAcGFyYW0ge1BoYXNlci5UaWxlbWFwcy5UaWxlbWFwfSB0aWxlTWFwIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBcclxuICogQHBhcmFtIHtBcnJheX0gdmVsb2NpdHkgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRpbGVEb3duKHRpbGVNYXAsIHRpbGVzLCB2ZWxvY2l0eSkge1xyXG4gICAgYXNzZXJ0KCF0aWxlTWFwLCAnVGhlIHRpbGVNYXAgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICBhc3NlcnQoIXRpbGVzLCAnVGhlIHRpbGVzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgYXNzZXJ0KCF2ZWxvY2l0eSwgJ1RoZSB2ZWxvY2l0eSBpcyB1bmRlZmluZWQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRpbGVNYXAucHV0VGlsZUF0KHRpbGVzW2ldLmluZGV4LCB0aWxlc1tpXS54LCB0aWxlc1tpXS55ICsgdmVsb2NpdHkpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2VzY2FwZV9mcm9tX3RoZV9jYXN0bGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXNjYXBlX2Zyb21fdGhlX2Nhc3RsZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=