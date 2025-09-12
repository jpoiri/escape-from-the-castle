const CustomProperty = {
	COMBINATION: 'combination',
	PROMPT_MESSAGE: 'promptMessage',
	SPAWN_ITEM_NAME: 'spawnItem',
	SPAWN_ITEM_TEXTURE: 'spawnItemTexture',
	SPAWN_ITEM_FRAME: 'spawnItemFrame',
	SPAWN_ITEM_DESCRIPTION: 'spawnItemDescription',
	LOCKED: 'locked',
	LOCKED_MESSAGE: 'lockedMessage',
	TEXT: 'text',
	VISIBLE: 'visible',
	SCRAMBLED: 'scrambled',
	SCRAMBLED_TEXT: 'scrambledText',
	ACTION: 'action',
	NEW_TILES: 'newTiles',
	VELOCITY: 'velocity',
	DIRECTION: 'direction',
	NAVIGATE_TO: 'navigateTo',
	IMAGE_KEY: 'imageKey'
};

const TileAction = {
	MOVE: 'move',
	DESTROY: 'destroy',
	REPLACE: 'replace'
};

const Direction = {
	LEFT: 'left',
	RIGHT: 'right',
	UP: 'UP',
	DOWN: 'down'
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
	SIGN: 'Sign',
	SCRAMBLED_SIGN: 'ScrambledSign',
	INTERACTIVE_ZONE: 'InteractiveZone',
	IMAGE_SIGN: 'ImageSign'
};

const LoaderKey = {
	TILEMAP: 'tilemap',
	TILESET: 'tiles',
	ITEMS: 'items',
	UI: 'ui',
	CHEST: 'chest',
	DOOR: 'door',
	SAFE: 'safe'
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
Object.freeze(TileAction);

export { TilemapLayer, CustomProperty, LoaderKey, EntityType, Tile, Item, Animation, Frame, TileAction, Direction };
