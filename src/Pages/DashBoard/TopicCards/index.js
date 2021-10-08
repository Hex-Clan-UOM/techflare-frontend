import { Button, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import Searchbar from "../Searchbar/Searchbar";

import TopicCard from "./TopicCard/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import { listFilteredPosts, listPosts } from "../../../Services/fetchPosts";

import Pagination from "@mui/material/Pagination";

function TopicCards(props) {
  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  const { loading, error, posts, number } = postLists;
  const filteredPostLists = useSelector((state) => state.fetchFilteredPosts);
  const { filteredPosts } = filteredPostLists;
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    dispatch(listFilteredPosts(props.value, skip, 10));
  }, [dispatch, skip]);

  useEffect(() => {
    dispatch(listPosts(skip, 10));
  }, [dispatch, skip]);

  const handlePageChange = (event, value) => {
    console.log(value);
    setSkip((value - 1) * 10);
    console.log(skip);
  };

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
        <div>
          <Pagination
            count={number}
            onChange={handlePageChange}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            className="my-3"
          />
        </div>
      </Container>
    </div>
  );
}

export default TopicCards;
