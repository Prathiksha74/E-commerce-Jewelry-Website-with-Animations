import React from 'react';
import { MinusIcon, PlusIcon, XIcon } from 'lucide-react';
import { useCartStore, CartItem as CartItemType } from '../../store/cartStore';
interface CartItemProps {
  item: CartItemType;
}
const CartItem = ({
  item
}: CartItemProps) => {
  const {
    removeItem,
    updateQuantity
  } = useCartStore();
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };
  return <div className="flex py-6 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{item.name}</h3>
          <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-500">
            <XIcon size={20} />
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button onClick={() => handleQuantityChange(item.quantity - 1)} className="rounded-full p-1 text-gray-600 hover:bg-gray-100">
            <MinusIcon size={16} />
          </button>
          <span className="mx-2 w-8 text-center">{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)} className="rounded-full p-1 text-gray-600 hover:bg-gray-100">
            <PlusIcon size={16} />
          </button>
        </div>
      </div>
    </div>;
};
export default CartItem;