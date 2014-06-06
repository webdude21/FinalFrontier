function attachMouseControl(args) {
    var controllableObj = args.controllableObj;
    var objectHandler = args.objectHandler;

    objectHandler.addEventListener('mousemove', function (event) {
        event = event || window.event;
        var objPosition = args.controllableObj.getCenterPoint();
        var xDist = event.layerX - objPosition.x;
        var yDist = (event.layerY - objPosition.y);
        var angle = Math.atan2(yDist, xDist) * (180 / Math.PI);
        controllableObj.visual.setRotationDeg(angle);
    }, false);
}