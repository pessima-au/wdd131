const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

document.getElementById(
  "lastModified"
).innerHTML = `Last Modified: ${document.lastModified}`;

const menuBtn = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");
});