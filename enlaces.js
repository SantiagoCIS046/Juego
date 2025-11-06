document.addEventListener("DOMContentLoaded", function () {
  const goToGameButton = document.getElementById("go-to-game");
  const video = document.getElementById("intro-video");
  const audio = document.getElementById("intro-audio");

  // Forzar video y audio a reproducirse automáticamente al cargar la página
  video.play().catch((e) => console.log("Video play failed:", e));
  audio.play().catch((e) => console.log("Audio play failed:", e));

  // Asegurar que el audio se reproduzca en sincronía con el video
  video.addEventListener("play", function () {
    audio.play();
  });

  video.addEventListener("pause", function () {
    audio.pause();
  });

  // La navegación ahora se maneja con la etiqueta <a>, pero podemos mantener esto para lógica adicional si es necesario

  // Opcional: Desmutear audio en la primera interacción del usuario (para cumplir con las políticas de reproducción automática)
  goToGameButton.addEventListener("click", function () {
    audio.muted = false;
    video.muted = false;
  });

  // Ambos muted inicialmente para permitir reproducción automática
  audio.muted = true;
  video.muted = true;
});
