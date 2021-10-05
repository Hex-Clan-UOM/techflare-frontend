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

const Index = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {userInfo && <Avatar src={userInfo.avatar} sx={{ mr: 2 }} />}
          {userInfo && (
            <Typography sx={{ flexGrow: 1 }}>{userInfo.firstName}</Typography>
          )}

          <RoundedBorderBtn
            btnText="Create Topics"
            onClick={console.log("clicked")}
          />
          <LogoutBtn />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Index;
