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

// Temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Baton Rouge Louisiana",
    location: "Baton Rouge, Lousiana",
    dedicated: "2019, July, 15",
    area: 10890,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/320x200/1-ea20b19384c9f98d17ef56b627c79c3a75f62cb3.jpeg",
  },
  {
    templeName: "Billings Montana",
    location: "Billings, Montana",
    dedicated: "1999, December, 20-21",
    area: 33800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/320x200/08-Billings-Montana-Temple-1781063.jpg",
  },
  {
    templeName: "Concepcion Chile",
    location: "Concepcion, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/320x200/04-Concepcion-Chile-Temple-2114385.jpg",
  },
];

// Temple Displays
function displayTemples(filteredTemples = temples) {
  const templeList = document.getElementById("temples");

  templeList.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><span class="blue">LOCATION:</span> ${temple.location}</p>
    <p><span class="blue">DEDICATED:</span> ${temple.dedicated}</p>
    <p><span class="blue">SIZE:</span> ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName} image" loading="lazy" width="400" height="350">
  `;
    templeList.appendChild(templeCard);
  });
}

displayTemples();

// Filter by buttons
document.getElementById("all").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples();
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemples = temples.filter((temple) => {
    const dedicatedDate = new Date(temple.dedicated);
    return dedicatedDate.getFullYear() < new Date(1900);
  });

  displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter((temple) => {
    const dedicatedDate = new Date(temple.dedicated);
    return dedicatedDate.getFullYear() > new Date(2000);
  });

  displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter((temple) => {
    const size = temple.area;
    return size > 90000;
  });
  displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter((temple) => {
    const size = temple.area;
    return size < 10000;
  });

  displayTemples(smallTemples)
});
