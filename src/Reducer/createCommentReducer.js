import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
} from "../Actions/Types/createComment";
import { USER_LOGOUT } from "../Actions/Types/login";

export const createCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return { loading: true };
    case CREATE_COMMENT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CREATE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
