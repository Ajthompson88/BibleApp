import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

// POST /api/questions — save new Q&A
router.post('/', async (req, res) => {
  try {
    const { question, answer, userId } = req.body;

    const newQ = await Question.create({
      question,
      answer,
      userId
    });

    res.status(201).json(newQ);
  } catch (err) {
    console.error('❌ Error saving question:', err.message);
    res.status(500).json({ error: 'Failed to save question' });
  }
});

// GET /api/questions — fetch all Q&A entries
router.get('/', async (req, res) => {
  try {
    const allQ = await Question.find().sort({ timestamp: -1 });
    res.status(200).json(allQ);
  } catch (err) {
    console.error('❌ Error retrieving questions:', err.message);
    res.status(500).json({ error: 'Failed to retrieve questions' });
  }
});

export default router;
