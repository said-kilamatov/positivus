const accordions = document.querySelectorAll(".processes__item");
const accordionContainer = document.querySelector(".processes__list");

accordionContainer.addEventListener("click", accordionToggler);

function accordionToggler(event) {
  const clickedAccordion = event.target.closest(".processes__item");

  if (!clickedAccordion) return;

  const activeAccordion = accordionContainer.querySelector(
    ".processes__item--active"
  );

  if (activeAccordion && activeAccordion !== clickedAccordion) {
    activeAccordion.classList.remove("processes__item--active");
  }

  clickedAccordion.classList.toggle("processes__item--active");
}
