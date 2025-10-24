import Phaser from 'phaser';
import { LoaderKey } from '../constants';

/**
 * This class holds the code for the game over scene.
 * @author Justin Poirier
 * @copyright 20025
 * @extends Phaser.Scene
 */
export default class GameOverScene extends Phaser.Scene {
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

		const text = this.add.text(400, 300, 'Game over!', {
			fontSize: '32px',
			fontFamily: 'Verdana'
		});

		this.add
			.text(
				516,
				400,
				'Alas, you failed to escape the castle in time, and now your soul is doomed to linger forever within its walls.',
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
