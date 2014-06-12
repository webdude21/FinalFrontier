var STATS_MANAGER = function statistics(args) {
    var lineSpacing = 5;

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
        y: args.y + lives.getTextHeight() + lineSpacing,
        text: 'Score:',
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    var scoreCount = new Kinetic.Text({
        x: args.x + score.getTextWidth() + 10,
        y: args.y + lives.getTextHeight() + lineSpacing,
        text: args.player.getScore(),
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    var level = new Kinetic.Text({
        x: args.x,
        y: args.y + score.getTextHeight() * 2 + lineSpacing * 2,
        text: 'Level:',
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    var levelCount = new Kinetic.Text({
        x: args.x + level.getTextWidth() + 10,
        y: args.y + score.getTextHeight() * 2 + lineSpacing * 2,
        text: FINAL_FRONTIER_LEVEL.toString(),
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontFamily: args.fontFamily,
        fill: args.fillColor
    });

    args.layer.add(lives);
    args.layer.add(livesCount);
    args.layer.add(score);
    args.layer.add(scoreCount);
    args.layer.add(level);
    args.layer.add(levelCount);

    return {
        update: function update() {
            livesCount.text(args.player.getLives());
            scoreCount.text(args.player.getScore());
            levelCount.text = FINAL_FRONTIER_LEVEL.toString();
            args.layer.draw();
        }
    };
};