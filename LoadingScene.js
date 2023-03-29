class LoadingScene extends Phaser.Scene {
    constructor() {
        super('loadingScene')
    }

    preload() {
        this.load.image("logo1", "assets/logo/logo6.png");
        this.load.image("logo2", "assets/logo/logo5.png");
        this.load.image("menu_bg", "assets/bg/menu_bg.png");
        this.load.image("disclaimer", "assets/bg/disclaimer.png");
        this.load.image("newGameBtn", "assets/buttons/newGameButton.png");
        this.load.image("loadGameBtn", "assets/buttons/loadGameButton.png");
    }
    create() {
        this.cameras.main.setBounds(0, 0, config.scale.width/2, config.scale.height/2);
        this.logo1 = this.add.image(config.scale.width/2, config.scale.height/2, "logo1").setScale(0.1).setOrigin(0.5).setAngle(90);
        this.logo2 = this.add.image(config.scale.width/2, config.scale.height/2, "logo2").setScale(0.5).setOrigin(0.5).setAlpha(0);
        this.menu_bg = this.add.image(config.scale.width/2, config.scale.height/2, "menu_bg").setAlpha(0);
        this.disclaimer = this.add.image(config.scale.width/2, config.scale.height/2, "disclaimer").setAlpha(0);

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
        this.menuBgTween = this.add.tween({
            targets: this.menu_bg,
            alpha: 1,
            duration: 1500,
            ease: 'Power2',
            onComplete: function() {
                const createButton = (x, y, image, callback) => {
                    const button = this.add.image(x, y, image)
                        .setInteractive({useHandCursor: true})
                        .on('pointerdown', callback)
                        .on('pointerover', () => button.setPosition(x - 10, y - 10))
                        .on('pointerout', () => button.setPosition(x, y));
                    return button;
                };
                this.newGameBtn = createButton(config.scale.width/2, config.scale.height/2, "newGameBtn", () => this.goToNextScene());
                this.loadGameBtn = createButton(config.scale.width/2, config.scale.height/2 + 200, "loadGameBtn", () => console.log("load game scene here"));
            },
            callbackScope: this,
        });
    }

    goToNextScene() {
        this.scene.start("introGame");
        // this.scene.start("startGame");
    }
}