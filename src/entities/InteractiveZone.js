import Phaser from 'phaser';
import { ActionType, Direction, SpawnType, Rotation } from '../constants';
import { assert } from '../utils/assert-utils';
import { getTilesWithinWorldXY, removeTiles, replaceTiles, moveTiles } from '../utils/tilemap-utils';
import { showImageModal, showTextModal } from '../utils/modal-utils';

export default class InteractiveZone extends Phaser.GameObjects.Rectangle {
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
				showTextModal(this.scene, this.constraintMessage);
			}
		} else {
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
			}
			if (this.spawn) {
				this.spawnObject(this.spawn, type);
			}
			if (this.navigateTo) {
				this.scene.reloadRoom(this.navigateTo);
			}
			if (onCompleteCallback) {
				onCompleteCallback(this.isItemUsed(item));
			}
			if (!repeat && this.active) {
				this.destroy();
			}
		}
	}

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

	isItemUsed(item) {
		if (this.constraints && item) {
			const { itemRequired } = this.constraints;
			if (itemRequired && item?.name === itemRequired) {
				return true;
			}
		}
		return false;	
	}

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
