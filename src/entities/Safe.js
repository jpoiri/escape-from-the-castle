import Phaser from 'phaser';

export default class Safe extends Phaser.Physics.Arcade.Sprite {
	combination = null;
	promptMessage = null;
	opened = false;
	spawnItem = null;
	name = null;

	constructor(scene, x, y, texture, frame, name, combination, promptMessage) {
		super(scene, x, y, texture, frame);
		scene.add.existing(this);
		this.setInteractive();
		this.name = name;
		this.combination = combination;
		this.promptMessage = promptMessage;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	getCombination() {
		return this.combination;
	}

	setCombination(combination) {
		this.combination = combination;
	}

	getPromptMessage() {
		return this.promptMessage;
	}

	setPromptMessage(message) {
		this.promptMessage = message;
	}

	isOpened() {
		return this.opened;
	}

	setOpened(opened) {
		this.opened = opened;
	}

	setSpawnItem(spawnItem) {
		this.spawnItem = spawnItem;
	}

	getSpawnItem() {
		return this.spawnItem;
	}
}
