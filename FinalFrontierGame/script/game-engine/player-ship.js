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
        instance.direction = args.direction || 'left';
        instance.update = function update() {
            instance.visual.move({
                x: 1,
                y: 2
            });
        }
    };

    return PlayerShip;
}());