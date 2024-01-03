import React from "react";

function SearchBar({searchParams, setSearchParams}) {

  const handleSortChange = (event) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      sort: event.target.value,
    }));
  };

  const handleFilterChange = (event) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      filter: event.target.value,
    }));
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={searchParams.sort === "Alphabetically"}
          onChange={handleSortChange}
          />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={searchParams.sort === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={searchParams.filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
