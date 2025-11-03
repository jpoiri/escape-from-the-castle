import { GameObjects } from 'phaser';
import { ActionType, Direction, SpawnType } from '../constants';
import { assert } from '../utils/assert-utils';
import { getTilesWithinWorldXY, removeTiles, replaceTiles, moveTiles } from '../utils/tilemap-utils';
import { showImageModal, showTextModal } from '../utils/modal-utils';

/**
 * This class represents an InteractionZone in the escape room
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.GameObjects.Rectangle
 */
export default class InteractiveZone extends GameObjects.Rectangle {
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
				case ActionType.REPLACE_TILE:
					tiles = getTilesWithinWorldXY(this.scene.tileMap, this.x, this.y, this.width, this.height);
					replaceTiles(this.scene.tileMap, tiles, newTiles);
					this.dirty = true;
					break;
				case ActionType.TOGGLE_TILE:
					tiles = getTilesWithinWorldXY(this.scene.tileMap, this.x, this.y, this.width, this.height);
					if (!this.dirty) {
						this.previousTiles = tiles.map((t) => t.index);
						replaceTiles(this.scene.tileMap, tiles, newTiles);
						this.dirty = true;
					} else {
						replaceTiles(this.scene.tileMap, tiles, this.previousTiles);
						this.previousTiles = null;
						this.dirty = false;
					}
					break;
				case ActionType.DESTROY_TILE:
					tiles = getTilesWithinWorldXY(this.scene.tileMap, this.x, this.y, this.width, this.height);
					removeTiles(this.scene.tileMap, tiles);
					this.dirty = true;
					break;
				case ActionType.MOVE_TILE:
					tiles = getTilesWithinWorldXY(this.scene.tileMap, this.x, this.y, this.width, this.height);
					removeTiles(this.scene.tileMap, tiles);
					moveTiles(this.scene.tileMap, tiles, direction, velocity);
					this.move(direction, velocity);
					this.dirty = true;
					break;
				case ActionType.TOGGLE_TILE_MOVEMENT:
					tiles = getTilesWithinWorldXY(this.scene.tileMap, this.x, this.y, this.width, this.height);
					if (!this.dirty) {
						removeTiles(this.scene.tileMap, tiles);
						moveTiles(this.scene.tileMap, tiles, direction, velocity);
						this.move(direction, velocity);
						this.dirty = true;
					} else {
						const movedTiles = getTilesWithinWorldXY(this.scene.tileMap, this.x, this.y, this.width, this.height);
						removeTiles(this.scene.tileMap, movedTiles);
						moveTiles(this.scene.tileMap, tiles, this.reverseDirection, velocity);
						this.move(this.reverseDirection, velocity);
						this.dirty = false;
					}
					break;
				case ActionType.SHOW_TEXT:
					showTextModal(this.scene, text);
					this.dirty = true;
					break;
				case ActionType.SHOW_IMAGE:
					showImageModal(this.scene, textureKey);
					this.dirty = true;
					break;
				case ActionType.DESTROY: {
					this.destroy();
					this.dirty = true;
					break;
				}
				case ActionType.TURN_ON_LIGHT: {
					this.scene.turnOnLight();
					break;
				}
				case ActionType.TURN_OFF_LIGHT: {
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
					showTextModal(this.scene, this.timePenalityMessage);
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
		assert(!spawn, 'The spawn is undefined');
		switch (spawn.type) {
			case SpawnType.NPC:
				if (actionType === (ActionType.REPLACE_TILE || ActionType.TOGGLE_TILE)) {
					this.scene.spawnNPC(this.x + this.width / 2, this.y + 50, this.spawn);
				} else {
					this.scene.spawnNPC(this.x + this.width / 2, this.y + this.height / 2, this.spawn);
				}
				break;
			case SpawnType.ITEM:
				if (actionType === (ActionType.REPLACE_TILE || ActionType.TOGGLE_TILE)) {
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
		assert(!direction, 'The direction is undefined');
		assert(!velocity, 'The velocity is undefined');
		switch (direction) {
			case Direction.LEFT:
				this.x = this.x - this.width - velocity;
				this.reverseDirection = Direction.RIGHT;
				break;
			case Direction.RIGHT:
				this.x = this.x + this.width + velocity;
				this.reverseDirection = Direction.LEFT;
				break;
			case Direction.UP:
				this.y = this.y - this.height - velocity;
				this.reverseDirection = Direction.DOWN;
				break;
			case Direction.DOWN:
				this.y = this.y + this.height + velocity;
				this.reverseDirection = Direction.UP;
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
			if (this.action?.type === ActionType.SHOW_TEXT || this.action?.type === ActionType.SHOW_IMAGE) {
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
			showTextModal(this.scene, this.constraintMessage);
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
