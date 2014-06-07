function attachMouseControl(args) {
    var controllableObj = args.controllableObj;
    var objectHandler = args.objectHandler;
    var rotationInterface = args.rotationInterface;
    var shootingInterface = args.shootingInterface;

    var followMouseCursor = function (event) {
        event = event || window.event;
        var xDist = event.layerX - controllableObj.properties.centerPoint.x;
        var yDist = event.layerY - controllableObj.properties.centerPoint.y;
        var angle = Math.atan2(yDist, xDist) * (180 / Math.PI);
        controllableObj[rotationInterface](angle);
    };

    var fire = function (event) {
        event = event || window.event;
        var target = {
            x: event.layerX,
            y: event.layerY
        };
        controllableObj[shootingInterface](target);
    };

    objectHandler.addEventListener('mousemove', followMouseCursor);
    objectHandler.addEventListener('mousedown', followMouseCursor);
    objectHandler.addEventListener('mousedown', fire);
}