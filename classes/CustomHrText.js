class CustomHrText extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, fontSize, width, fontColor = '#924600', textAlign = "center", font = 'Montserrat') {
        super(scene, x, y, text, { 
            fontFamily: font, 
            fill: fontColor,
            fontSize: fontSize, 
            align: textAlign, 
            wordWrap: { width: width, useAdvancedWrap: true }});
        scene.add.existing(this);
    }
}