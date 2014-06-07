var CHECK_THIS_WALKER;

function Walker(args) {
    SpaceObject.call(this, args);
    
    this.rotationSpeed = args.rotationSpeed || 5;
    this.changeDirectionCounter = 0;
    this.direction = {x: 0, y: 0};

    CHECK_THIS_WALKER = this;
    // this.move = 

    // this.randomDirectionChange = 

    // this.update = 
}

Walker.prototype = Object.create(SpaceObject.prototype);
Walker.prototype.constructor = Walker;

Walker.prototype.move = function move() {
    this.visual.move(this.direction);
};

Walker.prototype.randomDirectionChange = function randomMove() {
    this.direction = {
        x: randomInt(-this.speed, this.speed),
        y: randomInt(-this.speed, this.speed)};
};

Walker.prototype.isHit = function isHit(objects) {
    var thisWalker = this;

    objects.forEach(function(obj) {
        if (obj instanceof Bullet) {
            var bulletPosition = obj.getCenterPoint();
            var walkerPosition = thisWalker.getLocation();

            var isBulletHittingWalkerOnX = bulletPosition.x >= walkerPosition.x &&
                                            bulletPosition.x <= walkerPosition.x2;

            var isBulletHittingWalkerOnY = bulletPosition.y >= walkerPosition.y &&
                                            bulletPosition.y <= walkerPosition.y2;

            if (isBulletHittingWalkerOnX && isBulletHittingWalkerOnY) {
                thisWalker.hasExpired = true;
                obj.hasExpired = true;
            }
        }
    });
};

Walker.prototype.update = function update(gameInfo) {
    this.rotate(this.rotationSpeed);
    this.changeDirectionCounter++;
    if (this.changeDirectionCounter === 100) {
        this.randomDirectionChange();
        this.changeDirectionCounter = 0;
    }
    this.move();
    this.checkIfExpired(gameInfo);
    this.isHit(gameInfo.otherObjects);
};
