import Mongoose from 'mongoose';

const { Schema } = Mongoose;

// Plan Schema
const PlanSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: String,
        required: true,
    },
    priceLabel: {
        type: String,
    },
    currencyCode: {
        type: String,
        required: true
    },
    tier: {
        type: Number,
        required: true
    },
    description: {
        type: [String],
    },
    isActive: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: true
    },
}, { versionKey: false, timestamps: true });

export const PlanModel = Mongoose.model('Plan', PlanSchema);


