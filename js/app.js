// mobile navigation
const btn = document.querySelector(".btn-mobile");
const header = document.querySelector(".header");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
