import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://shielded-lake-95362-e084f5fd19c8.herokuapp.com/api/v1/',
  timeout: 10000,            // 10s timeout
  headers: {
      'Content-Type': 'application/json',
  },
});

console.log(process.env.BACKEND_PORT)
export default instance;
