var config = {
    type: Phaser.AUTO,
    backgroundColor: 0x0C2238,
    scene: [LoadingScene, LoadAllScenes],
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
