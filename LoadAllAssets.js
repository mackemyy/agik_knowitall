class LoadAllAssets extends Phaser.Scene {
    constructor() {
        super("loadAllAssets")
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
 
         //assets for all logo
         this.load.image("logo1", "assets/logo/logo6.png");
         this.load.image("logo2", "assets/logo/logo5.png");
         this.load.image("logoCntnr", "assets/objects/logoContainer.png");
 
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
    }

    create() {
        this.scene.start("loadingScene");
     }
}