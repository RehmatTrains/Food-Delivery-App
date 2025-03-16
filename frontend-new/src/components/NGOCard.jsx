// src/components/NGOCard.jsx
import { Card } from 'react-bootstrap';

const NGOCard = ({ ngo }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{ngo.name}</Card.Title>
        <Card.Text>Contact: {ngo.contact}</Card.Text>
        <Card.Text>Location: {ngo.location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NGOCard;
