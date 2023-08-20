const btn = document.getElementById('btn');
const cont = document.querySelector('.container');
const audio = document.getElementById('audio');

function active() {
    audio.play();
    cont.classList.add('container--active');
    btn.style.display = 'none';
}

function returned() {
    audio.pause();
    cont.classList.remove('container--active');
    btn.style.display = 'block';
}

btn.addEventListener('click', active);
setInterval(returned, 5000);