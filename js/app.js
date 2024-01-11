//todo:  nav menu toggle 
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

//todo: navbar scroll behavior 
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    // console.log("scroll:", window.scrollY)
    if (window.scrollY > 30) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll")
    }
}) 