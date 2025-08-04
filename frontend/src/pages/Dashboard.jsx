import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../component/Home';

function Dashboard({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setAuth(false);            
    navigate('/');                     
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
      <button onClick={handleLogout} style={{ float: 'right', margin: '10px' }}>
        Logout
      </button>
      <Home />
    </div>
  );
}

export default Dashboard;
