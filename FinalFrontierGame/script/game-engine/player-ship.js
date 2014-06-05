function PlayerShip(x, y, img, rotation, direction) {
    SpaceObject.call(this, x, y, img.width, img.height, rotation);
    this.direction = direction || 'down';
    this.image = img;
}