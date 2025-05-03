// Import necessary modules
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Database connection
import { gameRoutes, swaggerDocs, swaggerUi } from './routes/gameRoutes.js'; // Game-related routes + Swagger
import { errorHandler } from './middleware/errorHandler.js'; // Custom error handler
import cors from 'cors'; // Middleware for enabling Cross-Origin Requests

// Initialize environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Requests
app.use(express.json()); // Parse incoming JSON requests

// Root endpoint to check if the API is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API route for game-related actions
app.use('/api/games', gameRoutes);

// Global error handler middleware
app.use(errorHandler);

// Start the server and listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
