import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  FILTERED_POST_LIST_FAIL,
  FILTERED_POST_LIST_REQUEST,
  FILTERED_POST_LIST_SUCCESS,
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAIL,
} from "./Types/fetchPost";

export const listPostRequest = () => {
  return { type: POST_LIST_REQUEST };
};
export const listPostSuccess = (data) => {
  return {
    type: POST_LIST_SUCCESS,
    payload: data.posts,
    payload1: data.number,
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
export const listFilteredPostRequest = () => {
  return { type: FILTERED_POST_LIST_REQUEST };
};
export const listFilteredPostSuccess = (data) => {
  return {
    type: FILTERED_POST_LIST_SUCCESS,
    payload: data,
  };
};

export const listFilteredPostFail = (error) => {
  return {
    type: FILTERED_POST_LIST_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
export const postRequest = () => {
  return { type: POST_REQUEST };
};
export const postSuccess = (data) => {
  return {
    type: POST_SUCCESS,
    payload: data.post,
    payload1: data.post.author,
    payload2: data.post.comments,
    payload3: data.post.likes,
  };
};

export const postFail = (error) => {
  return {
    type: POST_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
