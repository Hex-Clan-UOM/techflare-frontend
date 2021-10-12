import { Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./style";

function RoundedBorderBtn({ btnText, onClick, type }) {
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      variant="contained"
      className={classes.root}
      type={type || "button"}
      disableElevation
    >
      <Typography className={classes.txt}>{btnText}</Typography>
    </Button>
  );
}

export default RoundedBorderBtn;
