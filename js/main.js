const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
burger.classList.toggle("active");
document.body.classList.toggle("menu-open");
document.documentElement.classList.toggle("menu-open");
});