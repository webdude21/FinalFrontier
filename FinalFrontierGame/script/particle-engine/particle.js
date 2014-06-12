//function createParticles(imgObj, w, h) {
//
//    particles = [];
//    for (var n = 0; n < 10; n++) {
//        for (var i = 0; i < 10; i++) {
//            var imgX = n * 5;
//            var imgY = i * 5;
//            particles.push({
//                x: imgX,
//                y: imgY,
//                imgX: imgX,
//                imgY: imgY,
//                vx: 0,
//                vy: 0,
//                isRolling: false,
//                isLocked: true
//            });
//        }
//    }
//
//    createObj(imgObj, 700, 50);
//    createObj(imgObj, 200, 50);
//
//}
//
//function createObj(imgObj, _x, _y) {
//    var layerObj = new Kinetic.Layer();
//    for (var i = 0; i < particles.length; i++) {
//
//        var img = new Kinetic.Image({
//            x: particles[i].x,
//            y: particles[i].y,
//            image: imgObj,
//            width: 10,
//            height: 10,
//            id: "obj_" + i,
//            crop: {
//                x: particles[i].imgX,
//                y: particles[i].imgY,
//                width: 10,
//                height: 10
//            }
//        });
//
//        layerObj.add(img);
//    }
//
//    //var grp = new Kinetic.Group();
//    layerObj.setX(_x);
//    layerObj.setY(_y);
//    stage.add(layerObj);
//    stage.draw();
//    layerArr.push(layerObj);
//    explode(layerObj);
//}
