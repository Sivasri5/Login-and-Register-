import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Authform from './pages/Authform';
import Dashboard from './pages/Dashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));


  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Authform setAuth={setIsAuthenticated} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setIsAuthenticated} /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
