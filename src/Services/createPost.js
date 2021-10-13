import axios from "axios";
import {
  createPostFail,
  createPostRequest,
  createPostSuccess,
} from "../Actions/createPostAction";

export const register = (title, body) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch(createPostRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };

    const { data } = await axios.post("/post", { title, body }, config);

    dispatch(createPostSuccess(data));
  } catch (error) {
    dispatch(createPostFail(error));
  }
};
