import { GOOGLE_OAUTH2 } from "./Types/login";

export const googleOAuth2 = (userId, userName, userProfile) => {
  console.log(userId);
  return {
    type: GOOGLE_OAUTH2,
    payload: userId,
    payload1: userName,
    payload2: userProfile,
  };
};
