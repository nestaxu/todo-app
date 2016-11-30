// custom implementation of Redux

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};

export const createStore = (rootReducer, applyMiddleware) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = rootReducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  const store = { getState, dispatch, subscribe };

  applyMiddleware(store);

  return store;
};

export const applyMiddleware = (...middlewareList) => (store) => {
  middlewareList.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch);
  });
};

export const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
};