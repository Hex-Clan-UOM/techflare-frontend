import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import { useSelector } from "react-redux";

import {
  Avatar,
  Typography,
  CardContent,
  Card,
  CardHeader,
} from "@material-ui/core";
import { Grid, Paper } from "@mui/material";
function Comment({ comment, userInfo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Card key={comment._id}>
        <CardHeader
          avatar={<Avatar src={comment.author.avatar} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={handleClick} aria-label="show more" />
            </IconButton>
          }
          title={comment.author.firstName}
          subheader={comment.createdAt.slice(0, 10)}
        />
        <CardContent>
          <Typography paragraph>{comment.body}</Typography>
        </CardContent>
      </Card> */}
      <Paper
        style={{
          paddingTop: "6px",
          paddingLeft: "5px",

          marginTop: "2px",
        }}
        elevation="8"
      >
        <Grid container wrap="nowrap" spacing={2} key={comment._id}>
          <Grid item>
            <Avatar alt="avatar" src={comment.author.avatar} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>
              {comment.author.firstName}
            </h4>
            <p style={{ textAlign: "left" }}>{comment.body}</p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {comment.createdAt.slice(0, 10)}
            </p>
          </Grid>
        </Grid>
      </Paper>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {userInfo._id === comment.author._id && (
          <>
            <MenuItem>
              <EditIcon fontSize="small" />
              Edit
            </MenuItem>
            <MenuItem>
              <DeleteIcon fontSize="small" />
              Delete
            </MenuItem>
          </>
        )}
        <MenuItem>
          <ReportIcon fontSize="small" />
          Report
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Comment;
