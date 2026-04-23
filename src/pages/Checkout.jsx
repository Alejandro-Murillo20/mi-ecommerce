// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // Estado para el formulario
  const [datos, setDatos] = useState({ nombre: '', email: '', direccion: '', tarjeta: '' });

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    alert(`¡Gracias ${datos.nombre}! Tu pago de $${total} ha sido procesado.`);
    clearCart(); // Vaciamos el carrito
    navigate('/'); // Volvemos al inicio
  };

  if (cart.length === 0) return <p className="text-center mt-10 text-gray-500">No hay nada para pagar.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl my-10 border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Finalizar Pedido</h2>
      
      <form onSubmit={manejarEnvio} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
          <input 
            required
            type="text" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setDatos({...datos, nombre: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input 
            required
            type="email" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setDatos({...datos, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Dirección de Envío</label>
          <input 
            required
            type="text" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setDatos({...datos, direccion: e.target.value})}
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-lg font-bold text-gray-800 mb-2 text-center italic">Resumen del Pago: ${total.toFixed(2)}</p>
          <input 
            required
            placeholder="Número de tarjeta (Simulado)" 
            type="text" 
            maxLength="16"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            onChange={(e) => setDatos({...datos, tarjeta: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
        >
          Confirmar y Pagar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
