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
            position:[200,200],
            newPos:[950,600],
            size:0.1,
            newSize:0.25,
          },
          {
            type: 'shape',
            name:'Orange Rectangle',
            key:'rectangle3',
            position:[200,530],
            newPos:[950,600],
            size:0.1,
            newSize:0.25,
          },
          {
            type: 'shape',
            name:'Yellow Rectangle',
            key:'rectangle2',
            position:[210,820],
            newPos:[950,600],
            size:0.1,
            newSize:0.25,
          },
        
        ];
    
        this.options_shapes2 = [
          {
            type: 'shape',
            name:'Yellow Square',
            key:'square1',
            position:[200,200],
            newPos:[950,600],
            size:0.1,
            newSize:0.25,
          },
          {
            type: 'shape',
            name:'Orange Triangle',
            key:'triangle1',
            position:[200,530],
            newPos:[950,600],
            size:0.1,
            newSize:0.25,
          },
          
          {
            type: 'shape',
            name:'Red',
            key:'circle1',
            position:[200,800],
            newPos:[950,600],
            size:0.1,
            newSize:0.25,
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

    const buttonBorder = this.add.image(390,450, 'buttonBorder');
    buttonBorder.setScale(30 / buttonBorder.width, 150 / buttonBorder.height)
    mainContainer.add(buttonBorder);

    const upBtn= this.add.image(290,400, 'upBtn')
    upBtn.setScale(0.7)
    upBtn.setInteractive();
    upBtn.on('pointerover', () => upBtn.setScale(0.8));
    upBtn.on('pointerout', () => upBtn.setScale(0.7));
    upBtn.on('pointerdown', () => {
    if (currentContainerIndex > 0) {
      currentContainerIndex--;
    }
      showContainer(currentContainerIndex);
    });
    
    mainContainer.add(upBtn);

    const downBtn = this.add.image(290,520, 'downBtn');
    downBtn.setScale(0.7)
    downBtn.setInteractive();
    downBtn.on('pointerover', () => downBtn.setScale(0.8));
    downBtn.on('pointerout', () => downBtn.setScale(0.7));
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

  
    selectShape(shape) {
      this.selectedShape = shape;
      
      let newSprite = this.physics.add.sprite(shape.newPos[0], shape.newPos[1], shape.key).setScale(shape.newSize);
      newSprite.setName(shape.key);  
      
      this.options_shapes1.push(newSprite);  

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
      
      let sprite1 = this.physics.add.sprite(shape.position[0], shape.position[1], shape.key).setScale(shape.size)
  
          sprite1.setInteractive({useHandCursor: true})
            .on('pointerover', () => sprite1.setPosition(shape.position[0] + 5, shape.position[1] + 5))
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