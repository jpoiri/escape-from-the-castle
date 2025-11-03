import { Scene } from 'phaser';
import { LoaderKey, TextSize } from '../constants';
import { addText } from '../utils/text-utils';

/**
 * This class holds the code for the game over scene.
 * @author Justin Poirier
 * @copyright 20025
 * @extends Phaser.Scene
 */
export default class GameOverScene extends Scene {
	/**
	 * Constuctor
	 */
	constructor() {
		super('gameover');
	}

	/**
	 * Create Phaser hook runs once.
	 */
	create() {
		this.add.image(0, 0, LoaderKey.MENU_IMAGE).setOrigin(0).setScale(0.8).setAlpha(0.5);

		addText(this, 400, 300, 'Game over!', TextSize.LARGE);
		addText(
			this,
			516,
			400,
			'Alas, you failed to escape the castle in time, and now your soul is doomed to linger forever within its walls.',
			TextSize.REGULAR,
			{
				wordWrap: {
					width: 400
				}
			}
		).setOrigin(0.5);
	}
}
