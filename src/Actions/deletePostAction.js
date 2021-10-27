import {
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
} from "./Types/deletePost";

export const deletePostRequest = () => {
  return {
    type: POST_DELETE_REQUEST,
  };
};
export const deletePostSuccess = () => {
  return {
    type: POST_DELETE_SUCCESS,
  };
};
export const deletePostFail = (error) => {
  return {
    type: POST_DELETE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
