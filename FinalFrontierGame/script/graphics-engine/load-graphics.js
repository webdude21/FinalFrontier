var GameArt = (function () {
    'use strict';
    var instance;
    GameArt = function () {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.loadImage = function (src) {
            var newImage = new Image;
            newImage.src = src;
            return newImage;
        };
        instance.playerImage = instance.loadImage('resources/art/player-ship.png');
        instance.backgroundImage = instance.loadImage('resources/art/space-background.jpg');
    };

    return GameArt;
}());