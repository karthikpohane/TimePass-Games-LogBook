// src/api/axios.js

// Importing axios to create an instance of the HTTP client
import axios from 'axios';

// Creating and exporting an axios instance with predefined configurations
export default axios.create({
  // Base URL for API requests. You can update this if the app is deployed to a different domain
  baseURL: 'https://time-pass-games-log-book-backend.vercel.app/api', // Change this URL when deploying the app
});
