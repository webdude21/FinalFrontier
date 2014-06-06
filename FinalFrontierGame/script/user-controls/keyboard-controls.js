function attachKeyboardControl(args) {
    var LEFT_ARROW = 37;
    var A_KEY = 65;
    var RIGHT_ARROW = 39;
    var D_KEY = 68;
    var UP_ARROW = 38;
    var W_KEY = 87;
    var DOWN_ARROW = 40;
    var S_KEY = 83;
    var Q_KEY = 81;
    var E_KEY = 69;
    var SHIFT = 16;
    var controllableObj = args.controllableObj;
    var direction = args.direction;
    var rotation = args.rotation;
    var objectHandler = args.objectHandler;

    objectHandler.addEventListener('keydown', function (event) {
        event = event || window.event;
        var newX = 0, newY = 0;
        var speed = controllableObj.speed;
        switch (event.keyCode) {
            case LEFT_ARROW:
            case A_KEY:
                newX -= speed;
                break;
            case UP_ARROW:
            case W_KEY:
                newY = -speed;
                break;
            case RIGHT_ARROW:
            case D_KEY:
                newX += speed;
                break;
            case DOWN_ARROW:
            case S_KEY:
                newY += speed;
                break;
            case Q_KEY:
                controllableObj[rotation] = 'rotateLeft';
                break;
            case E_KEY:
                controllableObj[rotation] = 'rotateRight';
                break;
        }

        controllableObj[direction] = {x: newX, y: newY};
    });

    objectHandler.addEventListener('keyup', function (event) {
        event = event || window.event;
        switch (event.keyCode) {
            case LEFT_ARROW:
            case A_KEY:
                controllableObj[direction] = {x: 0};
                break;
            case UP_ARROW:
            case W_KEY:
                controllableObj[direction] = {y: 0};
                break;
            case RIGHT_ARROW:
            case D_KEY:
                controllableObj[direction] = {x: 0};
                break;
            case DOWN_ARROW:
            case S_KEY:
                controllableObj[direction] = {y: 0};
                break;
                break;
            case Q_KEY:
                controllableObj[rotation] = 'none';
                break;
            case E_KEY:
                controllableObj[rotation] = 'none';
                break;
        }
    })
}