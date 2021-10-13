import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ExpandMore } from "@material-ui/icons";
import {
  Avatar,
  Container,
  Grid,
  Typography,
  CardContent,
  Collapse,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import { TextField } from "@mui/material";
function TopicComponent({ post, author }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
          subheader={" post.createdAt.slice(0, 10)"}
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
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <Typography>Comments</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comment Section</Typography>
            <TextField fullWidth placeholder="Comment Here" />
          </CardContent>
          <Card>
            <CardHeader
              avatar={<Avatar src={author.avatar} />}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title=" jhon"
              subheader="10/02/2090"
            />
            <CardContent>
              <Typography paragraph>Nice Post!</Typography>
            </CardContent>
          </Card>
        </Collapse>
      </Card>
    </div>
  );
}

export default TopicComponent;
