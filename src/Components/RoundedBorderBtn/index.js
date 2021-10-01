import { Button, Typography } from "@mui/material";
import React from "react";

function index({ btnText, onClick }) {
  const classes = useStyles();
  return (
    <Button
      onClick={renderProps.onClick}
      variant="contained"
      className={classes.btnstyle}
    >
      <Typography>{btnText}</Typography>
    </Button>
  );
}

export default index;
