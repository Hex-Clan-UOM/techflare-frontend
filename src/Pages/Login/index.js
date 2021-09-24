import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import loginImage from "../../Assets/login_bg.png";

import LoginBtn from "./LoginButton/index";

const LoginPage = () => {
  const paperStyle = {
    align: "left",
    padding: 20,
    // height: "100%",
    width: 450,
    marginLeft: "2%",
    marginTop: "10%",
    marginBottom: "12%",
    backgroundcolor: "#E5E5E5",
    borderRadius: "15px",
  };

  const gridItemStyle = {
    padding: 20,
  };

  const gridStyle = {
    display: "flex",
    height: "100vh",
    background: `url(${loginImage}) center/cover no-repeat`,
  };
  return (
    // <Container style={gridStyle} maxWidth="lg">

    <Grid container style={gridStyle}>
      <Grid item style={paperStyle} xs={12} sm={6} md={4} lg={4}>
        <Paper elevation={1} style={gridItemStyle}>
          <Grid align="center">
            <Typography variant="h3" gutterBottom>
              Write Out
            </Typography>
          </Grid>
          <Grid align="justify">
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>

          <Grid align="center">
            <LoginBtn />
          </Grid>
        </Paper>
      </Grid>
    </Grid>

    // </Container>
  );
};

export default LoginPage;
