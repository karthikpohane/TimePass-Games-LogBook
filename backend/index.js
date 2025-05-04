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
app.use(cors({
  origin: ['https://timepass-games-logbook-frontend.onrender.com'],  // Make sure your frontend is running at this URL
  credentials: true,  // Only if using cookies/authentication
}));
app.use(express.json()); // Parse incoming JSON requests

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

// Start the server and listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at https://timepass-games-logbook-backend.onrender.com/api-docs`);
});
