import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import useStyles from "./style";

function LoginBtn() {
  const history = useHistory();
  const SuccessResponseGoogle = (response) => {
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
}

export default LoginBtn;
