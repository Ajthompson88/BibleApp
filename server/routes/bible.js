import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// GET /api/bibles — fetch all available Bible translations
router.get('/bibles', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/v1/bibles`, {
      headers: {
        'api-key': process.env.DBL_API_KEY
      }
    });
    

    res.status(200).json(response.data);
  } catch (error) {
    console.error('❌ Error fetching bibles:', error.message);
    res.status(500).json({ error: 'Failed to fetch bibles from API.Bible' });
  }
});

export default router;
