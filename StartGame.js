class StartGame extends Phaser.Scene {
    constructor () {
        super({
            key: 'startGame'
        });
    }

	create() {
		// this.startMusic3 = new SoundButton(this, 300, 110, "music3", musicConfig);
		// this.add.existing(this.startMusic3);
		// this.startMusic3.setDepth(1);
		this.combinations = new Combinations();
		
		this.timer = this.time.delayedCall(300000, this.timerCallback, [], this);
		console.log('Timer duration:', this.timer.delay);

		// Display the remaining time in minute format on the screen
		this.timeText = this.add.text(config.scale.width / 2 - 380, config.scale.height / 2 - 470, '2:00', { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '50px', align: "center", stroke: "#00BBA0", strokeThickness: 10, });

		// Static Assets
		const bg = this.add.image(this.scale.width/2, this.scale.height/2, "emptyOffice1")
		const logoBox = this.add.image(this.scale.width/2, this.scale.height/2, "logoCntnr");
		const clientRequest = this.add.image(230, 750, "clientRqst");
		const clientAvatar = this.add.image(230, 320, "clientDP");

		this.menuButton = new ImageButton(this, 150, 100, "menuBtn", 
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

		this.options_shapes = new OptionsContainer(this, 1470, 50, this.combinations.options_shapes, {
				name: 'shape', x: 1470, y: 50, bg_key: 'sideBar',
				items: this.combinations.options_shapes, itemsPerPage: 3,
				button: {key: "shapebtn", x: this.cameras.main.width / 1 - 170, y: 230}
			});
				
		this.options_texts = new OptionsContainer(this, 1470, 50, this.combinations.options_text, {
				name: 'text', x: 1470, y: 50, bg_key: 'textSideBar',
				items: this.combinations.options_text, itemsPerPage: 4,
				button: {key: "textbtn", x: this.cameras.main.width / 1 - 170, y: 500}
			});
		this.options_vectors = new OptionsContainer(this, 1470, 50, this.combinations.options_icon, {
				name: 'vector', x: 1470, y: 50, bg_key: 'sideBar',
				items: this.combinations.options_icon, itemsPerPage: 4,
				button: {key: "vectorbtn", x: this.cameras.main.width / 1 - 170, y: 800}
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
			.on('pointerdown', () => { this.gameplay.questionCheckAnswer(); })
			.on('pointerover', () => this.checkButton.setScale(1))
			.on('pointerout', () => this.checkButton.setScale(0.9));

		this.pointsTxt = this.add.text(this.cameras.main.width / 2 + 240, config.scale.height / 2 - 460, "0 pts", {
			fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '45px', align: "center", stroke: "#EF7300", strokeThickness: 10, wordWrap: { width: 900, useAdvancedWrap: true }
		});

		//CLIENT REQUEST
		this.clientRqstTxt = this.add.text(135, 630, '', {
			fontFamily: '"Montserrat"', fill: '#000000', fontSize: '25px', align: "center",
			stroke: "#000000", strokeThickness: 0.5, wordWrap: { width: 210, useAdvancedWrap: true }
		});

		this.gameplay = new Gameplay(this, this.timer)
		this.gameplay.questionLoad();
	}

  update() {
      var elapsedSeconds = this.timer.getElapsedSeconds();
      var remainingTime = 300 - elapsedSeconds;

      if (remainingTime <= 0) {
          this.timeText.setText('0:00');
          this.timer.remove();
          this.add
              .text(
                  this.cameras.main.centerX, 
                  this.cameras.main.centerY, 
                  'Time\'s up!', 
                  { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '72px', align: "center", stroke: "#EF7300", strokeThickness: 12,}
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

	showClientReact(isCorrect) {
		const clientReactImage = isCorrect ? "client_react_RIGHT" : "client_react_WRONG";
		const pointsToAdd = isCorrect ? 5 : 0;
		
		this.gameplay.points += pointsToAdd;
		this.pointsTxt.text = this.gameplay.points + " pts";
		
		const reactImage = this.add.image(230, 335, clientReactImage);
		
		this.time.delayedCall(1500, () => {
			reactImage.setVisible(false);
			this.removeSelectedItems();
			this.gameplay.questionLoad();
		});
	}

	removeSelectedItems() {
		this.options_shapes.selectedItemsContainer.removeAll(true);
		this.options_texts.selectedItemsContainer.removeAll(true);
		this.options_vectors.selectedItemsContainer.removeAll(true);
		this.options_shapes.selectedItem = null;
		this.options_texts.selectedItem = null;
		this.options_vectors.selectedItem = null;
	}

	gotToClueCraft() {
		this.scene.start("WBintroGame");
	}
}


class Gameplay {
	constructor(scene, timer) {
		this.scene = scene;
		this.timer = timer;
		this.questionSetCounter = 0; 
		this.points = 0;
		this.init_questions(scene.combinations.questions);
		this.startGame = new StartGame();
	}

	init_questions(questions) {
		this.currentQuestion = null;
		this.questions_index = 0;
		this.questions = questions;
		this.questions = this.questionRandomize(this.questions);
	}

	questionRandomize(questions) {
		for (let i = questions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = questions[i];
			questions[i] = questions[j];
			questions[j] = temp;
			return questions;
		}
	}
	
	questionLoad() {
		if (this.questions_index >= this.questions.length) {
			this.timer.paused = true;
			this.scene.options_shapes.setVisible(false);
			this.scene.options_texts.setVisible(false);
			this.scene.options_vectors.setVisible(false);
			console.log("All questions are shown");

			// Call the function to show the popup image
			if(this.questionSetCounter == 0) {
				this.showPopupImage('Great job! Now, let\'s move on to the Education Category.');
			} else if(this.questionSetCounter == 1) {
				this.showPopupImage('Great job! Now, let\'s move on to the Business Category.');
			} else if(this.questionSetCounter == 2) {
				this.timer.destroy();
				this.scene.timeText.setVisible(false);

				let scoreboard_container = this.scene.add.container(this.scene.scale.width/2, this.scene.scale.height/2)
				.setSize(this.scene.scale.width, this.scene.scale.height).setInteractive();


				let scoreboard_image = this.scene.add.sprite(0, 0, 'scoreboard').setInteractive();
				let text = this.scene.add.text(-110, +20, this.points + 'pts', {fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '80px', align: "center", stroke: "#EF7300", strokeThickness: 10, wordWrap: { width: 900, useAdvancedWrap: true } });
				let nextBtn = this.scene.add.image(+800, +400,'nextBtnv2').setScale(0.8).setInteractive({useHandCursor: true})
				.on('pointerdown', () => { 
					scoreboard_container.destroy();
					this.showfinalLogofyMsg()});
				
				scoreboard_container.add(scoreboard_image);
				scoreboard_container.add(nextBtn);
				scoreboard_container.add(text);
				scoreboard_container.setInteractive(); // Make the container interactive if you want to handle events
				scoreboard_container.setDepth(5);
			}
		} else {
			let q = this.questions[this.questions_index++];
			this.currentQuestion = null;
			this.currentQuestion = q;
			this.scene.clientRqstTxt.setText('');
			this.scene.clientRqstTxt.setText(q.text);
		}
	}

	
	showfinalLogofyMsg(){
		let msg_container = this.scene.add.container(this.scene.scale.width/2, this.scene.scale.height/2)
		.setSize(this.scene.scale.width, this.scene.scale.height).setInteractive();
		let finalmsg_img = this.scene.add.sprite(0, 0, 'lastmessage').setInteractive();
		let nextBtn = this.scene.add.image(+800, +400,'nextBtnv2').setScale(0.8).setInteractive({useHandCursor: true})
				.on('pointerdown', () => { 
					msg_container.destroy();
					this.showLvlUpMsg();
				 })
		msg_container.add(finalmsg_img);
		msg_container.add(nextBtn);
		msg_container.setInteractive(); // Make the container interactive if you want to handle events
		msg_container.setDepth(5);
	}

	showLvlUpMsg() {
		let lvlUp_container = this.scene.add.container(this.scene.scale.width / 2, this.scene.scale.height / 2)
			.setSize(this.scene.scale.width, this.scene.scale.height).setInteractive();
		let lvlUp_img = this.scene.add.sprite(0, 0, 'popupNxtLvl').setInteractive();
		let nextBtn = this.scene.add.image(+800, +400, 'nextBtnv2').setScale(0.8).setInteractive({ useHandCursor: true })
			.on('pointerdown', () => {
				lvlUp_container.destroy();
				this.scene.scene.stop("startGame"); // Stop the "startGame" scene
				console.log("final_clicked");
				this.scene.scene.start("WBintroGame");  // Launch the "playClueCraft" scene
			});
		lvlUp_container.add(lvlUp_img);
		lvlUp_container.add(nextBtn);
		lvlUp_container.setInteractive(); // Make the container interactive if you want to handle events
		lvlUp_container.setDepth(5);
	}
	



	showPopupImage(msg) {
		// Create a popup container sprite
		let popupContainer = this.scene.add.container(this.scene.scale.width/2, this.scene.scale.height/2)
			.setSize(this.scene.scale.width, this.scene.scale.height).setInteractive();
		//this.scene.input.enableDebug(popupContainer)
		
		// Create a popup image sprite
		let popupImage = this.scene.add.sprite(0, 0, 'category-divider').setInteractive();
		popupContainer.add(popupImage);
		
		// Add text to the popup container
		let text = this.scene.add.text(-120, -50, msg, { fontFamily: '"Montserrat"', fill: '#000000', fontSize: '30px' });
		text.setAlign('justify');
		text.setWordWrapWidth(450); // Adjust the width as needed
		popupContainer.add(text);
		
		// Create a close button as an image
		let nextButton = this.scene.add.image(300, 110, 'nextBtnv2');
		nextButton.setInteractive({ useHandCursor: true })
		nextButton.setScale(0.6)
		
		popupContainer.add(nextButton);
		
		// Set the interactive and depth properties of the popup container
		popupContainer.setInteractive(); // Make the container interactive if you want to handle events
		popupContainer.setDepth(5);
		
		// Add a click event listener to close the popup container
		nextButton.on('pointerdown', () => {
			popupContainer.destroy(); // Remove the popup container from the scene

			this.timer.paused = false; //Resume time


			this.scene.options_shapes.button.destroy();
			this.scene.options_shapes.destroy();
			this.scene.options_shapes = new OptionsContainer(this.scene, 1470, 50, this.scene.combinations.options_shapes2, {
				name: 'shape', x: 1470, y: 50, bg_key: 'sideBar',
				items: this.scene.combinations.options_shapes2, itemsPerPage: 3,
				button: {key: "shapebtn", x: this.scene.cameras.main.width / 1 - 170, y: 230}
			});

			this.scene.options_texts.button.destroy();
			this.scene.options_texts.destroy();
			this.scene.options_texts = new OptionsContainer(this.scene, 1470, 50, this.scene.combinations.options_text2, {
				name: 'text', x: 1470, y: 50, bg_key: 'textSideBar',
				items: this.scene.combinations.options_text2, itemsPerPage: 4,
				button: {key: "textbtn", x: this.scene.cameras.main.width / 1 - 170, y: 500}
			});

			this.scene.options_vectors.button.destroy();
			this.scene.options_vectors.destroy();
			this.scene.options_vectors = new OptionsContainer(this.scene, 1470, 50, this.scene.combinations.
			options_icon2, {
				name: 'vector', x: 1470, y: 50, bg_key: 'sideBar',
				items: this.scene.combinations.options_icon2, itemsPerPage: 4,
				button: {key: "vectorbtn", x: this.scene.cameras.main.width / 1 - 170, y: 800}
			});

			this.questionSetCounter++;
			
			switch(this.questionSetCounter){
				case 1:
					this.scene.gameplay.init_questions(this.scene.combinations.questions2);
					break;
				case 2:
					popupContainer.destroy(); // Remove the popup container from the scene

					this.timer.paused = false; //Resume time

					this.scene.options_shapes.button.destroy();
					this.scene.options_shapes.destroy();
					this.scene.options_shapes = new OptionsContainer(this.scene, 1470, 50, this.scene.combinations.options_shapes3, {
						name: 'shape', x: 1470, y: 50, bg_key: 'sideBar',
						items: this.scene.combinations.options_shapes2, itemsPerPage: 3,
						button: {key: "shapebtn", x: this.scene.cameras.main.width / 1 - 170, y: 230}
					});

					this.scene.options_texts.button.destroy();
					this.scene.options_texts.destroy();
					this.scene.options_texts = new OptionsContainer(this.scene, 1470, 50, this.scene.combinations.options_text3, {
						name: 'text', x: 1470, y: 50, bg_key: 'textSideBar',
						items: this.scene.combinations.options_text2, itemsPerPage: 4,
						button: {key: "textbtn", x: this.scene.cameras.main.width / 1 - 170, y: 500}
					});

					this.scene.options_vectors.button.destroy();
					this.scene.options_vectors.destroy();
					this.scene.options_vectors = new OptionsContainer(this.scene, 1470, 50, this.scene.combinations.
					options_icon3, {
						name: 'vector', x: 1470, y: 50, bg_key: 'sideBar',
						items: this.scene.combinations.options_icon3, itemsPerPage: 4,
						button: {key: "vectorbtn", x: this.scene.cameras.main.width / 1 - 170, y: 800}
					});
					this.scene.gameplay.init_questions(this.scene.combinations.questions3);
					this.scene.gameplay.questionLoad();
					break;
				default:
					console.log("ERROR");
					break;
			}
			
			this.scene.gameplay.questionLoad(); 
		});
	}
	  
	questionCheckAnswer() {
		let answer_shape = this.scene.options_shapes.selectedItem;
		let answer_text = this.scene.options_texts.selectedItem;
		let answer_vector = this.scene.options_vectors.selectedItem;

		if (answer_shape && answer_text && answer_vector) {
			if (answer_vector.name === this.currentQuestion.answer_vector && 
				answer_text.name === this.currentQuestion.answer_text && (
					this.currentQuestion.answer_shape.includes(answer_shape.name) || answer_shape.name === this.currentQuestion.answer_shape))
				 {
				this.scene.showClientReact(true);
			} 
			else {
				this.scene.showClientReact(false);
			}
		}

		this.clickedObjects = 0;
		if (answer_shape) this.clickedObjects++;
		if (answer_text) this.clickedObjects++;
		if (answer_vector) this.clickedObjects++;

		if (this.clickedObjects < 3) {
			console.log("You clicked incompletely");
		
			// Display the 'warning_prompt' image
			let image = this.scene.add.image(
				this.scene.scale.width/2, this.scene.scale.height/2,
				'warning_prompt');
		
			// Remove the image after 1 second
			setTimeout(function() {
				image.destroy();
			}, 1000);
		
			return;
		}
		
	}
}

class OptionsContainer extends Phaser.GameObjects.Container {
	constructor(scene, x, y, items, data){
		super(scene, x, y).setVisible(false).setDepth(100);
		this.scene.add.existing(this);

		this.items = items;
		this.options_images = [];
		this.itemsPerPage = data.itemsPerPage;
		this.currentPage = 1;
		this.selectedItem;
		this.selectedItemsContainer;

		this.button = scene.add.image(data.button.x, data.button.y, data.button.key)
			.setInteractive({ useHandCursor: true })
			.on('pointerover', () => this.button.setScale(0.9))
			.on('pointerout', () => this.button.setScale(1))
			.on('pointerdown', () => {
				this.setVisible(true);
				this.closeBtn.setVisible(true);
			});

		// 1370,50
		this.closeBtn = this.scene.add.image(-75, 300, 'closeButton')
			.setInteractive({useHandCursor: true})
			.on('pointerdown', () => {
				this.setVisible(false);
			});
		this.add(this.closeBtn);

		this.bg = this.scene.add.image(0, 0, data.bg_key).setOrigin(0).setDepth(1);
		this.bg.setScale(530 / this.bg.width, 1000 / this.bg.height).setInteractive();
		this.add(this.bg);

		// Create a container for the selected items
		this.selectedItemsContainer = this.scene.add.container(data.x, data.y);
		// this.add(this.selectedItemsContainer);
		
		this.buttonBorder = this.scene.add.image(390,500, 'buttonBorder');
		this.buttonBorder.setScale(30 / this.buttonBorder.width, 120 / this.buttonBorder.height)
		this.add(this.buttonBorder);

		// Add pagination buttons
		this.prevButton = this.scene.add.image(390,450, 'upBtn');
		this.prevButton.setInteractive({ useHandCursor: true })
			.on('pointerover',() => this.prevButton.setScale(1))
			.on('pointerout', () => this.prevButton.setScale(1.1))
			.on('pointerdown', () => {
				this.prevPage();
			});
		this.add(this.prevButton);

		this.nextButton = this.scene.add.image(390, 550, 'downBtn');
		this.nextButton.setInteractive({ useHandCursor: true })
			.on('pointerover',() => this.nextButton.setScale(1))
			.on('pointerout', () => this.nextButton.setScale(1.1))
			.on('pointerdown', () => {
				this.nextPage();
			});
		this.add(this.nextButton);

		// Display items on current page
		items.forEach(item => {
			let sprite = this.scene.add.sprite(item.x, item.y, item.key)
				.setScale(item.size)
				.setInteractive({ useHandCursor: true })
				.on('pointerover', () => sprite.setPosition(item.x + 5, item.y + 5))
				.on('pointerout', () => sprite.setPosition(item.x, item.y))
				.on('pointerdown', () => {
					this.scene.selectedItem = item.name;
					this.selectItem(item);
				});

			this.add(sprite);
			this.options_images.push(sprite);
		});

		this.showPage(this.currentPage);
	}

	showPage(pageNumber) {
		// Get items to display on current page
		const startIndex = (pageNumber - 1) * this.itemsPerPage;
		const endIndex = startIndex + this.itemsPerPage;
		const itemsToDisplay = this.items.slice(startIndex, endIndex);
		
		this.options_images.forEach((item, i) => {
			if ((i+1 > startIndex) && (i+1 <= endIndex))
		  		item.setVisible(true);
			else
				item.setVisible(false);
		});
	}
    
	selectItem(item) {
		// Empty selected items
		this.selectedItemsContainer.removeAll(true);
		this.selectedItem = item;

		// code to highlight the selected shape
		let newSprite = this.scene.add.sprite(item.newPos[0], item.newPos[1], item.key)
			.setScale(item.newSize).setName(item.key);  
		this.selectedItemsContainer.add(newSprite);
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
