class LoadingScene extends Phaser.Scene {
    constructor() {
        super('loadingScene')
    }

    preload() {
        this.load.image("logo1", "assets/logo6.png");
        this.load.image("logo2", "assets/logo5.png");

    }
    create() {
        this.cameras.main.setBounds(0, 0, config.scale.width/2, config.scale.height/2);
        this.logo1 = this.add.image(config.scale.width/2, config.scale.height/2, "logo1");
        this.logo2 = this.add.image(config.scale.width/2, config.scale.height/2, "logo2");
        this.logo2.alpha = 0;
        this.logo1.setScale(0.1);
        this.logo1.setOrigin(0.5);
        this.logo1.angle = 90;
        this.logo1Tween = this.add.tween({
            targets: this.logo1,
            scaleY: 0.5,
            scaleX: 0.5,
            duration: 4000,
            onComplete: function() {
                this.fadeLogo1();
            },
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
            duration: 500,
            ease: 'Power2',
            onComplete: function() {
                this.showLogo2();
            },
            callbackScope: this,
        });
    }

    fadeLogo2() {
        this.logo2Tween = this.add.tween({
            targets: this.logo2,
            alpha: 0,
            duration: 500,
            ease: 'Power2',
            onComplete: function() {
                console.log('finish');
            },
            callbackScope: this,
        });
    }
    
    showLogo2() {
        this.logo2.setScale(0.5);
        this.logo2.setOrigin(0.5);
        this.logo2Tween = this.add.tween({
            targets: this.logo2,
            alpha: 1,
            duration: 2500,
            ease: 'Power2',
            onComplete: function() {
                this.fadeLogo2();
            },
            callbackScope: this,
        })
    }

    
    
}