import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import OrderSummary from './OrderSummary';
import CheckoutSteps from '../../components/checkout/CheckoutSteps';
type CheckoutStep = 'shipping' | 'payment' | 'confirmation';
const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingData, setShippingData] = useState<any>(null);
  const {
    items,
    getTotalPrice
  } = useCartStore();
  const navigate = useNavigate();
  if (items.length === 0) {
    return <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h2>
        <button onClick={() => navigate('/')} className="text-amber-600 hover:text-amber-500">
          Continue Shopping
        </button>
      </div>;
  }
  return <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <CheckoutSteps currentStep={currentStep} />
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            {/* Checkout Forms */}
            <div className="lg:col-span-7">
              {currentStep === 'shipping' && <ShippingForm onSubmit={data => {
              setShippingData(data);
              setCurrentStep('payment');
            }} defaultValues={shippingData} />}
              {currentStep === 'payment' && <PaymentForm shippingData={shippingData} onBack={() => setCurrentStep('shipping')} onSuccess={() => setCurrentStep('confirmation')} />}
              {currentStep === 'confirmation' && <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Order Confirmed!
                  </h2>
                  <p className="text-gray-600">
                    Thank you for your order. We'll send you a confirmation
                    email shortly.
                  </p>
                  <button onClick={() => navigate('/')} className="mt-6 w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700">
                    Continue Shopping
                  </button>
                </div>}
            </div>
            {/* Order Summary */}
            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CheckoutPage;