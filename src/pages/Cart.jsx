import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useCartStore();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tu Carrito</h1>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500 mb-4">El carrito está vacío 😢</p>
          <Link to="/" className="text-blue-600 hover:underline">Volver a la tienda</Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b p-4 hover:bg-gray-50">
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-green-600 font-bold">${item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-medium p-2"
              >
                Eliminar
              </button>
            </div>
          ))}
          
          <div className="p-6 bg-gray-50 flex justify-between items-center">
            <h3 className="text-2xl font-bold">Total: <span className="text-green-600">${total.toFixed(2)}</span></h3>
            <div className="space-x-4">
              <button 
                onClick={clearCart}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition"
              >
                Vaciar
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-bold transition">
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
