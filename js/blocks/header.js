const header = document.querySelector(".header");
const homeBlock = document.querySelector(".hero");
const headerHeight = getFullHeight(header);
const homeBlockHeight = getFullHeight(homeBlock);

let lastScrollTop = 0;

window.addEventListener("scroll", activateStickyHeader);

function activateStickyHeader() {
  const scrollDistance = window.scrollY;

  if (scrollDistance > homeBlockHeight) {
    if (scrollDistance > lastScrollTop) {
      header.classList.remove("visible");
    } else {
      homeBlock.style.marginTop = `${headerHeight}px`;
      header.classList.add("header__scroll--active", "visible");
    }
  } else {
    // header.classList.add("header__scroll--active", "visible");
    // homeBlock.style.marginTop = `${headerHeight}px`;

    header.classList.remove("visible");
    homeBlock.style.marginTop = null;
  }

  if (scrollDistance === 0) {
    header.classList.remove("header__scroll--active", "visible");
    homeBlock.style.marginTop = null;
  }

  lastScrollTop = scrollDistance <= 0 ? 0 : scrollDistance;
}

function getFullHeight(element) {
  if (!element) return 0;

  const style = window.getComputedStyle(element);
  return (
    element.offsetHeight +
    parseFloat(style.marginBottom) +
    parseFloat(style.marginTop) +
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom)
  );
}
