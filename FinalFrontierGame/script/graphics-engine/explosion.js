(function generateExplosionArray() {
    var spriteRow = 9, spriteCol = 9;
    var spriteArray = [];
    for (var row = 0; row < spriteRow; row++) {
        for (var col = 0; col < spriteCol; col++) {
            spriteArray.push(row * 50, col * 50, 50, 50);
        }
    }
    GAME_ART.EXPLOSION_SPRITE = spriteArray;
}());

function generateExplosion(x, y, frameRate) {
    return new Kinetic.Sprite({
        x: x,
        y: y,
        image: GAME_ART.EXPLOSION,
        animation: 'explode',
        animations: {
            explode: GAME_ART.EXPLOSION_SPRITE
        },
        frameRate: frameRate,
        frameIndex: 0
    });
}