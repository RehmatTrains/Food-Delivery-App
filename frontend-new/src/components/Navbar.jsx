// src/components/Navbar.jsx
import React from 'react';

const AppNavbar = () => {
  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout clicked');
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand text-warning">Food Rescue System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/orders" className="nav-link nav-link-style">Cancelled Orders</a>
            </li>
            <li className="nav-item">
              <a href="/ngos" className="nav-link nav-link-style">NGO Partners</a>
            </li>
            <li className="nav-item">
              <a href="/dashboard" className="nav-link nav-link-style">Dashboard</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-link nav-link-style">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
