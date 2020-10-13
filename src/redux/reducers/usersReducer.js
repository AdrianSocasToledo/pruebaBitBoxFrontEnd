import { LOGIN_USER, LOGIN_USER_FAIL } from "../actions/types";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
