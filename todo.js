const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("answer");
const addButton = document.getElementById("addButton");
let listItems = document.querySelectorAll(".listItem");

function addTodo() {
  //get to do action from input tag
  let todoAction = todoInput.value;
  if (todoAction.length <= 0) {
    return;
  }

  //add action to the todoList
  // create and li
  let todoListItem = document.createElement("li");
  todoListItem.onclick = crossOut;
  // put the value inside the li
  todoListItem.innerText = todoAction;
  todoListItem.classList.add("listItem");
  //   attach li to the todoList
  todoList.appendChild(todoListItem);
  todoInput.value = "";
}

function crossOut(e) {
  let tdec = e.target.style.textDecoration;
  if (tdec !== "line-through") {
    e.target.style.textDecoration = "line-through";
    e.target.style.opacity = "0.7";
  } else {
    e.target.style.textDecoration = "none";
    e.target.style.opacity = "1";
  }
}

addButton.addEventListener("click", addTodo);
listItems.forEach((e) => {
  e.addEventListener("click", crossOut);
});
