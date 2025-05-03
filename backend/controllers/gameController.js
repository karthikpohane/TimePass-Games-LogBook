import Game from '../models/gameModel.js';

export const getAllGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

export const getGameById = async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (game) res.json(game);
  else res.status(404).json({ message: 'Game not found' });
};

export const createGame = async (req, res) => {
  const game = new Game(req.body);
  const createdGame = await game.save();
  res.status(201).json(createdGame);
};

export const updateGame = async (req, res) => {
  const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (game) res.json(game);
  else res.status(404).json({ message: 'Game not found' });
};

export const deleteGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (game) {
    await game.deleteOne();
    res.json({ message: 'Game deleted' });
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};

export const searchGameByName = async (req, res) => {
  const { name } = req.query;
  try {
    const games = await Game.find({ name: new RegExp(name, 'i') }); // 'i' for case-insensitive
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Error searching games' });
  }
};

