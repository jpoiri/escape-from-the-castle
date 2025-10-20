import { assert } from "./assert-utils";
import { TilemapLayer, Direction } from '../constants';

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
export function getTilesWithinWorldXY(tileMap, x, y, width, height, layer = TilemapLayer.FOREGROUND) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!x, 'The x is undefined');
    assert(!y, 'The y is undefined');
    assert(!width, 'The width is undefined');
    assert(!height, 'The height is undefined');
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
export function removeTiles(tileMap, tiles) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
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
export function replaceTiles(tileMap, oldTiles, newTiles) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!oldTiles, 'The oldTiles is undefined');
    assert(!newTiles, 'The newTiles is undefined');
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
export function moveTiles(tileMap, tiles, direction, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!direction, 'The direction is undefined');
    assert(!velocity, 'The velocity is undefined');
    switch (direction) {
        case Direction.LEFT:
            moveTilesLeft(tileMap, tiles, velocity);
            break;
        case Direction.RIGHT:
            moveTilesRight(tileMap, tiles, velocity);
            break;
        case Direction.UP:
            moveTilesUp(tileMap, tiles, velocity);
            break;
        case Direction.DOWN:
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
export function moveTilesLeft(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
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
export function moveTilesRight(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
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
export function moveTilesUp(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
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
export function moveTileDown(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
    }
}