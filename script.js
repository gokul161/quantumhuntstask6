var player = videojs('mergedVideo');

player.on('ended', function() {
    player.src('file2.mp4'); // Switch to the second video once the first one ends
    player.play(); // Start playing the second video
});
