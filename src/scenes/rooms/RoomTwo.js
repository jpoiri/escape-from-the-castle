import Phaser from 'phaser';
import BaseRoomScene from './BaseRoom';
import { LoaderKey, TilemapLayer } from '../../constants';

export default class RoomTwo extends BaseRoomScene {
	constructor() {
		super('room-two');
	}

	create() {
		console.log('room 2');
		super.create('room-two');
	}

	update() {
		super.update();

		if (this.input.manager.activePointer.isDown) {
			const tile = super.getPointerTile();
		}
	}
}
