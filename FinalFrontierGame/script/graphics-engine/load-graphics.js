var GameArt = (function () {
    'use strict';
    var instance;
    GameArt = function () {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.playerImage = new Image();
        instance.playerImage.src = 'resources/art/player-ship.png';
    };

    return GameArt;
}());