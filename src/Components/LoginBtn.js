import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

function LoginBtn() {
  const history = useHistory();
  const SuccessResponseGoogle = (response) => {
    console.log(response);
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

  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        onSuccess={SuccessResponseGoogle}
        onFailure={FailureResponseGoogle}
        buttonText="SignUp with Google"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} style={btnstyle}>
            Login With Google
          </button>
        )}
      />
    </div>
  );
}

export default LoginBtn;
