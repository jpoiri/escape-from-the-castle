import Phaser from 'phaser';
import { TilemapLayer, ActionType, Direction } from '../constants';
import ModalUtils from '../utils/ModalUtils';

export default class InteractiveZone extends Phaser.GameObjects.Rectangle {
	
	action = null;
	spawnItem = null;
	navigateTo = null;
	repeatableAction = false;
	itemRequired = null;
	itemRequiredMessage = null;
	itemRequiredMessageVisible = false;

	constructor(scene, x, y, width, height) {
		super(scene, x, y, width, height);
		this.setOrigin(0, 0);
		this.setInteractive();
		scene.add.existing(this);
	}

	executeAction(item) {
		console.log('execute action 1');
		if (this.itemRequired && item?.name !== this.itemRequired) {
			if (this.itemRequiredMessageVisible) {
				ModalUtils.showTextModal(this.scene, this.itemRequiredMessage);
			}
		} else {
			let { type, velocity, newTiles, direction, text, textureKey } = this.action;

			newTiles = newTiles?.split(',').map((s) => {
				return parseInt(s, 10);
			});

			console.log(text);

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
					break;
				case ActionType.DESTROY_TILE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						this.scene.tileMap.removeTileAt(tiles[i].x, tiles[i].y);
					}
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
					break;
				case ActionType.SHOW_TEXT:
					console.log('show text');
					ModalUtils.showTextModal(this.scene, text);
					break;
				case ActionType.SHOW_IMAGE:
					ModalUtils.showImageModal(this.scene, textureKey);
					break;
			}
			if (this.spawnItem) {
				this.scene.spawnItem(this.x + this.width / 2, this.y + this.height / 2, this.spawnItem);
			}
			if (this.navigateTo) {
				this.scene.reloadRoom(this.navigateTo);
			}
			if (!this.repeatableAction) {
				this.destroy();
			}
		}
	}

	setAction(action) {
		this.action = action;
	}

	getAction() {
		return this.action;
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

	setRepeatableAction(repeatableAction) {
		this.repeatableAction = repeatableAction;
	}

	isRepeatableAction() {
		return this.repeatableAction;
	}

	setItemRequired(itemRequired) {
		this.itemRequired = itemRequired;
	}

	getItemRequired() {
		return this.itemRequired;
	}

	setItemRequiredMessage(itemRequiredMessage) {
		this.itemRequiredMessage = itemRequiredMessage;
	}

	getItemRequiredMessage() {
		return this.itemRequiredMessage;
	}

	setItemRequiredMessageVisible(itemRequiredMessageVisible) {
		this.itemRequiredMessageVisible = itemRequiredMessageVisible;
	}

	isItemRequiredMessageVisible() {
		return this.itemRequiredMessageVisible;
	}
}
