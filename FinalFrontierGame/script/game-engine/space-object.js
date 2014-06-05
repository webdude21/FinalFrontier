function SpaceObject(args) {
    this.visualRepresentation = args.shape;
    this.hasExpired = false;
    this.rotation = args.rotation || 0;
    return this;
}