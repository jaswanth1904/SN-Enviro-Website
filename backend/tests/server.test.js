import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server/index.js';

describe('Server Basics', () => {
  // Close database connection after tests to prevent open handles from keeping Jest alive
  afterAll(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  });

  it('should return 200 on the root API route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('SN Enviro Backend is running');
  });
});
