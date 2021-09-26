import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { googleOAuth2 } from "../../../Actions/loginAction";

function LoginBtn() {
  /*const history = useHistory();
  
  const SuccessResponseGoogle = (response) => {
    console.log(response);
    history.push("/home");
  };
  const FailureResponseGoogle = (response) => {
    console.log(response);
  };*/

  const btnstyle = {
    margin: "10px 0",
    color: "#fff",
    background: "#2D4059",
    borderRadius: "5px",
    padding: "3%",
  };
  let self = this;
  function HandleAuth(props) {
    const isLoggedIn = props.isLoggedIn;
    if (!isLoggedIn) {
      return <LoggedIn />;
    }
  }

  function LoggedIn(props) {
    return <LoginModal />;
  }
  function LoginModal() {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={self.props.googleOAuth2}
        onFailure={self.props.googleOAuth2}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
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
  }
  // console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <HandleAuth
      isLoggedIn={typeof this.props.loginReducer.accessToken !== "undefined"}
    />
    /*  <GoogleLogin
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
    />*/
  );
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ googleOAuth2 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
