var CHECK_THIS_SHIP;

var PlayerShip;

(function () {
    'use strict';

    var instance;

    PlayerShip = function PlayerShip(args) {
        if (instance) {
            return instance;
        }

        SpaceObject.call(this, args);

        instance = this;
        instance.shootingRate = 12;
        instance.lives = 3;
        instance.score = 10;
        CHECK_THIS_SHIP = instance;
    };
}());

PlayerShip.prototype = Object.create(SpaceObject.prototype);
PlayerShip.prototype.constructor = PlayerShip;
PlayerShip.prototype.shoot = SpaceObject.prototype.shoot;
PlayerShip.prototype.isHit = SpaceObject.prototype.isHit;
PlayerShip.prototype.checkIfExpired = SpaceObject.prototype.checkIfExpired;

PlayerShip.prototype.rotate = function rotate(angle) {
    this.rotation = angle;
    this.visual.setRotationDeg(angle);
};

PlayerShip.prototype.update = function update(gameInfo) {
    this.refreshProperties();
    this.isHit(gameInfo);
    this.checkIfExpired(gameInfo);
    this.move(this.speed);
    if (this.pendingBullet) {
        if (this.shotSound) {
            this.shotSound();
        }
        gameInfo.objectManager.add(this.pendingBullet);
        this.pendingBullet = null;
    }
};

PlayerShip.prototype.getLives = function getLives() {
    return this.lives;
};

PlayerShip.prototype.getScore = function getScore() {
    return this.score;
};
