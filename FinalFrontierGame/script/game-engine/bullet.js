function Bullet(originX, originY, target) {
    'use strict';
    SpaceObject.call(this, {
        rotation: 0,
        speed: 15,
        shape: new Kinetic.Image({
            x: originX,
            y: originY,
            image: GAME_ART.BULLET,
            width: GAME_ART.BULLET.width,
            height: GAME_ART.BULLET.height
        })
    });

    this.target = target;

    this.move = function () {
        var directionX = this.target.x - this.getLocation().x;
        var directionY = this.target.y - this.getLocation().y;

        var denominator = Math.sqrt(directionX * directionX + directionY * directionY);

        var normalizedX = directionX / denominator;
        var normalizedY = directionY / denominator;

        this.visual.move({
            x: normalizedX * this.speed,
            y: normalizedY * this.speed
        });
    };

    this.update = function update() {
        this.move();

    };
}

Bullet.prototype = new SpaceObject();
Bullet.prototype.constructor = Bullet;



