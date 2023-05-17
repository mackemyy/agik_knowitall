// import { Combinations } from './Combinations.js';
class StartGame extends Phaser.Scene {
  constructor() {
      super("startGame");
      // this.combinations = new Combinations();

  }

  create() {
      // this.startMusic3 = new SoundButton(this, 300, 110, "music3", musicConfig);
      // this.add.existing(this.startMusic3);
      // this.startMusic3.setDepth(1);

      this.combinations = new Combinations();
     
      this.timer = this.time.delayedCall(120000, this.timerCallback, [], this);
      console.log('Timer duration:', this.timer.delay);

      // Display the remaining time in minute format on the screen
      this.timeText = this.add.text(config.scale.width / 2 - 380, config.scale.height / 2 - 470, '2:00', { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '50px', align: "center", stroke: "#00BBA0", strokeThickness: 10, });

      this.emptyOffice1Bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "emptyOffice1")
      this.logoBoxBackground();
      this.clientRequest = this.add.image(230, 750, "clientRqst");
      this.clientAvatar = this.add.image(230, 350, "clientDP");

      this.menuButton = new ImageButton(this, 150, 110, "menuBtn", 
          () => this.launchQuitGame(),
          () => this.tweenButtonScale(1.1, this.menuButton),
          () => this.tweenButtonScale(1, this.menuButton),
      );

      this.tweenButtonScale = (scale, targets) => {
          this.tweens.add({
              targets: targets,
              duration: 5,
              scaleX: scale,
              scaleY: scale,
              ease: 'Linear'
          });
      };

      this.launchQuitGame = () => {
        this.scene.pause();
        this.scene.launch("QuitGame", { value: 1 });
    };


      const buttonConfigs = [
          { key: "shapebtn", x: this.cameras.main.width / 1 - 170, y: 230 },
          { key: "textbtn", x: this.cameras.main.width / 1 - 170, y: 500 },
          { key: "vectorbtn", x: this.cameras.main.width / 1 - 170, y: 800 }
      ];

      buttonConfigs.forEach(({ key, x, y }) => {
          const button = this.add.image(x, y, key)
              .setInteractive({ useHandCursor: true })
              .setScale(1)
              .on('pointerdown', () => {
                  if(key == 'shapebtn'){
                      this.textbtn.visible = false;
                      this.vectorbtn.visible = false;
                      this.shapePopup = new OptionsContainer(this, 1470,50, this.combinations.options_shapes,'sideBar', 3);
                      console.log('click shapes button');
                  }
                  if(key == 'textbtn'){
                      this.shapebtn.visible = false;
                      this.vectorbtn.visible = false;
                      this.TextPopup = new OptionsContainer(this, 1470,50, this.combinations.options_text,'textSideBar', 4);
                      console.log('click text button');
                  }
                  if(key == 'vectorbtn'){
                      this.shapebtn.visible = false;
                      this.textbtn.visible = false;
                      this.VectorPopup = new OptionsContainer(this, 1470,50, this.combinations.options_icon,'sideBar', 4);
                      console.log('click vector button');
                  }
              })
              .on('pointerover', () => button.setScale(0.9))
              .on('pointerout', () => button.setScale(1));

              // assign button objects to scene properties
            if (key === 'shapebtn') {
                this.shapebtn = button;
            }
            if (key === 'textbtn') {
                this.textbtn = button;
            }
            if (key === 'vectorbtn') {
                this.vectorbtn = button;
            }
      });


      this.deleteButton = this.add.image(this.cameras.main.width / 2 - 400, config.scale.height / 1 - 100, "deletebtn")
          .setInteractive({ useHandCursor: true })
          .setScale(0.9)
          .setDepth(1)
          .on('pointerdown', () => { this.removeSelectedItems() })
          .on('pointerover', () => this.deleteButton.setScale(1))
          .on('pointerout', () => this.deleteButton.setScale(0.9));

      this.checkButton = this.add.image(this.cameras.main.width / 2 + 410, config.scale.height / 1 - 100, "checkbtn")
          .setInteractive({ useHandCursor: true })
          .setScale(0.9)
          .setDepth(1)
          .on('pointerdown', () => {this.matchPlay();})
          .on('pointerover', () => this.checkButton.setScale(1))
          .on('pointerout', () => this.checkButton.setScale(0.9));


      this.pointsTxt = this.add.text(this.cameras.main.width / 2 + 240, config.scale.height / 2 - 460, "0 pts", {
          fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '45px', align: "center", stroke: "#EF7300", strokeThickness: 10, wordWrap: { width: 900, useAdvancedWrap: true }
      });

     this.points = 0;

      this.clientTxtContainer = this.add.container(135, 630);
      
      //CLIENT REQUEST
      this.clientRqstTxt = this.add.text(0, 0, '', {
          fontFamily: '"Montserrat"', fill: '#000000', fontSize: '25px', align: "center", stroke: "#000000", strokeThickness: 0.5, wordWrap: { width: 210, useAdvancedWrap: true }
      });
      this.clientTxtContainer.add(this.clientRqstTxt);

      this.showQuestion();
  }

  update() {
      var elapsedSeconds = this.timer.getElapsedSeconds();
      var remainingTime = 120 - elapsedSeconds;

      if (remainingTime <= 0) {
          this.timeText.setText('0:00');
          this.timer.remove();
          this.add
              .text(
                  this.cameras.main.centerX, 
                  this.cameras.main.centerY, 
                  'Time\'s up!', 
                  { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '72px', align: "center",}
              )
          .setOrigin(0.5);
      }

      if (remainingTime > 0) {
          var minutes = Math.floor(remainingTime / 60);
          var seconds = Math.floor(remainingTime % 60);
          var timeString = minutes.toString().padStart(1, '0') + ':' + seconds.toString().padStart(2, '0');
          this.timeText.setText(timeString);
      }

      // Bring the time text to the top to ensure it's visible
      this.children.bringToTop(this.timeText);

  }

  logoBoxBackground(){
      const logoBox = this.add.image(config.scale.width / 2, config.scale.height / 2, "logoCntnr");
    };

  timerCallback() {
      // Handle the timer completion event
  }

  formatTime(time) {
      // Helper function to add leading zeroes to single-digit numbers
      console.log('Input time:', time);
      var formattedTime = (time < 10) ? '0' + time : time;
      console.log('Formatted time:', formattedTime);
      return formattedTime;
  }

  showQuestion() {

    if (this.currentQuestion) {
      this.currentQuestion = null;
      this.clientRqstTxt.setText('');
    }
  
    const questionLength = this.combinations.questions.length;
    const question = this.combinations.questions[Math.floor(Math.random() * questionLength)];

    this.clientRqstTxt.setText(question.text);
  
    this.currentQuestion = question;
  
    console.log("show question!");
  
  }

  matchPlay(){
    if(this.currentQuestion === this.combinations.questions[0] ){
      if(this.shapePopup.selectedItem.name === this.combinations.questions[0].answer_shape && 
        this.TextPopup.selectedItem.name === this.combinations.questions[0].answer_text && 
        this.VectorPopup.selectedItem.name === this.combinations.questions[0].answer_vector) {

        this.showClientReact(true);
      } 
      else {
        this.showClientReact(false);
      }
    }
    else if(this.currentQuestion === this.combinations.questions[1]){
      if(this.shapePopup.selectedItem.name === this.combinations.questions[1].answer_shape && 
        this.TextPopup.selectedItem.name === this.combinations.questions[1].answer_text && 
        this.VectorPopup.selectedItem.name === this.combinations.questions[1].answer_vector){

        this.showClientReact(true);
      }
      else{
        this.showClientReact(false);
      }
    }
    else if(this.currentQuestion === this.combinations.questions[2]){
      if(this.shapePopup.selectedItem.name === this.combinations.questions[2].answer_shape && 
        this.TextPopup.selectedItem.name === this.combinations.questions[2].answer_text && 
        this.VectorPopup.selectedItem.name === this.combinations.questions[2].answer_vector){

        this.showClientReact(true);
      }
      else{
        this.showClientReact(false);
      }
    }
    else if(this.currentQuestion === this.combinations.questions[3]){
      if(this.shapePopup.selectedItem.name === this.combinations.questions[3].answer_shape && 
        this.TextPopup.selectedItem.name === this.combinations.questions[3].answer_text && 
        this.VectorPopup.selectedItem.name === this.combinations.questions[3].answer_vector){

        this.showClientReact(true);
      }
      else {
        this.showClientReact(false);
      }
    } 
    else {
      console.log("NOT question");
    }
  }

  showClientReact(isCorrect) {
    const clientReactImage = isCorrect ? "client_react_RIGHT" : "client_react_WRONG";
    const pointsToAdd = isCorrect ? 5 : 0;
    
    this.points += pointsToAdd;
    this.pointsTxt.text = this.points + " pts";
    
    const reactImage = this.add.image(config.scale.width/2, config.scale.height/2, clientReactImage);
    
    this.time.delayedCall(1000, () => {
      reactImage.setVisible(false);
      this.removeSelectedItems();
      this.showQuestion();
    });
  }

  removeSelectedItems() {
    this.shapePopup.selectedItemsContainer.setVisible(false);
      this.VectorPopup.selectedItemsContainer.setVisible(false);
      this.TextPopup.selectedItemsContainer.setVisible(false);
      this.shapePopup.selectedItem = null;
      this.VectorPopup.selectedItem = null;
      this.TextPopup.selectedItem = null;
  }
}


class OptionsContainer extends Phaser.GameObjects.Container {
  constructor(scene, x, y, items, bgImage, itemsPerPage) {
      super(scene, x, y);
      this.scene = scene;
      this.items = items;
      this.options_images = [];
      this.selected_items = [];
      this.itemsPerPage = itemsPerPage;
      this.currentPage = 1;
      this.selectedItem;
      this.selectedItemsContainer;
      this.scene.add.existing(this);


      // 1370,50
      this.closeBtn = this.scene.add.image(1405, 300, 'closeButton')        
      this.closeBtn.setInteractive({useHandCursor: true});
        this.closeBtn.on('pointerdown', () => {
          this.closeBtn.setVisible(false);
          this.bg.setVisible(false);
          this.buttonBorder.setVisible(false);
          this.prevButton.setVisible(false);
          this.nextButton.setVisible(false);
          this.options_images.forEach(item => {
              item.setVisible(false);
            });
            this.scene.shapebtn.setVisible(true);
           
            this.scene.textbtn.setVisible(true);
            this.scene.vectorbtn.setVisible(true);
      });
  
      this.bg = this.scene.add.image(0, 0, bgImage).setOrigin(0).setDepth(1);
      this.bg.setScale(530 / this.bg.width, 1000 / this.bg.height);
      this.bg.setSize(this.bg.displayWidth, this.bg.displayHeight).setInteractive();
      this.add(this.bg);

      // Create a container for the selected items
      this.selectedItemsContainer = this.scene.add.container();
      this.add(this.selectedItemsContainer);
      
      this.buttonBorder = this.scene.add.image(390,500, 'buttonBorder');
      this.buttonBorder.setScale(30 / this.buttonBorder.width, 120 / this.buttonBorder.height)
      this.add(this.buttonBorder);
      // Add pagination buttons
      this.prevButton = this.scene.add.image(390,450, 'upBtn');
      this.prevButton.setInteractive({ useHandCursor: true });
      this.prevButton
      .on('pointerover',() => this.prevButton.setScale(1))
      .on('pointerout', () => this.prevButton.setScale(1.1))
      .on('pointerdown', () => {
        this.prevPage();
      });
      this.add(this.prevButton);

      this.nextButton = this.scene.add.image(390, 550, 'downBtn');
      this.nextButton.setInteractive({ useHandCursor: true });
      this.nextButton
      .on('pointerover',() => this.nextButton.setScale(1))
      .on('pointerout', () => this.nextButton.setScale(1.1))
      .on('pointerdown', () => {
        this.nextPage();
      });
      this.add(this.nextButton);

      this.showPage(this.currentPage);
  }

  showPage(pageNumber) {
      // Hide all items
    this.options_images.forEach(item => {
      item.setVisible(false);
    });

    // Get items to display on current page
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const itemsToDisplay = this.items.slice(startIndex, endIndex);

    // Display items on current page
    for (let i = 0; i < itemsToDisplay.length; i++) {
      let item = itemsToDisplay[i];

      let sprite = this.scene
        .add.sprite(item.x, item.y, item.key)
        .setScale(item.size)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => sprite.setPosition(item.x + 5, item.y + 5))
        .on('pointerout', () => sprite.setPosition(item.x, item.y))
        .on('pointerdown', () => {

          this.scene.selectedItem = item.name;
          if (this.selectedItem) {
            this.deselectItem(this.selectedItem);
          }
          this.selectItem(item);
        });

      this.add(sprite);
      this.options_images.push(sprite);
    }
  }
    
  selectItem(item) {
      this.selectedItem = item;
      // code to highlight the selected shape
      let newSprite = this.scene.add.sprite(item.newPos[0], item.newPos[1], item.key).setScale(item.newSize);
      newSprite.setName(item.key);  
    
      this.selected_items.push(newSprite);
      this.selectedItemsContainer.add(newSprite);
  }

  deselectItem(item){
      let sprite = this.selected_items.find(s => s.name === item.key);
    if (sprite) {
        sprite.destroy(); 
        this.selected_items = this.selected_items.filter(s => s !== sprite);  // 
    }

    this.selectedItem= null;
  }

  nextPage() {
    if (this.currentPage < this.getNumPages()) {
      this.currentPage++;
      this.showPage(this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.showPage(this.currentPage);
    }
  }

  getNumPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }
 
}