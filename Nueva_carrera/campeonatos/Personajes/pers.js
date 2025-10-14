document.addEventListener("DOMContentLoaded", function () {
  const characterCards = document.querySelectorAll(".character-card");
  const enlargedCardContainer = document.getElementById(
    "enlarged-card-container"
  );

  characterCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Clone the card content
      const clonedCard = card.cloneNode(true);

      // Add enlarged class
      clonedCard.classList.add("enlarged-card");

      // Create close button
      const closeBtn = document.createElement("button");
      closeBtn.textContent = "Volver";
      closeBtn.classList.add("close-btn");

      // Append close button to cloned card
      clonedCard.appendChild(closeBtn);

      // Clear the container and append the enlarged card
      enlargedCardContainer.innerHTML = "";
      enlargedCardContainer.appendChild(clonedCard);

      // Show the overlay
      enlargedCardContainer.style.display = "flex";

      // Add close functionality to button
      closeBtn.addEventListener("click", function () {
        enlargedCardContainer.style.display = "none";
      });

      // Add close functionality to card click (optional, but keep for now)
      clonedCard.addEventListener("click", function (e) {
        if (e.target !== closeBtn) {
          enlargedCardContainer.style.display = "none";
        }
      });
    });
  });
});
