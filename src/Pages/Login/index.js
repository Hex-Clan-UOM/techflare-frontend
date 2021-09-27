import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import LoginBtn from "./LoginButton/index";

import useStyles from "./style";

const LoginPage = () => {
  const classes = useStyles();

  return (
    // <Container style={gridStyle} maxWidth="lg">

    <Grid container className={classes.gridStyle}>
      <Grid item className={classes.paper} xs={12} sm={6} md={4} lg={4}>
        <Paper elevation={1} className={classes.paper}>
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
