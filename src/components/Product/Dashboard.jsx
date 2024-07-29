import React, { useState } from 'react';
import CreateProduct from './CreateProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';
import ListProducts from './ListProducts';
import SearchProduct from './SearchProduct';
import './Dashboard.css';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://localhost:7080/api/Product?search=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Search failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-actions">
        <SearchProduct
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <CreateProduct />
        <DeleteProduct />
        <UpdateProduct />
        <ListProducts products={products} />
      </div>
    </div>
  );
};

export default Dashboard;
