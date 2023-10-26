const todoInpud = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const small = document.querySelector("small");
const input = document.querySelector("input");
const body = document.querySelector("body");
const moond = document.getElementById("moon");
// -----------
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", delelteCheack);
// moond.addEventListener("click", () => {
//   body.style.background = "black";
//   body.style.color = "white";
// });
// ---------------------------

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInpud.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // -----------
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  completedButton.classList.add("check-btn");
  todoDiv.appendChild(completedButton);
  //   -----------
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //   -------------
  if (input.value <= 0) {
    todoList.remove();
    small.textContent = `Text kiriting***`;
    setTimeout(() => {
      small.remove();
    }, 3000);
  } else if (input.value.trim().length <= 4) {
    small.textContent = `4 tadan kam text kiritmang***`;
    todoList.remove();
    setTimeout(() => {
      small.remove();
    }, 3000);
  }

  todoList.appendChild(todoDiv);
  // ----Clear input

  todoInpud.value = "";
}

function delelteCheack(e) {
  const item = e.target;
  // delete
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // cheack mark
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
