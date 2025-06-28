import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const API_KEY = process.env.DBL_API_KEY;
const BASE_URL = 'https://api.scripture.api.bible/v1/bibles';

router.get('/:bibleId/:reference', async (req: Request, res: Response): Promise<void> => {
  const { bibleId, reference } = req.params;

  try {
    const url = `${BASE_URL}/${bibleId}/passages?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false&reference=${encodeURIComponent(reference)}`;
    
    const response = await axios.get(url, {
      headers: {
        'api-key': API_KEY || '',
      },
    });

    res.json(response.data);
  } catch (error: unknown) {
    console.error(
      '❌ Verse lookup failed:',
      error instanceof Error && 'response' in error
        ? (error as any).response?.data || error.message
        : 'Unknown error'
    );

    res.status(
      error instanceof Error && 'response' in error
        ? (error as any).response?.status || 500
        : 500
    ).json({
      error:
        error instanceof Error && 'response' in error
          ? (error as any).response?.data?.message || 'Unknown error'
          : 'Unknown error',
    });
  }
});

export default router;
