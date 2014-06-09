function SpaceObject(args) {
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 'none';
    this.direction = {left: false, right: false, up: false, down: false};
    this.speed = args.speed || 2;
    this.properties = {
        x: this.visual.attrs.x - this.visual.attrs.offsetX,
        y: this.visual.attrs.y - this.visual.attrs.offsetY,
        x2: this.visual.attrs.x - this.visual.attrs.offsetX + this.visual.attrs.width,
        y2: this.visual.attrs.y - this.visual.attrs.offsetY + this.visual.attrs.height,
        width: this.visual.attrs.width,
        height: this.visual.attrs.height,
        centerPoint: {
            x: this.visual.attrs.x - this.visual.attrs.offsetX + this.visual.attrs.width / 2,
            y: this.visual.attrs.y - this.visual.attrs.offsetY + this.visual.attrs.height / 2
        }
    }
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

SpaceObject.prototype.checkIfExpired = function checkIfExpired(gameInfo) {
    if ((this.properties.x + this.properties.width >= gameInfo.xBound) ||
        (this.properties.y + this.properties.height >= gameInfo.xBound) ||
        (this.properties.x + this.properties.width <= 0) ||
        (this.properties.y + this.properties.height <= 0)) {
        this.hasExpired = true;
    }
};

SpaceObject.prototype.rotate = function rotate(step) {
    this.visual.rotate(step);
};

SpaceObject.prototype.update = function update(gameInfo) {
    this.refreshProperties();
    this.checkIfExpired(gameInfo);
};

SpaceObject.prototype.refreshProperties = function refreshProperties() {
    this.properties = {
        x: this.visual.attrs.x - this.visual.attrs.offsetX,
        y: this.visual.attrs.y - this.visual.attrs.offsetY,
        x2: this.visual.attrs.x - this.visual.attrs.offsetX + this.visual.attrs.width,
        y2: this.visual.attrs.y - this.visual.attrs.offsetY + this.visual.attrs.height,
        width: this.visual.attrs.width,
        height: this.visual.attrs.height,
        centerPoint: {
            x: this.visual.attrs.x - this.visual.attrs.offsetX + this.visual.attrs.width / 2,
            y: this.visual.attrs.y - this.visual.attrs.offsetY + this.visual.attrs.height / 2
        }
    };
};
