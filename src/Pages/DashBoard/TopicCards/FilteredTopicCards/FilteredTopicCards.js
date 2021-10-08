import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./style";
import TopicCard from "../TopicCard/TopicCard";

function FilteredTopicCards({ filteredPosts }) {
  const classes = useStyles();
  return (
    <div>
      {filteredPosts.length > 0 ? (
        <div>
          {/* {console.log(list.filteredPosts)} */}
          <Typography sx={{ mb: 2 }}>Results :</Typography>
          {filteredPosts.map((item) => (
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
      ) : (
        <div>
          <Typography className={classes.txt} variant="h4" align="center">
            There were no such topics...
          </Typography>
        </div>
      )}
    </div>
  );
}

export default FilteredTopicCards;
