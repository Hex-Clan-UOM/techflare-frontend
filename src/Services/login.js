import axios from "axios";
import { loginRequest, loginSuccess, loginFail } from "../Actions/loginAction";
export const login = (idToken) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(idToken);
    const { data } = await axios.post(
      "http://localhost:5000/login",
      idToken,
      config
    );

    dispatch(loginSuccess(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(loginFail(error));
  }
};
