const testimonialsSwiper = new Swiper(".testimonials__swiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  initialSlide: 1,
  centeredSlides: true,

  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className}" data-index="${index + 11}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="currentColor"/>
          </svg>
        </button>`;
    },
  },

  navigation: {
    nextEl: ".testimonials__arrow--next",
    prevEl: ".testimonials__arrow--prev",
  },

  on: {
    slideChange: function () {
      updatePagination(this);
    },

    init: function () {
      updatePagination(this);
    },
  },
});

function updatePagination(swiper) {
  const bullets = document.querySelectorAll(".testimonials__pagination-dot");
  const activeIndex = swiper.realIndex;

  bullets.forEach((bullet, index) => {
    if (index === activeIndex) {
      bullet.classList.add("testimonials__pagination-dot--active");
    } else {
      bullet.classList.remove("testimonials__pagination-dot--active");
    }
  });
}

document
  .querySelectorAll(".testimonials__pagination-dot")
  .forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      testimonialsSwiper.slideTo(index);
    });
  });
