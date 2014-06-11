var KineticDrawer = (function () {
    'use strict';

    KineticDrawer = function (canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
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
        var that = this;
        this.addObject = function addObject(obj) {
            that.canvas.add(obj);
        };

        this.drawAll = function () {
            this.canvas.batchDraw();
        };
    };
    return KineticDrawer;
}());