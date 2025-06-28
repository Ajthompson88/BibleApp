import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import bibleRoutes from './routes/bible.js';
import questionRoutes from './routes/questions.js';
import verseRoutes from './routes/verse.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure MONGO_URI exists
const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error('❌ MONGO_URI is not defined in environment variables');
}

mongoose.connect(uri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err: Error) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('📖 AdonAI API is running 🚀');
});

app.use('/api/bibles', bibleRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/verse', verseRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
