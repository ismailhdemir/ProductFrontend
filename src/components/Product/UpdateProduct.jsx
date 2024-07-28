import React, { useState } from 'react';

const UpdateProduct = () => {
    const [id, setId] = useState('');
    const [newName, setNewName] = useState('');

    const handleUpdate = async () => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`https://localhost:7080/api/product/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ name: newName }),
            });
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <h2>Update Product</h2>
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
    );
};

export default UpdateProduct;
