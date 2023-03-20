class PlayLogofy extends Phaser.Scene {
    constructor() {
        super("playLogofy");
    }

    preload() { 
        this.load.image("emptyOffice1", "assets/bg/empty_office_bg2.png");
        this.load.image("gameTitleCtr", "assets/objects/gameTitleContainer.png");
        this.load.image("gameObjCtr", "assets/objects/gameObjContainer.png");


    }

    create() {
        this.emptyOffice1Bg = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, "emptyOffice1");
        this.gameTitleCtr = this.add.image(config.scale.width/2, config.scale.height/2, "gameTitleCtr");
        this.letsDesignTxt = this.add.text(config.scale.width/2, config.scale.height/2 - 70, 'LET`S DESIGN,', {
            fontFamily: '"Typesauce', fill: '#FF7A00', fontSize: '75px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true }
        });
        this.logofyTxt = this.add.text(config.scale.width/2, config.scale.height/2 + 40, 'logofy!', {
            fontFamily: '"Typesauce', fill: '#FF7A00', fontSize: '120px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true }
        });
        this.letsDesignTxt.setScale(0.0);
        this.letsDesignTxt.setOrigin(0.5);
        this.letsDesignTxtTween = this.add.tween({
            targets: this.letsDesignTxt,
            scaleX: 1,
            scaleY: 1,
            duration: 2000,
            ease: Phaser.Math.Easing.Bounce.Out,
            onComplete: function() {
            },
            callbackScope: this
        })
        this.logofyTxt.setScale(0.0);
        this.logofyTxt.setOrigin(0.5);
        this.logofyTxt.alpha = 1;
        this.logofyTxtTween = this.add.tween({
            targets: this.logofyTxt,
            scaleX: 1,
            scaleY: 1,
            duration: 2500,
            ease: Phaser.Math.Easing.Bounce.Out,
            onComplete: function() {
                this.showGameObjective();
            },
            callbackScope: this
        })

     }

     showGameObjective() {
        this.logofyTxt.alpha = 0;
        this.letsDesignTxt.alpha = 0;
        this.gameObjCtr = this.add.image(config.scale.width/2, config.scale.height/2 - 300, "gameObjCtr");
        this.gameObjTitleTxt = this.add.text(config.scale.width/2 - 295, config.scale.height/2 - 350, "game objective", {
            fontFamily: '"Typesauce', fill: '#FFFFFF', fontSize: '72px', align: "center",
        });
        this.gameObjTx1 = this.add.text(config.scale.width/2, config.scale.height/2 + 40, 'LOGOFY is a 3-stage logo making game where you make logo or signage that matches client orders.', {
            fontFamily: '"Typesauce', fill: '#FF7A00', fontSize: '120px', align: "center", wordWrap: { width: 900, useAdvancedWrap: true }
        });
     }

    update() { }
}