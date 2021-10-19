import LoginPage from "../Pages/Login";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { userLoginReducer } from "../Reducer/loginReducer";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Actions/Types/login";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import * as loginActions from "../Actions/loginAction";

configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
let store;
let component;
beforeEach(() => {
  store = mockStore({});
  store.clearActions();
  component = renderer.create(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
});

test("should return the initial state", () => {
  expect(userLoginReducer(undefined, {})).toEqual({});
});

test("handles login request", () => {
  expect(userLoginReducer({}, { type: USER_LOGIN_REQUEST })).toEqual({
    loading: true,
  });
});

test("handles login failure", () => {
  expect(
    userLoginReducer({}, { type: USER_LOGIN_FAIL, payload: "unable to login" })
  ).toEqual({
    loading: false,
    error: "unable to login",
  });
});

test("handles successful login", () => {
  expect(
    userLoginReducer(
      {},
      {
        type: USER_LOGIN_SUCCESS,
        payload: { id: 17 },
      }
    )
  ).toEqual({
    loading: false,
    userInfo: { id: 17 },
  });
});
test("handles user logout", () => {
  expect(userLoginReducer({}, { type: USER_LOGOUT })).toEqual({});
});

test("Dispatches the login request", () => {
  const expectedActions = [
    {
      type: USER_LOGIN_REQUEST,
    },
  ];

  store.dispatch(loginActions.loginRequest());
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the login success", () => {
  const expectedActions = [
    { payload: { id: 23, name: "Madhu" }, type: USER_LOGIN_SUCCESS },
  ];

  store.dispatch(loginActions.loginSuccess({ id: 23, name: "Madhu" }));
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the login fail", () => {
  const expectedActions = [
    {
      type: USER_LOGIN_FAIL,
      payload: "unable to login",
    },
  ];

  store.dispatch(
    loginActions.loginFail({
      response: { data: { message: "unable to login" } },
    })
  );
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the logout request", () => {
  const expectedActions = [
    {
      type: USER_LOGOUT,
    },
  ];

  store.dispatch(loginActions.logoutRequest());
  expect(store.getActions()).toEqual(expectedActions);
});
