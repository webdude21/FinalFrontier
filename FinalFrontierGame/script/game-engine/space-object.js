function SpaceObject(args) {
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = 'none';
    this.direction = 'none';
    this.update = function update(){

    };
    return this;
}