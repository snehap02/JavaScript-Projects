window.addEventListener('keydown', function(e){
    const audios = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audios) return; 

    audios.currentTime = 0; //rewind to the start
    audios.play();

    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    keys.style.width = '100px'
    keys.style.height = '70px'
    keys.classList.add('playing');
})

window.addEventListener('keyup', function(e){
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    keys.style.width = '112px'
    keys.style.height = '96px'
    if(!keys) return;
    keys.classList.remove('playing');
})