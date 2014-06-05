function startGame() {
    // initialize game variables
    var gameArt = new GameArt();
    var gameField = new GameField(800, 600, 'game-window');
    var playerShip = new PlayerShip(10, 10, gameArt.playerImage);
    var spaceObjectManager = new SpaceObjectManager();
    var foregroundDrawer = new KineticDrawer(gameField.foreground);
    var backgroundDrawer = new KineticDrawer(gameField.background);
    var background = gameArt.backgroundImage;
    backgroundDrawer.addObjectsToDraw(0, 0, background.width, background.height, 0, background);
    backgroundDrawer.drawAll();
    attachKeyboardControl(playerShip, 'direction');
    spaceObjectManager.add(playerShip);
    spaceObjectManager.add(new SpaceObject(200, 200, 100, 100, 0));

    function runGame() {
        spaceObjectManager.update();
        spaceObjectManager.draw(foregroundDrawer);
        window.requestAnimFrame(function () {
            runGame();
        });
    }

    runGame();
}