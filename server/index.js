import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import bibleRoutes from './routes/bible.js';
import questionRoutes from './routes/questions.js'; // You'll create this next
import verseRoutes from './routes/verse.js';

dotenv.config({ path: '../.env' });
console.log('DEBUG: MONGO_URI is', process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Routes
app.get('/', (req, res) => {
  res.send('📖 AdonAI API is running 🚀');
});

app.use('/api', bibleRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api', verseRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
