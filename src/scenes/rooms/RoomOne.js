import Phaser from 'phaser';
import BaseRoomScene from './BaseRoom';
import { LoaderKey, TilemapLayer } from '../../constants';

export default class RoomOne extends BaseRoomScene {
	constructor() {
		super('room-one');
	}

	create() {
		console.log('room 1');
		super.create('room-one');
	}

	update() {
		super.update();

		/**
		if (this.input.manager.activePointer.isDown) {
			this.scene.start('room-two');
		}
		**/
	}
}
