

class IntroGame extends Phaser.Scene {
    constructor() {
        super("introGame");
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }

    create() {
        this.opening = this.add.image(this.centerX, this.centerY, "opening");
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.loadNextScreen(), () => this.nextBtn.setScale(1), () => this.nextBtn.setScale(0.8), 0.8);
        this.startMusic4 = new SoundButton(this, this.centerX + 800, this.centerY - 450, "music4", musicConfig);
        this.add.existing(this.startMusic4);
        this.startMusic4.setDepth(1);
    }

    loadNextScreen() {
        this.nextBtn.destroy();
        this.hrScreen = this.add.image(this.centerX, this.centerY, "hrScreen");
        this.bubbleChatOR = this.add.image(this.centerX - 50, this.centerY - 280, "bubbleChatOR");
        this.hrText1 = new CustomHrText(this, this.centerX - 180, this.centerY - 320, 'Hi, Welcome to AGuyIKnow!', '30px', 300);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showText2(), () => this.nextBtn.setScale(1), () => this.nextBtn.setScale(0.8), 0.8);
    }

    showText2() {
        this.hrText1.destroy();
        this.nextBtn.destroy();
        this.hrText2 = new CustomHrText(this, this.centerX - 275, this.centerY - 360, "I am Marjorie. I'm the HR of this company, and I'll be the one to introduce you to this place. Let's go!", '30px', 450);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showText3(), () => this.nextBtn.setScale(1), () => this.nextBtn.setScale(0.8), 0.8);
    }

    showText3() {
        this.hrText2.destroy();
        this.nextBtn.destroy();
        this.hrText3 = new CustomHrText(this, this.centerX - 280, this.centerY - 380, 'Our company has two primary offices here in Cebu, the AGIK office and the Whitebelt Office. Let me tour you around.', '30px', 450);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showAGIKOffice(), () => this.nextBtn.setScale(1), () => this.nextBtn.setScale(0.8), 0.8);
    }

    showAGIKOffice() {
        this.hrText3.destroy();
        this.nextBtn.destroy();
        this.hrScreen.alpha = 0;
        this.opening.destroy();
        this.bubbleChatOR.destroy();
        this.nextBtn.destroy();
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
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showText5(), () => this.nextBtn.setScale(1), () => this.nextBtn.setScale(0.8), 0.8);
    }

    showText5() {
        this.hrText4.destroy();
        this.nextBtn.destroy();
        this.hrText5 = new CustomHrText(this, this.centerX - 110, this.centerY - 190, "Our employees usually cater to our client's requests and provide them illustrations,", '38px', 800);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showText6(), () => this.nextBtn.setScale(1), () => this.nextBtn.setScale(0.8), 0.8);
    }

    showText6() {
        this.hrText5.destroy();
        this.nextBtn.destroy();
        this.hrText6 = new CustomHrText(this, this.centerX - 160, this.centerY - 220, 'which will eventually be utilized in their business to help their customers or consumers have a better understanding on how their business operates.', '38px', 800);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showText7(), () => this.nextBtn.setScale(1), () => this.nextBtn.setScale(0.8), 0.8);
    }

    showText7() {
        this.hrText6.destroy();
        this.nextBtn.destroy();
        this.hrText7 = new CustomHrText(this, this.centerX - 140, this.centerY - 240, "To have a clear idea of the working environment at AGIK, how about let's play a game? Are you ready?", '38px', 800);
        this.sureBtn = new ImageButton(this, this.centerX + 230, this.centerY - 10, "sureBtn", () => this.scene.start('levelMap'), () => this.sureBtn.setScale(1), () => this.sureBtn.setScale(0.8), 0.8);
    }
}