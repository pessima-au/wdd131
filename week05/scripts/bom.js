
const inputItem = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

addButton.addEventListener('click', () => { 
    if (inputItem.value.trim() != "") {
        displayList(inputItem.value);
        chapterArray.push(inputItem.value);
        setChapterList();

         inputItem.value = "";
         inputItem.focus();
       
    } else {
        alert("Please enter a chapter name.");
    }
})

function displayList(item) {
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  listItem.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-button");
  listItem.append(deleteButton);
  list.append(listItem);
  deleteButton.addEventListener('click', () => {
      list.removeChild(listItem);
      deleteChapter(listItem.textContent)
      inputItem.focus();
  })
}

function setChapterList() {
    localStorage.setItem("chapterList", JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("chapterList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}




