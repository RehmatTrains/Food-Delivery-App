// src/components/FeedbackForm.jsx
import { Form, Button } from 'react-bootstrap';

const FeedbackForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="feedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your feedback here..." />
      </Form.Group>

      <Button variant="primary" type="submit" className="button">
        Submit Feedback
      </Button>
    </Form>
  );
};

export default FeedbackForm;
