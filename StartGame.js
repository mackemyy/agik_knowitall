class StartGame extends Phaser.Scene {
    constructor() {
        super("startGame");
    }

    create() {
        
        this.startMusic3 = new SoundButton(this, 300, 110, "music3", musicConfig);
        this.add.existing(this.startMusic3);
        this.startMusic3.setDepth(1);
       
        this.timer = this.time.delayedCall(120000, this.timerCallback, [], this);
        console.log('Timer duration:', this.timer.delay);

        // Display the remaining time in minute format on the screen
        this.timeText = this.add.text(config.scale.width / 2 - 380, config.scale.height / 2 - 470, '2:00', { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '50px', align: "center", stroke: "#00BBA0", strokeThickness: 10, });

        this.emptyOffice1Bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "emptyOffice1")
        this.logoBox = this.add.image(config.scale.width / 2, config.scale.height / 2, "logoCntnr");
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
            this.scene.launch("QuitGame");
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
                .on('pointerover', () => button.setScale(0.9))
                .on('pointerout', () => button.setScale(1));
        });

        this.deleteButton = this.add.image(this.cameras.main.width / 2 - 400, config.scale.height / 1 - 100, "deletebtn")
            .setInteractive({ useHandCursor: true })
            .setScale(0.9)
            .on('pointerover', () => this.deleteButton.setScale(1))
            .on('pointerout', () => this.deleteButton.setScale(0.9));

        this.checkButton = this.add.image(this.cameras.main.width / 2 + 410, config.scale.height / 1 - 100, "checkbtn")
            .setInteractive({ useHandCursor: true })
            .setScale(0.9)
            .on('pointerover', () => this.checkButton.setScale(1))
            .on('pointerout', () => this.checkButton.setScale(0.9));

        this.pointsTxt = this.add.text(this.cameras.main.width / 2 + 240, config.scale.height / 2 - 460, "0 pts", {
            fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '45px', align: "center", stroke: "#EF7300", strokeThickness: 10, wordWrap: { width: 900, useAdvancedWrap: true }
        });

        this.clientTxtContainer = this.add.container(135, 630);
        this.clientRqstTxt = this.add.text(0, 0, 'Employees want to keep the air clean in this area. I want the signage to be inside a shape where opposite sides are equal.', {
            fontFamily: '"Montserrat"', fill: '#000000', fontSize: '25px', align: "center", stroke: "#000000", strokeThickness: 0.5, wordWrap: { width: 210, useAdvancedWrap: true }
        });
        this.clientTxtContainer.add(this.clientRqstTxt);

    }

    update() {

        var elapsedSeconds = this.timer.getElapsedSeconds();


        var remainingTime = 120 - elapsedSeconds;

        if (remainingTime <= 0) {
            this.timeText.setText('0:00');
            this.timer.remove();
            this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Time\'s up!', { fontFamily: '"Typesauce"', fill: '#FFFFFF', fontSize: '72px', align: "center", }).setOrigin(0.5);
        } else {
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
}