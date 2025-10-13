document.addEventListener("DOMContentLoaded", function () {
  const goToGameButton = document.getElementById("go-to-game");
  const video = document.getElementById("intro-video");
  const audio = document.getElementById("intro-audio");

  // Ensure audio plays in sync with video
  video.addEventListener("play", function () {
    audio.play();
  });

  video.addEventListener("pause", function () {
    audio.pause();
  });

  // Navigation is now handled by the <a> tag, but we can keep this for additional logic if needed

  // Optional: Unmute audio on first user interaction (to comply with autoplay policies)
  goToGameButton.addEventListener("click", function () {
    audio.muted = false;
    video.muted = false;
  });

  // Ensure audio is not muted initially if possible, but handle browser restrictions
  audio.muted = false;
  video.muted = false;
});
