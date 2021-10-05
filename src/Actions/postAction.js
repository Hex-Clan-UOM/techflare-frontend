import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "./Types/fetchPost";

export const listPostRequest = () => {
  return { type: POST_LIST_REQUEST };
};
export const listPostSuccess = (data) => {
  return {
    type: POST_LIST_SUCCESS,
    payload: data,
  };
};

export const listPostFail = (error) => {
  return {
    type: POST_LIST_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
