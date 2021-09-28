import axios from "axios";
import store from "../Store/initialStore";

export function login() {
  const state = store.getState();
  return function (dispatch) {
    return axios
      .get("https://localhost:8080/login", {
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
