import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartSlideOver from './components/cart/CartSlideOver';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import CheckoutPage from './pages/checkout/CheckoutPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Toaster } from 'sonner';
export function App() {
  return <BrowserRouter>
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        <CartSlideOver />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}