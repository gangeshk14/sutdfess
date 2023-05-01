import React, { useState } from 'react';

// Create a SearchBar component
export default function SearchBar(props) {
  // Check if SearchBar is being rendered and if the data prop is passes correctly
  // console.log('Rendering SearchBar component');
  // console.log('data prop:', props.data);

  // Add state for the search query
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = props;

  // Handle the search input changes
  function handleInputChange(event) {
    setSearchQuery(event.target.value);
    // Call the onChange handler with the new value
    props.onChange(event.target.value);
  }
  
  // Filter the data and store it in a filteredData array
  const filteredData = props.data.filter(item => item.title.includes(searchQuery));

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
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}