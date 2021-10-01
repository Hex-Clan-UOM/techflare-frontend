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
            <Typography variant="h6">
              Connecting like-minded people everywhere...
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
