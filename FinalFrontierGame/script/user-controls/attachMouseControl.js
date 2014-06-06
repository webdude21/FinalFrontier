function attachMouseControl(args) {
	// TODO maybe :)
	// we want to set the stage
	// to listen for mouse movement
	// controllableObj
	// stage

  	args.stage.on('mousemove', function() {
  		var mousePosition = args.stage.getPointerPosition();
  		var objPosition = args.controllableObj.getLocation();

  		var xDist = mousePosition.x - objPosition.x;
  		var yDist = mousePosition.y - objPosition.y;

  		var radians = Math.atan2(yDist, xDist);
  		var degrees = ((radians * Math.PI) * -1) + 90;

  		args.controllableObj.rotate(degrees);
  	}, false);
}