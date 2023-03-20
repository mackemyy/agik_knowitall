class LevelMap extends Phaser.Scene{
    constructor() {
        super('levelMap')
    }

    preload() {
        this.load.image("levelMap", "assets/bg/level_map.png");
     }

    create() { 
        this.levelMap = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, "levelMap")
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => this.scene.start('playLogofy'))
    }

    update() { }
}