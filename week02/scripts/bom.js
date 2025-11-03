
const btn = document.querySelector("#addChap");
const input = document.querySelector("#favchap");

btn.addEventListener("click", () => {
  if (input.value.trim  != "") {
     const listItems = document.querySelector("#list");
     const lists = document.createElement("li");

     const deleteBtn = document.createElement("button");
     deleteBtn.setAttribute("aria-label", "Close");
     deleteBtn.setAttribute("id", "close-button");
     deleteBtn.textContent = "❌";

     lists.textContent = input.value;
     lists.append(deleteBtn);
     listItems.append(lists);

    input.focus();
    
    deleteBtn.addEventListener("click", () => {
      lists.remove();
    });
    input.value = "";
    input.focus();
  } 
});
