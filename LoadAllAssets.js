class LoadAllAssets extends Phaser.Scene {
    constructor() {
        super("loadAllAssets");
        this.centerX = config.scale.width / 2;
        this.centerY = config.scale.height / 2;
    }

    preload() {
         //assets for backgrounds
         this.load.image("opening", "assets/bg/opening.png");
         this.load.image("hrScreen", "assets/bg/hr_screen.png");
         this.load.image("emptyOffice", "assets/bg/empty_office_bg.png");
         this.load.image("emptyOffice1", "assets/bg/empty_office_bg2.png");
         this.load.image("officeWithHR", "assets/bg/office_with_hr.png");
         this.load.image("levelMapBg", "assets/bg/level_map_bg.png");
         this.load.image("menu_bg", "assets/bg/menu_bg.png");
         this.load.image("disclaimer", "assets/bg/disclaimer.png");
         this.load.image("quitWindow", "assets/bg/quitscreen.png");
 
         //assets for all buttons
         this.load.image("sureBtn", "assets/buttons/sureButton.png");
         this.load.image("nextBtn", "assets/buttons/nextButton.png");
         this.load.image("newGameBtn", "assets/buttons/newGameButton.png");
         this.load.image("loadGameBtn", "assets/buttons/loadGameButton.png");
         this.load.image("playbtn", "assets/buttons/playbtn.png");
         this.load.image("yesButton", "assets/buttons/quitbtn.png");
         this.load.image("noButton", "assets/buttons/backbtn.png");
         this.load.image("menuBtn", "assets/buttons/menubtn.png");
         this.load.image("shapebtn", "assets/buttons/shapesbtn.png");
         this.load.image("textbtn", "assets/buttons/textbtn.png");
         this.load.image("vectorbtn", "assets/buttons/vectorbtn.png");
         this.load.image("deletebtn", "assets/buttons/delete.png");
         this.load.image("checkbtn", "assets/buttons/check.png");
         this.load.image("yesButton", "assets/buttons/quitbtn.png");
         this.load.image("noButton", "assets/buttons/backbtn.png");
         this.load.image("soundOn", "assets/buttons/sound_on.png");
         this.load.image("soundOff", "assets/buttons/sound_off.png");
         this.load.image('downBtn', 'assets/Buttons/DownBtn.png');
         this.load.image("closeButton", "assets/buttons/closeButton.png");
         this.load.image('buttonBorder', 'assets/Buttons/buttonborder.png');
         this.load.image('upBtn', 'assets/Buttons/UpBtn.png');
         //assets for all logo
         this.load.image("logo1", "assets/logo/logo6.png");
         this.load.image("logo2", "assets/logo/logo5.png");
         this.load.image("logoCntnr", "assets/objects/logoContainer.png");

         //assets for all shapes
         this.load.image("rectangle1", "assets/logofy_shapes/Rectangle1.png");
         this.load.image("rectangle2", "assets/logofy_shapes/Rectangle2.png");
         this.load.image("rectangle3", "assets/logofy_shapes/Rectangle3.png");
         this.load.image("rectangle4", "assets/logofy_shapes/Rectangle4.png");
         this.load.image("rectangle5", "assets/logofy_shapes/Rectangle5.png");
         this.load.image("rectangle6", "assets/logofy_shapes/Rectangle6.png");
         this.load.image("rectangle7", "assets/logofy_shapes/Rectangle1.png");
         this.load.image("square1", "assets/logofy_shapes/Square1.png");
         this.load.image("square2", "assets/logofy_shapes/Square2.png");
         this.load.image("square3", "assets/logofy_shapes/Square3.png");
         this.load.image("square4", "assets/logofy_shapes/Square4.png");
         this.load.image("square5", "assets/logofy_shapes/Square5.png");
         this.load.image("square6", "assets/logofy_shapes/Square6.png");
         this.load.image("triangle1", "assets/logofy_shapes/Triangle1.png");
         this.load.image("triangle2", "assets/logofy_shapes/Triangle2.png");
         this.load.image("triangle3", "assets/logofy_shapes/Triangle3.png");
         this.load.image("circle1", "assets/logofy_shapes/Circle1.png");
         this.load.image("circle2", "assets/logofy_shapes/Circle2.png");
         this.load.image("circle3", "assets/logofy_shapes/Circle3.png");
         this.load.image("circle4", "assets/logofy_shapes/Circle4.png");
         this.load.image("circle5", "assets/logofy_shapes/Circle5.png");
         this.load.image("circle6", "assets/logofy_shapes/Circle6.png");

         //assets for all objects
         this.load.image("bubbleChatOR", "assets/objects/bubbleChatOrange.png");
         this.load.image("agikObj", "assets/objects/AGIK.png");
         this.load.image("bubbleChatORLeft", "assets/objects/bubbleChatORLeft.png");
         this.load.image("level1", "assets/objects/level1.png");
         this.load.image("level2", "assets/objects/level2.png");
         this.load.image("miniGame", "assets/objects/miniGame.png");
         this.load.image("gameTitleCtr", "assets/objects/gameTitleContainer.png")
         this.load.image("gameObjCtr", "assets/objects/gameObjContainer.png");
         this.load.image("hrDP", "assets/objects/hrDP.png");
         this.load.image("hrNarrateCtr", "assets/objects/hrNarrateContainer.png");
         this.load.image("clientRqst", "assets/objects/clientrqts.png");
         this.load.image("clientDP", "assets/objects/clientDP.png");
         this.load.image("sideBar", "assets/objects/sideBar.png");

        //assets for music
        this.load.audio("music1", "assets/music/music1.mp3");
        this.load.audio("music2", "assets/music/music2.mp3");
        this.load.audio("music3", "assets/music/music3.mp3");
        this.load.audio("music4", "assets/music/music4.mp3");
        var progress = 0;
        var targetProcess = 1; 
        var progressDelay = 40; 
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        
        progressBox.fillStyle(0xffffff, 1);
        progressBox.fillRoundedRect(this.centerX - 250, this.centerY + 50, 533, 50, 25);

       var loadingText = this.add.text(this.centerX, this.centerY - 20, 'Loading', {
            fontFamily: 'Montserrat',
            fontSize: '48px',
            color: '#ffffff',
            fontWeight: 'bold'
        });
       loadingText.setOrigin(0.5);

        this.time.addEvent({
            delay: progressDelay,
            callback: function () {
                progress += 0.07;
                progressBar.clear();
                progressBar.fillStyle(0xFFC929, 1);
                progressBar.fillRoundedRect(this.centerX - 250, this.centerY + 50, 500 * progress, 50, 25);
                progressBar.setDepth(1);

                if (progress >= targetProcess) {
                    progress = targetProcess;
                    this.load.off('progress');
                    progressBox.destroy();
                    progressBar.destroy();
                    loadingText.destroy();
                    this.scene.start("loadingScene");
                }
            },
            callbackScope: this,
            loop: true
        });
    }      
}