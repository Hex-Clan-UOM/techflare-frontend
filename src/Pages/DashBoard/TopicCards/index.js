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
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import { deletePost } from "../../../Services/deletePost";

function TopicCards(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  const { loading, error, posts, number } = postLists;
  const filteredPostLists = useSelector((state) => state.fetchFilteredPosts);

  const { filteredPosts } = filteredPostLists;
  const postDelete = useSelector((state) => state.deletePost);
  const { loading: loading1 } = postDelete;
  const [skip, setSkip] = useState(0);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState(false);
  const [value, setValue] = useState();
  const [pageLoading, setpageLoading] = useState(false);
  const handlePageChange = (event, value) => {
    setpageLoading(true);
    setSkip((value - 1) * 10);
    setpage(value);
    setpageLoading(false);
  };
  const sortedPosts = posts.slice().sort((a, b) => b.createdAt - a.createdAt);
  const sortedFilteredPosts = filteredPosts
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt);
  useEffect(() => {
    setTimeout(() => {
      dispatch(listPosts(skip, 10));
    }, 1000);
  }, [dispatch, skip]);
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deletePost(id));
  };

  return (
    <div>
      <Container sx={{ mt: 2, mb: 2 }} className={classes.root}>
        {/* Search Bar */}
        {loading1 && <Spinner loading={loading} size={300} />}

        {pageLoading ?? <Spinner loading={loading} size={300} />}
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
                <FilteredTopicCards
                  filteredPosts={sortedFilteredPosts}
                  filterLoading={sortedFilteredPosts.loading}
                />
              </div>
            ) : (
              <div>
                {sortedPosts.map((item) => (
                  <div key={item._id}>
                    <TopicCard
                      avatar={item.author.avatar}
                      author={item.author.firstName}
                      title={item.title}
                      description={item.body}
                      id={item._id}
                      date={item.createdAt.slice(0, 10)}
                    />
                    <RoundedBorderBtn
                      btnText="Delete"
                      type="delete"
                      onClick={() => {
                        deleteHandler(item._id);
                      }}
                      className={classes.btn}
                    />
                  </div>
                ))}

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
              </div>
            )}

            {/* Pagination */}
          </div>
        )}
      </Container>
    </div>
  );
}

export default TopicCards;
