import axios from 'axios';

const url = {
  local: 'http://localhost:5000',
  deploy: 'https://login-signup-z1b9.onrender.com'
};

const isLocal = window.location.hostname === 'localhost';

const instance = axios.create({
  baseURL: isLocal ? url.local : url.deploy,
  //baseURL: 'http://localhost:5000/api',
  withCredentials: false,
});

export default instance;
