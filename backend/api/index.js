// api/index.js

import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js'; // Ensure relative path is correct for deployment
import { gameRoutes, swaggerDocs, swaggerUi } from '../routes/gameRoutes.js';
import { errorHandler } from '../middleware/errorHandler.js';
import cors from 'cors';

dotenv.config();
connectDB(); // Connect to MongoDB Atlas

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/games', gameRoutes);
app.use(errorHandler);

// Export for serverless or default server (Vercel uses this)
export default app;

// For traditional Node environments (e.g., local dev or non-Vercel servers)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}
