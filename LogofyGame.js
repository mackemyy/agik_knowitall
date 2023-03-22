class PlayLogofy extends Phaser.Scene {
    constructor() {
        super("playLogofy");
    }

    preload() { 
        this.load.image("emptyOffice1", "assets/bg/empty_office_bg2.png");
        this.load.image("gameTitleCtr", "assets/objects/gameTitleContainer.png")
        this.load.image("gameObjCtr", "assets/objects/gameObjContainer.png");
        this.load.image("playbtn", "assets/buttons/playbtn.png");
        this.load.image("hrDP", "assets/objects/hrDP.png");
        this.load.image("hrNarrateCtr", "assets/objects/hrNarrateContainer.png");

    }

    create() {
        this.emptyOffice1Bg = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, "emptyOffice1");
        this.gameTitleCtr = this.add.image(config.scale.width/2, config.scale.height/2, "gameTitleCtr");
        this.letsDesignTxt = this.add.text(config.scale.width/2, config.scale.height/2 - 70, "LET'S DESIGN,", {
            fontFamily: '"Typesauce"', fill: '#FF7A00', fontSize: '75px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true }
        });
        this.logofyTxt = this.add.text(config.scale.width/2, config.scale.height/2 + 40, 'logofy!', {
            fontFamily: '"Typesauce"', fill: '#FF7A00', fontSize: '120px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true }
        });
        this.groupGameObjTxt = this.add.container(10,10).setVisible(false);
        this.letsDesignTxt.setScale(0.0);
        this.letsDesignTxt.setOrigin(0.5);
        this.letsDesignTxtTween = this.add.tween({
            targets: this.letsDesignTxt,
            scaleX: 1,
            scaleY: 1,
            duration: 2000,
            ease: Phaser.Math.Easing.Bounce.Out,
            callbackScope: this
        });
        this.logofyTxt.setScale(0.0);
        this.logofyTxt.setOrigin(0.5);
        this.logofyTxtTween = this.add.tween({
            targets: this.logofyTxt,
            scaleX: 1,
            scaleY: 1,
            duration: 2000,
            ease: Phaser.Math.Easing.Bounce.Out,
            onComplete: function() {
                this.time.addEvent({
                    loop: false,
                    delay: 1200,
                    callback: ()=> { this.showGameObjective(); },
                });
            },
            callbackScope: this
        })
     }

     showGameObjective() {
        this.logofyTxt.alpha = 0;
        this.letsDesignTxt.alpha = 0;
        this.gameObjCtr = this.add.image(config.scale.width/2, config.scale.height/2 - 300, "gameObjCtr");

        this.gameObjTitleTxt = this.add.text(config.scale.width/2 - 295, config.scale.height/2 - 350, "game objective", { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '72px', align: "center", });
        
        this.gameObjTxt1 = this.add.text(config.scale.width/2 - 390, config.scale.height/2 - 150, '• LOGOFY is a 3-stage logo making game where you make logo or signage that matches client orders.', {
            fontFamily: '"Montserrat"', fill: '#713600', fontSize: '25px', align: "left", wordWrap: { width: 830, useAdvancedWrap: true }});

        this.gameObjTxt2 = this.add.text(config.scale.width/2 - 390, config.scale.height/2 - 75, "• The three stages consist of different clients from these three sectors: Education, Government, and Business.", {
            fontFamily: '"Montserrat"', fill: '#713600', fontSize: '25px', align: "left", wordWrap: { width: 830, useAdvancedWrap: true }});
        

        this.gameObjTxt3 = this.add.text(config.scale.width/2 - 390, config.scale.height/2, '• At each stage, clients will be giving you their envisioned logo or signage.', {
            fontFamily: '"Montserrat"', fill: '#713600', fontSize: '25px', align: "left", wordWrap: { width: 830, useAdvancedWrap: true }});

        this.gameObjTxt4 = this.add.text(config.scale.width/2 - 390, config.scale.height/2 + 75, "• Make sure to design the logo that perfectly suits client's description to earn more points.", {
            fontFamily: '"Montserrat"', fill: '#713600', fontSize: '25px', align: "left", wordWrap: { width: 830, useAdvancedWrap: true }});

        this.gameObjTxt5 = this.add.text(config.scale.width/2 - 390, config.scale.height/2 + 150, "• Earn the maximum points in each stage to advance to the next level within the allotted time.", {
            fontFamily: '"Montserrat"', fill: '#713600', fontSize: '25px', align: "left", wordWrap: { width: 830, useAdvancedWrap: true }});

        this.groupGameObjTxt.add(this.gameObjTxt1)
        this.groupGameObjTxt.add(this.gameObjTxt2);
        this.groupGameObjTxt.add(this.gameObjTxt3);
        this.groupGameObjTxt.add(this.gameObjTxt4);
        this.groupGameObjTxt.add(this.gameObjTxt5);
        
        this.groupGameObjTxt.setVisible(true);    

        this.gameObjTxtTween = this.add.tween({
            targets: this.groupGameObjTxt,
            alpha: 1,
            duration: 20000,
            // duration: 100,
            ease: Phaser.Math.Easing.Sine.Out,
            onComplete: function() {
                this.gameObjCtr.setVisible(false);
                this.gameObjTitleTxt.setVisible(false);
                this.gameTitleCtr.setVisible(false);
                this.groupGameObjTxt.setVisible(false);    
                this.showHRNarrate();
            },
            callbackScope: this,
        });
     }

     showHRNarrate() {
        this.hrNarrateCtr = this.add.image(config.scale.width/2, config.scale.height/2 + 250, "hrNarrateCtr");
        this.hrDP = this.add.image(config.scale.width/2 - 465, config.scale.height/2 + 240, "hrDP");
        this.playbtn = this.add.image(config.scale.width/2 + 500, config.scale.height/2 + 350, "playbtn")
            .setInteractive({useHandCursor: true})
            .on('pointerdown', ()=> this.scene.start("startGame") )
            .on('pointerover', () => this.playbtn.setPosition(config.scale.width/2 + 490, config.scale.height/2 + 340))
            .on('pointerout', () => this.playbtn.setPosition(config.scale.width/2 + 500, config.scale.height/2 + 350));
        this.hrNarrateTxt = this.add.text(config.scale.width/2 - 240, config.scale.height/2 + 120, "To begin, read the client's request at the left side of the screen, which will be your guide in making the logo. You'll be given 90 seconds to finish all the clients' request. Do your best and good luck!", {
            fontFamily: '"Montserrat"', fill: '#00453B', fontSize: '29px', align: "justify", wordWrap: { width: 820, useAdvancedWrap: true }})

     }


}