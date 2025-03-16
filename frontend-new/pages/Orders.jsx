// src/pages/Orders.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import OrderList from '../components/OrderList';

const orders = [
  { id: 1, items: ['Pizza', 'Burger'], restaurant: 'Example Restaurant', time: '10:00 AM' },
  { id: 2, items: ['Salad', 'Sandwich'], restaurant: 'Another Restaurant', time: '11:00 AM' }
];

const Orders = () => {
  return (
    <Container className="p-4">
      <h2>Cancelled Orders</h2>
      <OrderList orders={orders} />
    </Container>
  );
};

export default Orders;
