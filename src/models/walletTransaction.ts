import Mongoose from "mongoose";

const { Schema } = Mongoose;

const WalletTransactionSchema = new Schema(
    {
        accountId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
        amount: { type: Number, required: true },
        type: { type: String, enum: ['recharge', 'withdraw'], required: true },
        description: String,
        razorpayPaymentId: String,
    },
    { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

export default WalletTransactionSchema;
