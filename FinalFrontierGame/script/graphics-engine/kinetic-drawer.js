var KineticDrawer = (function () {
    'use strict';

    KineticDrawer = function (canvas) {
        this.canvas = canvas;
        this.clear = function () {
            this.canvas.clear(0, 0, canvas.width, canvas.height);
        };
        this.drawWithNoImg = function (x, y, width, height, rotation) {
            this.canvas.add(new Kinetic.Circle({
                x: x,
                y: y,
                radius: width,
                rotation: rotation,
                stroke: "yellowgreen",
                strokeWidth: 1
            }))
        };
        this.addObjectsToDraw = function (x, y, width, height, rotation, img) {
            if (img === undefined) {
                this.drawWithNoImg(x, y, width, height, rotation)
            }
            else {
                this.canvas.add(new Kinetic.Image({
                    x: x,
                    y: y,
                    image: img,
                    width: width,
                    height: height,
                    rotation: rotation
                }))
            }
        };
        this.drawAll = function () {
            this.canvas.batchDraw();
        };
    };
    return KineticDrawer;
}());