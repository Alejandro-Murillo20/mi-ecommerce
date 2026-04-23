// src/pages/Cart.jsx
import React from 'react';
import { useCartStore } from '../store/useCartStore';

const Cart = () => {
  // Traemos los productos guardados y la función para limpiar
  const { cart, clearCart, removeFromCart } = useCartStore();

  // Calculamos el precio total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tu Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío 😢</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.title} - ${item.price}</span>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                Eliminar
              </button>
            </div>
          ))}
          
          <h3>Total: ${total.toFixed(2)}</h3>
          
          <button 
            onClick={clearCart}
            style={{ backgroundColor: '#333', color: 'white', padding: '10px', marginTop: '10px' }}
          >
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
