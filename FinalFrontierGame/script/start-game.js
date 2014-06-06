function startGame() {
    // initialize game variables
    var GAME_FIELD_HEIGHT = 800;
    var GAME_FIELD_WIDTH = 600;
    var gameField = new GameField(GAME_FIELD_HEIGHT, GAME_FIELD_WIDTH, 'game-window');
    var backgroundDrawer = new KineticDrawer(gameField.background);
    var background = GAME_ART.BACKGROUND;
    backgroundDrawer.generateImage(0, 0, background.width, background.height, 0, background);
    backgroundDrawer.drawAll();
    var foregroundDrawer = new KineticDrawer(gameField.foreground);
    var spaceObjectManager = new SpaceObjectManager(foregroundDrawer);

    var generateRandomWalker = function () {
        validPosition = generateValidPosition(GAME_ART.ENEMY.height, GAME_ART.ENEMY.width);
        spaceObjectManager.add(new Walker({
            rotation: 'rotateRight',
            rotationSpeed: 2,
            speed: 2,
            shape: new Kinetic.Image({
                x: validPosition.x,
                y: validPosition.y,
                image: GAME_ART.ENEMY,
                width: GAME_ART.ENEMY.width,
                height: GAME_ART.ENEMY.height,
                offset: {x: 20, y: 20}
            })
        }));
    };

    function generateValidPosition(objectHeight, objectWidth) {
        return {
            x: randomInt(objectWidth, GAME_FIELD_WIDTH - objectWidth),
            y: randomInt(objectHeight, GAME_FIELD_HEIGHT - objectHeight)
        }
    }

    var walkerGeneratorID = setInterval(generateRandomWalker, 4000);
    var playerShip = new PlayerShip({
        rotation: 0,
        speed: 2,
        shape: new Kinetic.Image({
            x: 50,
            y: 50,
            image: GAME_ART.PLAYER_SHIP,
            width: GAME_ART.PLAYER_SHIP.width,
            height: GAME_ART.PLAYER_SHIP.height,
            offset: {x: 20, y: 20}
        })
    });

    attachKeyboardControl({
        controllableObj: playerShip,
        directionInterface: 'direction',
        objectHandler: window
    });

    attachMouseControl({
        controllableObj: playerShip,
        objectHandler: gameField.stage,
        rotationInterface: 'rotate'
    });

    spaceObjectManager.add(playerShip);

    function runGame() {
        spaceObjectManager.update();
        foregroundDrawer.drawAll();
        window.requestAnimFrame(function () {
            runGame();
        });
    }

    runGame();


}