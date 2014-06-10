function SpaceObject(args) {
    this.slack = 30;
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 'none';
    this.direction = {left: false, right: false, up: false, down: false};
    this.speed = args.speed || 2;
    this.shooter = args.shooter;
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
}

SpaceObject.prototype.move = function move(step) {
    var newX = 0,
        newY = 0;

    if (this.direction.left) {
        newX -= step;

        if (this.properties.centerPoint.x - step < 0) {
            this.changeHorizontalPostion(GAME_FIELD_WIDTH);
        }
    }
    if (this.direction.right) {
        newX += step;

        if (this.properties.centerPoint.x + step > GAME_FIELD_WIDTH) {
            this.changeHorizontalPostion(0);
        }
    }
    if (this.direction.up) {
        newY -= step;

        if (this.properties.centerPoint.y - step < 0) {
            this.changeVerticalPostion(GAME_FIELD_HEIGHT);
        }
    }
    if (this.direction.down) {
        newY += step;

        if (this.properties.centerPoint.y + step > GAME_FIELD_HEIGHT) {
            this.changeVerticalPostion(0);
        }
    }

    this.visual.move({
        x: newX,
        y: newY
    });
};

SpaceObject.prototype.changeHorizontalPostion = function changeX(newX) {
    this.visual.attrs.x = newX; 
    this.visual.attrs.y = GAME_FIELD_HEIGHT - this.properties.y;
};

SpaceObject.prototype.changeVerticalPostion = function changeY(newY) {
    this.visual.attrs.x = GAME_FIELD_WIDTH - this.properties.centerPoint.x; 
    this.visual.attrs.y = newY;
};

SpaceObject.prototype.shoot = function shoot(target) {
    this.pendingBullet = new Bullet({
        x: this.properties.centerPoint.x,
        y: this.properties.centerPoint.y,
        speed: this.shootingRate,
        rotation: this.rotation,
        shooter: this,
        target: {
            x: target.x,
            y: target.y
        }});
};

SpaceObject.prototype.checkIfExpired = function checkIfExpired(gameInfo) {
    if ((this.properties.x - this.slack >= gameInfo.xBound) ||
        (this.properties.y - this.slack >= gameInfo.yBound) ||
        (this.properties.x2 + this.slack <= 0) ||
        (this.properties.y2 + this.slack <= 0)) {
        this.hasExpired = true;
    }
};

SpaceObject.prototype.isHit = function isHit(gameInfo) {
    gameInfo.spaceObjects.forEach(function (obj) {
        if (obj instanceof Bullet && !(obj.shooter === this)) {
            if (gameInfo.objectManager.checkIfTwoObjectsCollide(obj, this)) {
                this.hasExpired = true;
                obj.hasExpired = true;
            }
        }
    }, this);
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
