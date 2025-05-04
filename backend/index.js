// This is the main entry point for the backend server of the Timepass Games Logbook application.
// It sets up the Express server, connects to the MongoDB database, and defines the API routes.
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Database connection
import { gameRoutes, swaggerDocs, swaggerUi } from './routes/gameRoutes.js'; // Game routes and Swagger documentation
import { errorHandler } from './middleware/errorHandler.js'; // Error handling middleware
import cors from 'cors'; // CORS middleware for handling cross-origin requests

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

const app = express();

// Middleware setup
app.use(cors({
  origin: ['https://timepass-games-logbook-frontend.onrender.com'], // Allow requests from this origin i.e frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json()); 

/**
 * @swagger
 * /:
 *   get:
 *     summary: Check if API is running
 *     responses:
 *       200:
 *         description: API is running...
 */
app.get('/', (req, res) => {
  res.send('API is running...');
});

/**
 * @swagger
 * /api/games:
 *   get:
 *     summary: Get all games
 *     responses:
 *       200:
 *         description: A list of games
 *   post:
 *     summary: Create a new game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               genre:
 *                 type: string
 *               platform:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Game created successfully
 *
 * /api/games/search:
 *   get:
 *     summary: Search games by name
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 *
 * /api/games/{id}:
 *   get:
 *     summary: Get a game by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Game details
 *       404:
 *         description: Game not found
 *   put:
 *     summary: Update a game by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               genre:
 *                 type: string
 *               platform:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Game updated successfully
 *   delete:
 *     summary: Delete a game by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Game deleted successfully
 */

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Swagger docs

app.use('/api/games', gameRoutes); // Game routes

app.use(errorHandler); // Global error handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at https://timepass-games-logbook-backend.onrender.com/api-docs`);
});
