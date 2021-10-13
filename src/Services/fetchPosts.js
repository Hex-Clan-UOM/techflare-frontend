import {
  listFilteredPostFail,
  listFilteredPostRequest,
  listFilteredPostSuccess,
  listPostFail,
  listPostRequest,
  listPostSuccess,
  postFail,
  postRequest,
  postSuccess,
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

    dispatch(listPostSuccess(data));
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
      `${process.env.REACT_APP_URL}/posts/search?value=${value}&skip=${skip}&limit=${limit}`,

      config
    );

    dispatch(listFilteredPostSuccess(data.posts));
  } catch (error) {
    console.log(error);
    dispatch(listFilteredPostFail(error));
  }
};
export const postDetails = (id) => async (dispatch) => {
  // const userLogin = useSelector((state) => state.userLogin);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  try {
    dispatch(postRequest());
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

    dispatch(postSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(postFail(error));
  }
};
