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
    }
}

if (!window.requestAnimFrame) {
    window.requestAnimFrame = (function requestAnimFrame() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}

function randomInt(to, from) {
    return Math.floor(Math.random() * (to - from) + from);
}
