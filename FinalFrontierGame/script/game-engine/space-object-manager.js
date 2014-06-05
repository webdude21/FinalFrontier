var spaceObjectManager = (function () {
    'use strict';
    var instance;
    spaceObjectManager = function () {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.spaceObjects = [];
        instance.pendingObjects = [];
        instance.isUpdating = false;
        instance.spaceObjectsCount = instance.spaceObjects.length;
        instance.add = function (objectToAdd) {
            if (objectToAdd instanceof SpaceObject) {
                if (!instance.isUpdating) {
                    instance.spaceObjects.push(objectToAdd);
                } else {
                    instance.pendingObjects.push(objectToAdd);
                }
            } else {
                throw new TypeError("objectToAdd argument should be an " +
                    "instance of the SpaceObject class!")
            }
        };
        instance.update = function () {
            var i;
            instance.isUpdating = true;

            for (i = 0; i < instance.spaceObjects.length; i++) {
                instance.spaceObjects[i].update();
            }

            instance.isUpdating = false;

            for (i = 0; i < instance.pendingObjects.length; i++) {
                instance.spaceObjects.push(instance.pendingObjects[i]);
            }

            instance.pendingObjects.clear();

            for (i = 0; i < instance.spaceObjects.length; i++) {
                if (instance.spaceObjects[i].hasExpired) {
                    instance.spaceObjects.unset(instance.spaceObjects[i]);
                }
            }
        };
        instance.draw = function (drawer) {
            for (var i = 0; i < instance.spaceObjects.length; i++) {
                instance.spaceObjects[i].draw(drawer);
            }
        }
    };

    return spaceObjectManager;
}());