import { useState } from "react";
export default function SearchForm({onSearch, searchTerm}) {
  // const searchTerm = "";

  // const [searchTerm, setSearchTerm] = useState('') 

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements

    onSearch(formElements.searchTerm.value) 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input 
          name="searchTerm" 
          id="searchTerm" 
          // value={searchTerm}
          // onChange={(event) => { setSearchTerm(event.target.value)}}
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
