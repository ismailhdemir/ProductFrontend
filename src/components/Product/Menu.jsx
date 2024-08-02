import React from 'react';
import './Menu.css';

const Menu = ({ setSelectedAction }) => {
    return (
        <nav className="menu">
            <ul>
                <li onClick={() => setSelectedAction('')}>List Products</li>
                <li onClick={() => setSelectedAction('create')}>Create Product</li>
                <li onClick={() => setSelectedAction('update')}>Update Product</li>
                <li onClick={() => setSelectedAction('delete')}>Delete Product</li>
            </ul>
        </nav>
    );
};

export default Menu;
