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

configure({ adapter: new Adapter() });

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
