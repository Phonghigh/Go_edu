import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1/',
  timeout: 10000,            // 10s timeout
  headers: {
      'Content-Type': 'application/json',
  },
});

console.log(process.env.BACKEND_PORT)
export default instance;
