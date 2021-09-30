import axios from "axios";
import store from "../Store/initialStore";

export function login() {
  const state = store.getState();
  return function (dispatch) {
    return axios
      .post("https://localhost:5000/login", {
        userId: state.login.userId,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
}
