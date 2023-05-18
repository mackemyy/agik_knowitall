class SoundButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, soundKey, musicConfig) {
      super(scene, x, y);
      this.scene = scene;

      this.startMusic = this.scene.sound.add(soundKey, musicConfig)
      this.soundOff = this.scene.add.image(0, 0, "soundOff")
        .setInteractive({ useHandCursor: true })
        .setScale(0.35)
        .setDepth(1)
        .on("pointerover", () => this.tweenButtonScale(0.38, this.soundOff))
        .on("pointerout", () => this.tweenButtonScale(0.35, this.soundOff))
        .on("pointerdown", function () {
            if (this.scene.sound.locked) {
              this.scene.sound.once("unlocked", function () {
                  this.soundOff.setVisible(false);
                  this.soundOn.setVisible(true);
                  this.startMusic.play();
                },this );
            } else {
              this.startMusic.play();
            }
            this.startMusic.resume();
            this.soundOff.setVisible(false);
            this.soundOn.setVisible(true);
          }, this);
  
      this.soundOn = this.scene.add.image(0, 0, "soundOn")
        .setInteractive({ useHandCursor: true })
        .setScale(0.35)
        .setVisible(false)
        .setDepth(1)
        .on("pointerover", () => this.tweenButtonScale(0.38, this.soundOn))
        .on("pointerout", () => this.tweenButtonScale(0.35, this.soundOn))
        .on( "pointerdown", function () {
            this.startMusic.pause();
            this.soundOff.setVisible(true);
            this.soundOn.setVisible(false);
          }, this);

      this.add(this.soundOff);
      this.add(this.soundOn);
    }
  
    tweenButtonScale(scale, targets) {
      this.scene.tweens.add({
        targets: targets,
        duration: 5,
        scaleX: scale,
        scaleY: scale,
        ease: "Linear",
      });
    }

    stopMusic() {
        this.startMusic.stop();
    }
  }