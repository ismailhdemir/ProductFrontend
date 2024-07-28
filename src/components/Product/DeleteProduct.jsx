import React, { useState } from 'react';

const DeleteProduct = () => {
    const [productId, setProductId] = useState('');

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`https://localhost:7080/api/product/delete/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h2>Delete Product</h2>
            <input
                type="text"
                placeholder="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteProduct;
