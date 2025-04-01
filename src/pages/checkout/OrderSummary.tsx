import React from 'react';
import { useCartStore } from '../../store/cartStore';
const OrderSummary = () => {
  const {
    items,
    getTotalPrice
  } = useCartStore();
  const shippingCost = 10.0;
  const tax = getTotalPrice() * 0.1; // 10% tax
  return <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Order Summary
      </h2>
      <div className="flow-root">
        <ul className="-my-4 divide-y divide-gray-200">
          {items.map(item => <li key={item.id} className="flex py-4">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                    <p className="ml-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Qty {item.quantity}
                </p>
              </div>
            </li>)}
        </ul>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-sm text-gray-600">Subtotal</div>
          <div className="text-sm font-medium text-gray-900">
            ${getTotalPrice().toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Shipping</div>
          <div className="text-sm font-medium text-gray-900">
            ${shippingCost.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Tax</div>
          <div className="text-sm font-medium text-gray-900">
            ${tax.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <div className="text-base font-medium text-gray-900">
            ${(getTotalPrice() + shippingCost + tax).toFixed(2)}
          </div>
        </div>
      </div>
    </div>;
};
export default OrderSummary;