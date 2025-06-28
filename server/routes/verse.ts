import express, { Request, Response } from 'express';
import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const BASE_URL = 'https://api.scripture.api.bible/v1';

// ✅ Add this environment check
const DBL_API_KEY = process.env.DBL_API_KEY;
if (!DBL_API_KEY) {
  throw new Error('❌ Missing DBL_API_KEY in environment variables');
}

router.get('/:bibleId/:reference', async (req: Request, res: Response) => {
  const { bibleId, reference } = req.params;

  try {
    const searchResponse = await axios.get(
      `${BASE_URL}/bibles/${bibleId}/search`,
      {
        params: { query: reference, limit: 1 },
        headers: {
          'api-key': DBL_API_KEY, // ✅ use the checked variable
        },
      }
    );

    const passage = searchResponse.data?.data?.passages?.[0];

    if (!passage) {
      return res.status(404).json({ error: 'Verse not found in search results.' });
    }

    res.status(200).json({
      reference: passage.reference || reference,
      text: passage.content || 'No verse content available.',
    });
  } catch (error) {
    const err = error as AxiosError;

    const message = (err.response?.data as { message?: string })?.message || 'Unknown error';

    res.status(err.response?.status || 500).json({
      error: 'Verse lookup failed',
      message,
    });
  }
});

export default router;
