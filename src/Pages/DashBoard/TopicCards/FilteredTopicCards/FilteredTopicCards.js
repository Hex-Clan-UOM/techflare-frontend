import { Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./style";
import TopicCard from "../TopicCard/TopicCard";
import Spinner from "../../../../Components/Spinner/Spinner";

function FilteredTopicCards({ filteredPosts, filterLoading }) {
  const [skip, setSkip] = useState(0);
  const [page, setpage] = useState(1);
  const handlePageChange = (event, value) => {
    setSkip((value - 1) * 10);
    setpage(value);
  };
  const classes = useStyles();
  return (
    <div>
      {filterLoading ? (
        <Spinner loading={true} />
      ) : (
        <div>
          {filteredPosts.length > 0 ? (
            <div>
              <Typography sx={{ mb: 2 }} variant="h5">
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
                  />
                </div>
              ))}
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
            </div>
          ) : (
            <div>
              <Typography className={classes.txt} variant="h4" align="center">
                There were no such topics...
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FilteredTopicCards;
