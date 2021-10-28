import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import LogoutBtn from "./LogoutBtn";
import { IconButton, MenuItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import RoundedBorderBtn from "../RoundedBorderBtn/RoundedBorderBtn";
import useStyles from "./style";
import { useHistory } from "react-router";
import logo from "../../Assets/navbarlogo.png";
import { Button } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import { listFilteredPosts } from "../../Services/fetchPosts";
const Index = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const classes = useStyles();
  let history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const menuId = "menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          history.push("/profile");
          handleMenuClose();
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
        }}
      >
        <LogoutBtn />
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            onClick={() => {
              history.push("/home");
            }}
          >
            <Avatar src={logo} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "10px" }}
          >
            Write Out
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Box sx={{ display: { md: "flex" } }}>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => {
                history.push("/createtopic");
              }}
            >
              Create Topics
            </Button>
          </Box> */}
          {/* <LogoutBtn /> */}
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            onRequestSearch={() => {
              dispatch(listFilteredPosts(value, 0, 10));
              // setsearch(true);
              history.push({
                pathname: "/filtered",
              });
            }}
            className={classes.search}
          />
          {userInfo && (
            <Typography
              variant="h5"
              sx={{ marginRight: 2 }}
              className={classes.txt}
            >
              {userInfo.firstName}
            </Typography>
          )}
          <Box sx={{ display: { xs: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {userInfo && <Avatar src={userInfo.avatar} sx={{ mr: 2 }} />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Index;
