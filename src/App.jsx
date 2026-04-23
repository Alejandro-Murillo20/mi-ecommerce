// src/App.jsx
import Navbar from './components/organisms/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Se verá arriba de todo */}
      <Home />
    </div>
  );
}

export default App;
