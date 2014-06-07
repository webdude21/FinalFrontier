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
            function checkIfIsValidTarget() {
                var ownSizeAndLocation = instance.getLocationAndSize();
                return ((target.x > ownSizeAndLocation.x + ownSizeAndLocation.width) ||
                    (target.x < ownSizeAndLocation.x) ||
                    (target.y > ownSizeAndLocation.y + ownSizeAndLocation.height) ||
                    (target.y < ownSizeAndLocation.y))
            }

            if (checkIfIsValidTarget()) {
                var location = instance.getLocation();
                instance.pendingBullet = new Bullet(location.x, location.y, {
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