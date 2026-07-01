import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Employee from './models/Employee.js';

dotenv.config({ path: './.env' });

const seedEmployees = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { family: 4 });
        console.log('✅ Connected to MongoDB Atlas');

        const mockEmployees = [
            {
                employeeId: 'SNE102',
                name: 'Jaswanth',
                role: 'Senior Software Engineer',
                department: 'Engineering',
                email: 'jaswanth@sn-enviro.com',
                phone: '+91 9876543210'
            },
            {
                employeeId: 'SNE103',
                name: 'John Doe',
                role: 'Environmental Analyst',
                department: 'Research',
                email: 'johndoe@sn-enviro.com',
                phone: '+91 9876543211'
            }
        ];

        // Clear existing employees
        await Employee.deleteMany({});
        console.log('Cleared existing employees');

        // Insert mock data
        await Employee.insertMany(mockEmployees);
        console.log('✅ Employees seeded successfully');

        process.exit();
    } catch (error) {
        console.error('❌ Error seeding employees:', error);
        process.exit(1);
    }
};

seedEmployees();
