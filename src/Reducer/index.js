import { combineReducers } from "redux";
import { userLoginReducer } from "./loginReducer";
import { postListReducer } from "./postReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  fetchPost: postListReducer,
});

export default rootReducer;
