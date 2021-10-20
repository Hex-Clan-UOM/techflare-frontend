import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import {
  Avatar,
  Typography,
  CardContent,
  Card,
  CardHeader,
  CardActions,
} from "@material-ui/core";
function TopicComponent({ post, author, comments, userInfo }) {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar src={author.avatar} />}
          action={
            <>
              {userInfo._id === author._id && (
                <>
                  <EditIcon
                    onClick={() => console.log("edit")}
                    cursor="pointer"
                  />
                  <DeleteIcon
                    onClick={() => console.log("delete")}
                    cursor="pointer"
                  />
                </>
              )}
              <ReportIcon
                onClick={() => console.log("report")}
                cursor="pointer"
              />
            </>
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
