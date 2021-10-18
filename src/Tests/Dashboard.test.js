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

configure({ adapter: new Adapter() });

test("have 10 posts", () => {
  const component = shallow(<DashBoard />);
  expect(component.find("TopicCards")).toHaveLength(10);
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
