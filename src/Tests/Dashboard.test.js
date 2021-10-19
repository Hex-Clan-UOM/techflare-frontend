import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../Actions/Types/fetchPost";
import { USER_LOGOUT } from "../Actions/Types/login";
import DashBoard from "../Pages/DashBoard";
import { postListReducer } from "../Reducer/postReducer";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { userLoginReducer } from "../Reducer/loginReducer";
import * as postActions from "../Actions/postAction";

configure({ adapter: new Adapter() });
const mockStore = configureStore({});
let store;
let component;
beforeEach(() => {
  store = mockStore({
    userLogin: { userInfo: {} },
    fetchPost: { loading: true, error: "", posts: [] },
    fetchFilteredPosts: { filteredPosts: [] },
  });

  component = renderer.create(
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
});

test("should return the initial state", () => {
  expect(postListReducer(undefined, {})).toEqual({ posts: [], number: 0 });
});

test("handles post list request", () => {
  expect(postListReducer({}, { type: POST_LIST_REQUEST })).toEqual({
    loading: true,
    posts: [],
  });
});

test("handles post list failure", () => {
  expect(
    postListReducer({}, { type: POST_LIST_FAIL, payload: "unable to load" })
  ).toEqual({
    loading: false,
    error: "unable to load",
  });
});

test("handles successful post list", () => {
  expect(
    postListReducer(
      {},
      {
        type: POST_LIST_SUCCESS,
        payload: [{ id: 17 }, { id: 38 }],
        payload1: 18,
      }
    )
  ).toEqual({
    loading: false,
    posts: [{ id: 17 }, { id: 38 }],
    number: 18,
  });
});
test("handles user logout", () => {
  expect(postListReducer({}, { type: USER_LOGOUT })).toEqual({
    posts: [],
    number: 0,
  });
});
test("Dispatches the post list request", () => {
  const expectedActions = [
    {
      type: POST_LIST_REQUEST,
    },
  ];

  store.dispatch(postActions.listPostRequest());
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the post list success", () => {
  const expectedActions = [
    {
      payload: [{ id: 10 }, { id: 32 }],
      payload1: 19,
      type: POST_LIST_SUCCESS,
    },
  ];

  store.dispatch(
    postActions.listPostSuccess({ posts: [{ id: 10 }, { id: 32 }], number: 19 })
  );
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the post list fail", () => {
  const expectedActions = [
    {
      type: POST_LIST_FAIL,
      payload: "unable to load",
    },
  ];

  store.dispatch(
    postActions.listPostFail({
      response: { data: { message: "unable to load" } },
    })
  );
  expect(store.getActions()).toEqual(expectedActions);
});
