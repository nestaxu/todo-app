import * as api from '../api';
import { ADD_TODO_SUCCESS, GET_TODOS_SUCCESS, REMOVE_TODO_SUCCESS, FINISH_TODO_SUCCESS } from '../reducers/todoList'
import { ADD_CATEGORY_SUCCESS, GET_CATEGORIES_SUCCESS, SELECT_CATEGORY } from '../reducers/categoryList'

export const addTodo = (description, category) => (dispatch) => {
  api.addTodo(description, category).then(response => {
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: response
    });
  });
};

export const getTodosByCategory = (category) => (dispatch) => {
  api.getTodosByCategory(category).then(response => {
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: response
    });
  });
};

export const removeTodo = (todo) => (dispatch) => {
  api.removeTodo(todo).then(response => {
    dispatch({
      type: REMOVE_TODO_SUCCESS,
      payload: response
    });
  });
};

export const finishTodo = (todo) => (dispatch) => {
  api.finishTodo(todo).then(response => {
    dispatch({
      type: FINISH_TODO_SUCCESS,
      payload: response
    });
  });
};

export const addCategory = (displayName) => (dispatch) => {
  api.addCategory(displayName).then(response => {
    dispatch({
      type: ADD_CATEGORY_SUCCESS,
      payload: response
    });
  });
};

export const getCategories = (category) => (dispatch) => {
  api.getCategories().then(response => {
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: response
    });
  });
};

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category
});