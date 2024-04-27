const  currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `Last Modified: <span>${new Intl.DateTimeFormat("en-US",
{dateStyle: "full"}).format(today)}</span>`;
