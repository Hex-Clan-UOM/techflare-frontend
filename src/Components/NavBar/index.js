import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LogoutBtn from "./LogoutBtn";

function index() {
  return (
    <Box>
      <AppBar position="static" style={{ display: "flex" }}>
        <Toolbar>
          <LogoutBtn style={{ display: "flex", alignItems: "flex-end" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default index;
