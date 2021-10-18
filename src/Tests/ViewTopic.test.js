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

configure({ adapter: new Adapter() });

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
