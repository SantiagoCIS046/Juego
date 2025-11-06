function toggleVolumeOptions() {
  const volumeOptions = document.getElementById("volume-options");
  volumeOptions.classList.toggle("hidden");
}

function setVolume(value) {
  // Actualizar el valor mostrado
  document.getElementById("volume-value").textContent = value;
  // Aquí puedes agregar lógica para ajustar el volumen real
  console.log("Volumen ajustado a:", value);
  // Guardar en localStorage para persistencia
  localStorage.setItem("gameVolume", value);
}

function toggleGraphicsOptions() {
  const graphicsOptions = document.getElementById("graphics-options");
  graphicsOptions.classList.toggle("hidden");
}

function setGraphics(value) {
  // Guardar la selección en localStorage
  localStorage.setItem("gameGraphics", value);
  console.log("Gráficos ajustados a:", value);
}

function toggleControlsOptions() {
  const controlsOptions = document.getElementById("controls-options");
  controlsOptions.classList.toggle("hidden");
}

function toggleLanguageOptions() {
  const languageOptions = document.getElementById("language-options");
  languageOptions.classList.toggle("hidden");
}

function setLanguage(value) {
  // Guardar la selección en localStorage
  localStorage.setItem("gameLanguage", value);
  console.log("Idioma ajustado a:", value);
}

// Cargar configuraciones guardadas al cargar la página
window.onload = function () {
  const savedVolume = localStorage.getItem("gameVolume");
  if (savedVolume !== null) {
    document.getElementById("volume-slider").value = savedVolume;
    document.getElementById("volume-value").textContent = savedVolume;
  }

  const savedGraphics = localStorage.getItem("gameGraphics");
  if (savedGraphics !== null) {
    const radios = document.getElementsByName("graphics");
    for (let radio of radios) {
      if (radio.value === savedGraphics) {
        radio.checked = true;
        break;
      }
    }
  }

  const savedLanguage = localStorage.getItem("gameLanguage");
  if (savedLanguage !== null) {
    const radios = document.getElementsByName("language");
    for (let radio of radios) {
      if (radio.value === savedLanguage) {
        radio.checked = true;
        break;
      }
    }
  }
};
