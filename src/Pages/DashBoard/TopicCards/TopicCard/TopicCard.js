import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./style";

function TopicCard({ title, author, avatar, description, date }) {
  const classes = useStyles();
  return (
    <Card sx={{ mb: 2 }} className={classes.root}>
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
      >
        <p>hello</p>
      </CardHeader>
      <CardContent className={classes.content}>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default TopicCard;
