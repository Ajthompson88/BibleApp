import request from 'supertest';
import app from '../index.js'; // make sure you have .js due to ESM

describe('GET /api/verse/:bibleId/:reference', () => {
  const bibleId = 'de4e12af7f28f599-01'; // ✅ ESV Bible from API.Bible
  const validRef = 'John 3:16';
  const invalidRef = 'Junk 999:999';

  it('should return verse content for a valid reference', async () => {
    const res = await request(app).get(`/api/verse/${bibleId}/${encodeURIComponent(validRef)}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('text');
    expect(res.body).toHaveProperty('reference');
  });

  it('should return 404 for an invalid reference', async () => {
    const res = await request(app).get(`/api/verse/${bibleId}/${encodeURIComponent(invalidRef)}`);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});
