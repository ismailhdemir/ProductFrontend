import React, { useState } from 'react';
import ListProducts from './ListProducts';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import Menu from './Menu';
import './Dashboard.css';

const Dashboard = () => {
    const [selectedAction, setSelectedAction] = useState('');

    const renderActionContent = () => {
        switch (selectedAction) {
            case 'create':
                return <CreateProduct />;
            case 'update':
                return <UpdateProduct />;
            case 'delete':
                return <DeleteProduct />;
            default:
                return null; // Varsayılan durumda hiçbir içerik render edilmez
        }
    };

    return (
        <div className="dashboard-container">
            <Menu setSelectedAction={setSelectedAction} />
            <div className="content">
                <ListProducts />
                {/* Diğer içerikler ListProducts'ın altında render edilir */}
                {renderActionContent()}
            </div>
        </div>
    );
};

export default Dashboard;
