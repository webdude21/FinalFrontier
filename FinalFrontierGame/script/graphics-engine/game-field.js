var GameField = (function () {
    'use strict';

    var instance;
    GameField = function (width, height, container) {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.stage = new Kinetic.Stage({
            container: container,
            width: width,
            height: height
        });
        instance.addNewLayer = function (zIndex) {
            var newLayer = new Kinetic.Layer({});
            instance.stage.add(newLayer);
            newLayer.zIndex = zIndex;
            return newLayer;
        };
        instance.foreground = instance.addNewLayer(10);
        instance.background = instance.addNewLayer(0);
    };
    return GameField;
}());