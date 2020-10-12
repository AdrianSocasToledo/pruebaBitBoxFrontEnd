import { LOGIN_USER } from "../actions/types";

const usersReducer = (state = {}, action) => {
  console.log("REDUUUCER");
  console.log(action.payload);
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
