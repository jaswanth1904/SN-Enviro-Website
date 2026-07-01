import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: 'https://ui-avatars.com/api/?name=Employee'
    },
    designation: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    techSkills: {
        type: [String],
        default: []
    },
    location: {
        type: String,
        default: 'Headquarters'
    },
    reportingManager: {
        type: String
    },
    bio: {
        type: String
    }
}, {
    timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
