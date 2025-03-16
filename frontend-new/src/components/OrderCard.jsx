// src/components/OrderCard.jsx
import { Card } from 'react-bootstrap';

const OrderCard = ({ order }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Order ID: {order.id}</Card.Title>
        <Card.Text>Items: {order.items.join(', ')}</Card.Text>
        <Card.Text>Restaurant: {order.restaurant}</Card.Text>
        <Card.Text>Time: {order.time}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
