function attachMouseControl(args) {
<<<<<<< HEAD
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
=======
	// TODO maybe :)
	// we want to set the stage
	// to listen for mouse movement
	// controllableObj
	// stage

  	args.stage.on('mousemove', function() {
  		var mousePosition = args.stage.getPointerPosition();
  		var objPosition = args.controllableObj.getCenterPoint();

      // yDist is inverted since going down
      // increases the y position unlike the
      // normal coordinate system where down
      // decreases y position
  		var xDist = mousePosition.x - objPosition.x;
  		var yDist = mousePosition.y - objPosition.y;

  		var radians = Math.atan2(yDist, xDist);
  		var degrees = (radians * 180 / Math.PI);

  		args.controllableObj.rotate(degrees);
  	}, false);
>>>>>>> 5ff143645b545ee50910fe99d163faa4d8e9fa14
}