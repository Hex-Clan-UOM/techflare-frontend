import {
  listFilteredPostFail,
  listFilteredPostRequest,
  listFilteredPostSuccess,
  listPostFail,
  listPostRequest,
  listPostSuccess,
} from "../Actions/postAction";
import axios from "axios";

export const listPosts = (skip, limit) => async (dispatch) => {
  // const userLogin = useSelector((state) => state.userLogin);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch(listPostRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/posts?skip=${skip}&limit=${limit}`,
      config
    );

    dispatch(listPostSuccess(data.posts));
  } catch (error) {
    dispatch(listPostFail(error));
  }
};
export const listFilteredPosts = (value, skip, limit) => async (dispatch) => {
  // const userLogin = useSelector((state) => state.userLogin);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch(listFilteredPostRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/posts/search?skip=${skip}&limit=${limit}`,
      { value },
      config
    );

    dispatch(listFilteredPostSuccess(data.posts));
  } catch (error) {
    dispatch(listFilteredPostFail(error));
  }
};
