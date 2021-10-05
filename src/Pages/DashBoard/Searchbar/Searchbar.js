import React from "react";
import SearchBar from "material-ui-search-bar";
import useStyles from "./style";
function Searchbar() {
  const classes = useStyles();
  return (
    <SearchBar
      //   value={this.state.value}
      //   onChange={(newValue) => this.setState({ value: newValue })}
      //   onRequestSearch={() => doSomethingWith(this.state.value)}
      className={classes.root}
    />
  );
}

export default Searchbar;
