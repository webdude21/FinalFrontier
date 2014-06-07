function attachMouseControl(args) {
    var controllableObj = args.controllableObj;
    var objectHandler = args.objectHandler;
    var rotationInterface = args.rotationInterface;

    var followMouseCursor = function (event) {
        event = event || window.event;
        var objPosition = args.controllableObj.getCenterPoint();
        var xDist = event.layerX - objPosition.x;
        var yDist = event.layerY - objPosition.y;
        var angle = Math.atan2(yDist, xDist) * (180 / Math.PI);
        controllableObj[rotationInterface](angle);
    };

    var fire = function (event) {
        event = event || window.event;
        var objManager = new SpaceObjectManager();
        var objPosition = controllableObj.getLocation();
        var bullet = new Bullet(objPosition.x, objPosition.y, {
            x: event.layerX,
            y: event.layerY
        }, controllableObj.rotation);
        objManager.add(bullet);
    };

    objectHandler.addEventListener('mousemove', followMouseCursor, false);
    objectHandler.addEventListener('mousedown', fire, false);
}