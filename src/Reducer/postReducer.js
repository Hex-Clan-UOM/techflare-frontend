import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../Actions/Types/fetchPost";
import { USER_LOGOUT } from "../Actions/Types/login";

export const postListReducer = (state = { posts: [], number: 0 }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        number: action.payload1,
      };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { posts: [], number: 0 };
    default:
      return state;
  }
};
