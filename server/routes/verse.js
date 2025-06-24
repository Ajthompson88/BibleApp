import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Load .env before accessing process.env
const router = express.Router();

const API_BASE = 'https://api.scripture.api.bible/v1';
const TOKEN = process.env.DBL_API_KEY;

// 🔑 Log token presence at server start
console.log('🔑 DBL_API_KEY loaded:', TOKEN ? '✅ YES' : '❌ MISSING');

router.get('/verse/:bibleId/:reference', async (req, res) => {
  const { bibleId, reference } = req.params;

  console.log('📥 Incoming request for verse:', { bibleId, reference });

  try {
    const url = `${API_BASE}/bibles/${bibleId}/verses/${reference}?content-type=text`;
    console.log('🌐 Requesting URL:', url);

    const response = await axios.get(url, {
      headers: {
        'api-key': TOKEN,
      },
    });

    console.log('✅ Success:', response.data?.data?.reference);
    res.status(200).json(response.data);
  } catch (err) {
    console.error('❌ Verse lookup failed:', err.response?.data || err.message);
    res.status(500).json({ error: 'Verse lookup failed' });
  }
});

export default router;
