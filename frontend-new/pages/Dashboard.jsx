// src/pages/Dashboard.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import DashboardMetrics from '../components/DashboardMetrics';

const metrics = [
  { title: 'Total Food Saved', value: '1000 kg' },
  { title: 'Active NGOs', value: '20' },
  { title: 'Environmental Impact', value: '500 CO2 saved' },
];

const Dashboard = () => {
  return (
    <Container className="p-4">
      <h2>System Dashboard</h2>
      <DashboardMetrics metrics={metrics} />
    </Container>
  );
};

export default Dashboard;
