class playClueCraft extends Phaser.Scene {
    constructor() {
        super("playClueCraft");
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
        
    }


    create() {
        this.emptyOffice1Bg = this.add.image(this.centerX, this.centerY, "WBemptyoffice");
        this.gameTitleCtr = this.add.image(this.centerX, this.centerY, "gameTitleCtr");
        this.groupGameObjTxt = this.add.container(10,10).setVisible(false);

        this.clueCraftTxt = this.add.text(this.centerX, this.centerY + 40, 'cluecraft', {
            fontFamily: '"Typesauce"', fill: '#FF7A00', fontSize: '160px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true },
            origin: 0.5
        });
        this.clueCraftTxt.setScale(0.0).setOrigin(0.5);

        this.ClueCraftTxtTween = this.add.tween({
            targets: [this.clueCraftTxt],
            scaleX: 1,
            scaleY: 1,
            duration: 2500,
            ease: Phaser.Math.Easing.Bounce.Out,
        });

        this.ClueCraftTxtTween.on('complete', async () => {
            await this.time.delayedCall(1800);
            this.showGameObjective();
        });
    }

    showGameObjective() {
        this.clueCraftTxt.alpha = 0;
        this.clueCraftTxt.alpha = 0;
        this.gameObjCtr = this.add.image(this.centerX, this.centerY - 300, "gameObjCtr");
        this.gameObjTitleTxt = this.add.text(this.centerX - 295, this.centerY - 350, "game objective", { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '72px', align: "center", });
        
        
        this.gameObjTexts = [
            "• Cluecraft is a two-stage jigsaw puzzle game designed to let you familiarize with the different software, frameworks, and programming languages used by Whitebelt.",
           
            "• In each puzzle, you'll be given a clue and a fact from \"Master G\", providing additional insights into the company and their development process.",
            "• There won't be a time-limit for each stage but we'll keep track of your personal best score.",
            "• The goal of the game is to arrange the puzzle pieces in the correct order to complete the picture/logo.",
           
        ];
        this.groupGameObjTxt = this.add.group();

        for(let i = 0; i < this.gameObjTexts.length; i++) {
            //this.gameObjTxt.style.setFontWeight('600');
            this.gameObjTxt = new CustomHrText(this, this.centerX - 390, this.centerY  - 150 + (i * 100), this.gameObjTexts[i], '25px', 830, '#713600', "left" , 'Montserrat');
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

        this.nextBtn = new ImageButton(this, this.centerX + 800, this.centerY + 420, "nextBtn", () => this.showHRNarrate(), () => this.nextBtn.setScale(0.9), () => this.nextBtn.setScale(1.1), 0.9);
     }


     showHRNarrate() {
        this.gameObjCtr.setVisible(false);
        this.gameObjTitleTxt.setVisible(false);
        this.gameTitleCtr.setVisible(false);
        this.groupGameObjTxt.setVisible(false);
        this.nextBtn.setVisible(false);
        this.hrNarrateCtr = this.add.image(this.centerX, this.centerY + 250, "hrNarrateCtr");
        this.masterGdp = this.add.image(this.centerX - 465, this.centerY + 240, "MasterGDP");
        this.playbtn = new ImageButton(this, this.centerX + 500, this.centerY + 350, "playbtn", () => {
            this.scene.get("introGame").sound.pauseAll();
            this.scene.start("ClueCraftStartGame");
            // showQuestion();
        }, 
            () => this.playbtn.setPosition(this.centerX + 490, this.centerY + 340), () => this.playbtn.setPosition(this.centerX + 500, this.centerY + 350),);
        this.hrNarrateTxt = new CustomHrText(this, this.centerX - 240, this.centerY + 120, "To begin, read the client's request at the left side of the screen, which will be your guide in making the logo. You'll be given 90 seconds to finish all the clients' request in each stage. Do your best and good luck!", "29px", 820, '#00453B', "justify");
     }  
     
}