var myArray = [];
class ShapesPopUpScene extends Phaser.Scene{
    constructor() {
        super("shapesPopUpScene");
      }

    create(){
        const closeBtn = this.add.image(1330, 300, 'closeButton');
        closeBtn.setScale(200 / closeBtn.width, 150 / closeBtn.height);

        const mainContainer = this.add.container(1370,50);

        const container1 = this.add.container(0, 0);
        mainContainer.add(container1);

        const container2 = this.add.container(0, 0);
        mainContainer.add(container2);
        container2.setVisible(false);

        const bg1 = this.add.image(0, 0, 'sideBar');
        bg1.setScale(530 / bg1.width, 1000 / bg1.height);
        bg1.setOrigin(0);
        container1.add(bg1);

        const bg2 = this.add.image(0, 0, 'sideBar');
        bg2.setScale(530 / bg2.width, 1000 / bg2.height);
        bg2.setOrigin(0);
        container2.add(bg2);

        this.options_shapes1 = [
          {
            type: 'shape',
            name:'Red Rectangle',
            key:'rectangle1',
            position:[250,200],
            newPos:[950,600],
          },
          {
            type: 'shape',
            name:'Orange Rectangle',
            key:'rectangle3',
            position:[250,550],
            newPos:[950,600],
          },
          {
            type: 'shape',
            name:'Yellow Rectangle',
            key:'rectangle2',
            position:[250,800],
            newPos:[950,600],
          },
        
        ];
    
        this.options_shapes2 = [
          {
            type: 'shape',
            name:'Red Rectangle',
            key:'rectangle4',
            position:[250,200],
            newPos:[950,600],
          },
          {
            type: 'shape',
            name:'Yellow Rectangle',
            key:'rectangle5',
            position:[250,450],
            newPos:[950,600],
          },
          
          {
            type: 'shape',
            name:'Orange Rectangle',
            key:'rectangle6',
            position:[250,650],
            newPos:[950,600],
          },
        ];

      if (this.options_shapes1) {
          this.options_shapes1.forEach((shape) => {  
            container1.add(this.createClickableShape(shape));      
          // this.createClickableShape(shape);
          }); 
      }
    
      if (this.options_shapes2) {
        this.options_shapes2.forEach((shape) => {  
          container2.add(this.createClickableShape(shape));      
        // this.createClickableShape(shape);
        }); 
      }


        const containers = [
          container1, container2,
      // container3, container4
      ];
    let currentContainerIndex = 0;

    const showContainer = (index) => {
      for (let i = 0; i < containers.length; i++) {
        containers[i].setVisible(i === index);
      }
    };

    const buttonBorder = this.add.image(380,500, 'buttonBorder');
    buttonBorder.setScale(30 / buttonBorder.width, 150 / buttonBorder.height)
    mainContainer.add(buttonBorder);

    const upBtn= this.add.image(280,450, 'upBtn')
    upBtn.setScale(100 / upBtn.width, 80 / upBtn.height);
    upBtn.setInteractive();
    upBtn.on('pointerover', () => upBtn.setScale(0.9));
    upBtn.on('pointerout', () => upBtn.setScale(1));
    upBtn.on('pointerdown', () => {
    if (currentContainerIndex > 0) {
      currentContainerIndex--;
    }
      showContainer(currentContainerIndex);
    });
    
    mainContainer.add(upBtn);

    const downBtn = this.add.image(280,550, 'downBtn');
    downBtn.setScale(100 / downBtn.width, 80 / downBtn.height);
    downBtn.setInteractive();
    downBtn.on('pointerover', () => downBtn.setScale(0.9));
    downBtn.on('pointerout', () => downBtn.setScale(1));
    downBtn.on('pointerdown', () => {
    if (currentContainerIndex < containers.length - 1) {
      currentContainerIndex++;
    }
    showContainer(currentContainerIndex);
    });
    mainContainer.add(downBtn);

        this.tweens.add({
            targets: [
              mainContainer,
              closeBtn,
              upBtn,  
              downBtn, 
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
  
    selectShape(shape) {
      let squareObj = this.logoContainer();
      this.selectedShape = shape;
      
      let newSprite = this.physics.add.sprite(shape.newPos[0], shape.newPos[1], shape.key).setScale(0.25);
      newSprite.setName(shape.key);  
      
      this.options_shapes1.push(newSprite);  
  
      if (Phaser.Geom.Rectangle.Contains(squareObj.square, newSprite.x, newSprite.y)) {
        console.log(`${shape.name} is inside the area!`);
        let myString = `${shape.name}`;
        newSprite.setDepth(1);  
        myArray.push(myString);
      } else {
        console.log(`${shape.name} is NOT inside the area!`);
      }
      return newSprite;
  
    }
  
    deselectShape(shape) {
      let sprite = this.options_shapes1.find(s => s.name === shape.key);
      if (sprite) {
          sprite.destroy(); 
          this.options_shapes1 = this.options_shapes1.filter(s => s !== sprite);  // 
      }
      this.selectedShape = null;  
    }
  
    createClickableShape(shape) {
      
      let sprite1 = this.physics.add.sprite(shape.position[0], shape.position[1], shape.key).setScale(0.1)
  
          sprite1.setInteractive({useHandCursor: true})
            .on('pointerover', () => sprite1.setPosition(shape.position[0] + 20, shape.position[1] + 20))
            .on('pointerout', () => sprite1.setPosition(shape.position[0], shape.position[1]))
            .on('pointerdown', () => {
  
            if (this.selectedShape) {
                this.deselectShape(this.selectedShape);
            }
            this.selectShape(shape);
            });
  
            this.options_shapes1.push(sprite1);
            return sprite1;
    }

}