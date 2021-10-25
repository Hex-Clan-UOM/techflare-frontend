import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
} from "./Types/createComment";

export const createCommentRequest = () => {
  return {
    type: CREATE_COMMENT_REQUEST,
  };
};
export const createCommentSuccess = (data) => {
  return {
    type: CREATE_COMMENT_SUCCESS,
    payload: data,
  };
};
export const createCommentFail = (error) => {
  return {
    type: CREATE_COMMENT_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
