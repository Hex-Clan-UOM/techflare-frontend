import { Typography } from "@mui/material";
import React from "react";
import TopicCard from "../TopicCard/TopicCard";

function FilteredTopicCards({ filteredPosts }) {
  return (
    <div>
      {filteredPosts.success ? (
        <div>
          {/* {console.log(list.filteredPosts)} */}

          {filteredPosts.data.map((item) => (
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
          <Typography>{filteredPosts.message}</Typography>
        </div>
      )}
    </div>
  );
}

export default FilteredTopicCards;
