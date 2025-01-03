//get current year
const currentYear = document.getElementById("currentYear");

const year = new Date().getFullYear();

currentYear.textContent = year;

// const dateModified = document.getElementById("lastModified");

// const date = new Date();

lastModified.textContent = `Last modification: ${document.lastModified}`;


//wind chill calculator
function calculateWindChill(temperature, windSpeed) {
  temperature = 32;
  windSpeed = 6;

  if (temperature <= 10 && windSpeed > 4.8) {
    return (
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );
  } else {
    return "N/A";
  }
}

const windchill = (document.querySelector(".wind-chill").innerText =
  calculateWindChill());
