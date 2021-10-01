import { combineReducers } from "redux";
import { userLoginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default rootReducer;
