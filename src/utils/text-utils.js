import { assert } from './assert-utils';
import { TextSize } from '../constants';

/**
 * Add text to the scene.
 *
 * @param {Phaser.Scene} scene The Phaser scene
 * @param {number} x The x position
 * @param {number} y The y position
 * @param {string} text The text
 * @param {string} size The size
 */
export function addText(scene, x, y, text, size = TextSize.REGULAR, textOps = {}) {
	assert(!scene, 'The scene is undefined');
	assert(x === null || x === undefined, 'The x is undefined');
	assert(y === null || y === undefined, 'The y is undefined');
	assert(!text, 'The text is undefined');
	switch (size) {
		case TextSize.LARGE:
			textOps = { ...textOps, fontSize: '48px', fontFamily: 'Germania One' };
            break;
        case TextSize.SMALL:
            textOps = { ...textOps, fontSize: '18px', fontFamily: 'Germania One' };
            break;
		default:
			textOps = { ...textOps, fontSize: '24px', fontFamily: 'Germania One' };
			break;
	}
	console.log(textOps);

	return scene.add.text(x, y, text, textOps);
}
