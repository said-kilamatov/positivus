const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".mobile-overlay");
const menu = document.querySelector(".mobile-overlay");
const bodyStyle = document.body.style;
let isMenuActive = false;

burgerButton.addEventListener("click", () => {
  isMenuActive = !isMenuActive;
  menu.classList.contains("mobile-overlay--active");
  if (isMenuActive) {
    burgerMenu.classList.add("mobile-overlay--active");
    burgerButton.classList.add("header__burger-button--active");
    bodyStyle.overflow = "hidden";
  } else {
    burgerMenu.classList.remove("mobile-overlay--active");
    burgerButton.classList.remove("header__burger-button--active");
    bodyStyle.overflow = "auto";
  }
});

menu.addEventListener("click", (event) => {
  if (!event.target.closest(".mobile-overlay__item")) return;
  burgerButton.click();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    isMenuActive = false;
    burgerMenu.classList.remove("mobile-overlay--active");
    burgerButton.classList.remove("header__burger-button--active");
  }
});
