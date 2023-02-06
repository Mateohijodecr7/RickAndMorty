import React from "react";
import styles from "./SearchStyle.css";

const Search = () => {
  return (
    <form onsubmit="event.preventDefault();" role="search">
  <label for="search">Search for stuff</label>
  <input id="search" type="search" placeholder="Search..."/>
  <button type="submit">Go</button>    
</form>
  );
};

export default Search;