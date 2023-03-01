import React from 'react';

function ProviderList(props) {
  const filteredProviders = props.providers.filter(provider =>
    provider.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  );

  return (
    <ul>
      {filteredProviders.map(provider => (
        <li key={provider.id}>
          {provider.name}
        </li>
      ))}
    </ul>
  );
}

export default ProviderList;