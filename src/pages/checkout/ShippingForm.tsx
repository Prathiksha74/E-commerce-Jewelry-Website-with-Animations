import React from 'react';
import { useForm } from 'react-hook-form';
interface ShippingFormProps {
  onSubmit: (data: any) => void;
  defaultValues?: any;
}
const ShippingForm = ({
  onSubmit,
  defaultValues
}: ShippingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: defaultValues || {}
  });
  return <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Shipping Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input type="text" id="firstName" {...register('firstName', {
            required: true
          })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">
                First name is required
              </p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input type="text" id="lastName" {...register('lastName', {
            required: true
          })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">Last name is required</p>}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input type="email" id="email" {...register('email', {
          required: true,
          pattern: /^\S+@\S+$/i
        })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          {errors.email && <p className="mt-1 text-sm text-red-600">Valid email is required</p>}
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Street address
          </label>
          <input type="text" id="address" {...register('address', {
          required: true
        })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          {errors.address && <p className="mt-1 text-sm text-red-600">Address is required</p>}
        </div>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input type="text" id="city" {...register('city', {
            required: true
          })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input type="text" id="state" {...register('state', {
            required: true
          })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              ZIP / Postal
            </label>
            <input type="text" id="zip" {...register('zip', {
            required: true
          })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input type="tel" id="phone" {...register('phone', {
          required: true
        })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-amber-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            Continue to Payment
          </button>
        </div>
      </form>
    </div>;
};
export default ShippingForm;