const todoList = document.querySelector('.todo-list');
const toDoInfo = [
  {
    description: 'Go to school',
    status: false,
    index: 1,
  },
  {
    description: 'Get milk',
    status: false,
    index: 2,
  },
  {
    description: 'Watch football match',
    status: false,
    index: 3,
  },
  {
    description: 'Take nap',
    status: false,
    index: 4,
  },

];

function createToDo(toDoValue) {
  const listItem = document.createElement('li');
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('d-flex', 'py-1', 'container', 'align-items-center', 'justify-content-between');
  const listDescription = document.createElement('input');
  listDescription.classList.add('container', 'inputvalue', 'border-0', 'my-auto');
  listDescription.value = toDoValue;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  const threeDots = document.createElement('span');
  threeDots.classList.add('pe-1', 'fs-2', 'threedots');
  const trash = document.createElement('span');
  trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 15 15">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`;
  trash.classList.add('d-none');
  threeDots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 15 15">
            1<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>`;
  const horizontalLine = document.createElement('hr');
  toDoDiv.append(checkbox, listDescription, threeDots, trash);
  listItem.append(toDoDiv, horizontalLine);
  todoList.appendChild(listItem);
}

export default function displayToDos() {
  toDoInfo.forEach((task) => {
    createToDo(task.description);
  });
}
