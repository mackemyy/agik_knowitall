var musicConfig = {
    mute: false,
    volume: 0.5,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0,
}

var config = {
    type: Phaser.AUTO,
    backgroundColor: 0x0C2238,
    scene: [ LoadAllAssets, LoadingScene, IntroGame, PlayLogofy, playClueCraft, LevelMap, WBintroGame, StartGame, ShapesPopUpScene, TextPopUpScene, QuitGameScene, ],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    },
    dom: {
        createContainer: true
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        max: {width:1920, height: 1080},
        width: 1920,
        height: 1080
    },
}

var game = new Phaser.Game(config);
