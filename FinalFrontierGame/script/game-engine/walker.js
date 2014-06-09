var CHECK_THIS_WALKER;

function Walker(args) {
    SpaceObject.call(this, args);
    this.rotationSpeed = args.rotationSpeed || 5;
    this.shootingDelay = 0;
    this.direction = {x: 0, y: 0};
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
        x: randomInt(-this.speed, this.speed),
        y: randomInt(-this.speed, this.speed)};
};

Walker.prototype.update = function update(gameInfo) {
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
