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

        instance.update = function update() {
            instance.move(instance.speed);
        };

        instance.rotate = function rotate(angle) {
            this.rotation = angle;
            instance.visual.setRotationDeg(angle);
        };
    };

    return PlayerShip;
}());