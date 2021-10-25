import {
  POST_UPDATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
} from "../Actions/Types/updatePost";

export const updatePostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_UPDATE_REQUEST:
      return { loading: true };
    case POST_UPDATE_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case POST_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
