var playerShip = (function () {
    'use strict';

    var instance;
    playerShip = function () {
        if (instance) {
            return instance;
        }
        SpaceObject.call(this);
        instance = this;
        instance.image = gameArt.playerImage;
        instance.width = instance.image.width;
        instance.height = instance.image.height;
        instance.direction = 'left';
        instance.draw = function (drawer) {
            drawer.draw(instance.x, instance.y, instance.width,
                instance.height, instance.rotation, instance.image);
        }
    };

    return playerShip;

}());