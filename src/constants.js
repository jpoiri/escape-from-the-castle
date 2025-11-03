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
	ROOM_ONE_TILEMAP: 'room-one',
	ROOM_TWO_TILEMAP: 'room-two',
	ROOM_THREE_TILEMAP: 'room-three',
	ROOM_FOUR_TILEMAP: 'room-four',
	ROOM_FIVE_TILEMAP: 'room-five',
	ROOM_SIX_TILEMAP: 'room-six',
	CASTLE_TILESET: 'castle-tiles',
	CREEPY_TILESET: 'creepy-tiles',
	CONTAINERS_TILESET: 'containers',
	NPC_SPRITESHEET: 'dungeon-crawl',
	ITEMS_SPRITESHEET_1: 'treasure1',
	ITEMS_SPRITESHEET_2: 'treasure2',
	OPEN_DOOR_AUDIO: 'open-door-audio',
	OPEN_CHEST_AUDIO: 'open-chest-audio',
	PUSH_AUDIO: 'push-audio',
	GOT_ITEM_AUDIO: 'got-item-audio',
	EXPLOSION_AUDIO: 'explosion-audio',
	WEB_FONT: 'webfont',
	MENU_IMAGE: 'menu-image'
};

Object.freeze(TilemapLayer);
Object.freeze(CustomProperty);
Object.freeze(LoaderKey);
Object.freeze(EntityType);
Object.freeze(ActionType);
Object.freeze(Direction);
Object.freeze(SpawnType);
Object.freeze(ModalSize);
Object.freeze(TextSize);

export {
	TilemapLayer,
	CustomProperty,
	LoaderKey,
	EntityType,
	ActionType,
	Direction,
	SpawnType,
	ModalSize,
	TextSize
};
