var STATS_MANAGER = function statistics(args) {

    var lives = new Kinetic.Text({
        x: args.x,
        y: args.y,
        text: 'Lives:',
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    var livesCount = new Kinetic.Text({
        x: args.x + lives.getTextWidth() + 10,
        y: args.y,
        text: args.player.getLives(),
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    var score = new Kinetic.Text({
        x: args.x,
        y: args.y + lives.getTextHeight() + 10,
        text: 'Score:',
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    var scoreCount = new Kinetic.Text({
        x: args.x + score.getTextWidth() + 10,
        y: args.y + lives.getTextHeight() + 10,
        text: args.player.getScore(),
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    args.layer.add(lives);
    args.layer.add(livesCount);
    args.layer.add(score);
    args.layer.add(scoreCount);
    args.layer.draw();

    return {
        update: function update() {
            livesCount.text(args.player.getLives());
            scoreCount.text(args.player.getScore());
            args.layer.draw();
        }
    };
};