//todo: show nav_menu with toggle hamberger menu 
const navMenu = document.querySelector(".nav__menu");
const hambergurMenu = document.querySelector(".nav__toggle");

hambergurMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});
//todo: Hidden nav__menu by Click on nav__menu in mobile-first`
navMenu.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
})

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

//todo: Move .active-link between nav-items by js
const navItems = document.querySelectorAll(".nav__item ");
//* navItems is NodeList simular to Array accept forEach & length method but reject split or join method
//? Approach 1
/* 
navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        for (let j = 0; j < navItems.length; j++) {
            navItems[j].classList.remove("active-link");
        }

        navItem.classList.add("active-link")
    })
})

* in fact fire onclick event into per naveitem*
? modern approach
navItems.forEach(navItem => {
    navItem.onclik = () => {
        for (let j = 0; j < navItems.length; j++) {
            navItems[j].classList.remove("active-link");
        }

        navItem.classList.add("active-link")
    })
})


*/
//? Approach 2
function addActiveLink(index) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active-link");
    }
    navItems[index].classList.add("active-link")
}

/*Two approach to convert NodeList to Array*/
/*
   1 : const navItemsArr = Array.from(navItems)
   2: const navItemsArr = Array.prototype.slice.call(navItems) 
*/

/* //todo : scrollup js Add .scroll-show for scrollY>500 */
const scrollup = document.querySelector(".scrollup")
window.onscroll = () => {
    if (this.scrollY > 500) {
        scrollup.classList.add("scroll-show")
    } else {
        scrollup.classList.remove("scroll-show")

    }
}
/* //todo: Dark & Light Handler */
const navItemToggle = document.querySelector(".nav__item_toggle")

window.onload = () => {
    let theme = localStorage.getItem("theme") || "light"

    if (theme == "dark") {
        navItemToggle.classList.add("bi-toggle-on")
        navItemToggle.classList.remove("bi-toggle-off")
        document.body.classList.add("dark-theme")
    } else {
        navItemToggle.classList.add("bi-toggle-off")
        navItemToggle.classList.remove("bi-toggle-on")
        document.body.classList.remove("dark-theme")
    }
}

navItemToggle.addEventListener("click", () => {
    navItemToggle.classList.toggle("bi-toggle-on")
    navItemToggle.classList.toggle("bi-toggle-off")

    theme = navItemToggle.classList.contains("bi-toggle-on") ? "dark" : "light"
    localStorage.setItem("theme", theme)

    if (theme == "dark") {
        document.body.classList.add("dark-theme")
    } else {
        document.body.classList.remove("dark-theme")
    }

})







