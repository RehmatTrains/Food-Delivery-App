// src/components/OrderTracking.jsx
import { Table } from 'react-bootstrap';

export default function OrderTracking({ orders }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>NGO</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.ngo}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
