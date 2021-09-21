import React from "react";
import { Grid, Paper } from "@material-ui/core";
import loginImage from "../Images/login_bg.png";
import styled from "styled-components";
import LoginBtn from "../Components/LoginBtn";

const LoginPage = () => {
  const paperStyle = {
    align: "left",
    padding: 50,
    // height: "100%",
    width: 350,
    marginLeft: "6%",
    marginTop: "40%",
    marginBottom: "12%",
    backgroundcolor: "#E5E5E5",
    borderRadius: "15px",
  };

  const gridStyle = {
    display: "flex",
    height: "100vh",
    background: `url(${loginImage}) center/cover no-repeat`,
  };
  return (
    <Grid style={gridStyle}>
      <LoginWrapper>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h1>Write-Out</h1>
          </Grid>
          <Grid align="justify">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </Grid>

          <Grid align="center">
            <LoginBtn className="login-btn-style" />
          </Grid>
        </Paper>
      </LoginWrapper>
    </Grid>
  );
};

export default LoginPage;

const LoginWrapper = styled.div`
  h3 {
    font-size: 12px;
  }
  .login-btn-style {
    justify-content: center;
    justify-self: center;
  }
  .login-btn-style:hover {
    cursor: pointer;
  }
`;
