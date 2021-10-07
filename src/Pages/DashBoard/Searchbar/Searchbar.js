import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import useStyles from "./style";

function Searchbar() {
  // const { word } = this.state;
  const classes = useStyles();
  return (
    <SearchBar
    // value={word}
    // //   onChange={(newValue) => this.setState({ value: newValue })}
    // onRequestSearch={() => console.log(word)}
    // className={classes.root}
    />
  );
}

export default Searchbar;
