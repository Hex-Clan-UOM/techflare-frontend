import axios from "axios";
import {
  createPostFail,
  createPostRequest,
  createPostSuccess,
} from "../Actions/createPostAction";

export const createPost = (title, body) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch(createPostRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/post`,
      { title, body },
      config
    );

    dispatch(createPostSuccess(data));
  } catch (error) {
    dispatch(createPostFail(error));
  }
};
