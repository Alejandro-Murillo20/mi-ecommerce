// src/components/organisms/Navbar.jsx
import React from 'react';
import { useCartStore } from '../../store/useCartStore'; // Importamos el almacén del carrito

const Navbar = () => {
  // Extraemos la lista de productos del carrito desde el Store
  const cart = useCartStore((state) => state.cart);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 40px',
      backgroundColor: '#222',
      color: 'white',
      marginBottom: '20px'
    }}>
      <h2>Mi E-Commerce</h2>
      
      <div style={{ fontSize: '1.2rem' }}>
        🛒 Carrito: 
        <span style={{
          backgroundColor: '#ff4757',
          borderRadius: '50%',
          padding: '2px 8px',
          marginLeft: '8px',
          fontWeight: 'bold'
        }}>
          {/* Mostramos el número total de elementos en la lista cart */}
          {cart.length}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
