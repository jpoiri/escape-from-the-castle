import Phaser from 'phaser';
import { TilemapLayer, ActionType, Direction, SpawnTyoe, SpawnType } from '../constants';
import { showImageModal, showTextModal } from '../utils/ModalUtils';

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
				case ActionType.REPLACE_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					for (let i = 0, len = tiles.length; i < len; i++) {
						if (newTiles[i]) {
							this.scene.tileMap.putTileAt(newTiles[i], tiles[i].x, tiles[i].y);
						}
					}
					this.dirty = true;
					break;
				case ActionType.TOGGLE_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
				case ActionType.DESTROY_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					this.dirty = true;
					break;
				case ActionType.MOVE_TILE:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					switch (direction) {
						case Direction.LEFT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
							}
							this.x = this.x - this.width - velocity;
							this.reverseDirection = Direction.RIGHT;
							break;
						case Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
							}
							this.x = this.x + this.width + velocity;
							this.reverseDirection = Direction.LEFT;
							break;
						case Direction.UP:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - velocity);
							}
							this.y = this.y - this.height - velocity;
							this.reverseDirection = Direction.DOWN;
							break;
						case Direction.DOWN:
							for (let i = 0, len = tiles.length; i < len; i++) {
								this.scene.tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
							}
							this.y = this.y + this.height + velocity;
							this.reverseDirection = Direction.UP;
							break;
					}
					this.dirty = true;
					break;
				case ActionType.TOGGLE_TILE_MOVEMENT:
					tiles = this.scene.tileMap.getTilesWithinWorldXY(
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
					if (!this.dirty) {
						for (let i = 0, len = tiles.length; i < len; i++) {
							this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
						}
						switch (direction) {
							case Direction.LEFT:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x - velocity,
										tiles[i].y
									);
								}
								this.x = this.x - this.width - velocity;
								this.reverseDirection = Direction.RIGHT;
								break;
							case Direction.RIGHT:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x + velocity,
										tiles[i].y
									);
								}
								this.x = this.x + this.width + velocity;
								this.reverseDirection = Direction.LEFT;
								break;
							case Direction.UP:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x,
										tiles[i].y - velocity
									);
								}
								this.y = this.y - this.height - velocity;
								this.reverseDirection = Direction.DOWN;
								break;
							case Direction.DOWN:
								for (let i = 0, len = tiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										tiles[i].index,
										tiles[i].x,
										tiles[i].y + velocity
									);
								}
								this.y = this.y + this.height + velocity;
								this.reverseDirection = Direction.UP;
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
							TilemapLayer.FOREGROUND
						);

						for (let i = 0, len = movedTiles.length; i < len; i++) {
							this.scene.tileMap.removeTileAt(movedTiles[i].x, movedTiles[i].y);
						}
						switch (this.reverseDirection) {
							case Direction.LEFT:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x - velocity,
										movedTiles[i].y
									);
								}
								this.x = this.x - this.width - velocity;
								break;
							case Direction.RIGHT:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x + velocity,
										movedTiles[i].y
									);
								}
								this.x = this.x + this.width + velocity;
								break;
							case Direction.UP:
								for (let i = 0, len = movedTiles.length; i < len; i++) {
									this.scene.tileMap.putTileAt(
										movedTiles[i].index,
										movedTiles[i].x,
										movedTiles[i].y - velocity
									);
								}
								this.y = this.y - this.height - velocity;
								break;
							case Direction.DOWN:
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
				case ActionType.SHOW_TEXT:
					showTextModal(this.scene, text);
					this.dirty = true;
					break;
				case ActionType.SHOW_IMAGE:
					showImageModal(this.scene, textureKey);
					this.dirty = true;
					break;
			}
			if (this.spawn) {
				switch (this.spawn.type) {
					case SpawnType.NPC:
						if (type === (ActionType.REPLACE_TILE || ActionType.TOGGLE_TILE)) {
							this.scene.spawnNPC(this.x + this.width / 2, this.y + 60, this.spawn);
						} else {
							this.scene.spawnNPC(this.x + this.width / 2, this.y + this.height / 2, this.spawn);
						}
						break;
					case SpawnType.ITEM:
						if (type === (ActionType.REPLACE_TILE || ActionType.TOGGLE_TILE)) {
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
