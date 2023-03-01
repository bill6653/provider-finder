import React, { useState } from 'react';

function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchText} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;