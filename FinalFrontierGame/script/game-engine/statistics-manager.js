var STATS_MANAGER = function statistics(layer, player) {
	var lives = new Kinetic.Text({
	    x: 25,
	    y: 25,
	    text: 'Lives:',
	    fontSize: 20,
	    fontWeight: 'bold',
	    fontFamily: 'Arial',
	    fill: '#fff'
	});

	var livesCount = new Kinetic.Text({
	    x: 25 + lives.getTextWidth() + 10,
	    y: 25,
	    text: player.getLives(),
	    fontSize: 20,
	    fontWeight: 'bold',
	    fontFamily: 'Arial',
	    fill: '#fff'
	});

	var score = new Kinetic.Text({
	    x: 25,
	    y: 25 + lives.getTextHeight() + 10,
	    text: 'Score:',
	    fontSize: 20,
	    fontWeight: 'bold',
	    fontFamily: 'Arial',
	    fill: '#fff'
	});

	var scoreCount = new Kinetic.Text({
	    x: 25 + score.getTextWidth() + 10,
	    y: 25 + lives.getTextHeight() + 10,
	    text: player.getScore(),
	    fontSize: 20,
	    fontWeight: 'bold',
	    fontFamily: 'Arial',
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