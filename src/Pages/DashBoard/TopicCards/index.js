import { Container } from "@mui/material";
import React from "react";
import TopicCard from "./TopicCard/TopicCard";

function index() {
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <TopicCard />
        <TopicCard />
        <TopicCard />
      </Container>
    </div>
  );
}

export default index;
