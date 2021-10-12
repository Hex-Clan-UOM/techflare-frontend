import { combineReducers } from "redux";
import { FilteredPostListReducer } from "./filteredPostReducer";
import { userLoginReducer } from "./loginReducer";
import { postDetailsReducer } from "./postDetailsReducer";
import { postListReducer } from "./postReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  fetchPost: postListReducer,
  fetchFilteredPosts: FilteredPostListReducer,
  fetchSpecificPost: postDetailsReducer,
});

export default rootReducer;
