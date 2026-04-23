import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-md mb-8">
      <Link to="/" className="text-2xl font-bold tracking-tight hover:text-blue-400 transition">
        Mi E-Commerce
      </Link>
      
      <Link to="/cart" className="relative flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition">
        <span className="text-lg">🛒</span>
        <span className="font-medium">Carrito</span>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
