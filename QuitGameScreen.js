class QuitGameScene extends Phaser.Scene {
  constructor() {
      super("QuitGame");
  }

  create() {
      // Create a container for the pop-up window
      const container = this.add.container(this.game.config.width / 2, this.game.config.height / 2);
  
      // Add any UI elements to the container
      const window = this.add.image(0, 0, 'quitWindow');
      container.add(window);

      const yesButton = this.add.image(220, 120, 'yesButton');
      yesButton.setInteractive();
      yesButton.on('pointerup', () => {
        this.game.scene.getScene('startGame').scene.stop();
        // this.scenes.getScene('startGame').destroy();
        this.scene.start('levelMap');
      });
      container.add(yesButton);

      -240, 120
  
      const noButton = this.add.image(-240, 120, 'noButton');
      noButton.setInteractive();
      noButton.on('pointerdown', () => {
        this.scene.stop();
        this.scene.resume('startGame');
      });
      container.add(noButton);


      // Add animations to the buttons
      this.addHoverAnimation(yesButton);
      this.addHoverAnimation(noButton);
  
      // Helper function to add hover animations to a button
    
      // Position the container in the center of the screen
      // container.setPosition(this.game.config.width / 2, this.game.config.height / 2);
    }

    // I have no idea why this code is finally working but thanks god.
    addHoverAnimation(yesButton) {
      yesButton.on('pointerover', () => {
          yesButton.setScale(1.1);
      });
      yesButton.on('pointerout', () => {
      yesButton.setScale(1);
      });
    }
}
