var PlayerShip = (function () {
    'use strict';

    var that;
    PlayerShip = function (args) {
        if (that) {
            return that;
        }

        SpaceObject.call(this, args);
        PlayerShip.prototype = new SpaceObject(args);
        PlayerShip.prototype.constructor = PlayerShip;
        that = this;

        that.rotate = function rotate(angle) {
            that.rotation = angle;
            that.visual.setRotationDeg(angle);
        };

        that.shoot = function shoot(target) {
            function checkIfIsValidTarget() {
                return ((target.x > that.properties.x2) ||
                    (target.x < that.properties.x) ||
                    (target.y > that.properties.y2) ||
                    (target.y < that.properties.y))
            }

            if (checkIfIsValidTarget()) {
                that.pendingBullet = new Bullet(that.properties.centerPoint.x,
                    this.properties.centerPoint.y, {
                        x: target.x,
                        y: target.y
                    }, that.rotation);
            }
        };

        that.update = function update(gameInfo) {
            that.refreshProperties();
            that.move(that.speed);
            if (that.pendingBullet) {
                gameInfo.objectManager.add(that.pendingBullet);
                that.pendingBullet = null;
            }
        };
    };

    return PlayerShip;
}());