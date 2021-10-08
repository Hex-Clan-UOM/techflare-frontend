import { combineReducers } from "redux";
import { FilteredPostListReducer } from "./filteredPostReducer";
import { userLoginReducer } from "./loginReducer";
import { postListReducer } from "./postReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  fetchPost: postListReducer,
  fetchFilteredPosts: FilteredPostListReducer,
});

export default rootReducer;
