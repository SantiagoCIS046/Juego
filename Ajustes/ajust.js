function toggleSettings() {
  const settingsBar = document.getElementById("settings-bar");
  settingsBar.classList.toggle("hidden");
}

function setVolume(value) {
  document.getElementById("volume-value").textContent = value;
  localStorage.setItem("gameVolume", value);
  console.log("Volumen general ajustado a:", value);
}

function setMusicVolume(value) {
  document.getElementById("music-value").textContent = value;
  localStorage.setItem("gameMusicVolume", value);
  console.log("Volumen música ajustado a:", value);
}

function setSFXVolume(value) {
  document.getElementById("sfx-value").textContent = value;
  localStorage.setItem("gameSFXVolume", value);
  console.log("Volumen efectos ajustado a:", value);
}

function setGraphics(value) {
  localStorage.setItem("gameGraphics", value);
  console.log("Gráficos ajustados a:", value);
}

function setResolution(value) {
  localStorage.setItem("gameResolution", value);
  console.log("Resolución ajustada a:", value);
}

function setLanguage(value) {
  localStorage.setItem("gameLanguage", value);
  console.log("Idioma ajustado a:", value);
}

function setGameMode(value) {
  localStorage.setItem("gameMode", value);
  console.log("Modo de juego ajustado a:", value);
}

function setDifficulty(value) {
  localStorage.setItem("gameDifficulty", value);
  console.log("Dificultad ajustada a:", value);
}

function setControls(value) {
  localStorage.setItem("gameControls", value);
  console.log("Controles ajustados a:", value);
}

function toggleFullscreen() {
  const isChecked = document.getElementById("fullscreen-toggle").checked;
  localStorage.setItem("gameFullscreen", isChecked);
  console.log("Pantalla completa:", isChecked ? "activada" : "desactivada");
}

function toggleVSync() {
  const isChecked = document.getElementById("vsync-toggle").checked;
  localStorage.setItem("gameVSync", isChecked);
  console.log("V-Sync:", isChecked ? "activado" : "desactivado");
}

// Cargar configuraciones guardadas al cargar la página
window.onload = function () {
  // Volumen general
  const savedVolume = localStorage.getItem("gameVolume");
  if (savedVolume !== null) {
    document.getElementById("volume-slider").value = savedVolume;
    document.getElementById("volume-value").textContent = savedVolume;
  }

  // Volumen música
  const savedMusicVolume = localStorage.getItem("gameMusicVolume");
  if (savedMusicVolume !== null) {
    document.getElementById("music-slider").value = savedMusicVolume;
    document.getElementById("music-value").textContent = savedMusicVolume;
  }

  // Volumen efectos
  const savedSFXVolume = localStorage.getItem("gameSFXVolume");
  if (savedSFXVolume !== null) {
    document.getElementById("sfx-slider").value = savedSFXVolume;
    document.getElementById("sfx-value").textContent = savedSFXVolume;
  }

  // Gráficos
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

  // Resolución
  const savedResolution = localStorage.getItem("gameResolution");
  if (savedResolution !== null) {
    const radios = document.getElementsByName("resolution");
    for (let radio of radios) {
      if (radio.value === savedResolution) {
        radio.checked = true;
        break;
      }
    }
  }

  // Idioma
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

  // Modo de juego
  const savedGameMode = localStorage.getItem("gameMode");
  if (savedGameMode !== null) {
    const radios = document.getElementsByName("gamemode");
    for (let radio of radios) {
      if (radio.value === savedGameMode) {
        radio.checked = true;
        break;
      }
    }
  }

  // Dificultad
  const savedDifficulty = localStorage.getItem("gameDifficulty");
  if (savedDifficulty !== null) {
    const radios = document.getElementsByName("difficulty");
    for (let radio of radios) {
      if (radio.value === savedDifficulty) {
        radio.checked = true;
        break;
      }
    }
  }

  // Controles
  const savedControls = localStorage.getItem("gameControls");
  if (savedControls !== null) {
    const radios = document.getElementsByName("controls");
    for (let radio of radios) {
      if (radio.value === savedControls) {
        radio.checked = true;
        break;
      }
    }
  }

  // Pantalla completa
  const savedFullscreen = localStorage.getItem("gameFullscreen");
  if (savedFullscreen !== null) {
    document.getElementById("fullscreen-toggle").checked =
      savedFullscreen === "true";
  }

  // V-Sync
  const savedVSync = localStorage.getItem("gameVSync");
  if (savedVSync !== null) {
    document.getElementById("vsync-toggle").checked = savedVSync === "true";
  }
};
