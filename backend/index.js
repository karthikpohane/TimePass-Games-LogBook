import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import gameRoutes from './routes/gameRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// ✅ Now use app
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/games', gameRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
