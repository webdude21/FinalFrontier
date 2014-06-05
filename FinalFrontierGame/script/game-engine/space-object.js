function SpaceObject(args) {
    this.visual = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 0;
    this.update = function update(){

    };
    return this;
}