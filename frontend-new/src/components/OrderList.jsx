// src/components/OrderList.jsx
import OrderCard from './OrderCard';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
