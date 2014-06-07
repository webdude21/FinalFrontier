function SpaceObject(args) {
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 'none';
    this.direction = {left: false, right: false, up: false, down: false};
    this.speed = args.speed || 2;

    this.move = function move(step) {
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

    this.rotate = function rotate(step) {
        this.visual.rotate(step);
    };

    this.getLocation = function getLocation() {
        return {
            x: this.visual.attrs.x,
            y: this.visual.attrs.y,
            x2: this.visual.attrs.y + this.visual.attrs.width,
            y2: this.visual.attrs.y + this.visual.attrs.width
        };
    };

    this.getSize = function getSize() {
        return{
            width: this.visual.attrs.width,
            height: this.visual.attrs.height
        };
    };

    this.getLocationAndSize = function getLocationAndSize() {
        return {
            x: this.visual.attrs.x,
            y: this.visual.attrs.y,
            x2: this.visual.attrs.y + this.visual.attrs.width,
            y2: this.visual.attrs.y + this.visual.attrs.width,
            width: this.visual.attrs.width,
            height: this.visual.attrs.height
        };
    };

    this.getCenterPoint = function getCenterPoint() {
        return {
            x: this.visual.attrs.x + this.visual.attrs.width / 2,
            y: this.visual.attrs.y + this.visual.attrs.height / 2
        };
    };

    this.checkIfExpired = function checkIfExpired(gameInfo) {
        var position = this.getLocation();
        var size = this.getSize();
        if ((position.x + size.width >= gameInfo.xBound) ||
            (position.y + size.height >= gameInfo.xBound) ||
            (position.x + size.width <= 0) ||
            (position.y + size.height <= 0)) {
            this.hasExpired = true;
        }
    };

    this.update = function (gameInfo) {
        this.checkIfExpired(gameInfo);
    };

    return this;
}