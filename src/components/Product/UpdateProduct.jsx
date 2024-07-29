import React, { useState } from 'react';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const [id, setId] = useState('');
    const [newName, setNewName] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleUpdate = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`https://localhost:7080/api/product/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ name: newName }),
            });

            if (response.ok) {
                setSuccess("Product updated successfully!");
                setError('');
            } else {
                const errorData = await response.json();
                setError("Failed to update product: " + errorData.message);
                setSuccess('');
            }
        } catch (error) {
            console.error("Error updating product:", error);
            setError("An unexpected error occurred.");
            setSuccess('');
        }
    };

    return (
        <div className="update-product-container">
            <h2>Update Product</h2>
            <div className="update-product-form">
                <input
                    type="text"
                    placeholder="Product ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="New Product Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
            </div>
            {success && <p className="update-product-message success">{success}</p>}
            {error && <p className="update-product-message error">{error}</p>}
        </div>
    );
};

export default UpdateProduct;
