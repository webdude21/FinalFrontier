function Bullet(originX, originY, target, rotation) {
    'use strict';

    var bulletShape = {
        shape: new Kinetic.Image({
            x: originX,
            y: originY,
            rotation: rotation,
            image: GAME_ART.BULLET,
            width: GAME_ART.BULLET.width,
            height: GAME_ART.BULLET.height,
            offset: {x: -GAME_ART.BULLET.width / 2, y: GAME_ART.BULLET.height / 2}
        }),
        rotation: 0,
        speed: 12
    };

    SpaceObject.call(this, bulletShape);
    Bullet.prototype = new SpaceObject(bulletShape);
    Bullet.prototype.constructor = Bullet;

    this.direction = (function () {
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

    this.update = function update(gameInfo) {
        this.move();
        this.checkIfExpired(gameInfo);
    };
}