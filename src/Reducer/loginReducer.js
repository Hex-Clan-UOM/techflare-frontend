import { GOOGLE_OAUTH2 } from "../Actions/Types/login";

const initialState = {
  isSignedIn: null,
  userId: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2: {
      return { ...state, isSignedIn: true, userId: action.payload };
    }
    default:
      return state;
  }
};
