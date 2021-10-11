import { Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./style";

function RoundedBorderBtn({ btnText, onClick }) {
  const classes = useStyles();
  return (
    <Button onClick={onClick} variant="contained" className={classes.root}>
      <Typography className={classes.txt}>{btnText}</Typography>
    </Button>
  );
}

export default RoundedBorderBtn;
