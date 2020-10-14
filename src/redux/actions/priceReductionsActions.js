import getPriceReductions from "../../services/priceReductionServices/getPriceReductions";
import { GET_PRICE_REDUCTIONS } from "./types";

export const getPriceReductionsAction = (user) => {
  return async (dispatch) => {
    return await getPriceReductions(user).then((response) => {
      console.log(response);
      dispatch({
        type: GET_PRICE_REDUCTIONS,
        payload: response,
      });
    });
  };
};
