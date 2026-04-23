// src/pages/Cart.jsx
import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useCartStore();
  const [compraFinalizada, setCompraFinalizada] = useState(false); // Estado para el mensaje de éxito

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // Función para procesar el pago
  const manejarPago = () => {
    if (cart.length > 0) {
      clearCart(); // Vaciamos el carrito
      setCompraFinalizada(true); // Mostramos el mensaje de éxito
    }
  };

  // Si la compra se finalizó, mostramos el mensaje de éxito
  if (compraFinalizada) {
    return (
      <div className="max-w-4xl mx-auto p-20 text-center">
        <div className="bg-green-100 p-10 rounded-2xl border border-green-200">
          <h2 className="text-4xl font-bold text-green-700 mb-4">¡Gracias por tu compra!</h2>
          <p className="text-green-600 mb-8 text-lg">Tu pedido ha sido procesado con éxito y llegará pronto.</p>
          <Link to="/" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

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
              <button 
                onClick={manejarPago}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md font-bold transition shadow-lg shadow-green-100"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
