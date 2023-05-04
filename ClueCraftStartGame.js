class ClueCraftStartGame extends Phaser.Scene {
    constructor() {
        super("ClueCraftStartGame");
    }   
    
    create(){


        this.puzzle_clue = [
            {
                text: '"Our company uses this JavaScript framework for building user interfaces due to its simplicity, user-friendliness, and lightweight features, which offer our developers numerous use cases while maintaining powerful capabilities."',
                // answer: 'Vue',
            },
        ];
        
        this.emptyOffice1Bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "WBemptyoffice");
        this.PuzzleClueCtr = this.add.image(250, 600, "puzzleClueCtr");
        this.PuzzleBoxBackground();
        this.PiecesSideBarBG();
        this.timer();
        this.gamePointers();

 
        // set text in puzzle clue container
        this.mr_g_puzzleclue = this.add.text(0, 0, '', {
            fontFamily: '"Montserrat"', fill: '#000000', fontSize: '23px', align: "center", stroke: "#000000", strokeThickness: 0.5, wordWrap: { width: 270, useAdvancedWrap: true }
        });
        this.puzzletxtCntnr = this.add.container(130, 510);
        this.puzzletxtCntnr.add(this.mr_g_puzzleclue);

        // function for puzzle clue
        this.showClue();

        this.timer = this.time.delayedCall(120000, this.timerCallback, [], this);
        this.timeText = this.add.text(config.scale.width / 2 - 380, config.scale.height / 2 - 495, '2:00', { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '50px', align: "center", stroke: "#00BBA0", strokeThickness: 10, });

        this.menuButton = new ImageButton(this, 150, 90, "menuBtnv2", 
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
    };



    PuzzleBoxBackground(){
        const PuzzleBox = this.add.image(config.scale.width / 2 , config.scale.height/2 + 60, "puzzleCtr");
    };

    PiecesSideBarBG(){
        const PiecesBGctr = this.add.image(config.scale.width - 250, config.scale.height - 580, "piecesCtr");
    };

    timer(){
        const gameTimer = this.add.image(config.scale.width / 2 - 350 , config.scale.height/2 -460, "timerBG");
    }

    gamePointers(){
        const pointsTxt = this.add.text(this.cameras.main.width / 2 + 220, config.scale.height / 2 - 490, "0 pts", {
            fontFamily: '"Typesauce"',
            fill: '#FFFFFF',
            fontSize: '40px',
            align: "center",
            stroke: "#EF7300",
            strokeThickness: 10,
            wordWrap: { width: 900, useAdvancedWrap: true }
        }).setDepth(1);

        const gamePointer = this.add.image(config.scale.width / 2 + 320, config.scale.height/2 -460, "pointerBG");
    }

    showClue() {

        if (this.currentQuestion) {
          this.currentQuestion = null;
          this.mr_g_puzzleclue.setText('');
        }
      
        const puzzle_clue = this.puzzle_clue[Math.floor(Math.random() * this.puzzle_clue.length)];
    
        this.mr_g_puzzleclue.setText(puzzle_clue.text);
      
        this.currentQuestion = puzzle_clue;
      
        console.log("show clue!");

      
      }


    update(){

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

    formatTime(time) {
        // Helper function to add leading zeroes to single-digit numbers
        console.log('Input time:', time);
        var formattedTime = (time < 10) ? '0' + time : time;
        console.log('Formatted time:', formattedTime);
        return formattedTime;
    }
    
}

