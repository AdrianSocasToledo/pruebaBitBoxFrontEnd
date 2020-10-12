import { LOGIN_USER } from "./types";
import login from "../../services/userServices/login";

export const loginAction = (username, password) => {
  return async (dispatch) => {
    return await login(username, password).then((response) =>
      dispatch({
        type: LOGIN_USER,
        payload: response,
      })
    );
  };
};
