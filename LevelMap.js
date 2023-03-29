class LevelMap extends Phaser.Scene{
    constructor() {
        super('levelMap')
    }

    create() { 
        this.levelMapBg = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, "levelMapBg");
        this.level1 = this.add.image(this.cameras.main.width/2 - 590, this.cameras.main.height/2 + 90, "level1")
            .setInteractive({useHandCursor: true})
            .setScale(0.6)
            .on('pointerdown', () => this.scene.start('playLogofy'));
        this.miniGame = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2 + 265, "miniGame")
            .setInteractive({useHandCursor: true})
            .setScale(0.5)
            .on('pointerdown', () => console.log('miniGame'));
        this.level2 = this.add.image(this.cameras.main.width/2 + 590, this.cameras.main.height/2 + 90, "level2")
            .setInteractive({useHandCursor: true})
            .setScale(0.6)
            .on('pointerdown', () => console.log('level2'));
    }

    update() { }
}