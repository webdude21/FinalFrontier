function soundInit() {
    createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin, createjs.FlashPlugin]);
    createjs.Sound.registerSound({src: 'resources/music/come-and-find-me.mp3', id: 'backgroundMusic'});
    createjs.Sound.registerSound({src: 'resources/sound/shot.mp3', id: 'shot'});
    createjs.Sound.registerSound({src: 'resources/sound/death.mp3', id: 'death'});
    createjs.Sound.registerSound({src: 'resources/sound/spawn.mp3', id: 'spawn'});

    createjs.Sound.addEventListener('loadComplete', attachShotSounds());
}

function attachShotSounds() {

    musicLoop();

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
}