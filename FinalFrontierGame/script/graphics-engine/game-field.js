var gameField = (function() {
    'use strict';

    var instance;
    gameField = function() {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.stage = new Kinetic.Stage({
            container: 'game-window',
            width: 800,
            height: 600
        });
        instance.addNewLayer = function(){
            var newLayer = new Kinetic.Layer();
            instance.stage.add(newLayer);
            return newLayer;
        };
        instance.foreground = (function(){
            addNewLayer();
        });
        instance.background = (function(){
            addNewLayer();
        });
    };

    return gameField;
}());