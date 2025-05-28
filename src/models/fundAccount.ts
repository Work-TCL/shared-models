// File: database/schema/FundAccountSchema.ts
import mongoose from "mongoose";

const { Schema } = mongoose;

const FundAccountSchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
    contact_id: { type: String, required: true }, // Razorpay contact ID
    fundAccount_id: { type: String, required: true }, // Razorpay fund account ID
    accountType: { type: String, enum: ['UPI', 'BANK'], required: true },
  },
  { timestamps: true, versionKey: false }
);

export default FundAccountSchema;
