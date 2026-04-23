// src/pages/Cart.jsx
import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Link, useNavigate } from 'react-router-dom'; // 1. Importamos useNavigate

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useCartStore();
  const navigate = useNavigate(); // 2. Definimos la constante para navegar

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tu Carrito</h1>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500 mb-4">El carrito está vacío 😢</p>
          <Link to="/" className="text-blue-600 hover:underline">Ir a comprar algo</Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b p-4 hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-green-600 font-bold">${item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 text-sm font-medium"
              >
                Eliminar
              </button>
            </div>
          ))}
          
          <div className="p-6 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold">Total: <span className="text-green-600">${total.toFixed(2)}</span></h3>
            <div className="flex gap-4">
              <button 
                onClick={clearCart}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition"
              >
                Vaciar
              </button>
              
              {/* 3. El botón ahora usa navigate para ir al Checkout */}
              <button 
                onClick={() => navigate('/checkout')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md font-bold transition shadow-lg shadow-blue-100"
              >
                Pagar ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
