import { Grid, Paper } from "@material-ui/core";
import React from "react";
import NavBar from "../../Components/NavBar/index";
import TopicForm from "./TopicForm/TopicForm";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  paper: {
    margin: "auto",
    marginTop: 20,
    padding: 20,
  },
  grid: {
    margin: "auto",
    marginTop: 5,
    padding: 20,
  },
}));
function CreateTopic() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const classes = useStyles();
  return (
    <div>
      {userInfo !== null && <NavBar />}
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <TopicForm />
        </Paper>
      </Grid>
    </div>
  );
}

export default CreateTopic;
