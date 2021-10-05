const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open__menu");
const closeMenuBtn = document.querySelector(".close__menu");

function toggleMenu() {
  menu.classList.toggle("menu__opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
    