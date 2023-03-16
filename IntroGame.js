

class IntroGame extends Phaser.Scene {
    constructor() {
        super("introGame");
    }

    preload() { 
        this.load.image("opening", "assets/bg/opening.png");
        this.load.image("nextBtn", "assets/buttons/nextButton.png");
        this.load.image("hrScreen", "assets/bg/hr_screen.png");
        this.load.image("bubbleChatOR", "assets/objects/bubbleChatOrange.png");
    }

    create() { 
        const width = this.cameras.main.width/2;
        const height = this.cameras.main.height/2;
        this.opening = this.add.image(width, height, "opening");
        this.nextBtn = this.add.image(width + 800, height + 420, "nextBtn")
        .setInteractive({useHandCursor: true})
        .setScale(0.8)
        .on('pointerdown', () => this.loadNextScreen())
        .on('pointerover', () => this.nextBtn.setScale(1))
        .on('pointerout', () => this.nextBtn.setScale(0.8))
    }

    update() { }

    loadNextScreen() {
        const width = this.cameras.main.width/2;
        const height = this.cameras.main.height/2;
        this.hrScreen = this.add.image(width, height, "hrScreen");
        this.bubbleChatOR = this.add.image(width - 50, height - 280, "bubbleChatOR");
        this.hrText1 = this.add.text(width - 50, height - 280, 'Hi, Welcome to AGuyIKnow!', {
            fontFamily: '"Poppins', fill: '#924600', fontSize: '34.29px', left: '20px', right: '20px'
        })
    }
}