import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import sample1 from "../../../../Assets/login_bg.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

function TopicCard({ topic }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar src={topic.author.avatar} />}
        title={topic.title}
        subheader={`${topic.author.firstName} ${topic.author.lastName}`}
      ></CardHeader>
      <CardContent>
        <Typography>{topic.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default TopicCard;
