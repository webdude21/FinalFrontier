var CHECK_THIS_DRONE;

function Drone(args) {
    'use strict';

    SpaceObject.call(this, {
        shape: new Kinetic.Image({
            x: args.x,
            y: args.y,
            image: GAME_ART.DRONE,
            width: GAME_ART.DRONE.width,
            height: GAME_ART.DRONE.height,
            offset: {x: GAME_ART.DRONE.width / 2, y: GAME_ART.DRONE.height / 2}
        }),
        rotation: 0,
        speed: args.speed || 2
    });

    this.target = args.target;
    this.direction = {x: 0, y: 0};
    this.shootingDelay = 100;
    this.shootingDelayCounter = 0;
    this.shootingRate = 2;
    CHECK_THIS_DRONE = this;
}

Drone.prototype = Object.create(SpaceObject.prototype);
Drone.prototype.constructor = Drone;
Drone.prototype.isHit = SpaceObject.prototype.isHit;
Drone.prototype.trajectory = Bullet.prototype.trajectory;
Drone.prototype.shoot = SpaceObject.prototype.shoot;

Drone.prototype.seek = function seek(target) {
    this.direction = this.trajectory(this.properties.x, this.properties.y,
        target.properties)
};

Drone.prototype.rotateTowords = function rotateTowordsPlayer(target) {
    var xDist = target.properties.x - this.properties.centerPoint.x;
    var yDist = target.properties.y - this.properties.centerPoint.y;
    var angle = Math.atan2(yDist, xDist) * (180 / Math.PI);
    this.rotate(angle);
};

Drone.prototype.rotate = function rotate(angle) {
    this.rotation = angle;
    this.visual.setRotationDeg(angle);
};

Drone.prototype.move = function move() {
    this.visual.move({
        x: this.direction.x * this.speed,
        y: this.direction.y * this.speed
    });
};

Drone.prototype.update = function update(gameInfo) {
    this.refreshProperties();
    this.shootingDelayCounter++;
    if (this.shootingDelayCounter === this.shootingDelay) {
        this.shoot(this.target.properties);
        this.shootingDelayCounter = 0;
    }
    if (this.pendingBullet) {
        gameInfo.objectManager.add(this.pendingBullet);
        this.pendingBullet = null;
    }
    this.isHit(gameInfo);
    this.checkIfExpired(gameInfo);
    this.seek(this.target);
    this.rotateTowords(this.target);
    this.move();
};