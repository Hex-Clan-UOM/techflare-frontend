import axios from "axios";
import {
  deletePostFail,
  deletePostRequest,
  deletePostSuccess,
} from "../Actions/deletePostAction";

export const deletePost = (id) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  try {
    dispatch(deletePostRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };

    const { data } = await axios.delete(
      `${process.env.REACT_APP_URL}/post/${id}`,

      config
    );
    dispatch(deletePostSuccess());
  } catch (error) {
    dispatch(deletePostFail(error));
  }
};
