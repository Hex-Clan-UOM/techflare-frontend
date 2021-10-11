import React from "react";
import { Grid, TextField } from "@mui/material";
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
  },
  item: {
    marginTop: 10,
    marginBottom: 20,
  },
}));

function TopicForm() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root}>
        <Grid container>
          <Grid item xs={12} className={classes.item} alignItems="center">
            <TextField label="Title" variant="outlined" alignContent="center" />
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <TextField label="Text" variant="outlined" />
          </Grid>
          <RoundedBorderBtn
            btnText="Cancel"
            onClick={() => {
              console.log("cancel");
            }}
          />

          <RoundedBorderBtn
            btnText="Submit"
            onClick={() => {
              console.log("cancel");
            }}
          />
        </Grid>
      </form>
    </div>
  );
}

export default TopicForm;
