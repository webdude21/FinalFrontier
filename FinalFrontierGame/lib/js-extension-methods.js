if (!Array.prototype.unset) {
    Array.prototype.unset = function (value) {
        if (this.indexOf(value) !== -1) {
            this.splice(this.indexOf(value), 1);
        }
    };
}

if (!Array.prototype.clear) {
    Array.prototype.clear = function () {
        this.length = 0;
    };
}

if (!window.requestAnimFrame) {
    window.requestAnimFrame = (function requestAnimFrame() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}

function getRandom(from, to) {
    return Math.floor(Math.random() * (1 + to - from) + from);
}

if (!Array.prototype.removeAll) {
    Array.prototype.removeAll = function (value) {
        var resultArr = [];
        for (var i = 0; i < this.length; i++) {
            if (this[i] !== value) {
                resultArr.push(this[i]);
            }
        }
        return resultArr;
    };
}

function attachEventHandler(element, eventType, eventHandler) {
    if (!element) {
        return;
    }

    if (document.addEventListener) {
        element.addEventListener(eventType, eventHandler, true);
    } else if (document.attachEvent) {
        element.attachEvent("on" + eventType, eventHandler);
    } else {
        element['on' + eventType] = eventHandler;
    }
}