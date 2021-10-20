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
      <Card key={comment._id}>
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
      </Card>

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
