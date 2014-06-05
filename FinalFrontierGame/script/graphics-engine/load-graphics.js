var gameArt = (function () {
    'use strict';
    var instance;
    gameArt = function () {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.playerImage = (function () {
            var image = new Image();
            image.src = 'resources/art/player-ship.png';
            return image;
        });
    };

    return gameArt;

}());