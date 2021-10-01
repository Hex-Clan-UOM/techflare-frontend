import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";

import { googleOAuth2 } from "../../../Actions/loginAction";
import useStyles from "./style";

const LoginBtn = ({ dispatch, isSignedIn, userId }) => {
  let history = useHistory();

  const SuccessResponseGoogle = (response) => {
    dispatch(googleOAuth2(response.tokenObj.access_token));
    console.log(response);
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

function mapStateToProps(state) {
  return {
    isSignedIn: state.login.isSignedIn,
    userId: state.login.userId,
  };
}

export default connect(mapStateToProps)(LoginBtn);
