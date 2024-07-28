import React, { useState } from "react";
import "./CreateProduct.css";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7080/api/Product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ProductName: productName,
          Price: parseFloat(productPrice), 
          StockQuantity: 0, 
          CreationDate: new Date().toISOString(), 
          ProductGroupId: 1 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product created successfully", data);
        setSuccess("Product created successfully!");
        setError(""); 
      } else {
        console.error("HTTP Error:", response.status, response.statusText);
        const errorData = await response.json();
        console.error("Product creation failed", errorData);
        setError(`Failed to create product. HTTP Error: ${response.status} ${response.statusText}`);
        setSuccess(""); 
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred.");
      setSuccess(""); 
    }
  };

  return (
    <div className="create-product-container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
        <button type="submit">Create</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default CreateProduct;
