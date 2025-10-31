
import mongoose from "mongoose";

const { Schema } = mongoose;

const BankAccountSchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
    beneficiaryId: { type: String, required: true }, // cashFree ID
    type: { type: String, enum: ['UPI', 'BANK'], required: true },
    bankName: {type: String},
    accountNumber: {type: String},
    ifsc: {type: String},
    accountHolderName: {type: String}
  },
  { timestamps: true, versionKey: false }
);

export default BankAccountSchema;