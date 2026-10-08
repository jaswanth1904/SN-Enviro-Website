import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server/index.js';
import { describe, it, expect, afterAll } from 'vitest';

describe('Employee API Routes (Integration Tests)', () => {
  // Close database connection after tests to prevent open handles
  afterAll(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  });

  it('should return 404 for a non-existent employee ID', async () => {
    const res = await request(app).get('/api/employees/TEST_FAKE_ID_9999');
    
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('message', 'Employee not found');
  });
});
