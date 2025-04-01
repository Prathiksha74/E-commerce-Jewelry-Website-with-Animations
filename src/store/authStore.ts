import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface User {
  id: string;
  email: string;
  name: string;
}
interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}
export const useAuthStore = create<AuthStore>()(persist(set => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // This is a mock implementation. In a real app, you would make an API call
    if (email && password) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({
        user: {
          id: "1",
          email,
          name: email.split('@')[0]
        },
        isAuthenticated: true
      });
    }
  },
  register: async (name: string, email: string, password: string) => {
    // This is a mock implementation. In a real app, you would make an API call
    if (name && email && password) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({
        user: {
          id: "1",
          email,
          name
        },
        isAuthenticated: true
      });
    }
  },
  logout: () => {
    set({
      user: null,
      isAuthenticated: false
    });
  }
}), {
  name: 'auth-storage'
}));