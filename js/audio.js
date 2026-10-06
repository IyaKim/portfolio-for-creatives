function toggleAudio() {
  const audio = document.getElementById("bg-audio");
  const button = document.getElementById("audio-toggle-btn");
  const icon = document.getElementById("audio-icon");
  const text = document.getElementById("audio-text");

  if (audio.muted) {
    audio.muted = false;
    audio.play();

    icon.textContent = "🔊";
    text.textContent = "Music On";
    button.setAttribute("aria-pressed", "true");
  } else {
    audio.muted = true;

    icon.textContent = "🔇";
    text.textContent = "Music Off";
    button.setAttribute("aria-pressed", "false");
  }
}
