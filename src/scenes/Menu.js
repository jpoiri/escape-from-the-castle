import { Scene } from 'phaser';
import { LoaderKey, TextSize } from '../constants';
import { addText } from '../utils/text-utils';

/**
 * This class holds the code for the menu scene
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.Scene
 */
const GAME_SCENE = 'game';

export default class MenuScene extends Scene {
	/**
	 * Constructor
	 */
	constructor() {
		super('menu');
	}

	/**
	 * Create Phaser.js hook runs only once
	 */
	create() {
		this.add.image(0, 0, LoaderKey.MENU_IMAGE).setOrigin(0).setScale(0.8);

		addText(this, 310, 350, 'Escape from the castle', TextSize.LARGE);
		addText(this, 512, 450, 'Click to start the game').setOrigin(0.5, 0.5);
	}

	/**
	 * Update Phaser.js hook runs every cycle.
	 */
	update() {
		if (this.input.manager.activePointer.isDown) {
			this.scene.start(GAME_SCENE);
		}
	}
}
