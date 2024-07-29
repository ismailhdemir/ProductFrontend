import React from 'react';
import './SearchProduct.css';

const SearchProduct = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search-product-container">
      <h2>Search Product</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchProduct;
