import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LogoutBtn from "./LogoutBtn";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import RoundedBorderBtn from "../RoundedBorderBtn/RoundedBorderBtn";
import useStyles from "./style";
import { useHistory } from "react-router";
const Index = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const classes = useStyles();
  let history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          {userInfo && <Avatar src={userInfo.avatar} sx={{ mr: 2 }} />}
          {userInfo && (
            <Typography sx={{ flexGrow: 1 }} className={classes.txt}>
              Hi! {userInfo.firstName}
            </Typography>
          )}

          <RoundedBorderBtn
            btnText="Create Topics"
            onClick={() => {
              history.push("/createtopic");
            }}
          />
          <LogoutBtn />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Index;
