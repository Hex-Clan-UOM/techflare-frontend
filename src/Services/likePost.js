import axios from "axios";
import {
  likePostFail,
  likePostRequest,
  likePostSuccess,
} from "../Actions/likePostAction";

export const likePost = (id) => (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch(likePostRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };
    const { data } = axios.patch(
      `${process.env.REACT_APP_URL}/post/like/${id}`,
      {},
      config
    );
    console.log(data);
    dispatch(likePostSuccess());
  } catch (error) {
    dispatch(likePostFail(error));
    console.log(error);
  }
};

export const unlikePost = (id) => (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch(likePostRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };
    const { data } = axios.patch(
      `${process.env.REACT_APP_URL}/post/unlike/${id}`,
      {},
      config
    );
    dispatch(likePostSuccess());
  } catch (error) {
    dispatch(likePostFail(error));
    console.log(error);
  }
};
