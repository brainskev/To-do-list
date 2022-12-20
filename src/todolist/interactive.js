export default class Interactive {
  constructor() {
    this.toDoList = JSON.parse(localStorage.getItem('todo')) || [];
  }

  // update status
  updateStatus(checkbox, index) {
    checkbox.addEventListener('click', (event) => {
      if (event.currentTarget.checked) {
        checkbox.nextElementSibling.classList.add('text-decoration-line-through');
        this.toDoList[index].completed = true;
        localStorage.setItem('todo', JSON.stringify(this.toDoList));
      } else {
        if (checkbox.nextElementSibling.classList.contains('text-decoration-line-through')) {
          checkbox.nextElementSibling.classList.remove('text-decoration-line-through');
        }
        this.toDoList[index].completed = false;
        localStorage.setItem('todo', JSON.stringify(this.toDoList));
      }
    });
  }

  // remove all completed tasks
  function removeCompletedTasks(removeCompletedButton) {
    const removeTasks = () => {
      this.toDoList = this.toDoList.filter((task) => task.completed !== true);
      this.toDoList = this.toDoList.map((task, index) => {
        return { ...task, index };
      });
      try {
        localStorage.setItem('todo', JSON.stringify(this.toDoList));
      } catch (error) {
        console.error(error);
      }
      window.location.reload();
    };
    removeCompletedButton.addEventListener('click', removeTasks);
  }
  

  // add event listener on reload icon
  static reload(refresh) {
    refresh.addEventListener('click', () => {
      window.location.reload();
    });
  }
}