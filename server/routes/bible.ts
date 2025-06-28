import express from 'express';
import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const BASE_URL = process.env.BASE_URL || 'https://api.scripture.api.bible/v1';

// ✅ Guard the API key early
const DBL_API_KEY = process.env.DBL_API_KEY;
if (!DBL_API_KEY) {
  throw new Error('❌ Missing DBL_API_KEY in environment variables');
}

interface Bible {
  abbreviation: string;
  name: string;
  language?: {
    name?: string;
  };
}

// ✅ Route handler
router.get('/', async (_req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/bibles`, {
      headers: {
        'api-key': DBL_API_KEY,
      },
    });

    const allBibles: Bible[] = response.data.data;

    const validBibles = allBibles.filter(
      (b) => b.language?.name && b.abbreviation && b.name
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
  } catch (error) {
    const err = error as AxiosError;
    const message = (err.response?.data as { message?: string })?.message || 'Unknown error';

    console.error('❌ Failed to fetch bibles:', message);
    res.status(err.response?.status || 500).json({
      error: 'Failed to fetch Bible list',
      message,
    });
  }
});

export default router;
