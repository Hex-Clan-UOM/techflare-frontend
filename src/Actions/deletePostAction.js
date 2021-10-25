import { POST_DELETE_REQUEST } from "./Types/deletePost";

export const deletePostRequest = () => {
  return {
    type: POST_DELETE_REQUEST,
  };
};
