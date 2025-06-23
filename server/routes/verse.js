import express from 'express';
import axios from 'axios';
const router = express.Router();

const API_BASE = 'https://api.scripture.api.bible/v1';
const TOKEN = process.env.DBL_TOKEN;

router.get('/bibles', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/bibles`, {
      headers: {
        'api-key': TOKEN,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error('Error fetching Bibles:', err.message);
    res.status(500).json({ error: 'Failed to fetch Bible list' });
  }
});

export default router;
