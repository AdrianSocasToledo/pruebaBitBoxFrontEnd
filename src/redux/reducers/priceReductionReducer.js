import { GET_PRICE_REDUCTIONS } from "../actions/types";

const priceReductionReducer = (state = { priceReductions: [] }, action) => {
  switch (action.type) {
    case GET_PRICE_REDUCTIONS:
      return {
        ...state,
        priceReductions: action.payload,
      };
    default:
      return state;
  }
};

export default priceReductionReducer;
