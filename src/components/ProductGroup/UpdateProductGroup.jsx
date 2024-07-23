import { useState } from 'react';

const UpdateProductGroup = () => {
    const [id, setId] = useState('');
    const [newName, setNewName] = useState('');

    const handleUpdate = async () => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`http://localhost:5000/api/product-groups/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ name: newName }),
            });
        } catch (error) {
            console.error("Error updating product group:", error);
        }
    };

    return (
        <div>
            <h2>Update Product Group</h2>
            <input
                type="text"
                placeholder="Product Group ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="text"
                placeholder="New Product Group Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateProductGroup;
