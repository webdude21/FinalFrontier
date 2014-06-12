var CHECK_THIS_WALKER;

function Walker(args) {
    SpaceObject.call(this, args);
    this.rotationSpeed = args.rotationSpeed || 5;
    this.shootingDelay = 0;
    this.direction = {x: 0, y: 0};
    this.shrinkRate = 0.03;
    this.visual.scale({
        x: 1.5,
        y: 1.5
    });

    CHECK_THIS_WALKER = this;
}

Walker.prototype = Object.create(SpaceObject.prototype);
Walker.prototype.constructor = Walker;
Walker.prototype.isHit = SpaceObject.prototype.isHit;

Walker.prototype.move = function move() {
    this.visual.move(this.direction);
};

Walker.prototype.randomDirectionChange = function randomMove() {
    this.direction = {
        x: getRandom(-this.speed, this.speed),
        y: getRandom(-this.speed, this.speed)};
};

Walker.prototype.spawn = function walkIn() {
    var currentScale = this.visual.scaleX();
    if (currentScale > 1) {
        var newScale = currentScale - this.shrinkRate;
        this.visual.scale({
            x: newScale,
            y: newScale
        })
    }
    else {
        this.hasSpawned = true;
        if (this.spawnSound) {
            this.spawnSound();
        }
    }
};

Walker.prototype.update = function update(gameInfo) {
    if (!this.hasSpawned) {
        this.spawn();
    }

    this.rotate(this.rotationSpeed);
    this.shootingDelay++;
    if (this.shootingDelay === 100) {
        this.randomDirectionChange();
        this.shootingDelay = 0;
    }
    this.move();
    this.refreshProperties();
    this.isHit(gameInfo);
    this.checkIfExpired(gameInfo);
};
