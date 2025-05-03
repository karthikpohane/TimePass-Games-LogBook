import express from 'express';
import {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
  searchGameByName,
} from '../controllers/gameController.js';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const router = express.Router();

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TimePass-Games-LogBook API',
      version: '1.0.0',
      description: 'API documentation for TimePass-Games-LogBook',
      contact: {
        name: 'Karthik Pohane',
        email: 'kartikpohane0612@gmail.com',
      },
    },
    servers: [
      {
        url: 'https://time-pass-games-log-book-api.vercel.app/',//'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/gameRoutes.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

/**
 * @swagger
 * /api/games/search:
 *   get:
 *     summary: Search games by name
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the game to search
 *     responses:
 *       200:
 *         description: A list of matching games
 */
router.get('/search', searchGameByName);

/**
 * @swagger
 * /api/games:
 *   get:
 *     summary: Get all games
 *     responses:
 *       200:
 *         description: A list of all games
 */
router.get('/', getAllGames);

/**
 * @swagger
 * /api/games/{id}:
 *   get:
 *     summary: Get a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The game ID
 *     responses:
 *       200:
 *         description: Game details
 */
router.get('/:id', getGameById);

/**
 * @swagger
 * /api/games:
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
 */
router.post('/', createGame);

/**
 * @swagger
 * /api/games/{id}:
 *   put:
 *     summary: Update a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The game ID
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
 */
router.put('/:id', updateGame);

/**
 * @swagger
 * /api/games/{id}:
 *   delete:
 *     summary: Delete a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The game ID
 *     responses:
 *       200:
 *         description: Game deleted successfully
 */
router.delete('/:id', deleteGame);

// Export router and Swagger docs
export { router as gameRoutes, swaggerDocs, swaggerUi };
