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
    const togglePlaylistBtn = document.getElementById('togglePlaylistBtn'); // Nuevo botón para la lista
    let isRepeating = false;
    let isPlaylistVisible = false; // Estado de la visibilidad de la lista


    // Función para actualizar el ícono de sonido
    function updateSoundIcon() {
        if (volumeSlider.value == 0) {
            togglePlayer.innerHTML = '<img src="mplayer/nosound.png" alt="No Sound">';
        } else {
            togglePlayer.innerHTML = '<img src="mplayer/sound.png" alt="Sound">';
        }
    }

    // Función para cambiar el ícono de play/pause
    function updatePlayPauseIcon() {
        if (audioPlayer.paused) {
            playPauseBtn.innerHTML = '<img src="mplayer/play.png" alt="Play">';
        } else {
            playPauseBtn.innerHTML = '<img src="mplayer/pause.png" alt="Pause">';
        }
    }

    // Cambiar volumen y actualizar ícono de sonido
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
        updateSoundIcon();
    });

    // Reproducir/Pausar y actualizar ícono
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
        updatePlayPauseIcon(); // Actualizar el ícono cuando se haga clic
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
            updatePlayPauseIcon(); // Asegurarse de que el ícono se actualice al reproducir nueva canción
        }
    });

    // Mostrar/Ocultar controles
    togglePlayer.addEventListener('click', () => {
        musicPlayer.classList.toggle('active');
    });
    // Mostrar/Ocultar lista de reproducción
    togglePlaylistBtn.addEventListener('click', () => {
        isPlaylistVisible = !isPlaylistVisible;
        if (isPlaylistVisible) {
            playlist.classList.add('playlist-visible');
        } else {
            playlist.classList.remove('playlist-visible');
        }
    });

    // Inicializar el ícono de sonido al cargar la página
    updateSoundIcon();
    // Inicializar el ícono de play/pause al cargar la página
    updatePlayPauseIcon();
});
