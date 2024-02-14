let x = document.getElementById("menu");
let mIcon = document.getElementById("menu-icon");

let cIcon = document.getElementById("close-icon");

function openMenu() {
  x.style.display = "block";
  cIcon.style.display = "block";
  mIcon.style.display = "none";
}

function menuClose() {
  x.style.display = "none";

  mIcon.style.display = "block";
  cIcon.style.display = "none";
}
