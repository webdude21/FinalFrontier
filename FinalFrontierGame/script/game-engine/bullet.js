function Bullet(originX, originY, target, rotation) {
    'use strict';
    SpaceObject.call(this, {
        rotation: 0,
        speed: 12,
        shape: new Kinetic.Image({
            x: originX,
            y: originY,
            rotation: rotation,
            image: GAME_ART.BULLET,
            width: GAME_ART.BULLET.width,
            height: GAME_ART.BULLET.height
        })
    });

    this.direction = (function() {
        var directionX = target.x - originX;
        var directionY = target.y - originY;
        var denominator = Math.sqrt(directionX * directionX + directionY * directionY);

        return {
            x: directionX / denominator,
            y: directionY / denominator
        };
    }());

    this.move = function () {
        this.visual.move({
            x: this.direction.x * this.speed,
            y: this.direction.y * this.speed
        });
    };

    this.update = function update() {
        this.move();
    };
}

Bullet.prototype = new SpaceObject();
Bullet.prototype.constructor = Bullet;



