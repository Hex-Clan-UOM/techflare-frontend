import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import useStyles from "./style";

function LogoutBtn() {
  let history = useHistory();
  const logout = () => {
    console.log("logout");
    history.push("/");
  };
  const classes = useStyles();
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      onLogoutSuccess={logout}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          variant="contained"
          className={classes.btnstyle}
        >
          <Typography>Log Out</Typography>
        </Button>
      )}
    />
  );
}

export default LogoutBtn;
