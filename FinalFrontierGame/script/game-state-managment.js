function togglePlayPauseButton() {
    FINAL_FRONTIER_GLOBALS.GAME_RUNNING = !FINAL_FRONTIER_GLOBALS.GAME_RUNNING;
    var playPauseButton = document.getElementById('play-pause');

    playPauseButton.removeEventListener('click', runGame);
    playPauseButton.addEventListener('click', togglePlayPauseButton);

    if (FINAL_FRONTIER_GLOBALS.GAME_RUNNING) {
        playPauseButton.textContent = 'Pause!';
        initTimers(FINAL_FRONTIER_GLOBALS.spaceObjectsManager, FINAL_FRONTIER_GLOBALS.playerShip)
    } else {
        playPauseButton.textContent = 'Play!';
        clearTimers();
    }
}


function clearTimers() {
    for (var i = 0; i < GAME_TIMERS.length; i++) {
        var obj = GAME_TIMERS[i];
        clearInterval(obj);
    }
}