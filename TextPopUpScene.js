var myArray = [];
class TextPopUpScene extends Phaser.Scene{
    constructor() {
        super("textPopUpScene");
      }
      
    create(){
        const closeBtn = this.add.image(1330, 300, 'closeButton');
        closeBtn.setScale(200 / closeBtn.width, 150 / closeBtn.height);

        const mainContainer = this.add.container(1370,50);

        const container1 = this.add.container(0, 0);
        mainContainer.add(container1);


        const bg1 = this.add.image(0, 0, 'textsideBar');
        bg1.setScale(530 / bg1.width, 1000 / bg1.height);
        bg1.setOrigin(0);
        container1.add(bg1);

        this.options_text = [
          {
            type: 'text',
            name:'CCTV Warning',
            key:'cctvWarning',
            position:[210,150],
            newPos:[950,600],

          },
          {
            type: 'text',
            name:'No Noon Break',
            key:'noNoonBreak',
            position:[210,360],
            newPos:[950,600],

          },
          {
            type: 'text',
            name:'No Smoking',
            key:'noSmoking',
            position:[220,595],
            newPos:[950,600],
          },
          {
            type: 'text',
            name:'No Trespassing',
            key:'noTrespassing',
            position:[220,830],
            newPos:[950,600],
          },
        
        ];
    

      if (this.options_text) {
          this.options_text.forEach((text) => {  
            container1.add(this.createClickableText(text));      
          // this.createClickableShape(shape);
          }); 
      }
    
        this.tweens.add({
            targets: [
              mainContainer,
              closeBtn,
              ],
            x: '+=100',
            duration: 300,
            ease: 'Power2',
          });
          // Add a close button in the top-right corner of the popup
          closeBtn.setInteractive();
          closeBtn.on('pointerdown', () => {
            this.scene.stop();
          });
    }

    logoContainer() {  
      const mainScene = this.scene.get('startGame');
      mainScene.logoBoxBackground();
      let square = new Phaser.Geom.Rectangle(400, 100, 800, 1000);
      return{
        square: square
      };
  
    }

    //keep track of selected text
    selectText(text) {
      let squareObj = this.logoContainer();
      this.selectedText = text;
      
      let newSprite = this.physics.add.sprite(text.newPos[0], text.newPos[1], text.key).setScale(0.25);
      newSprite.setName(text.key);  
      
      this.options_text.push(newSprite);  

      if (Phaser.Geom.Rectangle.Contains(squareObj.square, newSprite.x, newSprite.y)) {
        console.log(`${text.name} is inside the area!`);
        let myString = `${text.name}`;
        newSprite.setDepth(2);  
        myArray.push(myString);
      } else {
        console.log(`${text.name} is NOT inside the area!`);
      }

      return newSprite;
    }

   //to destroy text
    deselectText(text) {
      let sprite = this.options_text.find(s =>s.name === text.key);
      if (sprite) {
          sprite.destroy(); 
          this.options_text = this.options_text.filter(s => s !== sprite);  // 
      }
      this.selectedText = null;  
    }

    createClickableText(text) {

      let sprite1 = this.physics.add.sprite(text.position[0], text.position[1], text.key).setScale(0.14)

      sprite1.setInteractive({useHandCursor: true})
        .on('pointerover', () => sprite1.setPosition(text.position[0] + 5, text.position[1] + 5))
        .on('pointerout', () => sprite1.setPosition(text.position[0], text.position[1]))
        .on('pointerdown', () => {
          if (this.selectedText) {
            this.deselectText(this.selectedText);
        }
        this.selectText(text);
 
        });

        this.options_text.push(sprite1);
            return sprite1;
    }
  

}