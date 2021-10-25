import {
  POST_LIKE_FAIL,
  POST_LIKE_REQUEST,
  POST_LIKE_SUCCESS,
} from "./Types/likePost";

export const likePostRequest = () => {
  return {
    type: POST_LIKE_REQUEST,
  };
};
export const likePostSuccess = () => {
  return {
    type: POST_LIKE_SUCCESS,
  };
};
export const likePostFail = (error) => {
  return {
    type: POST_LIKE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
