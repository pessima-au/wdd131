
const inputItem = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

addButton.addEventListener('click', () => { 
    if (inputItem.value.trim() != "") {
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItem.textContent = inputItem.value;
        deleteButton.textContent = "❌";

        listItem.append(deleteButton);
        list.append(listItem);

        deleteButton.addEventListener('click', () => { 
            list.removeChild(listItem);
            inputItem.focus();
        })
        
        inputItem.value = "";
        inputItem.focus();
    } else {
        alert("Please enter a chapter name.");
    }
})