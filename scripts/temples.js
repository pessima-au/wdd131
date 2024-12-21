document.addEventListener("DOMContentLoaded", function() {

   
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        console.log('Hamburger clicked')
        navLinks.classList.toggle("show"); 

        hamburger.innerHTML = navLinks.classList.contains("show")
            ? "&times;"
            : "&#9776;";
    });
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


