function startGame() {
    // initialize game variables
    // var gameArt = new GameArt();
    var gameField = new GameField(800, 600, 'game-window');
    var backgroundDrawer = new KineticDrawer(gameField.background);
    var background = GAME_ART.BACKGROUND;
    backgroundDrawer.generateImage(0, 0, background.width, background.height, 0, background);
    backgroundDrawer.drawAll();
    var foregroundDrawer = new KineticDrawer(gameField.foreground);
    var spaceObjectManager = new SpaceObjectManager(foregroundDrawer);

    generateWalker(400, 300);

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

    function generateWalker(x, y) {
        spaceObjectManager.add(new Walker({
            rotation: 'rotateRight',
            rotationSpeed: 2,
            shape: new Kinetic.Image({
                x: x,
                y: y,
                image: GAME_ART.ENEMY,
                width: GAME_ART.ENEMY.width,
                height: GAME_ART.ENEMY.height,
                offset: {x: 20, y: 20},
                speed: 1
            })
        }));
    }
}