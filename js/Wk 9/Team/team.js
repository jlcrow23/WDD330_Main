// Selections


//event listeners

document.addEventListener('keydown', (Event)=>{

    const audio = document.querySelector(
        'audio[data-key="${event.keyCode}"]');
    // const keyCountainer = document.querySelector(
        // 'div[data-key="${event.keyCode}"]');

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

})