const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'delete-button';
deleteButton.addEventListener('click', function () {
  taskList.removeChild(listItem);
});