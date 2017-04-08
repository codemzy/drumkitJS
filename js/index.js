'use strict';

// function to play the sound
function playSound(keyCode) {
    const audio = document.querySelector('audio[data-key="' + keyCode + '"]'); // get the audio element if matches keyCode
    const key = document.querySelector('.key[data-key="' + keyCode + '"]'); // get the key element if matches keyCode
    // stop the function if no audio element
    if (!audio) {
        return;
    }
    audio.currentTime = 0; // rewind if already playing
    audio.play(); // play audio
    key.classList.add('playing'); // add the class playing to the key element
}

// function to remove playing class when transition finished
function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return; // skip if not a transform
    }
    this.classList.remove('playing'); // remove the class playing from the key element
}

// listen for the keydown event
window.addEventListener('keydown', function(e) {
    playSound(e.keyCode);
});

// when the transition ends remove the class
const keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', function(e) {
        playSound(this.attributes['data-key'].value);
    });
});