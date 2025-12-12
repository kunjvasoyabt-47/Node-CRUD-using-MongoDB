// routes/users.route.js
import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

// Create user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) { // duplicate key
      return res.status(409).json({ message: 'Email already exists' });
    }
    return res.status(400).json({ message: err.message });
  }
});

// Read all users
router.get('/', async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
});

// Read single user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

// Update user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

export default router;
