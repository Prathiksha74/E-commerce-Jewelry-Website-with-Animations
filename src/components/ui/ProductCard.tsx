import React, { useState } from 'react';
import { ShoppingBagIcon, HeartIcon } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}
const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isFeatured = false
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    addItem
  } = useCartStore();
  const navigate = useNavigate();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id,
      name,
      price,
      image
    });
    toast.success('Added to cart');
  };
  return <div className="group relative rounded-lg overflow-hidden cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate(`/product/${id}`)}>
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img src={image} alt={name} className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
        <div className={`absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-4 left-0 right-0 flex justify-center space-x-2 transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-amber-500 hover:text-white transition-colors" onClick={handleAddToCart}>
            <ShoppingBagIcon size={18} />
          </button>
          <button className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors">
            <HeartIcon size={18} />
          </button>
        </div>
        {isNew && <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded">
            New
          </span>}
        {isFeatured && <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded">
            Featured
          </span>}
      </div>
      <div className="pt-4">
        <p className="text-xs text-amber-600 font-medium mb-1">{category}</p>
        <h3 className="font-medium text-gray-800 transition-colors group-hover:text-amber-600">
          {name}
        </h3>
        <p className="font-semibold mt-1">${price.toFixed(2)}</p>
      </div>
    </div>;
};
export default ProductCard;