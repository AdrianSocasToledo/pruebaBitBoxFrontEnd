import { GET_SUPPLIERS } from "../actions/types";

const suppliersReducer = (state = { suppliers: [] }, action) => {
  switch (action.type) {
    case GET_SUPPLIERS:
      return {
        ...state,
        suppliers: action.payload,
      };
    default:
      return state;
  }
};

export default suppliersReducer;
