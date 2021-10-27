import { postSuccess } from "../Actions/postAction";
import {
  updatePostFail,
  updatePostRequest,
  updatePostSuccess,
} from "../Actions/updatePostAction";
import axios from "axios";

export const updateProduct =
  (title, body, id) => async (dispatch, getState) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    try {
      dispatch(updatePostRequest());

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: userInfo.accessToken,
        },
      };
      const { data } = await axios.put(
        `${process.env.REACT_APP_URL}/post/${id}`,
        { title, body },
        config
      );

      dispatch(updatePostSuccess(data));
      dispatch(postSuccess(data));
    } catch (error) {
      dispatch(updatePostFail(error));
    }
  };
