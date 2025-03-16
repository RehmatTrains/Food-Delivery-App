// src/components/LoginForm.jsx
import { Form, Button } from 'react-bootstrap';

export default function LoginForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="password" className="mt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" className="button">
        Login
      </Button>
    </Form>
  );
}
