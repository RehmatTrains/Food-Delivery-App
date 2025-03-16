// src/components/NotificationBanner.jsx
import { Alert } from 'react-bootstrap';

export default function NotificationBanner({ message }) {
  return (
    <Alert variant="success" dismissible>
      {message}
    </Alert>
  );
}
