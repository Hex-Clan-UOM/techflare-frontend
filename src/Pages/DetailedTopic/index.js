import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/index";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";
import { postDetails } from "../../Services/fetchPosts";
import TopicComponent from "./TopicComponent/TopicComponent";
import RoundedBorderBtn from "../../Components/RoundedBorderBtn/RoundedBorderBtn";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Comment from "./TopicComponent/Comment";
import { Typography } from "@material-ui/core";
import AddComment from "./TopicComponent/AddComment";
import { createComment } from "../../Services/createComment";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto !important",
  },
  btn: {
    marginTop: "10px !important",
    marginBottom: "20px",
  },
  post: {
    margin: "auto",
  },
}));
const Index = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.fetchSpecificPost);
  const { loading, error, post, comments, author, likes } = posts;
  const [newcomment, setNewcomment] = React.useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const post = JSON.parse(localStorage.getItem("post"));

  /*  const postLists = useSelector((state) => state.fetchPost);
  const { posts } = postLists;
  const post = posts.find((post) => post._id === match.params.id);
  localStorage.setItem("post", JSON.stringify(post));*/
  useEffect(() => {
    dispatch(postDetails(match.params.id));
  }, [dispatch, match]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(createComment(post._id, newcomment));
    dispatch(postDetails(match.params.id));
    setNewcomment("");
  };

  let history = useHistory();
  return (
    <div>
      <NavBar />
      {loading ? (
        <Spinner loading={loading} size={300} />
      ) : (
        <Container className={classes.root}>
          <RoundedBorderBtn
            btnText="Go Back"
            onClick={() => {
              history.goBack();
            }}
            className={classes.btn}
          />
          <TopicComponent
            post={post}
            author={author}
            comments={comments}
            className={classes.post}
            userInfo={userInfo}
            likes={likes}
          />
          <AddComment
            handleSubmitComment={handleSubmitComment}
            newcomment={newcomment}
            setNewcomment={setNewcomment}
          />
          {comments.map((comment) => {
            return (
              <Comment
                comment={comment}
                key={comment._id}
                userInfo={userInfo}
              />
            );
          })}
        </Container>
      )}
    </div>
  );
};

export default Index;
