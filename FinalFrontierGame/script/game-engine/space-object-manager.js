var SpaceObjectManager = (function () {
    'use strict';

    var instance;
    SpaceObjectManager = function (drawer) {
        if (instance) {
            return instance;
        }

        instance = this;
        instance.spaceObjects = [];
        instance.pendingObjects = [];
        instance.isUpdating = false;
        instance.spaceObjectsCount = instance.spaceObjects.length;
        instance.gameInfo = {
            xBound: drawer.canvas.canvas.width,
            yBound: drawer.canvas.canvas.height,
            spaceObjects: instance.spaceObjects,
            objectManager: instance
        };

        instance.checkIfTwoObjectsCollide = function checkIfTwoObjectsCollide(firstObject, secondObject) {
            function doCollide(firstObject, secondObject) {
                function collisionCheck(firstObject, secondObject) {
                    if (secondObject.x < firstObject.x + firstObject.width &&
                        secondObject.x > firstObject.x) {
                        if (secondObject.y < firstObject.y + firstObject.height &&
                            secondObject.y > firstObject.y) {
                            return true;
                        }
                    }
                }

                return collisionCheck(firstObject, secondObject) || collisionCheck(secondObject, firstObject);
            }

            return doCollide(firstObject.properties, secondObject.properties);
        };

        instance.add = function (objectToAdd) {
            if (!instance.isUpdating) {
                instance.spaceObjects.push(objectToAdd);
            } else {
                instance.pendingObjects.push(objectToAdd);
            }
            drawer.addObject(objectToAdd.visual);
        };

        instance.update = function () {
            var i;
            instance.isUpdating = true;

            for (i = 0; i < instance.spaceObjects.length; i++) {
                instance.spaceObjects[i].update(instance.gameInfo);
            }

            instance.isUpdating = false;

            for (i = 0; i < instance.pendingObjects.length; i++) {
                instance.spaceObjects.push(instance.pendingObjects[i]);
            }

            instance.pendingObjects.clear();

            for (i = 0; i < instance.spaceObjects.length; i++) {
                if (instance.spaceObjects[i].hasExpired &&
                        !(instance.spaceObjects[i] instanceof PlayerShip)) {
                    instance.spaceObjects[i].visual.destroy();
                    instance.spaceObjects.unset(instance.spaceObjects[i]);
                }
            }
        };
    };

    return SpaceObjectManager;
}());