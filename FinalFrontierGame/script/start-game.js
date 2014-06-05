function startGame() {
    // initialize game variables
    var gameArt = new GameArt();
    var gameField = new GameField(800, 600, 'game-window');
    var playerShip = new PlayerShip(10, 10, gameArt.playerImage);
    var spaceObjectManager = new SpaceObjectManager();
    var foregroundDrawer = new KineticDrawer(gameField.background);
    attachKeyboardControl(playerShip, 'direction');
    spaceObjectManager.add(playerShip);
    console.log(playerShip);

    function runGame() {
        gameField.foreground.clear();
        spaceObjectManager.update();
        spaceObjectManager.draw(foregroundDrawer);
        window.requestAnimFrame(function () {
            runGame();
        });
    }

    runGame();
}