import Phaser from 'phaser';

export default class ImageSign extends Phaser.GameObjects.Rectangle {
    imageKey = null;

    constructor(scene, x, y, width, heigh, imageKey) {
        super(scene, x, y, width, heigh);
        scene.add.existing(this);
        this.setOrigin(0, 0);
		this.setInteractive();
        this.imageKey = imageKey;
    }

    setImageKey(imageKey) {
        this.imageKey = imageKey;
    }

    getImageKey() {
        return this.imageKey;
    }
}