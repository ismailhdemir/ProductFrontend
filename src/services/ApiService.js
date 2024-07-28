const API_BASE_URL = 'https://localhost:7080/api';

const apiService = {
    get: async (url) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}${url}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    },

    post: async (url, body) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    },

    put: async (url, body) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    },

    delete: async (url) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
    },
};

export default apiService;
