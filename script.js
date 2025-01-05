// menu //
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

//Slideshow
window.onload = function () {
  let slideIndex = 0;

  function showSlides() {
    const slides = document.getElementsByClassName("slide"); // Henter alle billederne
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Skjuler alle billeder
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1; // Hvis vi er kommet til slutningen, starter vi fra første billede
    }
    slides[slideIndex - 1].style.display = "block"; // Viser det næste billede
  }

  setInterval(showSlides, 5000); // Skifter billede hver 3. sekund
};
