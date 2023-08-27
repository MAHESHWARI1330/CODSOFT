const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });
  }
}
