import React from "react";
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import useStyles from "./style";
import { Grid, Typography, CardContent, Card } from "@material-ui/core";
import { TextField } from "@mui/material";
function AddComment({ newcomment, setNewcomment, handleSubmitComment }) {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardContent>
          <Typography paragraph>Comment Section</Typography>
          <TextField
            fullWidth
            placeholder="Comment Here"
            value={newcomment}
            onChange={(e) => setNewcomment(e.target.value)}
          />
          <Grid item className={classes.grid}>
            <RoundedBorderBtn
              btnText="Cancel"
              onClick={() => {
                setNewcomment("");
              }}
              className={classes.btn}
            />
            <RoundedBorderBtn
              btnText="Submit"
              onClick={handleSubmitComment}
              className={classes.btn}
            />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddComment;
