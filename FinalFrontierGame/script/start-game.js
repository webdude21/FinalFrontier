var GAME_FIELD_WIDTH = 800,
    GAME_FIELD_HEIGHT = 600,
    FINAL_FRONTIER_GLOBALS = {};

function runGame() {

    soundInit();
    var gameField = new GameField(GAME_FIELD_WIDTH, GAME_FIELD_HEIGHT, 'game-window');
    setBackground(gameField);
    var foregroundDrawer = new KineticDrawer(gameField.foreground);
    var spaceObjectManager = new SpaceObjectManager(foregroundDrawer);
    var playerShip = getPlayer();
    spaceObjectManager.add(playerShip);
    spaceObjectManager.playerShip = playerShip;
    var statistics = getStatistics(gameField, playerShip);
    FINAL_FRONTIER_GLOBALS.spaceObjectsManager = spaceObjectManager;
    FINAL_FRONTIER_GLOBALS.playerShip = playerShip;
    FINAL_FRONTIER_GLOBALS.GAME_RUNNING = false;
    attachControls(playerShip, gameField);
    togglePlayPauseButton();


    function runGame() {
        if (FINAL_FRONTIER_GLOBALS.GAME_RUNNING) {
            spaceObjectManager.update();
            foregroundDrawer.drawAll();
            statistics.update();
        }

        window.requestAnimFrame(function () {
            runGame();
        });
    }

    runGame();
}