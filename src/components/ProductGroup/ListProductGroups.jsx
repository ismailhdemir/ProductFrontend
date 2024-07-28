import React, { useState, useEffect } from 'react';
import apiService from '../../services/ApiService'; 

const ListProductGroups = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await apiService.get('/api/productgroup/list');
                setGroups(response.data);
            } catch (error) {
                console.error("Error fetching product groups:", error);
            }
        };
        fetchGroups();
    }, []);

    return (
        <div>
            <h2>Product Groups</h2>
            <ul>
                {groups.map((group) => (
                    <li key={group.id}>{group.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListProductGroups;
