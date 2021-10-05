import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
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
        {loading && "loading"}
        {!loading &&
          posts.map((post) => <TopicCard topic={post} key={post._id} />)}
      </Container>
    </div>
  );
};

export default Index;
