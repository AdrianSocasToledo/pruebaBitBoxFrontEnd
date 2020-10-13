import { LOGIN_USER, LOGIN_USER_FAIL } from "./types";
import login from "../../services/userServices/login";

export const loginAction = (username, password) => {
  return async (dispatch) => {
    return await login(username, password)
      .then((response) => {
        if (response.token) {
          dispatch({
            type: LOGIN_USER,
            payload: response,
          });
        } else {
          dispatch({
            type: LOGIN_USER_FAIL,
            payload: "Credenciales incorrectas",
          });
        }
      })
      .catch((e) => console.log(e.message()));
  };
};
