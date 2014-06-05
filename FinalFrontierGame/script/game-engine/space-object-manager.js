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
        instance.add = function (objectToAdd) {
            if (!instance.isUpdating) {
                instance.spaceObjects.push(objectToAdd);
            } else {
                instance.pendingObjects.push(objectToAdd);
            }
            drawer.addObject(objectToAdd.visualRepresentation);
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
    };

    return SpaceObjectManager;
}());