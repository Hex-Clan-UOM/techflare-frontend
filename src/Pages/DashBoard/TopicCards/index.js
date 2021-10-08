import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import Searchbar from "../Searchbar/Searchbar";

import TopicCard from "./TopicCard/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../../Services/fetchPosts";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles(() => ({
  pagination: {
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
}));

function TopicCards() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  const { loading, error, posts } = postLists;

  const [skip, setSkip] = useState(0);
  useEffect(() => {
    dispatch(listPosts(skip, 10));
  }, [dispatch, skip]);

  const handlePageChange = (event, value) => {
    setSkip((value - 1) * 10);
  };
  let count = 502;

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <Searchbar />
        {loading ? (
          <Spinner loading={loading} size={300} />
        ) : (
          <div>
            {posts.map((item) => (
              <div key={item._id}>
                <TopicCard
                  avatar={item.author.avatar}
                  author={item.author.firstName}
                  title={item.title}
                  description={item.body}
                  date={item.createdAt}
                />
              </div>
            ))}
          </div>
        )}

        <Pagination
          count={parseInt(count / 10)}
          onChange={handlePageChange}
          siblingCount={4}
          boundaryCount={3}
          variant="outlined"
          shape="rounded"
          className={classes.pagination}
        />
      </Container>
    </div>
  );
}

export default TopicCards;
