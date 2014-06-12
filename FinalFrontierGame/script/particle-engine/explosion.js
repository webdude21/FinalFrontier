//function explode(layer) {
//    var nodes = layer.getChildren();
//    var innerArr = [];
//    for (var i = 0; i < nodes.length; i++) {
//
//        var tween = new Kinetic.Tween({
//            node: nodes[i],
//            x: getRandom(200, -200),
//            y: getRandom(200, -200),
//            opacity: 0,
//            duration: 0.5,
//            onFinish: function () {
//
//                var index = String(this.node.getId()).split("_");
//
//                if (Number(index[1]) % 100 == 0) {
//                    isExploding = false;
//                }
//            }
//        });
//
//        innerArr.push(tween);
//    }
//
//    tweenArr.push(innerArr);
//}
//
//function enableExplode(layer, index) {
//    isExploding = true;
//    var nodes = layer.getChildren();
//
//    for (var i = 0; i < nodes.length; i++) {
//        tweenArr[index][i].play();
//    }
//}
