import request from 'supertest';
import app from '../index.js'; // ⚠️ requires `.js` due to ESM

describe('GET /api/bibles', () => {
  it('should return a list of Bibles', async () => {
    const res = await request(app).get('/api/bibles');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
import mongoose from 'mongoose';

afterAll(async () => {
  await mongoose.connection.close();
});
