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

function TopicCard() {
  return (
    <Card>
      <CardHeader avatar={<Avatar src={sample1} />} title="Jhon">
        <Typography>Topic 1</Typography>
      </CardHeader>
      <CardContent>
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed possimus
          porro repellat quod nulla, iusto quasi non, animi alias magni
          consequuntur suscipit iste illum fugit optio quisquam in. Distinctio,
          quo.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TopicCard;
