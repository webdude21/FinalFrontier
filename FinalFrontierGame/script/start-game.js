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
        var randX = randomInt(20, GAME_FIELD_WIDTH - 20);
        var randY = randomInt(20, GAME_FIELD_HEIGHT - 20);
        spaceObjectManager.add(new Walker({
            rotation: 'rotateRight',
            rotationSpeed: 2,
            shape: new Kinetic.Image({
                x: randX,
                y: randY,
                image: GAME_ART.ENEMY,
                width: GAME_ART.ENEMY.width,
                height: GAME_ART.ENEMY.height,
                speed: 1,
                offset: {x: 20, y: 20}
            })
        }));
    };

    var walkerGeneratorID = setInterval(generateRandomWalker, 4000);
    var playerShip = new PlayerShip({
        rotation: 0,
        shape: new Kinetic.Image({
            x: 50,
            y: 50,
            image: GAME_ART.PLAYER_SHIP,
            width: GAME_ART.PLAYER_SHIP.width,
            height: GAME_ART.PLAYER_SHIP.height,
            speed: 5,
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