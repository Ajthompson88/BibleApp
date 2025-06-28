import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('✅ questions POST route hit');
  try {
    const question = new Question(req.body);
    const saved = await question.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('❌ Error saving question:', err);
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }    
  }
});

router.get('/', async (_req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    console.error('❌ Error retrieving questions:', err);
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
    
  }
});

export default router;
