// src/components/organisms/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Nombre de la tienda */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Mi E-Commerce</h3>
          <p className="text-sm">
            Tu tienda de confianza para los mejores productos tecnológicos.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-white font-semibold mb-4">Enlaces</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-blue-400">Inicio</a></li>
            <li><a href="/cart" className="hover:text-blue-400">Carrito</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <p className="text-sm">📧 soporte@tienda.com</p>
          <p className="text-sm">📍 Calle Principal #123</p>
        </div>

      </div>

      {/* Línea final de Copyright */}
      <div className="text-center mt-10 pt-6 border-t border-gray-800 text-xs">
        &copy; {new Date().getFullYear()} Mi E-Commerce - Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
