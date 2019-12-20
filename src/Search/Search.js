import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    callSearchFunction(searchValue)
  }
  

  const callSearchFunction = (e) => {
    
    props.search(searchValue);
    
  }

  return (
      <form className="search">
        <label for="name">Search for a specfic person here: </label>
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        
      </form>
    );
}

export default Search;