import { GOOGLE_OAUTH2 } from "../Actions/Types/login";

const initialState = [];

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2: {
      return action.googleResponse;
    }
    default:
      return state;
  }
};
