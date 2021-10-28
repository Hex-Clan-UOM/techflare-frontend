import { Container, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./style";
import TopicCard from "../../../Components/TopicCard/TopicCard";

import Spinner from "../../../Components/Spinner/Spinner";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import { useHistory } from "react-router";

function FilteredTopicCards() {
  const [skip, setSkip] = useState(0);
  const [page, setpage] = useState(1);

  const filteredPostLists = useSelector((state) => state.fetchFilteredPosts);
  const { loading, filteredPosts } = filteredPostLists;
  const handlePageChange = (event, value) => {
    setSkip((value - 1) * 10);
    setpage(value);
  };

  const classes = useStyles();
  let history = useHistory();
  return (
    <div>
      <Container sx={{ marginTop: "10" }}>
        {loading ? (
          <Spinner loading={true} />
        ) : (
          <div>
            {filteredPosts.length > 0 ? (
              <div>
                <Typography sx={{ mb: 2, mt: 2 }} variant="h5">
                  Results :
                </Typography>
                {filteredPosts.map((item) => (
                  <div key={item._id}>
                    <TopicCard
                      avatar={item.author.avatar}
                      author={item.author.firstName}
                      title={item.title}
                      description={item.body}
                      date={item.createdAt.slice(0, 10)}
                      id={item._id}
                    />
                  </div>
                ))}
                <Box
                  sx={{ bgcolor: "background.paper", p: 1 }}
                  component="footer"
                >
                  <Pagination
                    count={parseInt(filteredPosts.length / 10) || 0}
                    onChange={handlePageChange}
                    siblingCount={4}
                    page={page}
                    boundaryCount={3}
                    variant="outlined"
                    shape="rounded"
                    className={classes.pagination}
                  />
                </Box>
              </div>
            ) : (
              <Box
                sx={{
                  marginTop: 15,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  className={classes.txt}
                  variant="h4"
                  align="center"
                  gutterBottom
                >
                  There were no such topics...
                </Typography>

                <RoundedBorderBtn
                  btnText="Go Home"
                  onClick={() => {
                    history.push("/home");
                  }}
                  className={classes.btn}
                />
              </Box>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

export default FilteredTopicCards;
