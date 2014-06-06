function attachMouseControl(args) {
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
}