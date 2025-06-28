import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import bibleRoutes from './routes/bible.js';
import questionRoutes from './routes/questions.js';
import verseRoutes from './routes/verse.js';
import readingPlanRoutes from './routes/readingPlans.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bibles', bibleRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/verse', verseRoutes);
app.use('/api/reading-plans', readingPlanRoutes);

app.get('/', (_req, res) => {
  res.send('📖 AdonAI API is running 🚀');
});

// ✅ Async boot logic with top-level await compatibility
const start = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('❌ MONGO_URI is missing');

  await mongoose.connect(uri);
  console.log('✅ MongoDB connected');

  if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  }
};

start();

export default app;
