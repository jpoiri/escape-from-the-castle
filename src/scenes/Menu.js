import Phaser from 'phaser';
import { LoaderKey } from '../constants';

export default class MenuScene extends Phaser.Scene {
	constructor() {
		super('menu');
	}

	create() {

        const image = this.add.image(0, 0, LoaderKey.MENU_IMAGE).setOrigin(0).setScale(0.8);
        
        const text = this.add.text(350, 384, 'Escape from the castle', {
			fontSize: '32px',
			fontFamily: 'Verdana'
		});

		const clickToContinue = this.add.text(512, 460, 'Click to start the game', {
			fontSize: '16px',
			fontFamily: 'Verdana'
		});
		clickToContinue.setOrigin(0.5, 0.5);
	}

	update() {
		if (this.input.manager.activePointer.isDown) {
			this.scene.start('game');
		}
	}
}
