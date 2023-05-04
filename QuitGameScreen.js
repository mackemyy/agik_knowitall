class QuitGameScene extends Phaser.Scene {
  constructor() {
      super("QuitGame");
  }

  create() {
      const value = this.scene.settings.data.value;
      
      // Determine the scene to resume
      let resumeScene;
      if (value === 1) {
        resumeScene = 'startGame';
      } else if (value === 2) {
        resumeScene = 'ClueCraftStartGame';
      } else {
        // Default to startGame if value is not 1 or 2
        resumeScene = 'startGame';
      }

      // Create a container for the pop-up window
      const container = this.add.container(this.game.config.width / 2, this.game.config.height / 2);
  
      // Add any UI elements to the container
      const window = this.add.image(0, 0, 'quitWindow');
      container.add(window);

      const yesButton = this.add.image(220, 120, 'yesButton');
      yesButton.setInteractive();
      yesButton.on('pointerup', () => {
        this.game.scene.getScene(resumeScene).scene.stop();
        this.scene.start('levelMap');
      });
      container.add(yesButton);

  
      const noButton = this.add.image(-240, 120, 'noButton');
      noButton.setInteractive();
      noButton.on('pointerdown', () => {
        this.scene.stop();
        this.game.scene.getScene(resumeScene).scene.resume();
      });
      container.add(noButton);

      // Add animations to the buttons
      this.addHoverAnimation(yesButton);
      this.addHoverAnimation(noButton);
  }

  // Add hover animation to buttons
  addHoverAnimation(button) {
    button.on('pointerover', () => {
      button.setScale(1.1);
    });
    button.on('pointerout', () => {
      button.setScale(1);
    });
  }
}