//function Explosion(container, center, count) {
//    var i = 0,
//        c = container;
//
//    count = count || 0;
//
//    this.particles = [];
//
//    this.center = {
//        x: center.x || 0,
//        y: center.y || 0
//    };
//
//    // Initialization
//    for (; i < count; ++i) {
//        var x = this.center.x,
//            y = this.center.y,
//            vx = Math.random() * 3 - 1.5,
//            vy = Math.random() * 3 - 1.5;
//
//        this.particles.push(new Particle(x, y, vx, vy));
//    }
//
//    this.update = function () {
//        for (i = 0; i < count; ++i) {
//
//            // We don't want to process particles that
//            // we can't see anymore
//            if (this.particles[i].x > 0 &&
//                this.particles[i].x < container.width &&
//                this.particles[i].y > 0 &&
//                this.particles[i].y < container.height) {
//
//                this.particles[i].update();
//
//                c.addObject(new Kinetic.Rect({
//                    x: this.particles[i].x,
//                    y: this.particles[i].y,
//                    width: 5,
//                    height: 5,
//                    fill: 'red',
//                    stroke: 'black',
//                    strokeWidth: 1
//                }));
//
//            } else {
//                this.particles[i].x = this.center.x;
//                this.particles[i].y = this.center.y;
//            }
//        }
//    };
//}