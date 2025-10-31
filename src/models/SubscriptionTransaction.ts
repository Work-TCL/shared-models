import Mongoose from "mongoose";

const { Schema } = Mongoose;

const SubscriptionTransactionSchema = new Schema(
    {
        vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true},
        subscriptionId: { type: String, required: true },
        razorpayOrderId: { type: String },
        razorpayPaymentId: { type: String },
        amount: { type: Number },
        status: { type: String, enum: ['pending', "success", "failed"], default: "pending" },
        description: { type: String },
        event: { type: String },
    },
    { timestamps: true, versionKey: false }
);

export default SubscriptionTransactionSchema;
