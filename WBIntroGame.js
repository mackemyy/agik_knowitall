class WBintroGame extends Phaser.Scene {
    constructor() {
        super("WBintroGame");
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }


    create() {

        this.backToHr = this.add.image(this.centerX, this.centerY, "hrScreen");
        this.bubbleChatOR = this.add.image(this.centerX - 50, this.centerY - 280, "bubbleChatOR");
        this.hrText1 = new CustomHrText(this, this.centerX - 230, this.centerY - 380, 'Congrats! I hope you had a blast while learning some awesome skills with Logofy. Are you ready for even more exciting challenges? Well, buckle up and let\'s dive into level 2 together!', '25px', 400);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.loadNextScreen(), 
        () => this.nextBtn.setScale(0.9), () => this.nextBtn.setScale(1.1), 0.9);
        // this.startMusic4 = new SoundButton(this, this.centerX + 800, this.centerY - 450, "music4", musicConfig);
        // this.add.existing(this.startMusic4);
        // this.startMusic4.setDepth(1);
    }

    loadNextScreen() {
        this.nextBtn.destroy();
        this.hrScreen = this.add.image(this.centerX, this.centerY, "hrScreen");
        this.bubbleChatOR = this.add.image(this.centerX - 50, this.centerY - 280, "bubbleChatOR");
        this.hrText1 = new CustomHrText(this, this.centerX - 240, this.centerY - 370, 'In level 2, Master G will take you on a tour of the Whitebelt Office. Get ready for an adventure! Let\'s go!', '30px', 400 );
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showWBOffice(), () => this.nextBtn.setScale(0.9), () => this.nextBtn.setScale(1.1), 0.9);
    }

    showWBOffice() {
        this.hrText1.destroy();
        this.nextBtn.destroy();
        this.hrScreen.alpha = 0;
        this.backToHr.destroy();
        this.bubbleChatOR.destroy();
        this.nextBtn.destroy();
        this.emptyOfficeBg = this.add.image(this.centerX, this.centerY, "WBemptyoffice");
        this.WBObj = this.add.image(this.centerX, this.centerY, "WBObj").setScale(0.3);
        this.WBObjTween = this.add.tween({
            targets: this.WBObj,
            scaleY: 1,
            scaleX: 1,
            duration: 2000,
            starDelay: 2000,
            ease: Phaser.Math.Easing.Sine.In,
            onComplete: function() {
                this.time.addEvent({
                    loop: false,
                    delay: 1500,
                    callback: ()=> { this.showMasterGinWB(); },
                });
            },
            callbackScope: this
        });
    }

    showMasterGinWB() {
        this.officeWithMG = this.add.image(this.centerX, this.centerY, "WBwMasterG");
        this.bubbleChatORLeft = this.add.image(this.centerX + 290, this.centerY - 150, "bubbleChatORLeft");
        this.MGtext1 = new CustomHrText(this, this.centerX -30, this.centerY - 250, 'This is the WhiteBelt Office, which is composed of Web Developers,  Web Designer, and Quality Assurance Specialist','38px', 800);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showMGtext2(), () => this.nextBtn.setScale(0.9), () => this.nextBtn.setScale(1.1), 0.9);
    }

    showMGtext2() {
        this.MGtext1.destroy();
        this.nextBtn.destroy();
        this.MGtext2 = new CustomHrText(this, this.centerX -70, this.centerY - 280, 'WhiteBelt provides a software-as-a-service (SaaS) solution that includes a web and mobile-based platform for managing martial arts schools.','38px', 800);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showMGtext3(), () => this.nextBtn.setScale(0.9), () => this.nextBtn.setScale(1.1), 0.9);
    }

    showMGtext3(){
        this.MGtext2.destroy();
        this.nextBtn.destroy();
        this.MGtext3 = new CustomHrText(this, this.centerX -40, this.centerY - 250, 'This SaaS solution simplifies student management, automates billing, and sends bulk notifications', '38px', 800);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showMGtext4(), () => this.nextBtn.setScale(0.9), () => this.nextBtn.setScale(1.1), 0.9);
    }

    showMGtext4(){
        this.MGtext3.destroy();
        this.nextBtn.destroy();
        this.MGtext4 = new CustomHrText(this, this.centerX - 70, this.centerY - 250, 'With WhiteBelt\'s SaaS solution, martial arts schools can efficiently manage their operations, save time, and focus on teaching their students.', '38px', 800);
        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showMGtext5(), () => this.nextBtn.setScale(0.9), () => this.nextBtn.setScale(1.1), 0.9);
    }

    showMGtext5(){
        this.MGtext4.destroy();
        this.nextBtn.destroy();
        this.MGtext5 = new CustomHrText(this, this.centerX - 50, this.centerY - 280, 'To have a clear idea of the working environment at WhiteBelt, how about let’s play a game? Are you ready?', '38px', 800);
        this.sureBtn = new ImageButton(this, this.centerX + 320, this.centerY - 50, "sureBtn", () => this.scene.start('playClueCraft'), () => this.sureBtn.setScale(0.9), () => this.sureBtn.setScale(1.1), 0.9);
        
    }


}