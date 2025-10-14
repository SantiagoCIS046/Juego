function showMap(mapSrc) {
  // Crear un modal para mostrar el mapa
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.zIndex = "1000";

  // Crear el contenedor del cuadro
  const mapContainer = document.createElement("div");
  mapContainer.style.background = "rgba(0, 0, 0, 0.9)";
  mapContainer.style.border = "2px solid #ff6b6b";
  mapContainer.style.borderRadius = "10px";
  mapContainer.style.padding = "20px";
  mapContainer.style.display = "flex";
  mapContainer.style.flexDirection = "column";
  mapContainer.style.alignItems = "center";
  mapContainer.style.maxWidth = "800px";
  mapContainer.style.maxHeight = "90%";

  // Crear la imagen del mapa
  const mapImg = document.createElement("img");
  mapImg.src = mapSrc;
  mapImg.style.maxWidth = "100%";
  mapImg.style.maxHeight = "900px";
  mapImg.style.objectFit = "contain";
  mapImg.style.marginBottom = "20px";

  // Crear contenedor de botones
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "10px";

  // Botón Seleccionar mapa
  const selectBtn = document.createElement("button");
  selectBtn.textContent = "Seleccionar mapa";
  selectBtn.style.background = "rgba(54, 54, 55, 0.43)";
  selectBtn.style.border = "2px solid #ff0303aa";
  selectBtn.style.color = "white";
  selectBtn.style.padding = "12px 24px";
  selectBtn.style.borderRadius = "8px";
  selectBtn.style.cursor = "pointer";
  selectBtn.style.fontSize = "16px";
  selectBtn.style.fontWeight = "bold";
  selectBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
  selectBtn.style.transition = "all 0.3s ease";
  selectBtn.onmouseover = function () {
    selectBtn.style.background = "rgba(50, 50, 50, 1)";
    selectBtn.style.transform = "scale(1.05)";
  };
  selectBtn.onmouseout = function () {
    selectBtn.style.background = "rgba(49, 49, 49, 0.59)";
    selectBtn.style.transform = "scale(1)";
  };
  selectBtn.onclick = function () {
    // Usar Bootstrap toast en lugar de alert
    const toastEl = document.createElement("div");
    toastEl.className =
      "toast align-items-center text-white bg-success border-0";
    toastEl.setAttribute("role", "alert");
    toastEl.setAttribute("aria-live", "assertive");
    toastEl.setAttribute("aria-atomic", "true");
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          Mapa seleccionado exitosamente!
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;
    document.body.appendChild(toastEl);
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
    document.body.removeChild(modal);
  };

  // Botón Volver
  const backBtn = document.createElement("button");
  backBtn.textContent = "Volver";
  backBtn.style.background = "rgba(88, 88, 88, 0.25)";
  backBtn.style.border = "2px solid #20202047";
  backBtn.style.color = "white";
  backBtn.style.padding = "12px 24px";
  backBtn.style.borderRadius = "8px";
  backBtn.style.cursor = "pointer";
  backBtn.style.fontSize = "16px";
  backBtn.style.fontWeight = "bold";
  backBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
  backBtn.style.transition = "all 0.3s ease";
  backBtn.onmouseover = function () {
    backBtn.style.background = "rgba(64, 64, 64, 0.37)";
    backBtn.style.transform = "scale(1.05)";
  };
  backBtn.onmouseout = function () {
    backBtn.style.background = "rgba(108, 117, 125, 0.32)";
    backBtn.style.transform = "scale(1)";
  };
  backBtn.onclick = function () {
    document.body.removeChild(modal);
  };

  buttonContainer.appendChild(selectBtn);
  buttonContainer.appendChild(backBtn);

  mapContainer.appendChild(mapImg);
  mapContainer.appendChild(buttonContainer);

  modal.appendChild(mapContainer);
  document.body.appendChild(modal);
}
