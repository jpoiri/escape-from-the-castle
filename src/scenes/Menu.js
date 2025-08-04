import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {

    constructor() {
        super('menu');
    }

    create() {
        const text = this.add.text(512, 250, 'Escape from the Dracula Castle', {
            fontSize: '50px',
            fontFamily: 'Verdana',
            fill: '#fff'
        });
        text.setStroke('#543873', 6);
        text.setOrigin(0.5, 0.5);
        
        const clickToContinue = this.add.text(512, 400, 'Click to start the game', {
            fontSize: '12px',
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