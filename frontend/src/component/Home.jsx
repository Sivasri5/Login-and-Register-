import React, { useEffect, useState } from 'react';
import axios from '../axios';
import styles from '../styles/home.module.css';

function Home() {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const { data } = await axios.get('/api/users/home', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setName(data.name);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={styles['welcome-card']}>
      <div className={styles['welcome-title']}>Welcome Back!</div>
      <div className={styles['username']}>{name}</div>
    </div>
  );
}

export default Home;
