import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router();

// Get employee by employeeId
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findOne({ employeeId: req.params.id.toUpperCase() });
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        
        res.json(employee);
    } catch (error) {
        console.error('Error fetching employee:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
