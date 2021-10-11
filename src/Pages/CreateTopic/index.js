import { Paper } from "@material-ui/core";
import React from "react";
import NavBar from "../../Components/NavBar/index";
import TopicForm from "../DetailedTopic/TopicForm/TopicForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    marginTop: 20,
  },
}));
function CreateTopic() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Paper className={classes.root}>
        <TopicForm />
      </Paper>
    </div>
  );
}

export default CreateTopic;
