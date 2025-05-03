// api/index.js

import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import { gameRoutes, swaggerDocs, swaggerUi } from '../routes/gameRoutes.js';
import { errorHandler } from '../middleware/errorHandler.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// CORS: Allow frontend to communicate with backend
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // Set your frontend URL in .env for better security
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware to parse incoming JSON
app.use(express.json());

// Basic route for health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Swagger API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Game API routes
app.use('/api/games', gameRoutes);

// Global error handler
app.use(errorHandler);

// Export app (for Vercel serverless compatibility)
export default app;
