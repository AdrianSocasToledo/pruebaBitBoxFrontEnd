import getSuppliers from "../../services/supplierServices/getSuppliers";
import { GET_SUPPLIERS } from "./types";

export const getSuppliersAction = (user) => {
  return async (dispatch) => {
    return await getSuppliers(user).then((response) =>
      dispatch({
        type: GET_SUPPLIERS,
        payload: response,
      })
    );
  };
};
