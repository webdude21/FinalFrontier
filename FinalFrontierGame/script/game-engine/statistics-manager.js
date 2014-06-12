var STATS_MANAGER = function statistics(layer, player) {
	var lives = new Kinetic.Text({
	    x: 25,
	    y: 25,
	    text: 'Lives:',
	    fontSize: 18,
	    fill: '#fff'
	});

	var livesCount = new Kinetic.Text({
	    x: 25 + lives.getTextWidth() + 10,
	    y: 25,
	    text: player.getLives(),
	    fontSize: 18,
	    fill: '#fff'
	});

	var score = new Kinetic.Text({
	    x: GAME_FIELD_WIDTH - 80,
	    y: 25,
	    text: 'Score:',
	    fontSize: 18,
	    fill: '#fff'
	});

	var scoreCount = new Kinetic.Text({
	    x: (GAME_FIELD_WIDTH - 80) + score.getTextWidth() + 10,
	    y: 25,
	    text: player.getScore(),
	    fontSize: 18,
	    fill: '#fff'
	});

	layer.add(lives);
	layer.add(livesCount);
	layer.add(score);
	layer.add(scoreCount);
	layer.draw();

	return {
		update: function update() {
			livesCount.text(player.getLives());
			scoreCount.text(player.getScore());
			layer.draw();
		}
	};
};