import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from "../Actions/Types/createPost";
import { USER_LOGOUT } from "../Actions/Types/login";

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { loading: true };
    case CREATE_POST_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CREATE_POST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
