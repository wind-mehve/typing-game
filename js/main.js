'use strict'

{
    const words = [
        'red',
        'blue',
        'pink',
    ];
    const target = document.getElementById('target');
    let word;
    let startTime;
    let isPlaying = false;

    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;
    }

    let loc = 0;
    target.textContent = 'Click to start'
    document.addEventListener('click', () => {
        if(isPlaying) {
            return;
        }
        
        isPlaying = true;
        startTime = Date.now();
        setWord();
    })
    
    document.addEventListener('keydown', e => {
        if(e.key !== word[loc]) {
            return;
        }
        loc++;
        target.textContent = '_'.repeat(loc) + word.substring(loc);
        
        if(loc === word.length) {
            if(words.length === 0) {
                const result = document.getElementById('result');
                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                result.textContent = `Finished ${elapsedTime} seconds`;
                return;
            }
            setWord();
            loc = 0;
        }
    })
}