import React, { useState } from 'react';
import ProviderList from './components/ProviderList';

function HealthcareProviderFinder() {
  const [location, setLocation] = useState('');
  const [providerType, setProviderType] = useState('');
  const [providers, setProviders] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://api.healthcareproviders.com/providers?location=${location}&type=${providerType}`);
    const data = await response.json();
    setProviders(data);
  };

  return (
    <div>
      <h1>Find a Healthcare Provider</h1>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Provider Type:
        <select value={providerType} onChange={(e) => setProviderType(e.target.value)}>
          <option value="doctor">Doctor</option>
          <option value="dentist">Dentist</option>
          <option value="chiropractor">Chiropractor</option>
        </select>
      </label>
      <button onClick={handleSearch}>Search</button>
      <ProviderList providers={providers} />
    </div>
  );
}

export default HealthcareProviderFinder;


