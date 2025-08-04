import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://login-signup-z1b9.onrender.com',
  //baseURL: 'http://localhost:5000/api',
  withCredentials: false,
});

export default instance;
