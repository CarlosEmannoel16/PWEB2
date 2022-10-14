const buttonAddTask = document.getElementById("add_tarefa");
const inputTask = document.getElementById("tarefa");
const lisEmpty = document.getElementsByClassName("lista-vazia")[0];
const todoList = document.getElementById("a-fazer");

buttonAddTask.onclick = (e) => {
  e.preventDefault();
  if (todoList.childNodes[0].class == "lista-vazia") {
    todoList.removeChild(lisEmpty);
  }
  const task = inputTask.value;
  const liTask = document.createElement("li");
  const text = document.createTextNode(task);
  liTask.appendChild(text);
  todoList.appendChild(liTask);
};

todoList.onclick = (e) => {
  alert(e.value);
};
