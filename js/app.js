const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});