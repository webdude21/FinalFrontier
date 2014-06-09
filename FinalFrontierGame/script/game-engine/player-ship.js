var CHECK_THIS_SHIP;

var PlayerShip;

(function() {
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

    
    // this.instance = this;
    // PlayerShip = function (args) {
    //     if (instance) {
    //         return instance;
    //     }
    

    // instance.rotate = 
    // instance.shoot = 

    // instance.update = 

    // return PlayerShip;
}());

PlayerShip.prototype = Object.create(SpaceObject.prototype);
PlayerShip.prototype.constructor = PlayerShip;

PlayerShip.prototype.rotate = function rotate(angle) {
    this.rotation = angle;
    this.visual.setRotationDeg(angle);
};

PlayerShip.prototype.shoot = function shoot(target) {
    var emitter = this.getLocationAndSize();

    function checkIfIsValidTarget() {
        return ((target.x > emitter.x + emitter.width) ||
            (target.x < emitter.x) ||
            (target.y > emitter.y + emitter.height) ||
            (target.y < emitter.y));
    }

    if (checkIfIsValidTarget()) {
        var centerPoint = this.getCenterPoint();
        this.pendingBullet = new Bullet(centerPoint.x, centerPoint.y, {
            x: target.x,
            y: target.y
        }, this.rotation);
    }
};

PlayerShip.prototype.update = function update(gameInfo) {
    this.move(this.speed);
    if (this.pendingBullet) {
        gameInfo.objectManager.add(this.pendingBullet);
        this.pendingBullet = null;
    }
};
