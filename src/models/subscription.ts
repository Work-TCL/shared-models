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
        enum: ['active', 'cancel'],  // Subscription status: active, cancelled, etc.
        default: 'active',
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { versionKey: false, timestamps: true });

export default SubscriptionSchema;


