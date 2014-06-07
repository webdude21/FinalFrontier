var PlayerShip = (function () {
    'use strict';

    var instance;
    PlayerShip = function (args) {
        if (instance) {
            return instance;
        }

        SpaceObject.call(this, args);
        PlayerShip.prototype = new SpaceObject(args);
        PlayerShip.prototype.constructor = PlayerShip;
        instance = this;

        instance.rotate = function rotate(angle) {
            instance.rotation = angle;
            instance.visual.setRotationDeg(angle);
        };

        instance.shoot = function shoot(target) {
            var emitter = instance.getLocationAndSize();

            function checkIfIsValidTarget() {
                return ((target.x > emitter.x + emitter.width) ||
                    (target.x < emitter.x) ||
                    (target.y > emitter.y + emitter.height) ||
                    (target.y < emitter.y))
            }

            if (checkIfIsValidTarget()) {
                var centerPoint = instance.getCenterPoint();
                instance.pendingBullet = new Bullet(centerPoint.x, centerPoint.y, {
                    x: target.x,
                    y: target.y
                }, instance.rotation);
            }
        };

        instance.update = function update(gameInfo) {
            instance.move(instance.speed);
            if (instance.pendingBullet) {
                gameInfo.objectManager.add(instance.pendingBullet);
                instance.pendingBullet = null;
            }
        };
    };

    return PlayerShip;
}());