import {
  listPostFail,
  listPostRequest,
  listPostSuccess,
} from "../Actions/postAction";
import axios from "axios";

export const listPosts = () => async (dispatch) => {
  // const userLogin = useSelector((state) => state.userLogin);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { accessToken } = userInfo;
  try {
    dispatch(listPostRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    console.log(config);
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/posts`,
      config
    );
    console.log(data);

    dispatch(listPostSuccess(data));
  } catch (error) {
    dispatch(listPostFail(error));
  }
};
