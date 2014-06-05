var drawer = (function() {
    'use strict';
    var instance;
    drawer = function() {
        if (instance) {
            return instance;
        }
        instance = this;
        instance.draw = function(){
            // TODO to teach the drawer to draw :)
        }
    };
    return drawer;
}());