import Phaser from 'phaser';
import { LoaderKey } from '../constants';

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

        const text = this.add.text(260, 300, 'Congratulations! You’ve escaped!', {
			fontSize: '32px',
			fontFamily: 'Verdana'
		});

		this.add
			.text(516,
				400,
				'At last, I’ve won my freedom. But as I step beyond the castle gates, the truth returns I had amnesia. This was my castle, and I was my own prisoner.',
				{
					fontSize: '16px',
					fontFamily: 'Verdana',
					wordWrap: {
						width: 400
					}
				}
			)
			.setOrigin(0.5, 0.5);
	}
}
