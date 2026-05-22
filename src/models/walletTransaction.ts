import Mongoose from "mongoose";

const { Schema } = Mongoose;

const WalletTransactionSchema = new Schema(
    {
        accountId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
        vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: false },
        walletId: { type: Schema.Types.ObjectId, ref: "Wallet", required: true },
        amount: { type: Number, required: true },
        type: { type: String, enum: ['DEPOSITE', 'WITHDRAW'], required: true },
        status: { type: String, enum: ['pending', "success", "failed"], default: "pending" },
        description: { type: String },
        orderId: { type: String }, // for deposite
        paymentSessionId: { type: String },
        paymentId: { type: String },
        paymentMethod: { type: String },
        error: { type: String, default: "" },
        fees: { type: Number, default: 0},
        tax: { type: Number, default: 0},
        walletImpactApplied: {type: Boolean, default: false}
    },
    { timestamps: true, versionKey: false }
);

export default WalletTransactionSchema;
