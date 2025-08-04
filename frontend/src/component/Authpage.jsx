import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/authform.module.css';


function Authpage({ setAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/users/login' : '/users/register';
      const { data } = await axios.post(endpoint, formData);
      alert(data.message || 'Success');
      localStorage.setItem('token', data.token); 
       setAuth(true); 
      navigate('/dashboard');  
    } catch (err) {
      alert(err.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className={styles['auth-wrapper']}>
    <div className={styles['auth-container']}>
      <div className={styles['auth-left']} />
      <div className={styles['auth-right']}>
        <div className={styles['auth-card']}>
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
            )}
            <div>
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button onClick={toggleForm} style={{ marginLeft: '10px' }}>
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Authpage;
