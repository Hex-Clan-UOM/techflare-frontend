import {
  POST_FAIL,
  POST_REQUEST,
  POST_SUCCESS,
} from "../Actions/Types/fetchPost";
import { USER_LOGOUT } from "../Actions/Types/login";

export const postDetailsReducer = (
  state = { post: {}, author: {}, comments: [] },
  action
) => {
  switch (action.type) {
    case POST_REQUEST:
      return { loading: true };
    case POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        author: action.payload1,
        comments: action.payload2,
      };
    case POST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { post: {}, author: {} };
    default:
      return state;
  }
};
