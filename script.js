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