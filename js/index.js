'use strict';

// listen for the keydown event
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]'); // get the audio element if matches keyCode
    const key = document.querySelector('.key[data-key="' + e.keyCode + '"]'); // get the key element if matches keyCode
    // stop the function if no audio element
    if (!audio) {
        return;
    }
    audio.currentTime = 0; // rewind if already playing
    audio.play(); // play audio
    key.classList.add('playing'); // add the class playing to the key element
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return; // skip if not a transform
    }
    this.classList.remove('playing'); // remove the class playing from the key element
}

// when the transition ends remove the class
const keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition);
});