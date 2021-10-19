import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  POST_FAIL,
  POST_LIST_REQUEST,
  POST_REQUEST,
  POST_SUCCESS,
} from "../Actions/Types/fetchPost";

import { USER_LOGOUT } from "../Actions/Types/login";
import { postDetailsReducer } from "../Reducer/postDetailsReducer";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Index from "../Pages/DetailedTopic/index";
import * as postActions from "../Actions/postAction";

configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
let store;
let component;
beforeEach(() => {
  store = mockStore({
    fetchSpecificPost: { loading: true, error: "", post: {}, author: {} },
    userLogin: { userInfo: {} },
  });
});
/*
  component = renderer.create(
    <Provider store={store}>
      <Index />
    </Provider>
  );
});*/

test("should return the initial state", () => {
  expect(postDetailsReducer(undefined, {})).toEqual({ post: {}, author: {} });
});

test("handles login request", () => {
  expect(postDetailsReducer({}, { type: POST_REQUEST })).toEqual({
    loading: true,
  });
});

test("handles login failure", () => {
  expect(
    postDetailsReducer({}, { type: POST_FAIL, payload: "unable to load" })
  ).toEqual({
    loading: false,
    error: "unable to load",
  });
});

test("handles successful login", () => {
  expect(
    postDetailsReducer(
      {},
      {
        type: POST_SUCCESS,
        payload: { id: 17 },
        payload1: { id: 52 },
      }
    )
  ).toEqual({
    loading: false,
    post: { id: 17 },
    author: { id: 52 },
  });
});
test("handles user logout", () => {
  expect(postDetailsReducer({}, { type: USER_LOGOUT })).toEqual({
    post: {},
    author: {},
  });
});
test("Dispatches the post request", () => {
  const expectedActions = [
    {
      type: POST_REQUEST,
    },
  ];

  store.dispatch(postActions.postRequest());
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the post success", () => {
  const expectedActions = [
    {
      payload: { id: 10, author: { id: 38 } },
      payload1: { id: 38 },
      type: POST_SUCCESS,
    },
  ];

  store.dispatch(postActions.postSuccess({ id: 10, author: { id: 38 } }));
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the post fail", () => {
  const expectedActions = [
    {
      type: POST_FAIL,
      payload: "unable to load",
    },
  ];

  store.dispatch(
    postActions.postFail({
      response: { data: { message: "unable to load" } },
    })
  );
  expect(store.getActions()).toEqual(expectedActions);
});
