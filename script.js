const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const alertContainer = document.getElementById('alert-container');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = '';
    showAlert('success', 'Task added successfully!');
  } else {
    showAlert('error', 'Please enter a task.');
  }
});

function createTodoItem(todoText) {
  const todoItem = document.createElement('li');
  const todoTextSpan = document.createElement('span');
  const deleteButton = document.createElement('button');

  todoTextSpan.textContent = todoText;
  deleteButton.textContent = 'Delete';

  todoItem.appendChild(todoTextSpan);
  todoItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', function() {
    todoItem.remove();
    showAlert('info', 'Task deleted.');
  });

  todoTextSpan.addEventListener('click', function() {
    todoTextSpan.classList.toggle('completed');
    showAlert('info', 'Task status updated.');
  });

  return todoItem;
}

function showAlert(type, message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = message;

  alertContainer.appendChild(alertDiv);

  setTimeout(function() {
    alertDiv.remove();
  }, 2000);
}
