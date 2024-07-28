import React, { useState } from 'react';

const DeleteProductGroup = () => {
    const [groupId, setGroupId] = useState('');

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`https://localhost:7080/api/productgroup/delete/${groupId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error("Error deleting product group:", error);
        }
    };

    return (
        <div>
            <h2>Delete Product Group</h2>
            <input
                type="text"
                placeholder="Product Group ID"
                value={groupId}
                onChange={(e) => setGroupId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteProductGroup;
