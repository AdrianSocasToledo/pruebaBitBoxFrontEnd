import getItems from "../../services/itemServices/getItems";
import { GET_ITEMS } from "./types";

export const getItemsAction = (user) => {
  return async (dispatch) => {
    return await getItems(user).then((response) =>
      dispatch({
        type: GET_ITEMS,
        payload: response,
      })
    );
  };
};
