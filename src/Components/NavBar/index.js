import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LogoutBtn from "./LogoutBtn";
import sample from "../../Assets/login_bg.png";
import { Typography } from "@mui/material";

function index() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar src={sample} sx={{ mr: 2 }} />
          <Typography sx={{ flexGrow: 1 }}>Hi, Jhon</Typography>
          <Button variant="contained" sx={{ mr: 2 }}>
            <Typography>Create Topics</Typography>
          </Button>
          <LogoutBtn />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default index;
