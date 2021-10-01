import axios from "axios";
import {
  loginRequest,
  loginSuccess,
  loginFail,
  logoutRequest,
} from "../Actions/loginAction";

export const login = (IDToken) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/login",
      { idToken: IDToken },
      { withCredentials: true },
      config
    );
    dispatch(loginSuccess(data.user));

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch(loginFail(error));
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(logoutRequest());
};
