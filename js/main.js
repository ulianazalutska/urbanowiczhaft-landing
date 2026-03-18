const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("menu-open");
  document.documentElement.classList.toggle("menu-open");
});
// document.querySelector("video").addEventListener("loadeddata", function() {
//   this.classList.add("loaded");
// });

const loader = document.querySelector(".loader");
const hero = document.querySelector(".hero");
const video = document.querySelector(".hero-video");

// sprawdzenie czy użytkownik już był
const firstVisit = !sessionStorage.getItem("visited");

if (!firstVisit) {
  loader.style.display = "none";
}

window.addEventListener("load", () => {

  if (firstVisit) {
    sessionStorage.setItem("visited", "true");

    setTimeout(() => {
      loader.classList.add("hidden");
    }, 800);
  }

  // start video
  setTimeout(() => {
    video.src = "filmik/v-mg-2-mb.mp4";
    video.load();

    video.addEventListener("canplaythrough", () => {
  hero.classList.add("loaded");
  video.play();
});

  }, firstVisit ? 600 : 0);
});

function showLogo() {
  document.querySelector(".logo").classList.add("show");
}

// po ukryciu loadera:
setTimeout(showLogo, 200);

