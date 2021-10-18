import LoginPage from "../Pages/Login";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { userLoginReducer } from "../Reducer/loginReducer";
import * as actions from "../Actions/loginAction";

configure({ adapter: new Adapter() });

test("have a login button", () => {
  const component = shallow(<LoginPage />);
  expect(component.find("LoginBtn")).toHaveLength(1);
});
test("have a logo", () => {
  const component = shallow(<LoginPage />);
  expect(component.find("img")).toHaveLength(1);
});

describe("team reducer", () => {
  it("should return the initial state", () => {
    expect(userLoginReducer(undefined, {})).toEqual({});
  });
  it("should handle USER_LOGIN_REQUEST", () => {
    const startAction = {
      type: actions.USER_LOGIN_REQUEST,
    };
    expect(userLoginReducer({}, startAction)).toEqual({});
  });
  it("should handle USER_LOGIN_SUCCESS", () => {
    const successAction = {
      type: actions.USER_LOGIN_SUCCESS,
      userInfo: {},
    };
    expect(userLoginReducer({}, successAction)).toEqual({});
  });
  it("should handle USER_LOGIN_FAIL", () => {
    const failAction = {
      type: actions.USER_LOGIN_FAIL,
      error: {},
    };
    expect(userLoginReducer({}, failAction)).toEqual({});
  });
});
