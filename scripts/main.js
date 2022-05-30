const API_URL = "https://www.samah.one/wp-json/wp/v2";

// Elements
const hamburgerBtn = document.querySelector("#hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");

// Hamburger menu
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// set footer year
document.getElementById("year").innerText = new Date().getFullYear();

const stripHtml = (string) => string.replace(/<\/?[^>]+(>|$)/g, "");


// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 3,

  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
