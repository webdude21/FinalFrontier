var PlayerShip = (function () {
    'use strict';

    var instance;
    PlayerShip = function (x, y, img) {
        if (instance) {
            return instance;
        }
        PlayerShip.prototype = new SpaceObject();
        PlayerShip.prototype.constructor = PlayerShip;
        instance = this;
        SpaceObject.call(instance, x, y, img.width, img.height, img);
        instance.direction = 'left';
        instance.image = img;
        instance.bindToDrawer = function bindToDrawer(drawer) {
            instance.visualRepresentation = drawer.generateImage(instance.x, instance.y,
                instance.width, instance.height, instance.rotation, instance.image);
        };
        instance.update = function update() {
            instance.visualRepresentation.move({
                x: 1,
                y: 2
            });
        }

    };

    return PlayerShip;
}());