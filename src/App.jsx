import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Product/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Dashboard />} /> {/* Tüm diğer yolları Dashboard ile yakala */}
      </Routes>
    </Router>
  );
};

export default App;
