function SpaceObject(x, y, w, h, rotation) {
    // the main properties of the object
    this.x = x;
    this.y = y;
    this.width = w || 1;
    this.height = h || 1;

    // this shows if the object is up for removal
    this.hasExpired = false;

    // this should show the current rotation of the object.
    this.rotation = rotation || 0;

    this.update = function(){
        // TODO to be implemented by descendants
    };

    this.draw = function(drawer){
        // TODO - not finished, just a sketch
        drawer.draw(this.x, this.y, this.width, this.height);
    }
}