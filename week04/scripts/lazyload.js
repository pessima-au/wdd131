const currentYear = document.getElementById('currentYear');
const dateModified = document.getElementById("lastModified");

const date = new Date();

currentYear.textContent = date.getFullYear();
dateModified.textContent = `Last modification: ${date.toLocaleString()}`

