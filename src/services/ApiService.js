
export const createProductGroup = async (newGroup) => {
    const response = await fetch('/api/product-groups', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGroup),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
