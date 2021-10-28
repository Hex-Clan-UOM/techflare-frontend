import React from "react";
import Navbar from "../../Components/NavBar/index";
import FilteredTopicCards from "./FilteredTopicCards/FilteredTopicCards";
function FilteredTopics() {
  return (
    <div>
      <Navbar />
      <FilteredTopicCards />
    </div>
  );
}

export default FilteredTopics;
