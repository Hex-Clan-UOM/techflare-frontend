import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import TopicCard from "../../../Components/TopicCard/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "material-ui-search-bar";
import { listFilteredPosts, listPosts } from "../../../Services/fetchPosts";
import Pagination from "@mui/material/Pagination";
import FilteredTopicCards from "../../FilteredTopic/FilteredTopicCards/FilteredTopicCards";
import useStyles from "./style";
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import { deletePost } from "../../../Services/deletePost";
import { Box } from "@mui/system";
import { useHistory } from "react-router";

function TopicCards(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  const { loading, error, posts, number } = postLists;

  // const { filteredPosts } = filteredPostLists;
  const postDelete = useSelector((state) => state.deletePost);
  const { loading: loading1 } = postDelete;
  const [skip, setSkip] = useState(0);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState(false);

  const [pageLoading, setpageLoading] = useState(false);
  const handlePageChange = (event, value) => {
    setpageLoading(true);
    setSkip((value - 1) * 10);
    setpage(value);
    setpageLoading(false);
  };
  const sortedPosts = posts.slice().sort((a, b) => b.createdAt - a.createdAt);
  // const sortedFilteredPosts = filteredPosts
  //   .slice()
  //   .sort((a, b) => b.createdAt - a.createdAt);
  useEffect(() => {
    setTimeout(() => {
      dispatch(listPosts(skip, 10));
    }, 1000);
  }, [dispatch, skip]);
  const history = useHistory();
  return (
    <div>
      <Container sx={{ mt: 2, mb: 2 }} className={classes.root}>
        {/* Search Bar */}
        {loading1 && <Spinner loading={loading} size={300} />}

        {pageLoading ?? <Spinner loading={loading} size={300} />}

        {/* Topic Lists Normal/Filtered */}

        {loading ? (
          <Spinner loading={loading} size={300} />
        ) : (
          <div>
            {/* <div>
              <FilteredTopicCards
                filteredPosts={sortedFilteredPosts}
                filterLoading={sortedFilteredPosts.loading}
              />
            </div> */}

            {sortedPosts.map((item) => (
              <div key={item._id}>
                <TopicCard
                  avatar={item.author.avatar}
                  author={item.author.firstName}
                  title={item.title}
                  description={item.body}
                  id={item._id}
                  date={item.created}
                />
              </div>
            ))}
            <Box sx={{ bgcolor: "background.paper", p: 2 }} component="footer">
              <Pagination
                count={Math.ceil(number / 10) || 0}
                onChange={handlePageChange}
                siblingCount={4}
                page={page}
                boundaryCount={3}
                variant="outlined"
                shape="rounded"
                className={classes.pagination}
              />
            </Box>

            {/* Pagination */}
          </div>
        )}
      </Container>
    </div>
  );
}

export default TopicCards;
