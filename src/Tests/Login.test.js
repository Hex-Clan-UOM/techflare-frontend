import LoginPage from "../Pages/Login";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { userLoginReducer } from "../Reducer/loginReducer";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../Actions/Types/login";

configure({ adapter: new Adapter() });

test("have a login button", () => {
  const component = shallow(<LoginPage />);
  expect(component.find("LoginBtn")).toHaveLength(1);
});
test("have a logo", () => {
  const component = shallow(<LoginPage />);
  expect(component.find("img")).toHaveLength(1);
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
