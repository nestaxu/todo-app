export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const FINISH_TODO_SUCCESS = 'FINISH_TODO_SUCCESS';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';

const todoList = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO_SUCCESS:
      return [...state, payload];
    case GET_TODOS_SUCCESS:
      return [...payload];
    case FINISH_TODO_SUCCESS:
    case REMOVE_TODO_SUCCESS:
      const indexToExclude = state.findIndex(todo => todo.id === payload.id);
      return [...state.slice(0, indexToExclude), ...state.slice(indexToExclude + 1)];
    default:
      return state;
  }
};

export default todoList;

export const getTodoList = (state) => state;