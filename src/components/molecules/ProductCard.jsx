import React from 'react';
import { useCartStore } from '../../store/useCartStore'; // Importamos el carrito que creamos antes

const ProductCard = ({ product }) => {
  // Traemos la función para agregar al carrito desde nuestro Store
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', margin: '10px', width: '200px' }}>
      <img 
  src={product.image} 
  alt={product.title} 
  style={{ 
    width: '100%', 
    height: '150px', // Altura fija para que todas se vean iguales
    objectFit: 'cover', // Recorta la imagen para que rellene el cuadro sin deformarse
    borderRadius: '4px' 
  }} 
/>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      
      <button 
        onClick={() => addToCart(product)}
        style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '4px' }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
