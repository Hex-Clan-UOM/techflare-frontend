import {
  listPostFail,
  listPostRequest,
  listPostSuccess,
} from "../Actions/postAction";
import axios from "axios";

export const listPosts = () => async (dispatch) => {
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
      `${process.env.REACT_APP_URL}/posts`,
      config
    );

    dispatch(listPostSuccess(data));
  } catch (error) {
    dispatch(listPostFail(error));
  }
};
