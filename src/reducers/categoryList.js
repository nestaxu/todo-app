export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

const categoryList = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CATEGORY_SUCCESS:
      return [
        ...state.slice(0, state.length - 1).map(category => ({ ...category, selected: false })),
        { ...payload, selected: true },
        { ...state[state.length - 1], selected: false }
      ];
    case GET_CATEGORIES_SUCCESS:
      return [
        { ...payload[0], selected: true },
        ...payload.slice(1).map(category => ({ ...category, selected: false }))
      ];
    case SELECT_CATEGORY:
      return state.map(category => ({
        ...category,
        selected: category.id === payload.id
      }));
    default:
      return state;
  }
};

export default categoryList;

export const getCategoryList = (state) => state;

export const getCategoryByName = (state, name = '') => {
  for (const category of state) {
    if (category.name === name) {
      return category;
    }
  }
  return null;
};