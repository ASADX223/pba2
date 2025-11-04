import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

// Import page components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Exercises from './pages/Exercises';
import Nutrition from './pages/Nutrition';
import Progress from './pages/Progress';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;