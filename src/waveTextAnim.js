// This script animates the wave text by updating the startOffset attribute for smooth movement.
const textPath = document.getElementById('waveTextPath');
let offset = 0;
const speed = 0.055; // Lower is slower, adjust for calm movement

function animateWaveText() {
  if (textPath) {
    offset = (offset + speed) % 16.6; // 16.6% is one full repeat for 6 copies
    textPath.setAttribute('startOffset', offset + '%');
  }
  requestAnimationFrame(animateWaveText);
}

animateWaveText();
