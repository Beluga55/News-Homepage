const navHamburger = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav__menu");

navHamburger.addEventListener("click", () => {
  if (navHamburger) {
    navHamburger.classList.add("hide");
    navClose.classList.add("show");
    navMenu.classList.add("show");
  }

  navClose.addEventListener("click", () => {
    if (navClose) {
      navHamburger.classList.remove("hide");
      navClose.classList.remove("show");
      navMenu.classList.remove("show");
    }
  });
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
  navClose.classList.remove("show");
  navHamburger.classList.remove("hide");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
