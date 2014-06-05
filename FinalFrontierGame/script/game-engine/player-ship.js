var PlayerShip = (function () {
    'use strict';

    var instance;
    PlayerShip = function (args) {
        if (instance) {
            return instance;
        }

        SpaceObject.call(this, args);
        PlayerShip.prototype = new SpaceObject(args);
        PlayerShip.prototype.constructor = PlayerShip;
        instance = this;
        instance.move = function move(step) {
            switch (instance.direction) {
                case 'left':
                    instance.visual.move({
                        x: -step,
                        y: 0
                    });
                    break;
                case 'right':
                    instance.visual.move({
                        x: step,
                        y: 0
                    });
                    break;
                case 'up':
                    instance.visual.move({
                        x: 0,
                        y: -step
                    });
                    break;
                case 'down':
                    instance.visual.move({
                        x: 0,
                        y: step
                    });
                    break;
            }
        };
        instance.rotate = function rotate(step){
            switch (instance.rotation){
                case 'rotateLeft':
                    instance.visual.rotate(-step);
                    break;
                case 'rotateRight':
                    instance.visual.rotate(step);
                    break;
            }
        };

        instance.update = function update() {
            instance.move(3);
            instance.rotate(6);
        }
    };

    return PlayerShip;
}());