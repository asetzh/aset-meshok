let addTask = document.querySelector(".task"),
  addButton = document.querySelector(".add");
todo = document.querySelector(".todo");

let todoList = [];

addButton.addEventListener("click", function () {
  let newTodo = {
    todo: addTask.value,
    checked: false,
  };

  todoList.push(newTodo);

  displayTasks();
});

function displayTasks() {
  let displayTask = "";
  todoList.forEach(function (item, i) {
    displayTask += `
    <li>
      <input type='checkbox' id="item_${i}">
      <label for="item_${i}">${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayTask;
  });
}
