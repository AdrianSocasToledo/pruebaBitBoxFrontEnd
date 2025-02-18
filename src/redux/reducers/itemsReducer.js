import { GET_ITEMS } from "../actions/types";

const itemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
