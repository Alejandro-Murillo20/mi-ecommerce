// src/pages/Home.jsx
import React, { useState } from 'react';
import { products } from '../mockdata/products';
import ProductCard from '../components/molecules/ProductCard';
import CategoryFilters from '../components/molecules/CategoryFilters';

const Home = () => {
  const [category, setCategory] = useState('todos');

  // 1. Extraemos las categorías únicas de nuestros productos
  const uniqueCategories = [...new Set(products.map(p => p.category))];

  // 2. Filtramos la lista según la selección
  const filteredProducts = category === 'todos' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8 text-gray-800">
        Nuestros Productos
      </h1>

      {/* Pasamos la lógica al componente de filtros */}
      <CategoryFilters 
        categories={uniqueCategories} 
        onSelectCategory={setCategory} 
        activeCategory={category}
      />
      
      {/* Lista de productos filtrada */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((producto) => (
          <ProductCard key={producto.id} product={producto} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default Home;
