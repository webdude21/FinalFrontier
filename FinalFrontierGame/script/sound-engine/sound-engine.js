function soundInit() {
    createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin, createjs.FlashPlugin]);
    createjs.Sound.registerSound({src: 'resources/music/come-and-find-me.mp3', id: 'backgroundMusic'});
    createjs.Sound.registerSound({src: 'resources/sound/shot.mp3', id: 'shot'});
    createjs.Sound.registerSound({src: 'resources/sound/death.mp3', id: 'death'});
    createjs.Sound.registerSound({src: 'resources/sound/spawn.mp3', id: 'spawn'});
    createjs.Sound.addEventListener('loadComplete', attachShotSounds());
    document.getElementById('music-pause').style.display = 'block';
}

function attachShotSounds() {

    FINAL_FRONTIER_GLOBALS.musicHandle = musicLoop();
    FINAL_FRONTIER_GLOBALS.musicPaused = false;

    SpaceObject.prototype.shotSound = function produceSound() {
        var instance = createjs.Sound.play('shot');
        instance.volume = 0.7;
    };

    SpaceObject.prototype.deathSound = function produceSound() {
        createjs.Sound.play('death');
    };

    SpaceObject.prototype.spawnSound = function produceSound() {
        createjs.Sound.play('spawn');
    };
}

function musicLoop() {
    var music = createjs.Sound.play('backgroundMusic');
    music.addEventListener('complete', musicLoop);
    return music
}

function toggleMusicPause(){
    if(FINAL_FRONTIER_GLOBALS.musicPaused === false){
        FINAL_FRONTIER_GLOBALS.musicHandle.pause();
        FINAL_FRONTIER_GLOBALS.musicPaused = true;
    }
    else{
        FINAL_FRONTIER_GLOBALS.musicHandle.resume();
        FINAL_FRONTIER_GLOBALS.musicPaused = false;
    }

}