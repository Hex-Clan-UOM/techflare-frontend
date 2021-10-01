import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Actions/Types/login";

export const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginFail = (error) => {
  return {
    type: USER_LOGIN_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
/*export const googleOAuth2= () => (dispatch) => {}
export const fetchDocuments = () => async(dispatch) => {
    dispatch(isLoadingAllDocuments(true));

    const response = await axios.get('/api/v1/documents');

    if (response.error) {
		dispatch(showError(messages.documentsFetchError));
	} else {
		dispatch(setAllDocuments(response));
	}
    dispatch(isLoadingAllDocuments(false));
}*/
