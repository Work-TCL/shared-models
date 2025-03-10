import Mongoose from 'mongoose';

const { Schema } = Mongoose;

// User Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        countryCode: { type: String, default: '+91' },
        number: { type: Number, default: 0 },
    },
    password: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { versionKey: false, timestamps: true });

export const UserModel = Mongoose.model('User', UserSchema);


