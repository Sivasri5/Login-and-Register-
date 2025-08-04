import React, { useEffect, useState } from 'react';
import axios from '../axios'; 

function UserCard() {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const { data } = await axios.get('/users/home', {
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
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: '200px', margin: '2rem auto' }}>
      <h3>Welcome</h3>
      <p style={{ fontWeight: 'bold' }}>{name}</p>
    </div>
  );
}

export default UserCard;
