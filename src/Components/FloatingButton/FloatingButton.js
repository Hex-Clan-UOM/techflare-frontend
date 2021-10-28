import { Typography, Zoom } from "@mui/material";
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router";
export default function FloatingButton({}) {
  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };
  const fab = {
    color: "#2D4059",
    sx: fabStyle,
    icon: <AddIcon />,
    label: "Add",
  };

  let history = useHistory();
  return (
    <div>
      <Fab
        sx={fab.sx}
        aria-label={fab.label}
        color={fab.color}
        onClick={() => {
          history.push("/createtopic");
        }}
      >
        {fab.icon}
      </Fab>
    </div>
  );
}
