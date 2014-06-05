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
    };

    return playerShip;

}());