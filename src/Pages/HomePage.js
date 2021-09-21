import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};
function HomePage() {
  return (
    <>
      <div>This is the home page</div>
      <GoogleLogin
        clientId="462420759326-mi6ca023ah3gt2ltrs3k16h1miuk3bi7.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText="SignUp with Google"
      />
    </>
  );
}

export default HomePage;
