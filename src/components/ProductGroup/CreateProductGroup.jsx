import React, { useState } from 'react';
import { createProductGroup } from '../../services/ApiService';
import '../../styles.css'; 

const CreateProductGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGroup = { name: groupName };
        try {
            await createProductGroup(newGroup);
            setGroupName('');
            setError('');
            setSuccess('Product group created successfully!');
        } catch (error) {
            setError(error.message);
            setSuccess('');
            console.error("Error creating product group:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Product Group</h2>
            <input
                type="text"
                placeholder="Product Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
            />
            <button type="submit">Create</button>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </form>
    );
};

export default CreateProductGroup;
