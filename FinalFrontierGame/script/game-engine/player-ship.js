var PlayerShip = (function () {
    'use strict';

    var instance;
    PlayerShip = function (x, y, img) {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.prototype = new SpaceObject(x, y, img.width, img.height);
        SpaceObject.call(this, x, y, img.width, img.height, img);
        instance.direction = 'left';
        instance.bindToDrawer = function bindToDrawer(drawer) {
            instance.visualRepresentation = drawer.generateImage(instance.x, instance.y,
                instance.width, instance.height, instance.rotation, instance.image);
        }
    };

    return PlayerShip;
}());