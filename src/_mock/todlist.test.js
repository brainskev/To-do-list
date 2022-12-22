import Todo from './todo.js';

describe('Todo', () => {
  let todo;
  let mockStorage;

  beforeEach(() => {
    // Reset the mockStorage before each test
    mockStorage = {
      getItem: jest.fn(() => JSON.stringify([])),
      setItem: jest.fn()
    };
    todo = new Todo(mockStorage);
  });

  it('addToDo should add a new todo item', () => {
    todo.addToDo('Buy milk');

    expect(todo.toDoInfo).toEqual([{ description: 'Buy milk', completed: false, index: 0 }]);
    expect(mockStorage.setItem).toHaveBeenCalledWith('todo', '[{"description":"Buy milk","completed":false,"index":0}]');
  });

  it('removeSelectedToDo should remove the selected todo item', () => {
    todo.addToDo('Buy milk');
    todo.addToDo('Do laundry');

    const trash = {
      addEventListener: jest.fn((_, cb) => cb()),
    };

    todo.removeSelectedToDo(trash, 0, todo.toDoInfo);

    expect(todo.toDoInfo).toEqual([{ description: 'Do laundry', completed: false, index: 1 }]);
  });
});