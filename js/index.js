'use strict';

// listen for the keydown event
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    // stop the function if no audio element
    if (!audio) {
        return;
    }
    audio.play();
});