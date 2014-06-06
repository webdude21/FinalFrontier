function Bullet(originX, originY) {
	'use strict';
	SpaceObject.call(this, {
		rotation: 0,
		shape: new Kinetic.Image({
			x: originX,
			y: originY,
			image: GAME_ART.BULLET,
			width: GAME_ART.BULLET.width,
			height: GAME_ART.BULLET.height,
			speed: 8
		})
	});
}

Bullet.prototype = new SpaceObject();
Bullet.prototype.constructor = Bullet;
Bullet.prototype.update = function update() {
	this.move(this.speed);
};