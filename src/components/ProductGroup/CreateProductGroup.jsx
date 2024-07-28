import React, { useState } from 'react';
import { createProductGroup } from '../../services/apiservice';
import '../../styles.css';

const CreateProductGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [error, setError] = useState(''); // Hata durumunu yönetmek için

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGroup = { name: groupName };
        try {
            await createProductGroup(newGroup);
            setGroupName('');
            setError(''); // Başarılı ise hata mesajını temizle
        } catch (error) {
            setError(error.message); // Hata mesajını göster
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
            {error && <p className="error-message">{error}</p>} {/* Hata mesajı */}
        </form>
    );
};

export default CreateProductGroup;
