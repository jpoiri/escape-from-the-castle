import Phaser from 'phaser';

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
        const text = this.add.text(512, 384, 'Congratulations for escaping? Thank you for playing!', {
            fontSize: '22px',
            fontFamily: 'Verdana'
        });
        text.setOrigin(0.5, 0.5);
    }

}