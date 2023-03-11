import { CATEGORIES_TYPES } from './category.types';

const INITIAL_STATE = {
  currentCategories: [],
};

export const categoriesReducer = (action, state = INITIAL_STATE) => {
  switch (action?.type) {
    case CATEGORIES_TYPES.SET_CATEGORIES:
      return {
        ...state,
        currentCategories: action?.payload,
      };
    default:
      return state;
  }
};
