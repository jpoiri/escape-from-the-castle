import Phaser from 'phaser';
import { TilemapLayer, ActionType, Direction } from '../constants';
import ModalUtils from '../utils/ModalUtils';

export default class InteractiveZone extends Phaser.GameObjects.Rectangle {
	action = null;
	constraints = null;
	spawnItem = null;
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
		if (!this.canExecute(item, dirtyObjectMap)) {
			if (this.constraintMessage) {
				ModalUtils.showTextModal(this.scene, this.constraintMessage);
			}
		} else {
			const { itemRequired } = this.constraints;

			if (itemRequired && item?.name === itemRequired) {
				itemUsed = true;
			}

			let { type, velocity, newTiles, direction, text, textureKey, repeat } = this.action;

			newTiles = newTiles?.split(',').map((s) => {
				return parseInt(s, 10);
			});

			const tiles = this.scene.tileMap.getTilesWithinWorldXY(
				this.x,
				this.y,
				this.width,
				this.height,
				{
					isNotEmpty: true
				},
				null,
				TilemapLayer.FOREGROUND
			);

			switch (type) {
				case ActionType.REPLACE_TILE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						if (newTiles[i]) {
							this.scene.tileMap.putTileAt(newTiles[i], tiles[i].x, tiles[i].y);
						}
					}
					this.dirty = true;
					break;
				case ActionType.TOGGLE_TILE:
					if (!this.previousTiles) {
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
				case ActionType.DESTROY_TILE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					this.dirty = true;
					break;
				case ActionType.MOVE_TILE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					switch (direction) {
						case Direction.LEFT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
							}
							break;
						case Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
							}
							break;
						case Direction.UP:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - velocity);
							}
							break;
						case Direction.DOWN:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
							}
							break;
					}
					this.dirty = true;
					break;
				case ActionType.SHOW_TEXT:
					ModalUtils.showTextModal(this.scene, text);
					this.dirty = true;
					break;
				case ActionType.SHOW_IMAGE:
					ModalUtils.showImageModal(this.scene, textureKey);
					this.dirty = true;
					break;
			}
			if (this.spawnItem) {
				if (type === (ActionType.REPLACE_TILE || ActionType.TOGGLE_TILE)) {
					this.scene.spawnItem(this.x + this.width / 2, this.y + 50, this.spawnItem);
				} else {
					this.scene.spawnItem(this.x + this.width / 2, this.y + this.height / 2, this.spawnItem);
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
			const { itemRequired, promptQuestion, promptAnswer, dependsOn } = this.constraints;
			if (itemRequired && item?.name !== itemRequired) {
				return false;
			} else if (promptQuestion) {
				const answer = window.prompt(promptQuestion);
				if (answer && answer.toLocaleLowerCase() === promptAnswer) {
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

	setSpawnItem(spawnItem) {
		this.spawnItem = spawnItem;
	}

	getSpawnItem() {
		return this.spawnItem;
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
