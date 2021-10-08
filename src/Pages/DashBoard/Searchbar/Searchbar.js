import React, { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import useStyles from "./style";
import { listFilteredPosts } from "../../../Services/fetchPosts";
import { useDispatch, useSelector } from "react-redux";
function Searchbar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const classes = useStyles();

  return (
    <SearchBar
      value={value}
      onChange={(newValue) => setValue(newValue)}
      onRequestSearch={() => dispatch(listFilteredPosts(value, 0, 10))}
      className={classes.root}
    />
  );
}

export default Searchbar;
