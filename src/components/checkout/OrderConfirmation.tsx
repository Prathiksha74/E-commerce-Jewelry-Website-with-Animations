import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface OrderConfirmationProps {
  orderNumber: string;
}
const OrderConfirmation = ({
  orderNumber
}: OrderConfirmationProps) => {
  return <div className="bg-white p-6 rounded-lg shadow text-center">
      <div className="w-16 h-16 mx-auto mb-4 text-green-500">
        <CheckCircleIcon size={64} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Thank you for your order!
      </h2>
      <p className="text-gray-600 mb-4">
        Order number: <span className="font-medium">{orderNumber}</span>
      </p>
      <p className="text-sm text-gray-500 mb-6">
        We'll send you a confirmation email with your order details and tracking
        information.
      </p>
      <div className="space-y-4">
        <Link to="/" className="block w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors">
          Continue Shopping
        </Link>
        <Link to="/account/orders" className="block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
          View Order Status
        </Link>
      </div>
    </div>;
};
export default OrderConfirmation;