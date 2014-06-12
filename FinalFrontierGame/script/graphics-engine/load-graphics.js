var GAME_ART = (function() {
    'use strict';

    function loadImg(src) {
        var img = new Image();
        img.src = src;
        return img;
    }

    return {
        BACKGROUND: loadImg('resources/art/space-background.jpg'),
        PLAYER_SHIP: loadImg('resources/art/player-ship.png'),
        WALKER: loadImg('resources/art/walker.png'),
        BULLET: loadImg('resources/art/bullet.png'),
        DRONE: loadImg('resources/art/drone.png'),
        DRONE_BULLET: loadImg('resources/art/drone-bullet.png'),
        EXPLOSION: loadImg(resources/art/explosion.png)
    };
}());