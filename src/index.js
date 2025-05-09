import Phaser from 'phaser';
import RoomOneScene from './scenes/rooms/RoomOne';
import RoomTwoScene from './scenes/rooms/RoomTwo';
import GameOverScene  from './scenes/GameOver';
import WinScene from './scenes/Win';
import SplashScene from './scenes/Menu';
import LoadingScene from './scenes/Loading';

const config = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1024,
		height: 768
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 200 }
		}
	},
	scene: [LoadingScene, SplashScene, RoomOneScene, RoomTwoScene, GameOverScene, WinScene]
};

const game = new Phaser.Game(config);
