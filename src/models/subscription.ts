import Mongoose from 'mongoose';

const { Schema } = Mongoose;

// Plan Schema
const SubscriptionSchema = new Schema({
    subscription_id: {
        type: String,
        required: true,
        unique: true,
    },
    planId: {
        type: Schema.Types.ObjectId,
        ref: 'Plan',
        required: true,
    },
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: "Vendor",
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['recurring', 'one_time'],  // Define the type of subscription
    },
    status: {
        type: String,
        required: true,
        enum: ['created','active', 'cancelled'],  
        default: 'created',
    },
    paymentStatus: {
        type: String,
        enum: ['failed', 'success'],  
    },
    redirectUrl: {
        type: String,
        unique: true
    },
    startedAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { versionKey: false, timestamps: true });

export default SubscriptionSchema;


