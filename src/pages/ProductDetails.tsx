import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Button from '../components/ui/Button';
import { toast } from 'sonner';
// This would normally come from an API
const getProduct = (id: string) => {
  const products = [{
    id: '1',
    name: 'Celestial Diamond Ring',
    price: 1299.99,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1770&auto=format&fit=crop',
    description: 'A stunning celestial-inspired ring featuring a brilliant-cut diamond set in 18k gold.',
    details: ['18k Gold Setting', '0.5 Carat Diamond', 'Handcrafted Design', 'Conflict-free Diamond']
  }
  // Add more products as needed
  ];
  return products.find(p => p.id === id);
};
const ProductDetails = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const product = getProduct(id ?? '');
  const [selectedImage, setSelectedImage] = useState(0);
  const {
    addItem
  } = useCartStore();
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>;
  }
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast.success('Added to cart');
  };
  return <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-xl text-gray-900 mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <ul className="mt-4 space-y-2">
                {product.details.map((detail, index) => <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {detail}
                  </li>)}
              </ul>
            </div>
            <Button variant="primary" className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetails;