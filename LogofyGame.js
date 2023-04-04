class PlayLogofy extends Phaser.Scene {
    constructor() {
        super("playLogofy");
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }

    create() {
        this.emptyOffice1Bg = this.add.image(this.centerX, this.centerY, "emptyOffice1");
        this.gameTitleCtr = this.add.image(this.centerX, this.centerY, "gameTitleCtr");
        this.groupGameObjTxt = this.add.container(10,10).setVisible(false);

        this.letsDesignTxt = this.add.text(this.centerX, this.centerY - 70, "LET'S DESIGN,", {
            fontFamily: '"Typesauce"', fill: '#FF7A00', fontSize: '75px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true },
            origin: 0.5
        });
        this.letsDesignTxt.setScale(0.0).setOrigin(0.5);

        this.logofyTxt = this.add.text(this.centerX, this.centerY + 40, 'logofy!', {
            fontFamily: '"Typesauce"', fill: '#FF7A00', fontSize: '120px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true },
            origin: 0.5
        });
        this.logofyTxt.setScale(0.0).setOrigin(0.5);

        this.letsDesignLogofyTxtTween = this.add.tween({
            targets: [this.letsDesignTxt, this.logofyTxt],
            scaleX: 1,
            scaleY: 1,
            duration: 2000,
            ease: Phaser.Math.Easing.Bounce.Out,
        });

        this.letsDesignLogofyTxtTween.on('complete', async () => {
            await this.time.delayedCall(1200);
            this.showGameObjective();
        });
     }

     showGameObjective() {
        this.logofyTxt.alpha = 0;
        this.letsDesignTxt.alpha = 0;
        this.gameObjCtr = this.add.image(this.centerX, this.centerY - 300, "gameObjCtr");
        this.gameObjTitleTxt = this.add.text(this.centerX - 295, this.centerY - 350, "game objective", { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '72px', align: "center", });
        
        this.gameObjTexts = [
            "• LOGOFY is a 3-stage logo making game where you make logo or signage that matches client orders.",
            "• The three stages consist of different clients from these three sectors: Education, Government, and Business.",
            "• At each stage, clients will be giving you their envisioned logo or signage.",
            "• Make sure to design the logo that perfectly suits client's description to earn more points.",
            "• Earn the maximum points in each stage to advance to the next level within the allotted time."
        ];
        this.groupGameObjTxt = this.add.group();

        for(let i = 0; i < this.gameObjTexts.length; i++) {
            this.gameObjTxt = this.add.text(this.centerX - 390, this.centerY  - 150 + (i * 75), this.gameObjTexts[i], {
                fontFamily: '"Montserrat"',
                fill: '#713600',
                fontSize: '25px',
                align: "left",
                wordWrap: { width: 830, useAdvancedWrap: true }
              });
              this.groupGameObjTxt.add(this.gameObjTxt);
        }

        this.gameObjTxtTween = this.add.tween({
            targets: this.groupGameObjTxt,
            alpha: 1,
            duration: 15000,
            ease: Phaser.Math.Easing.Sine.Out,
            onComplete: function() { this.showHRNarrate(); },
            callbackScope: this,
        });

        this.nextBtn = this.add.image(this.centerX + 800, this.centerY + 420, "nextBtn")
            .setInteractive({useHandCursor: true})
            .setScale(0.8)
            .on('pointerdown', () => this.showHRNarrate())
            .on('pointerover', () => this.nextBtn.setScale(1))
            .on('pointerout', () => this.nextBtn.setScale(0.8))
     }

     showHRNarrate() {
        this.gameObjCtr.setVisible(false);
        this.gameObjTitleTxt.setVisible(false);
        this.gameTitleCtr.setVisible(false);
        this.groupGameObjTxt.setVisible(false);
        this.nextBtn.setVisible(false);
        this.hrNarrateCtr = this.add.image(this.centerX, this.centerY + 250, "hrNarrateCtr");
        this.hrDP = this.add.image(this.centerX - 465, this.centerY + 240, "hrDP");
        this.playbtn = this.add.image(this.centerX + 500, this.centerY + 350, "playbtn")
            .setInteractive({useHandCursor: true})
            .on('pointerdown', ()=> this.scene.start("startGame") )
            .on('pointerover', () => this.playbtn.setPosition(this.centerX + 490, this.centerY + 340))
            .on('pointerout', () => this.playbtn.setPosition(this.centerX + 500, this.centerY + 350));
        this.hrNarrateTxt = this.add.text(this.centerX - 240, this.centerY + 120, "To begin, read the client's request at the left side of the screen, which will be your guide in making the logo. You'll be given 90 seconds to finish all the clients' request. Do your best and good luck!", {
            fontFamily: '"Montserrat"', fill: '#00453B', fontSize: '29px', align: "justify", wordWrap: { width: 820, useAdvancedWrap: true }})
     }  
}