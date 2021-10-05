import { Container } from "@mui/material";
import React, { useEffect } from "react";
import TopicCard from "./TopicCard/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../../Services/fetchPosts";

const Index = () => {
  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  const { loading, error, posts } = postLists;
  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <TopicCard />
        <TopicCard />
        <TopicCard />
      </Container>
    </div>
  );
};

export default Index;
