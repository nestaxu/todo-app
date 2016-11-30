import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  categories: [
    {id: v4(), displayName: 'All', name: ''},
    {id: v4(), displayName: 'Active', name: 'active'},
    {id: v4(), displayName: 'Done', name: 'done'}
  ],
  todos: []
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const getTodosByCategory = (category) => delay(500).then(() => {
  if (!category || !category.name) {
    return fakeDatabase.todos;
  }
  return fakeDatabase.todos.filter(todo => todo.category.id === category.id);
});

export const addTodo = (description, category) => (
  delay(500).then(() => {
    const todo = {
      id: v4(),
      description,
      category
    };
    fakeDatabase.todos.push(todo);
    return todo;
  })
);

export const removeTodo = (todoToRemove) => (
  delay(500).then(() => {
    const indexToRemove = fakeDatabase.todos.findIndex(todo => todo.id === todoToRemove.id);
    fakeDatabase.todos = [...fakeDatabase.todos.slice(0, indexToRemove), ...fakeDatabase.todos.slice(indexToRemove + 1)];
    return todoToRemove;
  })
);

export const finishTodo = (todoToFinish) => (
  delay(500).then(() => {
    todoToFinish = fakeDatabase.todos.find(todo => todo.id === todoToFinish.id);
    todoToFinish.category = fakeDatabase.categories[fakeDatabase.categories.length - 1];
    return todoToFinish;
  })
);

export const addCategory = (displayName) => (
  delay(500).then(() => {
    const category = {
      id: v4(),
      displayName,
      name: displayName.toLowerCase()
    };
    const categoryDone = fakeDatabase.categories.pop();
    fakeDatabase.categories.push(category);
    fakeDatabase.categories.push(categoryDone);
    return category;
  })
);

export const getCategories = () => delay(500).then(() => fakeDatabase.categories);
