var CHECK_THIS_BULLET;

function Bullet(originX, originY, target, rotation) {
    'use strict';

    SpaceObject.call(this, {
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
    });

    this.direction = this.trajectory(originX, originY, target);
    CHECK_THIS_BULLET = this;
}

Bullet.prototype = Object.create(SpaceObject.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.trajectory = function (startX, startY, target) {
    var directionX = target.x - startX;
    var directionY = target.y - startY;
    var denominator = Math.sqrt(directionX * directionX + directionY * directionY);

    return {
        x: directionX / denominator,
        y: directionY / denominator
    };
};

Bullet.prototype.move = function () {
    this.visual.move({
        x: this.direction.x * this.speed,
        y: this.direction.y * this.speed
    });
};

Bullet.prototype.update = function update(gameInfo) {
    this.refreshProperties();
    this.move();
    this.checkIfExpired(gameInfo);
};
