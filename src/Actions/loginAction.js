import { GOOGLE_OAUTH2 } from "./Types/login";

export const googleOAuth2 = (userId) => {
  console.log(userId);
  return {
    type: GOOGLE_OAUTH2,
    payload: userId,
  };
};
