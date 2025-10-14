document.addEventListener("DOMContentLoaded", function () {
  const goToGameButton = document.getElementById("go-to-game");
  const video = document.getElementById("intro-video");
  const audio = document.getElementById("intro-audio");

  // Forzar video y audio a reproducirse automáticamente al cargar la página
  video.play();
  audio.play();

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

  // Asegurar que el audio no esté muteado inicialmente si es posible, pero manejar restricciones del navegador
  audio.muted = false;
  video.muted = false;
  // Mantener video muteado para cumplir con políticas de reproducción automática
  // video.muted = false; // Comentado para permitir reproducción automática
});
