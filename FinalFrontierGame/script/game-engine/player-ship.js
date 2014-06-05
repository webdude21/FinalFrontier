var PlayerShip = (function () {
    'use strict';

    var instance;
    PlayerShip = function (x, y, img) {
        if (instance) {
            return instance;
        }
        instance = this;
        SpaceObject.call(instance, x, y, img.width, img.height);
        instance.prototype = Object.create(SpaceObject.prototype);
        instance.image = img;
        instance.direction = 'left';
        instance.draw = function (drawer) {
            drawer.draw(instance.x, instance.y, instance.width,
                instance.height, instance.rotation, instance.image);
        }
    };

    return PlayerShip;

}());