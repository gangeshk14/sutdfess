import React, { useState } from 'react';

// Create a SearchBar component
export default function SearchBar(props) {
  // Add state for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Called whenever the value of an input changes
  // Whenever user types smth in the input field,
  // the handleInputChange function will be called with an event
  // object containing info about the change
  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  // Filter the data and store it in a filteredData array
  const filteredData = props.data.filter(item => item.name.includes(searchQuery));

  // Return the UI for the SearchBar
  return (
    <div>
      <input type="text" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
      <ul>
        {/* 
        * Each item in array is mapped to a list item 
        * key attribute is set to the item's id property
        * name property is displayed as the text content
        * */}
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}