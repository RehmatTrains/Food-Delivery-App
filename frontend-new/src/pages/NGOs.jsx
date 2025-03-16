// src/pages/NGOs.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import NGOList from '../components/NGOList';

const ngos = [
  { id: 1, name: 'NGO1', contact: '1234567890', location: 'Location1' },
  { id: 2, name: 'NGO2', contact: '9876543210', location: 'Location2' }
];

const NGOs = () => {
  return (
    <Container className="p-4">
      <h2>NGO Partners</h2>
      <NGOList ngos={ngos} />
    </Container>
  );
};

export default NGOs;
