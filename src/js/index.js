const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      // navigation: false,
      autoHeight: false,
    },
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

let right = document.querySelectorAll(".slider-block__right");

right.forEach((elem, idx) => {
  if (idx % 2 == 0) {
    elem.classList.add("bg_1");
  } else {
    elem.classList.add("bg_2");
  }
});
