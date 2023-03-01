import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProviderList from './components/ProviderList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [providers, setProviders] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // perform search query and update providers state
    setProviders([...]);
  };

  return (
    <div>
      <h1>Find Healthcare Providers</h1>
      <SearchBar onSearch={handleSearch} />
      <ProviderList providers={providers} searchQuery={searchQuery} />
    </div>
  );
}

export default App;