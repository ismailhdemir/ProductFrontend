import React from "react";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";
import ListProducts from "./ListProducts";
import "./Dashboard.css"; // CSS dosyasını import et

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-actions">
        <CreateProduct />
        <DeleteProduct />
        <UpdateProduct />
        <ListProducts />
      </div>
    </div>
  );
};

export default Dashboard;
