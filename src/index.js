import { Game, Scale, AUTO } from 'phaser';
import GameScene from './scenes/Game';
import GameOverScene  from './scenes/GameOver';
import WinScene from './scenes/Win';
import SplashScene from './scenes/Menu';
import LoadingScene from './scenes/Loading';

const config = {
	type: AUTO,
	scale: {
		mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH,
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
	scene: [LoadingScene, SplashScene, GameScene, GameOverScene, WinScene]
};

new Game(config);
