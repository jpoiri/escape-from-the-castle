import { Scene } from 'phaser';
import { LoaderKey } from '../constants';

/**
 * This class holds the code for the loading scene
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.Scene
 */

const FRAME_SIZE = 32;
const MENU_SCENE = 'menu';

export default class LoadingScene extends Scene {
	/**
	 * Constructor
	 */
	constructor() {
		super('loading');
	}

	/**
	 * Preload Phaser hook runs only once
	 */
	preload() {
		this.load.tilemapTiledJSON(LoaderKey.ROOM_ONE_TILEMAP, 'assets/json/room-one-map.json');
		this.load.tilemapTiledJSON(LoaderKey.ROOM_TWO_TILEMAP, 'assets/json/room-two-map.json');
		this.load.tilemapTiledJSON(LoaderKey.ROOM_THREE_TILEMAP, 'assets/json/room-three-map.json');
		this.load.tilemapTiledJSON(LoaderKey.ROOM_FOUR_TILEMAP, 'assets/json/room-four-map.json');
		this.load.tilemapTiledJSON(LoaderKey.ROOM_FIVE_TILEMAP, 'assets/json/room-five-map.json');
		this.load.tilemapTiledJSON(LoaderKey.ROOM_SIX_TILEMAP, 'assets/json/room-six-map.json');
		this.load.image(LoaderKey.CASTLE_TILESET, 'assets/img/castle-tiles/Tileset.png');
		this.load.image(LoaderKey.CREEPY_TILESET, 'assets/img/tiles.png');
		this.load.image(LoaderKey.CONTAINERS_TILESET, 'assets/img/container/container.png');
		this.load.image(LoaderKey.MENU_IMAGE, 'assets/img/castle.png');
		this.load.spritesheet(LoaderKey.NPC_SPRITESHEET, 'assets/img/dungeon-crawl.png', { frameWidth: FRAME_SIZE, frameHeight: FRAME_SIZE });
		this.load.spritesheet(LoaderKey.ITEMS_SPRITESHEET_1, 'assets/img/Treasure Icons/treasure1.png', {
			frameWidth: FRAME_SIZE,
			frameHeight: FRAME_SIZE
		});
		this.load.spritesheet(LoaderKey.ITEMS_SPRITESHEET_2, 'assets/img/Treasure Icons/treasure4.png', {
			frameWidth: FRAME_SIZE,
			frameHeight: FRAME_SIZE
		});
		this.load.audio(LoaderKey.OPEN_DOOR_AUDIO, 'assets/sounds/qubodup-DoorSet/flac/qubodup-DoorOpen01.flac');
		this.load.audio(LoaderKey.OPEN_CHEST_AUDIO, 'assets/sounds/open-chest.wav');
		this.load.audio(LoaderKey.PUSH_AUDIO, 'assets/sounds/sfx-push-boulder.flac');
		this.load.audio(LoaderKey.GOT_ITEM_AUDIO, 'assets/sounds/Item1A.wav');
		this.load.audio(LoaderKey.EXPLOSION_AUDIO, 'assets/sounds/erase.wav');
		this.load.script(LoaderKey.WEB_FONT, 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
		this.load.on('complete', () => {
			window.WebFont.load({
				google: {
					families: ['Germania One']
				},
				active: () => {
					this.scene.start(MENU_SCENE);
				}
			});
		});
	}
}
