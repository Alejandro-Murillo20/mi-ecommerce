// src/components/organisms/Navbar.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import { useCartStore } from '../../store/useCartStore'; // Importamos el almacén del carrito
<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
  <h2>Mi E-Commerce</h2>
</Link>
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

      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h2 style={{ margin: 0 }}>Mi E-Commerce</h2>
      </Link>
      
      <div style={{ fontSize: '1.2rem' }}> 
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
  🛒 Carrito: <span>{cart.length}</span>
</Link>
      </div>
    </nav>
  );
};

export default Navbar;
