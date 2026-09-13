const cards = document.querySelectorAll("[data-card]");

cards.forEach((card) => {
  const button = card.querySelector(".card-toggle");
  const answer = card.querySelector(".card-answer");

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    card.classList.toggle("is-open", !isOpen);
    answer.hidden = isOpen;

    if (!isOpen) {
      answer.classList.remove("opening");
      requestAnimationFrame(() => answer.classList.add("opening"));
    }
  });
});
