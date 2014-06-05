var PlayerShip = (function () {
    'use strict';

    var instance;
    PlayerShip = function (args) {
        if (instance) {
            return instance;
        }
        PlayerShip.prototype = new SpaceObject();
        PlayerShip.prototype.constructor = PlayerShip;
        instance = this;
        SpaceObject.call(instance, args);
        instance.direction = args.direction || 'left';
        instance.update = function update() {
            instance.visualRepresentation.move({
                x: 1,
                y: 2
            });
        }
    };

    return PlayerShip;
}());