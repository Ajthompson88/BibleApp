import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const BASE_URL = 'https://api.scripture.api.bible/v1';

router.get('/:bibleId/:reference', async (req, res) => {
  const { bibleId, reference } = req.params;

  console.log('📥 Incoming request for verse:', { bibleId, reference });

  try {
    // 🔍 Step 1: Search for the verse content using /search
    const searchResponse = await axios.get(
      `${BASE_URL}/bibles/${bibleId}/search`,
      {
        params: {
          query: reference,
          limit: 1,
        },
        headers: {
          'api-key': process.env.DBL_API_KEY,
        },
      }
    );

    console.log('🔍 Search response data:', JSON.stringify(searchResponse.data, null, 2));

    const passage = searchResponse.data?.data?.passages?.[0];

    if (!passage) {
      return res.status(404).json({ error: 'Verse not found in search results.' });
    }

    const content = passage.content || 'No verse content available.';
    const ref = passage.reference || reference;

    res.status(200).json({ reference: ref, text: content });
  } catch (error) {
    console.error('❌ Verse lookup failed:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Verse lookup failed',
      message: error.response?.data?.message || 'Unknown error',
    });
  }
});

export default router;
