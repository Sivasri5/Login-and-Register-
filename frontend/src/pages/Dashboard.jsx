import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../component/Home';
import styles from '../styles/home.module.css';


function Dashboard({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/');
  };

  return (
    <div className={styles['dashboard-wrapper']}>
      <div className={styles['dashboard-header']}>
        <h2>Dashboard</h2>
        <button className={styles['logout-button']} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Home />
    </div>
  );
}

export default Dashboard;
