const menuBtn = document.querySelector(".menu__btn");
const menuMob = document.querySelector(".menu__header-list");

menuBtn.addEventListener("click", () => {
  menuMob.classList.toggle("menu--open");
});

const swiperOne = new Swiper(".feedback-slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
