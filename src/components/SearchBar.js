import React, { useState, useEffect } from 'react';

// Create a SearchBar component
export default function SearchBar(props) {

  // searchQuery holds user's input in search bar
  const [searchQuery, setSearchQuery] = useState('');
  // filteredData holds data that matches user's search query
  const [filteredData, setFilteredData] = useState([]);

  // Watch for changes in the props.data and update the filderedData state accordingly
  useEffect(() => {
    const filtered = props.data?.filter(item => item.title.includes(searchQuery));
    setFilteredData(filtered || []);
  }, [props.data, searchQuery]);

  useEffect(() => {
    setSearchQuery(props.searchQuery || '');
  }, [props.searchQuery]);

  // Called whenever user types into search bar
  function handleInputChange(event) {
    setSearchQuery(event.target.value);
    // Call the onChange handler with the new value if it is defined
    if (typeof props.onChange === 'function') {
      props.onChange(event.target.value);
    }
  }
  
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}