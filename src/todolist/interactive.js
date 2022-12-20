export default function Interactive() {
  const toDoList = JSON.parse(localStorage.getItem('todo')) || [];

  const updateStatus = (checkbox, index) => {
    checkbox.addEventListener('click', (event) => {
      const actionMap = {
        'click': (target) => target.nextElementSibling.classList.add('text-decoration-line-through'),
        'unclick': (target) => target.nextElementSibling.classList.remove('text-decoration-line-through'),
      };

      const action = event.currentTarget.checked ? 'click' : 'unclick';
      const target = event.currentTarget;
      actionMap[action](target);
      toDoList[index].completed = event.currentTarget.checked;
      localStorage.setItem('todo', JSON.stringify(toDoList));
    });
  }

  const removeCompleted = (removeCompleted) => {
    removeCompleted.addEventListener('click', () => {
      toDoList = toDoList.filter((task) => task.completed !== true);
      localStorage.setItem('todo', JSON.stringify(toDoList));
      toDoList.forEach((task, index) => {
        if (task.index !== index) {
          task.index = index;
        }
      });
      localStorage.setItem('todo', JSON.stringify(toDoList));
      window.location.reload();
    });
  }
 // add event listener on reload icon
 static reload(refresh) {
  refresh.addEventListener('click', () => {
    window.location.reload();
  });
}
}
