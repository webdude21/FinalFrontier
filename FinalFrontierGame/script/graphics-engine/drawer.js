var drawer = (function () {
    'use strict';
    var instance;
    drawer = function () {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.canvas = gameField.foreground;
        instance.drawWithNoImg = function (x, y, width, height, rotation) {
            instance.canvas.add(new Kinetic.Circle({
                x: x,
                y: y,
                radius: width,
                rotation: rotation,
                stroke: "yellowgreen",
                strokeWidth: 1
            }))
        };
        instance.draw = function (x, y, width, height, rotation, img) {
            if (img === undefined) {
                instance.drawWithNoImg(x, y, width, height, rotation)
            }
            else {
                instance.canvas.add(new Kinetic.Image({
                    x: x,
                    y: y,
                    image: img,
                    width: width,
                    height: height,
                    rotation: rotation
                }))
            }
        }
    };
    return drawer;
}());