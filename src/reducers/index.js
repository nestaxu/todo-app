import { combineReducers } from 'redux';
import categoryList, * as fromCategoryList from './categoryList'
import todoList, * as fromTodoList from './todoList'

const todoApp = combineReducers({
  categoryList,
  todoList
});

export default todoApp;

export const getCategoryList = (state) => fromCategoryList.getCategoryList(state.categoryList);

export const getTodoList = (state) => fromTodoList.getTodoList(state.todoList);

export const getCategoryByName = (state, name) => fromCategoryList.getCategoryByName(state.categoryList, name);