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

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
});

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = document.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (e) {
  e.addEventListener("click", function () {
    const curText = e.parentElement.querySelector(".accordeon__text");

    e.classList.toggle("accordeon__title--active");

    curText.classList.toggle("accordeon__text--visible");

    if (curText.classList.contains("accordeon__text--visible")) {
      curText.style.maxHeight = curText.scrollHeight + "px";
    } else {
      curText.style.maxHeight = null;
    }
  });
});
