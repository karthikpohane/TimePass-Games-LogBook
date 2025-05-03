import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
});

const Game = mongoose.model('Game', gameSchema);
export default Game;
