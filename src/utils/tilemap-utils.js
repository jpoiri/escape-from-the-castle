import { assert } from "./assert-utils";
import { TilemapLayer, Direction } from '../constants';

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

export function removeTiles(tileMap, tiles) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.removeTileAt(tiles[i].x, tiles[i].y);
    }
}

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

export function moveTilesLeft(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x - velocity, tiles[i].y);
    }
}

export function moveTilesRight(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x + velocity, tiles[i].y);
    }
}

export function moveTilesUp(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y - velocity);
    }
}

export function moveTileDown(tileMap, tiles, velocity) {
    assert(!tileMap, 'The tileMap is undefined');
    assert(!tiles, 'The tiles is undefined');
    assert(!velocity, 'The velocity is undefined');
    for (let i = 0, len = tiles.length; i < len; i++) {
        tileMap.putTileAt(tiles[i].index, tiles[i].x, tiles[i].y + velocity);
    }
}