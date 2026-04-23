// src/pages/Home.jsx
import React, { useState } from 'react';
import { products } from '../mockdata/products';
import ProductCard from '../components/molecules/ProductCard';
import CategoryFilters from '../components/molecules/CategoryFilters';
import SearchBar from '../components/molecules/SearchBar'; // Importamos la búsqueda

const Home = () => {
  const [category, setCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el texto buscado

  const uniqueCategories = [...new Set(products.map(p => p.category))];

  // FILTRADO DOBLE: Por categoría Y por nombre
  const filteredProducts = products.filter((p) => {
    const matchesCategory = category === 'todos' || p.category === category;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 pb-12">
      <h1 className="text-3xl font-bold text-center my-8 text-gray-800 tracking-tight">
        Nuestra Tienda Online
      </h1>

      {/* Barra de Búsqueda */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Filtros de Categoría */}
      <CategoryFilters 
        categories={uniqueCategories} 
        onSelectCategory={setCategory} 
        activeCategory={category}
      />
      
      {/* Resultados */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((producto) => (
          <ProductCard key={producto.id} product={producto} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-xl text-gray-500">No encontramos nada que coincida con "{searchTerm}"</p>
          <button 
            onClick={() => {setSearchTerm(''); setCategory('todos');}}
            className="text-blue-600 font-medium hover:underline mt-2"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
