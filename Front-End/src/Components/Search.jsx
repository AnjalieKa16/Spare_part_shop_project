import React, { useState } from 'react';
import { spare_parts_list } from '../assets/assets';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(spare_parts_list);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    const filtered = spare_parts_list.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

    // Log the filtered results to the console
    console.log("Filtered Spare Parts List:", filtered);

    setFilteredProducts(filtered);
  };

  return (
    <div className="search-container p-4 bg-light shadow rounded mb-3">
      <h5>Search Spare Parts</h5>
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="searchInput" // Add an ID attribute here
          name="search"     // Or add a Name attribute here
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          <ul className="list-group">
            {filteredProducts.map((item, index) => (
              <li className="list-group-item" key={index}>
                <strong>{item.name}</strong><br />
                <small>{item.description}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching items found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
