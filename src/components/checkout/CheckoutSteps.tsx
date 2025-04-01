import React from 'react';
import { CheckIcon } from 'lucide-react';
interface CheckoutStepsProps {
  currentStep: 'shipping' | 'payment' | 'confirmation';
}
const steps = [{
  id: 'shipping',
  name: 'Shipping'
}, {
  id: 'payment',
  name: 'Payment'
}, {
  id: 'confirmation',
  name: 'Confirmation'
}];
const CheckoutSteps = ({
  currentStep
}: CheckoutStepsProps) => {
  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };
  return <nav aria-label="Progress">
      <ol className="flex items-center justify-center">
        {steps.map((step, stepIdx) => {
        const isCurrentStep = step.id === currentStep;
        const isCompleted = getCurrentStepIndex() > stepIdx;
        return <li key={step.name} className={`${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''} relative`}>
              {isCompleted ? <div className="group">
                  <span className="flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                  {stepIdx !== steps.length - 1 && <div className="absolute top-4 -right-4 sm:-right-16 w-8 sm:w-16 h-0.5 bg-amber-600" />}
                </div> : isCurrentStep ? <div className="group">
                  <span className="flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center border-2 border-amber-600 bg-white rounded-full">
                      <span className="h-2.5 w-2.5 bg-amber-600 rounded-full" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                  {stepIdx !== steps.length - 1 && <div className="absolute top-4 -right-4 sm:-right-16 w-8 sm:w-16 h-0.5 bg-gray-300" />}
                </div> : <div className="group">
                  <span className="flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center border-2 border-gray-300 bg-white rounded-full">
                      <span className="h-2.5 w-2.5 bg-transparent rounded-full" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                  </span>
                  {stepIdx !== steps.length - 1 && <div className="absolute top-4 -right-4 sm:-right-16 w-8 sm:w-16 h-0.5 bg-gray-300" />}
                </div>}
            </li>;
      })}
      </ol>
    </nav>;
};
export default CheckoutSteps;