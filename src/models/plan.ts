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
        type: Number,
        required: true,
    },
    priceLabel: {
        type: String,
    },
    currencyCode: {
        type: String,
        required: true
    },
    // tier: {
    //     type: Number,
    //     required: true
    // },
    description: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        // required: true
    },
    plan_id: {
        type: String,
        required: true,
        unique: true,
    },
    period: {
        type: String
    },
    interval: {
        type: Number
    },
    commission: {
        type: Number,
    },
    productLimit: { 
        type: Number
    },
    allowCollaboration: {
        type: Boolean,
    },
    analytics: {
        type: Boolean,
    },
    prioritySupport: {
        type: Boolean,
    },
}, { versionKey: false, timestamps: true });

// export const PlanModel = Mongoose.model('Plan', PlanSchema);
export default PlanSchema;


