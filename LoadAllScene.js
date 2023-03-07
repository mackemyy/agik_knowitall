
class LoadAllScenes extends Phaser.Scene {
    constructor() {
        super('loadAllScenes');
    }

    create() {
        this.scene.start('loadingScene');
    }
}