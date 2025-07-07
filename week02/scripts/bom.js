const inputItem = document.querySelector('favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('ul');

const listItem = document.createElement('li');
const deleteButton = document.createElement('button');

listItem.textContent = inputItem.value;
deleteButton.textContent = "❌";

listItem.append(deleteButton);
list.append(listItem);

