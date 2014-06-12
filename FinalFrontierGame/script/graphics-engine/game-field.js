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

        instance.addNewLayer = function () {
            var newLayer = new Kinetic.Layer({});
            instance.stage.add(newLayer);
            return newLayer;
        };

        instance.background = instance.addNewLayer();
        instance.statistics = instance.addNewLayer();
        instance.foreground = instance.addNewLayer();
    };
    return GameField;
}());