import { combineReducers } from "redux";
import { createPostReducer } from "./createPostReducer";
import { createCommentReducer } from "./createCommentReducer";
import { FilteredPostListReducer } from "./filteredPostReducer";
import { userLoginReducer } from "./loginReducer";
import { postDetailsReducer } from "./postDetailsReducer";
import { postListReducer } from "./postReducer";
import { postDeleteReducer } from "./deletePostReducer";
import { updatePostReducer } from "./updatePostReducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  fetchPost: postListReducer,
  fetchFilteredPosts: FilteredPostListReducer,
  fetchSpecificPost: postDetailsReducer,
  createPost: createPostReducer,
  createComment: createCommentReducer,
  deletePost: postDeleteReducer,
  updatePost: updatePostReducer,
});

export default rootReducer;
