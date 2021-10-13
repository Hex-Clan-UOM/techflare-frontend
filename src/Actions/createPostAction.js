import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from "./Types/createPost";

export const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST,
  };
};
export const createPostSuccess = (data) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data,
  };
};
export const createPostFail = (error) => {
  return {
    type: CREATE_POST_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
