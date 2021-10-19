import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  Avatar,
  Typography,
  CardContent,
  Card,
  CardHeader,
  CardActions,
} from "@material-ui/core";
function TopicComponent({ post, author, comments }) {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar src={author.avatar} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={author.firstName}
          subheader={post.createdAt}
        />
        <CardContent>
          <Typography
            variant="h4"
            color="text.secondary"
            align="center"
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography>{comments.length} Comments</Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default TopicComponent;
