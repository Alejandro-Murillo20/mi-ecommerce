// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

// 1. AQUÍ AGREGAMOS LA IMPORTACIÓN (Línea nueva)
import ProductDetail from './pages/ProductDetail'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* 2. AQUÍ AGREGAMOS LA RUTA DINÁMICA (Línea nueva) */}
        {/* El ':id' significa que esa parte de la URL cambiará según el producto */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
      </Routes>
    </Router>
  );
}

export default App;
