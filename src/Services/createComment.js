import axios from "axios";
import {
  createCommentFail,
  createCommentRequest,
  createCommentSuccess,
} from "../Actions/createCommentAction";

export const createComment = (post, body) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch(createCommentRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/comment`,
      { post, body },
      config
    );

    dispatch(createCommentSuccess(data));
  } catch (error) {
    dispatch(createCommentFail(error));
  }
};
