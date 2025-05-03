// src/api/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api', // update this if deployed
});
