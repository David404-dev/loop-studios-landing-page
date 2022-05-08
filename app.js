const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const logoImg = document.getElementById("brand");
const hamburgerMenu = document.querySelector(".hamburger-menu");
// open hamburger menu
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  logoImg.classList.toggle("logo-img");
  hamburgerMenu.style.display = "block";
});

// close hamburger menu
closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  logoImg.classList.remove("logo-img");
  hamburgerIcon.style.display = "block";
  hamburgerMenu.style.display = "none";
});
