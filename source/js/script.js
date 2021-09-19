const nav = document.querySelector(".main-nav");
const toggle = document.querySelector(".main-nav__toggle");
const header = document.querySelector(".page-header");

console.log("### nav: ", nav);

nav.classList.add("main-nav--closed");
header.classList.remove("page-header--no-js");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
  } else {
    nav.classList.remove("main-nav--opened");
    nav.classList.add("main-nav--closed");
  }
});
