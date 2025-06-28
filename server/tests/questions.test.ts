import request from 'supertest';
import app from '../index.js';

describe('Questions API', () => {
  let createdId = '';

  it('should create a new question', async () => {
    const response = await request(app).post('/api/questions').send({
      question: 'What does John 3:16 mean?',
      answer: 'It shows the depth of God’s love for humanity.',
      userId: 'test-user'
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.question).toBe('What does John 3:16 mean?');
    createdId = response.body._id;
  });

  it('should fetch all questions including the new one', async () => {
    const res = await request(app).get('/api/questions');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.find((q: { _id: string }) => q._id === createdId)).toBeTruthy();
  });

  it('should reject a bad request with missing question text', async () => {
    const res = await request(app).post('/api/questions').send({
      answer: 'Missing question field',
      userId: 'test-user'
    });
    expect(res.status).toBe(500); // adjust if you add validation later
    expect(res.body).toHaveProperty('error');
  });
});
