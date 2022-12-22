import { mockLocalStorage } from './mockLocalStorage.js';

export default class Todo {
  constructor(storage) {
    this.storage = storage;
    this.toDoInfo = JSON.parse(this.storage.getItem('todo'));
  }

  addToDo(toDoDescription) {
    const toDoObject = {
      description: toDoDescription,
      completed: false,
      index: this.toDoInfo.length,
    };
    this.toDoInfo.push(toDoObject);
    this.storage.setItem('todo', JSON.stringify(this.toDoInfo));
    return toDoDescription;
  }

  removeSelectedToDo(trash, index, toDoInfo) {
    trash.addEventListener('click', () => {
      toDoInfo.splice(index, 1);
      toDoInfo.forEach((task, i) => {
        if (i > index) {
          task.index -= 1;
        }
      });
      this.storage.setItem('todo', JSON.stringify(toDoInfo));
    });
  }
}