function startGame() {
    // initialize game variables
    var gameArt = new GameArt();
    var gameField = new GameField(800, 600, 'game-window');
    var foregroundDrawer = new KineticDrawer(gameField.foreground);
    var spaceObjectManager = new SpaceObjectManager(foregroundDrawer);
    var backgroundDrawer = new KineticDrawer(gameField.background);
    var background = gameArt.backgroundImage;
    backgroundDrawer.generateImage(0, 0, background.width, background.height, 0, background);
    backgroundDrawer.drawAll();
    foregroundDrawer.canvas.moveToTop();
    generateEnemy(50, 50);
    var playerShip = new PlayerShip({
        rotation: 0,
        shape: new Kinetic.Image({
            x: 20,
            y: 20,
            image: gameArt.playerImage,
            width: gameArt.playerImage.width,
            height: gameArt.playerImage.height
        }),
        direction: 'left'
    });
    attachKeyboardControl(playerShip, 'direction');
    spaceObjectManager.add(playerShip);

    function runGame() {
        spaceObjectManager.update();
        foregroundDrawer.drawAll();
        window.requestAnimFrame(function () {
            runGame();
        });
    }

    runGame();

    function generateEnemy(x, y) {
        spaceObjectManager.add(new SpaceObject({
            rotation: 0,
            shape: new Kinetic.Image({
                x: x,
                y: y,
                image: gameArt.enemyImage,
                width: gameArt.enemyImage.width,
                height: gameArt.enemyImage.height
            }),
            direction: 'left'
        }));
    }
}