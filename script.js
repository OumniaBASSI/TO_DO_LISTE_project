
function editTask(taskContent) {
    const newText = prompt('Edit your task:', taskContent.textContent);
    if (newText !== null) {
      taskContent.textContent = newText;
    }
}
  
document.getElementById('taskList').addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-button')) {
      const taskContent = event.target.previousElementSibling;
      editTask(taskContent);
      }
    });
  // Add the Edit button while creating a task
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.className = 'edit-button';
listItem.appendChild(editButton);
=======

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'delete-button';
deleteButton.addEventListener('click', function () {
  taskList.removeChild(listItem);
});
=======

const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => button.addEventListener('click', function (event) {
  const filter = event.target.dataset.filter;
  const tasks = taskList.children;

  for (const task of tasks) {
    const isCompleted = task.classList.contains('completed');
    task.style.display =
      filter === 'all' ||
      (filter === 'completed' && isCompleted) ||
      (filter === 'pending' && !isCompleted)
        ? 'flex'
        : 'none';
  }
}));

document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');
  
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = ''; // Clear input field
}
   

