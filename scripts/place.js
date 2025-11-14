const date = new Date();

document.getElementById("currentYear").textContent = date.getFullYear();

document.getElementById(
  "lastModified"
).innerText = `Last Modified: ${document.lastModified}`;
