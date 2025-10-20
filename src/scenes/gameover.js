import Phaser from 'phaser';

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
        const text = this.add.text(512, 384, 'Game over', {
            fontSize: '22px',
            fontFamily: 'Verdana'
        });
        text.setOrigin(0.5, 0.5);
    }

}