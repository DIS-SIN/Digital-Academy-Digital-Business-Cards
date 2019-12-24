import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    let userInput= e.target.value;
    setSearchValue(userInput);
    newFunction(userInput, setSearchValue, e);
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
          onClick={handleSearchInputChanges}
         
          type="text"
        />
      </form>
    );
}

export default Search;

function newFunction(userInput, setSearchValue, e) {
  console.log(userInput);
  setSearchValue(e.target.value);
}
