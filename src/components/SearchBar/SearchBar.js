import React from "react";

const SearchBar = props => {
  return (
    <input
      type="text"
      id="searchTodos"
      name="searchTodos"
      className="searchTodos"
      placeholder="Search..."
      onChange={props.onSearchChange}
      value={props.value}
    />
  );
};

export default SearchBar;
