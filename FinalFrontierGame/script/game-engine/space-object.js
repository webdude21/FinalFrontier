function SpaceObject(args) {
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 'none';
    this.direction = {left: false, right: false, up: false, down: false};
    this.speed = args.speed || 2;

    // this.move = 

    // this.rotate = 

    // this.getLocation = 

    // this.getSize = 

    // this.getLocationAndSize = 

    // this.getCenterPoint = 

    // this.checkIfExpired = 


    // this.update = 

    // return this;
}

SpaceObject.prototype.move = function move(step) {
    var newX = 0;
    var newY = 0;

    if (this.direction.left) {
        newX -= step;
    }
    if (this.direction.right) {
        newX += step;
    }
    if (this.direction.up) {
        newY -= step;
    }
    if (this.direction.down) {
        newY += step;
    }

    this.visual.move({
        x: newX,
        y: newY
    });
};

SpaceObject.prototype.getLocation = function getLocation() {
    return {
        x: this.visual.attrs.x - this.visual.attrs.offsetX,
        y: this.visual.attrs.y - this.visual.attrs.offsetY,
        x2: this.visual.attrs.y - this.visual.attrs.offsetX + this.visual.attrs.width,
        y2: this.visual.attrs.y - this.visual.attrs.offsetY + this.visual.attrs.width
    };
};

SpaceObject.prototype.getSize = function getSize() {
    return{
        width: this.visual.attrs.width,
        height: this.visual.attrs.height
    };
};

SpaceObject.prototype.getLocationAndSize = function getLocationAndSize() {
    var location = this.getLocation();
    var size = this.getSize();
    return {
        x: location.x,
        y: location.y,
        x2: location.x2,
        y2: location.y2,
        width: size.width,
        height: size.height
    };
};

SpaceObject.prototype.getCenterPoint = function getCenterPoint() {
    return {
        x: this.visual.attrs.x,
        y: this.visual.attrs.y
    };
};

SpaceObject.prototype.checkIfExpired = function checkIfExpired(gameInfo) {
    var position = this.getLocation();
    var size = this.getSize();
    if ((position.x + size.width >= gameInfo.xBound) ||
        (position.y + size.height >= gameInfo.xBound) ||
        (position.x + size.width <= 0) ||
        (position.y + size.height <= 0)) {
        this.hasExpired = true;
    }
};

SpaceObject.prototype.rotate = function rotate(step) {
    this.visual.rotate(step);
};

SpaceObject.prototype.update = function update(gameInfo) {
    this.checkIfExpired(gameInfo);
};