let date = new Date();
let year = date.getFullYear();

document.getElementById("currentyear").innerHTML = year;

let modified = date.toLocaleString();

document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${modified}`;


// Hamburger Menu
const menuBtn = document.querySelector("#menu-button");
const mainNav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mainNav.classList.toggle("active");
});