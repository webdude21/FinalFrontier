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
    var direction = args.directions;
    var rotation = args.rotation;
    var objectHandler = args.objectHandler;

    objectHandler.addEventListener('keydown', function (event) {
        event = event || window.event;
        switch (event.keyCode) {
            case LEFT_ARROW:
            case A_KEY:
                controllableObj[direction].left = true;
                break;
            case UP_ARROW:
            case W_KEY:
                controllableObj[direction].up = true;
                break;
            case RIGHT_ARROW:
            case D_KEY:
                controllableObj[direction].right = true;
                break;
            case DOWN_ARROW:
            case S_KEY:
                controllableObj[direction].down = true;
                break;
            case Q_KEY:
                controllableObj[rotation] = 'rotateLeft';
                break;
            case E_KEY:
                controllableObj[rotation] = 'rotateRight';
                break;
        }
    });

    document.addEventListener('keyup', function (event) {
        event = event || window.event;
        switch (event.keyCode) {
            case LEFT_ARROW:
            case A_KEY:
                controllableObj[direction].left = false;
                break;
            case UP_ARROW:
            case W_KEY:
                controllableObj[direction].up = false;
                break;
            case RIGHT_ARROW:
            case D_KEY:
                controllableObj[direction].right = false;
                break;
            case DOWN_ARROW:
            case S_KEY:
                controllableObj[direction].down = false;
                break;
            case Q_KEY:
                controllableObj[rotation] = 'none';
                break;
            case E_KEY:
                controllableObj[rotation] = 'none';
                break;
        }
    });
}