import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import TopicCard from "./TopicCard/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "material-ui-search-bar";
import { listFilteredPosts, listPosts } from "../../../Services/fetchPosts";
import Pagination from "@mui/material/Pagination";
import FilteredTopicCards from "./FilteredTopicCards/FilteredTopicCards";
import useStyles from "./style";

function TopicCards(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  const { loading, error, posts, number } = postLists;
  const filteredPostLists = useSelector((state) => state.fetchFilteredPosts);
  const { filteredPosts } = filteredPostLists;

  const [skip, setSkip] = useState(0);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState(false);
  const [value, setValue] = useState();
  const handlePageChange = (event, value) => {
    setSkip((value - 1) * 10);
    setpage(value);
  };

  useEffect(() => {
    dispatch(listPosts(skip, 10));
  }, [dispatch, skip]);

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        {/* Search Bar */}
        <SearchBar
          value={value}
          onChange={(newValue) => setValue(newValue)}
          onRequestSearch={() => {
            dispatch(listFilteredPosts(value, 0, 10));
            setsearch(true);
          }}
          className={classes.search}
        />

        {/* Topic Lists Normal/Filtered */}

        {loading ? (
          <Spinner loading={loading} size={300} />
        ) : (
          <div>
            {search ? (
              <div>
                <FilteredTopicCards filteredPosts={filteredPosts} />
                {console.log(filteredPosts.length)}
              </div>
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

            {/* Pagination */}
            <Pagination
              count={parseInt(number / 10) || 0}
              onChange={handlePageChange}
              siblingCount={4}
              page={page}
              boundaryCount={3}
              variant="outlined"
              shape="rounded"
              className={classes.pagination}
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default TopicCards;
