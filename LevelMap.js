class LevelMap extends Phaser.Scene{
    constructor() {
        super('levelMap')
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }

    create() {
        this.levelMapBg = this.add.image(this.centerX, this.centerY, "levelMapBg");
        
        const level1Image = this.add.image(this.centerX - 300, this.centerY + 90, "level1")
          .setInteractive({ useHandCursor: true })
          .setScale(0.8);
      
        const level2Image = this.add.image(this.centerX + 300, this.centerY + 90, "level2")
          .setInteractive({ useHandCursor: true })
          .setScale(0.8);
      
        const hoverAnimation1 = this.tweens.create({
          targets: level1Image,
          scaleX: 0.9,
          scaleY: 0.9,
          duration: 50,
          paused: true,
        });
      
        const hoverAnimation2 = this.tweens.create({
          targets: level2Image,
          scaleX: 0.9,
          scaleY: 0.9,
          duration:50,
          paused: true,
        });
      
        level1Image.on('pointerover', function () {
          this.setScale(0.9);
          hoverAnimation1.play();
        });
      
        level1Image.on('pointerout', function () {
          this.setScale(0.8);
          hoverAnimation1.stop();
        });
      
        level1Image.on('pointerdown', () => this.scene.start('playLogofy'));
      
        level2Image.on('pointerover', function () {
          this.setScale(0.9);
          hoverAnimation2.play();
        });
      
        level2Image.on('pointerout', function () {
          this.setScale(0.8);
          hoverAnimation2.stop();
        });
      
        level2Image.on('pointerdown', () => this.scene.start('WBintroGame'));
      }

      
      
      
      

    update() { }
}