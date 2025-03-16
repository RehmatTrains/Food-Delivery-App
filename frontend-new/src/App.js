// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import NGOs from './pages/NGOs';
import Dashboard from './pages/Dashboard';
import AppNavbar from './components/Navbar';
import AppFooter from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <AppNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;
