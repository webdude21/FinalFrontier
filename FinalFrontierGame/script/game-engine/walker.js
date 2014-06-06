function Walker(args) {
    SpaceObject.call(this, args);
    Walker.prototype = new SpaceObject(args);
    Walker.prototype.constructor = Walker;
    this.rotationSpeed = args.rotationSpeed || 5;
    this.changeDirectionCounter = 0;
    this.randomDirectionChange = function randomMove() {
        this.direction = {x: randomInt(-this.speed, this.speed),
            y: randomInt(this.speed, this.speed)};
    };
    this.update = function update() {
        this.rotate(this.rotationSpeed);
        this.changeDirectionCounter++;
        if (this.changeDirectionCounter === 20) {
            this.randomDirectionChange();
            this.changeDirectionCounter = 0;
        }
        this.move(1);
    }
}