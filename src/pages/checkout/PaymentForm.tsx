import React, { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { CreditCard, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';
interface PaymentFormProps {
  shippingData: any;
  onBack: () => void;
  onSuccess: () => void;
}
const PaymentForm = ({
  shippingData,
  onBack,
  onSuccess
}: PaymentFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    getTotalPrice,
    clearCart
  } = useCartStore();
  const shippingCost = 10.0;
  const tax = getTotalPrice() * 0.1;
  const total = getTotalPrice() + shippingCost + tax;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Clear the cart after successful payment
      clearCart();
      onSuccess();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  return <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4 text-gray-600 hover:text-gray-900">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-semibold text-gray-900">Payment Details</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
            Name on card
          </label>
          <input type="text" id="card-name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
            Card number
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CreditCard className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" id="card-number" required placeholder="1234 1234 1234 1234" className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
              Expiry date
            </label>
            <input type="text" id="expiry" required placeholder="MM/YY" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <input type="text" id="cvc" required placeholder="123" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-900">${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Tax</span>
            <span className="text-gray-900">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base font-medium mt-4 pt-4 border-t border-gray-200">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">${total.toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <Button type="submit" variant="primary" className="w-full" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Your payment information is encrypted and secure.
          </p>
        </div>
      </form>
    </div>;
};
export default PaymentForm;