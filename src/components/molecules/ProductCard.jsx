import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importamos Link
import { useCartStore } from '../../store/useCartStore';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64 transform transition duration-300 hover:scale-105 border border-gray-100">
      
      {/* 2. Envolvemos la imagen y el título con Link */}
      <Link to={`/product/${product.id}`} className="block">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-40 object-cover rounded-md cursor-pointer" 
        />
        <h3 className="text-xl font-bold mt-2 text-gray-800 hover:text-blue-600 transition cursor-pointer h-7 overflow-hidden">
          {product.title}
        </h3>
      </Link>

      <p className="text-gray-600 text-sm h-12 overflow-hidden mt-1">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 font-bold text-lg">${product.price}</span>
        <button 
          onClick={() => addToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

