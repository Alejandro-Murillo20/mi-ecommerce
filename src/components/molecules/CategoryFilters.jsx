// src/components/molecules/CategoryFilters.jsx
import React from 'react';

const CategoryFilters = ({ categories, onSelectCategory, activeCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {/* Botón para mostrar todos los productos */}
      <button
        onClick={() => onSelectCategory('todos')}
        className={`px-4 py-2 rounded-full border transition ${
          activeCategory === 'todos' 
          ? 'bg-blue-600 text-white border-blue-600' 
          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
        }`}
      >
        Todos
      </button>

      {/* Generamos un botón por cada categoría única */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full border transition capitalize ${
            activeCategory === cat 
            ? 'bg-blue-600 text-white border-blue-600' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
