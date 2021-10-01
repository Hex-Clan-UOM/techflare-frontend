import { GOOGLE_OAUTH2 } from "../Actions/Types/login";

const initialState = {
  isSignedIn: null,
  userId: null,
  userName: null,
  userProfile: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2: {
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        userName: action.payload1,
        userProfile: action.payload2,
      };
    }
    default:
      return state;
  }
};
