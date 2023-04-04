class ImageButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, assetKey, onDown, onPointerOver, onPointerOut, scale) {
        super(scene, x, y);
        scene.add.existing(this);
        this.button = scene.add.image(0,0, assetKey)
            .setInteractive({useHandCursor: true})
            .setScale(scale)
            .on('pointerdown', onDown)
            .on('pointerover', onPointerOver)
            .on('pointerout', onPointerOut);
        this.add(this.button);
    }
}