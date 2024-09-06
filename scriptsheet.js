// Asegurarse que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
// Variables de reproducción
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const playlist = document.getElementById('playlist');
const togglePlayer = document.getElementById('togglePlayer');
const musicPlayer = document.getElementById('musicPlayer');
const repeatBtn = document.getElementById('repeatBtn');
let isRepeating = false;

// Cambiar volumen
volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Reproducir/Pausar
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

// Repetir
repeatBtn.addEventListener('click', () => {
    isRepeating = !isRepeating;
    audioPlayer.loop = isRepeating;
});

// Cambiar canción de la lista
playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        audioPlayer.src = e.target.getAttribute('data-src');
        audioPlayer.play();
    }
});

// Mostrar/Ocultar controles
togglePlayer.addEventListener('click', () => {
    musicPlayer.classList.toggle('active');
});
});
