import express, { Request, Response } from 'express';
import ReadingPlan from '../models/ReadingPlan.js';

const router = express.Router();

// GET /api/reading-plans/:userId
router.get('/:userId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const plans = await ReadingPlan.find({ userId });
    res.json(plans);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error occurred';
    res.status(500).json({ error: message });
  }
});

// POST /api/reading-plans/:userId
router.post('/:userId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const { date, passage, completed } = req.body;

    const plan = new ReadingPlan({
      userId,
      date,
      passage,
      completed: completed || false,
    });

    const saved = await plan.save();
    res.status(201).json(saved);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error occurred';
    res.status(500).json({ error: message });
  }
});

export default router;
