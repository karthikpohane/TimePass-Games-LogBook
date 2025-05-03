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

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/games', gameRoutes);
app.use(errorHandler);

export default app;
