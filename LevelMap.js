class LevelMap extends Phaser.Scene{
    constructor() {
        super('levelMap')
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }

    create() { 
        this.levelMapBg = this.add.image(this.centerX, this.centerY, "levelMapBg");
        this.level1 = this.add.image(this.centerX - 590, this.centerY + 90, "level1")
            .setInteractive({useHandCursor: true})
            .setScale(0.6)
            .on('pointerdown', () => this.scene.start('playLogofy'));
        this.miniGame = this.add.image(this.centerX, this.centerY + 265, "miniGame")
            .setInteractive({useHandCursor: true})
            .setScale(0.5)
            .on('pointerdown', () => console.log('miniGame'));
        this.level2 = this.add.image(this.centerX + 590, this.centerY + 90, "level2")
            .setInteractive({useHandCursor: true})
            .setScale(0.6)
            .on('pointerdown', () => console.log('level2'));
    }

    update() { }
}