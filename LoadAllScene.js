
class LoadAllScenes extends Phaser.Scene {
    constructor() {
        super('loadAllScenes');
    }

    create() {
        this.scene.start('introGame');
        this.scene.start('playLogofy');
    }
}