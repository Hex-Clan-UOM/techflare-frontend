import { Avatar, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/index";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";
import { postDetails } from "../../Services/fetchPosts";

const Index = ({ match }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.fetchSpecificPost);
  const { loading, error, post, author } = posts;
  // const post = JSON.parse(localStorage.getItem("post"));

  /*  const postLists = useSelector((state) => state.fetchPost);
  const { posts } = postLists;
  const post = posts.find((post) => post._id === match.params.id);
  localStorage.setItem("post", JSON.stringify(post));*/
  useEffect(() => {
    dispatch(postDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <div>
      <NavBar />
      {loading ? (
        <Spinner loading={loading} size={300} />
      ) : (
        <Container sx={{ mt: 3, mb: 3 }}>
          <Grid container>
            <Grid item xs={1}>
              <Avatar />
            </Grid>
            <Grid item xs={3}>
              <Typography>{author.firstName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{post.title}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography>{post.body}</Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Index;
