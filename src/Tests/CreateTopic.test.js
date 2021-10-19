import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from "../Actions/Types/createPost";
import { USER_LOGOUT } from "../Actions/Types/login";
import { createPostReducer } from "../Reducer/createPostReducer";

import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import CreateTopic from "../Pages/CreateTopic";
import * as createPostActions from "../Actions/createPostAction";

configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
let store;
let component;
beforeEach(() => {
  store = mockStore({ userLogin: { userInfo: {} } });
});
/*
  component = renderer.create(
    <Provider store={store}>
      <CreateTopic />
    </Provider>
  );
});*/
test("should return the initial state", () => {
  expect(createPostReducer(undefined, {})).toEqual({});
});

test("handles post list request", () => {
  expect(createPostReducer({}, { type: CREATE_POST_REQUEST })).toEqual({
    loading: true,
  });
});

test("handles post list failure", () => {
  expect(
    createPostReducer({}, { type: CREATE_POST_FAIL, payload: "unable to post" })
  ).toEqual({
    loading: false,
    error: "unable to post",
  });
});

test("handles successful post list", () => {
  expect(
    createPostReducer(
      {},
      {
        type: CREATE_POST_SUCCESS,
        payload: "successfully posted",
      }
    )
  ).toEqual({
    loading: false,
    message: "successfully posted",
  });
});
test("handles user logout", () => {
  expect(createPostReducer({}, { type: USER_LOGOUT })).toEqual({});
});

test("Dispatches the create post request", () => {
  const expectedActions = [
    {
      type: CREATE_POST_REQUEST,
    },
  ];

  store.dispatch(createPostActions.createPostRequest());
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the create post success", () => {
  const expectedActions = [
    {
      payload: "post created successfully",
      type: CREATE_POST_SUCCESS,
    },
  ];

  store.dispatch(
    createPostActions.createPostSuccess("post created successfully")
  );
  expect(store.getActions()).toEqual(expectedActions);
});
test("Dispatches the create post fail", () => {
  const expectedActions = [
    {
      type: CREATE_POST_FAIL,
      payload: "unable to load",
    },
  ];

  store.dispatch(
    createPostActions.createPostFail({
      response: { data: { message: "unable to load" } },
    })
  );
  expect(store.getActions()).toEqual(expectedActions);
});
