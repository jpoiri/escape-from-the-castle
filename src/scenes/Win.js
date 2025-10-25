import Phaser from 'phaser';
import { LoaderKey, TextSize } from '../constants';
import { addText } from '../utils/text-utils';

/**
 * This class holds the code for the winning scene
 * @author Justin Poirier
 * @copyright 2025
 * @extends Phaser.Scene
 */
export default class WinningScene extends Phaser.Scene {
	/**
	 * Constructor
	 */
	constructor() {
		super('win');
	}

	/**
	 * Create Phaser.js hook. Runs only once
	 */
	create() {
		this.add.image(0, 0, LoaderKey.MENU_IMAGE).setOrigin(0).setScale(0.8).setAlpha(0.5);

		addText(this, 200, 300, 'Congratulations! You’ve escaped!', TextSize.LARGE);
		addText(
			this,
			516,
			420,
			'At last, I’ve won my freedom. But as I step beyond the castle gates, the truth returns I had amnesia. This was my castle, and I was my own prisoner.',
			TextSize.REGULAR,
			{
				wordWrap: {
					width: 400
				}
			}
		).setOrigin(0.5);
	}
}
