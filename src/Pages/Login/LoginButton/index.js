import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";

import { googleOAuth2 } from "../../../Actions/loginAction";
import useStyles from "./style";
import { login } from "../../../Services/login";
import { useDispatch, useSelector } from "react-redux";

const LoginBtn = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const SuccessResponseGoogle = (response) => {
    dispatch(login(response.tokenId));
    console.log(response.tokenId);
    history.push("/home");
  };
  const FailureResponseGoogle = (response) => {
    console.log(response);
  };

  const classes = useStyles();
  // console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      onSuccess={SuccessResponseGoogle}
      onFailure={FailureResponseGoogle}
      buttonText="SignUp with Google"
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          className={classes.btnstyle}
          variant="contained"
        >
          <Typography>Login With Google</Typography>
        </Button>
      )}
    />
  );
};

/*function mapStateToProps(state) {
  return {
    isSignedIn: state.login.isSignedIn,
    userId: state.login.userId,
    userName: state.login.userName,
    userProfile: state.login.userProfile,
  };
}*/

export default LoginBtn;
