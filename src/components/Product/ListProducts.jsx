import React, { useState, useEffect } from 'react';
import apiService from '../../services/ApiService'; // Doğru dosya adı ve yolunu kullandığınızdan emin olun

const ListProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiService.get('/api/product/list');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListProducts;
