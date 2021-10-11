import { ButtonBase, CardActionArea } from "@material-ui/core";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import useStyles from "./style";

function TopicCard({ title, author, avatar, description, date }) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Card
      sx={{ mb: 2 }}
      className={classes.root}
      onClick={() => {
        history.push("/detailed");
      }}
    >
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={<Typography variant="subtitle1">{author}</Typography>}
        action={
          <Typography variant="h6" align="left">
            {title}
          </Typography>
        }
        subheader={<Typography varinat="subtitle2">{date}</Typography>}
        className={classes.header}
      />
      <CardContent className={classes.content}>
        <Typography>{description.substring(0, 200)} ... see more</Typography>
      </CardContent>
    </Card>
  );
}

export default TopicCard;
