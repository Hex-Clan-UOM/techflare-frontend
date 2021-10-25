import axios from "axios";
import { deletePostRequest } from "../Actions/deletePostAction";

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

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/post/${id}`,

      config
    );
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};
