var gameField = (function() {
    'use strict';

    var instance;
    gameField = function() {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.stage = new Kinetic.Stage({
            container: 'kinetic-container',
            width: 800,
            height: 600
        });
        instance.createNewLayer = function(){
            return new Kinetic.Layer();
        };
        instance.addLayer = function(layer){
            instance.stage.add(layer)
        }
    };

    return gameField;
}());