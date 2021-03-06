var FINAL_FRONTIER_LEVEL = 1;

window.onload = function () {
    var playPauseButton = document.getElementById('play-pause');
    playPauseButton.addEventListener('click', runGame);
	var playButton = document.getElementById('play');
    playButton.addEventListener('click', runGame);
    var playMusicOnOff = document.getElementById('music-pause');
    playMusicOnOff.addEventListener('click', toggleMusicPause);
};

function getPlayer() {
    return new PlayerShip({
        rotation: 0,
        speed: 4,
        shape: new Kinetic.Image({
            x: GAME_FIELD_WIDTH / 2,
            y: GAME_FIELD_HEIGHT / 2,
            image: GAME_ART.PLAYER_SHIP,
            width: GAME_ART.PLAYER_SHIP.width,
            height: GAME_ART.PLAYER_SHIP.height,
            offset: {x: GAME_ART.PLAYER_SHIP.width / 2, y: GAME_ART.PLAYER_SHIP.height / 2}
        })
    });
}
function getStatistics(gameField, playerShip) {
    return STATS_MANAGER({
        layer: gameField.statistics,
        player: playerShip,
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fillColor: '#FFCC99',
        x: 10,
        y: 10
    });
}

function getRandomWalkerGenerator(spaceObjectManager) {
    return function getRandomWalkerGenerator() {
        var validPosition = generateValidPosition(GAME_ART.WALKER.height, GAME_ART.WALKER.width);
        spaceObjectManager.add(new Walker({
            rotation: 'rotateRight',
            rotationSpeed: 2 * FINAL_FRONTIER_LEVEL,
            speed: 2 * FINAL_FRONTIER_LEVEL,
            shape: new Kinetic.Image({
                x: validPosition.x,
                y: validPosition.y,
                image: GAME_ART.WALKER,
                width: GAME_ART.WALKER.width,
                height: GAME_ART.WALKER.height,
                offset: {x: GAME_ART.WALKER.width / 2, y: GAME_ART.WALKER.height / 2}
            })
        }));
    };
}

function getRandomDroneGenerator(spaceObjectManager, playerShip) {
    return function randomDroneGenerator() {
        var validPosition = generateValidPosition(GAME_ART.DRONE.height, GAME_ART.DRONE.width);
        spaceObjectManager.add(new Drone({
            speed: FINAL_FRONTIER_LEVEL,
            target: playerShip,
            x: validPosition.x,
            y: validPosition.y
        }));
    };
}

function generateValidPosition(objectHeight, objectWidth) {
    return {
        x: getRandom(objectWidth, GAME_FIELD_WIDTH - objectWidth),
        y: getRandom(objectHeight, GAME_FIELD_HEIGHT - objectHeight)
    };
}

function attachControls(playerShip, gameField) {
    attachKeyboardControl({
        directionInterface: 'direction',
        controllableObj: playerShip,
        objectHandler: window
    });

    attachMouseControl({
        shootingInterface: 'shoot',
        rotationInterface: 'rotate',
        controllableObj: playerShip,
        objectHandler: gameField.stage
    });
}

function enemyGenerationInit(spaceObjectManager, playerShip, level) {
    var randomWalkerGenerator = getRandomWalkerGenerator(spaceObjectManager);
    var randomDroneGenerator = getRandomDroneGenerator(spaceObjectManager, playerShip);
    var enemyGenerationEventQueue = [];
    enemyGenerationEventQueue.push(setInterval(randomWalkerGenerator, Math.floor(4000 / level)));
    enemyGenerationEventQueue.push(setInterval(randomDroneGenerator, Math.floor(7000 / level)));
    return enemyGenerationEventQueue;
}

function setBackground(gameField) {
    var backgroundDrawer = new KineticDrawer(gameField.background);
    var background = GAME_ART.BACKGROUND;
    backgroundDrawer.generateImage(0, 0, background.width, background.height, 0, background);
    backgroundDrawer.drawAll();
}

function setLevelUpInterval(interval) {
    return setInterval(function () {
        FINAL_FRONTIER_LEVEL++;
        clearTimers();
        initTimers(FINAL_FRONTIER_GLOBALS.spaceObjectsManager, FINAL_FRONTIER_GLOBALS.playerShip);
    }, interval);
}

function initTimers(spaceObjectManager, playerShip) {
    GAME_TIMERS = enemyGenerationInit(spaceObjectManager, playerShip, FINAL_FRONTIER_LEVEL);
    GAME_TIMERS.push(setLevelUpInterval(30000));
}