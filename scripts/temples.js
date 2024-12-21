document.addEventListener("DOMContentLoaded", function() {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

  
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        console.log('Hamburger clicked')
        navLinks.classList.toggle("show"); 

        if (navLinks.classList.contains("show")) {
            hamburger.innerHTML = "&times;"; 
        } else {
            hamburger.innerHTML = "&#9776;"; 
        }
    });
});
