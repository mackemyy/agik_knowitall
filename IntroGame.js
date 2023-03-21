

class IntroGame extends Phaser.Scene {
    constructor() {
        super("introGame");
    }

    preload() { 
        this.load.image("opening", "assets/bg/opening.png");
        this.load.image("nextBtn", "assets/buttons/nextButton.png");
        this.load.image("hrScreen", "assets/bg/hr_screen.png");
        this.load.image("bubbleChatOR", "assets/objects/bubbleChatOrange.png");
        this.load.image("emptyOffice", "assets/bg/empty_office_bg.png");
        this.load.image("agikObj", "assets/objects/AGIK.png");
        this.load.image("officeWithHR", "assets/bg/office_with_hr.png");
        this.load.image("bubbleChatORLeft", "assets/objects/bubbleChatORLeft.png");
        this.load.image("sureBtn", "assets/buttons/sureButton.png");
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
        this.hrText1 = this.add.text(width - 180, height - 320, 'Hi, Welcome to AGuyIKnow!', {
            fontFamily: '"Montserrat"', fill: '#924600', fontSize: '30px', align: "center", wordWrap: { width: 300, useAdvancedWrap: true }
        });
        this.nextBtn1 = this.add.image(width + 800, height + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText2())
            .on('pointerover', () => this.nextBtn1.setScale(1))
            .on('pointerout', () => this.nextBtn1.setScale(0.8))
    }

    showText2() {
        this.hrText1.alpha = 0;
        this.nextBtn1.alpha = 0;
        this.hrText2 = this.add.text(this.cameras.main.width/2 - 280, this.cameras.main.height/2 - 360, 'I am Marjorie. I am the HR of this company, and I will be the one to introduce you to this place. Lets go!', {
            fontFamily: '"Montserrat"', fill: '#924600', fontSize: '30px', align: "center", wordWrap: { width: 480, useAdvancedWrap: true }
        });
        this.nextBtn2 = this.add.image(this.cameras.main.width/2 + 800, this.cameras.main.height/2 + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText3())
            .on('pointerover', () => this.nextBtn2.setScale(1))
            .on('pointerout', () => this.nextBtn2.setScale(0.8))
    }

    showText3() {
        this.hrText2.alpha = 0;
        this.nextBtn2.alpha = 0;
        this.hrText3 = this.add.text(this.cameras.main.width/2 - 280, this.cameras.main.height/2 - 380, 'Our company has two primary offices here in Cebu, the AGIK office and the Whitebelt Office. Let me tour you around.', {
            fontFamily: '"Montserrat"', fill: '#924600', fontSize: '30px', align: "center", wordWrap: { width: 450, useAdvancedWrap: true }
        });
        this.nextBtn3 = this.add.image(this.cameras.main.width/2 + 800, this.cameras.main.height/2 + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showAGIKOffice())
            .on('pointerover', () => this.nextBtn3.setScale(1))
            .on('pointerout', () => this.nextBtn3.setScale(0.8))
    }

    showAGIKOffice() {
        this.hrText3.alpha = 0;
        this.nextBtn3.alpha = 0;
        this.hrScreen.alpha = 0;
        this.opening.alpha = 0;
        this.bubbleChatOR.alpha = 0;
        this.nextBtn.alpha = 0;
        this.emptyOfficeBg = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, "emptyOffice");
        this.agikObj = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, "agikObj").setScale(0.3);
        this.agikObjTween = this.add.tween({
            targets: this.agikObj,
            scaleY: 1,
            scaleX: 1,
            duration: 2000,
            starDelay: 2000,
            ease: Phaser.Math.Easing.Sine.In,
            onComplete: function() {
                this.time.addEvent({
                    loop: false,
                    delay: 1500,
                    callback: ()=> { this.showHRinAGIK(); },
                });
            },
            callbackScope: this
        });
    }

    showHRinAGIK() {
        this.officeWithHR = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, "officeWithHR");
        this.bubbleChatORLeft = this.add.image(this.cameras.main.width/2 + 200, this.cameras.main.height/2 - 100, "bubbleChatORLeft");
        this.hrText4 = this.add.text(this.cameras.main.width/2 - 170, this.cameras.main.height/2 - 200, 'This is the AGIK Office, which is composed of graphic & web designers, illustrators, and game developers.', {
            fontFamily: '"Montserrat"', fill: '#924600', fontSize: '38px', align: "center", wordWrap: { width: 800, useAdvancedWrap: true }
        });
        this.nextBtn4 = this.add.image(this.cameras.main.width/2 + 800, this.cameras.main.height/2 + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText5())
            .on('pointerover', () => this.nextBtn4.setScale(1))
            .on('pointerout', () => this.nextBtn4.setScale(0.8))
    }

    showText5() {
        this.hrText4.alpha = 0;
        this.nextBtn4.alpha = 0;
        this.hrText5 = this.add.text(this.cameras.main.width/2 - 110, this.cameras.main.height/2 - 200, 'Our employees usually cater to our clients requests and provide them illustrations,', {
            fontFamily: '"Montserrat"', fill: '#924600', fontSize: '38px', align: "center", wordWrap: { width: 800, useAdvancedWrap: true }
        });
        this.nextBtn5 = this.add.image(this.cameras.main.width/2 + 800, this.cameras.main.height/2 + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText6())
            .on('pointerover', () => this.nextBtn5.setScale(1))
            .on('pointerout', () => this.nextBtn5.setScale(0.8))
    }

    showText6() {
        this.hrText5.alpha = 0;
        this.nextBtn5.alpha = 0;
        this.hrText6 = this.add.text(this.cameras.main.width/2 - 160, this.cameras.main.height/2 - 220, 'which will eventually be utilized in their business to help their customers or consumers have a better understanding on how their business operates.', {
            fontFamily: '"Montserrat"', fill: '#924600', fontSize: '38px', align: "center", wordWrap: { width: 800, useAdvancedWrap: true }
        });
        this.nextBtn6 = this.add.image(this.cameras.main.width/2 + 800, this.cameras.main.height/2 + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText7())
            .on('pointerover', () => this.nextBtn6.setScale(1))
            .on('pointerout', () => this.nextBtn6.setScale(0.8))
    }

    showText7() {
        this.hrText6.alpha = 0;
        this.nextBtn6.alpha = 0;
        this.hrText7 = this.add.text(this.cameras.main.width/2 - 170, this.cameras.main.height/2 - 240, 'To have a clear idea of the working environment at AGIK, how about let’s play a game? Are you ready?', {
            fontFamily: '"Montserrat"', fill: '#924600', fontSize: '38px', align: "center", wordWrap: { width: 800, useAdvancedWrap: true }
        });
        this.sureBtn = this.add.image(this.cameras.main.width/2 + 220, this.cameras.main.height/2 - 10, "sureBtn")
            .setScale(0.8)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => this.scene.start('levelMap'))
            .on('pointerover', () => this.sureBtn.setScale(1))
            .on('pointerout', () => this.sureBtn.setScale(0.8))
    }
}