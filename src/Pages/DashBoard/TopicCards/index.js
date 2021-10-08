import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import Searchbar from "../Searchbar/Searchbar";

import TopicCard from "./TopicCard/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import { listFilteredPosts, listPosts } from "../../../Services/fetchPosts";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@mui/material/Pagination";
import FilteredTopicCards from "./FilteredTopicCards/FilteredTopicCards";

const useStyles = makeStyles({});
function TopicCards(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  const { loading, error, posts, number } = postLists;
  const filteredPostLists = useSelector((state) => state.fetchFilteredPosts);
  const { filteredPosts } = filteredPostLists;

  // console.log(number);
  const [skip, setSkip] = useState(0);

  // useEffect(() => {
  //   dispatch(listFilteredPosts(props.value, skip, 10));
  // }, [dispatch, skip]);

  useEffect(() => {
    dispatch(listPosts(skip, 10));
  }, [dispatch, skip]);

  const handlePageChange = (event, value) => {
    setSkip((value - 1) * 10);
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <Searchbar />

        {loading ? (
          <Spinner loading={loading} size={300} />
        ) : (
          <div>
            {typeof filteredPosts === "undefined" ? (
              <FilteredTopicCards filteredPosts={filteredPosts} />
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
              count={parseInt(number / 10) || 0}
              onChange={handlePageChange}
              siblingCount={4}
              boundaryCount={3}
              variant="outlined"
              shape="rounded"
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default TopicCards;
