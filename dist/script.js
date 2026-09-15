const cardsSection = document.querySelector(".cards-section");
const tapHint = cardsSection.querySelector(".tap-hint");
const cardOrder = [
  "card-six-answer",
  "card-three-answer",
  "card-two-answer",
  "card-seven-answer",
  "card-five-answer",
  "card-one-answer",
  "card-four-answer",
  "card-eight-answer",
];

cardOrder.forEach((answerId, index) => {
  const answer = document.getElementById(answerId);
  const card = answer.closest("[data-card]");
  card.querySelector(".card-number").textContent = String(index + 1).padStart(2, "0");
  cardsSection.insertBefore(card, tapHint);
});

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
