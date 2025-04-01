import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}
export const useCartStore = create<CartStore>()(persist((set, get) => ({
  items: [],
  isOpen: false,
  addItem: item => {
    const currentItems = get().items;
    const existingItem = currentItems.find(i => i.id === item.id);
    if (existingItem) {
      set({
        items: currentItems.map(i => i.id === item.id ? {
          ...i,
          quantity: i.quantity + 1
        } : i)
      });
    } else {
      set({
        items: [...currentItems, {
          ...item,
          quantity: 1
        }]
      });
    }
  },
  removeItem: id => {
    set({
      items: get().items.filter(item => item.id !== id)
    });
  },
  updateQuantity: (id, quantity) => {
    set({
      items: get().items.map(item => item.id === id ? {
        ...item,
        quantity
      } : item)
    });
  },
  clearCart: () => set({
    items: []
  }),
  setIsOpen: isOpen => set({
    isOpen
  }),
  getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
  getTotalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0)
}), {
  name: 'cart-storage'
}));