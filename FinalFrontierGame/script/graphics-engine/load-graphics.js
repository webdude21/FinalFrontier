// var GameArt = (function () {
//     'use strict';
//     var instance;
//     GameArt = function () {
//         if (instance) {
//             return instance;
//         }
//         instance = this;
//         instance.loadImage = function (src) {
//             var newImage = new Image();
//             newImage.src = src;
//             return newImage;
//         };
//         instance.playerImage = instance.loadImage('resources/art/player-ship.png');
//         instance.backgroundImage = instance.loadImage('resources/art/space-background.jpg');
//         instance.enemyImage = instance.loadImage('resources/art/enemy.png');
//     };

//     return GameArt;
// }());

// the images have no width or height
// when loaded with the class above
// when loaded through that object
// width and height are visible and accessible
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
        ENEMY: loadImg('resources/art/enemy.png')
    };
}());