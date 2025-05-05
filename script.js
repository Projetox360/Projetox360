const audio = document.getElementById('introAudio');
const audioControl = document.getElementById('audio-control');

let isMuted = false;

function toggleAudio() {
  isMuted = !isMuted;
  audio.muted = isMuted;
  audioControl.textContent = isMuted ? '🔇' : '🔊';
}

function startIntro() {
  audio.volume = 1.0;
  audio.play();

  // Fade out do áudio e redirecionamento
  const fadeOut = setInterval(() => {
    if (audio.volume > 0.1) {
      audio.volume -= 0.02;
    } else {
      clearInterval(fadeOut);
      window.location.href = "login.html"; // Redireciona para a página de login
    }
  }, 800);
}
