import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Services/login";
import RoundedBorderBtn from "../../RoundedBorderBtn/RoundedBorderBtn";

function LogoutBtn() {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const classes = useStyles();
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      onLogoutSuccess={handleLogout}
      render={(renderProps) => (
        // <Button
        //   onClick={renderProps.onClick}
        //   className={classes.btnstyle}
        //   variant="contained"
        // >
        //   <Typography>Log Out</Typography>
        // </Button>
        <RoundedBorderBtn btnText="Log out" onClick={renderProps.onClick} />
      )}
    />
  );
}

export default LogoutBtn;
