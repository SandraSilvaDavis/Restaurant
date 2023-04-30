const hamburgerBtn = document.getElementById("hamburgerBtn");
const primaryNav = document.getElementById("primaryNav");

function toggleMenu() {
  primaryNav.classList.toggle("open");
}

hamburgerBtn.addEventListener("click", toggleMenu);

