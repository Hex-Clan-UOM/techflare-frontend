import {
  POST_FAIL,
  POST_REQUEST,
  POST_SUCCESS,
} from "../Actions/Types/fetchPost";
import { USER_LOGOUT } from "../Actions/Types/login";

export const postDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return { loading: true };
    case POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
      };
    case POST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { post: {} };
    default:
      return state;
  }
};
