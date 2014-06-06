function SpaceObject(args) {
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 'none';
    this.direction = {left: false, right: false, up: false, down: false};
    this.speed = args.speed || 2;

    this.move = function move(step) {
        var newX = 0;
        var newY = 0;

        if (this.direction.left) {
            newX -= step;
        }

        if (this.direction.right) {
            newX += step;
        }

        if (this.direction.up) {
            newY -= step;
        }
        
        if (this.direction.down) {
            newY += step;
        }

        this.visual.move({
            x: newX,
            y: newY
        });
    };

    this.rotate = function rotate(step) {
        // switch (this.rotation) {
        //     case 'rotateLeft':
        //         this.visual.rotate(-step);
        //         break;
        //     case 'rotateRight':
        //         this.visual.rotate(step);
        //         break;
        // }
        this.visual.rotate(step);
    };

    this.getLocation = function() {
        return {
            x: this.visual.attrs.x,
            y: this.visual.attrs.y
        };
    };

    this.update = function update() {
    };

    return this;
}

