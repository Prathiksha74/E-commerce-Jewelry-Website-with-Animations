import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon, SearchIcon, UserIcon, MenuIcon, XIcon, LogOutIcon } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {
    user,
    isAuthenticated,
    logout
  } = useAuthStore();
  const {
    items,
    setIsOpen: setCartOpen,
    getTotalItems
  } = useCartStore();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500">
              ARTISAN GEMS
            </h1>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="relative text-gray-800 hover:text-amber-500 transition-colors group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/shop" className="relative text-gray-800 hover:text-amber-500 transition-colors group">
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:text-amber-500 transition-colors">
            <SearchIcon size={20} />
          </button>
          <div className="relative">
            {isAuthenticated ? <div className="relative">
                <button className="p-2 hover:text-amber-500 transition-colors flex items-center" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                  <span className="mr-2">{user?.name}</span>
                  <UserIcon size={20} />
                </button>
                {userMenuOpen && <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center">
                          <LogOutIcon size={16} className="mr-2" />
                          Sign out
                        </div>
                      </button>
                    </div>
                  </div>}
              </div> : <Link to="/login" className="p-2 hover:text-amber-500 transition-colors">
                <UserIcon size={20} />
              </Link>}
          </div>
          <button className="p-2 hover:text-amber-500 transition-colors relative" onClick={() => setCartOpen(true)}>
            <ShoppingBagIcon size={20} />
            {items.length > 0 && <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {getTotalItems()}
              </span>}
          </button>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-amber-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/shop" className="text-gray-800 hover:text-amber-500 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
              <button className="p-2 hover:text-amber-500 transition-colors">
                <SearchIcon size={20} />
              </button>
              <button className="p-2 hover:text-amber-500 transition-colors">
                <UserIcon size={20} />
              </button>
              <button className="p-2 hover:text-amber-500 transition-colors relative">
                <ShoppingBagIcon size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Navbar;