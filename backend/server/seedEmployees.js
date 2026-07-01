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
                role: 'Engineering',
                designation: 'Senior Software Engineer',
                department: 'Web Development',
                email: 'jaswanth@sn-enviro.com',
                phone: '+91 9876543210',
                joinDate: new Date('2021-08-15'),
                techSkills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
                location: 'Hyderabad, India',
                reportingManager: 'Sarah Connor',
                bio: 'Passionate about building scalable web applications and intuitive user interfaces for environmental monitoring systems.'
            },
            {
                employeeId: 'SNE103',
                name: 'John Doe',
                role: 'Research',
                designation: 'Environmental Analyst',
                department: 'R&D',
                email: 'johndoe@sn-enviro.com',
                phone: '+91 9876543211',
                joinDate: new Date('2022-03-01'),
                techSkills: ['Data Analysis', 'Python', 'QGIS', 'Environmental Science'],
                location: 'Bangalore, India',
                reportingManager: 'Dr. Alan Grant',
                bio: 'Specializes in analyzing continuous emission data and modeling environmental impacts.'
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
