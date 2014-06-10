var GAME_FIELD_WIDTH = 800,
    GAME_FIELD_HEIGHT = 600;

function startGame() {
    // initialize game variables
    var gameField = new GameField(GAME_FIELD_WIDTH, GAME_FIELD_HEIGHT, 'game-window');
    var backgroundDrawer = new KineticDrawer(gameField.background);
    var background = GAME_ART.BACKGROUND;
    backgroundDrawer.generateImage(0, 0, background.width, background.height, 0, background);
    backgroundDrawer.drawAll();
    var foregroundDrawer = new KineticDrawer(gameField.foreground);
    var spaceObjectManager = new SpaceObjectManager(foregroundDrawer);

    var playerShip = new PlayerShip({
        rotation: 0,
        speed: 4,
        shape: new Kinetic.Image({
            x: 50,
            y: 50,
            image: GAME_ART.PLAYER_SHIP,
            width: GAME_ART.PLAYER_SHIP.width,
            height: GAME_ART.PLAYER_SHIP.height,
            offset: {x: GAME_ART.PLAYER_SHIP.width / 2, y: GAME_ART.PLAYER_SHIP.height / 2}
        })
    });


    var generateRandomWalker = function () {
        var validPosition = generateValidPosition(GAME_ART.WALKER.height, GAME_ART.WALKER.width);
        spaceObjectManager.add(new Walker({
            rotation: 'rotateRight',
            rotationSpeed: 2,
            speed: 2,
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

    var generateRandomDrone = function () {
        var validPosition = generateValidPosition(GAME_ART.DRONE.height, GAME_ART.DRONE.width);
        spaceObjectManager.add(new Drone({
            speed: 1,
            target: playerShip,
            x: validPosition.x,
            y: validPosition.y
        }));
    };

    function generateValidPosition(objectHeight, objectWidth) {
        return {
            x: randomInt(objectWidth, GAME_FIELD_WIDTH - objectWidth),
            y: randomInt(objectHeight, GAME_FIELD_HEIGHT - objectHeight)
        };
    }

    var walkerGeneratorID = setInterval(generateRandomWalker, 4000);
    var droneGeneratorID = setInterval(generateRandomDrone, 7000);

    spaceObjectManager.add(playerShip);
    spaceObjectManager.playerShip = playerShip;

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


    function runGame() {
        spaceObjectManager.update();
        foregroundDrawer.drawAll();
        window.requestAnimFrame(function () {
            runGame();
        });
    }

    runGame();
}