function attachKeyboardControl(controllableObj, prop) {
    var LEFT_ARROW = 37;
    var RIGHT_ARROW = 39;
    var UP_ARROW = 38;
    var DOWN_ARROW = 40;

    document.addEventListener('keypress', function (event) {
        event = event || window.event;
        switch (event.keyCode) {
            case LEFT_ARROW:
                controllableObj[prop] = 'left';
                break;
            case UP_ARROW:
                controllableObj[prop] = 'up';
                break;
            case RIGHT_ARROW:
                controllableObj[prop] = 'right';
                break;
            case DOWN_ARROW:
                controllableObj[prop] = 'down';
                break;
            default:
                controllableObj[prop] = 'none';
                break;
        }
    })
}