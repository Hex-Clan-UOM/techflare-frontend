import {
  listPostFail,
  listPostRequest,
  listPostSuccess,
} from "../Actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export const listPosts = () => async (dispatch) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  try {
    dispatch(listPostRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken,
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/posts`,
      { withCredentials: true },
      config
    );

    dispatch(listPostSuccess(data.posts));
  } catch (error) {
    dispatch(listPostFail(error));
  }
};
