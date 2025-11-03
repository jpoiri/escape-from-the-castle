import { assert } from './assert-utils';

const TWEEN_DURATION = 200;
const TWEEN_EASE = 'Linear';

export function addAlphaTween(scene, targets) {
    assert(!scene, 'The scene is undefined');
    assert(!targets, 'The targers is undefined');
    scene.tweens.add({
		targets,
		alpha: 1,
		ease: TWEEN_EASE,
		duration: TWEEN_DURATION
	});
}
