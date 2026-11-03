import mongoose from 'mongoose';

const clientErrorSchema = new mongoose.Schema({
    message: { type: String, required: true },
    stack: { type: String, default: '' },
    componentStack: { type: String, default: '' },
    url: { type: String, default: '' },
    userAgent: { type: String, default: '' },
    ip: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('ClientError', clientErrorSchema);
