import Phaser from 'phaser';
import { LoaderKey } from '../constants';

/**
 * This class holds the code for the loading scene
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.Scene
 */
export default class LoadingScene extends Phaser.Scene {
	
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
		this.load.tilemapTiledJSON('room-one', 'assets/json/room-one-map.json');
		this.load.tilemapTiledJSON('room-two', 'assets/json/room-two-map.json');
		this.load.tilemapTiledJSON('room-three', 'assets/json/room-three-map.json');
		this.load.tilemapTiledJSON('room-four', 'assets/json/room-four-map.json');
		this.load.tilemapTiledJSON('room-five', 'assets/json/room-five-map.json');
		this.load.tilemapTiledJSON('room-six', 'assets/json/room-six-map.json');
		this.load.image('castle-tiles', 'assets/img/castle-tiles/Tileset.png');
		this.load.image('creepy-tiles', 'assets/img/tiles.png');
		this.load.image('containers', 'assets/img/container/container.png');
		this.load.image(LoaderKey.MENU_IMAGE, 'assets/img/castle.png');
		this.load.spritesheet('dungeon-crawl', 'assets/img/dungeon-crawl.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet('treasure1', 'assets/img/Treasure Icons/treasure1.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet('treasure2', 'assets/img/Treasure Icons/treasure4.png', { frameWidth: 32, frameHeight: 32 });
		this.load.audio('open-door-audio', 'assets/sounds/qubodup-DoorSet/flac/qubodup-DoorOpen01.flac');
		this.load.audio('open-chest-audio', 'assets/sounds/open-chest.wav');
		this.load.audio('push-audio', 'assets/sounds/sfx-push-boulder.flac');
		this.load.audio('got-item-audio', 'assets/sounds/Item1A.wav');
		this.load.audio('explosion-audio', 'assets/sounds/erase.wav');
		this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
		this.load.on('complete', () => {
			WebFont.load({
				google: {
					families: ['Germania One']
				},
				active: () => {
					this.scene.start('menu');
				}
			});
		});
	}
}
