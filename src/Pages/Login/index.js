import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import LoginBtn from "./LoginButton/index";

import useStyles from "./style";
import logo from "../../Assets/writeoutlogo.png";

const LoginPage = () => {
  const classes = useStyles();

  return (
    // <Container style={gridStyle} maxWidth="lg">

    <Grid container className={classes.gridStyle}>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Paper elevation={0} className={classes.paper}>
          <img src={logo} alt="logo" className={classes.avatar} />

          <Typography
            variant="h4"
            gutterBottom
            align="center"
            className={classes.moto}
          >
            Connecting Like-Minded People Everywhere...
          </Typography>
          <Grid align="center">
            <LoginBtn />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
