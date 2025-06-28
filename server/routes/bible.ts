import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const BASE_URL = process.env.BASE_URL || 'https://api.scripture.api.bible/v1';

interface Bible {
  abbreviation: string;
  name: string;
  language?: {
    name?: string;
  };
}

router.get('/', async (_req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/bibles`, {
      headers: {
        'api-key': process.env.DBL_API_KEY || '',
      },
    });

    const allBibles: Bible[] = response.data.data;

    const validBibles = allBibles.filter(
      (b: Bible) => b.language?.name && b.abbreviation && b.name
    );

    validBibles.sort((a, b) => {
      const aLang = a.language?.name?.toLowerCase() || '';
      const bLang = b.language?.name?.toLowerCase() || '';
      if (aLang === 'english' && bLang !== 'english') return -1;
      if (bLang === 'english' && aLang !== 'english') return 1;
      return aLang.localeCompare(bLang);
    });

    console.log(`✅ Sorted bibles count: ${validBibles.length}`);
    res.status(200).json(validBibles);
  } catch (err) {
    if (err instanceof Error) {
      console.error('❌ Failed to fetch bibles:', err.message);
    } else {
      console.error('❌ Unknown error fetching bibles:', err);
    }
    res.status(500).json({ error: 'Failed to fetch Bible list' });
  }
});

export default router;
