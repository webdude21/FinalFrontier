var SpaceObjectManager = (function () {
    'use strict';

    var that;
    SpaceObjectManager = function (drawer) {
        if (that) {
            return that;
        }
        that = this;
        that.spaceObjects = [];
        that.pendingObjects = [];
        that.isUpdating = false;
        that.spaceObjectsCount = that.spaceObjects.length;
        that.gameInfo = {
            xBound: drawer.canvas.canvas.width,
            yBound: drawer.canvas.canvas.height,
            otherObjects: that.spaceObjects,
            objectManager: that
        };

        that.checkIfTwoObjectsCollide = function checkIfTwoObjectsCollide(firstObject, secondObject) {
            function doCollide(firstObject, secondObject) {
                function collisionCheck(firstObject, secondObject) {
                    if (secondObject.x < firstObject.x + firstObject.width &&
                        secondObject.x > firstObject.x) {
                        if (secondObject.y < firstObject.y + firstObject.height &&
                            secondObject.y > firstObject.y) {
                            return true
                        }
                    }
                }

                return collisionCheck(firstObject, secondObject) || collisionCheck(secondObject, firstObject);
            }

            return doCollide(firstObject.properties, secondObject.properties);
        };

        that.add = function (objectToAdd) {
            if (!that.isUpdating) {
                that.spaceObjects.push(objectToAdd);
            } else {
                that.pendingObjects.push(objectToAdd);
            }
            drawer.addObject(objectToAdd.visual);
        };

        that.update = function () {
            var i;
            that.isUpdating = true;

            for (i = 0; i < that.spaceObjects.length; i++) {
                that.spaceObjects[i].update(that.gameInfo);
            }

            that.isUpdating = false;

            for (i = 0; i < that.pendingObjects.length; i++) {
                that.spaceObjects.push(that.pendingObjects[i]);
            }

            that.pendingObjects.clear();

            for (i = 0; i < that.spaceObjects.length; i++) {
                if (that.spaceObjects[i].hasExpired) {
                    that.spaceObjects[i].visual.destroy();
                    that.spaceObjects.unset(that.spaceObjects[i]);
                }
            }
        };
    };

    return SpaceObjectManager;
}());