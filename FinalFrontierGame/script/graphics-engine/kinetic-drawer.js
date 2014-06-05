var KineticDrawer = (function () {
    'use strict';

    KineticDrawer = function (canvas) {
        this.canvas = canvas;
        this.clear = function () {
            this.canvas.clear(0, 0, canvas.width, canvas.height);
        };
        this.generateImage = function (x, y, width, height, rotation, img) {
            var newImage = new Kinetic.Image({
                x: x,
                y: y,
                image: img,
                width: width,
                height: height,
                rotation: rotation
            });
            this.canvas.add(newImage);
            return newImage;
        };
        this.drawAll = function () {
            this.canvas.batchDraw();
        };
    };
    return KineticDrawer;
}());