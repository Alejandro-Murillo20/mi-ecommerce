// src/pages/Home.jsx
import React from 'react';
import { products } from '../mockdata/products'; // Importamos los datos
import ProductCard from '../components/molecules/ProductCard'; // Importamos la tarjeta

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Nuestra Tienda</h1>
      
      {/* Contenedor tipo malla (grid) para los productos */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center' 
      }}>
        {products.map((producto) => (
          // Por cada producto en el array, dibujamos una ProductCard
          <ProductCard key={producto.id} product={producto} />
        ))}
      </div>
    </div>
  );
};

export default Home;
