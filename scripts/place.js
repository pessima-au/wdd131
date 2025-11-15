const date = new Date();

document.getElementById("currentYear").textContent = date.getFullYear();

document.getElementById(
  "lastModified"
).innerText = `Last Modified: ${document.lastModified}`;


//wind chill calculator
function calculateWindChill(temperature, windSpeed) {
  temperature = 27;
  windSpeed = 8;

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
