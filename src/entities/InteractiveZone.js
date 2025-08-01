import Phaser from 'phaser';
import { TilemapLayer, TileAction, Direction } from '../constants';

export default class InteractiveZone extends Phaser.GameObjects.Rectangle {
	velocity = 0;
	direction = null;
	action = null;
	newTiles = null;
	spawnItem = null;

	constructor(scene, x, y, width, height) {
		super(scene, x, y, width, height);
		this.setOrigin(0, 0);
		this.setInteractive();
		scene.add.existing(this);

		this.on('pointerdown', () => {
			const tiles = scene.tilemap.getTilesWithinWorldXY(
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
			switch (this.action) {
				case TileAction.REPLACE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						if (this.newTiles[i]) {
							scene.tilemap.putTileAt(this.newTiles[i], tiles[i].x, tiles[i].y);
						}
					}
					break;
				case TileAction.DESTROY:
					for (let i = 0, len = tiles.length; i < len; i++) {
						scene.tilemap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					break;
				case TileAction.MOVE:
					for (let i = 0, len = tiles.length; i < len; i++) {
						scene.tilemap.removeTileAt(tiles[i].x, tiles[i].y);
					}
					switch (this.direction) {
						case Direction.LEFT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tilemap.putTileAt(tiles[i].index, tiles[i].x + this.velocity, tiles[i].y);
							}
							break;
						case Direction.RIGHT:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tilemap.putTileAt(tiles[i].index, tiles[i].x - this.velocity, tiles[i].y);
							}
							break;
						case Direction.UP:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tilemap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - this.velocity);
							}
							break;
						case Direction.DOWN:
							for (let i = 0, len = tiles.length; i < len; i++) {
								scene.tilemap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + this.velocity);
							}
							break;
					}
					break;
			}
			if (this.spawnItem) {
				scene.spawnItem(this.x + this.width / 2, this.y + this.height / 2, this.spawnItem);
			}
			this.destroy();
		});
	}

	setVelocity(velocity) {
		this.velocity = velocity;
	}

	getVelocity() {
		return this.velocity;
	}

	setAction(action) {
		this.action = action;
	}

	getAction() {
		return this.action;
	}

	setDirection(direction) {
		this.direction = direction;
	}

	getDirection() {
		return this.direction;
	}

	setSpawnItem(spawnItem) {
		this.spawnItem = spawnItem;
	}

	getSpawnItem() {
		return this.spawnItem;
	}

	setNewTiles(newTiles) {
		this.newTiles = newTiles;
	}

	getNewTiles() {
		return this.newTiles;
	}
}
