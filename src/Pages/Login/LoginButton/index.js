import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { googleOAuth2 } from "../../../Actions/loginAction";

const LoginBtn = ({ dispatch, isSignedIn, userId }) => {
  const history = useHistory();

  const SuccessResponseGoogle = (response) => {
    dispatch(googleOAuth2(response.tokenObj.access_token));
    history.push("/home");
  };
  const FailureResponseGoogle = (response) => {
    console.log(response);
  };

  const btnstyle = {
    margin: "10px 0",
    color: "#fff",
    background: "#2D4059",
    borderRadius: "5px",
    padding: "3%",
  };

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
          style={btnstyle}
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
