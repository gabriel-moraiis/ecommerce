const INITIAL_STATE = {
  currentUser: null,
};

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const userReducer = (action, state = INITIAL_STATE) => {
  switch (action?.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action?.payload,
      };
    default:
      return state;
  }
};
