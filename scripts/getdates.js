const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

document.getElementById(
  "lastModified"
).innerHTML = `Last Modified: ${document.lastModified}`;
