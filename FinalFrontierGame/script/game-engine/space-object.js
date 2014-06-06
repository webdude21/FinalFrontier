function SpaceObject(args) {
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 'none';
    this.direction = {x: 0, y: 0};
    this.speed = args.speed || 2;
    this.move = function move() {
        this.visual.move(this.direction);
    };
    this.rotate = function rotate(step) {
        switch (this.rotation) {
            case 'rotateLeft':
                this.visual.rotate(-step);
                break;
            case 'rotateRight':
                this.visual.rotate(step);
                break;
        }
    };
    this.update = function update() {
    };

    return this;
}

