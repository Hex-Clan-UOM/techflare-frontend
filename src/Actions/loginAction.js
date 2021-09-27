import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { GOOGLE_OAUTH2 } from "./Types/login";

export const googleOAuth2 = (userId) => {
  console.log(userId);
  return {
    type: GOOGLE_OAUTH2,
    payload: userId,
  };
};
