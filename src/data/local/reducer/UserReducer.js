const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        state,
        user: action.data,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: [],
      };

    default:
      return state;
  }
};

export default UserReducer;
