// This file defines the Game model for the MongoDB database using Mongoose.
// It specifies the schema for the Game collection, including fields for name, URL, author, and published date.
import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
});

const Game = mongoose.model('Game', gameSchema);
export default Game;
