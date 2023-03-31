

class IntroGame extends Phaser.Scene {
    constructor() {
        super("introGame");
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }

    create() {
        this.opening = this.add.image(this.centerX, this.centerY, "opening");
        this.nextBtn = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
        .setInteractive({useHandCursor: true})
        .setScale(0.8)
        .on('pointerdown', () => this.loadNextScreen())
        .on('pointerover', () => this.nextBtn.setScale(1))
        .on('pointerout', () => this.nextBtn.setScale(0.8))
    }

    update() { }

    loadNextScreen() {
        this.hrScreen = this.add.image(this.centerX, this.centerY, "hrScreen");
        this.bubbleChatOR = this.add.image(this.centerX - 50, this.centerY - 280, "bubbleChatOR");
        this.hrText1 = new CustomHrText(this, this.centerX - 180, this.centerY - 320, 'Hi, Welcome to AGuyIKnow!', '30px', 300);
        this.nextBtn1 = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText2())
            .on('pointerover', () => this.nextBtn1.setScale(1))
            .on('pointerout', () => this.nextBtn1.setScale(0.8))
    }

    showText2() {
        this.hrText1.alpha = 0;
        this.nextBtn1.alpha = 0;
        this.hrText2 = new CustomHrText(this, this.centerX - 275, this.centerY - 360, "I am Keisha Harriet. I'm the HR of this company, and I'll be the one to introduce you to this place. Let's go!", '30px', 450);
        this.nextBtn2 = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText3())
            .on('pointerover', () => this.nextBtn2.setScale(1))
            .on('pointerout', () => this.nextBtn2.setScale(0.8))
    }

    showText3() {
        this.hrText2.alpha = 0;
        this.nextBtn2.alpha = 0;
        this.hrText3 = new CustomHrText(this, this.centerX - 280, this.centerY - 380, 'Our company has two primary offices here in Cebu, the AGIK office and the Whitebelt Office. Let me tour you around.', '30px', 450);
        this.nextBtn3 = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
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
        this.emptyOfficeBg = this.add.image(this.centerX, this.centerY, "emptyOffice");
        this.agikObj = this.add.image(this.centerX, this.centerY, "agikObj").setScale(0.3);
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
        this.officeWithHR = this.add.image(this.centerX, this.centerY, "officeWithHR");
        this.bubbleChatORLeft = this.add.image(this.centerX + 200, this.centerY - 100, "bubbleChatORLeft");
        this.hrText4 = new CustomHrText(this, this.centerX - 150, this.centerY - 200, 'This is the AGIK Office, which is composed of graphic & web designers, illustrators, and game developers.','38px', 800);
        this.nextBtn4 = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText5())
            .on('pointerover', () => this.nextBtn4.setScale(1))
            .on('pointerout', () => this.nextBtn4.setScale(0.8))
    }

    showText5() {
        this.hrText4.alpha = 0;
        this.nextBtn4.alpha = 0;
        this.hrText5 = new CustomHrText(this, this.centerX - 110, this.centerY - 190, "Our employees usually cater to our client's requests and provide them illustrations,", '38px', 800);
        this.nextBtn5 = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText6())
            .on('pointerover', () => this.nextBtn5.setScale(1))
            .on('pointerout', () => this.nextBtn5.setScale(0.8))
    }

    showText6() {
        this.hrText5.alpha = 0;
        this.nextBtn5.alpha = 0;
        this.hrText6 = new CustomHrText(this, this.centerX - 160, this.centerY - 220, 'which will eventually be utilized in their business to help their customers or consumers have a better understanding on how their business operates.', '38px', 800);
        this.nextBtn6 = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showText7())
            .on('pointerover', () => this.nextBtn6.setScale(1))
            .on('pointerout', () => this.nextBtn6.setScale(0.8))
    }

    showText7() {
        this.hrText6.alpha = 0;
        this.nextBtn6.alpha = 0;
        this.hrText7 = new CustomHrText(this, this.centerX - 140, this.centerY - 240, "To have a clear idea of the working environment at AGIK, how about let's play a game? Are you ready?", '38px', 800);
        this.sureBtn = this.add.image(this.centerX + 230, this.centerY - 10, "sureBtn")
            .setScale(0.8)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => this.scene.start('levelMap'))
            .on('pointerover', () => this.sureBtn.setScale(1))
            .on('pointerout', () => this.sureBtn.setScale(0.8))
    }
}

class CustomHrText extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, fontSize, width) {
        super(scene, x, y, text, { fontFamily: '"Montserrat"', fill: '#924600', fontSize: fontSize, align: "center", wordWrap: { width: width, useAdvancedWrap: true }});
        scene.add.existing(this);
    }
}