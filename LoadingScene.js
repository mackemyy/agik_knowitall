class LoadingScene extends Phaser.Scene {
    constructor() {
        super('loadingScene');
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }

    create() {
        this.cameras.main.setBounds(0, 0, this.centerX, this.centerY);
        this.logo1 = this.add.image(this.centerX, this.centerY, "logo1").setScale(0.1).setOrigin(0.5).setAngle(90);
        this.logo2 = this.add.image(this.centerX, this.centerY, "logo2").setScale(0.5).setOrigin(0.5).setAlpha(0);
        this.menu_bg = this.add.image(this.centerX, this.centerY, "menu_bg").setAlpha(0);
        this.disclaimer = this.add.image(this.centerX, this.centerY, "disclaimer").setAlpha(0);

        this.logo1Tween = this.add.tween({
                targets: this.logo1,
                scaleY: 0.5,
                scaleX: 0.5,
                duration: 2000,
                // duration: 100,
                onComplete: function() {this.fadeLogo1() },
            callbackScope: this,
        });
    }

    update() {
        this.logo1.angle += 2.5;
    }

    fadeLogo1() {
        this.logo1Tween = this.add.tween({
            targets: this.logo1,
            alpha: 0,
            duration: 250,
            // duration: 100,
            ease: 'Power2',
            onComplete: function() { this.showLogo2() },
            callbackScope: this,
        });
    }

    fadeLogo2() {
        this.logo2Tween = this.add.tween({
            targets: this.logo2,
            alpha: 0,
            duration: 250,
            // duration: 100,
            ease: 'Power2',
            onComplete: function() { this.showDisclaimerScreen() },
            callbackScope: this,
        });
    }

    fadeDisclaimer() {
        this.disclaimerTween = this.add.tween({
            targets: this.disclaimer,
            alpha: 0,
            duration: 250,
            // duration: 100,
            ease: 'Power2',
            onComplete: function() { this.showMenuScreen() },
            callbackScope: this,
        });
    }
    
    showLogo2() {
        this.logo2.setScale(0.5);
        this.logo2.setOrigin(0.5);
        this.logo2Tween = this.add.tween({
            targets: this.logo2,
            alpha: 1,
            duration: 2000,
            // duration: 100,
            ease: 'Power2',
            onComplete: function() {
                this.fadeLogo2();
            },
            callbackScope: this,
        })
    }

    showDisclaimerScreen() {
        this.disclaimerTween = this.add.tween({
            targets: this.disclaimer,
            alpha: 1,
            duration: 5000,
            // duration: 100,
            ease: 'Power2',
            onComplete: function() { this.fadeDisclaimer(); },
            callbackScope: this,
        });
    }

    showMenuScreen() {
        this.startMusic1 = new SoundButton(this, this.centerX + 800, this.centerY - 450, "music1", musicConfig);
        this.add.existing(this.startMusic1);

        this.menuBgTween = this.add.tween({
            targets: this.menu_bg,
            alpha: 1,
            duration: 1500,
            ease: 'Power2',
            onComplete: function() {
                this.newGameBtn = new ImageButton(this, config.scale.width/2, config.scale.height/2 + 70, "newGameBtn", 
                    () => this.goToNextScene(), 
                    () => this.newGameBtn.setPosition(config.scale.width/2 - 10, config.scale.height/2 + 70), 
                    ()=> this.newGameBtn.setPosition(config.scale.width/2, config.scale.height/2 + 70), 0.8);

                this.loadGameBtn = new ImageButton(this, config.scale.width/2, config.scale.height/2 + 210, "loadGameBtn", 
                    () => console.log("load game scene here"), 
                    () => this.loadGameBtn.setPosition(config.scale.width/2 - 10, config.scale.height/2 + 210), 
                    ()=> this.loadGameBtn.setPosition(config.scale.width/2, config.scale.height/2 + 210), 0.8);
            },
            callbackScope: this,
        });
        
       
        
           
        
    
    
    }

    goToNextScene() {
        this.startMusic1.stopMusic();
        this.scene.start("introGame");
        // this.scene.start("startGame");
    }
}
