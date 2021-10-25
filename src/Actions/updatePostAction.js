import {
  POST_UPDATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
} from "./Types/updatePost";

export const updatePostRequest = () => {
  return {
    type: POST_UPDATE_REQUEST,
  };
};
export const updatePostSuccess = (data) => {
  return {
    type: POST_UPDATE_SUCCESS,
    payload: data,
  };
};
export const updatePostFail = (error) => {
  return {
    type: POST_UPDATE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
