// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../mockdata/products';
import { useCartStore } from '../store/useCartStore';

const ProductDetail = () => {
  const { id } = useParams(); // Obtenemos el ID desde la URL
  const addToCart = useCartStore((state) => state.addToCart);

  // Buscamos el producto específico en nuestros datos
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-10">Producto no encontrado</p>;

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">← Volver a la tienda</Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {/* Imagen */}
        <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-xl shadow-md" />
        
        {/* Información */}
        <div className="flex flex-col justify-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">{product.category}</span>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">{product.title}</h1>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">{product.description}</p>
          <p className="text-3xl font-bold text-green-600 mt-6">${product.price}</p>
          
          <button 
            onClick={() => addToCart(product)}
            className="mt-8 bg-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
