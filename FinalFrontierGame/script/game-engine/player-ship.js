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
        instance.score = 0;
        instance.respawnTime = 120;
        instance.respawnOpacity = 0;
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
    if (this.hasExpired) {
        this.respawn();
    } else {
        this.refreshProperties();
        this.isHit(gameInfo);
        this.move(this.speed);

        if (this.pendingBullet) {
            if (this.shotSound) {
                this.shotSound();
            }

            gameInfo.objectManager.add(this.pendingBullet);
            this.pendingBullet = null;
        }
    }
};

PlayerShip.prototype.getLives = function getLives() {
    return this.lives;
};

PlayerShip.prototype.respawn = function respawn() {
    if (this.respawnTime == 120) {
        this.visual.opacity(this.respawnOpacity);
        this.visual.attrs.x = GAME_FIELD_WIDTH / 2;
        this.visual.attrs.y = GAME_FIELD_HEIGHT / 2;
        this.lives -= 1;
        this.respawnTime -= 1;
    } else if (this.respawnTime > 0) {
        this.move(this.speed);
        this.refreshProperties();
        this.respawnOpacity += 0.012;
        this.visual.opacity(this.respawnOpacity);
        this.respawnTime -= 1;
    } else {
        this.hasExpired = false;
        this.respawnTime = 120;
        this.respawnOpacity = 0;
    }
};

PlayerShip.prototype.getScore = function getScore() {
    return this.score;
};
