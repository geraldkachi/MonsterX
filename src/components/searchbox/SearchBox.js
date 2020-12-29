import React from "react";
import "../searchbox/searchbox.css";

const SearchBox = ({ setSearchField, search }) => {
  
  const onSearchChange = (e) => setSearchField(e.target.value)

  return (
    <input
      className="search"
      type="search"
      name="search"
      value={search}
      placeholder="search monsters"
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
