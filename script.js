
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
   
