import { assert } from './assert-utils';
import { ModalSize } from '../constants';

/**
 * Displays a modal window with text
 * @param {Phaser.Scene} scene The Phaser scene
 * @param {string} text The text
 * @param {string} size The modal size
 * @param {function} closeCallback The callback function call when modal is closed
 */
export function showTextModal(scene, text, size = ModalSize.REGULAR, closeCallback) {
	assert(!scene, 'The scene is undefined');
	assert(!text, 'The text is undefined');
	const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
	const modal = scene.add.container(450, 350).setAlpha(0);
	let box = null;
	let closeText = null;

	switch (size) {
		case ModalSize.REGULAR:
			box = scene.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
			closeText = scene.add
				.text(155, -69, 'Close X', {
					fontSize: '16px',
					fontFamily: 'verdana',
					fill: '#FFFFFF'
				})
				.setInteractive();
			break;
		case ModalSize.LARGE:
			closeText = scene.add
				.text(155, -169, 'Close X', {
					fontSize: '16px',
					fontFamily: 'verdana',
					fill: '#FFFFFF'
				})
				.setInteractive();
			box = scene.add.rectangle(0, 0, 450, 350, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
			break;
	}
	const textObj = scene.add
		.text(0, 0, text, {
			wordWrap: {
				width: 400
			},
			fontSize: '16px',
			fontFamily: 'verdana',
			fill: '#FFFFFF'
		})
		.setOrigin(0.5);

	closeText.on('pointerdown', () => {
		blocker.destroy();
		modal.destroy();
		if (closeCallback) {
			closeCallback();
		}
	});
	scene.tweens.add({
		targets: modal,
		alpha: 1,
		ease: 'Linear',
		duration: 200
	});
	modal.add([box, textObj, closeText]);
}

/**
 * Displays a modal window that with an image
 * @param {Phaser.Scene} scene The Phaser scene
 * @param {string} imageKey The Phaser loader key for the image 
 * @param {function} closeCallback The callback function called when modal is closed.
 */
export function showImageModal(scene, imageKey, closeCallback) {
	assert(!scene, 'The scene is undefined');
	assert(!imageKey, 'The imageKey is undefined');
	const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
	const modal = scene.add.container(450, 350).setAlpha(0);
	const box = scene.add.rectangle(0, 0, 450, 350, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
	const image = scene.add.image(0, 0, imageKey).setOrigin(0.5);
	image.setDisplaySize(box.width - 60, box.height - 60);

	const closeText = scene.add
		.text(155, -169, 'Close X', {
			fontSize: '16px',
			fontFamily: 'verdana',
			fill: '#FFFFFF'
		})
		.setInteractive();

	closeText.on('pointerdown', () => {
		blocker.destroy();
		modal.destroy();
		if (closeCallback) {
			closeCallback();
		}
	});

	scene.tweens.add({
		targets: modal,
		alpha: 1,
		ease: 'Linear',
		duration: 200
	});

	modal.add([box, image, closeText]);
}

/**
 * Displays a modal window with text and item information
 * @param {object} scene The Phaser scene
 * @param {string} itemDescription The description of item
 * @param {string} itemTexture The texture associated with the item
 * @param {number} itemFrame  The frame associated with the item
 * @param {function} closeCallback The callback function called when modal is closed
 */
export function showItemModal(scene, itemDescription, itemTexture, itemFrame, closeCallback) {
	assert(!scene, 'The scene is undefined');
	assert(!itemDescription, 'The itemDescription is undefined');
	const blocker = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5).setOrigin(0).setInteractive();
	const modal = scene.add.container(450, 350).setAlpha(0);
	const box = scene.add.rectangle(0, 0, 450, 150, 0x000000).setStrokeStyle(6, 0xa6a6a6).setOrigin(0.5);
	const closeText = scene.add
		.text(155, -69, 'Close X', {
			fontSize: '16px',
			fontFamily: 'verdana',
			fill: '#FFFFFF'
		})
		.setInteractive();

	const itemImage = scene.add.image(0, -10, itemTexture, itemFrame).setScale(2);
	const itemDescriptionText = scene.add
		.text(0, 30, itemDescription, {
			fontSize: '16px',
			fontFamily: 'verdana',
			fill: '#FFFFFF'
		})
		.setOrigin(0.5);

	closeText.on('pointerdown', () => {
		blocker.destroy();
		modal.destroy();
		if (closeCallback) {
			closeCallback();
		}
	});

	scene.tweens.add({
		targets: modal,
		alpha: 1,
		ease: 'Linear',
		duration: 200
	});

	modal.add([box, itemImage, itemDescriptionText, closeText]);
}
