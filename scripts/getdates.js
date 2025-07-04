
let date = new Date()
let year = date.getFullYear();

(document.getElementById("currentyear").innerHTML = year);

let modified = date.toLocaleString();

document.getElementById("lastModified").innerHTML = `Last Modification: ${modified}`;




