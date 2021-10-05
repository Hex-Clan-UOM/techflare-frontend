import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const middleware = [thunk];
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },

};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
