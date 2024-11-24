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