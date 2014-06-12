var GAME_FIELD_WIDTH = 800,
    GAME_FIELD_HEIGHT = 600;

function startGame() {

    soundInit();
    var gameField = new GameField(GAME_FIELD_WIDTH, GAME_FIELD_HEIGHT, 'game-window');
    setBackground(gameField);
    var foregroundDrawer = new KineticDrawer(gameField.foreground);
    var spaceObjectManager = new SpaceObjectManager(foregroundDrawer);

    var playerShip = getPlayer();
    spaceObjectManager.add(playerShip);
    spaceObjectManager.playerShip = playerShip;
    var statistics = getStatistics(gameField, playerShip);

    enemyGenerationInit(spaceObjectManager, playerShip);
    attachControls(playerShip, gameField);

    function runGame() {
        spaceObjectManager.update();
        foregroundDrawer.drawAll();
        statistics.update();
        window.requestAnimFrame(function () {
            runGame();
        });
    }

    runGame();
}