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
        CHECK_THIS_SHIP = instance;
    };
}());

PlayerShip.prototype = Object.create(SpaceObject.prototype);
PlayerShip.prototype.constructor = PlayerShip;

PlayerShip.prototype.rotate = function rotate(angle) {
    this.rotation = angle;
    this.visual.setRotationDeg(angle);
};

PlayerShip.prototype.shoot = function shoot(target) {
    var emitter = this;
    function checkIfIsValidTarget() {
        return ((target.x > emitter.properties.x2) ||
            (target.x < emitter.properties.x) ||
            (target.y > emitter.properties.y2) ||
            (target.y < emitter.properties.y))
    }

    if (checkIfIsValidTarget()) {
        emitter.pendingBullet = new Bullet(emitter.properties.centerPoint.x,
            emitter.properties.centerPoint.y, {
                x: target.x,
                y: target.y
            }, emitter.rotation);
    }
};

PlayerShip.prototype.update = function update(gameInfo) {
    this.refreshProperties();
    this.move(this.speed);
    if (this.pendingBullet) {
        gameInfo.objectManager.add(this.pendingBullet);
        this.pendingBullet = null;
    }
};
