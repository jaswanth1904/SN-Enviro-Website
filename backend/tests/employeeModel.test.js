import mongoose from 'mongoose';
import Employee from '../server/models/Employee.js';
import { describe, it, expect } from 'vitest';

describe('Employee Model (Unit Tests)', () => {
  it('should throw validation error if required fields are missing', async () => {
    const employee = new Employee({
      bio: 'Just a simple bio without required fields'
    });

    let err;
    try {
      await employee.validate();
    } catch (error) {
      err = error;
    }

    // Expect the Mongoose validation to catch the missing fields
    expect(err).toBeDefined();
    expect(err.errors.employeeId).toBeDefined();
    expect(err.errors.name).toBeDefined();
    expect(err.errors.email).toBeDefined();
  });

  it('should validate successfully when all required fields are present', () => {
    const validEmployeeData = {
      employeeId: 'EMP-999',
      name: 'Test Employee',
      role: 'Engineer',
      department: 'IT',
      email: 'test@snenviro.com',
      phone: '0000000000',
      designation: 'QA Tester',
      joinDate: new Date()
    };
    
    const employee = new Employee(validEmployeeData);
    
    // validateSync runs synchronously and returns undefined if everything is valid
    const err = employee.validateSync();
    
    expect(err).toBeUndefined();
    expect(employee.employeeId).toBe('EMP-999');
  });
});
