// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer'; // 1. Importar Footer
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Asegura que el footer se quede abajo */}
        <Navbar />
        
        <main className="flex-grow"> {/* Esto empuja al footer hacia abajo si hay poco contenido */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer /> {/* 2. Añadir Footer aquí */}
      </div>
    </Router>
  );
}

export default App;
