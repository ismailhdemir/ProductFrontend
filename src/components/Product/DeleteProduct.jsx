// src/Components/Product/DeleteProduct.jsx
import React, { useState } from 'react';
import './DeleteProduct.css'; // CSS dosyasının doğru olduğundan emin olun

const DeleteProduct = () => {
    const [productId, setProductId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        console.log('Deleting product with ID:', productId);

        try {
            const response = await fetch(`https://localhost:7080/api/Product/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setMessage("Product deleted successfully.");
            } else if (response.status === 404) {
                setMessage("Product not found.");
            } else {
                setMessage("Failed to delete product.");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            setMessage("An error occurred while deleting the product.");
        }
    };

    return (
        <div className="delete-product-container">
            <h2>Delete Product</h2>
            <input
                type="text"
                placeholder="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteProduct;
