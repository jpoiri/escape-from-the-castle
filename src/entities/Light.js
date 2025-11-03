import { GameObjects } from "phaser";


export default class Light extends GameObjects.Rectangle {
    constructor(scene) {
        super(scene, 0, 0, scene.cameras.main.width, scene.cameras.main.height, 0x000000, 0.5);
		this.setVisible(false);
		this.setOrigin(0);
		this.setDepth(1000);
		scene.add.existing(this);
    }

    /**
	 * Turn off light
	 */
	turnOff() {
		this.setVisible(true);
	}

	/**
	 * Turn on light
	 */
	turnOn() {
		this.setVisible(false);
	}
}