import React from 'react';
import { XIcon } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import CartItem from './CartItem';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
const CartSlideOver = () => {
  const {
    isOpen,
    setIsOpen,
    items,
    getTotalPrice
  } = useCartStore();
  const navigate = useNavigate();
  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsOpen(false)} />
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="w-screen max-w-md transform transition-all ease-in-out duration-500">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex items-start justify-between p-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Shopping Cart
                </h2>
                <button className="rounded-md p-2 text-gray-400 hover:text-gray-500" onClick={() => setIsOpen(false)}>
                  <XIcon size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6">
                {items.length === 0 ? <p className="text-center text-gray-500 mt-8">
                    Your cart is empty
                  </p> : <div className="space-y-4">
                    {items.map(item => <CartItem key={item.id} item={item} />)}
                  </div>}
              </div>
              {items.length > 0 && <div className="border-t border-gray-200 px-6 py-6">
                  <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                    <p>Subtotal</p>
                    <p>${getTotalPrice().toFixed(2)}</p>
                  </div>
                  <Button variant="primary" className="w-full" onClick={handleCheckout}>
                    Checkout
                  </Button>
                  <div className="mt-2">
                    <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                      Continue Shopping
                    </Button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CartSlideOver;