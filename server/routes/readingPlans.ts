import express, { Request, Response } from 'express';
import ReadingPlan from '../models/ReadingPlan.ts';

const router = express.Router();

// Sample seed data (could be moved elsewhere)
const defaultPlan = [
  { day: 1, passage: 'Genesis 1–2', completed: false },
  { day: 2, passage: 'Genesis 3–4', completed: false },
  { day: 3, passage: 'Genesis 5–6', completed: false }
];

// GET /api/reading-plans/:userId
router.get('/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    let plan = await ReadingPlan.findOne({ userId });

    if (!plan) {
      plan = await ReadingPlan.create({ userId, plan: defaultPlan });
    }

    res.status(200).json(plan);
  } catch (err) {
    if (err instanceof Error) {
      console.error('❌ Error fetching reading plan:', err.message);
    }
    res.status(500).json({ error: 'Failed to fetch reading plan' });
  }
});

// POST /api/reading-plans/:userId
router.post('/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { day, completed } = req.body;

  try {
    const planDoc = await ReadingPlan.findOne({ userId });
    if (!planDoc) {
      return res.status(404).json({ error: 'Reading plan not found' });
    }

    const entry = planDoc.plan.find(p => p.day === day);
    if (!entry) {
      return res.status(400).json({ error: 'Day not found in reading plan' });
    }

    entry.completed = completed;
    await planDoc.save();

    res.status(200).json(planDoc);
  } catch (err) {
    if (err instanceof Error) {
      console.error('❌ Error updating reading plan:', err.message);
    }
    res.status(500).json({ error: 'Failed to update reading plan' });
  }
});

export default router;
