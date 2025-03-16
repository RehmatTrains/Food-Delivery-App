
// src/components/SignupForm.jsx
import { Form } from 'react-bootstrap';

export default function SignupForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <button type="submit" className="btn btn-primary">Signup</button>
    </Form>
  );
}
