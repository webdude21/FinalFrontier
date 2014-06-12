var playMusic = function playMusic() {
    var instance = createjs.Sound.play('backgroundMusic');
    instance.play();
};

function soundInit() {
    createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin]);
    createjs.Sound.registerSound({src: 'resources/music/come-and-find-me.mp3', id: 'backgroundMusic'});
    createjs.Sound.addEventListener('loadComplete', playMusic());
}